<template>
	<view>
		<swiper
			class="card-swiper"
			:circular="true"
			:autoplay="true"
			duration="500"
			interval="18000"
			previous-margin="170rpx"
			next-margin="170rpx"
			@change="cardSwiper"
			style="margin-top: -280rpx;"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<!-- <view class="swiper-item image-banner">
		          <image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
		        </view> -->
				<!-- <view class="swiper-item image-banner" :style="'background-image:url('+ item.url + ');width: 230rpx;height: 100%;background-size:100% 100%;'">
		        </view> -->

				<view class="tnphone-white-min swiper-item  wow fadeInLeft2">
					<view class="skin wow fadeInRight2">
						<view class="screen wow fadeInUp2">
							<!-- <view class="head">
		        			  <text>{{item.name}}</text>
		        		  </view> -->
							<view class="peak wow">
								<view class="sound"></view>
								<view class="lens"></view>
							</view>
							<!-- <view class="area-l">
		        			  <view class="">
		                  <text class="tn-icon-all"></text>
		                  <text class="tn-icon-wifi tn-padding-left-xs"></text>
		        			  </view>
		        		  </view>
		        		  <view class="area-r">
		        			  <view class="">
		                  <text class="tn-icon-light"></text>
		                  <text class="tn-icon-time tn-padding-left-xs"></text>
		                </view>
		        		  </view> -->
							<!-- <view class="talk"></view> -->

							<view class="image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cardCur: 0,
			        swiperList: [{
			          id: 0,
			          type: 'image',
			          url: 'https://tnuiimage.tnkjapp.com/index_bg/pro1.jpg',
			        }, {
			          id: 1,
			          type: 'image',
			          url: 'https://tnuiimage.tnkjapp.com/index_bg/pro2.jpg',
			        }, {
			          id: 2,
			          type: 'image',
			          url: 'https://tnuiimage.tnkjapp.com/index_bg/pro3.jpg',
			        }, {
			          id: 3,
			          type: 'image',
			          url: 'https://tnuiimage.tnkjapp.com/index_bg/pro4.jpg',
			        },{
			          id: 4,
			          type: 'image',
			          url: 'https://tnuiimage.tnkjapp.com/index_bg/pro5.jpg',
			        },{
			          id: 5,
			          type: 'image',
			          url: 'https://tnuiimage.tnkjapp.com/index_bg/pro6.jpg',
			        }],
		};
	},
	methods: {
		cardSwiper(e) {
		        this.cardCur = e.detail.current
		      },
	}
};
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
/* .tnphone-white-min 细边框*/
  .tnphone-white-min {width: 380rpx; height: 800rpx; border-radius: 40rpx; background: #E9E5F3; padding: 7rpx; display: table; color: #333;
  	box-sizing: border-box; box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0,0,0,0.15); margin: 70rpx auto; cursor: default; position: relative}
  .tnphone-white-min .skin {width: 100%; height: 100%; border-radius: 40rpx; background: #E9E5F3; padding: 10rpx;}
  .tnphone-white-min .screen {width: 100%; height: 100%; border-radius: 30rpx; background: #E9E5F3; position: relative; overflow: hidden}
  .tnphone-white-min .head {width: 100%; height: 90rpx; text-align: center; position: absolute; padding: 45rpx 15rpx 10rpx 15rpx;}
  .tnphone-white-min .peak {left: 22%;width: 56%; height: 27rpx; margin: -2rpx auto 0rpx; border-radius: 0 0 20rpx 20rpx; background: #E9E5F3; position: absolute}
  .tnphone-white-min .sound {width: 48rpx; height: 6rpx; border-radius: 15rpx; background: #555; position: absolute; left: 50%; top: 50%; margin-left: -24rpx; margin-top: -10rpx;
  	box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset}
  .tnphone-white-min .lens {width: 6rpx; height: 6rpx; border-radius: 50%; background: #2c5487; position: absolute; left: 50%; top: 50%; margin-left: 34rpx; margin-top: -10rpx}
  .tnphone-white-min .talk {width: 50%; height: 6rpx; border-radius: 15rpx; background: rgba(0,0,0,.3); position: absolute; bottom: 8rpx; left: 50%; margin-left: -25%}
  .tnphone-white-min .area-l,.tnphone-white-min .area-r {width: 70rpx; height: 16rpx; position: absolute; top: 6rpx}
  .tnphone-white-min .area-l {left: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-left: 20rpx;}
  .tnphone-white-min .area-r {right: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-right: 20rpx;}
  .tnphone-white-min .fa-feed {float: left; font-size: 12rpx!important; transform:rotate(-45deg); margin-top: 4rpx; margin-right: 8rpx}
  .tnphone-white-min .fa-battery-full {float: left; font-size: 12rpx!important; margin-top: 6rpx}
  .tnphone-white-min .fa-chevron-left {float: left; margin-top: 4rpx}
  .tnphone-white-min .fa-cog {float: right; margin-top: 4rpx}
  .tnphone-white-min .btn01 {width: 3rpx; height: 28rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 105rpx; left: -3rpx}
  .tnphone-white-min .btn02 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 160rpx; left: -3rpx}
  .tnphone-white-min .btn03 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 230rpx; left: -3rpx}
  .tnphone-white-min .btn04 {width: 3rpx; height: 86rpx; border-radius: 0 3rpx 3rpx 0; background: #222; position: absolute; top: 180rpx; right: -3rpx}

  
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
  
  /* 轮播样机样式 start*/
  .card-swiper {
    height: 830rpx !important;
  }
  
  .card-swiper swiper-item {
    width: 260rpx !important;
    // left: 170rpx;
    // width: 380rpx !important;
    // left: 185rpx;
    box-sizing: border-box;
    padding: 0rpx 15rpx 90rpx 15rpx;
    overflow: initial;
  }
  
  .card-swiper swiper-item .swiper-item {
    display: block;
    transform: scale(0.45);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
  
  .card-swiper swiper-item.cur .swiper-item {
    transform: scale(0.65);
    transition: all 0.2s ease-in 0s;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 770rpx;
    // border: 1rpx solid red;
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
    background-color: #000;
    opacity: 0;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    margin: 0 8rpx !important;
    top: -80rpx;
    position: relative;
  }
  
  .spot.active{
    opacity: 0;
    width: 30rpx;
    background-color: #000;
  }
  
  /* 图标容器4 start */
    .tn-cool-color-icon4{
      // background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);   16
      // background-image: linear-gradient(135deg, #ED1C24, #FECE12);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
    }
    .icon4 {
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
          width: 110rpx;
          height: 110rpx;
          font-size: 55rpx;
          border-radius: 50%;
          margin-bottom: 18rpx;
          position: relative;
          z-index: 1;
          box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
            0px -8px 40px rgba(255, 255, 255, 1),
            inset 0px -10px 10px rgba(70,23,129, 0.05),
            inset 0px 10px 20px rgba(255, 255, 255, 1);
        }
      }
    }
    
    /* 标题 start */
    .nav_title {
      -webkit-background-clip: text;
      color: transparent;
      
      &--wrap {
        position: relative;
        display: flex;
        height: 120rpx;
        font-size: 42rpx;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
        background-size: cover;
      }
    }
    /* 标题 end */
    
    /* 组件导航列表 start*/
    .nav-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0rpx 12rpx 0rpx;
      justify-content: space-between;
      
      /* 列表元素 start */
      .nav-list-item {
        padding: 95rpx 30rpx 5rpx 30rpx;
        border-radius: 12rpx;
        width: 45%;
        margin: 0 18rpx 40rpx;
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 99;
        
        /* 元素标题 start */
        .nav-link {
          font-size: 32rpx;
          text-transform: capitalize;
          padding: 0 0 10rpx 0;
          position: relative;
          
          .title {
            color: #FFFFFF;
            margin-top: 30rpx;
            text-align: center;
          }
        }
        /* 元素标题 end */
        
        /* 元素图标 start */
        .icon {
          font-variant: small-caps;
          position: absolute;
          top: 20rpx;
          right: 50rpx;
          left: 37%;
          width: 90rpx;
          height: 90rpx;
          line-height: 90rpx;
          margin: 0;
          padding: 0;
          display: inline-flex;
          text-align: center;
          justify-content: center;
          vertical-align: middle;
          font-size: 50rpx;
          color: #FFFFFF;
          white-space: nowrap;
          opacity: 0.9;
          background-color: rgba(0, 0, 0, 0.05);
          background-size: cover;
          background-position: 50%;
          border-radius: 5000rpx;
        }
        /* 元素图标 end */
      }
      /* 列表元素 end */
    }
    /* 组件导航列表 end*/
    
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
      border-radius: 50%;
      box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
        0px -8px 40px rgba(255, 255, 255, 1),
        inset 0px -10px 10px rgba(70,23,129, 0.05),
        inset 0px 10px 20px rgba(255, 255, 255, 1);
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
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
</style>
