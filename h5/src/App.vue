<template>
 <div class="app-container">
    <div v-if="$route.path!=='/tab1'&&$route.path!=='/tab2'" class="app-title" @click="$router.go(-1)">
      <div>
         <van-icon name="arrow-left"  size="1.3rem" />
      </div>
      {{$route.meta.name}}
    </div>
     <!-- <e-xam01></e-xam01> -->
   <router-view ></router-view>
 </div>
</template>

<style lang="scss">
   .app-title{
      line-height: 45px;
      text-align: center;
      background: $color;
      color: $colorF;
      position: relative;
      >div{
         width: 100px;
         height: 100%;
         padding-left: 10px;
         color: $colorF;
         position: absolute;
         left:0;
         text-align: left;
         display: flex;
         align-items: center;
      }
   }
   .list-title{
        text-align: center;
        padding: 10px;
        background: #ec9bad;
        margin-bottom: 20px;
        color: rgba(255, 255, 255, 0.795);
        font-size: 25px;
        font-weight: bold;
        letter-spacing: 50px;
        border-radius: 5px;
    }
   .app-container{
     /* padding-top:48px; */
     /* padding-bottom:50px; */
     overflow-x:hidden;
   }
   div,ul,input,td,tr,tbody,table{
      box-sizing: border-box;
      font-size: 16px;
      color:#333;
   }
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
