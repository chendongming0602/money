<template>
    <div class="list-boxs">
        <div class="list-box" v-for="(t,i) in 3" :key="i" @click="listLook(i)">
            <img src="@/assets/imgs/all/logo.jpg" alt="">
            <div class="list-right">
                <div class="list-time">
                    <div>下单类型</div>
                    <div>20.10:1151</div>
                </div>
                <div>
                    <div class="list-active">状态</div>
                    <div class="list-money">¥<span>100</span></div>
                </div>
            </div>
        </div>

        <van-overlay :show="show" @click="show = false" class-name="list-over">
            <div  @click.stop>
                <div class="list-over-box">

                </div>
            </div>
        </van-overlay>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        listLook(){
            this.show=true;
        }
    }
}
</script>
<style lang="scss" scoped>
    .list-boxs{
        padding: 0px 20px 20px;
    }
    .list-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $border;
        padding: 20px 0;
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            min-width: 60px;
            min-height: 60px;
        }
        .list-right{
            display: flex;
            flex-grow: 1;
            justify-content: space-between;
            align-items: center;
            .list-time{
                margin-left: 10px;
                >div:nth-child(1){
                    font-weight: bold;
                    margin-bottom: 13px;
                }
                >div:nth-child(2){
                    margin-top: 13px;
                    font-size: 12px;
                    color: #999;
                }
            }
            .list-active{
                font-size: .75rem;
                padding: 5px 10px;
                background: $color;
                text-align: center;
                border-radius: .625rem;
                margin-bottom: 5px;
                color: #fff;
                transform: scale(0.9);
            }
            .list-money{
                margin-top: 5px;
                font-size: 1.125rem;
                color: crimson;
                font-weight: bold;
                span{
                    margin-left: 3px;
                    font-weight: bold;
                    color: crimson;
                }
            }
        }
    }
    .list-over{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .list-over-box{
        width: 300px;
        height: 500px;
        background: #fff;
    }
</style>