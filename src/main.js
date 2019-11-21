import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store'
// import ajax from './config/ajax'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	// 【路由匹配规则】
	routes
})

// 通过属性 router 注册到 vm 实例上，用来监听 URL 地址的变化，然后展示对应的组件
new Vue({
	el: '#app',
	router,
	store,
	render: c => c(App) //render是一个方法，自带一个形参createElement，这个参数也是一个方法，是用来创建vue 节点的，也就是html模板的，然后渲染(render)到指定的节点上
})
// .$mount('#app')
// store 是vuex 的东西
// mount 挂载