import createWebHistory, {createRouter} from 'vue-router'
import convert from "@/view/conversion/Hexconvert.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'convert',
            component: convert
        }
    ]
})

export default router