//1.引入vue
import Vue from 'vue'
//2.引入axios库
import axiosP from 'axios';
import router from '../router';
import store from '@/store'//引入store(vuex)
import { Notify } from 'vant';
//import {config} from '@/utils/config'//引入公用文件
axiosP.defaults.timeout =3000;//请求超时时间

axiosP.interceptors.request.use(//请求拦截
    config => {
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // let token =sessionStorage.getItem('token');
        let token=store.getters.token;
        if (token) {//如果有token给请求头加上
            config.headers.common['token'] =token
        }
        return config
    },

    err => {
        return Promise.reject(err);
    }

)

axiosP.interceptors.response.use(response => {//相应拦截
    if(response.data.code==401){//如果token为空或者过期，跳到登录
        store.dispatch("token","");
        router.push({path:"/login"});
    }
    return response;
}
    ,err=>{
        return Promise.reject(err)
    }
);
// axiosP.defaults.baseURL=""
// axiosP.defaults.withCredentials = true; 
const axios=function({path,method="GET",data={}}={}){
    return new Promise((resolve,reject)=>{
        let datas={params:{...data}}
        if(method==="POST") datas={...{data}};
        axiosP({
            url:`/api${path}`,
            method,
            ...datas
        }).then(res=>{
            if(res.data.code===200) return resolve(res.data.data);
            reject(res.data);
            Notify(res.data.msg||'数据出错了~~~');
        }).catch(err=>{
            Notify('数据出错了~~~');
            reject(err)
        })
    })
};
// let adminEvents=()=>{//判断是否为高级会员
//     let user=store.getters.info;
//     if(user.admin) return false;
//     return true
// }
//3.设置跨域请求保护session
// axios.defaults.withCredentials=true;
//4.设置请求服务器基础路径

//5.将axios注册  Vue示例
Vue.prototype.axios=axios;
// Vue.prototype.adminEvents=adminEvents;
//7.在main.js 引入axios即可


