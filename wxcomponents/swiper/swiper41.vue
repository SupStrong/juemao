<template>
	<view>
		<view class="rax-view-v2">
			<view class="rax-view-v2 InfoCard--info_card_welfare--3ugqqIR">
				<view class="rax-view-v2 InfoCard--info_card_welfare_bg--2VoejIl"></view>
				<view class="rax-view-v2 InfoCard--info_card_welfare_context--3DChPBU">
					做好事 攒爱豆
					<view class="rax-view-v2 InfoCard--info_card_welfare_context_icon--3ZIo0Lq"></view>
				</view>
			</view>
			<view class="rax-view-v2 InfoCard--info_card_center--26vHbzb">
				<view class="rax-view-v2 InfoCard--info_card_center_block--2eHcvw-">
					<text class="rax-text-v2 InfoCard--info_card_center_title--2dpPefS">当前爱豆</text>
					<text class="rax-text-v2 InfoCard--info_card_center_num--1mrI3dd">0</text>
				</view>
				<view class="rax-view-v2 InfoCard--info_card_center_block--2eHcvw-">
					<text class="rax-text-v2 InfoCard--info_card_center_title--2dpPefS">勋章/枚</text>
					<text class="rax-text-v2 InfoCard--info_card_center_num--1mrI3dd">0</text>
				</view>
				<view class="rax-view-v2 InfoCard--info_card_center_line--53o3bQP"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.rax-view-v2 {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-content: flex-start;
	border: 0 solid #000;
	margin: 0;
	padding: 0;
	min-width: 0;
}
@-webkit-keyframes Loading--partLoadingCircle--395efT0 {
	0% {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(1turn);
	}
}
@keyframes Loading--partLoadingCircle--395efT0 {
	0% {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(1turn);
	}
}
.InfoCard--info_card_welfare_bg--2VoejIl {
  position: absolute;
  bottom: 0;
  right: 5.86667vw;
  width: 21.06667vw;
  height: 12.8vw;
  background: url('https://gw.alicdn.com/imgextra/i3/O1CN013w274F26yOKPfx86I_!!6000000007730-2-tps-158-96.png') no-repeat;
  background-size: 100% 100%
}

.InfoCard--info_card_welfare_context--3DChPBU {
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: 84vw;
  height: 9.86667vw;
  padding: 0 4.26667vw;
  box-shadow: inset 0 .26667vw .53333vw 0 rgba(255, 246, 211, .64);
  border-radius: 4.26667vw 4.26667vw 0 0;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  font-size: 15px;
  line-height: 9.86667vw;
  text-shadow: 0 1px 1px rgba(255, 52, 0, .5);
  color: #fff;
  background: url('https://gw.alicdn.com/imgextra/i2/O1CN01H2fAok1cWy8yhvuQD_!!6000000003609-2-tps-630-74.png') no-repeat;
  background-size: 100% 100%
}
.ErrrorPage--empty_data_context--2nesgrp {
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.ErrrorPage--empty_data_context_img--1ASGh0r {
	width: 26.13333vw;
	height: 26.13333vw;
	margin-top: 17.06667vw;
	margin-bottom: 4.26667vw;
}
.ErrrorPage--empty_data_context_text--3wgqybd {
	font-family: PingFangSC-Medium;
	font-size: 3.46667vw;
	color: #999;
}
.ErrrorPage--refresh--2H5k8Rv {
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #00b573;
	letter-spacing: 0;
	text-align: center;
	font-weight: 500;
	border: 1px solid #00b573;
	width: 94px;
	height: 36px;
	line-height: 36px;
	border-radius: 21px;
	margin: 16px auto 0;
}
.EmptyData--empty_data_context--2rwNjHj {
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.EmptyData--empty_data_context_img--1gGAKR2 {
	width: 24.8vw;
	height: 18.66667vw;
	margin-top: 17.06667vw;
	margin-bottom: 6.4vw;
}
.EmptyData--empty_data_context_text--1bUYYnC {
	font-family: PingFangSC-Medium;
	font-size: 4vw;
	color: #999;
}
.GovAndFirmBenefitItem--card--1BkUMG1 {
	border-radius: 8px;
	padding: 3.2vw;
	background: #fff;
	flex-direction: row;
	margin-bottom: 3.73333vw;
}
.GovAndFirmBenefitItem--card_left--1Pfw7H9 {
	width: 28vw;
	height: 28vw;
	border-radius: 1.06667vw;
	overflow: hidden;
	line-height: 28vw;
	justify-content: center;
}
.GovAndFirmBenefitItem--card_left--1Pfw7H9 > img {
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
}
.GovAndFirmBenefitItem--card_right--1vlejWL {
	width: 53.86667vw;
	margin-left: 3.2vw;
	position: relative;
}
.GovAndFirmBenefitItem--card_right_title--3UfVswf {
	font-family: PingFangSC-Medium;
	font-size: 3.73333vw;
	color: #333;
	letter-spacing: 0;
	font-weight: 500;
	line-height: 5.33333vw;
}
.GovAndFirmBenefitItem--card_right_subtitle--2N1QvdV,
.GovAndFirmBenefitItem--card_right_title--3UfVswf {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.GovAndFirmBenefitItem--card_right_subtitle--2N1QvdV {
	margin-top: 2.13333vw;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #999;
	font-weight: 400;
}
.GovAndFirmBenefitItem--card_right_botton--XT744zn {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 17.06667vw;
	height: 6.4vw;
	border-radius: 4vw;
	font-family: PingFangSC-Semibold;
	font-size: 3.2vw;
	color: #fff;
	text-align: center;
	font-weight: 600;
	line-height: 6.4vw;
}
.GovAndFirmBenefitItem--card_right_auth--2b0Kpfj {
	background-image: linear-gradient(-10deg, #00b573, #3de76a);
}
.GovAndFirmBenefitItem--card_right_noauth--2cR5ogC {
	background-image: linear-gradient(-6deg, #ff5000, #ff984d);
}
.MaterialItem--card_item--2Rca3dQ {
	width: 44vw;
	margin-bottom: 3.46667vw;
	background: #fff;
	border-radius: 2.13333vw;
	box-shadow: 0 1px 8px -7px rgba(0, 0, 0, 0.15);
}
.MaterialItem--card_item_img--eSNiSlt {
	height: 44vw;
	width: 44vw;
	border-radius: 2.13333vw 2.13333vw 0 0;
	justify-content: center;
	background: #f0f0f0;
	overflow: hidden;
}
.MaterialItem--card_item_img--eSNiSlt > img {
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
}
.MaterialItem--card_item_context--206EcBC {
	padding: 1.06667vw 2.13333vw 0;
}
.MaterialItem--card_item_context_title--2m5qYtb {
	font-family: PingFangSC-Medium;
	font-size: 3.73333vw;
	color: #333;
	font-weight: 500;
	line-height: 5.33333vw;
	text-align: justify;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.MaterialItem--card_item_context_condition--3lSetGD {
	margin-top: 2.13333vw;
	flex-direction: row;
	width: 100%;
}
.MaterialItem--card_item_context_surplus--3yo5NnH {
	margin-top: 3.2vw;
	margin-bottom: 3.2vw;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #666;
	letter-spacing: 0;
	font-weight: 400;
}
.MaterialItem--card_item_context_surplus_title--2XBsbL5 {
	flex-direction: row;
}
.MaterialItem--card_item_context_surplus_num--2nj3f8F {
	font-size: 3.2vw;
	color: #00b573;
	letter-spacing: 0;
}
.MaterialItem--card_item_context_surplus_button--31fxXM_ {
	width: 17.06667vw;
	height: 6.4vw;
	border-radius: 4vw;
	font-family: PingFangSC-Semibold;
	font-size: 3.2vw;
	line-height: 6.4vw;
	color: #fff;
	text-align: center;
}
.MaterialItem--card_item_context_surplus_exchange--3f1-TnG {
	background-image: linear-gradient(-6deg, #ff5000, #ff984d);
}
.MaterialItem--card_item_context_surplus_begin--2XbvaZb {
	background: #d0d0d0;
}
.ExchangeModal--modal--3oY220h {
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	justify-content: center;
	align-items: center;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalMask--3wEwIxi {
	position: fixed;
	z-index: 9999;
	height: 100%;
	width: 100%;
	background-color: #131212;
	opacity: 0.48;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalWrap--1u4exff {
	position: fixed;
	overflow: auto;
	z-index: 9999;
	font-size: 3.73333vw;
	color: #333;
	top: 50%;
	transform: translateY(-50%);
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContent--3qjt5YC {
	position: relative;
	width: 88.26667vw;
	max-width: 88.26667vw;
	min-height: 59.73333vw;
	max-height: 100%;
	margin: 0 auto;
	background: #fcfcfc;
	border-radius: 4.26667vw;
	padding: 8.53333vw 7.46667vw;
	overflow: auto;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--closeIcon--1EpYWi_ {
	width: 4vw;
	height: 4vw;
	position: absolute;
	top: 3.73333vw;
	right: 3.73333vw;
	background: transparent;
	color: #999;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentHeader--iTTIkLV {
	align-items: center;
	justify-content: center;
	margin-top: 2.66667vw;
	font-family: PingFangSC-Medium;
	font-size: 4.8vw;
	color: #333;
	text-align: center;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentBody--3dja84C {
	font-family: PingFangSC-Regular;
	font-size: 3.73333vw;
	color: #333;
	text-align: center;
	font-weight: 400;
	margin: 4vw 0 5.33333vw;
	flex: 1 1 auto;
	overflow: auto;
	justify-content: center;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentFooter--1ksuaNH {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentFooter--1ksuaNH .ExchangeModal--btn--i2jxRgG {
	width: 33.33333vw;
	height: 10.66667vw;
	border-radius: 5.6vw;
	line-height: 10.66667vw;
	font-family: PingFangSC-Medium;
	font-size: 3.73333vw;
	text-align: center;
	font-weight: 500;
	justify-content: center;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentFooter--1ksuaNH .ExchangeModal--btn--i2jxRgG.ExchangeModal--alert--2DzIYol {
	width: 73.33333vw;
	background-image: linear-gradient(-2deg, #00b573 9%, #3de76a);
	color: #fff;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentFooter--1ksuaNH .ExchangeModal--btn--i2jxRgG.ExchangeModal--confirm--21OFoXs {
	background-image: linear-gradient(-2deg, #ff5000, #ff984d);
	color: #fff;
}
.ExchangeModal--modal--3oY220h .ExchangeModal--modalContentFooter--1ksuaNH .ExchangeModal--cancelBtn--1Ss02ch {
	border: 0.26667vw solid #ff5000;
	border-radius: 5.6vw;
	color: #ff5000;
	letter-spacing: 0;
}
.ExchangeModal--disable--3oN97cK {
	position: relative;
	flex-direction: row;
	opacity: 0.5;
}
.Badge--badge--3OPDpYB {
	border-radius: 0.53333vw;
	border: 0.26667vw solid transparent;
	padding: 0 1.33333vw;
	font-family: PingFangSC-Medium;
	font-size: 2.66667vw;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	min-height: 5.33333vw;
	justify-content: center;
	align-items: center;
}
.Badge--badge--3OPDpYB + .Badge--badge--3OPDpYB {
	margin-left: 2.13333vw;
}
.BannersItem--banner_slider--5EMZJjQ {
	width: 44vw;
	height: 70.66667vw;
	margin-bottom: 3.46667vw;
	border-radius: 2.13333vw;
	box-shadow: 0 1px 8px -7px rgba(0, 0, 0, 0.15);
}
.BannersItem--banner_slider--5EMZJjQ .BannersItem--img_context--3VWO550 {
	width: 44vw;
	height: 70.66667vw;
	border-radius: 1.06667vw;
	overflow: hidden;
	justify-content: center;
}
.BannersItem--banner_slider_img--3kU9-Cq {
	width: 44vw;
	-o-object-fit: cover;
	object-fit: cover;
	display: inline-block;
	vertical-align: middle;
}
.rax-slider-pagination {
	width: 100%;
}
.rax-slider-children {
	justify-content: center;
}
.rax-slider-pagination {
	bottom: 4.26667vw;
}
.rax-slider-dot,
.rax-slider-dot.rax-slider-dot-active {
	width: 1.33333vw;
	height: 1.33333vw;
	border-radius: 50%;
	background: #fff;
	opacity: 1;
}
.rax-slider-dot.rax-slider-dot-active {
	background: #00b573;
}
.InfoCard--info_card_welfare_context_icon--3ZIo0Lq {
	margin-left: 1.06667vw;
	width: 3.2vw;
	height: 3.2vw;
	background: url('https://gw.alicdn.com/imgextra/i4/O1CN0161f0s01PZdRVDZFO7_!!6000000001855-2-tps-28-28.png') no-repeat;
	background-size: 100% 100%;
}
.InfoCard--info_card_center--26vHbzb {
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	padding: 5.33333vw;
	border-radius: 2.13333vw;
	box-shadow: 0 0.53333vw 1.06667vw 0 rgba(0, 0, 0, 0.08);
	background: #fff;
	text-align: center;
}
.InfoCard--info_card_center_block--2eHcvw- {
	flex-basis: 50%;
}
.InfoCard--info_card_center_title--2dpPefS {
	font-family: PingFangSC-Regular;
	font-weight: 400;
	font-size: 3.2vw;
	color: #999;
	line-height: 4.53333vw;
}
.InfoCard--info_card_center_num--1mrI3dd {
	margin-top: 1.06667vw;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	font-size: 6.4vw;
	color: #00b573;
	line-height: 8.8vw;
}
.InfoCard--info_card_center_line--53o3bQP {
	position: absolute;
	top: 7.2vw;
	left: 50%;
	width: 0.26667vw;
	height: 10.93333vw;
	background-color: #eee;
}
.InfoCard--info_card_bottom_bean--8xpVhiC {
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	font-family: PingFangSC-Regular;
}
.InfoCard--info_card_bottom_num--3QX6v2Z {
	font-family: PingFangSC-Medium;
	color: #ff6134;
	letter-spacing: 0;
}
</style>
