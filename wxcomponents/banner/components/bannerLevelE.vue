<template>
	<view>
		<swiper class="card-swiper tn-margin-top-sm" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold">{{ item.name }}</view>
					<view class="tn-text-sm tn-text-bold tn-padding-top-xs">{{ item.text }}</view>
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
					name: '看书20分钟',
					text: '静下心看《读者》',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
				},
				{
					id: 1,
					type: 'image',
					name: '创新一个轮播',
					text: '在图鸟UI新增创意轮播',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
				},
				{
					id: 2,
					type: 'image',
					name: '坚持早起',
					text: '早上9点前起床',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
				},
				{
					id: 3,
					type: 'image',
					name: '和群友吹水',
					text: '技术的友情永不过时',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
				},
				{
					id: 4,
					type: 'image',
					name: '散步找创意',
					text: '每天散步30分钟',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
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
/* 自定义导航栏内容 end */
/* 轮播 start*/
.card-swiper {
	height: 570rpx !important;
}

.card-swiper swiper-item {
	width: 450rpx !important;
	left: 30rpx;
	box-sizing: border-box;
	padding: 0rpx 0rpx 80rpx 0rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 10rpx;
	transform: scale(0.7) translate(0rpx, -104rpx);
	transition: all 0.3s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.3s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: -120rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 10rpx;
	transform: translate(20rpx, -30rpx) scale(0.7, 0.7);
	transition: all 0.4s ease 0s;
	overflow: hidden;
	color: #000000;
}

.card-swiper swiper-item.cur .swiper-item-text {
	margin-top: -150rpx;
	padding-left: 30rpx;
	width: 100%;
	transform: translate(-20rpx, 20rpx) scale(0.9, 0.9);
	transition: all 0.4s ease 0s;
	color: #ffffff;
	text-shadow: 0rpx 10rpx 20rpx rgba(0, 0, 0, 0.1);
}

.image-banner {
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0rpx 30rpx 60rpx 0rpx rgba(116, 10, 250, 0.15);
	// border: 1rpx solid red;
}
.image-banner image {
	width: 100%;
	height: 100%;
}
/* 轮播指示点 start*/
.indication {
	z-index: 9999;
	width: 100%;
	height: 36rpx;
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.spot {
	background-color: #000;
	opacity: 0.4;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	margin: 0 8rpx !important;
	right: -270rpx;
	top: -100rpx;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 10rpx;
	background-color: #000;
}
</style>
