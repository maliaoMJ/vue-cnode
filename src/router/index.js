import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Send from '@/components/send/send'
import User from '@/components/user/user'
import Message from '@/components/message/message'
import Detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path:'/home',
      name:'home',
      component:Index

    },
    {
      path:'/send',
      name:'send',
      component:Send
    },
    {
      path:'/message',
      name:'message',
      component:Message

    },
    {
      path:'/user',
      name:'user',
      component:User

    },
    {
      path:'/detail/:chapterId',
      name:'detail',
      component:Detail

    },
  ],
  linkActiveClass: 'active'
})
