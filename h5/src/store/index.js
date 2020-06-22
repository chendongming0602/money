import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    //手机验证码
    sms:0,
    //保存目前在哪个tab
    tab:0,
    token:"",
    //用户信息
    user:{}
};
const getters={//读取值(this.$store.getters.isList)
    sms:state=>state.sms,
    tab:state=>state.tab,
    token:state=>state.token,
    user:state=>state.user,
};
const mutations={//同步修改值(this.$store.commit("changeList",this.list2);)
    sms(state,value){
        state.sms=value
    },
    tab(state,value){
        state.tab=value
    },
    token(state,value){
        state.token=value
    },
    user(state,value){
        state.user=value
    }
}
const actions={//异步修改值(this.$store.dispatch('actionChange',this.list3))
    user(context,value){
        context.commit("user",value)
    },
    token(context,value){
        context.commit("token",value)
    },
    
}
const store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions
   });

export default store;

// computed:{//监听vuex变化
//     listData(){
//         return this.$store.getters.readList
//     }
// },
// watch:{
//     listData(){
//         console.log(895)
//     },
   
// }