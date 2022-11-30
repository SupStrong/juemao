<template>
	<view>
		<swiper
			class="card-swiper"
			:circular="true"
			:autoplay="true"
			duration="500"
			interval="5000"
			previous-margin="200rpx"
			next-margin="200rpx"
			@change="cardSwiper"
			style="margin-top: -80rpx;"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold">{{ item.name }}</view>
					<view class="tn-text-sm tn-text-bold tn-padding-top-xs">{{ item.text }}</view>
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
			swiperList: [
				{
					id: 0,
					type: 'image',
					name: '铁甲钢拳',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
				},
				{
					id: 1,
					type: 'image',
					name: '龙和雀斑公主',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
				},
				{
					id: 2,
				 type: 'image',
					name: '哈尔的移动城堡',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
				},
				{
					id: 3,
					type: 'image',
					name: '机器人总动员',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
				},
				{
					id: 4,
					type: 'image',
					name: '功勋·于敏',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg'
				},
				{
					id: 5,
					type: 'image',
					name: '心欲呐喊',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
				},
				{
				 id: 6,
					type: 'image',
					name: '白日梦想家',
					text: '332人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
				},
				{
					id: 7,
					type: 'image',
					name: '摔跤吧爸爸',
					text: '342人想看',
					url: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg'
				}
			]
		};
	},
	methods: {
		cardSwiper(e) {
			this.cardCur = e.detail.current
	    }
	}
};
</script>

<style lang="scss" scoped>
	.tn-custom-nav-bar__back {
	  width: 100%;
	  height: 100%;
	  position: relative;
	  display: flex;
	  justify-content: space-evenly;
	  align-items: center;
	  box-sizing: border-box;
	  background-color: rgba(0, 0, 0, 0.15);
	  border-radius: 1000rpx;
	  border: 1rpx solid rgba(255, 255, 255, 0.5);
	  color: #FFFFFF;
	  font-size: 18px;
	  
	  .icon {
	    display: block;
	    flex: 1;
	    margin: auto;
	    text-align: center;
	  }
	  
	  &:before {
	    content: " ";
	    width: 1rpx;
	    height: 110%;
	    position: absolute;
	    top: 22.5%;
	    left: 0;
	    right: 0;
	    margin: auto;
	    transform: scale(0.5);
	    transform-origin: 0 0;
	    pointer-events: none;
	    box-sizing: border-box;
	    opacity: 0.7;
	    background-color: #FFFFFF;
	  }
	}
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
	      flex-basis: 60%;
	      width: 100%;
	      height: 100%;
	      
	      &__box {
	        width: 100%;
	        height: 70%;
	        padding: 10rpx 0;
	        margin: 0 30rpx;
	        border-radius: 60rpx 60rpx 0 60rpx;
	        font-size: 24rpx;
	        background-color: rgba(255,255,255,0.5);
	      }
	      
	      &__icon {
	        padding-right: 10rpx;
	        margin-left: 20rpx;
	        font-size: 30rpx;
	      }
	      
	      &__text {
	        color: #080808;
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
	    height: 560rpx !important;
	    border-radius: 0 0 50% 50%/0 0 10% 10%;
	    overflow: hidden;
	  }
	  
	  .card-swiper swiper-item {
	    width: 350rpx !important;
	    // left: 200rpx;
	    box-sizing: border-box;
	    padding: 0rpx 15rpx 20rpx 15rpx;
	    overflow: initial;
	  }
	  
	  .card-swiper swiper-item .swiper-item {
	    width: 100%;
	    display: block;
	    height: 100%;
	    border-radius: 25rpx;
	    transform: scale(0.9) translate(0rpx,60rpx);
	    transition: all 0.2s ease-in 0s;
	    overflow: hidden;
	  }
	  
	  .card-swiper swiper-item.cur .swiper-item {
	    transform: none;
	    transition: all 0.2s ease-in 0s;
	  }
	  
	  .card-swiper swiper-item .swiper-item-text {
	    margin-top: -120rpx;
	    width: 100%;
	    display: block;
	    height: 50%;
	    border-radius: 10rpx;
	    transform: translate(0rpx, 0rpx) scale(0.7, 0.7);
	    transition: all 0.4s ease 0s;
	    overflow: hidden;
	    color: #000000;
	    opacity: 0;
	  }
	    
	  .card-swiper swiper-item.cur .swiper-item-text {
	    margin-top: -150rpx;
	    padding-left: 30rpx;
	    width: 100%;
	    transform: translate(-20rpx, 20rpx) scale(0.9, 0.9);
	    transition: all 0.4s ease 0s;
	    color: #FFFFFF;
	    text-shadow: 0rpx 10rpx 30rpx rgba(0,0,0,0.3);
	    opacity: 1;
	  }
	  
	  .image-banner{
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    // box-shadow: 0rpx 30rpx 60rpx 0rpx rgba(116,10,250, 0.06);
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
	  /* 效果布局 start*/
	  .image-movie{
	    width: 200rpx;
	    height: 300rpx;
	    font-size: 40rpx;
	    font-weight: 300;
	    position: relative;
	  }
	  .image-pic{
	    height: 100%;
	    background-size: cover;
	    background-repeat:no-repeat;
	    // background-attachment:fixed;
	    background-position:top;
	    border-radius: 10rpx;
	  }
	  
	  /* 底部tabbar start*/
	  .footerfixed{
	   position: fixed;
	   width: 100%;
	   bottom: 0;
	   z-index: 999;
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
	  	padding: 50rpx;
	  	overflow: initial;
	  }
	  
	  .bar-left{
	    background-color: #FFFFFF;
	    border-radius: 0rpx 95% 0rpx 0rpx / 0rpx 94% 0rpx 0rpx;
	    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
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
	  
	  .bar-right{
	    background-color: #FFFFFF;
	    border-radius: 95% 0rpx 0rpx 0rpx / 94% 0rpx 0rpx 0rpx;
	    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
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
	    margin: -30rpx auto 20rpx;
	    text-align: center;
	    font-size: 52rpx;
	    line-height: 90rpx;
	  	background-color: #3646FF;
	    width: 90rpx !important;
	    height: 90rpx !important;
	    overflow: hidden;
	    border-radius: 50%;
	    box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(54, 70, 255, 0.5);
	  }
	  
	  .tabbar .action .bar-circle image {
	    width: 60rpx;
	  	height: 60rpx;
	  	display: inline-block;
	    margin: 15rpx auto 15rpx;
	  }
</style>
