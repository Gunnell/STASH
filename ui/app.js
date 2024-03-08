

const routes = [
  { path: '/home', component: home },
  { path: '/inventory', component: inventory },
  { path: '/item', component: item }
]


const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
const app = Vue.createApp({})
app.use(router)
app.mount('#app')