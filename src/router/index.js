import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Send from '@/components/send/send'
import User from '@/components/user/user'
import Message from '@/components/message/message'
import Detail from '@/components/detail/detail'
import About from '@/components/about/about'
import UserDetail from '@/components/userdetail/userdetail'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home/all"
    },
    {
      path:'/home/:type',
      name:'home',
      component:Index

    },
    {
      path:'/send',
      name:'send',
      component:Send
    },
    {
      path:'/message/:type',
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
      {
          path:'/about/',
          name:'about',
          component:About

      },
      {
          path:'/userdetail/:loginname',
          name:'userdetail',
          component:UserDetail

      },
      {
          path:'/login/',
          name:'login',
          component:Login

      },
  ],
  linkActiveClass: 'active'
})
