<template>
    <div class="w-full">
        <div class="flex flex-col items-center mt-8 py-5 px-3 container mx-auto text-center">
            <h1 class="text-5xl py-5 mb-4">Welcome To Your CBT</h1>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cum modi reprehenderit eveniet sapiente.<br/> Ad quaerat aut pariatur dolorem, 
                voluptatem accusamus dolore officiis eos molestias similique<br/> aliquam porro inventore reprehenderit.</p>

            <div class="mt-5">
                <input type="text" class="py-3 px-8 shadow-lg rounded" required="required" v-model="code" placeholder="Enter CBT Code">
                <Button @click="submit">SUBMIT</Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "../components/form/Button"
export default {
    name: "Welcome",
    components: { Button },
    data: ()=>({
        code: "",
    }),
    methods:{
        submit(){
            let code = "34kEk23";
          console.log('Submitting');
          if(!code) throw Error('Invalide Cbt Code');
        }
    }
}
</script>