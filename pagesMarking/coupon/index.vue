<template>
	<view class="template-bless tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
				<text class="icon tn-icon-left"></text>
				<text class="icon tn-icon-home-capsule-fill"></text>
			</view>
		</tn-nav-bar>

		<!-- 顶部背景图片-->
		<view class="login__bg login__bg--top"><image class="bg" src="https://tnuiimage.tnkjapp.com/money/money-bg.jpg" mode="widthFix"></image></view>
		<!-- 		<view class="login__bg login__bg--top"><image class="rocket rocket-sussuspension" src="https://tnuiimage.tnkjapp.com/bless/bless-fish.png" mode="widthFix"></image></view>
 -->
 <view class="" style="position: absolute;top: 80px;">
 	<view class="" style="margin-top: -30rpx;">
 		<view class="tn-flex tn-flex-row-between">
 			<view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">发点小券</view>
<!-- 			<view class="tn-margin" style="font-size: 50rpx;"><text class="tn-icon-edit-form"></text></view> -->
 		</view>
 	</view>
 	
 	<view class="tn-margin-left tn-text-sm tn-color-gray" style="margin-top: -25rpx;"><text>好多券啊~这里</text></view>
 	
 	<view class="">
 		<view class="tn-plan-content tn-margin tn-text-justify">
 			<view
 				v-for="(item, index) in planList"
 				:key="index"
 				class="tn-plan-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
 				:class="[`tn-bg-${item.color}--light tn-color-${item.color}`]"
 			>
 				<text class="tn-plan-content__item--prefix">#</text>
 				{{ item.name }}
 			</view>
 		</view>
 	</view>
 	
 </view>
		
		<!-- 底部背景图片-->
		<view class="login__bg login__bg--bottom"><image src="https://tnuiimage.tnkjapp.com/bless/bless-bottom.jpg" mode="widthFix"></image></view>
	</view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js';
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'TemplateBless',
	mixins: [template_page_mixin],
	data() {
		return {
			swiperTop: 0,
			swiperHeight: 0,
			planList: [
				{
					name: '雅诗兰黛单品券',
					color: 'red',
					time: '2021-12-13 06:20'
				},
				{
					name: '品牌券',
					color: 'cyan',
					time: '8:37'
				},
				{
					name: '满减券',
					color: 'blue'
				},
				{
					name: '折扣券',
					color: 'green'
				},
				{
					name: '新人券',
					color: 'orange'
				},
				{
					name: '满百减十券',
					color: 'orange'
				},
				{
					name: '兰蔻折扣九折券',
					color: 'orange'
				}
			]
		};
	},
	onLoad() {
		this.$t.mpShare.title = '🐅🐅💢🥳您有一条新年祝福待签收';
	},
	computed: {
		...mapState({
			iphoneModel: state => state.iphoneModel
		})
	},
	onReady() {
		this.$nextTick(() => {
			this.updateSwiperInfo();
		});
	},
	methods: {
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		tabsChange(index) {
			this.swiperIndex = index;
		},
		// 计算可滑动区域的高度信息
		updateSwiperInfo() {
			// 获取可滑动菜单的信息
			this._tGetRect('.order__tabs').then(res => {
				if (!res) {
					setTimeout(() => {
						this.updateSwiperInfo();
					}, 10);
					return;
				}
				const systemInfo = uni.getSystemInfoSync();
				this.swiperTop = res.bottom - this.vuex_custom_bar_height;
				this.swiperHeight = systemInfo.safeArea.height - res.bottom + systemInfo.statusBarHeight;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// @import '@/static/css/templatePage/custom_nav_bar.scss';
.template-browser {
	margin-bottom: calc(110rpx + env(safe-area-inset-bottom) / 2);
}

/* 祝福 start*/
.year-text {
	position: fixed;
	bottom: 8vh;
	margin: 0 auto;
	right: 0rpx;
	left: 0rpx;
	width: 690rpx;
}

/* .tnphone-black-min 细边框*/
.tnphone-black-min {
	width: 100%;
	height: 980rpx;
	border-radius: 40rpx;
	background: #c6d1d8;
	padding: 7rpx;
	display: table;
	color: #333;
	box-sizing: border-box;
	box-shadow: 0rpx 0rpx 0rpx 5rpx rgba(80, 80, 80, 0.8) inset;
	margin: 70rpx auto;
	cursor: default;
	position: relative;
}
.tnphone-black-min .skin {
	width: 100%;
	height: 100%;
	border-radius: 40rpx;
	background: #222;
	padding: 10rpx;
	box-shadow: 0rpx 0rpx 0rpx 7rpx rgba(68, 68, 68, 0.3);
}
.tnphone-black-min .screen {
	width: 100%;
	height: 100%;
	border-radius: 30rpx;
	background: #fff;
	position: relative;
	overflow: hidden;
}
.tnphone-black-min .head {
	width: 100%;
	height: 90rpx;
	text-align: center;
	position: absolute;
	padding: 45rpx 15rpx 10rpx 15rpx;
}
.tnphone-black-min .peak {
	left: 22%;
	width: 56%;
	height: 27rpx;
	margin: -2rpx auto 0rpx;
	border-radius: 0 0 20rpx 20rpx;
	background: #222;
	position: absolute;
}
.tnphone-black-min .sound {
	width: 48rpx;
	height: 6rpx;
	border-radius: 15rpx;
	background: #555;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -24rpx;
	margin-top: -10rpx;
	box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset;
}
.tnphone-black-min .lens {
	width: 6rpx;
	height: 6rpx;
	border-radius: 50%;
	background: #2c5487;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: 34rpx;
	margin-top: -10rpx;
}
.tnphone-black-min .talk {
	width: 50%;
	height: 6rpx;
	border-radius: 15rpx;
	background: rgba(0, 0, 0, 0.3);
	position: absolute;
	bottom: 8rpx;
	left: 50%;
	margin-left: -25%;
}
.tnphone-black-min .area-l,
.tnphone-black-min .area-r {
	width: 70rpx;
	height: 16rpx;
	position: absolute;
	top: 6rpx;
}
.tnphone-black-min .area-l {
	left: 0;
	text-align: center;
	font-size: 12rpx;
	line-height: 22rpx;
	text-indent: 10rpx;
	font-weight: 600;
	padding-left: 20rpx;
}
.tnphone-black-min .area-r {
	right: 0;
	text-align: center;
	font-size: 12rpx;
	line-height: 22rpx;
	text-indent: 10rpx;
	font-weight: 600;
	padding-right: 20rpx;
}
.tnphone-black-min .fa-feed {
	float: left;
	font-size: 12rpx !important;
	transform: rotate(-45deg);
	margin-top: 4rpx;
	margin-right: 8rpx;
}
.tnphone-black-min .fa-battery-full {
	float: left;
	font-size: 12rpx !important;
	margin-top: 6rpx;
}
.tnphone-black-min .fa-chevron-left {
	float: left;
	margin-top: 4rpx;
}
.tnphone-black-min .fa-cog {
	float: right;
	margin-top: 4rpx;
}
.tnphone-black-min .btn01 {
	width: 3rpx;
	height: 28rpx;
	border-radius: 3rpx 0 0 3rpx;
	background: #222;
	position: absolute;
	top: 105rpx;
	left: -3rpx;
}
.tnphone-black-min .btn02 {
	width: 3rpx;
	height: 54rpx;
	border-radius: 3rpx 0 0 3rpx;
	background: #222;
	position: absolute;
	top: 160rpx;
	left: -3rpx;
}
.tnphone-black-min .btn03 {
	width: 3rpx;
	height: 54rpx;
	border-radius: 3rpx 0 0 3rpx;
	background: #222;
	position: absolute;
	top: 230rpx;
	left: -3rpx;
}
.tnphone-black-min .btn04 {
	width: 3rpx;
	height: 86rpx;
	border-radius: 0 3rpx 3rpx 0;
	background: #222;
	position: absolute;
	top: 180rpx;
	right: -3rpx;
}

/* 轮播样机样式 start*/
.card-swiper {
	height: 90vh !important;
}

.card-swiper swiper-item {
	width: 100% !important;
	box-sizing: border-box;
	padding: 0rpx 20rpx 90rpx 20rpx;
	overflow: initial;
	display: flex;
	align-items: center;
}

.card-swiper swiper-item .swiper-item {
	display: block;
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: 8vh;
	width: 100%;
	display: block;
	transform: scale(0.7, 0.7);
	transition: all 0.4s ease 0s;
	overflow: hidden;
	opacity: 0;
}

.card-swiper swiper-item.cur .swiper-item-text {
	transform: scale(1);
	transition: all 0.4s ease 0s;
	opacity: 1;
}

.image-banner {
	display: flex;
	align-items: center;
	justify-content: center;
}
.image-banner image {
	width: 100%;
	height: 980rpx;
	// border: 1rpx solid red;
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
	opacity: 0;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	margin: 0 8rpx !important;
	top: -80rpx;
	position: relative;
}

.spot.active {
	opacity: 0;
	width: 30rpx;
	background-color: #000;
}
/* 悬浮 */
.rocket-sussuspension {
	animation: tiger 3s ease-in-out infinite;
}

@keyframes tiger {
	0%,
	100% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(-0.8rem, 1rem);
	}
}

.login {
	position: relative;
	height: 100%;
	z-index: 1;

	/* 背景图片 start */
	&__bg {
		z-index: -1;
		position: fixed;

		&--top {
			top: 0;
			left: 0;
			right: 0;
			width: 100%;

			.bg {
				width: 750rpx;
				will-change: transform;
			}
			.rocket {
				margin: 50rpx 30%;
				width: 300rpx;
				will-change: transform;
			}
		}

		&--bottom {
			bottom: -10rpx;
			left: 0;
			right: 0;
			width: 100%;
			// height: 144px;
			// margin-bottom: env(safe-area-inset-bottom);

			image {
				width: 750rpx;
				will-change: transform;
			}
		}
	}
}
/* 背景图片 end */

/* 底部tabbar start*/
.footerfixed {
	position: fixed;
	width: 100%;
	bottom: 0;
	z-index: 999;
	// background-color: #FFFFFF;
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
	margin: 0;
	overflow: initial;
}

.bar-center {
	animation: suspension 3s ease-in-out infinite;
}

@keyframes suspension {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-0.8rem);
	}
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
	margin: 0rpx auto 0rpx;
	text-align: center;
	font-size: 52rpx;
	line-height: 90rpx;
	// background-color: #01BEFF;
	width: 100rpx !important;
	height: 100rpx !important;
	overflow: hidden;
	// border-radius: 50%;
	// box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
	//   0px -8px 40px rgba(255, 255, 255, 1),
	//   inset 0px -10px 10px rgba(70,23,129, 0.05),
	//   inset 0px 10px 20px rgba(255, 255, 255, 1);
	// box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
}

.tabbar .action .bar-circle image {
	width: 100rpx;
	height: 100rpx;
	display: inline-block;
	margin: 0rpx auto 0rpx;
}

/* 流星+悬浮 */
.nav-index-button {
	animation: suspension 3s ease-in-out infinite;
	z-index: 999999;

	&__content {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&--icon {
			width: 100rpx;
			height: 100rpx;
			font-size: 60rpx;
			border-radius: 50%;
			margin-bottom: 18rpx;
			position: relative;
			z-index: 1;
			transform: scale(0.85);

			&::after {
				content: ' ';
				position: absolute;
				z-index: -1;
				width: 100%;
				height: 100%;
				left: 0;
				bottom: 0;
				border-radius: inherit;
				opacity: 1;
				transform: scale(1, 1);
				background-size: 100% 100%;
				// background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
			}
		}
	}

	&__meteor {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);

		&__wrapper {
			width: 100rpx;
			height: 100rpx;
			transform-style: preserve-3d;
			animation: spin 20s linear infinite;
		}

		&__item {
			position: absolute;
			width: 100rpx;
			height: 100rpx;
			border-radius: 1000rpx;
			left: 0;
			top: 0;

			&--pic {
				display: block;
				width: 100%;
				height: 100%;
				background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc2.png) no-repeat center center;
				background-size: 100% 100%;
				animation: arc 4s linear infinite;
			}
		}
	}
}

@keyframes suspension {
	0%,
	100% {
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
/* 自定义导航栏内容 end */

.order {
	&--wrap {
		position: fixed;
		left: 0;
		right: 0;
		width: 100%;
		background-color: inherit;
	}

	/* 导航栏 start */
	&__tabs {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background-color: inherit;
	}
	/* 导航栏 end */

	/* swiper start */
	&__swiper {
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
		background-color: inherit;
		padding: 0 16rpx;
	}
	/* swiper end */

	/* 订单内容 start */
	&__item {
		margin: 20rpx;
		padding: 36rpx 26rpx;
		background-color: #ffffff;
		border-radius: 18rpx;

		&:first-child {
			margin-top: 40rpx;
		}

		&:last-child {
			margin-bottom: 0;
		}

		/* 头部 start */
		&__head {
			&__title {
				font-weight: bold;
				line-height: normal;

				&--right-icon {
					font-size: 24rpx;
					margin-left: 8rpx;
				}
			}

			&__status {
				font-size: 22rpx;
				color: #aaaaaa;
			}
		}
		/* 头部 end */

		/* 内容 start */
		&__content {
			margin-top: 20rpx;

			&__image {
				margin-right: 20rpx;

				image {
					width: 140rpx;
					height: 140rpx;
					border-radius: 10rpx;
				}
			}

			&__title {
				padding-right: 40rpx;
				display: -webkit-box;
				overflow: hidden;
				white-space: normal !important;
				text-overflow: ellipsis;
				word-wrap: break-word;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			&__info {
				&__price {
					&--unit {
						font-size: 20rpx;
					}
					&__value--integer,
					&__value--decimal {
						font-weight: bold;
					}
					&__value--decimal {
						font-size: 20rpx;
					}
				}

				&__count {
					color: #aaaaaa;
					font-size: 24rpx;
				}
			}
		}
		/* 内容 end */

		/* 操作按钮 start */
		&__operation {
			margin-top: 20rpx;

			&__right {
				&__button {
					margin-left: 10rpx;
				}
			}
		}
		/* 操作按钮 end */
	}
	/* 订单内容 end */
}
/* 计划内容 start*/
.tn-plan-content {
	&__item {
		display: inline-block;
		line-height: 45rpx;
		padding: 10rpx 30rpx;
		margin: 20rpx 20rpx 5rpx 0rpx;

		&--prefix {
			padding-right: 10rpx;
		}
	}
}
.tn-plan-content2 {
	&__item {
		line-height: 45rpx;
		padding: 15rpx 30rpx;
		margin: 30rpx 0rpx 10rpx 0rpx;

		&--prefix {
			padding-right: 10rpx;
		}
	}
}
</style>
