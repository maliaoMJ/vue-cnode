import Vue  from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
  	// 是否登录 默认为false
  	isLogin:false,
  	userData:null,
  	accesstoken:'',

  },
  getters:{
  	getUserData(state){
     return state.userData;
  	},
  	getLoginState(state){
  		return state.isLogin;
  	},
  	getAccessToken(state){
  		return state.accesstoken;
  	}
  },
  mutations:{
  	setUserData(state,payload){
      state.userData = payload;
      return state.userData;
  	},
  	setLoginState(state,payload){
  		state.isLogin = payload;
  	},
  	setAccessToken(state,payload){
       state.accesstoken = payload;
  	}
  },
  actions:{
  	setUserData(context,payload){
      context.commit('setUserData',payload);
  	},
  	setLoginState(context,payload){
  	  context.commit('setLoginState',payload);
  	},
  	setAccessToken(context,payload){
       context.commit('setAccessToken',payload);
  	}
  }


})
export { store }