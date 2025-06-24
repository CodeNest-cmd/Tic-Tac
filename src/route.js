import { createRouter,createWebHistory } from "vue-router";

import game from "./sidebar/game.vue";
const router=createRouter({

    history:createWebHistory(),
    routes:[

        
        {path:"/game",component:game},
    ],

});
export default router;