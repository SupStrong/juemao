<template>
	<view>
		<swiper
			class="card-swiper tn-margin-top-lg"
			:circular="true"
			:autoplay="true"
			duration="500"
			interval="5000"
			previous-margin="60rpx"
			next-margin="60rpx"
			@change="cardSwiper"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="tn-text-xxl tn-text-bold tn-color-white">{{ item.name }}</view>
					<view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-xs">{{ item.text }}</view>
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
		          swiperList: [{
		            id: 0,
		            type: 'image',
		            name: '图鸟UI 她来了',
		            text: '开启全新的探索之旅',
		            url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
		          }, {
		            id: 1,
		            type: 'image',
		            name: '欢迎加入东东们',
		            text: '如果你也有不错的作品',
		            url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
		          }, {
		            id: 2,
		            type: 'image',
		            name: '一起玩转scss',
		            text: '用最少的代码做最骚的效果',
		            url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
		          }, {
		            id: 3,
		            type: 'image',
		            name: '微信号 tnkewo',
		            text: '商业合作请联系作者',
		            url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
		          }, {
		            id: 4,
		            type: 'image',
		            name: '努力成为大佬',
		            text: '一起加油吖',
		            url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
		          }],
		}
	},
	methods: {
		cardSwiper(e) {
		  this.cardCur = e.detail.current
		},
	}
}
</script>

<style lang="scss" scoped>
/* 轮播图片入口 start*/
.card-swiper {
	height: 67vh !important;
}

.card-swiper swiper-item {
	width: 630rpx !important;
	// left: 60rpx;
	box-sizing: border-box;
	padding: 0rpx 0rpx 90rpx 0rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 10rpx;
	transform: scale(0.9);
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: -180rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 10rpx;
	transform: translate(0rpx, -40rpx) scale(0.7, 0.7);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item-text {
	margin-top: -150rpx;
	width: 100%;
	transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
}

.image-banner {
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0rpx 30rpx 60rpx 0rpx rgba(116, 10, 250, 0.08);
}
.image-banner image {
	width: 100%;
	height: 100%;
}

/* 轮播指示点 start*/
.indication {
	z-index: 99;
	width: 100%;
	height: 36rpx;
	position: absolute;
	display: flex;
	margin-top: -50rpx;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.spot {
	background-color: #3165cc;
	opacity: 0.4;
	width: 15rpx;
	height: 15rpx;
	border-radius: 20rpx;
	margin: 0 8rpx !important;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 35rpx;
	background-color: #3165cc;
}
</style>
