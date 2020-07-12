<template>
    <div>
        <ul>
            <li class="py-3" 
            v-for="(option, index) in $props.options" 
            :key="option.index" @click="choice(index)"
            :class="{
                'bg-green-400': picked != null && $props.correct == index, 
                'bg-red-300': picked == index && $props.correct != index
            }"> 
                <span>{{index+1}}. </span> {{option}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Options",
    props: {
        options: {
            type: Array,
        },
        
        correct:{
            type:Number,
        }
    },
    data: ()=>({
        picked: null
    }),
    methods: {
        choice(index) {
            if(this.picked !== null) return 
            this.picked = index
            this.$emit('choice', this.picked)
        }
    }
}
</script>