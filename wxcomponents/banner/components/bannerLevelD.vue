<template>
	<view>
		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold tn-color-white">{{ item.title }}</view>
					<view class="tn-text-bold tn-color-white tn-padding-top-xs" style="font-size: 60rpx;">{{ item.name }}</view>
					<view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">{{ item.text }}</view>
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
					title: 'BUG再多',
					name: '也别忘了',
					text: '我无限续杯',
					url: 'https://tnuiimage.tnkjapp.com/shop/cup1.jpg'
				},
				{
					id: 1,
					type: 'image',
					title: '图鸟南南',
					name: '欢迎加入东东们',
					text: '如果你也有不错的作品',
					url: 'https://tnuiimage.tnkjapp.com/swiper/read.jpg'
				},
				{
					id: 2,
					type: 'image',
					title: '图鸟西西',
					name: '一起玩转scss',
					text: '用最少的代码做最骚的效果',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
				},
				{
					id: 3,
					type: 'image',
					title: '图鸟北北',
					name: '微信号 tnkewo',
					text: '商业合作请联系作者',
					url: 'https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg'
				},
				{
					id: 4,
					type: 'image',
					title: '图鸟猪猪',
					name: '努力成为大佬',
					text: '一起加油吖',
					url: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg'
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
	height: 800rpx !important;
}

.card-swiper swiper-item {
	width: 750rpx !important;
	left: 0rpx;
	box-sizing: border-box;
	// padding: 0rpx 30rpx 90rpx 30rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	transform: scale(1);
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: -320rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 10rpx;
	transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item-text {
	margin-top: -380rpx;
	width: 100%;
	transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
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
	background-color: #ffffff;
	opacity: 0.6;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	top: -130rpx;
	margin: 0 8rpx !important;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 30rpx;
	background-color: #ffffff;
}
</style>
