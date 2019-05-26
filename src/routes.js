import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Join from './components/Join.vue'
import TentangKami from './components/TentangKami.vue'
import CaraPrint from './components/CaraPrint.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/join', component: Join },
    { path: '/tentang-kami', component: TentangKami },
    { path: '/cara-print', component: CaraPrint }
];

export default routes;