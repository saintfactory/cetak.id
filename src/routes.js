import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Join from './components/Join.vue'
import TentangKami from './components/TentangKami.vue'
import CaraPrint from './components/CaraPrint.vue'
import Secure from './components/Secure.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: Home 
    },
    { 
        path: '/login', 
        name: 'login',
        component: Login 
    },
    { 
        path: '/join', 
        component: Join 
    },
    { 
        path: '/tentang-kami', 
        component: TentangKami 
    },
    { 
        path: '/cara-print', 
        component: CaraPrint 
    },
    {
        path: "/secure",
        name: "secure",
        component: Secure
    }
];

export default routes;