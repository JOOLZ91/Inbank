import { createApp } from 'vue'
import App from './App.vue'

import { BootstrapVue3 } from 'bootstrap-vue-3'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import PrimeVue from 'primevue/config'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import { store, key } from './store'
import './styles.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin)
app.use(store, key)
app.mount('#app')
