<template>
    <div class="flex">
        <span>{{hours}}</span>
        <span>{{minutes}}</span>
        <span>{{seconds}}</span>
    </div>
</template>

<script>
export default {
    name: "Timer",
    created(){
        let dist =  new Date().getTime() - 30;
        this.timerCountDown(dist)
        console.log(this.timerCountDown(dist))
    },
    data: ()=>({
        hours:"",
        minutes:"",
        seconds: ""
    }),
    methods:{
        timerCountDown(dist){
            this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((dist % (1000 * 60)) / 1000)
        }
    }
}
</script>