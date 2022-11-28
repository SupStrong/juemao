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
		<view class="login__bg login__bg--top"><image class="bg" src="https://tnuiimage.tnkjapp.com/bless/bless-top.jpg" mode="widthFix"></image></view>
		<view class="login__bg login__bg--top"><image class="rocket rocket-sussuspension" src="https://tnuiimage.tnkjapp.com/bless/bless-fish.png" mode="widthFix"></image></view>
		<swiper
			class="card-swiper tn-margin-top-sm"
			:circular="true"
			:autoplay="true"
			duration="500"
			interval="5000"
			previous-margin="75rpx"
			next-margin="75rpx"
			@change="cardSwiper"
			style="margin-top: 45px;"
		>
			<swiper-item v-for="(item, index) in itemsList" :key="index">
				<view class="tnphone-black-min swiper-item  wow fadeInLeft2">
					<view class="skin wow fadeInRight2">
						<view class="screen wow fadeInUp2">
							<view class="peak wow">
								<view class="sound"></view>
								<view class="lens"></view>
							</view>

							<view class="image-banner">
								<l-painter class="fl-row-center" isCanvasToTempFilePath @success="handleSuccess($event)" :board="item.template" :dirty="true" />
							</view>
						</view>
					</view>
				</view>
				<view class="swiper-item-text tn-text-center">
					<view class="tn-text-xl tn-text-bold tn-padding-top-xs">{{ item.name }}</view>
				</view>
			</swiper-item>
		</swiper>

		<view class="tn-text-center year-text">
			 <tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="#01BEFF" fontColor="#FFFFFF" margin="10rpx 0" class='save-button'  @click="saveToCarame()">保存到相册</tn-button>
		</view>

		<!-- 底部背景图片-->
		<view class="login__bg login__bg--bottom"><image src="https://tnuiimage.tnkjapp.com/bless/bless-bottom.jpg" mode="widthFix"></image></view>
	</view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js';
import { mapState, mapMutations } from 'vuex';
const customStyle = '';
export default {
	name: 'TemplateBless',
	mixins: [template_page_mixin],
	data() {
		return {
			cardCur: 0,
			shareImg: '',
			customStyle: customStyle,
			authorization: false,
			itemsList: [
				{
					id: 202,
					type: 1,
					title: '笨蛋',
					status: 0,
					template: {
						type: 'image',
						width: '530rpx',
						height: '980rpx',
						borderRadius: '10rpx',
						src: 'http://admin.cw100.com/storage/uploads/image/2022/11/01/c43576d5c09a1667793a0c93c784d5dc.png',
						css: {
							width: '530rpx',
							borderRadius: '20rpx',
							height: '980rpx',
							background: ''
						},
						views: [
							{
								type: 'image',
								src: 'http://admin.cw100.com//storage/data/mini_wxcbe60162f9dc451c/2020/04/21/_a=3361&t=kq&sid=87&cid=110100.jpg',
								css: {
									hasBorder: 0,
									right: '28rpx',
									bottom: '122rpx',
									position: 'fixed',
									width: '161rpx',
									height: '161rpx',
									borderRadius: '0'
								}
							}
						]
					},
					small_bg: 'https://guide.cw100.com/storage/uploads/image/2021/06/13/9a1e549ccbf3db9c75d33a0b8e99ee47.jpg'
				},
				{
					id: 201,
					template: {
						type: 'image',
						src: 'https://tnuiimage.tnkjapp.com/swiper/swiper1.jpg',
						css: {
							// 根节点若无尺寸，自动获取父级节点

							width: '530rpx',
							height: '980rpx',
							borderRadius: '20rpx',
						},
						views: [
							{
								css: {
									background: '#07c160',
									height: '120rpx',
									width: '120rpx',
									display: 'inline-block'
								},
								type: 'view'
							},
							{
								css: {
									background: '#333333',
									height: '120rpx',
									width: '120rpx',
									position: 'fixed',
									top: '120rpx',
									right: '139rpx',
									borderTopRightRadius: '60rpx',
									borderBottomLeftRadius: '60rpx',
									display: 'inline-block',
									margin: '0 30rpx'
								},
								views: [],
								type: 'image'
							},
							{
								css: {
									background: '#ff9d00',
									height: '120rpx',
									width: '120rpx',
									borderRadius: '50%',
									display: 'inline-block'
								},
								views: [],
								type: 'view'
							}
						]
					},
					small_bg: 'https://guide.cw100.com//storage/uploads/image/2021/06/13/3628229474e090b988239e3f0b9505b7.jpg'
				},
				{
					id: 201,
					template: {
						type: 'image',
						src: 'https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg',
						css: {
							// 根节点若无尺寸，自动获取父级节点
							width: '530rpx',
							height: '980rpx',
							borderRadius: '20rpx',
						},
						views: [
							{
								css: {
									background: '#07c160',
									height: '120rpx',
									width: '120rpx',
									display: 'inline-block'
								},
								type: 'view'
							},
							{
								css: {
									background: '#333333',
									height: '120rpx',
									width: '120rpx',
									position: 'fixed',
									top: '120rpx',
									right: '139rpx',
									borderTopRightRadius: '60rpx',
									borderBottomLeftRadius: '60rpx',
									display: 'inline-block',
									margin: '0 30rpx'
								},
								views: [],
								type: 'image'
							},
							{
								css: {
									background: '#ff9d00',
									height: '120rpx',
									width: '120rpx',
									borderRadius: '50%',
									display: 'inline-block'
								},
								views: [],
								type: 'view'
							}
						]
					},
					small_bg: 'https://guide.cw100.com//storage/uploads/image/2021/06/13/3628229474e090b988239e3f0b9505b7.jpg'
				}
			]
		};
	},
	onLoad() {
		this.$t.mpShare.title = '🐅🐅💢🥳您有一条新年祝福待签收';
	},
	computed: {
		...mapState({
			iphoneModel: state => state.iphoneModel,
		})
	},
	methods: {
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		handleSuccess(e){
			console.log(e,"eeee")
		},
		// 跳转到
		navTuniaoUI(e) {
			wx.vibrateShort();
		},
		saveToCarame() {
			let _this = this;
			wx.showLoading({
				title: '图片保存中...'
			});
			wx.getSetting({
				success(res) {
					if (res.authSetting['scope.writePhotosAlbum'] == true) {
						_this.saveImage();
					}
					if (!res.authSetting['scope.writePhotosAlbum']) {
						uni.authorize({
							scope: 'scope.writePhotosAlbum',
							success() {
								_this.saveImage();
							},
							fail(errMsg) {
								_this.authorization = true;
								showPopup('请点击授权按钮', 0);
							}
						});
					}
				}
			});
		},
		saveImage() {
			console.log("tmd",this.shareImg)
			let _this = this;
			_this.authorization = false;
			wx.saveImageToPhotosAlbum({
				filePath: _this.shareImg,
				success: function() {
					wx.hideLoading();
					showPopup('已保存至手机', 1);
				}
			});
		},
		// 跳转到
		navTuniaoHome(e) {
			uni.navigateTo({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/templatePage/custom_nav_bar.scss';
.template-browser {
	margin-bottom: calc(110rpx + env(safe-area-inset-bottom) / 2);
}

/* 祝福 start*/
.year-text {
	position: fixed;
	bottom: 30rpx;
	margin: 0 auto;
	right: 0rpx;
	left: 0rpx;
	width: 690rpx;
}

/* .tnphone-black-min 细边框*/
.tnphone-black-min {
	width: 100%;
	height: 1010rpx;
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
	height: 1010rpx;
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
</style>
