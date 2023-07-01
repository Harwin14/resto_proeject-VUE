<template>
    <Header />
    <h1 class="text-2xl">Hello {{ name }}, Welcome on Home Page</h1>
    <table class="min-w-full divide-y divide-gray-200">
        <tr > 
            <th class="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th class="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th class="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th class="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
        </tr>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-200"  v-for="(resto, index) in restaurant" :key="resto.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ resto.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ resto.contact }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ resto.address }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
    name: "Home",
    data() {
        return {
            name: "",
            restaurant: [],
        };
    },
    components: {
        Header,
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        console.log(JSON.parse(user));

        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "Login" });
        }
        let result = await axios.get("http://localhost:3001/restaurant");
        console.log(result.data);
        this.restaurant = result.data;
    },
};
</script>
