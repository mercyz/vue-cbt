<template>
    <div class="w-full">
        <div class="question mt-8 py-5 px-3 container mx-auto">
            <div class="w-2/4">
                <pagination v-if="questionsLoaded" :current="current">
                    <div :slot="'p'+ (index+1)" v-for="(question, index ) in questions" :key="index">
                        <p  class="py-3">{{question.question}}</p>
                        <options class="cursor-pointer" 
                            @choice="(optionIdx) => pickedAnswer(optionIdx, question.id)" 
                            :correct="question.isCorrect" 
                            :options="question.options" />
                    </div>
                </pagination>
                <div class="my-5">
                    <a @click="nextQuestion('DECREMENT')" class="cursor-pointer px-5 py-3 bg-blue-400 mr-4 text-white">Previous</a>
                    <a @click="submitAnswers" class="cursor-pointer px-5 py-3 bg-blue-400 text-white" v-if="current === (questions.length -1)">Submit</a>
                    <a @click="nextQuestion('INCREMENT')" class="cursor-pointer px-5 py-3 bg-blue-400 text-white" v-else>Next</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// import questions from '../../libs/factory';  
import Options from '../components/Options';
import Pagination from '../components/Pagination';
import { db } from '../firebaseConfig';


export default {
    name: "Question",
    components: {Options, Pagination},
    data: ()=> ({
        questions: [],
        questionsLoaded: false,
        current: 0,
        answers: {},
    }),
    created(){
            db.collection("tests")
            .where('subject_id', '==', 'oesluxd3XS5J6PCKFvAk').get()
            .then((querySnapshot) => {
                this.questions = []
                querySnapshot.forEach((item) => this.questions.push(item.data()))
                this.questionsLoaded = true;
            })

    },
    methods: {
        nextQuestion(type){
            if(type === 'INCREMENT')
                if(this.current < this.questions.length) this.current +=1 
        
            if(type === 'DECREMENT')
                if(this.current !== 0)this.current -=1
        },
        pickedAnswer(e, question_id) {
            this.answers[question_id] = e;
        },
        mapQA() {
            return this.answers;
        },
        submitAnswers(){
            // console.log(this.answers)
            let data = {
                category: "First2020",
                subject_id: "348945",
                user_id: "enapdoin30293naodin",
                score: {...this.answers},
                final_score:this.calculateFinalScore(),
            }
      
            db.collection("userTests").add(data).then((item) => {
                console.log('Document Uploaded:', item.id);
                }).catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        },
        calculateFinalScore(){
            let points = 0;
            
            for (let item of this.questions) {
                const answer = this.answers[item.id];
                const correctAnswer = item.isCorrect;
                if (answer == correctAnswer) points += 1
            }

            return points;
        }
    }
}
</script>