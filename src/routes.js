import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Join from './components/Join.vue'
import TentangKami from './components/TentangKami.vue'
import CaraPrint from './components/CaraPrint.vue'
import RegisterUser from './components/RegisterUser.vue'
import RegisterPartnership from './components/RegisterPartnership.vue'
import DashboardPartnership from '../partnership/src/components/Dashboard.vue'
import DashboardUser from '../user/src/components/Dashboard.vue'

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
        path: '/register-user',
        name: 'register-user',
        component: RegisterUser
    },
    {
        path: '/register-partnership',
        name: 'register-partnership',
        component: RegisterPartnership
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
        path: "/dashboard-partnership",
        name: "dashboard-partnership",
        component: DashboardPartnership
    },
    {
        path: '/dashboard-user',
        name: 'dashboard-user',
        component: DashboardUser
    }
];

export default routes;