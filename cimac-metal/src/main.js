import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'
const app = createApp(App)


// permet de modifier la méta description en fonction de la page visitée
router.afterEach((to) => {
    const description = document.querySelector('meta[name="description"]');
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (description && to.meta.description) {
        description.setAttribute('content', to.meta.description);
    }
})

app.use(router)

app.mount('#app')

