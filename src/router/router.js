import home from '../page/home/index.vue'
import item from '../page/item/index.vue'
import score from '../page/score/index.vue'

export default [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/item', component: item },
    { path: '/score', component: score }
]