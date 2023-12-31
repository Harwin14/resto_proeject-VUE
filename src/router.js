import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/signup",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "Add",
        component: Add,
        path: "/add",
    },
    {
        name: "Update",
        component: Update,
        path: "/update",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
