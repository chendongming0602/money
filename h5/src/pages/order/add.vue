<template>
    <div class="add-box">
        <van-form @submit="onSubmit"  validate-first>
            <div class="add-title">订单类型</div>
            <div class="add-class">{{classs[0]}}</div>
            <van-popup v-model="showClass" round position="bottom">
                <van-picker
                    :default-index="0"
                    show-toolbar
                    :columns="classs"
                    @cancel="showClass = false"
                    @confirm="onClass"
                />
            </van-popup>

            <div class="add-title">部署平台</div>
            <div class="add-plat">
                <van-checkbox-group v-model="platform" direction="horizontal" @change="pleatEvent">
                    <van-checkbox v-for="(t,i) in plat" :key="i" checked-color="#62c8ca" :name="i" class="add-plat-item" >{{t.name}}</van-checkbox>
                </van-checkbox-group>
            </div>

            <div class="add-title">订单完成时间</div>
            <div class="add-class" :class="timeValue?'':'time-active'" @click="showTime = true">{{timeValue?mTime:'请选择订单完成时间'}}</div>
            <div>
                <van-popup v-model="showTime" round position="bottom">
                    <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        title="选择年月日"
                        name="time"
                       
                        @cancel="showTime = false"
                        @confirm="timeEvent"
                    />
                </van-popup>
            </div>

            <div class="add-title">订单说明</div>
            <div class="add-message">
                <van-field
                    v-model="message"
                    autosize
                    type="textarea"
                    placeholder="输入订单说明"
                    show-word-limit
                    maxlength="200"
                />
            </div>
            
             <div class="add-submit">
                <van-button round block  >
                    提交订单
                </van-button>
            </div>
            
        </van-form>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            showClass:false,
            classs: ['平台下单', '微信下单'],
            platform: [],
            plat:[
                {name:"H5网页"},
                {name:"微信H5"},
                {name:"移动APP"},
                {name:"微信小程序"},
            ],
            currentDate: new Date(),
            showTime:false,
            timeValue:null,
            mTime:"00:00:00",
            //更多说明
            message:"",
            //部署多选结果
            platValue:[],
            //时间选择的时间戳
        }
    },
    methods:{
        onSubmit(values) {
            console.log('submit', values);
        },
        onClass(e){
            console.log(e)
        },
        pleatEvent(e){
            this.platValue=e.map(t=>{return this.plat[t].name});
        },
        timeEvent(e){
            this.showTime=false;
            let time=new Date(e)
            this.timeValue=time.getTime();
            this.mTime=`${time.getFullYear()}年${time.getMonth()+1}月${time.getDate()}日`;
        }
    }
}
</script>
<style lang="scss" scoped>
    .add-box{
        padding: 0px 20px 20px;
    }
    .add-title{
        color: $color;
        font-size: 16px;
        font-weight: bold;
        // border-left: 3px solid $color;
        padding-left: 20px;
        position: relative;
        margin-top: 20px;
    }
    .add-title::after{
        content: "";
        width: 0px;
        height: 0px;
        position:absolute;
        border-left:10px solid $color;
        border-bottom:6px solid transparent;
        border-top:6px solid transparent;
        position: absolute;
        top: 2px;
        left: 0;
    }
    .add-class{
        text-align: center;
        color: #424242;
        padding: 20px 0;
        border-bottom: 1px solid $border;
        letter-spacing: 5px;
    }
    .time-active{
        color: #999;
    }
    .add-plat{
        padding: 0px 0 20px;
        border-bottom: 1px solid $border;
        display: flex;
        justify-content: space-between;
        .add-plat-item{
            margin-top: 20px;
        }
        .van-checkbox-group--horizontal{
            justify-content: space-between;
        }
    }
    .add-message{
        .van-cell{
            background: #f2f2f2;
            margin-top: 10px;
            border-radius: 10px;
            >>> .van-field__control{
                font-size: 14px;
            }
        }
    }
    .add-submit{
        margin: 50px 16px;
        button{
            background: $color;
            font-size: .75rem;
        }
        span{
            color:$colorF;
        }
    }
</style>