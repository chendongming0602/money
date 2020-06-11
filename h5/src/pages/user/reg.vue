<template>
    <div>
        <img class="reg-logo" src="../../assets/imgs/all/logo.jpg" alt="" >
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
                    :rules="[{ validator:isPhone, message: '请填写输入的手机号码' }]"
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
                    :rules="[{ validator:isPwd, message: '密码必须含有数字与字母,长度6~16位' }]"
                />
                <van-field
                    v-model="values.name"
                    type="text"
                    name="name"
                    label="用户名"
                    clearable
                    required
                    :error="false"
                    placeholder="请输入用户名"
                    :rules="[{ validator:isName, message: '请输入2~10位用户名' }]"
                />
                <div class="reg-check">
                    <van-field
                        v-model="values.sms"
                        type="password"
                        name="sms"
                        label="验证码"
                        clearable
                        :error="false"
                        required
                        placeholder="请输入验证码"
                        :rules="[{ required: true, message: '请输入验证码' }]"
                    />
                    <van-button :disabled="!isSms"  type="primary" round class="reg-check-but" @click="smsEvent">{{text}}</van-button>
                </div>
                <div class="reg-submit">
                    <van-button round block  >
                        注册
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
let time1=null;
export default {
    data(){
        return{
            values:{
                phone: '15659914166',
                pwd: 'a1565991416',
                sms:"",
                name:""
            },
            sec:0,
            text:"获取验证码",
            isSms:true,
            //验证码秒数
            secAll:20
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        //点击了获取验证码
        smsEvent(){
            //控制按钮
            if(!this.isSms) return;
            //必须密码和手机号正确才执行
            if(!this.isPhone(this.values.phone)||!this.isPwd(this.values.pwd)) return
            //使用store进行全局记秒
            this.$store.commit("sms",new Date().getTime());
            this.isSms=false;
            this.setTimeEvent();
        },
        setTimeEvent(){
            this.sec-=1;
            if(this.sec<=0){
                this.text="获取验证码";
                this.isSms=true;
                this.sec=this.secAll;
                clearTimeout(time1);
                return 
            } 
            this.text=`请稍后(${this.sec})`;
            time1=setTimeout(()=>{this.setTimeEvent()},1000);
        },
        smsStore(){
            let time=new Date().getTime(),smsTime=this.$store.getters.sms,
            allTime=time-smsTime;
            //如果还没到下一步验证码时间
            if(allTime<=this.secAll*1000){
                //将初始秒数-已经走了的秒数=剩下的
                this.sec=this.secAll-parseInt(allTime/1000);
                this.isSms=false;
                this.setTimeEvent();
            }
        },
        isPhone(val){
            return /^((\+86|0086)\s+)?1[3-8]\d{9}$/.test(val);
        },
        isPwd(val){
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val);
        },
        isName(val){
            return /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,10}$/.test(val);
        }
    },
    created(){
        this.sec=this.secAll;
        this.smsStore();
    },
    beforeDestroy(){
        clearTimeout(time1);
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
    .reg-check{
        display: flex;
        align-items: center;
        .reg-check-but{
            min-width: 120px;
            transform: scale(0.7);
            font-size: .75rem;
            background: $color;
            border: none;
            span{
                color: $colorF;
            }
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