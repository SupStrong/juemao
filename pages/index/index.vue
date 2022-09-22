<template>
  <view class="template-bless tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
	  <view class="logo-banner">
	  	<image src="http://www.cofco.com/img/logo.png" mode=""></image>
	  </view>
    </tn-nav-bar>
	
	<view class="top-backgroup">
		<image class="backgroud-image" src="https://tnuiimage.tnkjapp.com/index_bg/basic_new.jpg" mode=""></image>
	</view>
	<swiperA></swiperA>
	<swiperB></swiperB>
	<swiperC></swiperC>
	<swiperD></swiperD>
	<swiperE></swiperE>
	<swiperF></swiperF>
	<swiperG></swiperG>
	<swiperH></swiperH>
	<swiperI></swiperI>
	<swiperJ></swiperJ>

    <!-- 底部背景图片-->
    <view class="login__bg login__bg--bottom">
      <image src="https://tnuiimage.tnkjapp.com/bless/bless-bottom.jpg" mode="widthFix"></image>
    </view>
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action" @click="navTuniaoUI">
        <view class="bar-icon">
          <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-home.png'></image>
        </view>
        <view class="tn-color-gray">首页</view>
      </view>
      <view class="action" @click="navTuniaoUI">
        <view class="bar-icon">      
          <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-flower.png'></image>
        </view>
        <view class="tn-color-gray">发现</view>
      </view>
      <view class="action bar-center" @click="navTuniaoHome">
        <view class="nav-index-button">
          <view class="nav-index-button__content">
              <view class="nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <!-- <view class="tn-icon-logo-tuniao"></view> -->
                <view class="bar-circle">
                  <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-tiger.png'></image>
                </view>
              </view>  
          </view>
        
          <view class="nav-index-button__meteor">
            <view class="nav-index-button__meteor__wrapper">
              <view v-for="(item,index) in 6" :key="index" class="nav-index-button__meteor__item" :style="{transform: `rotateX(${-60 + (30 * index)}deg) rotateZ(${-60 + (30 * index)}deg)`}">
                <view class="nav-index-button__meteor__item--pic"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
      
      <view class="action" @click="navTuniaoUI">
        <view class="bar-icon">
          <!-- <view class="tn-icon-image-text tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-china.png'></image>
        </view>
        <view class="tn-color-gray">祝福</view>
      </view>
      <view class="action" @click="navTuniaoUI">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-money.png'></image>
        </view>
        <view class="tn-color-gray">我的</view>
      </view>
    </view>
    
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import swiperA from '@/wxcomponents/swiper/swiper1.vue';
  import swiperB from '@/wxcomponents/swiper/swiper2.vue';
  import swiperC from '@/wxcomponents/swiper/swiper3.vue';
  import swiperD from '@/wxcomponents/swiper/swiper4.vue';
  import swiperE from '@/wxcomponents/swiper/swiper5.vue';
  import swiperF from '@/wxcomponents/swiper/swiper6.vue';
  import swiperG from '@/wxcomponents/swiper/swiper7.vue';
  import swiperH from '@/wxcomponents/swiper/swiper8.vue';
  import swiperI from '@/wxcomponents/swiper/swiper9.vue';
  import swiperJ from '@/wxcomponents/swiper/swiper10.vue';


  export default {
    name: 'index',
    mixins: [template_page_mixin],
    data(){
      return {
      }
    },
	components: {
		swiperA,
		swiperB,
		swiperC,
		swiperD,
		swiperE,
		swiperF,
		swiperG,
		swiperH,
		swiperI,
		swiperJ
	},
    onLoad() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-bless{
	  height: 100vh;
	  overflow: scroll;
  }
  page{
	  height:100vh;overflow: scroll;
  }
  .top-backgroup {
    height: 667rpx;
	z-index: -1;

	.backgroud-image {
	  width: 100%;
	  height: 667rpx;
	}
  }
  .login {
    position: relative;
    height: 100%;
    z-index: 1;
    
  /* 背景图片 start */
    &__bg {
      z-index: -1;
      position: fixed;
      
      &--top {
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        
        .bg {
          width: 750rpx;
          will-change: transform;
        }
        .rocket {
          margin: 50rpx 30%;
          width: 300rpx;
          will-change: transform;
        }
      }
      
      &--bottom {
        bottom: -10rpx;
        left: 0;
        right: 0;
        width: 100%;
        // height: 144px;
        // margin-bottom: env(safe-area-inset-bottom);
        
        image {
          width: 750rpx;
          will-change: transform;
        }
      }
    }
  }
  /* 背景图片 end */
    
    
    
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 999;
   // background-color: #FFFFFF;
   // box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
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
  
  .bar-center{
    animation: suspension 3s ease-in-out infinite;
  }
  
  @keyframes suspension {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.8rem);
    }
  }  
  
  .tabbar .action .bar-icon {
  	width: 100rpx;
  	position: relative;
  	display: block;
  	height: auto;
  	margin: 0 auto 10rpx;
  	text-align: center;
  	font-size: 42rpx;
    // line-height: 50rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
  
  .tabbar .action .bar-circle {
    position: relative;
    display: block;
    margin: 0rpx auto 0rpx;
    text-align: center;
    font-size: 52rpx;
    line-height: 90rpx;
    // background-color: #01BEFF;
    width: 100rpx !important;
    height: 100rpx !important;
    overflow: hidden;
    // border-radius: 50%;
    // box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
    //   0px -8px 40px rgba(255, 255, 255, 1),
    //   inset 0px -10px 10px rgba(70,23,129, 0.05),
    //   inset 0px 10px 20px rgba(255, 255, 255, 1);
    // box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
  }
  
  .tabbar .action .bar-circle image {
    width: 100rpx;
  	height: 100rpx;
  	display: inline-block;
    margin: 0rpx auto 0rpx;
  }
  
  /* 流星+悬浮 */
  .nav-index-button {
    animation: suspension 3s ease-in-out infinite;
    z-index: 999999;
    
    
    &__content {
      position: absolute;
      width: 100rpx;
      height: 100rpx;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;
        transform: scale(0.85);
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          // background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
        }
      }
    }
    
    &__meteor {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100rpx;
      height: 100rpx;
      transform-style: preserve-3d;
      transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
      
      &__wrapper {
        width: 100rpx;
        height: 100rpx;
        transform-style: preserve-3d;
        animation: spin 20s linear infinite;
      }
      
      &__item {
        position: absolute;
        width: 100rpx;
        height: 100rpx;
        border-radius: 1000rpx;
        left: 0;
        top: 0;
        
        &--pic {
          display: block;
          width: 100%;
          height: 100%;
          background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc2.png) no-repeat center center;
          background-size: 100% 100%;
          animation: arc 4s linear infinite;
        }
      }
    }
  }
  
  
  @keyframes suspension {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.6rem);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotateX(0deg);
    }
  
    100% {
      transform: rotateX(-360deg);
    }
  }
  
  @keyframes arc {
    to {
      transform: rotate(360deg);
    }
  }
  .logo-banner{
	  width: 70%;
	  height: 100%;
	  position: relative;
	  display: flex;
	  justify-content: space-evenly;
	  align-items: center;
	  box-sizing: border-box;
	  /* background-color: rgba(0, 0, 0, 0.15); */
	  border-radius: 1000rpx;
	  border: 1rpx solid rgba(255, 255, 255, 0.5);
	  color: #FFFFFF;
	  font-size: 36rpx;
	  margin: 0 auto;
	  image{
		  width: 100%;
		  height: 100%;
	  }
  }
</style>
