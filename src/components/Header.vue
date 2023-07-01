<template>
    <div class="nav">
        <router-link  to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/update">Update Restaurant</router-link>
        <router-link to="/" @click="logout">Logout</router-link>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({name:'Home'})
        }
    }
};
</script>
