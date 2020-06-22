<template>
    <div>
        <div class="tab2-top">
            <div>
                <img  src="@/assets/imgs/all/logo.jpg" alt="logo" >
                {{list.name}}
            </div>
        </div>
        <div class="tab2-list">
            <router-link to="/list">
                <div class="tab2-item">
                    <van-icon name="cart-circle" color="#62c8ca" size="1.8rem" />
                    <div>我的订单</div>
                </div>
            </router-link>
            <div class="tab2-item" @click="$refs.ser.showEvent()">
                <van-icon name="manager" color="#62c8ca" size="1.8rem" />
                <div >我的客服</div>
            </div>
            <div class="tab2-item">
                <van-icon name="share" color="#62c8ca" size="1.8rem" />
                <div>退出登录</div>
            </div>
        </div>
        <!-- 客服 -->
        <Service ref="ser"></Service>
    </div>
</template>
<script>
import Service from "@/components/service/service";
export default {
    data(){
        return{
            show:true,
            list:{}
        }
    },
    methods:{
        async listGET(){
            let token=this.$store.getters.token
            let res=await this.axios({
                path:"/user/user/userInfo",
                data:{
                    token
                }
            });
            this.$store.dispatch("user",res);
            this.list=res;
        }
    },
    components:{
        Service
    },
    created(){
        this.listGET();
    }
}
</script>
<style lang="scss" scoped>
    .tab2-top{
        width: 100%;
        height: 230px;
        background: linear-gradient(180deg,$color 0%,#fff 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 50px;
        div{
            // color: $colorF;
            font-weight: bold;
            letter-spacing: 5px;
            font-size: 1rem;
        }
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 15px;
            border: 2px solid $colorF;
        }
    }
    .tab2-list{
        padding: 0 25px 0;
        .tab2-item{
            display: flex;
            align-items: center;
            border-top: 1px solid $border;
            border-bottom: 1px solid $border;
            padding: 5px;
            margin-top: 20px;
            >div{
                font-weight: bold;
                margin-left: 15px;
                color: $color;
            }
        }
    }
</style>