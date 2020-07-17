<template>
  <div class="w-full">
    <div class="question flex flex-col items-center mt-8 py-5 px-3 container mx-auto">
      <div class="w-2/4 flex flex-col items-center mx-auto bg-white shadow-lg rounded-lg py-8 px-8">
        <p
          v-if="!questionsLoaded"
          class="text-center text-2xl text-purple-500 blink"
        >Fetching Questions...</p>
        <pagination v-if="questionsLoaded" :current="current">
          <div :slot="'p' + (index + 1)" v-for="(question, index) in questions" :key="index">
            <span class="text-sm">QUESTION</span>
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
          <Button color="white">Previous</Button>
        </a>
        <Button v-if="current === questions.length - 1" @click="confirmSubmit">FINISH</Button>
        <Button v-else @click="nextQuestion('INCREMENT')">Next</Button>
      </div>
    </div>
  <div class="modal" v-if="showModal">
      <div class="modal__overlay" @click="closeModal()">
        <div class="modal__container">
          <div class="modal__body">
            <h3 class="text-5xl font-bold">Congratulations!</h3>
            <p class="my-4">Hello! Username</p>
            <p>
              You've come to the final part of the test.<br/>
              Are you sure you want to submit? 
            </p>
            <div class="modal__footer flex  justify-between my-5 w-2/4">
             <!-- <button class="py-3 px-5 bg-pink-500 text-white">Cancel</button>  -->
             <button class="py-3 px-5 bg-green-500 text-white rounded cursor-pointer" @click="submitAnswers()">Submit</button>
            </div>
          </div>
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
  async created() {
    const questions = await getQuestionsBySubjectId("oesluxd3XS5J6PCKFvAk");
    this.questions = questions;
    this.questionsLoaded = true;
  },
  methods: {
    nextQuestion(type) {
      console.log("move ");
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
.modal__container{
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
  }
  @media screen and (max-width: 992px) {
    .modal__container{
      width: 90%;
    }
  }
  .modal__body{
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
</style>