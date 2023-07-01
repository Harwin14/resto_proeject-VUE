<template>
    <Header />
    <h1 class="text-2xl">Hello User, Welcome on Add Page</h1>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'Add',
    components:{
        Header
    },
    mounted(){
            let user = localStorage.getItem('user-info')
            if(!user){
                this.$router.push({name:'Login'})
            }
        }
}
</script>