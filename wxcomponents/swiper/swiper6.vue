<template>
	<view>
		<swiper
			class="card-swiper tn-margin tn-shadow-purplered"
			:circular="true"
			vertical="true"
			:autoplay="true"
			duration="500"
			interval="5000"
			@change="cardSwiper"
			style="margin-top: 30rpx;"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner "><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item, index) in swiperList" :key="index">
				<view class="spot tn-text-center tn-padding-top-sm tn-shadow-blur" :class="cardCur == index ? 'active' : ''">
					<text class="tn-text-bold">{{ item.text }}</text>
				</view>
			</block>
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
					name: '一起愉快的玩耍叭',
					text: '恭 · 跨年',
					url: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg'
				},
				{
					id: 1,
					type: 'image',
					name: '如果你也有不错的作品',
					text: '喜 · 祝福',
					url: 'https://tnuiimage.tnkjapp.com/swiper/ad1.jpg'
				},
				{
					id: 2,
					type: 'image',
					name: '用最少的代码做最骚的效果',
					text: '发 · 红包',
					url: 'https://tnuiimage.tnkjapp.com/swiper/ad2.jpg'
				},
				{
					id: 3,
					type: 'image',
					name: '商业合作请联系作者',
					text: '财 · 红庆',
					url: 'https://tnuiimage.tnkjapp.com/swiper/ad3.jpg'
				},
				{
					id: 4,
					type: 'image',
					name: '我们都是好孩子',
					text: '虎 · 生威',
					url: 'https://tnuiimage.tnkjapp.com/swiper/ad4.jpg'
				}
			]
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
/* 轮播文案在外 start*/
.card-swiper {
	height: 650rpx !important;
	width: 500rpx;
	border-radius: 20rpx;
	overflow: hidden;
}

.card-swiper swiper-item {
	height: 650rpx;
	width: 500rpx;
	box-sizing: border-box;
	padding: 0rpx;
	border-radius: 20rpx;
	overflow: hidden;
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
	display: inline-block;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.spot {
	color: #e83a30;
	background-color: #fad5e8;
	opacity: 1;
	width: 160rpx;
	height: 80rpx;
	border-radius: 20rpx;
	margin: 20rpx -30rpx !important;
	left: 590rpx;
	right: 0;
	top: -700rpx;
	position: relative;
}

.spot.active {
	color: #ffffff;
	opacity: 1;
	background-color: #e83a30;
}
/* 标题 start */
.nav_title {
	-webkit-background-clip: text;
	color: transparent;

	&--wrap {
		position: relative;
		display: flex;
		height: 120rpx;
		font-size: 46rpx;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
		background-size: cover;
	}
}
/* 标题 end */

/* 文章内容 start*/
.tn-blogger-content {
	&__wrap {
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.12);
		border-radius: 20rpx;
		margin: 15rpx;
	}

	&__info {
		&__btn {
			margin-right: -12rpx;
			opacity: 0.5;
		}
	}

	&__label {
		&__item {
			line-height: 45rpx;
			padding: 0 20rpx;
			margin: 5rpx 18rpx 0 0;

			&--prefix {
				color: #82b2ff;
				padding-right: 10rpx;
			}
		}

		&__desc {
			line-height: 35rpx;
		}
	}

	&__main-image {
		border-radius: 16rpx 16rpx 0 0;

		&--1 {
			max-width: 690rpx;
			min-width: 690rpx;
			max-height: 400rpx;
			min-height: 400rpx;
		}

		&--2 {
			max-width: 260rpx;
			max-height: 260rpx;
		}

		&--3 {
			height: 212rpx;
			width: 100%;
		}
	}

	&__count-icon {
		font-size: 30rpx;
		padding-right: 5rpx;
	}
}

.image-year {
	padding: 150rpx 0rpx;
	font-size: 16rpx;
	font-weight: 300;
	position: relative;
}
.image-capsule {
	padding: 100rpx 0rpx;
	font-size: 40rpx;
	font-weight: 300;
	position: relative;
}
.image-pic {
	background-size: cover;
	background-repeat: no-repeat;
	// background-attachment:fixed;
	background-position: top;
	border-radius: 20rpx 20rpx 0 0;
}
</style>
