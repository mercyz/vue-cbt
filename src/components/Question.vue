<template>
  <div class="w-full">
    <div class="question flex flex-col items-center mt-8 py-5 px-3 container mx-auto">
      <div class="w-2/4 flex flex-col items-center mx-auto bg-white shadow-lg rounded-lg">
        <p
          v-if="!questionsLoaded"
          class="text-center text-2xl text-purple-500 blink p-8"
        >Fetching Questions...</p>
        <pagination v-if="questionsLoaded" :current="current">
          <div
            :slot="'p' + (index + 1)"
            v-for="(question, index) in questions"
            :key="index"
            class="p-8"
          >
            <div class="flex justify-between">
              <span class="text-sm">QUESTION</span>
              <span class="text-sm opacity-50">{{ index + 1 }} of {{ questions.length }}</span>
            </div>
            <p class="py-3 text-2xl">{{ question.question }}</p>
            <options
              class="cursor-pointer"
              @choice="(optionIdx) => pickedAnswer(optionIdx, question.id)"
              :correct="question.isCorrect"
              :options="question.options"
            />
            <div
              v-if="answers[question.id] !== undefined"
              class="text-sm text-center tracking-widest text-blue-500 border block mx-auto w-auto p-3"
            >ANSWERED</div>
          </div>
        </pagination>
      </div>

      <div class="my-5" v-if="questionsLoaded">
        <a @click="nextQuestion('DECREMENT')">
          <Button
            :disabled="isFirstPage"
            :class="{'opacity-50': isFirstPage }"
            color="white"
          >Previous</Button>
        </a>
        <Button
          :disabled="isLastPage"
          :class="{'opacity-50': isLastPage }"
          @click="nextQuestion('INCREMENT')"
        >Next</Button>
        <!-- <Button :class="{'opacity-100': isLastPage, 'opacity-50': isFirstPage}"  @click="confirmSubmit">FINISH</Button> -->
      </div>
    </div>
  <div class="modal" v-if="showModal">
      <div class="modal__overlay" @click="closeModal()">
            <div class="bg-white shadow-xl p-4 mx-auto w-1/3 mt-20 rounded-lg text-center">
              <h3 class="text-3xl text-purple-500">Are you sure ?</h3>
              <p class="mt-5 mb-16 text-lg max-w-sm mx-auto opacity-75">
                By clicking Yes you agree that you have done and ready to submit
                your work
              </p>
              <Button @click="submitAnswers">YES, Submit</Button>
              <Button color="white">NO</Button>
            </div>
      </div>
  </div>

  </div>
</template>

<script>
// import questions from '../../libs/factory';
import Options from "../components/Options";
import Pagination from "../components/Pagination";
import Button from "../components/form/Button.vue";
import {
  getQuestionsBySubjectId,
  saveScoresForStudent
} from "../libs/questionHelper";

export default {
  name: "Question",
  components: { Options, Pagination, Button },
  data: () => ({
    questions: [],
    questionsLoaded: false,
    current: 0,
    answers: {},
    showModal: false,
  }),
  computed: {
    isFirstPage: vm => vm.current == 0,
    isLastPage: vm => vm.current === vm.questions.length - 1
  },
  async created() {
    const questions = await getQuestionsBySubjectId("oesluxd3XS5J6PCKFvAk");
    this.questions = questions;
    this.questionsLoaded = true;
  },
  methods: {
    nextQuestion(type) {
      if (type === "INCREMENT")
        if (this.current < this.questions.length) this.current += 1;

      if (type === "DECREMENT") if (this.current !== 0) this.current -= 1;
    },
    pickedAnswer(e, question_id) {
      this.$set(this.answers, question_id, e);
    },
    mapQA() {
      return this.answers;
    },
    submitAnswers() {
      // console.log(this.answers)
      this.showModal = false;
      let data = {
        category: "First2020",
        subject_id: "348945",
        user_id: "enapdoin30293naodin",
        score: { ...this.answers },
        final_score: this.calculateFinalScore()
      };

      saveScoresForStudent(data);
      this.$router.replace({ name: "Finished" });
    },
    calculateFinalScore() {
      let points = 0;

      for (let item of this.questions) {
        const answer = this.answers[item.id];
        const correctAnswer = item.isCorrect;
        if (answer == correctAnswer) points += 1;
      }

      return points;
    },
    confirmSubmit(){
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    }
  }
};
</script>

<style>
.blink {
  animation: blink 1s running infinite alternate 0s;
}

@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal{
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.modal__overlay{
  background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
}
</style>