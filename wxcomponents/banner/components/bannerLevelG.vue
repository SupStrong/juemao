<template>
	<view>
		<swiper
			class="card-swiper tn-margin-top-sm"
			:circular="true"
			:autoplay="true"
			duration="500"
			interval="5000"
			previous-margin="75rpx"
			next-margin="75rpx"
			@change="cardSwiper"
		>
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
					name: '麻辣香锅',
					text: '广东人的微微辣',
					url: 'https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg'
				},
				{
					id: 1,
					type: 'image',
					name: '太二酸菜鱼',
					text: '当然是酸菜鱼+酸菜罐子啦',
					url: 'https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg'
				},
				{
					id: 2,
				 type: 'image',
					name: '蛙小侠',
					text: '打卡蒜香牛蛙',
					url: 'https://tnuiimage.tnkjapp.com/swiper/swiper1.jpg'
				},
				{
					id: 3,
					type: 'image',
					name: '九毛九',
					text: '打卡大酱骨',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg'
				},
				{
					id: 4,
					type: 'image',
					name: '牛小灶',
					text: '冬天必打卡',
					url: 'https://tnuiimage.tnkjapp.com/swiper/swiper2.jpg'
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
	height: 60vh !important;
}

.card-swiper swiper-item {
	width: 600rpx !important;
	// left: 75rpx;
	box-sizing: border-box;
	padding: 0rpx 20rpx 0rpx 20rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 45vh;
	border-radius: 20rpx 20rpx 0 0;
	transform: scale(1);
	transition: all 0.3s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: scale(1);
	transition: all 0.3s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	padding: 20rpx;
	width: 100%;
	display: block;
	height: 140rpx;
	border-radius: 0 0 20rpx 20rpx;
	transform: none;
	transition: all 0.4s ease 0s;
	overflow: hidden;
	color: #000000;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0rpx 30rpx 30rpx 0rpx rgba(0, 0, 245, 0.08);
}

.card-swiper swiper-item.cur .swiper-item-text {
	transition: all 0.4s ease 0s;
	text-shadow: 0rpx 10rpx 20rpx rgba(0, 0, 0, 0.1);
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
	opacity: 0.8;
	width: 10rpx;
	height: 10rpx;
	border-radius: 50%;
	margin: 0 8rpx !important;
	position: relative;
	background-color: #3165cc;
}

.spot.active {
	opacity: 1;
	width: 35rpx;
	height: 35rpx;
	border: 2rpx solid #3165cc;
	background-color: #ffffff;
}
</style>
