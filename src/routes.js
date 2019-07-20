import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Join from './components/Join.vue'
import TentangKami from './components/TentangKami.vue'
import CaraPrint from './components/CaraPrint.vue'
import RegisterUser from './components/RegisterUser.vue'
import RegisterPartnership from './components/RegisterPartnership.vue'
import DashboardUser from './components/user/Dashboard.vue'
import Dashboard from './components/partnership/Dashboard.vue'
import Profil from './components/partnership/Profil.vue'
import Produk from './components/partnership/Produk.vue'
import Pesanan from './components/partnership/Pesanan.vue'
import Dicetak from './components/partnership/Dicetak.vue'
import Order from './components/user/Order.vue'

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
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
        path: "/dashboard-partnership/:id",
        name: 'dashboard-partnership',
        component: Dashboard,
        children: [
            {
                path: '',
                component: Profil
            },
            {
                path: 'profil',
                component: Profil
            },
            {
                path: 'produk',
                component: Produk
            },
            {
                path: 'pesanan',
                component: Pesanan
            },
            {
                path: 'dicetak',
                component: Dicetak
            },
        ]
    },
    {
        path: '/dashboard-user',
        name: 'dashboard-user',
        component: DashboardUser,
    },
    

    {
        path: '/order',
        component: Order
    }
    
];

export default routes;