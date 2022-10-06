<template>
  <view class="template-myblog tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->

    <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back">
          <view class="tn-icon-notice tn-color-white tn-text-shadow-brown" style="font-size: 50rpx;">
            <tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :translateCenter="false">
              <text>12</text>
            </tn-badge>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    

    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/my/my-bg3.png' mode='widthFix' class='backgroud-image'></image>
    </view>	



    <view class="about__wrap">

      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
        <view class="justify-content-item">
          <view class="tn-flex tn-flex-col-center tn-flex-row-left">
            <!-- 图标logo -->
            <view class="logo-pic tn-shadow">
              <view class="logo-image">
                <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg');width: 120rpx;height: 120rpx;background-size: cover;">
                </view>
                <!-- <view class="tn-icon-logo-tuniao" style="font-size: 140rpx;color: #01BEFF;box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);"></view> -->
              </view>
            </view>
            <view class="tn-padding-right tn-color-white">
              <view class="tn-padding-right tn-padding-left-sm tn-text-xxl">
                仙女们
              </view>
              <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">掘猫</view>
            </view>

          </view>
        </view>
      </view>

      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-color-black tn-bg-white">
        <!-- 方式12 start-->
        <view class="tn-flex tn-flex-row-center tn-radius">
			<view class="tn-padding-sm tn-margin-xs tn-radius" v-for="(item,index) in listData" :key="index" @click="handleTo(item.path)">
			  <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
				<view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
				  <view :class="item.icon">
					  <tn-badge v-if="item.num" backgroundColor="#E72F8C" fontSize='20' fontColor="#FFFFFF" :absolute="true" :translateCenter="false">
						<text>{{item.num}}</text>
					  </tn-badge>
				  </view>
				</view>
				<view class="tn-text-center">
				  <text class="tn-text-ellipsis">{{item.name}}</text>
				</view>
			  </view>
			</view>
        </view>
		<view class="tn-flex tn-flex-row-center tn-radius">
			<view class="tn-padding-sm tn-margin-xs tn-radius" v-for="(item,index) in listData1" :key="index" @click="handleTo(item.path)">
			  <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
				<view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
				  <view :class="item.icon"></view>
				</view>
				<view class="tn-text-center">
				  <text class="tn-text-ellipsis">{{item.name}}</text>
				</view>
			  </view>
			</view>
		</view>
      </view>

    <view class="tn-flex tn-flex-wrap tn-padding-xs">
      <view class="" style="width: 100%;">
        <view class="image-piccapsule tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/capsule-banner/banner-tnui.png');">
           <view class="image-capsule">
           </view>
         </view>  
      </view>  
    </view>

      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xs tn-margin-top-xs tn-padding-bottom-sm">
		  <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
		    <view class="tn-flex tn-flex-col-center">
		      <view
		        class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-8 tn-color-white">
		        <view class="tn-icon-message-fill"></view>
		      </view>
		      <view class="tn-margin-left-sm tn-flex-1">推荐给朋友</view>
		      <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
		    </view>
		  </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-16 tn-color-white">
              <view class="tn-icon-wechat-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">关于我们</view>
            <view class="tn-margin-left-sm tn-color-cyan tn-icon-link"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-8 tn-color-white">
              <view class="tn-icon-message-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">问题反馈</view>
            <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-6 tn-color-white">
              <view class="tn-icon-phone-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">退出登录</view>
            <view class="tn-margin-left-sm tn-color-red tn-icon-fire-fill"></view>
          </view>
        </tn-list-cell>
      </view>

    </view>

    <view class="tn-padding-xl"></view>


    <!-- 回到首页悬浮按钮-->
    <nav-index-button></nav-index-button>

  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplateMyblog',
    mixins: [template_page_mixin],
    components: {
      NavIndexButton
    },
    data() {
      return {
		listData:[
			{
				num:'2',
				name:'待付款',
				icon:'tn-icon-shop',
				path:'/pagesMarking/order/list?type=1'
			},{
				num:'12',
				name:'待收货',
				icon:'tn-icon-shop',
				path:'/pagesMarking/order/list?type=2'
			},{
				num:'',
				name:'退换/售后',
				icon:'tn-icon-shop',
				path:'/pagesMarking/order/list?type=3'
			},{
				num:'2',
				name:'全部订单',
				icon:'tn-icon-shop',
				path:'/pagesMarking/order/list'
			}
		],
		listData1:[
			{
				num:'2',
				name:'优惠券',
				icon:'tn-icon-shop'
			},
			{
				num:'',
				name:'收货地址',
				icon:'tn-icon-shop',
				path:'/pagesMarking/address/index'
			},{
				num:'',
				name:'关注一下',
				icon:'tn-icon-shop'
			},{
				num:'',
				name:'联系客服',
				icon:'tn-icon-shop'
			}
		],
        historyData: [{
            title: '分销中心',
            icon: 'organizatio',
            color: 'orange',
          },
          {
            title: '积分商城',
            icon: 'level',
            color: 'purple',
          },
          {
            title: '限时秒杀',
            icon: 'clock',
            color: 'blue',
          },
          {
            title: '社区团购',
            icon: 'team',
            color: 'purplered',
          },
          {
            title: '大转盘',
            icon: 'group-circle',
            color: 'teal',
          },
          {
            title: '商品核销',
            icon: 'scan',
            color: 'orangered',
          },
          {
            title: '满减优惠',
            icon: 'coupon',
            color: 'indigo',
          },
          {
            title: '视频直播',
            icon: 'video',
            color: 'green',
          }
        ]
      }
    },
    methods: {
      // 跳转到
	  handleTo(path){
		  uni.navigateTo({
		    url: path
		  })
	  },
      navTuniaoUI(e) {
        uni.navigateTo({
          url: '/pages/index/index'
        })
      },
      // 跳转到
      navTuniaoHome(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/pages/index/index'
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  /* 胶囊banner*/
  .image-capsule{
    padding: 100rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-piccapsule{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  .template-myblog {}
  
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      flex-basis: 5%;
      width: 100rpx;
      position: absolute;
    }
  }
  /* 自定义导航栏内容 end */

  /* 顶部背景图 start */
  .top-backgroup {
    height: 450rpx;
    z-index: -1;

    .backgroud-image {
      width: 100%;
      height: 667rpx;
      // z-index: -1;
    }
  }

  /* 顶部背景图 end */

  /* 用户头像 start */
  .logo-image {
    width: 120rpx;
    height: 120rpx;
    position: relative;
  }

  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 50%;
    overflow: hidden;
    background-color: #FFFFFF;
  }

  /* 页面 start*/
  .about-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }

  .about {

    &__wrap {
      position: relative;
      z-index: 1;
      margin: 20rpx 30rpx;
      margin-top: -230rpx;
    }
  }

  /* 页面 end*/

  /* 图标容器1 start */
  .icon1 {
    &__item {
      // width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;

      &--icon {
        width: 40rpx;
        height: 40rpx;
        font-size: 28rpx;
        border-radius: 50%;
        position: relative;
        z-index: 1;

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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
        }
      }
    }
  }

  /* 图标容器1 end */

  /* 底部tabbar start*/
  .footerfixed {
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

  .bar-center {
    animation: suspension 3s ease-in-out infinite;
  }

  @keyframes suspension {

    0%,
    100% {
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
          background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc1.png) no-repeat center center;
          background-size: 100% 100%;
          animation: arc 4s linear infinite;
        }
      }
    }
  }


  @keyframes suspension {

    0%,
    100% {
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


  /* 图标容器12 start */
  .icon12 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;

      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        // border-radius: 50%;
        margin-bottom: 0rpx;
        position: relative;
        z-index: 1;

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
          // background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);


        }
      }
    }
  }

  /* 图标容器11 start */
  .icon11 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;

      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;

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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
        }
      }
    }
  }

  /* 大嘴鸟*/
  .dong {
    z-index: 9999;
    position: fixed;
    top: -40px;
    right: -80px;
    transform: scale(0.24);
    -webkit-transform: scale(0.24);
    -moz-transform: scale(0.24);

  }

  .monster {
    transform: rotate(-50deg);
    -ms-transform: rotate(-50deg);
    /* IE 9 */
    -moz-transform: rotate(-50deg);
    /* Firefox */
    -webkit-transform: rotate(-50deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(-50deg);
    /* Opera */
    display: flex;
    justify-content: center;
    position: relative;
    width: 170px;
    height: 400px;
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    background-color: #3C47D7;
    box-shadow: 20px 20px 60px #4650E5;
  }

  .monster__face {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 14%;
    width: 75%;
    height: 160px;
  }

  .monster__noses {
    top: 50%;
    display: flex;
    justify-content: space-between;
    width: 28%;
    height: auto;
    margin-bottom: 10px;
  }

  .monster__nose {
    width: 8px;
    height: 12px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
  }

  .monster__mouth {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 0%;
    overflow: hidden;
    border: 25px solid #FFC333;
    border-radius: 100px;
    background-color: #810332;
    animation: mouth 1.75s infinite;
    box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .monster__mouth::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 80px;
    border-radius: 100px;
    background-color: #400018;
  }

  .monster__mouth::after {
    content: '';
    position: absolute;
    bottom: -80px;
    width: 160px;
    height: 80px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background-color: #DC1B50;
    animation: tongue 1.75s infinite;
  }

  .monster__top {
    position: absolute;
    top: -30px;
    width: 170px;
    height: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;
    z-index: 100;
    animation: t 1.75s infinite;
  }

  .monster__bottom {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #ffffff;
    z-index: 100;
    animation: b 1.75s infinite;
  }


  .avatar-eye {
    position: absolute;
    top: -10%;
    width: 65px;
    height: 65px;
    background: linear-gradient(105deg, white, #cb87f4);
    border-radius: 100%;
    box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
    margin: 3px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }


  .avatar-eye--green {
    background: linear-gradient(to bottom, #fdfdfd, #c3efea);
  }

  .avatar-eye--violet {
    background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
  }


  .eye--left {
    left: 10%;
  }

  .eye--right {
    left: 85%;
  }

  .eye--center {
    left: 45%;
    top: 10%;
  }

  .avatar-eye-pupil {
    position: absolute;
    width: 55%;
    height: 55%;
    left: 50%;
    top: 25%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 100;
    border-radius: 100%;
  }


  .pupil--green {
    background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
  }

  .pupil--pink {
    background: linear-gradient(135deg, #f1a183, #8535cd);
  }


  .avatar-eye-pupil-blackThing {
    position: absolute;
    width: 55%;
    height: 55%;
    left: 50%;
    top: 25%;
    background: #2c2f32;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    border-radius: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .avatar-eye-pupil-lightReflection {
    position: absolute;
    width: 7px;
    height: 7px;
    left: 25%;
    top: 10%;
    background: #ebebeb;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    border-radius: 100%;
    box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
  }





  /**/
  @keyframes t {

    0%,
    10%,
    80%,
    100% {
      top: -30px;
    }

    20% {
      top: 0px;
    }

    30% {
      top: -20px;
    }

    40% {
      top: -0px;
    }

    50% {
      top: -25px;
    }

    70% {
    		top: 0px;
    }
  }

  @keyframes b {

    0%,
    10%,
    80%,
    100% {
      bottom: -30px;
    }

    20% {
      bottom: 0px;
    }

    30% {
      bottom: -20px;
    }

    40% {
      bottom: -0px;
    }

    50% {
      bottom: -25px;
    }

    70% {
      bottom: 0px;
    }
  }

  @keyframes mouth {

    0%,
    10%,
    100% {
      width: 100%;
      height: 0%;
    }

    15% {
      width: 90%;
      height: 30%;
    }

    20% {
      width: 50%;
      height: 70%;
    }

    25% {
      width: 70%;
    	 height: 70%;
    }

    30% {
    		width: 80%;
      height: 60%;
    }

    35% {
      width: 60%;
      height: 70%;
    }

    40% {
      width: 55%;
      height: 75%;
    }

    45% {
    		width: 50%;
      height: 90%;
    }

    50% {
      width: 40%;
      height: 70%;
    }

    55% {
      width: 70%;
      height: 95%;
    }

    60% {
    	 width: 40%;
      height: 50%;
    }

    65% {
      width: 100%;
      height: 60%;
    }

    70% {
      width: 100%;
      height: 70%;
    }

    75% {
      width: 90%;
      height: 70%;
    }

    80% {
      width: 50%;
      height: 70%;
    }

    85% {
      width: 90%;
      height: 50%;
    }

    85% {
      width: 40%;
      height: 70%;
    }

    90% {
      width: 90%;
      height: 30%;
    }

    95% {
      width: 100%;
      height: 10%;
    }
  }

  @keyframes tongue {

    0%,
    20%,
    100% {
      bottom: -80px;
    }

    30%,
    90% {
    		bottom: -40px;
    }

    40% {
      bottom: -45px;
    }

    50% {
      bottom: -50px;
    }

    70% {
      bottom: -80px;
    }

    90% {
      bottom: -40px;
    }
  }
</style>
