<template>
	<view>
		<swiper class="card-swiper2 tn-margin-top-sm" :circular="true" :autoplay="false" :duration="500" @change="resume">
			<swiper-item v-for="(item, index) in resumeList" :key="index" :class="cardCur2 == index ? 'cur' : ''">
				<!-- <view class="swiper-item image-banner">
		          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
		        </view> -->
				<view class="swiper-item" :style="'background-image:url(' + item.url + ');width: 660rpx;height: 100%;background-size: cover;border-radius: 15rpx;'"></view>
				<view
					class="swiper-item2 image-banner tn-shadow-blur"
					:style="'background-image:url(' + item.avatar + ');width: 120rpx;height: 120rpx;background-size: cover;'"
				></view>
				<view class="swiper-item-text tn-text-shadow-indigo">
					<view class="tn-text-bold tn-color-blue--dark" style="font-size: 45rpx;">{{ item.title }}</view>
					<view class="tn-color-blue--dark tn-padding-top-sm">{{ item.name }}</view>
					<view class="tn-flex tn-padding-top-xl" style="margin-left: -50rpx;">
						<view class="tn-flex-1 tn-padding-sm tn-margin-right">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-blue">{{ item.hot }}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-fire"></text>
									<text class="tn-padding-left-xs">人气</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-left tn-margin-right">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-orange">{{ item.share }}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-share-circle"></text>
									<text class="tn-padding-left-xs">分享</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-left">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-red">{{ item.love }}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-like"></text>
									<text class="tn-padding-left-xs">爱心</text>
								</view>
							</view>
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
			cardCur2: 0,
			resumeList: [
				{
					id: 0,
					type: 'image',
					title: '蔡东东',
					name: '产品总监',
					hot: '1.29W',
					share: '216',
					love: '962',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				},
				{
					id: 1,
					type: 'image',
					title: '图鸟北北',
					name: 'UI设计师',
					hot: '964',
					share: '94',
					love: '186',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				},
				{
					id: 2,
					type: 'image',
					title: '图鸟西西',
					name: '高级前端',
					hot: '3.26K',
					share: '146',
					love: '379',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				},
				{
					id: 3,
					type: 'image',
					title: '图鸟南南',
					name: '项目经理',
					hot: '6.32K',
					share: '133',
					love: '432',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				},
				{
					id: 4,
					type: 'image',
					title: '图鸟猪猪',
					name: '纯打杂',
					hot: '8.65K',
					share: '321',
					love: '886',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				}
			]
		};
	},
	methods: {
		resume(e) {
		        this.cardCur2 = e.detail.current
		      }
	}
};
</script>

<style lang="scss" scoped>
	
	  /* 简历推荐 start */
	  .card-swiper2 {
	    height: 420rpx !important;
	    overflow: hidden;
	  }
	    
	  .card-swiper2 swiper-item {
	    width: 680rpx !important;
	    left: 30rpx;
	    box-sizing: border-box;
	    overflow: initial;
	    padding: 0 0rpx 40rpx 0;
	  }
	    
	  .card-swiper2 swiper-item .swiper-item {
	    width: 100%;
	    display: block;
	    height: 100%;
	    // transform: scale(1);
	    // transition: transform 0.2s ease-out 0s;
	  }
	    
	  .card-swiper2 swiper-item.cur .swiper-item {
	    // transform: scale(1);
	  }
	  
	  .card-swiper2 swiper-item .swiper-item2 {
	    width: 100%;
	    display: block;
	    height: 50%;
	    border-radius: 50%;
	    transform: translate(480rpx, -300rpx) scale(0.9);
	    transition: transform 0.3s ease-out 0s;
	  }
	    
	  .card-swiper2 swiper-item.cur .swiper-item2 {
	    transform: translate(510rpx, -320rpx) scale(0.9);
	  }
	
	  .card-swiper2 swiper-item .swiper-item-text {
	    width: 100%;
	    display: block;
	    height: 100%;
	    border-radius: 10rpx;
	    transform: translate(20rpx, -420rpx) scale(0.8);
	    transition: transform 0.6s ease-out 0s;
	    overflow: hidden;
	  }
	    
	  .card-swiper2 swiper-item.cur .swiper-item-text {
	    transform: translate(20rpx, -450rpx) scale(0.9);
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
