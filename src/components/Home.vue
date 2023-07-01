<template>
    <Header />
    <h1 class="text-2xl">Hello {{ name }}, Welcome on Home Page</h1>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'Home',
    data(){
        return{
            name:''
        }
    },
    components:{
        Header
    },
    mounted(){
            let user = localStorage.getItem('user-info')
            console.log(JSON.parse(user))
            
            this.name = JSON.parse(user).name
            if(!user){
                this.$router.push({name:'Login'})
            }
        }
}
</script>