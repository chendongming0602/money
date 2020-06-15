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

        <!-- 订单详情 -->
        <van-overlay :show="show" class-name="list-over">
            <div  @click.stop>
                <div class="list-over-box">
                    <div class="list-close" @click="show = false"><van-icon name="cross" color="#62c8ca" size="1.2rem" /></div>

                    <div class="list-s-title">订单详情</div>
                    <div class="list-s-plat">
                        <div>产品类型</div>
                        <div class="list-s-p-item">
                            <div v-for="(t,i) in plat" :key="i">{{t.name}}</div>
                        </div>
                    </div>
                    <div class="list-s-is">
                        <div>是否部署</div>
                        <div ><van-checkbox v-model="checked" checked-color="#62c8ca" disabled>部署</van-checkbox></div>
                    </div>
                    <div class="list-s-time">
                        <div>订单完成时间</div>
                        <div>1263年10月13日</div>
                    </div>
                    <div class="list-s-money">
                       <div>订单金额</div>
                       <!-- <div class="list-s-count">￥<span>1323</span></div> -->
                       <div class="list-s-tj">正在统计</div>
                   </div>
                   <div class="list-s-more">
                        更多订单说明
                        <div>是都放假哦电视剧佛山的交际费收到了分开交地税缴费极地</div>
                   </div>
                   <div class="list-s-s">
                       订单状态
                       <div>点击支付</div>
                   </div>
                </div>
            </div>
        </van-overlay>

        
        <van-overlay :show="pay" @click="pay = false" z-index="9" class="list-pay">
            <div @click.stop>
                <div class="list-pay-box">
                    <div class="list-pay-title">请选择支付方式</div>
                    <div class="list-pay-imgs">
                        <div>
                            <img src="@/assets/imgs/all/wx.png" alt="wx">
                            微信支付
                        </div>
                        <div>
                            <img src="@/assets/imgs/all/zfb.png" alt="zfb">
                            支付宝
                        </div>
                    </div>
                </div>
            </div>
        </van-overlay>

    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            pay:false,
            plat:[
                {name:"H5网页"},
                {name:"微信H5"},
                {name:"移动APP"},
                {name:"微信小程序"},
            ],
            checked:true
        }
    },
    methods:{
        listLook(){
            this.show=false;
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
        width: 19.5rem;
        padding: 20px;
        border-radius: 10px;;
        background: #fff;
        position: relative;
        .list-close{
            position: absolute;
            top: 10px;
            right: 10px;
        }
        .list-s-title{
            text-align: center;
            font-size: 1.125rem;
            font-weight: bold;
            letter-spacing: 5px;
            padding-bottom: 10px;
        }
        .list-s-plat{
            display: flex;
            justify-content: space-between;
            align-items: center;
            >div:nth-child(1){
                font-weight: bold;
                color: $color;
                min-width: 5.3125rem;
                margin-right: 10px;
            }
            .list-s-p-item{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                flex-grow: 1;
                div{
                    padding: 5px 10px;
                    font-size: .75rem;
                    background: $color;
                    color: $colorF;
                    margin-top: 10px;
                    border-radius: 5px;
                    text-align: center;
                }
            }
        }
        .list-s-time{
            display: flex;
            align-items: center;
            margin-top: 30px;
            div{
                font-size: .75rem;
                color: #999;
            }
            div:nth-child(1){
                font-weight: bold;
                font-size: .875rem;
                color: $color;
                margin-right: 10px;
                min-width: 5.3125rem;
            }
        }
        .list-s-more{
            text-align: center;
            margin-top: 30px;
            color: $color;
            font-weight: bold;
            div{
                padding: 10px;
                background: #f2f2f2;
                font-size: .75rem;
                border-radius: 5px;
                margin-top: 10px;
                text-align: left;
                line-height: 20px;
                letter-spacing: 2px;
            }
        }
        .list-s-money{
            display: flex;
            margin-top: 30px;
            align-items: center;
            .list-s-count{
                margin-left: 10px;
                font-size: 1.125rem;
                color: crimson;
                font-weight: bold;
                span{
                    color: crimson;
                }
            }
            >div:nth-child(1){
                color: $color;
                font-weight: bold;
                font-size: .875rem;
                margin: 0;
                min-width: 5.3125rem;
            }
            .list-s-tj{
                font-size: 12px;
                border: 1px solid $color;
                padding: 5px 10px;
                border-radius: 10px;
                color: #999;
            }
        }
        .list-s-is{
            display: flex;
            align-items: center;
            margin-top: 30px;
           
            >div{
                color: $color;
                font-weight: bold;
                margin-right: 10px;
                min-width: 5.3125rem;
            }
        }
    }
    .list-s-s{
        text-align: center;
        margin-top: 30px;
        font-weight: bold;
        color: $color;
        div{
            margin-top: 20px;
            padding: 10px;
            background: $color;
            color: $colorF;
            border-radius: 5px;
            font-weight: bold;
        }
    }
    .list-pay{
        display: flex;
        justify-content: center;
        align-items: center;
        .list-pay-box{
            width: 18.75rem;
            padding: 20px;
            border-radius: 10px;
            background: $colorF;
            .list-pay-title{
                text-align: center;
                font-size: 1.25rem;
                font-weight: bold;
                letter-spacing: 5px;
            }
            .list-pay-imgs{
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 30px;
                img{
                    width: 80px;
                    height: 80px;
                     margin-bottom: 10px;
                }
                div{
                    text-align: center;
                    font-weight: bold;
                }
                div:nth-child(1){
                    color: #40ba49;
                }
                div:nth-child(2){
                    color: #4b9ffe;
                }
            }
        }
    }
</style>