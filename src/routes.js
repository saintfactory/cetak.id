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
import Monitoring from './components/partnership/Monitoring.vue'
import Etalase from './components/partnership/Etalase.vue'
import VendorDetail from './components/user/VendorDetail.vue'
import Completed from './components/user/Completed.vue'
import Vendors from './components/user/Vendors.vue'
import ProfilUser from './components/user/Profil.vue'
import Histori from './components/user/Histori.vue'
import Notifikasi from './components/user/Notifikasi.vue'

//const url = 'http://127.0.0.1:8000/api/board/'

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
                path: 'monitoring',
                component: Monitoring
            },
            {
                path: 'etalase',
                component: Etalase
            },
        ]
    },
    {
        path: '/dashboard-user/:id',
        component: DashboardUser,
        name: 'dashboard-user',
        props: true,
        children: [
            {
                path: '',
                component: DashboardUser
            },
            {
                path: 'vendors',
                component: Vendors,
                name: 'vendors',
            },
            {
                path: 'vendor-detail/:id',
                component: VendorDetail,
                name: 'vendor-detail',
                props: true,
                params: {
                    id: 'id',
                }
            },
            {
                path: 'completed',
                name: 'completed',
                component: Completed
            },
            {
                path: 'profil',
                name: 'profil-user',
                component: ProfilUser
            },
            {
                path: 'histori',
                name: 'histori',
                component: Histori
            },
            {
                path: 'notifikasi',
                name: 'notifikasi',
                component: Notifikasi
            }
        ]
    },
    
    
    
];

export default routes;