<template>
  <view class="template-food tn-safe-area-inset-bottom">
    <swiper class="card-swiper tn-margin-top-sm" :circular="true"
      :autoplay="true" duration="500" interval="5000" previous-margin="75rpx" next-margin="75rpx" @change="cardSwiper"> 
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <view class="swiper-item image-banner">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
        </view>
        <view class="swiper-item-text">
          <view class="tn-text-xxl tn-text-bold">{{item.name}}</view>
          <view class="tn-text-sm tn-text-bold tn-padding-top-xs">{{item.text}}</view>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
        <block v-for="(item,index) in swiperList" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view>
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/food-home.png'></image>
        </view>
        <view class="tn-color-black">小吃</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-watercup tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/food-buy.png'></image>
        </view>
        <view class="tn-color-gray">奶茶</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-ticket tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/food-list.png'></image>
        </view>
        <view class="tn-color-gray">面包</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/food-my.png'></image>
        </view>
        <view class="tn-color-gray">雪糕</view>
      </view>
    </view>
    
    <!-- 回到首页悬浮按钮-->
    <nav-index-button></nav-index-button>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplateFood',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          name: '麻辣香锅',
          text: '广东人的微微辣',
          url: 'https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg',
        }, {
          id: 1,
          type: 'image',
          name: '太二酸菜鱼',
          text: '当然是酸菜鱼+酸菜罐子啦',
          url: 'https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg',
        }, {
          id: 2,
          type: 'image',
          name: '蛙小侠',
          text: '打卡蒜香牛蛙',
          url: 'https://tnuiimage.tnkjapp.com/swiper/swiper1.jpg',
        }, {
          id: 3,
          type: 'image',
          name: '九毛九',
          text: '打卡大酱骨',
          url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
        }, {
          id: 4,
          type: 'image',
          name: '牛小灶',
          text: '冬天必打卡',
          url: 'https://tnuiimage.tnkjapp.com/swiper/swiper2.jpg',
        }],
      }
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      margin-left: 30rpx;
      flex-basis: 5%;
    }
    
    &__search {
      flex-basis: 70%;
      width: 100%;
      height: 100%;
      
      &__box {
        width: 100%;
        height: 70%;
        padding: 15rpx 0;
        margin: 0 30rpx;
        border-radius: 10rpx;
        font-size: 24rpx;
      }
      
      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      
      &__text {
        color: #AAAAAA;
      }
    }
  }
  .logo-image{
    width: 65rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  /* 轮播 start*/
  .card-swiper {
    height: 60vh !important;
  }
  
  .card-swiper swiper-item {
    width: 600rpx !important;
    // left: 75rpx;
    box-sizing: border-box;
    padding: 0rpx 20rpx 0rpx 20rpx;
    overflow: initial;
  }
  
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 45vh;
    border-radius: 20rpx 20rpx 0 0;
    transform: scale(1);
    transition: all 0.3s ease-in 0s;
    overflow: hidden;
  }
  
  .card-swiper swiper-item.cur .swiper-item {
    transform: scale(1);
    transition: all 0.3s ease-in 0s;
  }
  
  .card-swiper swiper-item .swiper-item-text {
    padding: 20rpx;
    width: 100%;
    display: block;
    height: 140rpx;
    border-radius: 0 0 20rpx 20rpx;
    transform: none;
    transition: all 0.4s ease 0s;
    overflow: hidden;
    color: #000000;
    background-color: rgba(255,255,255,1);
    box-shadow: 0rpx 30rpx 30rpx 0rpx rgba(0,0,245, 0.08);
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    transition: all 0.4s ease 0s;
    text-shadow: 0rpx 10rpx 20rpx rgba(0,0,0,0.1);
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
/* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    opacity: 0.8;
    width: 10rpx;
    height: 10rpx;
    border-radius: 50%;
    margin: 0 8rpx !important;
    position: relative;
    background-color: #3165CC;
  }
  
  .spot.active{
    opacity: 1;
    width: 35rpx;
    height: 35rpx;
    border: 2rpx solid #3165CC;
    background-color: #FFFFFF;
  }
  
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 999;
   background-color: #FFFFFF;
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .tabbar {
    display: flex;
    align-items: center;
    min-height: 110rpx;
    justify-content: space-between;
  	padding: 0;
  	height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
  }
  
  .tabbar .action {
  	font-size: 22rpx;
  	position: relative;
  	flex: 1;
  	text-align: center;
  	padding: 0;
  	display: block;
  	height: auto;
  	line-height: 1;
  	margin: 0;
  	overflow: initial;
  }
  
  .tabbar .action .bar-icon {
  	width: 100rpx;
  	position: relative;
  	display: block;
  	height: auto;
  	margin: 0 auto 10rpx;
  	text-align: center;
  	font-size: 42rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
</style>
