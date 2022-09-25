<template>
	<view>
		<swiper class="card-swiper tn-margin-top-sm" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold tn-color-white">{{ item.title }}</view>
					<view class="tn-text-bold tn-color-white tn-padding-top-xs" style="font-size: 40rpx;">{{ item.name }}</view>
					<view class=" tn-text-bold tn-color-red tn-padding-top-sm tn-padding-bottom-sm">
						<text class="tn-text-lg">￥</text>
						<text class="tn-text-sm">{{ item.text }}</text>
					</view>
				</view>
				<view class="swiper-item-text2">
					<view class="tn-text-xxl tn-text-bold">
						<text class="tn-color-white tn-float-right tn-bg-red" style="border-radius: 10rpx;padding: 10rpx 20rpx;">马上抢</text>
					</view>
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
					title: '巴西烤肉-午餐券12元',
					name: '祈福新村2号街',
					text: '59.00',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 1,
					type: 'image',
					title: '巴西烤肉-午餐券12元',
					name: '祈福新村2号街',
					text: '59.00',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 2,
					type: 'image',
					title: '巴西烤肉-午餐券12元',
					name: '祈福新村2号街',
					text: '59.00',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 3,
					type: 'image',
					title: '巴西烤肉-午餐券12元',
					name: '祈福新村2号街',
					text: '59.00',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 4,
					type: 'image',
					title: '巴西烤肉-午餐券12元',
					name: '祈福新村2号街',
					text: '59.00',
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
	height: 400rpx !important;
}

.card-swiper swiper-item {
	width: 620rpx !important;
	left: 30rpx;
	box-sizing: border-box;
	padding: 0rpx 0rpx 90rpx 0rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 30rpx;
	transform: scale(0.9);
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: -140rpx;
	width: 100%;
	display: block;
	height: 70%;
	border-radius: 10rpx;
	transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item-text {
	margin-top: -200rpx;
	width: 100%;
	transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
}

.card-swiper swiper-item .swiper-item-text2 {
	margin-top: -160rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 10rpx;
	transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
	transition: all 0.3s ease 0s;
	overflow: hidden;
	opacity: 0;
}

.card-swiper swiper-item.cur .swiper-item-text2 {
	margin-top: -120rpx;
	width: 100%;
	transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
	transition: all 0.3s ease 0s;
	opacity: 1;
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
	width: 100%;
	height: 36rpx;
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.spot {
	background-color: #000000;
	opacity: 0.2;
	width: 10rpx;
	height: 10rpx;
	border-radius: 40rpx;
	top: -60rpx;
	margin: 0 8rpx !important;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 30rpx;
	background-color: #e83a30;
}
</style>
