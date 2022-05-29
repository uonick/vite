import LayoutMain from '@/layouts/LayoutMain.vue'
import VueAxios from 'vue-axios'
import VueRouter from '@/router'
import Mixin from '@/mixins'
import Middleware from '@/middleware'
import Store from '@/store'

import { createApp } from 'vue'

const app = createApp(LayoutMain)

app.use(VueAxios, Middleware).use(VueRouter).use(Store).mixin(Mixin)

app.mount('#app')
