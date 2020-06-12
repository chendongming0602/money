<template>
    <div>
        <van-overlay :show="show"  class-name="ser">
            <div @click.stop>
                <div class="ser-content">
                    <div class="ser-title">
                        <div>微信扫码联系客服</div>
                        <div @click="index===0?index=1:index=0">切换</div>
                    </div>
                    <img   v-for="(t,i) in imgs" :key="i" v-if="index===i" :src="t" alt="ser" @click="serEvent(i,t)" >
                    <div class="ser-colse" @click="show = false"><van-icon name="cross" size="2rem" color="#bbb" /></div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import { ImagePreview } from 'vant';
export default {
    data(){
        return{
            show:false,
            imgs:[
                require('@/assets/imgs/ser/wx1.jpg'),
                require('@/assets/imgs/ser/wx2.jpg')
            ],
            index:0
        }
    },
    components: {
        [ImagePreview.Component.name]: ImagePreview.Component,
    },
    methods:{
        serEvent(i){
            ImagePreview({
                images:[
                ...this.imgs
                ],
                startPosition:i,
                closeable:true
            });
        },
        showEvent(){
            this.show=true;
        }
    }
}
</script>
<style lang="scss" scoped>
    .ser{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .ser-content{
        width: 300px;
        background: #fff;
        padding: 15px 20px 10px;
        border-radius: 16px;
        img{
            width: 200px;
            height: 200px;
            margin: 15px auto 0;
            border-radius: 5px;
            border: 1px solid $color;
        }
        .ser-colse{
            text-align: center;
            margin-top: 20px;
        }
    }
    .ser-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        div:nth-child(1){
            color: $color;
        }
        div:nth-child(2){
            width: 45px;
            text-align: center;
            line-height: 24px;
            font-size: .75rem;
            background: $color;
            color: $colorF;
            border-radius: 12px;
        }
    }
</style>