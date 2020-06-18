<template>
    <div>
        <!-- <div class="index-title">哈哈哈哈</div> -->
        <router-view></router-view>
        <Tabs @tabs="tabsEvent" :index="index"></Tabs>
        <div class="index-bottom"></div>
    </div>
</template>
<script>
import Tabs from "@/components/tabs/tabs";
export default {
    data(){
        return{
            tab:[
                {
                    path:"/tab1"
                },
                {
                    path:"/tab2"
                }
            ],
            index:0,
        }
    },
    methods:{
        tabEvent(i){
            this.$router.push(this.tab[i].path)
        },
        tabsEvent(i){
            let {index}=i;
            if(index===this.index) return;
            //store进行保存目前在哪个tab
            this.$store.commit("tab",index);
            this.index=index;
            this.tabEvent(index);
        }
    },
    created(){
        this.tabsEvent({index:this.$store.getters.tab});
    },
    components:{
        Tabs
    }
}
</script>
<style lang="scss" scoped>
    .index-title{
        line-height: 45px;
        text-align: center;
        letter-spacing: 5px;
        background: $color;
        color: $colorF;
        font-size: 1rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .index-bottom{
        height: 50px;
    }
</style>