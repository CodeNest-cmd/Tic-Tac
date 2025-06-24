import { createRouter,createWebHistory } from "vue-router"
import product from "./sidebar/product.vue";
import game from "./sidebar/game.vue";
const router=createRouter({

    history:createWebHistory(),
    routes:[

        {path:"/product",component:product},
        {path:"/game",component:game},
    ],

});
export default router;