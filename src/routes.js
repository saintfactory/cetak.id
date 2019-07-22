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
import Completed from './components/user/Completed.vue'
import ListVendor from './components/user/ListVendor.vue'

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
        path: '/dashboard-partnership/:id',
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
        path: '/dashboard-user/:id',
        component: DashboardUser,
        children: [

            {
                path: 'list-vendor',
                component: ListVendor,
                name: 'list-vendor'
            },
            {
                path: 'order',
                component: Order
            },
            {
                path: 'completed',
                name: 'completed',
                component: Completed
            }
        ]
    },
    
    
    
];

export default routes;