<template>
	<view>
		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold tn-color-white title">{{ item.title }}</view>
					<view class="tn-text-xxl tn-text-bold tn-color-white text">{{ item.text }}</view>
					<!-- <view class="tn-text-bold tn-color-white tn-padding-top-xs" style="font-size: 60rpx;">{{item.name}}</view> -->
					<!-- <view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">{{item.text}}</view> -->
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item, index) in swiperList" :key="index"><view class="spot" :class="cardCur == index ? 'active' : ''"></view></block>
		</view>
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
					title: '海量分享',
					name: '总有你想不到的创意',
					text: '用最少的代码做最骚的效果',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 1,
					type: 'image',
					title: '愉快玩耍',
					name: '寻找一起成长的小伙伴',
					text: '欢迎加入东东们',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 2,
					type: 'image',
					title: '酷炫多彩',
					name: '更多彩蛋等你探索',
					text: '开启全新的探索之旅',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 3,
					type: 'image',
					title: '免费开源',
					name: '商业合作请联系作者',
					text: '微信号 tnkewo',
			 	url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				}
			]
		};
	},
	methods: {
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		}
	}
};
</script>

<style lang="scss" scoped>
/* 轮播视觉差 start */
.card-swiper {
	width: 348rpx;
	height: 212rpx !important;
	margin-bottom: 20rpx;
}

.card-swiper swiper-item {
	width: 348rpx !important;
	left: 0rpx;
	box-sizing: border-box;
	// padding: 0rpx 30rpx 90rpx 30rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 16rpx;
	// transform: scale(1);
	// transition: all 0.2s ease-in 0s;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	// transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	// margin-top: -220rpx;
	width: 100%;
	display: block;
	// height: 50%;
	border-radius: 10rpx;
	// transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
	// transition: all 0.6s ease 0s;
	overflow: hidden;
}
.title {
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(51, 51, 51, 0.8);
	border-radius: 6px 0 6px 0;
	color: white;
	font-size: 24rpx;
}
.text {
	position: absolute;
	bottom: 0;
	color: white;
	padding: 10rpx 0rpx 10rpx 20rpx;
	font-size: 26rpx;
}
.card-swiper swiper-item.cur .swiper-item-text {
	// margin-top: -280rpx;
	width: 100%;
	// transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
	// transition: all 0.6s ease 0s;
}

.image-banner {
	display: flex;
	align-items: center;
	justify-content: center;
}
.image-banner image {
	width: 100%;
	height: 100%;
}

/* 轮播指示点 start*/
.indication {
	z-index: 9999;
	width: 348rpx;
	height: 36rpx;
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding-right: 20rpx;
}

.spot {
	background-color: #ffffff;
	opacity: 0.6;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	top: -230rpx;
	margin: 0 8rpx !important;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 30rpx;
	background-color: #ffffff;
}
</style>
