import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/Login"
import Herramientas from "./components/Herramientas"

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        { path: '/', component: Login },
        { path: '/herramientas', component: Herramientas }
    ]
})