<template>
    <div>
        <img class="reg-logo" src="../../assets/imgs/all/logo.jpg" alt="logo" >
        <div class="reg-form" >
            <van-form @submit="onSubmit"  validate-first>
                <van-field
                    class="reg-input"
                    v-model="values.phone"
                    name="account"
                    clearable
                    :error="false"
                    type="tel"
                    label="手机号码"
                    placeholder="请输入手机号码"
                    required
                    :rules="[{ validator:isPhone, message: '请输入正确的手机号码' }]"
                />
                <van-field
                    v-model="values.pwd"
                    type="password"
                    name="password"
                    label="密码"
                    clearable
                    required
                    :error="false"
                    placeholder="请输入密码"
                />
                <div class="reg-submit">
                    <van-button round block  >
                        登录
                    </van-button>
                </div>
                <router-link to="/reg">
                    <div class="reg-submit reg-login">
                        <van-button round block  native-type="button">
                            注册账号
                        </van-button>
                    </div>
                </router-link>
            </van-form>
        </div>

    </div>
</template>
<script>
import { Notify } from 'vant';
export default {
    data(){
        return{
            values:{
                phone:"15659914166",
                pwd:"a1565991416"
            }
        }
    },
    methods:{
        async loginPOST(data){
            this.axios({
                path:"/user/user/login",
                method:"POST",
                data
            }).then(res=>{
                this.$store.dispatch("token",res);
                Notify({
                    message: '登录成功',
                    color: '#fff',
                    background: '#62c8ca',
                });
                this.$router.push("/");
            }).catch(err=>{
                Notify("请输入正确用户名或者密码！")
            })
        },
        onSubmit(values) {
            this.loginPOST(values)
            // console.log('submit', values);
        },
        isPhone(val){
            return /^((\+86|0086)\s+)?1[3-8]\d{9}$/.test(val);
        },
    },
    created(){
       
    }
}
</script>
<style lang="scss" scoped>
    .reg-logo{
        width: 100px;
        height: 100px;
        margin: 50px auto 0;
    }
    .reg-form{
        padding: 0 10px;
        margin-top: 50px;
        >>> .van-field__label{
            width: 70px;
        }
        >>> input{
            font-size: .875rem;
        }
    }
    .reg-submit{
        margin: 30px 16px 20px;
        button{
            background: $color;
            font-size: .75rem;
        }
        span{
            color:$colorF;
        }
    }
    .reg-login{
        margin-top: 0px;
        button{
            background: #ccc;
        }
    }
</style>