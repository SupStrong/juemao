<template>
	<view class="template-bless tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack v-if="!curItem.isHome">
			<view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
				<text class="icon tn-icon-left"></text>
				<text class="icon tn-icon-home-capsule-fill"></text>
			</view>
			<view class="logo-banner"><image :src="tabbar.logoImg" mode=""></image></view>
		</tn-nav-bar>
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF" v-else>
		  <view class="" style="width: 72vw;overflow: hidden;">
			<tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" bold="true" :fontSize="36"></tn-tabs>
		  </view>
		</tn-nav-bar>
		<view class="top-backgroup"><image class="backgroud-image" :src="tabbar.topImg" mode=""></image></view>

		<!-- 底部背景图片-->
		<view class="login__bg login__bg--bottom"><image :src="tabbar.bottomImg" mode="widthFix"></image></view>
		<!-- 底部tabbar start-->
		<view class="tabbar footerfixed">
			<view class="action" @click="navTuniaoUI(item,index)" :class="{ 'bar-center': item.isHome }" v-for="(item, index) of tabbar.list" :key="index">
				<!-- 小tabbar -->
				<view class="" v-if="item.isHome != true">
			<view class="bar-icon"><image class="" :src="curIndex == index ? item.activeIcon : item.inactiveIcon"></image></view>
					<tn-badge
						v-if="item.num"
						:dot="false"
						backgroundColor="tn-bg-red"
						fontColor="#FFFFFF"
						:radius="item.dot ? 14 : 0"
						:fontSize="14"
						padding="2rpx 4rpx"
						:absolute="true"
						:top="2"
					>
						{{ item.num }}
					</tn-badge>
					<view class="tn-color-gray">{{ item.title }}</view>
				</view>
				<!-- 居中tabbar -->
				<view class="nav-index-button" v-else>
		 		<view class="nav-index-button__content">
						<view class="nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center">
							<view class="bar-circle"><image class="" :src="item.activeIcon"></image></view>
						</view>
					</view>

					<view class="nav-index-button__meteor">
						<view class="nav-index-button__meteor__wrapper">
							<view
								v-for="(item, index) in 6"
								:key="index"
								class="nav-index-button__meteor__item"
								:style="{ transform: `rotateX(${-60 + 30 * index}deg) rotateZ(${-60 + 30 * index}deg)` }"
							>
								<view class="nav-index-button__meteor__item--pic"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 悬浮 -->
		<tn-landscape :show="show2" @close="closeLandscape" closePosition="bottom" :closeSize="60">
			<!-- 方式9 start-->
			<view class="tn-flex" style="margin-bottom: 100rpx;padding-top: 46vh;">
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navCreate">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
							<view class="tn-icon-camera-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center"><text class="tn-text-ellipsis">发起活动</text></view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navCreate">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
							<view class="tn-icon-flag-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center"><text class="tn-text-ellipsis">去带点货</text></view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navCreate">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
							<view class="tn-icon-topics-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center"><text class="tn-text-ellipsis">创建圈子</text></view>
					</view>
				</view>
			</view>
		</tn-landscape>
		<view class="edit tnxuanfu" @click="showLandscape">
			<view class="bg0 pa">
				<view class="bg1"><image src="https://tnuiimage.tnkjapp.com/my/my6.png" class="button-shop shadow"></image></view>
			</view>
			<view class="hx-box pa">
				<view class="pr">
					<view class="hx-k1 pa0"><view class="span"></view></view>
					<view class="hx-k2 pa0"><view class="span"></view></view>
					<view class="hx-k3 pa0"><view class="span"></view></view>
					<view class="hx-k4 pa0"><view class="span"></view></view>
					<view class="hx-k5 pa0"><view class="span"></view></view>
					<view class="hx-k6 pa0"><view class="span"></view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js';

export default {
	name: 'index',
	mixins: [template_page_mixin],
	data() {
		return {
			show2: false,
			curIndex:0,
			curItem:{},
			scrollList: [
			  {name: '单品', count: '10'},
			  {name: '品牌', count: '10'},
			  {name: '分类'},
			  {name: '专题'},
			  {name: '排行榜'},
			  {name: '文章'}
			],
			tabbar: {
				bottomImg: 'https://tnuiimage.tnkjapp.com/bless/bless-bottom.jpg',
				topImg: 'https://tnuiimage.tnkjapp.com/index_bg/basic_new.jpg',
				logoImg: 'http://www.cofco.com/img/logo.png',
				allBgColor:'',
			 list: [
				 {
						title: '首页',
						activeIcon: 'https://tnuiimage.tnkjapp.com/bless/bless-home.png',
						inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/home_tn.png',
						num: '120',
						path: ''
					},
					{
						title: '商城',
						activeIcon: 'https://tnuiimage.tnkjapp.com/bless/bless-flower.png',
						inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/information_tn.png',
					 num: '40',
					 path: ''
					},
					{
						title: '活动',
						activeIcon: 'https://tnuiimage.tnkjapp.com/bless/bless-tiger.png',
						inactiveIcon: '',
						isHome: true,
						path: ''
					},
					{
						title: '方案',
						activeIcon: 'https://tnuiimage.tnkjapp.com/bless/bless-china.png',
						inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/case_tnnew.png',
						path: ''
					},
					{
						title: '分佣订单',
						activeIcon: 'https://tnuiimage.tnkjapp.com/bless/bless-money.png',
						inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/my_tn.png',
						path: ''
					}
				]
			}
		};
	},
	components: {},
	onLoad() {},
	methods: {
		navTuniaoUI(item,index) {
			this.curIndex = index;
			this.curItem = item;
			console.log(item, 'item');
		},
		navCreate(){
			console.log("111")
		},
		// 弹出压屏窗
		showLandscape() {
			this.show2 = true;
		},
		// 关闭压屏窗
		closeLandscape() {
			this.show2 = false;
		},
	}
};
</script>

<style lang="scss" scoped>
// @import '@/static/css/templatePage/custom_nav_bar.scss';
.template-bless {
	height: 100vh;
	overflow: scroll;
}
page {
	height: 100vh;
	overflow: scroll;
}
.top-backgroup {
	height: 667rpx;
	z-index: -1;

	.backgroud-image {
		width: 100%;
		height: 667rpx;
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
				height: 144rpx !important;
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
/deep/ .tn-badge {
	right: 40rpx !important;
}
// 悬浮
/* 悬浮 */
.tnxuanfu {
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
/* 悬浮按钮 */
.button-shop {
	width: 90rpx;
	height: 90rpx;
	display: flex;
	flex-direction: row;
	position: fixed;
	/* bottom:200rpx;
        right: 20rpx; */
	left: 5rpx;
	top: 5rpx;
	z-index: 1001;
	border-radius: 100px;
	opacity: 0.9;
}

/* 按钮 */
.edit {
	bottom: 300rpx;
	right: 75rpx;
	position: fixed;
	z-index: 9999;
}

.pa,
.pa0 {
	position: absolute;
}

.pa0 {
	left: 0;
	top: 0;
}

.bg0 {
	width: 100rpx;
	height: 100rpx;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.bg1 {
	width: 100%;
	height: 100%;
}

.hx-box {
	top: 50%;
	left: 50%;
	width: 100rpx;
	height: 100rpx;
	transform-style: preserve-3d;
	transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
}

.hx-box .pr {
	width: 100rpx;
	height: 100rpx;
	transform-style: preserve-3d;
	animation: hxz 20s linear infinite;
}

@keyframes hxz {
	0% {
		transform: rotateX(0deg);
	}

	100% {
		transform: rotateX(-360deg);
	}
}

.hx-box .pr .pa0 {
	width: 100rpx;
	height: 100rpx;
	/* border: 4px solid #5ec0ff; */
	border-radius: 1000px;
}

.hx-box .pr .pa0 .span {
	display: block;
	width: 100%;
	height: 100%;
	background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat center center;
	background-size: 100% 100%;
	animation: hx 4s linear infinite;
}

@keyframes hx {
	to {
		transform: rotate(360deg);
	}
}

.hx-k1 {
	transform: rotateX(-60deg) rotateZ(-60deg);
}

.hx-k2 {
	transform: rotateX(-30deg) rotateZ(-30deg);
}

.hx-k3 {
	transform: rotateX(0deg) rotateZ(0deg);
}

.hx-k4 {
	transform: rotateX(30deg) rotateZ(30deg);
}

.hx-k5 {
	transform: rotateX(60deg) rotateZ(60deg);
}

.hx-k6 {
	transform: rotateX(90deg) rotateZ(90deg);
}
  /* 图标容器9 start */
  .icon9 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;
      
      &--icon {
        width: 110rpx;
        height: 110rpx;
        font-size: 65rpx;
        border-radius: 50%;
        margin: 20rpx 40rpx;
        position: relative;
        z-index: 1;
        
        &::after {
          content: " ";
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
        }
      }
    }
  }
</style>
