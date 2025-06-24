import { createRouter,createWebHistory } from "vue-router";
import home from "./sidebar/home.vue";
import contact from "./sidebar/contact.vue";
import product from "./sidebar/product.vue";
import game from "./sidebar/game.vue";
const router=createRouter({

    history:createWebHistory(),
    routes:[
        {path:"/",component:home},
        {path:"/contact",component:contact},
        {path:"/product",component:product},
        {path:"/game",component:game},
    ],

});
export default router;