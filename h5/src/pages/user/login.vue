<template>
    <div>
        <img class="reg-logo" src="../../assets/imgs/all/logo.jpg" alt="logo" >
        <div class="reg-form" >
            <van-form @submit="onSubmit"  validate-first>
                <van-field
                    class="reg-input"
                    v-model="values.phone"
                    name="phone"
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
                    name="pwd"
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
            </van-form>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            values:{
                phone:"",
                pwd:""
            }
        }
    },
    methods:{
        onSubmit(values) {
            console.log('submit', values);
        },
        isPhone(val){
            return /^((\+86|0086)\s+)?1[3-8]\d{9}$/.test(val);
        },
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
        margin: 30px 16px;
        button{
            background: $color;
            font-size: .75rem;
        }
        span{
            color:$colorF;
        }
    }
</style>