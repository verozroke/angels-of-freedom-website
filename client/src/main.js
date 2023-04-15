import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import './style.css'
import { languages, defaultLocale } from './i18n/index'
import { createI18n, useI18n} from 'vue-i18n'

const messages = Object.assign(languages)

const i18n  = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'ru',
    messages
})


createApp(App, {
    setup() {
        const { t } = useI18n()
        return {t}
    }
}).use(router).use(i18n).mount('#app')
