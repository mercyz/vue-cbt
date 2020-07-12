<template>
    <div class="w-full h-screen  flex  justify-center items-center mx-auto">
        <div class="login__container shadow-md flex flex-col bg-white md:mx-auto mx-2 rounded ">
            <h3 class="text-center text-2xl font-bold uppercase pt-4">Login</h3>
            <form class="px-8 pt-6 pb-8 mb-4" method="POST" @submit.prevent="userLogin">
                <div class="mb-4">
                     <label class="block text-gray-700 text-sm  mb-2" for="username">
                    Username</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"  id="username" v-model="form.username"  type="text" placeholder="Username" name="username">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm  mb-2" for="password">
                    Password</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"  id="password" v-model="form.password" type="password" placeholder="Password" name="password">
                </div>
                 <div class="flex justify-between items-center mb-4">
                    <button class="btn px-5 py-3 bg-blue-500 text-white rounded focus:outline-none">Sign In</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { login } from "../../../libs/api";
export default {
    name: "Login",
    data: () => ({
        form: {
            username: "", 
            password: "",
            },
    }),
    methods:{
        userLogin(){
            const { form } = this
            return login(form)
        }
    }
}
</script>