import { createRouter, createWebHistory } from "vue-router";

//importazione componenti vue
import Home from "./pages/Home.vue";
import Show from "./pages/Show.vue";
import Welcome from "./pages/Welcome.vue";


//definizione rotte
const routes = [
    {//rotta alla homepage
        path: "/home",
        name: "home",
        component: Home,
    },

    {//rotta allo show
        path: "/project/:id",
        name: "project.show",
        component: Show,
    },

    {//rotta alla welcome
        path: "/",
        name: "welcome",
        component: Welcome,
    },

]

//istanza di router
const router = createRouter({
    //gestione dell'url al cambio pagina
    history: createWebHistory(),
    //restituiamo l'array delle rotte creato
    routes,
});

export { router };