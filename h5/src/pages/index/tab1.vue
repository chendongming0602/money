<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#62c8ca">
            <van-swipe-item v-for="(t,i) in ban" :key="i">  
                <router-link :to="t.path"><img :src="require('@/'+t.img)" alt="ban"></router-link>
            </van-swipe-item>
        </van-swipe>
        <div class="tab1-box">
            <div class="tab1-title">
                商品栏
            </div>
            <div v-for="(t,i) in ban" :key="i">
                <router-link :to="t.path">
                    <div class="tab1-item">
                        <img :src="require('@/'+t.img)" alt="ban">
                        <div class="tab1-item-title">点击下单</div>
                        <div class="tab1-tiem-count">已成交<span>666</span>单</div>
                    </div>
                    
                </router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            ban:[
                {
                    img:"assets/imgs/all/logo.jpg",
                    path:"/reg"
                },
                {
                    img:"assets/imgs/all/logo.jpg",
                    path:"/login"
                },
                {
                    img:"assets/imgs/all/logo.jpg",
                    path:"/login"
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        height: 200px;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .tab1-box{
        padding: 20px;
        .tab1-title{
            font-size: 18px;
            font-weight: bold;
            // color: $color;
            border-left: 5px solid $color;
            padding-left: 10px;
        }
        .tab1-item{
            width: 100%;
            height: 150px;
            border-radius: 10px;
            border: 1px solid $color;
            position: relative;
            margin-top: 20px;
            img{
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: -1;
                border-radius: 10px;
                object-fit: cover;
            }
            .tab1-item-title{
                padding: 5px 10px;
                color: #fff;
                font-size: 12px;
                background: $color;
                width: fit-content;
                border-top-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .tab1-tiem-count{
                font-size: 12px;
                color: #ddd;
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 5px 10px;
                span{
                    font-size: 14px;
                    padding: 0 3px;
                    color: $color;
                }
            }
        }
    }

</style>