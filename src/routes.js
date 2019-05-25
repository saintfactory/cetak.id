import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Join from './components/Join.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/join', component: Join }
];

export default routes;