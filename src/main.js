import LayoutMain from '@/layouts/LayoutMain.vue'
import VueRouter from '@/router'
import { createPinia } from 'pinia'
import Mixin from '@/mixins'

import { createApp } from 'vue'

const pinia = createPinia()
const app = createApp(LayoutMain)
app.use(pinia)
app.use(VueRouter)
app.use(Mixin)
app.mount('#app')
