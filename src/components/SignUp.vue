<template>
    <div class="flex flex-col justify-center items-center h-[70vh]">
        <div class="mb-2 flex gap-2 w-full items-center justify-center">
            <img src="../assets/vue.svg" alt="" />
            <h1 class="text-4xl font-extrabold">Sign Up</h1>
        </div>
        <div class="flex flex-col justify-center items-center">
            <input
                class="form-input"
                type="text"
                placeholder="Enter Name"
                v-model="name"
            />
            <input
                class="form-input"
                type="text"
                placeholder="Enter Email"
                v-model="email"
            />
            <input
                class="form-input"
                type="password"
                placeholder="Enter Password"
                v-model="password"
            />
            <button class="btn-primary" @click="signUp">Sign Up</button>
            <p>
                <router-link to="/login">login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3001/users", {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            console.log(result);
            if (result.status == 201) {
                
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name:'Home'})
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info')
            if(user){
                this.$router.push({name:'Home'})
            }
        }
    },
};
</script>
