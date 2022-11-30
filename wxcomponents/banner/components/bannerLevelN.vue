<template>
	<view>
		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item2 image-banner"><image :src="item.pngurl" mode="heightFix" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold tn-color-white">{{ item.name }}</view>
					<view class="tn-text-xl tn-text-bold tn-color-white tn-padding-top-xs">{{ item.text }}</view>
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
					name: '总有你想不到的创意',
					text: '海量分享',
					url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg4.jpg',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
				},
				{
					id: 1,
					type: 'image',
					name: '寻找一起成长的小伙伴',
					text: '愉快玩耍',
					url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg5.jpg',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d4.png'
				},
				{
					id: 2,
					type: 'image',
					name: '更多彩蛋等你探索',
					text: '酷炫多彩',
					url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg4.jpg',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d5.png'
				},
				{
					id: 3,
					type: 'image',
					name: '商业合作请联系作者',
					text: '免费开源',
					url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg5.jpg',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d6.png'
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
	height: 600rpx !important;
}

.card-swiper swiper-item {
	width: 750rpx !important;
	left: 0rpx;
	box-sizing: border-box;
	padding: 0rpx 0rpx 120rpx 0rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 0rpx;
	transform: scale(1);
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item2 {
	margin-top: -340rpx;
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 0rpx;
	transform: translate(340rpx, 20rpx) scale(0.5, 0.5);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item2 {
	margin-top: -340rpx;
	width: 100%;
	transform: translate(300rpx, 0rpx) scale(0.8, 0.8);
	transition: all 0.6s ease 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: -320rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 10rpx;
	transform: translate(0rpx, -40rpx) scale(0.7, 0.7);
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
	background-color: #fff;
	opacity: 0.4;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	margin: 0 8rpx !important;
	left: -270rpx;
	top: -180rpx;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 30rpx;
	background-color: #fff;
}
</style>
