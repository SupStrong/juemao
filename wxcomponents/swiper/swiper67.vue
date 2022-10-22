<template>
	<view>
		<view class="rax-view-v2 Tabs-Block" style="box-sizing: content-box; height: 54.6406px;">
			<view class="rax-view-v2 Tabs-Container" style="height: 54.6406px; box-sizing: border-box; width: 100%; z-index: 3; border-color: rgba(151, 151, 151, 0.2);">
				<view
					class="rax-view-v2 Tabs-Container-Level1"
					style="background-color: rgb(245, 245, 245); border-top-left-radius: 4.8vw; border-top-right-radius: 4.8vw; width: 100%; position: relative; overflow: hidden; height: 54.6406px;"
				>
					<view
						class="rax-view-v2 Tabs-Wrapper"
						style="overflow: scroll hidden; display: flex; flex-direction: row; box-sizing: content-box; padding-bottom: 17px; position: static; height: 54.6406px;"
					>
						<view class="rax-view-v2">
							<view class="rax-view-v2">
								<view style="height: 13.2vw; width: 33.3333vw;" class="NewTabItem--tabBarItemWrap--2PaGWnb">
									<span class="rax-text-v2 NewTabItem--tabItemText--3fZ2k-U" style="margin-bottom: 4.5333vw; color: rgb(51, 51, 51);">今日爆款</span>
									<span class="rax-text-v2 NewTabItem--feedsBottomText--2yQuzCL" style="color:#999;">热卖中</span>
								</view>
							</view>
						</view>
						<view class="rax-view-v2" style="width: 138px;">
							<view class="rax-view-v2">
								<view
									style="height: 13.2vw; background-color: rgb(255, 255, 255); border-top-left-radius: 4.8vw; border-top-right-radius: 4.8vw; width: 33.3333vw;"
									class="NewTabItem--tabBarItemWrap--2PaGWnb"
								>
									<span class="rax-text-v2 NewTabItem--tabItemText--3fZ2k-U" style="margin-bottom: 4.5333vw; color: rgb(254, 16, 68);">早10点抢</span>
									<view class="rax-view-v2 CountDown--countdownWrap--1r0lTyi" style="background: rgb(255, 238, 245);">
										<view class="rax-view-v2 CountDown--countTimeBox--11FNSmO">
											<img
												style="position: absolute; left: 0vw; width: 2.4vw; height: 3.4667vw;"
												src="//gw.alicdn.com/imgextra/i4/O1CN01FWwSlo1GFddwOHLgJ_!!6000000000593-2-tps-18-25.png_110x10000.jpg_.webp"
											/>
											<span class="rax-text-v2 CountDown--countdownTime--19j-89t" style="background: rgb(255, 57, 95);">2</span>
										</view>
										<span
											class="rax-text-v2 CountDown--countdownText--qqUiPg_ rax-text-v2--overflow-hidden rax-text-v2--singleline"
											style="color: rgb(255, 47, 99);"
										>
											小时后结束
										</span>
									</view>

									<view class="rax-view-v2 NewTabItem--tabItemActiveDom--2mNpAGB" style="right:-3.20000vw;">
										<view class="rax-view-v2 NewTabItem--tabActiveSector--1M4XBox" style="right:-3.20000vw;"></view>
									</view>
									<view class="rax-view-v2 NewTabItem--tabItemActiveDom--2mNpAGB" style="left:-3.20000vw;">
										<view class="rax-view-v2 NewTabItem--tabActiveSector--1M4XBox" style="left:-3.20000vw;"></view>
									</view>
								</view>
							</view>
						</view>
						<view class="rax-view-v2">
							<view class="rax-view-v2">
								<view style="height: 13.2vw; width: 33.3333vw;" class="NewTabItem--tabBarItemWrap--2PaGWnb">
									<span class="rax-text-v2 NewTabItem--tabItemText--3fZ2k-U" style="margin-bottom: 4.5333vw; color: rgb(51, 51, 51);">晚8点半抢</span>
									<view class="rax-view-v2 CountDown--countdownWrap--1r0lTyi" style="background: rgb(225, 246, 223);">
										<view class="rax-view-v2 CountDown--countTimeBox--11FNSmO">
											<img
												style="position: absolute; left: 0vw; width: 2.4vw; height: 3.4667vw;"
												src="//gw.alicdn.com/imgextra/i4/O1CN01FWwSlo1GFddwOHLgJ_!!6000000000593-2-tps-18-25.png_110x10000.jpg_.webp"
											/>
											<span class="rax-text-v2 CountDown--countdownTime--19j-89t" style="background: rgb(31, 171, 79);">9</span>
										</view>
										<span
											class="rax-text-v2 CountDown--countdownText--qqUiPg_ rax-text-v2--overflow-hidden rax-text-v2--singleline"
											style="color: rgb(31, 171, 79);"
										>
											小时后开始
										</span>
									</view>
								</view>
							</view>
						</view>
						<view class="rax-view-v2"></view>
					</view>
				</view>
				<view class="rax-view-v2 Tabs-Container-Level2" style="position:relative;"><view class="rax-view-v2" style="display:flex;"></view></view>
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
.rax-view,
.rax-view-v2 {
	box-sizing: border-box;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	-webkit-align-content: flex-start;
	align-content: flex-start;
	border: 0 solid #000;
	margin: 0;
	padding: 0;
	min-width: 0;
}
.rax-view {
	position: relative;
}
.videoplus {
	width: 750;
	height: 422;
}
.videoDowngradeImgWrapper,
.videoplus,
.videoStartBtnWrapper {
	position: relative;
}
.videoDowngradeImg,
.videoStartBtn {
	position: absolute;
}
.videoStartBtn {
	width: 120;
	height: 120;
}
.mask {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 8;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.rax-text-v2 {
	box-sizing: border-box;
	display: block;
	font-size: 4.26667vw;
	white-space: pre-wrap;
}
.rax-text-v2--overflow-hidden {
	overflow: hidden;
}
.rax-text-v2--singleline {
	white-space: nowrap;
}
.rax-text-v2--multiline {
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
.MessageBtn--folded--2hyi3I4 {
	padding-left: 6.93333vw;
}
.MessageBtn--arrow--2vA7mxs {
	width: 1.33333vw;
	height: 1.73333vw;
	margin: auto 0 auto 1.06667vw;
}
.MessageBtn--text--1zVUwsM {
	-webkit-flex-direction: row;
	flex-direction: row;
	overflow: hidden;
	max-width: 60vw;
	height: 8.66667vw;
	color: #fff;
	font-size: 3.2vw;
	white-space: nowrap;
	font-family: PingFangSC-Medium, Helvetica, sans-serif;
}
.MessageBtn--text--1zVUwsM span {
	font-size: 3.2vw;
}
.MessageBtn--shadow--n3p9FVr {
	position: absolute;
	bottom: -0.53333vw;
	left: 50%;
	width: 17.2vw;
	height: 1.73333vw;
	border-radius: 50%/50%;
	background: #fff;
	opacity: 0.4;
	-webkit-filter: blur(1.06667vw);
	filter: blur(1.06667vw);
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.OctopusIcon--container--2g_5Lvp {
	position: absolute;
	top: -5.06667vw;
	left: -9.33333vw;
	z-index: 0;
	width: 100%;
	height: 18.66667vw;
	opacity: 0;
	pointer-events: none;
	-webkit-transform: translateX(50%);
	transform: translateX(50%);
}
.OctopusIcon--container_y--2NgEqpw {
	-webkit-transform: translateY(-50%) scale(1);
	transform: translateY(-50%) scale(1);
	-webkit-transform-origin: 9.33333vw 50%;
	transform-origin: 9.33333vw 50%;
}
.OctopusIcon--container_folded--3p1zNte {
	z-index: 2;
	opacity: 1;
	-webkit-transform: translateX(0);
	transform: translateX(0);
}
.OctopusIcon--container_folded--3p1zNte .OctopusIcon--container_y--2NgEqpw {
	-webkit-transform: translateY(0) scale(0.6);
	transform: translateY(0) scale(0.6);
}
.OctopusIcon--container_transition--1TbB6BP {
	-webkit-transition: all 0.35s ease-out;
	transition: all 0.35s ease-out;
}
.OctopusIcon--container_transition--1TbB6BP .OctopusIcon--container_y--2NgEqpw {
	-webkit-transition: -webkit-transform 0.35s ease-in;
	transition: -webkit-transform 0.35s ease-in;
	transition: transform 0.35s ease-in;
	transition: transform 0.35s ease-in, -webkit-transform 0.35s ease-in;
}
.OctopusIcon--image--1waFBUu {
	position: relative;
	z-index: 1;
	width: 18.66667vw;
	height: 18.66667vw;
	border-radius: 50%;
	box-shadow: 0 1.33333vw 4.26667vw 0 rgba(255, 53, 48, 0.18);
}
.OctopusIcon--shadow--1OuXiuM {
	position: absolute;
	bottom: -1.06667vw;
	left: 2.13333vw;
	display: inline-block;
	width: 14.4vw;
	height: 12.66667vw;
	border-radius: 50%;
	background: #f93a4a;
	opacity: 0.38;
	-webkit-filter: blur(3.46667vw);
	filter: blur(3.46667vw);
}
.OctopusIconDynamic--container--3Uy-njq {
	position: absolute;
	top: -5.06667vw;
	left: 50%;
	opacity: 1;
	-webkit-transition: opacity 0.1s linear;
	transition: opacity 0.1s linear;
}
.OctopusIconDynamic--folded--1xNF1ow {
	opacity: 0;
}
.OctopusIconDynamic--clickArea--3WPyzMx,
.OctopusIconDynamic--image--XAR3N4h {
	position: absolute;
	bottom: 0;
	left: 50%;
	-webkit-transform: translate(-50%, 50%);
	transform: translate(-50%, 50%);
}
.OctopusIconDynamic--clickArea--3WPyzMx {
	width: 18.66667vw;
	height: 18.66667vw;
	border-radius: 50%;
	box-shadow: 0 1.33333vw 4.26667vw 0 rgba(255, 53, 48, 0.18);
}
.OctopusIconDynamic--shadow--1u60Jzn {
	position: absolute;
	top: -1.06667vw;
	left: 50%;
	display: inline-block;
	width: 14.4vw;
	height: 12.66667vw;
	border-radius: 50%;
	background: #f93a4a;
	opacity: 0.38;
	-webkit-filter: blur(3.46667vw);
	filter: blur(3.46667vw);
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.BottomFloatOld--container--2xV_iWF {
	position: fixed;
	bottom: 8.66667vw;
	left: 50%;
	height: 8.66667vw;
	-webkit-transition: bottom 0.3s linear;
	transition: bottom 0.3s linear;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.BottomFloatOld--moving--3a5VHBy {
	bottom: -10vw;
}
.MessageBtn--containerBox--1oEVnj7 {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.MessageBtn--container--Aajh5x3 {
	position: relative;
	right: -29.46667vw;
	z-index: 1;
	display: inline-block;
	overflow: hidden;
	max-width: 100%;
	height: 17.6vw;
	margin-right: -0.13333vw;
	padding-left: 8.53333vw;
	background-image: url('//gw.alicdn.com/imgextra/i2/O1CN01ItgaUx283GAT0Neot_!!6000000007876-2-tps-36-132.png');
	background-size: 100% 100%;
	background-repeat: repeat-x;
	text-align: center;
	pointer-events: auto;
	-webkit-transition: right 0.3s linear;
	transition: right 0.3s linear;
}
.MessageBtn--textBox--1F3pm3z {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 16.66667vw;
	height: 17.6vw;
}
.MessageBtn--textBox1--3PpNRx- {
	width: 26.66667vw;
	height: 17.6vw;
}
.MessageBtn--folded--2wngRIZ {
	padding-left: 8.53333vw;
}
.MessageBtn--text2--rxKtMqs {
	color: #fff;
	font-size: 3.73333vw;
	line-height: 4.66667vw;
	letter-spacing: 0;
	text-align: center;
}
.MessageBtn--text--1hvWGq5 {
	-webkit-flex-direction: row;
	flex-direction: row;
	overflow: hidden;
	max-width: 22.4vw;
	color: #fff;
	font-size: 3.73333vw;
	white-space: nowrap;
	font-family: PingFangSC-Medium, Helvetica, sans-serif;
}
.MessageBtn--text--1hvWGq5 span {
	font-size: 3.2vw;
}
.MessageBtn--containerRightImg--2uwhYNq {
	z-index: 0;
	width: 2.66667vw;
	height: 17.6vw;
}
.MessageBtn--arrow--wt6g2iI {
	width: 1.33333vw;
	height: 1.73333vw;
	margin: auto 0 auto 1.06667vw;
}
.MessageBtn--textBox2--3Ue_KAq {
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 16.66667vw;
	height: 17.6vw;
}
.MessageBtn--textBox2--3Ue_KAq,
.MessageBtn--textBoxLeft--3-aA8B0 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.MessageBtn--textBoxLeft--3-aA8B0 {
	-webkit-flex-direction: column;
	flex-direction: column;
}
.MessageBtn--arrow2--24bcwiu {
	width: 1.33333vw;
	height: 1.73333vw;
	margin-top: 5.73333vw;
	margin-left: 0.8vw;
}
.MessageBtn--appearBox--1tXVCHU {
	right: -12.13333vw;
}
.MessageBtn--moving--3mtSzx4 {
	right: -34.66667vw;
}
.CountDown--progressBox--rIzgGkp {
	width: 16.53333vw;
	height: 16.53333vw;
	margin-top: -0.13333vw;
	margin-left: -0.13333vw;
}
.CountDown--progress--3bZDuhL {
	fill: hsla(0, 0%, 100%, 0);
	stroke: #ff242d;
	-webkit-transition: stroke-dashoffset 1s linear;
	transition: stroke-dashoffset 1s linear;
	cx: 8.26667vw;
	cy: 8.13333vw;
	r: 7.86667vw;
	stroke-linecap: round;
	stroke-width: 0.66667vw;
}
.CountDown--progressBoxBG--3R1xitY {
	position: absolute;
	top: -0.13333vw;
	left: -0.13333vw;
	width: 16.26667vw;
	height: 16.4vw;
	border-radius: 50%;
	background: #fff;
}
.CountDown--countDownTime--1pkksFi {
	position: absolute;
	top: 3.2vw;
	left: 50%;
	z-index: 3;
	border-radius: 50%;
	color: #ff1440;
	font-weight: 500;
	font-size: 4.53333vw;
	text-align: center;
	opacity: 0;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	-webkit-animation: CountDown--hide-opacity--2pdRsx- 0.5s linear 1 alternate forwards;
	animation: CountDown--hide-opacity--2pdRsx- 0.5s linear 1 alternate forwards;
	-webkit-animation-delay: 1.5s;
	animation-delay: 1.5s;
	font-family: Helvetica;
}
.CountDown--processImg--r5EUXeI {
	position: absolute;
	top: 0.6vw;
	left: 0.46667vw;
	z-index: 2;
	width: 15.06667vw;
	height: 15.06667vw;
	border-radius: 50%;
}
.CountDown--processImg2Box--9bz8X-y {
	position: absolute;
	top: 0.8vw;
	left: 0.6vw;
	z-index: 2;
	width: 14.8vw;
	height: 14.8vw;
	border-radius: 50%;
	background-image: #ff1818;
}
.CountDown--processImg2--2LKdrFJ {
	position: absolute;
	top: 0;
	left: 0;
	width: 14.8vw;
	height: 14.8vw;
	border-radius: 50%;
}
@-webkit-keyframes CountDown--hide-opacity--2pdRsx- {
	0% {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes CountDown--hide-opacity--2pdRsx- {
	0% {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.OctopusIcon--container--3puAczL {
	position: absolute;
	top: 0.66667vw;
	right: 0.8vw;
	z-index: 2;
	width: 16.26667vw;
	height: 16.26667vw;
	opacity: 1;
	pointer-events: auto;
	-webkit-transition: right 0.3s linear;
	transition: right 0.3s linear;
}
.OctopusIcon--container_y--1gjJ9fe {
	width: 16.26667vw;
	height: 16.33333vw;
	background-image: url('//gw.alicdn.com/imgextra/i2/O1CN01STJuxh1O2pTR5FmJ7_!!6000000001648-2-tps-122-122.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.OctopusIcon--image--1_daJRd {
	position: relative;
	top: 0.86667vw;
	left: 0.73333vw;
	z-index: 1;
	width: 14.66667vw;
	height: 14.66667vw;
	border-radius: 50%;
	box-shadow: 0 1.33333vw 4.26667vw 0 rgba(255, 53, 48, 0.18);
	-webkit-transition: -webkit-transform 0.3s linear;
	transition: -webkit-transform 0.3s linear;
	transition: transform 0.3s linear;
	transition: transform 0.3s linear, -webkit-transform 0.3s linear;
}
.OctopusIcon--shadow--3eXgXFi {
	position: absolute;
	bottom: -3.33333vw;
	left: 2.13333vw;
	display: inline-block;
	width: 34.66667vw;
	height: 4vw;
	border-radius: 50%;
	background: #f93a4a;
	opacity: 0.5;
	-webkit-filter: blur(3.46667vw);
	filter: blur(3.46667vw);
	pointer-events: none;
}
.OctopusIcon--moving--1fdEmfl {
	-webkit-transform: rotate(-35deg);
	transform: rotate(-35deg);
}
.OctopusIcon--movingRight--3H52FeR {
	right: -5.33333vw;
}
.OctopusIcon--appearBox--3xy-aoZ {
	right: 17.33333vw;
}
.BottomFloat--container--2TfH1Kk {
	position: fixed;
	right: 0;
	bottom: 26vw;
	z-index: 4;
	height: 17.6vw;
	pointer-events: none;
}
.Inspection--inspect_wrap--1M3gK-O {
	right: 4vw;
	bottom: 50%;
	z-index: 3;
	-webkit-flex-direction: column;
	flex-direction: column;
	overflow: hidden;
	width: 10.66667vw;
	height: 10.66667vw;
	border: 0.2vw solid #888;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.2);
}
.Inspection--inspect_pop_wrap--KOdC21k,
.Inspection--inspect_wrap--1M3gK-O {
	position: fixed;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.Inspection--inspect_pop_wrap--KOdC21k {
	top: 0;
	left: 0;
	z-index: 999999998;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
}
.Inspection--inspect_pop_content--35pKBr4 {
	width: 80vw;
	max-height: 70%;
	padding: 2.4vw;
	border-radius: 1.6vw;
	background-color: #fff;
}
.Inspection--inspect_pop_title_row--2BuFENW {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 5.33333vw;
}
.Inspection--inspect_pop_title---Y0bIfm {
	-webkit-flex: 1;
	flex: 1;
	height: 5.33333vw;
	color: #333;
	font-weight: 600;
	font-size: 4.26667vw;
}
.Inspection--inspect_pop_close--21NQAmV {
	-webkit-justify-content: center;
	justify-content: center;
	width: 5.33333vw;
	height: 5.33333vw;
}
.Inspection--inspect_pop_close--21NQAmV,
.Inspection--inspect_pop_tablist--20s-URh {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.Inspection--inspect_pop_tablist--20s-URh {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 5.6vw;
	margin-top: 1.6vw;
	margin-bottom: 1.6vw;
	border-bottom: 0.2vw solid #eee;
}
.Inspection--inspect_pop_tabItem--28jcKSR {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 5.6vw;
	padding-right: 1.6vw;
	padding-left: 1.6vw;
	border-top-left-radius: 0.8vw;
	border-top-right-radius: 0.8vw;
}
.Inspection--inspect_pop_list--38xLLFt {
	-webkit-flex: 1;
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
	margin-top: 1.6vw;
	padding: 2.13333vw;
	background-color: #eee;
}
.Inspection--inspect_pop_list_content--yzH5GOf {
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.Inspection--inspect_pop_item--37mzrLk,
.Inspection--inspect_pop_list_content--yzH5GOf {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: flex-start;
	align-items: flex-start;
}
.Inspection--inspect_pop_item--37mzrLk {
	position: relative;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 100%;
	min-height: 5.6vw;
	margin-bottom: 1.33333vw;
}
.Inspection--label--2ruVvJ3 {
	color: #333;
	font-weight: 800;
	font-size: 3.2vw;
}
.Inspection--value--2qqjeIf {
	-webkit-flex: 1;
	flex: 1;
	color: #999;
	font-size: 3.2vw;
	text-align: right;
	white-space: pre-wrap;
	word-wrap: break-word;
	word-break: break-all;
}
.Inspection--inspect_pop_btn--3PLPVMU {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-align-self: center;
	align-self: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 18.66667vw;
	height: 8vw;
	margin-top: 2.4vw;
	border-radius: 0.8vw;
	background-color: #209bfa;
}
.Inspection--inspect_pop_btnText--2aInMMh {
	color: #fff;
	font-weight: 600;
	font-size: 3.73333vw;
}
.Inspection--inspect_pop_copy_tips_box--1niI8ey {
	position: absolute;
	top: 2.66667vw;
	left: 13.33333vw;
	text-align: center;
}
.Inspection--inspect_pop_copy_tips--3PwZMaP {
	width: 13.33333vw;
	height: 8vw;
	border-radius: 2.66667vw;
	background-color: #000;
	color: #fff;
	font-size: 2.4vw;
	line-height: 8.13333vw;
	text-align: center;
}
.Inspection--inspect_pop_copy_tips--3PwZMaP:before {
	content: '';
	position: absolute;
	top: 7.46667vw;
	left: 50%;
	width: 0;
	height: 0;
	margin-left: -2vw;
	border: 2vw solid transparent;
	border-top-color: #000;
}
.Inspection--inspect_pop_spm--2Fd5grd {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	margin-top: 0.8vw;
	font-weight: 800;
}
.Inspection--inspect_pop_spmLeftText--1FgpU3k {
	width: 18vw;
	margin-right: 13.33333vw;
	margin-left: 3.2vw;
	color: #333;
	font-size: 3.2vw;
}
.mt-selectdrawer--medium {
	width: 35.73333vw;
	height: 5.33333vw;
	font-size: 2.93333vw;
}
.mt-selectdrawer-content {
	height: 2.66667vw;
	padding: 0.8vw;
	background-color: #fff;
	font-size: 2.93333vw;
	line-height: 2.66667vw;
	text-align: center;
}
.mt-switch {
	width: 8vw;
	height: 4.53333vw;
}
.BackPop--share_dialog_box--3jCjXxZ {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.65);
}
.BackPop--share_dialog_box--3jCjXxZ,
.BackPop--share_dialog_content--FBn0mvO {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 100vw;
}
.BackPop--share_dialog_content--FBn0mvO {
	position: relative;
}
.BackPop--dialog_content--1E3sNa0 {
	position: absolute;
	top: 17.33333vw;
	left: 50%;
	-webkit-justify-content: center;
	justify-content: center;
	width: 42.66667vw;
	height: 26.66667vw;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.BackPop--share_dialog--1A3BrL6 {
	position: relative;
	width: 100vw;
}
.BackPop--money_box--15L6aN7 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
}
.BackPop--money_num--YRl3uip {
	color: #df2a4e;
	font-weight: 700;
	font-size: 14.93333vw;
}
.BackPop--money_unit--3lg66C6 {
	color: #df2a4e;
	font-weight: 700;
	font-size: 5.73333vw;
}
.BackPop--money_tips--1eh3rUu {
	color: #f61951;
	font-size: 3.06667vw;
	text-align: center;
}
.BackPop--first_logo_box--N0cNTY- {
	bottom: 29.2vw;
}
.BackPop--first_logo_box--N0cNTY-,
.BackPop--logo_box--1yBmDKY {
	position: absolute;
	left: 50%;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 85;
	height: 85;
	border: 0.66667vw solid #f4d9ad;
	border-radius: 7.33333vw;
	background: #fff;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.BackPop--logo_box--1yBmDKY {
	top: 29.2vw;
}
.BackPop--logo--2MXu_vW {
	width: 10vw;
	height: 10vw;
	border-radius: 5.33333vw;
}
.BackPop--linkBtn--26e0tQG {
	position: absolute;
	bottom: 8.93333vw;
	width: 39.06667vw;
	height: 8.66667vw;
}
.BackPop--coupon_dialog_content--2-NxhM_ {
	position: absolute;
	top: 16vw;
	left: 50%;
	width: 42.66667vw;
	height: 48vw;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.BackPop--coupon_card--vrvKdEr {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	overflow: hidden;
	width: 44.4vw;
	height: 17.73333vw;
	margin-top: 2.66667vw;
	padding: 1.6vw;
	border-radius: 0.93333vw;
	background-color: #fff;
}
.BackPop--coupon_money_num--3JPrVnE {
	height: 17.33333vw;
	color: #df2a4e;
	color: linear-gradient(90deg, #ff1152, #df2a4e);
	font-weight: 700;
	font-size: 14.93333vw;
}
.BackPop--coupon_money_tips--3kdEFOD {
	height: 4.53333vw;
	color: linear-gradient(90deg, #ff1152, #df2a4e);
	font-size: 3.06667vw;
	text-align: center;
}
.BackPop--coupon_card_content--246gzji {
	-webkit-flex: 1;
	flex: 1;
}
.BackPop--card_title--1Dq-2r- {
	width: 25.06667vw;
	margin-bottom: 1.86667vw;
	color: #0f0f0f;
	font-weight: 600;
	font-size: 2.66667vw;
}
.BackPop--card_originprice--KwH5ND4 {
	color: #b3b3b3;
	font-size: 2.66667vw;
	line-height: 3.06667vw;
	letter-spacing: 0;
	text-decoration: line-through;
}
.BackPop--card_price--3160bJV {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	color: #f61951;
	line-height: 3.86667vw;
	text-align: center;
}
.BackPop--card_price_nuit--2qwBbYs {
	font-size: 2.93333vw;
}
.BackPop--card_price_num--1Pa6n6t {
	font-size: 4.13333vw;
}
.BackPop--card_price_font--2WdMsNI {
	margin-left: 0.8vw;
	font-size: 2.4vw;
}
.BackPop--receiveBtn--3f0w7yp {
	height: 8.66667vw;
}
.BackPop--shop_font--_pqtDbz {
	margin-bottom: 2.13333vw;
	color: #fee4bd;
	font-size: 3.06667vw;
	text-align: center;
}
.BackPop--shop_font_reset--2pAGXjA {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 23.06667vw;
	height: 8.66667vw;
	margin-right: 1.86667vw;
	border: 2px solid #fee4bd;
	border-radius: 4.26667vw;
	color: #fee4bd;
	font-size: 4.26667vw;
	opacity: 0.8;
}
.BackPop--share_dialog_close_btn--2F6kScn {
	position: absolute;
	top: -7.86667vw;
	right: 8.93333vw;
	width: 6.93333vw;
	height: 6.93333vw;
}
.BackPop--back_btn--365FtB5 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	margin-top: 4vw;
}
.CustomPop--customPopContent--19rzzUj {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.8);
}
.CustomPop--customPopCloseContent--RvQVVoU {
	width: 8vw;
	height: 8vw;
	margin-top: 3.2vw;
}
.CustomPop--customPop--23UBD8G {
	position: relative;
	z-index: 1000;
}
.CustomPop--customPopAction--2y0yGTj {
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 77.33333vw;
	height: 100%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.DataView--dataview--zs8Mnnl {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 12;
	padding: 1.33333vw;
	border-radius: 0.8vw;
	background-color: rgba(0, 0, 0, 0.4);
}
.DataView--dataItem--3yI9KXT {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.6vw;
}
.DataView--label--2mHevlV {
	color: #fff;
	font-weight: 600;
	font-size: 3.2vw;
}
.DataView--value--PJCwdSj {
	color: #eee;
	font-size: 3.2vw;
}
.Bubbles--bubbles--3VFpQyp {
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 100vw;
	margin-bottom: 2.4vw;
	padding: 0 2.4vw;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.Bubbles--bubblesContent--1qEgwaB {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	width: 46.4vw;
	height: 34.13333vw;
	padding-top: 3.06667vw;
	border-radius: 3.2vw;
	background-color: #fff;
	-webkit-transition: width 1s;
	transition: width 1s;
}
.Bubbles--bubblesContentBg--3gvbniJ {
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 3.2vw 3.2vw 0 0;
}
.Bubbles--cnxmTitleContent--3K1IRZe {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	width: 100%;
	height: 2.93333vw;
}
.Bubbles--cnxmTitleImage--1dUYGKt {
	margin-right: 0.93333vw;
	margin-left: 2.8vw;
}
.Bubbles--bubblesContentLink--1CQCNKc {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
}
.Bubbles--bubblesTitle--1ZVN1DT {
	padding-left: 2.49333vw;
	color: #000;
	font-size: 3.73333vw;
	line-height: 5.33333vw;
}
.Bubbles--bubblesTitleContent--wf5HCoy {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	width: 100%;
	height: 2.93333vw;
	margin-bottom: 1.6vw;
}
.Bubbles--bubblesLabel--gTArh2I {
	color: #ff2241;
	font-size: 2.66667vw;
	line-height: 3.73333vw;
}
.Bubbles--bubblesTitleImg--Ns1Rm-6 {
	margin-right: 0.8vw;
	margin-left: 2.93333vw;
}
.Bubbles--bubblesTitleMore--1M0MX8I {
	position: absolute;
	right: 2.66667vw;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 4vw;
}
.Bubbles--bubblesTitleMoreText--15Q_rcz {
	margin-right: 0.66667vw;
	color: #999;
	font-size: 2.93333vw;
	text-align: right;
	font-family: PingFangSC-Regular;
}
.Bubbles--bubblesGood--2UlAnBA {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 46.4vw;
	margin-top: 1.86667vw;
	padding: 0 3.2vw;
}
.Bubbles--bubblesGoodItem--3LYsZhI {
	position: relative;
	overflow: hidden;
}
.Bubbles--bubblesGoodItem--3LYsZhI,
.Bubbles--bubblesGoodItemLink--302xrrX {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.Bubbles--bubblesGoodItemLink--302xrrX {
	-webkit-flex-direction: column;
	flex-direction: column;
}
.Bubbles--picUrl--fbzOZ_I {
	width: 14.66667vw;
	height: 14.66667vw;
}
.Bubbles--itemPic--2kaMaNJ {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.Bubbles--liveIcon--3BU6C23 {
	position: absolute;
	top: 1.33333vw;
	left: 0;
	width: 4.26667vw;
	height: 4.26667vw;
}
.Bubbles--bubblesGoodItemPrice--3Lp7nWK {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-top: 0.26667vw;
}
.Bubbles--bubblesGoodItemPriceUnit--1kzstP3 {
	margin-right: 0.66667vw;
	color: #fe1044;
	font-size: 2.66667vw;
	line-height: 4vw;
	letter-spacing: 0;
	font-family: AlibabaSans102-Bd;
}
.Bubbles--bubblesGoodItemShortTitle--1LUHAaE {
	color: #666;
	font-size: 2.93333vw;
	text-align: center;
	opacity: 0.8;
}
.Bubbles--bubblesGoodItemPriceNum--2aWw0qf {
	color: #fe1044;
	font-size: 4.26667vw;
	line-height: 4vw;
	letter-spacing: 0;
	font-family: AlibabaSans102-Bd;
}
.Bubbles--bubblesBybtGood--2lamHPr {
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 46.4vw;
	padding: 0 4.26667vw;
}
.Bubbles--bubblesBybtGood--2lamHPr,
.Bubbles--bubblesBybtGoodItemPrice--2tHA0a1 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.Bubbles--bubblesBybtGoodItemPrice--2tHA0a1 {
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-top: 0.53333vw;
	margin-bottom: 0.53333vw;
}
.Bubbles--bubblesBybtGoodItemPriceUnit--3_b9tio {
	margin-right: 0.66667vw;
	color: #fe1044;
	font-size: 2.66667vw;
	line-height: 4vw;
	letter-spacing: 0;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Bubbles--bubblesBybtGoodItemPriceNum--SYm1ev6 {
	color: #fe1044;
	font-size: 4.26667vw;
	line-height: 4vw;
	letter-spacing: 0;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Bubbles--bubblesSubsidy--3q1kdnM {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	max-width: 20vw;
	margin-top: 0.4vw;
	border-radius: 1.06667vw;
	background-color: #ffe2ee;
}
.Bubbles--bubblesSubsidyTextBox--VtBrmXn {
	width: 8vw;
	height: 3.86667vw;
}
.Bubbles--bubblesSubsidyTextBoxBackground--3v46FeG {
	position: absolute;
	width: 8vw;
	height: 3.86667vw;
}
.Bubbles--bubblesSubsidyContent--1ukcpT7 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	min-width: 8vw;
	height: 3.86667vw;
	padding: 0 0.8vw 0 0.53333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Bubbles--bubblesSubsidyDesc--is-SYzO {
	z-index: 1;
	vertical-align: center;
	width: 7.46667vw;
	color: #fff;
	font-weight: 700;
	font-size: 2.66667vw;
	line-height: 3.86667vw;
	text-align: center;
	font-family: PingFangSC-Regular, sans-serif;
}
.Bubbles--bubblesSubsidyPrice--1osCGRU {
	font-weight: 700;
}
.Bubbles--bubblesSubsidyPrice--1osCGRU,
.Bubbles--bubblesSubsidyPriceUnit--3rc8L8u {
	color: #fe1044;
	font-size: 2.66667vw;
	line-height: 3.86667vw;
	font-family: AlibabaSans102-Bd;
}
.Bubbles--subsidies--1OP2nKw {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	width: 16vw;
	height: 3.86667vw;
	margin-top: 0.4vw;
	border-radius: 1.06667vw;
}
.Bubbles--subsidiesBackground--15o_Dgk {
	position: absolute;
	top: 0;
	left: 0;
	width: 16vw;
	height: 4vw;
	background-image: -webkit-linear-gradient(bottom, #ff174d, #fe5f45);
	background-image: linear-gradient(0deg, #ff174d, #fe5f45);
}
.Bubbles--subsidiesText--2excpx3 {
	position: relative;
	z-index: 1;
	color: #fff;
	font-size: 2.4vw;
	line-height: 2.4vw;
}
.Bubbles--bubblesBybtGoodTurnBox--2wNzHq_ {
	position: relative;
	width: 16.66667vw;
}
.Bubbles--bubblesGoodTurnItem--rYlywTr {
	position: absolute;
	top: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
}
.Bubbles--picUrlTurn--2yXFEDk {
	width: 14.66667vw;
	height: 14.66667vw;
	-webkit-transition: all 1.5s ease 0.1s;
	transition: all 1.5s ease 0.1s;
}
.Buoy--buoy--wJdxVO3 {
	position: fixed;
	right: 2.4vw;
	bottom: 0;
	z-index: 3;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-transition: -webkit-transform 0.2s ease-in-out;
	transition: -webkit-transform 0.2s ease-in-out;
	transition: transform 0.2s ease-in-out;
	transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
	-webkit-transform: translateY(100%);
	transform: translateY(100%);
}
.Buoy--buoy_show_back_top--21ZL-3N {
	-webkit-transition: -webkit-transform 0.4s ease-in-out;
	transition: -webkit-transform 0.4s ease-in-out;
	transition: transform 0.4s ease-in-out;
	transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.Buoy--active_icon--6-h04Gk {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 16vw;
	height: 16vw;
	margin-top: -24.53333vw;
	margin-bottom: 8.53333vw;
}
.Buoy--active_icon_img--2JgyMSo {
	display: block;
	width: 100%;
	height: 100%;
}
.Buoy--back_top--3hZOU9K {
	width: 11.73333vw;
	height: 11.73333vw;
}
.Buoy--back_top--3hZOU9K:active {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
.CouponsPop--couponsPop--2R04WhY {
	position: fixed;
	bottom: 0;
	z-index: 10;
	width: 100vw;
	height: 26.13333vw;
	border-radius: 4.8vw 4.8vw 0 0;
	background: rgba(0, 0, 0, 0.7);
}
.CouponsPop--couponsPopClose--8gpraUe {
	position: absolute;
	top: 1.06667vw;
	right: 2.93333vw;
	z-index: 1;
	width: 2.53333vw;
	height: 2.53333vw;
	padding: 1.6vw;
}
.CouponsPop--couponsPopTitleBox--2Ypt44P {
	position: relative;
	width: 100%;
	margin: 1.33333vw auto;
}
.CouponsPop--couponsPopTitleLeftCoin--1-cjeGU {
	position: absolute;
	top: -3.33333vw;
	left: 21.73333vw;
	width: 14.4vw;
	height: 12vw;
}
.CouponsPop--couponsPopTitleRightCoin--3ExkeWK {
	position: absolute;
	top: -2.66667vw;
	right: 24.8vw;
	width: 10.93333vw;
	height: 8.53333vw;
}
.CouponsPop--couponsPopTitle--3C897sa {
	color: #fff;
	font-size: 4vw;
	letter-spacing: 0;
	text-align: center;
	font-family: PingFangSC-Medium, sans-serif;
}
.CouponsPop--itemMessageCoupon--3aaYVxH {
	position: relative;
	width: 95.2vw;
	height: 16vw;
	margin: 0 auto;
}
.CouponsPop--itemMessageCouponBackground--3BHrKCy {
	width: 95.2vw;
	height: 16vw;
}
.CouponsPop--itemMessageCouponContent--2mrxkEO {
	position: absolute;
	top: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	color: #ff0a4f;
	letter-spacing: 0;
	font-family: PingFangSC-Medium, sans-serif;
}
.CouponsPop--itemMessageCouponLeft--2zh7U2m {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.CouponsPop--itemMessageCouponPriceBox--3XrQ1IZ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	margin-left: 2.53333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.CouponsPop--itemMessageCouponPriceUnit--2jUmM4x {
	font-size: 4vw;
	line-height: 8vw;
}
.CouponsPop--itemMessageCouponPrice--3-Wjxic {
	margin-left: 0.8vw;
	font-size: 10.13333vw;
	line-height: 12vw;
	letter-spacing: -1px;
}
.CouponsPop--itemMessageCouponText--bm19Ol6 {
	margin-left: 4vw;
}
.CouponsPop--itemMessageCouponTitle--2fC-fS7 {
	font-size: 3.73333vw;
	line-height: 3.46667vw;
}
.CouponsPop--itemMessageCouponSubtitle--34HgWoK {
	margin-top: 2.13333vw;
	color: #ff0a4f;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.CouponsPop--itemMessageCouponBtnBox--2QZ5d8V {
	width: 26.4vw;
}
.CouponsPop--itemMessageCouponBtn--1gYtgbb,
.CouponsPop--itemMessageCouponBtnBox--2QZ5d8V {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	font-family: PingFangSC-Medium, sans-serif;
}
.CouponsPop--itemMessageCouponBtn--1gYtgbb {
	width: 20.8vw;
	height: 7.73333vw;
	border-radius: 3.92vw;
	background-image: -webkit-linear-gradient(bottom, hsla(0, 0%, 100%, 0) 85%, hsla(0, 0%, 100%, 0.59)), -webkit-linear-gradient(bottom, #ff1c81, #fe1010);
	background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 85%, hsla(0, 0%, 100%, 0.59)), linear-gradient(0deg, #ff1c81, #fe1010);
	color: #fff;
	font-size: 3.2vw;
	line-height: 3.95067vw;
	letter-spacing: 0;
}
.ImageResourcBit--root--1LXx30c {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	overflow: hidden;
	box-sizing: border-box;
	width: 95.2vw;
	height: 11.73333vw;
	margin: auto auto 2.66667vw;
	padding: 1.86667vw 3.46667vw 1.33333vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.ImageResourcBit--pictureBox--3MSj9bE {
	width: 25.86667vw;
	height: 7.73333vw;
}
.LiveStrip--liveStripWrap--3Vk6mvk {
	z-index: 1;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	overflow: hidden;
	width: 750;
	-webkit-transition: height 0.2s ease, opacity 0.2s ease;
	transition: height 0.2s ease, opacity 0.2s ease;
}
.LiveStrip--liveStripContent--yGI6_jW,
.LiveStrip--liveStripWrap--3Vk6mvk {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: center;
	justify-content: center;
}
.LiveStrip--liveStripContent--yGI6_jW {
	-webkit-align-items: center;
	align-items: center;
	width: 95.2vw;
	height: 16.8vw;
	background-image: url('https://gw.alicdn.com/imgextra/i2/O1CN01PcNsM422jxNWS3ZVC_!!6000000007157-2-tps-1428-252.png?getAvatar=avatar');
	background-position: top;
	background-size: 95.2vw 16.8vw;
	background-repeat: no-repeat;
}
.LiveStrip--liveStripBg--34APZPB {
	position: relative;
	width: 95.2vw;
	height: 17.06667vw;
}
.LiveStrip--liveStripTitleContainer--hzJko-H {
	position: absolute;
	top: 4vw;
	left: 3.33333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
	height: 10.93333vw;
}
.LiveStrip--liveStripTitleWrap--3l2iVFT {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.6vw;
}
.LiveStrip--liveStripTitle--2_uIz83,
.LiveStrip--liveStripTitleWrap--3l2iVFT {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.LiveStrip--liveStripTitle--2_uIz83 {
	-webkit-justify-content: center;
	justify-content: center;
	height: 5.33333vw;
}
.LiveStrip--liveStripTitleDesc--20N4zZA {
	color: #fff;
	font-weight: 600;
	font-size: 4vw;
}
.LiveStrip--liveStripTipImg--QOZxeHM {
	position: relative;
	width: 17.86667vw;
	height: 5.33333vw;
	margin-left: 0.8vw;
}
.LiveStrip--liveStripSubTitleWrap--3GnNt11 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 4.26667vw;
}
.LiveStrip--liveStripSubTitle--10I_bA_ {
	color: #fff;
	font-size: 3.2vw;
	opacity: 0.7;
}
.LiveStrip--liveStripItems--25AIrUS {
	position: absolute;
	top: 4.26667vw;
	right: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.LiveStrip--liveStripItem--2sG819K {
	position: relative;
	overflow: hidden;
	width: 10.4vw;
	height: 10.4vw;
	padding: 1.2vw;
	border-radius: 1.6vw;
	background-color: #fff;
}
.LiveStrip--liveStripItemImg--1ZdJCkd {
	position: relative;
	width: 8vw;
	height: 8vw;
}
.Search--search_content_box--1JdQzIu {
	position: relative;
}
.Search--topSearchControl--1uWWaeG {
	position: absolute;
	width: 100%;
	height: 0.13333vw;
	opacity: 0;
	pointer-events: none;
}
.Search--search_content--23Agk2S {
	position: relative;
	z-index: 10;
	width: 100vw;
	margin: 0.26667vw auto 0;
}
.Search--search_content--23Agk2S,
.Search--search_content_right--2wuaTgG {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	height: 8vw;
	padding-left: 2.4vw;
}
.Search--search_content_right--2wuaTgG {
	z-index: 1;
	width: 92vw;
	padding-right: 0.8vw;
	border-radius: 4.4vw;
	background: hsla(0, 0%, 100%, 0.3);
}
.Search--search_content_left--32LRKHS {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.Search--search_content_left_text--KXjvPwi {
	overflow: hidden;
	margin-right: 2.66667vw;
	margin-left: 1.6vw;
	color: hsla(0, 0%, 100%, 0.8);
	font-size: 3.46667vw;
	text-overflow: ellipsis;
}
.Search--search_content_left_button--SRYcBfH {
	-webkit-flex: 0 0 auto;
	flex: 0 0 auto;
	height: 6.4vw;
	padding: 0.8vw 3.73333vw;
	border-radius: 3.86667vw;
	background-image: -webkit-linear-gradient(345deg, #ffe1d5, #ffddea 46%, #dcecf7 78%, #cceef9);
	background-image: linear-gradient(105deg, #ffe1d5, #ffddea 46%, #dcecf7 78%, #cceef9);
	color: #ee1851;
	font-size: 3.46667vw;
	font-family: PingFangSC-Medium;
}
.Header--headerContainer--19w0XmK {
	position: relative;
	box-sizing: content-box;
	width: 100vw;
}
.Header--headerSearch--19F6bbb {
	margin-bottom: 2.13333vw;
}
.Header--headerTitleImage--26uq2oY {
	position: relative;
	z-index: 1;
	-o-object-fit: cover;
	object-fit: cover;
	width: 100vw;
	height: 9.86667vw;
}
.Header--headerNavigationBarHeight--3ikIBau {
	box-sizing: content-box;
	width: 100%;
}
.Header--headerBackground--2z69Sxr {
	position: absolute;
	top: 0;
	width: 100vw;
}
.LikeBlock--likeBlock--37qqTM2 {
	position: relative;
}
.LikeBlock--likeAnimationBlock--2_n_I7G {
	position: relative;
	-webkit-transform: translate(0);
	transform: translate(0);
}
.LikeBlock--likeHeart--fY5SbnX {
	z-index: 2;
	width: 5.86667vw;
	height: 5.86667vw;
}
.LikeBlock--likeAnimationBlockImage1--3gPic7u {
	left: -2.13333vw;
	width: 3.73333vw;
	height: 3.46667vw;
}
.LikeBlock--likeAnimationBlockImage1--3gPic7u,
.LikeBlock--likeAnimationBlockImage2--2xcBfuG {
	position: absolute;
	top: 0;
	z-index: 1;
	-webkit-animation-name: LikeBlock--likeup--1abpVx0;
	animation-name: LikeBlock--likeup--1abpVx0;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-timing-function: linear;
	animation-timing-function: linear;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	will-change: transform, opacity;
}
.LikeBlock--likeAnimationBlockImage2--2xcBfuG {
	left: 1.73333vw;
	width: 4.26667vw;
	height: 4vw;
}
.LikeBlock--likeAnimationBlockImage3--1jcraQX {
	left: -1.33333vw;
	width: 3.46667vw;
	height: 3.2vw;
}
.LikeBlock--likeAnimationBlockImage3--1jcraQX,
.LikeBlock--likeAnimationBlockImage4--1TJ4rLS {
	position: absolute;
	top: 0;
	z-index: 1;
	-webkit-animation-name: LikeBlock--likeup--1abpVx0;
	animation-name: LikeBlock--likeup--1abpVx0;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-timing-function: linear;
	animation-timing-function: linear;
	-webkit-animation-delay: 0.5s;
	animation-delay: 0.5s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	will-change: transform, opacity;
}
.LikeBlock--likeAnimationBlockImage4--1TJ4rLS {
	left: 2.13333vw;
	width: 2.66667vw;
	height: 2.4vw;
}
@-webkit-keyframes LikeBlock--likeup--1abpVx0 {
	0% {
		opacity: 1;
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
	}
	20% {
		opacity: 1;
		-webkit-transform: translate(10px, -10px) scale(1);
		transform: translate(10px, -10px) scale(1);
	}
	40% {
		opacity: 1;
		-webkit-transform: translateY(-20px) scale(1);
		transform: translateY(-20px) scale(1);
	}
	60% {
		opacity: 0.8;
		-webkit-transform: translate(-10px, -30px) scale(0.8);
		transform: translate(-10px, -30px) scale(0.8);
	}
	80% {
		opacity: 0.6;
		-webkit-transform: translateY(-40px) scale(0.6);
		transform: translateY(-40px) scale(0.6);
	}
	to {
		opacity: 0;
		-webkit-transform: translate(10px, -50px) scale(0);
		transform: translate(10px, -50px) scale(0);
	}
}
@keyframes LikeBlock--likeup--1abpVx0 {
	0% {
		opacity: 1;
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
	}
	20% {
		opacity: 1;
		-webkit-transform: translate(10px, -10px) scale(1);
		transform: translate(10px, -10px) scale(1);
	}
	40% {
		opacity: 1;
		-webkit-transform: translateY(-20px) scale(1);
		transform: translateY(-20px) scale(1);
	}
	60% {
		opacity: 0.8;
		-webkit-transform: translate(-10px, -30px) scale(0.8);
		transform: translate(-10px, -30px) scale(0.8);
	}
	80% {
		opacity: 0.6;
		-webkit-transform: translateY(-40px) scale(0.6);
		transform: translateY(-40px) scale(0.6);
	}
	to {
		opacity: 0;
		-webkit-transform: translate(10px, -50px) scale(0);
		transform: translate(10px, -50px) scale(0);
	}
}
.LiveBottom--liveBottom--2wGHIsG {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 3.2vw;
}
.LiveBottom--liveItemMessage--1S_46eU {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 72.53333vw;
	height: 21.6vw;
	padding: 0.8vw;
	border-radius: 3.2vw;
	background: #fff;
}
.LiveBottom--liveItemOrder--1LAcgff {
	position: absolute;
	top: 0.8vw;
	left: 0.8vw;
	width: 7.2vw;
	height: 3.73333vw;
	border-radius: 2.4vw 0;
	background: rgba(51, 51, 51, 0.54);
	color: #fff;
	font-size: 2.66667vw;
	line-height: 3.73333vw;
	letter-spacing: 0.01733vw;
	text-align: center;
	text-shadow: 0 0 1.06667vw rgba(0, 0, 0, 0.19);
}
.LiveBottom--goodsImage--3kYRMqE {
	width: 20vw;
	height: 20vw;
	border-radius: 2.4vw;
}
.LiveBottom--goodsMessage--21K1OAT {
	margin-left: 2.4vw;
}
.LiveBottom--goodsName--2QHomEv {
	overflow: hidden;
	max-width: 46.66667vw;
	margin-bottom: 0.93333vw;
	color: #111;
	font-size: 3.46667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.LiveBottom--goodsPrice--2Q4N5yF {
	position: relative;
}
.LiveBottom--brokenLinePriceBackground--3vYEWEX,
.LiveBottom--goodsPrice--2Q4N5yF {
	width: 41.46667vw;
	height: 12.13333vw;
}
.LiveBottom--monthlySales--3sZ7SkK {
	position: absolute;
	top: 1.33333vw;
	left: 0;
	color: #ff1e4c;
	font-size: 2.93333vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.LiveBottom--activityPrice--2FEyDCS {
	position: absolute;
	bottom: 0.292vw;
	left: 1.33333vw;
	color: #666;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	letter-spacing: 0;
	opacity: 0.7;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.LiveBottom--afterCouponPriceBox--2W_47E7 {
	position: absolute;
	top: 0;
	right: 2.26667vw;
	-webkit-align-items: center;
	align-items: center;
	width: 17.33333vw;
	height: 9.06667vw;
}
.LiveBottom--afterCouponPrice--2KCoPOu,
.LiveBottom--afterCouponPriceBox--2W_47E7 {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.LiveBottom--afterCouponPrice--2KCoPOu {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-bottom: 0.66667vw;
}
.LiveBottom--afterCouponPriceUnit--2GdvR9V {
	margin-right: 0.4vw;
	color: #fff;
	font-size: 3.168vw;
	line-height: 3.168vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.LiveBottom--afterCouponPriceNumber--cF49M0K {
	color: #fff;
	font-size: 4.26667vw;
	line-height: 4.26667vw;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.LiveBottom--singleItemStatus--1zqYfEb {
	color: #fff;
	font-size: 2.13333vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.LiveBottom--liveBottomWrap--3x1WQkK {
	position: absolute;
	right: 3.2vw;
	bottom: 3.2vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.LiveBottom--liveBottomNum--2mTIxWp {
	color: #fff;
	font-size: 3.52vw;
	line-height: 4.224vw;
	letter-spacing: 0.02267vw;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
	font-family: PingFangSC-Medium, sans-serif;
}
.LivePlay--LivePlayContainer--3FyVXM5 {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 133.33333vw;
	border-radius: 3.2vw;
	-webkit-transform: translateY(0);
	transform: translateY(0);
}
.LivePlay--muteImageBox--skwMdjZ {
	position: absolute;
	right: 2.4vw;
	bottom: 2.53333vw;
	z-index: 4;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 8vw;
	height: 8vw;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.2);
}
.LivePlay--muteImage--2wBnVEP {
	width: 100%;
	height: 100%;
}
.LivePlay--playButtonBox--28mG_hS {
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	-webkit-transform: translate(-50%, -50%) scale(1);
	transform: translate(-50%, -50%) scale(1);
	-webkit-transform-origin: center center;
	transform-origin: center center;
}
.LivePlay--livePlayError--ZNN9MJo {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #000;
}
.LivePlay--livePlayErrorText--cX60nR3 {
	color: #fff;
	font-size: 4.26667vw;
	line-height: 4.26667vw;
	text-align: center;
	font-family: PingFangSC-Semibold;
}
.LivePlay--livePlayErrorButton--1j7_G_w {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 6.93333vw;
	margin-top: 4.4vw;
	padding: 0 3.2vw;
	border: 0.13333vw solid #fff;
	border-radius: 3.46667vw;
	color: #fff;
	font-size: 3.2vw;
}
.LivePlay--intoLiveBox--1f1Wmlc {
	position: absolute;
	bottom: 31.46667vw;
	left: 50%;
	z-index: 4;
	height: 8.8vw;
	-webkit-transform: translate3d(-50%, 0, 0);
	transform: translate3d(-50%, 0, 0);
}
.LivePlay--intoLiveBoxNoGoods--1Zf9pkz {
	bottom: 6.66667vw;
}
.LivePlay--blur--3JIXq6B {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	overflow: hidden;
	width: 100%;
	height: 8.8vw;
	border-radius: 4.4vw;
	background: hsla(0, 0%, 100%, 0.3);
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
}
.LivePlay--intoLiveBoxContent--8EYX-9E {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	padding: 0 4.66667vw;
	border: 1px solid #fff;
	border-radius: 4.4vw;
}
.LivePlay--intoLiveClose--1FrW64e {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 4;
	width: 4.8vw;
	height: 4.8vw;
	padding: 4.8vw;
	-webkit-transform: translate(30%, -50%);
	transform: translate(30%, -50%);
}
.LivePlay--intoLiveImage--hSyegls {
	height: 6.13333vw;
}
.LivePlay--intoLive--1hnCv1y {
	margin-left: 0.53333vw;
	color: #fff;
	font-size: 4.8vw;
	line-height: 8.53333vw;
	letter-spacing: 0;
	font-family: PingFangSC-Semibold;
}
.LivePlay--poster--3PV2be6 {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: 3.2vw;
	pointer-events: none;
}
.LiveTop--liveTop--2gEeVkB {
	position: absolute;
	top: 3.2vw;
	z-index: 4;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 100%;
	padding: 0 3.33333vw;
}
.LiveTop--liveRoomMessage--1Uwd3lQ,
.LiveTop--liveTop--2gEeVkB {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.LiveTop--liveRoomMessage--1Uwd3lQ {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 8vw;
	padding: 0 2vw 0 0.66667vw;
	border-radius: 4vw;
	background: rgba(0, 0, 0, 0.5);
}
.LiveTop--liveRoomLogo--1HoPMrA {
	width: 6.66667vw;
	height: 6.66667vw;
	border-radius: 50%;
}
.LiveTop--liveRoomName--VZZKMTE {
	margin: 0 1.06667vw;
	color: #fff;
	font-size: 3.46667vw;
	line-height: 3.73333vw;
	font-family: PingFangSC-Medium;
}
.LiveTop--muteImageBox--1s_aPqP {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 8vw;
	height: 8vw;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.2);
}
.LiveTop--muteImage---ggTw0T {
	width: 100%;
	height: 100%;
}
.StoreLive--storeLive--32B9Jqm {
	position: relative;
	overflow: hidden;
	width: 100vw;
	margin: 0 auto 4vw;
}
.StoreLive--storeLiveBottom--2KkdMLk {
	position: relative;
	width: 100%;
}
.StoreLive--storeLiveMessage--3NiJUuo {
	position: absolute;
	top: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: 3.2vw;
	background-image: -webkit-linear-gradient(top, rgba(45, 6, 121, 0) 50%, rgba(0, 0, 0, 0.8));
	background-image: linear-gradient(180deg, rgba(45, 6, 121, 0) 50%, rgba(0, 0, 0, 0.8));
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.PositionList--emptyData--105moG0 {
	width: 100vw;
	height: 100vh;
	background: #2d0679;
}
.PositionList--container--3_cCt4K {
	width: 100vw;
	min-height: 100vh;
	background: #2d0679;
}
.PositionList--jhsMiniDetails--35SSXEs {
	margin-top: 2.13333vw;
}
.PositionList--loadMore--2Q86TMy {
	width: 100%;
	margin: 0 auto;
	text-align: center;
}
.moreBtn--more_btn--1DWhpP- {
	width: 7.46667vw;
	height: 7.46667vw;
	margin-left: 2vw;
}
.NavBarBack--container--3cpahU3 {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4.13333vw;
	padding-right: 3.2vw;
	padding-left: 3.2vw;
}
.NavBarBack--pic--3EeZAiv {
	width: 2.8vw;
	height: 5.06667vw;
}
.SearchTop--search_content--2ZVK0_j {
	position: relative;
	z-index: 10;
	width: 58.13333vw;
	margin: 0.26667vw auto 0;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
}
.SearchTop--search_content--2ZVK0_j,
.SearchTop--search_content_right--2lJiha4 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	height: 8vw;
	padding-left: 2.4vw;
}
.SearchTop--search_content_right--2lJiha4 {
	z-index: 1;
	width: 92vw;
	padding-right: 0.8vw;
	border-radius: 4.4vw;
	background: hsla(0, 0%, 100%, 0.3);
}
.SearchTop--search_content_left--12Mn6Gj {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.SearchTop--search_content_left_text--2a22pdc {
	overflow: hidden;
	margin-right: 2.66667vw;
	margin-left: 1.6vw;
	color: hsla(0, 0%, 100%, 0.8);
	font-size: 3.46667vw;
	text-overflow: ellipsis;
}
.SubscribeBtn--subscribeBtn--1O8hdHU {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 15.33333vw;
	height: 5.73333vw;
	margin-top: 0.8vw;
	border: 1px solid #fff;
	border-radius: 3.2vw;
	background: hsla(0, 0%, 100%, 0.2);
}
.SubscribeBtn--subscribe--2h-pIyc {
	margin-left: 0.53333vw;
	color: #fff;
	font-size: 3.2vw;
}
.NavBar--navbar--2fROSp1 {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 4;
	width: 100vw;
	padding-top: 20px;
	padding-top: var(--safe-top);
}
.NavBar--navbar_content--142a1I5 {
	-webkit-justify-content: space-between;
	justify-content: space-between;
}
.NavBar--navbar_content--142a1I5,
.NavBar--navbar_content_left--3NLlTBA {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.NavBar--navbar_content_left--3NLlTBA {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin-left: 1.6vw;
}
.NavBar--navbar_content_right--3yc11wE {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	margin-right: 4vw;
}
.NavBar--navbar_content_left_tab--WT_0ws9 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	margin-right: 2.66667vw;
}
.NavBarPlaceHolder--navbar_placeholder--1EON2uJ {
	box-sizing: content-box;
	padding-top: 20px;
	padding-top: var(--safe-top);
}
.RedEnvelopes--redEnvelopesWrap--mxe6t_i {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	padding-top: 0.53333vw;
	padding-bottom: 2.93333vw;
}
.RedEnvelopes--redEnvelopesTitleImg--2V0nG2B {
	position: relative;
	width: 73.33333vw;
	height: 8vw;
	margin-top: 2.66667vw;
}
.RedEnvelopes--redEnvelopesContent--2so66e3 {
	position: relative;
	width: 58vw;
	height: 16.26667vw;
}
.RedEnvelopes--redEnvelopesBg--3H6E1fK {
	position: absolute;
	top: 0;
	left: 0;
	width: 58vw;
	height: 16.26667vw;
}
.RedEnvelopes--redEnvelopesLeft--3JZBffw {
	position: absolute;
	bottom: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 22.4vw;
	height: 16.26667vw;
}
.RedEnvelopes--redEnvelopesLeftTitle--wrebMdo {
	position: absolute;
	top: 0;
	left: 4.66667vw;
	width: 14.13333vw;
	height: 5.33333vw;
	color: #fff;
	font-weight: 700;
	font-size: 3.2vw;
	line-height: 5.6vw;
	text-align: center;
	-webkit-transform: scale(0.92);
	transform: scale(0.92);
}
.RedEnvelopes--redEnvelopesLeftPriceArea--3WQL2mN {
	position: absolute;
	bottom: 1.86667vw;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: center;
	justify-content: center;
	width: 22.4vw;
}
.RedEnvelopes--redEnvelopesBeforeText--F-aD9XP {
	margin-right: -0.8vw;
	color: #fff;
	font-weight: 600;
	font-size: 3.2vw;
	-webkit-transform: scale(0.67);
	transform: scale(0.67);
}
.RedEnvelopes--redEnvelopesAfterText--2rrIGsT {
	margin-left: -0.26667vw;
	color: #fff;
	font-weight: 700;
	font-size: 3.2vw;
	-webkit-transform: scale(0.83);
	transform: scale(0.83);
}
.RedEnvelopes--redEnvelopesPrice--2OfELap {
	height: 7.73333vw;
	background: -webkit-linear-gradient(top, #fff, #ffd9dc);
	background: linear-gradient(180deg, #fff, #ffd9dc);
	-webkit-background-clip: text;
	color: transparent;
	font-weight: 700;
	font-size: 8vw;
	line-height: 7.73333vw;
	letter-spacing: -0.26667vw;
	font-family: AlibabaSans102-Bd;
}
.RedEnvelopes--redEnvelopesBtnTextWrap--emeaPv2 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 27.6vw;
	height: 8vw;
}
.RedEnvelopes--btnIcon--11NwEXe {
	position: relative;
	width: 3.2vw;
	height: 3.86667vw;
	margin-right: 0.93333vw;
}
.RedEnvelopes--btnText--F8AI-Ba {
	position: relative;
	height: 3.2vw;
	color: #d83700;
	font-weight: 600;
	font-size: 4vw;
	line-height: 3.46667vw;
	white-space: nowrap;
}
.RedEnvelopes--redEnvelopesRight--2kYw3mc {
	position: absolute;
	top: 0;
	right: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 36vw;
	height: 16.26667vw;
}
.RedEnvelopes--redEnvelopesTag--3j2RMtk {
	height: 2.93333vw;
	color: #fff;
	font-weight: 600;
	font-size: 2.93333vw;
	line-height: 3.2vw;
}
.RedEnvelopes--redEnvelopesBtn--3OPjwt3 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 27.73333vw;
	height: 8vw;
	margin-top: 0.53333vw;
}
.RedEnvelopes--redEnvelopesBtnBg--1ydoMpW {
	position: absolute;
	top: -0.26667vw;
	left: -1.06667vw;
	width: 29.86667vw;
	height: 10.13333vw;
}
.RedEnvelopes--redEnvelopesBtnText--23tL-NX {
	font-size: 3.2vw;
}
.ServiceNoema--serviceCenter--1MOxEtD {
	position: relative;
	z-index: 1;
	width: 100vw;
	height: 11.6vw;
}
.ServiceNoema--serviceCenterBackground--Zz1uM7K {
	position: absolute;
	top: 0;
	width: 100vw;
	height: 17.86667vw;
	border-top-left-radius: 4.8vw;
	border-top-right-radius: 4.8vw;
	background-image: radial-gradient(50%, #ffeade 0, #fff7f3 100%);
	background-image: -webkit-radial-gradient(50%, #ffeade 0, #fff7f3 100%);
}
.ServiceNoema--serviceCenterBox--VEgKLDS {
	width: 100vw;
	height: 14vw;
}
.ServiceNoema--sliderBlockSwiperWrapper--3NlA46T {
	position: absolute;
	bottom: 0;
	z-index: 10;
	overflow: hidden;
	width: 100vw;
	height: 14.53333vw;
}
.ServiceNoema--mind--3hCV0T0 {
	position: absolute;
	bottom: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	width: 100vw;
	height: 11.6vw;
	padding: 0 3.46667vw;
	-webkit-transition: opacity 0.4s, -webkit-transform 0.8s;
	transition: opacity 0.4s, -webkit-transform 0.8s;
	transition: opacity 0.4s, transform 0.8s;
	transition: opacity 0.4s, transform 0.8s, -webkit-transform 0.8s;
	-webkit-transform: translateY(120%);
	transform: translateY(120%);
}
.ServiceNoema--mindMiddle--3SPh_GU {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	height: 100%;
	padding-left: 0.93333vw;
}
.ServiceNoema--tagBox--17QBBHB {
	max-width: 64vw;
	margin-bottom: 0.53333vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ServiceNoema--tagBox--17QBBHB,
.ServiceNoema--tagContent--2Ixi04S {
	overflow: hidden;
}
.ServiceNoema--tagBox--17QBBHB,
.ServiceNoema--tagContent--2Ixi04S,
.ServiceNoema--tagsFontBox--2wGkb-V {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.ServiceNoema--tagsFontBox--2wGkb-V {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.ServiceNoema--tagsFontImage--1YHTf7l {
	height: 2.8vw;
	margin-right: 1.2vw;
}
.ServiceNoema--tagsFontSplitLine--3DpWtcz {
	width: 0.26667vw;
	height: 3vw;
	margin-right: 1.2vw;
	background-color: #fe1044;
}
.ServiceNoema--tagsFont--3HNkcjJ {
	position: relative;
	bottom: -0.26667vw;
	color: #bf5514;
	font-size: 3.73333vw;
	letter-spacing: 0;
	font-family: PingFangSC-Regular, sans-serif;
}
.ServiceNoema--point--3bE0MtC {
	width: 0.56533vw;
	height: 0.57067vw;
	margin-right: 0.66667vw;
	margin-left: 0.4vw;
	border-radius: 0.4vw;
	background-color: #f69b65;
}
.ServiceNoema--mindMiddleTopText--2GGXYVc {
	margin-top: 2vw;
	color: #dc7233;
	font-size: 3.2vw;
	line-height: 2.93333vw;
	letter-spacing: 0;
	opacity: 0.8;
}
.ServiceNoema--iconBox--3-kRNKr {
	width: 14.792vw;
	height: 12.13333vw;
	margin-right: 2.66667vw;
}
.ServiceNoema--mindButtonBox--44PJGnv {
	height: 100%;
}
.ServiceNoema--mindButton--2WCD1K7,
.ServiceNoema--mindButtonBox--44PJGnv {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.ServiceNoema--mindButton--2WCD1K7 {
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 22.26667vw;
	height: 7.46667vw;
	padding: 1.33333vw 2.13333vw 1.33333vw 2.4vw;
	border-radius: 3.75733vw;
	background: rgba(249, 132, 58, 0.3);
}
.ServiceNoema--mindButtonText--349IpqL {
	color: #d7641e;
	font-weight: bolder;
	font-size: 3.73333vw;
	line-height: 4vw;
	white-space: nowrap;
}
.ServiceNoema--mindButtonTextArrow--1uNy8ae {
	margin-left: 0.66667vw;
}
.ServiceNoema--leftIcon--1Fmm79_ {
	width: 1.6vw;
	height: 4vw;
	margin-right: 1.06667vw;
}
.ServiceNoema--rightIcon--1wfowhw {
	width: 1.6vw;
	height: 4vw;
	margin-left: 1.06667vw;
}
.LiveCard--liveCardNewCardImg--3yMUxrq {
	position: relative;
	overflow: hidden;
	width: 95.2vw;
	height: 30.66667vw;
	border-radius: 3.2vw;
}
.LiveCard--liveCardNewCardBackground--3JjEpPA {
	position: relative;
	top: 0;
	left: 0;
	z-index: 1;
	display: block;
	-o-object-fit: fill;
	object-fit: fill;
}
.LiveCard--liveCardSliderContent--WCkzHSK {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 95.2vw;
	height: 30.66667vw;
	padding: 0.26667vw 2.66667vw 2.4vw 2.4vw;
	border-radius: 4.8vw;
}
.LiveCard--liveCardSliderContentLeft--3pDGliL {
	position: relative;
	z-index: 2;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 20.8vw;
}
.LiveCard--liveCardSliderContentLeftShopTitle--xe8V8HF {
	font-weight: 700;
	font-size: 4vw;
}
.LiveCard--liveCardSliderContentLeftShopTitle1--3clo6sD,
.LiveCard--liveCardSliderContentLeftShopTitle--xe8V8HF {
	display: -webkit-flex;
	display: flex;
	overflow: hidden;
	max-width: 44vw;
	color: #fff;
	line-height: 5.33333vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.LiveCard--liveCardSliderContentLeftShopTitle1--3clo6sD {
	margin-top: 0.4vw;
	font-size: 3.2vw;
}
.LiveCard--liveCardSliderContentLeftBtn--3d9FOQq {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 8.53333vw;
	margin-top: 3.33333vw;
	padding: 0 0.93333vw;
	border-radius: 4.4vw;
	background-image: -webkit-linear-gradient(271deg, #fffbed, #fec792 75%, #ffecd4);
	background-image: linear-gradient(179deg, #fffbed, #fec792 75%, #ffecd4);
}
.LiveCard--liveCardSliderContentLeftBtnTime--dMZNsmn {
	color: #ff174d;
	font-size: 3.2vw;
	letter-spacing: 0;
}
.LiveCard--liveCardSliderContentLeftBtnTextBox--2I27njr {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 6.4vw;
	margin-left: 1.44vw;
	padding: 0 1.2vw 0 1.86667vw;
	border-radius: 3.2vw;
	background-image: -webkit-linear-gradient(bottom, #ff1c81, #fe1010);
	background-image: linear-gradient(0deg, #ff1c81, #fe1010);
}
.LiveCard--liveCardSliderContentLeftBtnText--2qR6vcA {
	color: #fff;
	font-size: 3.2vw;
	letter-spacing: 0;
}
.LiveCard--liveCardSliderContentLeftBtnArrow--1P9i42g {
	margin-left: 0.53333vw;
}
.LiveCard--liveCardBannerItems--2VakhXR {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.LiveCard--liveCardSpecialGoodPic--1n37BZd {
	position: relative;
	top: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	width: 20.8vw;
	height: 20.8vw;
	margin-left: 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.LiveCard--liveDynamicEffectBox--30QHueD {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.LiveCard--liveAccountNameBox--3A8X89q {
	position: absolute;
	bottom: 0.93333vw;
	z-index: 1;
	padding: 0 1.86667vw;
	border-radius: 3.2vw;
	background-color: #fe1010;
}
.LiveCard--liveAccountName--3hn7-wU {
	overflow: hidden;
	max-width: 15.2vw;
	color: #fff;
	font-size: 3.2vw;
}
.LiveCard--itemPic--3GOCoOH {
	display: block;
	height: 11.6vw;
	margin-top: 2.93333vw;
}
.LiveCard--liveCardItemPic--3HLTaUH {
	display: block;
	border-radius: 50%;
}
.LiveCard--liveDynamicEffect--3VQm5Tw {
	position: absolute;
	top: 0;
	left: 0;
	width: 11.6vw;
	height: 11.6vw;
}
.LiveCard--liveDynamicEffect1--2xmX7hf {
	width: 11.6vw;
	height: 11.6vw;
	border: 0.13333vw solid red;
	border-radius: 50%;
}
.LiveCard--liveDynamicEffect1--2xmX7hf,
.LiveCard--liveDynamicEffect2--1uMn4_X {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.LiveCard--liveDynamicEffect2--1uMn4_X {
	width: 13.33333vw;
	height: 13.33333vw;
	border: 1px solid red;
	border-radius: 50%;
}
.LiveCard--liveDynamicEffect3--30zFGEb {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 13.73333vw;
	height: 13.73333vw;
	border: 0.13333vw solid red;
	border-radius: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.LiveCard--liveCardRedEnvelopesPic--2kTWVtz {
	display: block;
	margin-top: 2.93333vw;
}
.LiveCard--liveCardRedEnvelopeText--1bySV6K {
	overflow: hidden;
	max-width: 18.13333vw;
	margin-top: 1.2vw;
	color: #ff174d;
	font-size: 2.93333vw;
	letter-spacing: 0;
	font-family: PingFangSC-Regular;
}
.LiveCard--liveCardSpecialGoodPrice--16D2BUb {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin-top: 1.2vw;
	padding: 0 2.26667vw;
}
.LiveCard--liveCardSpecialGoodPriceUnit--wJO_q6z {
	color: #ff174d;
	font-size: 2.4vw;
	font-family: AlibabaSans102, sans-serif;
}
.LiveCard--liveCardSpecialGoodPriceNum--1v90ePT {
	color: #ff174d;
	font-size: 3.2vw;
	line-height: 3.73333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.LiveCard--brandLiveTip--2qH2yUS {
	margin-right: 0.4vw;
	border-radius: 50%;
}
.NewCard--newCardNewCardImg--1yrhYa5 {
	position: relative;
	overflow: hidden;
	width: 95.2vw;
	height: 30.66667vw;
	border-radius: 3.2vw;
}
.NewCard--newCardNewCardBackground--3u_weYP {
	position: relative;
	top: 0;
	left: 0;
	z-index: 1;
	display: block;
	-o-object-fit: fill;
	object-fit: fill;
}
.NewCard--newCardSliderContent--32UzKvF {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 95.2vw;
	height: 30.66667vw;
	padding: 2.4vw;
	border-radius: 4.8vw;
}
.NewCard--newCardSliderContentLeft--1B-SsKQ {
	position: relative;
	z-index: 2;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
}
.NewCard--newCardSliderContentLeftShopTitle--lexnsI_ {
	display: block;
	overflow: hidden;
	max-width: 53.33333vw;
	margin-top: 2.66667vw;
	color: #fff;
	font-weight: 700;
	font-size: 4vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.NewCard--newCardSliderContentLeftShopDesc--1L2AVgK {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	margin-bottom: 2.66667vw;
}
.NewCard--newCardSliderContentLeftShopDescFont--2ve_y08 {
	margin-right: 0.26667vw;
	color: hsla(0, 0%, 100%, 0.7);
	font-size: 3.2vw;
	line-height: 4.4vw;
	letter-spacing: 0.26667vw;
}
.NewCard--newCardThemeProfitImage--yasY_dt {
	display: block;
	width: 2.26667vw;
	height: 1.46667vw;
}
.NewCard--newCardBannerItems--392cfnV {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.NewCard--newCardBannerItems--392cfnV,
.NewCard--newCardSpecialGoodPic--iSCCE8R {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.NewCard--newCardSpecialGoodPic--iSCCE8R {
	position: relative;
	top: 0;
	left: 0;
	-webkit-flex-direction: column;
	flex-direction: column;
	overflow: hidden;
	width: 17.33333vw;
	height: 17.33333vw;
	margin-left: 2.4vw;
	border-radius: 2.13333vw;
	background-color: #fff;
}
.NewCard--newCardItemPic--1QtbAKx {
	display: block;
	margin-top: 1.6vw;
	border-radius: 2.13333vw;
}
.NewCard--newCardSpecialGoodPrice--3jgNN0b {
	position: absolute;
	bottom: 1.2vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: baseline;
	justify-content: baseline;
	height: 4.93333vw;
	padding: 0 2.26667vw;
	border-radius: 2.46667vw;
	background-color: hsla(0, 0%, 94.5%, 0.7);
}
.NewCard--newCardSpecialGoodPriceUnit--3nrbHNX {
	color: #ff174d;
	font-size: 3.2vw;
	line-height: 3.36vw;
	font-family: PingFangSC-Medium, sans-serif;
}
.NewCard--newCardSpecialGoodPriceNum--17KwXJ6 {
	color: #ff174d;
	font-size: 3.2vw;
	line-height: 3.36vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.SliderCardLast--defaultBackground--1GEjg8J {
	height: 2.66667vw;
}
.SliderCardLast--defaultBackgroundImage--16F_Np6 {
	position: absolute;
	top: 0;
}
.SliderCardLast--sliderContentBox--2TtiNdb {
	overflow: hidden;
	box-sizing: border-box;
	width: 100vw;
	padding: 0 2.4vw;
	background-size: 100vw 32.26667vw;
	background-repeat: no-repeat;
}
.SliderCardLast--sliderContentBoxContent--dxi9bHM {
	width: 95.2vw;
	height: 30.66667vw;
}
.SliderBlockLast--defaultBackgroundImageBox--3XBlynv {
	position: relative;
	height: 2.66667vw;
}
.SliderBlockLast--defaultBackgroundImage--2ZyEV6- {
	position: absolute;
	top: -58.66667vw;
	left: 0;
}
.SliderBlockLast--slider_block_new--3zh0O3l {
	position: relative;
}
.SliderBlockLast--sliderContentBox--2CkCnkO {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	box-sizing: border-box;
	width: 100vw;
	padding-right: 3.2vw;
	padding-left: 3.2vw;
	background-size: 100vw 32.26667vw;
	background-repeat: no-repeat;
}
.SliderBlockLast--swiperContainer--iwE5ceZ {
	position: relative;
	overflow: hidden;
	width: 100vw;
	height: 33.33333vw;
}
.SliderBlockLast--sliderBlockSwiperWrapper--3vaU_JQ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 100vw;
	will-change: transform;
}
.SliderBlockLast--sliderTop--3sOL8Pp,
.SliderBlockLast--slidSliderItemBanner--3g4x34u {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	width: 100vw;
}
.SliderBlockLast--sliderTop--3sOL8Pp {
	position: absolute;
	bottom: 1.86667vw;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: center;
	justify-content: center;
	height: 1.33333vw;
	padding-bottom: 3.46667vw;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.SliderBlockLast--sliderContent--19u8A4s {
	display: block;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 87.46667vw;
	height: 38vw;
	border-radius: 4.8vw;
}
.SliderBlockLast--headerBlockBg--2kMVhNW {
	position: absolute;
	bottom: -65.86667vw;
	left: 0;
	-webkit-transition: all 0.3s linear 0ms;
	transition: all 0.3s linear 0ms;
}
.ActiveBanner--activeBannerWrap--9foB1se {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 100vw;
	height: 20vw;
	margin-bottom: 2.4vw;
	padding: 0 2.46667vw;
}
.ActiveBanner--activeBanner--3IjN3_x {
	width: 46.4vw;
	height: 20.53333vw;
}
.ActiveBanner--activeBannerImage--30GUm5c {
	display: block;
	width: 46.4vw;
	height: 20.53333vw;
	border-radius: 3.2vw;
}
.Brand--ShopGoodBoxContent--27IKnzv {
	position: relative;
}
.Brand--ShopGood--31VytaM {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	padding: 1.06667vw;
	border-radius: 3.2vw;
	background-image: -webkit-linear-gradient(top, #ff174d 58%, #fe5f45);
	background-image: linear-gradient(180deg, #ff174d 58%, #fe5f45);
}
.Brand--brandLiveTipBox--1w5cV8p {
	position: absolute;
	top: 3.33333vw;
	right: 3.33333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.06667vw;
	padding: 0 2vw 0 0.66667vw;
	border-radius: 2.53333vw;
	background-color: rgba(0, 0, 0, 0.3);
}
.Brand--brandLiveTip--20yLRQe {
	width: 4vw;
	height: 4vw;
	margin-right: 0.4vw;
	border-radius: 50%;
}
.Brand--brandLiveText--3wjtB2V {
	height: 2.93333vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	letter-spacing: -0.13333vw;
}
.Brand--ShopGoodImg--1uKVh-t {
	width: 44.26667vw;
	height: 44.26667vw;
	border-radius: 2.66667vw;
}
.Brand--ShopGooInfo--19a3l4L {
	margin-top: -10.26667vw;
}
.Brand--ShopGoodLogo--24Zgk2e {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 44.26667vw;
	height: 10.26667vw;
}
.Brand--ShopGoodLogoBackground--3IDrpPR {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 44.26667vw;
}
.Brand--ShopGoodLogoImageBox--F0lXLMP {
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	width: 16vw;
	height: 6.66667vw;
	border-radius: 3.4vw;
	background-color: #fff;
}
.Brand--ShopGoodLogoHJuDayImage--ef7NLNj,
.Brand--ShopGoodLogoImage--39fjcTI {
	height: 5vw;
}
.Brand--ShopGoodInfoContent--WebLH2x {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	overflow: auto;
}
.Brand--ShopGoodInfoTitle--1L_UFRA {
	max-width: 45.33333vw;
	margin-top: -0.53333vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 5.06667vw;
	letter-spacing: 0;
	text-align: center;
	text-overflow: ellipsis;
}
.Brand--ShopGoodBox--263IVSe {
	width: 44.26667vw;
	margin-top: 1.33333vw;
	padding: 0.66667vw 0.66667vw 0;
	border-radius: 2.66667vw;
	background-color: #fff;
}
.Brand--ShopGoodItem--2o2Pb7v {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin-bottom: 1.06667vw;
}
.Brand--ShopGoodPic--1gimmJg {
	width: 12.53333vw;
	height: 12.53333vw;
	margin-right: 2px;
	border-radius: 1.6vw;
}
.Brand--ShopGoodPriceMessage--7QFGWGk {
	position: relative;
	width: 29.73333vw;
	height: 10.66667vw;
}
.Brand--ShopGoodPriceBackground--2L7vupw {
	position: absolute;
	top: 0;
	left: 0;
	width: 29.73333vw;
	height: 10.66667vw;
}
.Brand--sellingPoint--1LxQv1t {
	top: 0.8vw;
	left: 0;
	overflow: hidden;
	max-width: 13.33333vw;
	line-height: 3.2vw;
	word-break: break-all;
}
.Brand--activityPrice--2WkoHQj,
.Brand--sellingPoint--1LxQv1t {
	position: absolute;
	color: #ff1e4c;
	font-size: 2.58133vw;
	letter-spacing: 0;
}
.Brand--activityPrice--2WkoHQj {
	bottom: 0.8vw;
	left: 1.2vw;
	line-height: 2.58133vw;
	opacity: 0.6;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--afterCouponPriceBox--2cCxncB {
	position: absolute;
	top: 0;
	right: 2.13333vw;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	width: 14.26667vw;
	height: 7.33333vw;
}
.Brand--afterCouponPrice--sGcC7Wy,
.Brand--afterCouponPriceBox--2cCxncB {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.Brand--afterCouponPrice--sGcC7Wy {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-bottom: 0.26667vw;
}
.Brand--afterCouponPriceUnit--3ESaQ7H {
	margin-right: 0.26667vw;
	color: #ff174d;
	font-weight: 700;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--afterCouponPriceNumber--26EMJQu {
	color: #ff174d;
	font-weight: 700;
	font-size: 3.06667vw;
	line-height: 3.06667vw;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--afterCouponPriceTip--2dJUH-e {
	color: #ff174d;
	font-size: 1.87733vw;
	line-height: 2.34667vw;
	letter-spacing: 0;
}
.Brand--ShopBenefit--2TVqXZr {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 44.26667vw;
	height: 8vw;
	margin-top: 1.06667vw;
}
.Brand--ShopBenefitBackground--bs87FsJ {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 44.26667vw;
	height: 8vw;
}
.Brand--ShopBenefitMessage--3r7xH6H {
	position: relative;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 34.66667vw;
	height: 8vw;
	padding-left: 1.86667vw;
	color: #ff174d;
	font-size: 3.11867vw;
	letter-spacing: 0;
}
.Brand--ShopBenefitMessage--3r7xH6H,
.Brand--ShopBenefitPrice--2kf9oFh {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.Brand--ShopBenefitPrice--2kf9oFh {
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: center;
	justify-content: center;
}
.Brand--ShopBenefitPriceUnit--_hpom5w {
	color: #ff174d;
	font-weight: 700;
	font-size: 2.66667vw;
	line-height: 2.93333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--ShopBenefitPriceNumber--2CKbJiR {
	margin-right: 0.66667vw;
	color: #ff174d;
	font-weight: 700;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--ShopBenefitText--3A_PYfZ {
	overflow: hidden;
	padding-left: 0.53333vw;
	color: #ff174d;
	font-size: 3.2vw;
	letter-spacing: -0.06667vw;
	text-overflow: ellipsis;
	word-break: break-all;
}
.Brand--ShopBenefitButton--1Srzjjo {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 9.6vw;
	height: 8vw;
}
.Brand--ShopBenefitButtonTet--MwAfEwM {
	width: 6.13333vw;
	height: 4.53333vw;
	padding: 0.66667vw 0;
	border-radius: 2.26667vw;
	background: #ff174d;
	color: #fff;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: -0.13333vw;
	text-align: center;
}
.link {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.columns {
	width: 35.73333vw;
	height: 34vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	justify-self: flex-start;
}
.feedback_moduleWrap {
	position: relative;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.moduleFixed {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	top: 0;
	left: 0;
	z-index: 9999;
}
.moduleBack {
	position: absolute;
	left: 2.93333vw;
	top: 4.53333vw;
	width: 10.13333vw;
	height: 4.53333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	z-index: 2;
}
.moduleBackIcon {
	width: 1.86667vw;
	height: 2.66667vw;
	position: relative;
	margin-right: 1.06667vw;
	margin-top: 0.26667vw;
}
.moduleBackText {
	font-size: 3.2vw;
	color: #fff;
	font-weight: 600;
}
.moduleClose {
	position: absolute;
	right: 2.93333vw;
	top: 2.66667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-flex-direction: row;
	flex-direction: row;
	z-index: 2;
}
.moduleClose,
.moduleCloseIcon {
	width: 2.93333vw;
	height: 2.93333vw;
}
.moduleCloseIcon {
	position: relative;
}
.moduleContent {
	height: 100%;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-flex-direction: wrap;
	flex-direction: wrap;
	padding-left: 3.33333vw;
	padding-right: 3.33333vw;
}
.moduleContent,
.moduleRows {
	width: 100%;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.moduleRows {
	height: 11.33333vw;
	border-bottom: 0.13333vw solid hsla(0, 0%, 100%, 0.3);
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	position: relative;
}
.moduleRowIcon {
	width: 4.8vw;
	height: 4.8vw;
	margin-right: 1.6vw;
}
.moduleRowIcon,
.moduleRowIconRight {
	-o-object-fit: contain;
	object-fit: contain;
}
.moduleRowIconRight {
	width: 1.86667vw;
	height: 2.66667vw;
	margin-left: 0.8vw;
}
.moduleRowText {
	font-size: 3.46667vw;
	height: 4vw;
	line-height: 4.26667vw;
	color: #fff;
}
.moduleRowDesc,
.moduleRowText {
	font-weight: 600;
	white-space: nowrap;
}
.moduleRowDesc {
	width: 16vw;
	text-overflow: ellipsis;
	overflow: hidden;
	height: 3.46667vw;
	line-height: 3.73333vw;
	font-size: 2.66667vw;
	color: hsla(0, 0%, 100%, 0.6);
}
.modulePoint {
	width: 3.73333vw;
	height: 0.8vw;
}
.modulePointWrap {
	width: 4vw;
	height: 4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.RaxVideoBox--videoBox--Ov1yX_6 {
	position: relative;
	width: 46.4vw;
}
.RaxVideoBox--poster--1m1CRxa,
.RaxVideoBox--videoXBox--DuqSVK7 {
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.RaxVideoBox--poster--1m1CRxa {
	z-index: 2;
	width: 100%;
	height: 100%;
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;
}
.RaxVideoBox--videoMask--3LuINWh {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.CountTime--countTimeBox--W6fF2ty {
	-webkit-flex-direction: row;
	flex-direction: row;
	box-sizing: border-box;
}
.CountTime--countTime--3PtuKBT,
.CountTime--countTimeBox--W6fF2ty {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 3.73333vw;
}
.CountTime--countTime--3PtuKBT {
	width: 3.73333vw;
	border-radius: 0.53333vw;
}
.CountTime--countTime--3PtuKBT,
.CountTime--countTime_point--2sqK5rY {
	color: #fe614e;
	font-size: 2.93333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
}
.CountTime--countTime_point--2sqK5rY {
	position: relative;
}
.BrandTopAtmosphere--brandTopAtmosphere--1tvRj8s {
	position: absolute;
	bottom: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	overflow: hidden;
	width: 100%;
	height: 6.66667vw;
	padding: 0 2.4vw;
	border-radius: 0 0 3.2vw 3.2vw;
	background-image: -webkit-linear-gradient(345deg, #ffe1d5, #ffddea 46%, #f7e5dc 78%, #f9e4cc);
	background-image: linear-gradient(105deg, #ffe1d5, #ffddea 46%, #f7e5dc 78%, #f9e4cc);
}
.BrandTopAtmosphere--brandTopAtmosphereFormalText--b4ZqMNf {
	color: #fe614e;
	font-size: 2.93333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
}
.BrandTopAtmosphere--brandTopAtmosphereText--eHKNjIH {
	color: #ff1e4c;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.BrandTopAtmosphere--brandTopAtmosphereNumber--dIowOCJ {
	color: #ff1e4c;
	font-weight: 700;
	font-size: 3.2vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceBox--3KDhONr {
	position: relative;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceContentBox--1A7lr97 {
	position: relative;
	width: 41.46667vw;
	height: 12.13333vw;
	margin-top: 1.86667vw;
	margin-bottom: 2.93333vw;
	margin-left: 2.26667vw;
}
.BrokenLinePriceBoxSingleItem--monthlySales--2qBit2_ {
	position: absolute;
	top: 1.06667vw;
	left: 0;
	overflow: hidden;
	max-width: 20vw;
	font-weight: 700;
	font-size: 3.2vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
	word-break: break-all;
}
.BrokenLinePriceBoxSingleItem--activityPrice--FwKU6jd {
	position: absolute;
	bottom: 0.8vw;
	left: 1.46667vw;
	color: #666;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
	opacity: 0.7;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBox--1aRc1Ag {
	position: absolute;
	top: 0.13333vw;
	right: 2.26667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 17.33333vw;
	height: 8.53333vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPrice--2VEG8B6 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	margin-bottom: 0.66667vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceUnit--3NsT490 {
	margin-right: 0.4vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceNumber--2rJl4mA {
	color: #fff;
	font-size: 3.33333vw;
	line-height: 3.33333vw;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--singleItemStatus--dme4FAt {
	color: #fff;
	font-size: 2.13333vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipBox--3DpoABj {
	position: absolute;
	bottom: -15.6vw;
	z-index: 10;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 17.46667vw;
	-webkit-animation: BrokenLinePriceBoxSingleItem--fadeInOut--3yFdmNC 4s ease;
	animation: BrokenLinePriceBoxSingleItem--fadeInOut--3yFdmNC 4s ease;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipBoxBackground--3y7foPJ {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTip--3RT0xAS {
	position: absolute;
	bottom: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 15.6vw;
	padding: 3.46667vw 4vw;
	border-radius: 3.2vw;
	-webkit-transform: rotateY(-100%);
	transform: rotateY(-100%);
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipImageBox--3k4eecC {
	overflow: hidden;
	width: 6.4vw;
	height: 6.4vw;
	margin-right: 2.66667vw;
	border-radius: 50%;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipText--3ei3l0h {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextTop--3y1Yy_6 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextTopText--znkuhP8 {
	margin-right: 0.26667vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottom--1pwrOJh {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 1.6vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottomText--D8ripAj {
	color: #ff6565;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottomImage--1UJaVSu {
	margin-left: 1.6vw;
}
@-webkit-keyframes BrokenLinePriceBoxSingleItem--fadeInOut--3yFdmNC {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
@keyframes BrokenLinePriceBoxSingleItem--fadeInOut--3yFdmNC {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
.InsuredPriceTip--afterCouponPriceBoxTip--2Lg3qYT {
	position: absolute;
	top: -1.86667vw;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	padding: 3.46667vw 4vw;
	border-radius: 3.2vw;
	background: rgba(12, 12, 12, 0.8);
	-webkit-transform: translateY(-100%);
	transform: translateY(-100%);
	-webkit-animation: InsuredPriceTip--fadeInOut--tTzUyzQ 4s ease;
	animation: InsuredPriceTip--fadeInOut--tTzUyzQ 4s ease;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.InsuredPriceTip--afterCouponPriceBoxTipImageBox--z6kI6eT {
	overflow: hidden;
	width: 6.4vw;
	height: 6.4vw;
	margin-right: 2.66667vw;
	border-radius: 50%;
}
.InsuredPriceTip--afterCouponPriceBoxTipText--23YlJaz {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
}
.InsuredPriceTip--afterCouponPriceBoxTipTextTopText--oKMB3RK {
	margin-right: 0.26667vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
}
.InsuredPriceTip--afterCouponPriceBoxTipTextBottomText--PW3gfcF {
	margin-top: 1.6vw;
	color: #ff6565;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
}
.InsuredPriceTip--afterCouponPriceBoxTipBorrow--3PfNcgG {
	position: absolute;
	bottom: 0.13333vw;
	width: 0;
	height: 0;
	border: 1.86667vw solid transparent;
	border-top-color: rgba(12, 12, 12, 0.6);
	-webkit-transform: translateY(100%);
	transform: translateY(100%);
}
@-webkit-keyframes InsuredPriceTip--fadeInOut--tTzUyzQ {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
@keyframes InsuredPriceTip--fadeInOut--tTzUyzQ {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
.ShowTipPop--bottomShowTipDom--1472LSO {
	position: absolute;
	bottom: 28.93333vw;
}
.ShowTipPop--bottomDom--2elvGmQ {
	position: absolute;
	bottom: 0;
}
.ShowTipPop--topDom--XiSw-RA {
	position: absolute;
	top: -26.66667vw;
	width: 100%;
}
.StampIcon--stampPositionTopLeft--dmwDOe8 {
	position: absolute;
	top: 0;
	left: 0;
}
.StampIcon--stampPositionLowerRight--1ja6lU0 {
	position: absolute;
	right: 0;
	bottom: 0;
}
.StampIcon--stampPosition--21QheqJ {
	width: 100%;
}
.ByStages--br_benefit_common_box--3H2D1Q_ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4.4vw;
	margin-right: 0.8vw;
	padding: 0 1.13333vw;
	border: 1px solid rgba(255, 16, 16, 0.2);
	border-radius: 1.06667vw;
}
.ByStages--br_period_box--8kXcH9_ {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	max-width: 41.06667vw;
	background-color: rgba(249, 58, 74, 0.02);
}
.ByStages--brPeriodDesc--3VKHneo {
	max-width: 27.2vw;
}
.ByStages--brPeriodDesc--3VKHneo,
.ByStages--brPeriodInfo--1mFNDg1 {
	color: #fc3745;
	font-size: 2.93333vw;
	text-align: center;
}
.BenefitsLabel--atmosphereImage--1M0dSen {
	height: 4.53333vw;
	margin-right: 0.8vw;
}
.BenefitsLabel--benefitCommonBox--6mlvPKI {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	box-sizing: border-box;
	height: 4.26667vw;
	margin-right: 0.8vw;
	padding: 0 1.13333vw;
	border: 1px solid rgba(255, 16, 16, 0.2);
	border-radius: 1.06667vw;
	background-color: rgba(249, 58, 74, 0.02);
}
.BenefitsLabel--PeriodDesc--1pch5tL {
	height: 4.26667vw;
	color: #fc3745;
	font-size: 2.93333vw;
	line-height: 4.8vw;
	text-align: center;
}
.StatusAndAtmosphereLabel--brFloatBoxAtmosphere--EQ8B6vx {
	margin-right: 0.8vw;
}
.StatusAndAtmosphereLabel--actIcon--1nFUILJ {
	position: relative;
	display: block;
	height: 3.73333vw;
	margin-right: 0.8vw;
}
.StatusAndAtmosphereLabel--warp--1ucv2Co {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 7.46667vw;
	height: 4.53333vw;
	margin-right: 0.8vw;
	border-radius: 0.8vw;
}
.StatusAndAtmosphereLabel--text--RITxyQr {
	margin: 0 auto;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: PingFangSC-Semibold, sans-serif;
}
.BrandItem--brandGood--QysOQmM {
	height: 75.46667vw;
	background-color: #fff;
}
.BrandItem--br_top--Q_GPOqx,
.BrandItem--brandGood--QysOQmM {
	position: relative;
	display: block;
	width: 46.4vw;
	border-radius: 3.2vw;
}
.BrandItem--br_top--Q_GPOqx {
	overflow: hidden;
	height: 46.4vw;
	margin-bottom: 1.6vw;
}
.BrandItem--brBrandGoodImgWrap--25L9OpD {
	position: relative;
	display: -webkit-flex;
	display: flex;
	overflow: hidden;
	-webkit-backface-visibility: hidden;
}
.BrandItem--brBrandGoodImgWrap--25L9OpD,
.BrandItem--mask--2XScnUH {
	width: 46.4vw;
	height: 46.4vw;
	border-top-left-radius: 3.2vw;
	border-top-right-radius: 3.2vw;
}
.BrandItem--mask--2XScnUH {
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.03);
}
.BrandItem--brBrandLogoWrap--Z1GNp4z {
	position: absolute;
	top: 2.33333vw;
	left: 2.2vw;
	overflow: hidden;
	box-sizing: border-box;
	width: 8.8vw;
	border-radius: 1.6vw;
	background-color: #fde5cf;
}
.BrandItem--logoWrap--CFsJIJE {
	display: block;
	margin: 0.53333vw;
	border-radius: 1.06667vw;
	background-color: #fff;
}
.BrandItem--logoDescri--1uaiogu {
	color: #cb5812;
	font-size: 3.2vw;
	line-height: 3.33333vw;
	letter-spacing: -0.13333vw;
	text-align: center;
	zoom: 0.75;
	font-family: PingFangSC-Regular, sans-serif;
}
.BrandItem--itemStockWrap--3WzmJIj {
	position: relative;
	top: -4.26667vw;
	padding: 0 2.4vw;
}
.BrandItem--itemStockBox--T4xON71 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	width: -webkit-max-content;
	width: -moz-max-content;
	width: max-content;
	height: 5.2vw;
	border-radius: 1.06667vw;
	background-image: -webkit-linear-gradient(left, #ffecd5 100%, #ffd0a2 0);
	background-image: linear-gradient(90deg, #ffecd5 100%, #ffd0a2 0);
	font-weight: 600;
}
.BrandItem--itemStockBoxLeft--2xlQvoN {
	margin: 0 1.06667vw;
	color: #fe6e31;
	font-size: 3.2vw;
	font-family: PingFang SC;
}
.BrandItem--itemStockBoxRight--o6Jnn5r {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 4.4vw;
	margin-right: 0.4vw;
	padding: 0 1.33333vw;
	border-radius: 0.8vw;
	background-color: #fff;
}
.BrandItem--itemStockBoxRightText--1yFpRzd {
	-webkit-flex: 1;
	flex: 1;
	overflow: hidden;
	color: #fe6e31;
	font-size: 2.66667vw;
	text-overflow: ellipsis;
	font-family: PingFang SC;
}
.BrandItem--brBrandGoodTitleWrap--3yw9mBP {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 5.33333vw;
	margin-top: 0;
	margin-bottom: 0.53333vw;
	padding-right: 2.4vw;
	padding-left: 2.4vw;
}
.BrandItem--brBrandGoodTitle--DQdr7Aq {
	-webkit-flex: 1;
	flex: 1;
	overflow: hidden;
	margin-bottom: 1.73333vw;
	padding: 0 2.4vw;
	color: #333;
	font-size: 3.73333vw;
	line-height: 5.06667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
	font-family: PingFangSC-Medium, sans-serif;
}
.BrandItem--preTimeWrap--3fp2h5D {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	width: 46.4vw;
	margin-top: 0.8vw;
	margin-bottom: 2.13333vw;
	padding: 0 2.4vw;
}
.BrandItem--preTimeText--A5iSTTh {
	margin-left: 0.8vw;
	color: #14c06a;
	font-size: 2.93333vw;
	font-family: PingFangSC-Regular;
}
.BrandItem--brFloatWrap--3U4QP3q {
	position: relative;
	z-index: 3;
	-webkit-flex-direction: row;
	flex-direction: row;
	margin-bottom: 0.13333vw;
	padding-right: 1.6vw;
	padding-left: 2.4vw;
}
.BrandItem--brFloatBox--1k_y7mO,
.BrandItem--brFloatWrap--3U4QP3q {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.BrandItem--brFloatBox--1k_y7mO {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	overflow: hidden;
	width: 41.86667vw;
	height: 4.26667vw;
}
.BrandItem--br_benefit_common_box--386THz0 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4.4vw;
	margin-right: 0.8vw;
	padding: 0 1.13333vw;
	border: 1px solid rgba(255, 16, 16, 0.2);
	border-radius: 1.06667vw;
}
.BrandItem--br_period_box--2qIGekP {
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	max-width: 41.06667vw;
	padding: 0;
}
.BrandItem--brPeriodDesc--P32as1H {
	max-width: 27.2vw;
	padding: 0 0.8vw;
	border-right: 1px dashed rgba(195, 156, 129, 0.3);
	background: #fff5ed;
	color: #a67551;
	font-size: 3.2vw;
	zoom: 0.83;
}
.BrandItem--brPeriodInfo--377ExtK {
	padding: 0 0.8vw;
	background: #f3e3d9;
	color: #a67551;
	font-size: 3.2vw;
	zoom: 0.83;
}
.BrandItem--brandCouponBox--39PVNCq {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 36.26667vw;
	height: 6.26667vw;
	margin-top: 1.86667vw;
	margin-bottom: 2.4vw;
	padding-right: 1.6vw;
	padding-left: 2.4vw;
}
.BrandItem--itemFeedback--3BLkM30 {
	-webkit-justify-content: center;
	justify-content: center;
	width: 5.2vw;
	height: 100%;
	background-color: #6a45ff;
}
.BrandItem--brInfo--36jMQTJ {
	-webkit-flex-direction: row;
	flex-direction: row;
	margin: 0.8vw 0 1.33333vw 1.33333vw;
	padding: 0 1.6vw;
}
.BrandItem--brInfo--36jMQTJ,
.BrandItem--brInfoSellingPointBox--2lmvu4j {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: baseline;
	align-items: baseline;
}
.BrandItem--brInfoSellingPointBox--2lmvu4j {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	overflow: hidden;
	margin: 0.8vw 0 2.13333vw;
	padding-left: 2.4vw;
}
.BrandItem--brInfoFont1--2REvUoS {
	overflow: hidden;
	width: 46.13333vw;
	color: #05b057;
	font-size: 2.93333vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
}
.BrandItem--br_deliveryTiming_box--2CUqXCJ {
	background-color: rgba(249, 58, 74, 0.02);
}
.BrandItem--br_deliveryTiming_font--tDwaEms {
	color: #fc3745;
	font-size: 3.2vw;
	text-align: center;
	zoom: 0.83;
	font-family: PingFangSC-Regular, sans-serif;
}
.BrandItem--br_sale_box--IrC6nRs {
	background-color: #f9e8fd;
}
.BrandItem--br_sale__font--2am9BSx {
	color: #bd42df;
	font-size: 3.2vw;
	zoom: 0.83;
}
.BrandItem--br_benefitInfo--2GNlqx3 {
	background-color: #fff1f3;
}
.BrandItem--br_benefitInfo_font--1l00Bl5 {
	color: #ff1759;
	font-size: 3.2vw;
	zoom: 0.83;
}
.BrandItem--brInfoSellingPoint--hTcPilb {
	color: #979797;
	font-size: 2.93333vw;
}
.BrandItem--brInfoPraise--3XiUXKk {
	-webkit-flex: 1;
	flex: 1;
	color: #979797;
	font-size: 3.2vw;
	line-height: 3.46667vw;
	text-overflow: ellipsis;
}
.BrandItem--brInfoLine--1jwU4zE {
	position: relative;
	top: 0.26667vw;
	height: 2.93333vw;
	margin: 0 1.33333vw;
	border-left: 1px solid #979797;
}
.BrandItem--br_officialSubsidy_box--3ArVdSv {
	background-color: #fff1f6;
}
.BrandItem--br_officialSubsidy_l--1hkHAi- {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
	width: 8.53333vw;
	height: 4vw;
}
.BrandItem--br_afterSubsidiesPriceDesc_box--1P8Fq_L {
	background-color: #ff4a74;
}
.BrandItem--br_afterSubsidiesPriceDesc_icon--nT7nviv {
	width: 2.93333vw;
	height: 2.53333vw;
	margin-right: 0.53333vw;
}
.BrandItem--br_afterSubsidiesPriceDesc_title--gfvNHI0 {
	color: #fff;
	font-size: 3.2vw;
	line-height: 4vw;
	zoom: 0.83;
}
.BrandItem--br_officialSubsidy_title--3bG9sMW {
	color: #ff2241;
	font-size: 3.2vw;
	line-height: 4vw;
	zoom: 0.83;
}
.BrandItem--br_officialSubsidy_font--3baVIo8 {
	margin-left: 0.66667vw;
	color: #ffedd9;
	font-size: 3.2vw;
	line-height: 4vw;
	zoom: 0.83;
}
.BrandItem--br_priceProtect_box--2twV6Nb {
	background-color: rgba(249, 58, 74, 0.02);
}
.BrandItem--br_priceProtect__font--36z37wL {
	color: #fc3745;
	font-size: 3.2vw;
	text-align: center;
	zoom: 0.83;
	font-family: PingFangSC-Regular, sans-serif;
}
.BrandItem--brCategoryRankName--1te9OM9 {
	-webkit-justify-content: space-between;
	justify-content: space-between;
	overflow: hidden;
	width: 44.13333vw;
	margin-top: 1.86667vw;
	margin-left: 1.6vw;
	padding: 1.46667vw 1.6vw;
	border-radius: 1.6vw;
	background: #f9f7f6;
}
.BrandItem--brCategoryRankName--1te9OM9,
.BrandItem--brCategoryRankNameLeft--3B123p0 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.BrandItem--brCategoryRankNameLeftFont--2nz3EO3 {
	max-width: 35.46667vw;
	color: #a0a0a0;
	font-size: 3.2vw;
	text-overflow: ellipsis;
}
.BrandItem--br_qualityServiceTags_box--DFGbH7Y {
	background: #fff1f6;
}
.BrandItem--br_qualityServiceTags__font--2UBThtD {
	color: #ff2241;
	font-size: 3.2vw;
	zoom: 0.83;
}
.BrandItem--br_brandGoodImg--vq8RJb8 {
	position: relative;
	display: block;
	width: 46.4vw;
	height: 46.4vw;
	pointer-events: none;
	-webkit-transform-origin: 23.86667vw 23.86667vw;
	transform-origin: 23.86667vw 23.86667vw;
}
.BrandItem--sealUrl--YdBqXL_ {
	position: absolute;
	top: 9.86667vw;
	left: 9.86667vw;
}
.BrandItem--atmosphere--xzaEJUD {
	position: relative;
	top: -2.13333vw;
	padding-left: 2.4vw;
}
.BrandItem--flashSale--2JJ-74H {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 25.73333vw;
	background-color: #fde8e9;
}
.BrandItem--flashSale--2JJ-74H,
.BrandItem--flashSaleLeft--1FCP87i {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	height: 4.53333vw;
	border-radius: 1.06667vw;
}
.BrandItem--flashSaleLeft--1FCP87i {
	-webkit-justify-content: center;
	justify-content: center;
	width: 10.66667vw;
	background-image: -webkit-linear-gradient(135deg, #ff174d, #fe5f45);
	background-image: linear-gradient(-45deg, #ff174d, #fe5f45);
}
.BrandItem--flashSaleTitle--2i0vJ4n {
	color: #fff;
	font-size: 3.2vw;
	white-space: nowrap;
	zoom: 0.83;
	font-family: PingFangSC-Semibold, sans-serif;
}
.BrandItem--flashSaleRight--2oKnZ8B {
	margin-left: 1.06667vw;
}
.BrandItem--countDownWrap--85adF3u {
	position: absolute;
	bottom: -18.53333vw;
	left: 0;
}
.BrandItem--benefitCommonBox--3fJISmY {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	box-sizing: border-box;
	height: 4.26667vw;
	margin-right: 0.8vw;
	padding: 0 1.13333vw;
	border: 1px solid rgba(255, 16, 16, 0.2);
	border-radius: 1.06667vw;
	background-color: rgba(249, 58, 74, 0.02);
}
.BrandItem--PeriodDesc--1OHUB3F {
	height: 4.26667vw;
	color: #fc3745;
	font-size: 2.93333vw;
	line-height: 4.8vw;
	text-align: center;
}
.Flash--businessEntrance--1aetaOy {
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	padding: 2.66667vw 1.06667vw 1.06667vw;
	border-radius: 3.2vw;
}
.Flash--flashTop--1kEaKs9 {
	margin-bottom: 2.13333vw;
	padding-left: 1.86667vw;
}
.Flash--title--2YBtFJm {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	margin-bottom: 1.06667vw;
}
.Flash--flashTopTitleImage--21kCYki {
	width: 16vw;
	height: 5.6vw;
}
.Flash--product--2yyFAhl {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 44.26667vw;
	height: 58.66667vw;
	margin: 0 auto;
	padding: 4.53333vw 1.86667vw;
	border-radius: 2.13333vw;
	background-color: #fff;
}
.Flash--sellingPoint--2WToZ_n {
	color: #ff2e60;
	font-size: 3.2vw;
	line-height: 4.53333vw;
	letter-spacing: 0;
}
.Flash--productList--2C2milj {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.Flash--itemPic--2vXsPCs {
	width: 13.33333vw;
	height: 13.33333vw;
	border-radius: 1.46667vw;
}
.Flash--content--1wzm74R {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	margin-left: 2.4vw;
}
.Flash--itemName--1JY2FI6 {
	max-width: 25.6vw;
	margin-top: 0.33333vw;
	margin-bottom: 1vw;
	color: rgba(0, 0, 0, 0.84);
	font-size: 3.2vw;
	line-height: 3.86667vw;
	text-overflow: ellipsis;
}
.Flash--contentRight--2KFlUfj {
	position: relative;
	top: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 8vw;
	padding: 0 2.26667vw;
	border-radius: 0.8vw;
	background-color: rgba(255, 24, 77, 0.09);
}
.Flash--brandProfit--3NKrUeQ {
	display: inline-block;
	overflow: hidden;
	max-width: 23.06667vw;
	color: #ff1243;
	font-size: 2.66667vw;
	line-height: 3.73333vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.UnFlash--businessEntrance--RWbVj0F {
	width: 46.4vw;
	height: 43.46667vw;
	margin-bottom: 2.4vw;
	padding-top: 2vw;
	border-radius: 3.2vw;
}
.UnFlash--title--1I4kaVl {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	margin-bottom: 1.46667vw;
	padding-left: 2.4vw;
}
.UnFlash--product--1udUjDQ {
	width: 44.26667vw;
	height: 33.33333vw;
	margin: 0 auto;
	padding: 1.86667vw;
	border-radius: 2.13333vw;
	background-color: #fff;
}
.UnFlash--productList--14Yf-QG {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	overflow: hidden;
	margin-bottom: 2.53333vw;
}
.UnFlash--itemPic--3YvnmoJ {
	border-radius: 1.46667vw;
}
.UnFlash--content--py-Lo8M {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: auto;
	flex: auto;
	-webkit-flex-direction: column;
	flex-direction: column;
	margin-left: 2.4vw;
}
.UnFlash--itemTitle--1yr27S0 {
	max-width: 25.6vw;
	margin-top: 0.33333vw;
	margin-bottom: 1vw;
	color: rgba(0, 0, 0, 0.84);
	font-size: 3.2vw;
	line-height: 3.86667vw;
	text-overflow: ellipsis;
}
.UnFlash--price--3Ql9W7E {
	-webkit-align-items: center;
	align-items: center;
	-webkit-align-self: flex-start;
	align-self: flex-start;
	max-width: 26vw;
	height: 7.06667vw;
	border-radius: 0.8vw;
	background-color: rgba(255, 24, 77, 0.09);
}
.UnFlash--coupon--H2pWNyM,
.UnFlash--price--3Ql9W7E {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.UnFlash--coupon--H2pWNyM {
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-right: 0.73333vw;
	line-height: 3.73333vw;
}
.UnFlash--couponUnit--2C_yuOl {
	color: #ff1243;
	font-size: 3.2vw;
}
.UnFlash--couponPrice--1Lev8KP {
	color: #ff1243;
	font-size: 3.73333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.UnFlash--totalAmount--n86zgJF {
	width: 100%;
	color: #ff1243;
	font-size: 3.2vw;
	line-height: 3.73333vw;
	text-overflow: ellipsis;
	zoom: 0.83;
	font-family: PingFangSC-Regular, sans-serif;
}
.CouponBoxSingleItem--brCouponWrap--28kcwD8 {
	position: relative;
	width: 36.26667vw;
}
.CouponBoxSingleItem--brCouponBox--1nszMBf {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-content: center;
	align-content: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.CouponBoxSingleItem--brCouponTag--1vcCbPV {
	position: relative;
	display: -webkit-flex;
	display: flex;
	color: #fff;
	font-size: 3.2vw;
}
.CouponBoxSingleItem--brPriceBox--AgnlHeL {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	overflow: hidden;
	width: 100%;
}
.CouponBoxSingleItem--brCouponPrice--2UfRO8I,
.CouponBoxSingleItem--brCouponPriceLittle--2GK8lc- {
	position: relative;
	display: -webkit-flex;
	display: flex;
	color: #fff;
	font-weight: 700;
	letter-spacing: -0.06667vw;
	text-indent: 0.26667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.CouponBoxSingleItem--brCouponDesc--2q_YqMn {
	position: relative;
	padding-top: 0.26667vw;
	color: #ff174d;
	font-size: 3.2vw;
	letter-spacing: 0;
	text-overflow: ellipsis;
	zoom: 0.92;
}
.CouponBoxSingleItem--brPriceBoxInner--zdnS3Zc {
	-webkit-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 4.26667vw;
	padding-left: 1.6vw;
	line-height: 4.26667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.CouponBoxSingleItem--br-aftercoupon-tag--17BY4R8 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	color: rgba(255, 210, 215, 0.8);
	font-size: 2.93333vw;
}
.CouponBoxSingleItem--br-aftercoupon-price--2ffmWzp {
	position: relative;
	color: rgba(255, 210, 215, 0.8);
	font-size: 3.2vw;
	text-decoration: line-through;
}
.CouponBoxSingleItem--br-aftercouponBox--2NvIl_1 {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	height: 2.66667vw;
	color: rgba(255, 210, 215, 0.8);
	line-height: 2.66667vw;
}
.CouponBoxSingleItem--flexcolumn--25_6hOC {
	position: relative;
	-webkit-flex-direction: column;
	flex-direction: column;
}
.CouponBoxSingleItem--flexcolumn--25_6hOC,
.CouponBoxSingleItem--ndaysPriceBox--2RMr-ig {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.CouponBoxSingleItem--ndaysPriceBox--2RMr-ig {
	position: absolute;
	bottom: 11.46667vw;
	left: 1.6vw;
	-webkit-align-items: center;
	align-items: center;
	height: 4.8vw;
	padding: 0 1.2vw;
	border-radius: 0.8vw;
	background: rgba(0, 0, 0, 0.3);
}
.CouponBoxSingleItem--ndaysPriceFont--1OR3Ld3 {
	color: #fff;
	font-weight: 700;
	font-size: 2.93333vw;
}
.CouponBoxSingleItem--brSalesDesc--2kdiYNN {
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	border: none;
	color: #cb5812;
	letter-spacing: -1px;
	font-family: PingFangSC-Regular, sans-serif;
}
.EntryCardNew--enShopGoodWrap--2vB3D7O {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 77.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
	background-image: -webkit-linear-gradient(bottom, #ffeeeb, #ffdfe6 95%);
	background-image: linear-gradient(0deg, #ffeeeb, #ffdfe6 95%);
}
.EntryCardNew--enShopGoodImgbox1--3lukMsV {
	position: relative;
	top: 0;
	width: 39.33333vw;
	height: 39.33333vw;
	margin-right: 3.46667vw;
	margin-left: 3.6vw;
	border-radius: 2.26667vw;
	background: hsla(0, 0%, 100%, 0.47);
}
.EntryCardNew--enShopGoodImgbox2--3gAHM7g {
	position: relative;
	top: 0.8vw;
	left: -1.6vw;
	z-index: 2;
	width: 42.53333vw;
	height: 42.53333vw;
	border-radius: 2.4vw;
	background: #fffbfb;
	box-shadow: 0 -0.13333vw 0.4vw 0 rgba(255, 43, 88, 0.07);
}
.EntryCardNew--enBrandLogoCouponbox--1-D8c2r {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 5;
}
.EntryCardNew--enShopGoodImgbox--2Of8EPQ {
	position: relative;
	width: 44.26667vw;
	height: 54.4vw;
	margin: 0 auto;
	padding: 1.06667vw 1.06667vw 0;
}
.EntryCardNew--en-brandLogo--2wtBjWr,
.EntryCardNew--enShopGoodImgbox--2Of8EPQ {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.EntryCardNew--en-brandLogo--2wtBjWr {
	position: absolute;
	top: 5.2vw;
	left: 3.6vw;
	z-index: 4;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	width: 8vw;
	height: 8vw;
	border-radius: 1.06667vw;
	background-color: #fff;
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1);
}
.EntryCardNew--enShopNameBox--kWldMKG {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 5.6vw;
	margin: 2.13333vw 2.4vw 0;
}
.EntryCardNew--enShopName--2esuAPh {
	overflow: hidden;
	color: #000;
	font-size: 4vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: PingFangSC-Medium;
}
.EntryCardNew--enShopInfo--20QkC1T {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	max-width: 42.53333vw;
	height: 4.8vw;
	padding: 0.93333vw 2vw;
	border-radius: 3.06667vw;
	background-color: hsla(0, 0%, 100%, 0.86);
}
.EntryCardNew--enShopInfoDesc--y7MD2Lt {
	font-size: 2.93333vw;
	text-overflow: ellipsis;
}
.EntryCardNew--enBenefitInfo--2M8mnMW {
	z-index: 1;
	margin-top: 0.93333vw;
	margin-left: 2.4vw;
}
.EntryCardNew--enBenefitInfoFont--8h7NJHg {
	overflow: hidden;
	width: 42.66667vw;
	height: 4.66667vw;
	color: rgba(0, 0, 0, 0.65);
	font-size: 3.46667vw;
	line-height: 4.66667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.EntryCardNew--enShopInfoBox--3w1qOTh {
	z-index: 1;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	margin-top: 1.86667vw;
	margin-right: 2.4vw;
	margin-left: 2.4vw;
}
.EntryCardNew--enShopInfoBox--3w1qOTh,
.EntryCardNew--enShopInfoLaba--3-yJtNB {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.EntryCardNew--enShopInfoLaba--3-yJtNB {
	-webkit-flex-direction: column;
	flex-direction: column;
	height: 4.8vw;
}
.FeedPlaceHolder--FeedPlaceholder--3fh9FVD {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: top;
	align-items: top;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	margin-bottom: 3.2vw;
	padding: 0 1.6vw;
}
.FeedPlaceHolder--FeedPlaceHolderBox--24fBdah {
	padding: 0;
}
.FeedPlaceHolder--msrectangleshape--3TgtO3e {
	width: 47.73333vw;
	height: 54.66667vw;
	border-radius: 2.4vw;
	background-color: #f8f8f8;
}
.FeedPlaceHolder--msrectangleshape2--zzZtRIc,
.FeedPlaceHolder--msrectangleshape3--1bO0zYE {
	width: 47.46667vw;
	height: 37.06667vw;
	border-radius: 2.4vw;
	background-color: #f8f8f8;
}
.FeedPlaceHolder--msrectangleshape3--1bO0zYE {
	margin-top: 4.8vw;
}
.InlineCoupons--coupons--3eycgB_ {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 17.86667vw;
	margin-bottom: 2.4vw;
	border-radius: 2.4vw;
}
.InlineCoupons--coupons_content--3HFth1h {
	position: absolute;
	top: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 46.4vw;
	height: 17.86667vw;
}
.InlineCoupons--coupons_content_left--3Y8-eu8 {
	overflow: hidden;
	width: 28.53333vw;
	height: 17.86667vw;
	padding-top: 1.6vw;
	padding-left: 2.4vw;
}
.InlineCoupons--coupons_content_left_title--3MwHcBd {
	margin-top: 1.86667vw;
	margin-bottom: 0.4vw;
	color: #d7641e;
	font-weight: 700;
	font-size: 3.46667vw;
	line-height: 4.93333vw;
}
.InlineCoupons--coupons_content_left_desc--16mzbVN {
	color: rgba(215, 100, 30, 0.88);
	font-size: 3.2vw;
	line-height: 4.4vw;
}
.InlineCoupons--coupons_content_right--3PpbzPM {
	width: 18.93333vw;
	height: 17.86667vw;
	padding-top: 1.6vw;
	padding-left: 2.66667vw;
}
.InlineCoupons--coupons_content_price--jihnqbG {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-bottom: 0.93333vw;
}
.InlineCoupons--coupons_content_price_nuit--oFMEz4Q {
	color: #d7641e;
	font-size: 3.2vw;
	font-family: PingFangSC-Regular;
}
.InlineCoupons--coupons_content_price_num--17_ptKL {
	color: #d7641e;
	font-size: 6.53333vw;
	line-height: 7.33333vw;
	font-family: AlibabaSans102-Bd;
}
.InlineCoupons--coupons_content_btn--3hJ_uKr {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 10.66667vw;
	height: 5.33333vw;
	margin-left: 0.93333vw;
	border-radius: 2.66667vw;
	background-color: #d7641e;
	color: #fff;
	font-size: 2.93333vw;
	font-family: PingFangSC-Medium;
}
.InlineCoupons--coupon_fixed--1W4UaOP {
	position: fixed;
	top: 5%;
	left: 50%;
	z-index: 9;
	width: 93.6vw;
	height: 13.33333vw;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.InlineCoupons--coupon_fixed_content--102E4zu {
	position: absolute;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.InlineCoupons--coupon_fixed_content_l--2sq2s8R {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	width: 19.33333vw;
	height: 13.33333vw;
}
.InlineCoupons--coupon_fixed_content_l_unit--1kRHeQR {
	color: #ff174d;
	font-size: 4.26667vw;
	font-family: PingFangSC-Regular;
}
.InlineCoupons--coupon_fixed_content_l_num--3qbO5U3 {
	color: #ff174d;
	font-size: 8.53333vw;
	font-family: AlibabaSans102-Bd;
}
.InlineCoupons--coupon_fixed_content_r--QXsZNrp {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 74.13333vw;
	height: 13.33333vw;
	padding-right: 3.2vw;
	padding-left: 2.66667vw;
}
.InlineCoupons--coupon_fixed_content_r_content--34_SkdN {
	max-width: 56.8vw;
}
.InlineCoupons--coupon_fixed_content_r_title--3oHEneG {
	color: #f72f41;
	font-weight: 700;
	font-size: 3.46667vw;
	line-height: 4.93333vw;
}
.InlineCoupons--coupon_fixed_content_r_desc---PdHMpr {
	color: rgba(247, 47, 65, 0.55);
	font-size: 3.2vw;
	line-height: 4.4vw;
	text-overflow: ellipsis;
}
.InlineCoupons--coupon_fixed_btn--35ILc8q {
	padding: 0.8vw 2vw;
	border-radius: 7.2vw;
	background-image: -webkit-linear-gradient(top, #ff3307, #ff2742 32%, #f31212);
	background-image: linear-gradient(180deg, #ff3307, #ff2742 32%, #f31212);
	color: #fff;
	box-shadow: inset 3px 5px 14px 0 rgba(255, 152, 166, 0.55), inset -9px -16px 136px 0 #f50317;
	font-size: 3.2vw;
	line-height: 4.4vw;
}
.LikeBlock--likeBlock--3pv3G3L {
	position: relative;
}
.LikeBlock--likeAnimationBlock--1jAG2nc {
	position: relative;
	-webkit-transform: translate(0);
	transform: translate(0);
}
.LikeBlock--likeHeart--2ePLo6B {
	z-index: 2;
	width: 5.86667vw;
	height: 5.86667vw;
}
@-webkit-keyframes LikeBlock--likeup--16z5nlz {
	0% {
		opacity: 1;
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
	}
	20% {
		opacity: 1;
		-webkit-transform: translate(10px, -10px) scale(1);
		transform: translate(10px, -10px) scale(1);
	}
	40% {
		opacity: 1;
		-webkit-transform: translateY(-20px) scale(1);
		transform: translateY(-20px) scale(1);
	}
	60% {
		opacity: 0.8;
		-webkit-transform: translate(-10px, -30px) scale(0.8);
		transform: translate(-10px, -30px) scale(0.8);
	}
	80% {
		opacity: 0.6;
		-webkit-transform: translateY(-40px) scale(0.6);
		transform: translateY(-40px) scale(0.6);
	}
	to {
		opacity: 0;
		-webkit-transform: translate(10px, -50px) scale(0);
		transform: translate(10px, -50px) scale(0);
	}
}
@keyframes LikeBlock--likeup--16z5nlz {
	0% {
		opacity: 1;
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
	}
	20% {
		opacity: 1;
		-webkit-transform: translate(10px, -10px) scale(1);
		transform: translate(10px, -10px) scale(1);
	}
	40% {
		opacity: 1;
		-webkit-transform: translateY(-20px) scale(1);
		transform: translateY(-20px) scale(1);
	}
	60% {
		opacity: 0.8;
		-webkit-transform: translate(-10px, -30px) scale(0.8);
		transform: translate(-10px, -30px) scale(0.8);
	}
	80% {
		opacity: 0.6;
		-webkit-transform: translateY(-40px) scale(0.6);
		transform: translateY(-40px) scale(0.6);
	}
	to {
		opacity: 0;
		-webkit-transform: translate(10px, -50px) scale(0);
		transform: translate(10px, -50px) scale(0);
	}
}
.LiveGood--live_good--1IzNWjF {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
}
.LiveGood--live_good--1IzNWjF,
.LiveGood--live_good_wrap--1JhQoId {
	width: 46.4vw;
	height: 75.46667vw;
}
.LiveGood--live_good_img--x40ur11 {
	width: 46.4vw;
	height: 75.46667vw;
	border-radius: 3.2vw;
	pointer-events: none;
}
.LiveCardNew--liveCard--3zKVlm3 {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
}
.LiveCardNew--liveCardConent--2OZ2L0B {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: 46.4vw;
	height: 75.46667vw;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.LiveCardNew--liLiveCardMask--1wLQaCU {
	background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.1), transparent 14%, transparent 47%, rgba(0, 0, 0, 0.51) 92%);
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent 14%, transparent 47%, rgba(0, 0, 0, 0.51) 92%);
}
.LiveCardNew--liLiveBroadcast--3P9KwxS {
	position: absolute;
	top: 2.66667vw;
	left: 2.66667vw;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 4.26667vw;
	padding-right: 2.4vw;
	border-radius: 2vw;
	background-color: rgba(0, 0, 0, 0.2);
}
.LiveCardNew--liLiveBroadIcon--1_yXKSz {
	width: 4.26667vw;
	height: 4.26667vw;
}
.LiveCardNew--li-liveCardIcon--3F_GSnh {
	display: block;
	width: 4.26667vw;
	height: 4.26667vw;
}
.LiveCardNew--liLiveBroadcastText--2eC7Qzr {
	overflow: hidden;
	max-width: 32vw;
	height: 3.2vw;
	margin-left: 0.66667vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.LiveCardNew--liCardTitle--t5VJPuT {
	position: absolute;
	top: 43.73333vw;
	left: 2.66667vw;
	z-index: 2;
	overflow: hidden;
	width: 41.06667vw;
	height: 5.6vw;
	color: #fff;
	font-weight: 700;
	font-size: 3.73333vw;
	line-height: 5.6vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.LiveCardNew--liLiveUser--2W5BSWQ {
	position: absolute;
	bottom: 2.13333vw;
	left: 2.66667vw;
	z-index: 2;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.33333vw;
}
.LiveCardNew--liLiveUserImage--3UwCkVh {
	display: block;
	overflow: hidden;
	width: 5.33333vw;
	height: 5.33333vw;
	margin-right: 1.33333vw;
	border-radius: 2.66667vw;
}
.LiveCardNew--liUserName--3NeiNzW {
	overflow: hidden;
	max-width: 22.4vw;
	height: 3.2vw;
	color: hsla(0, 0%, 100%, 0.8);
	font-size: 2.93333vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.LiveCardNew--liLoveWrap--3N5K8CS {
	position: absolute;
	right: 2.4vw;
	bottom: 2.66667vw;
	z-index: 2;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.LiveCardNew--li-loveIcon--2oaE2ge {
	width: 4vw;
	height: 4vw;
}
.LiveCardNew--liLoveNum--2WE-fbF {
	height: 3.2vw;
	margin-top: 0.53333vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 3.46667vw;
}
.LiveCardNew--liLiveGood--1t7mb0S {
	position: absolute;
	top: 49.86667vw;
	left: 2.66667vw;
	z-index: 2;
	overflow: hidden;
	width: 33.33333vw;
	height: 12.8vw;
	border-radius: 1.6vw;
	background-color: #fff;
}
.LiveCardNew--liGoodTitle--2ZIJLet {
	top: 2.66667vw;
	height: 4vw;
	color: #111;
	font-size: 2.66667vw;
	text-overflow: ellipsis;
}
.LiveCardNew--liGoodPriceArea--1rSs8Lg,
.LiveCardNew--liGoodTitle--2ZIJLet {
	position: absolute;
	left: 1.6vw;
	z-index: 1;
	overflow: hidden;
	width: 18.66667vw;
	white-space: nowrap;
}
.LiveCardNew--liGoodPriceArea--1rSs8Lg {
	top: 6.93333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 3.46667vw;
}
.LiveCardNew--liActivityPrice--18P6B7- {
	margin-right: 0.8vw;
	color: #ff0030;
	font-weight: 700;
	font-size: 2.93333vw;
	font-family: AlibabaSans102-Rg, sans-serif;
}
.LiveCardNew--liOriginPrice--2WhSRjf {
	color: #666;
	font-size: 2.93333vw;
	text-decoration: line-through;
	font-family: AlibabaSans102-Rg\, sans-serif;
}
.LiveCardNew--liGoodImg--3mIkwcn {
	position: absolute;
	top: 0.53333vw;
	right: 0.53333vw;
	z-index: 1;
	overflow: hidden;
	width: 11.73333vw;
	height: 11.73333vw;
	border-radius: 1.06667vw;
	background-color: #f8f8f8;
}
.MakeupBanner--bannerContainer--25PNQ-j {
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
}
.MakeupBanner--bannerBackImg--3z9vzNw {
	width: 46.4vw;
	height: 75.46667vw;
}
.CouponBoxNew--brCouponWrap--1rEYH0u {
	position: relative;
	height: 9.86667vw;
}
.CouponBoxNew--brCouponBox--1b3bF6S {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-content: center;
	align-content: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 9.86667vw;
}
.CouponBoxNew--brCouponTag--3RcVt59 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	color: #fff;
	font-size: 3.46667vw;
}
.CouponBoxNew--brPriceBox--2mSUQnG {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	overflow: hidden;
	width: 100%;
	height: 9.86667vw;
}
.CouponBoxNew--brCouponPrice--3zElU1E,
.CouponBoxNew--brCouponPriceLittle--2IblnD0 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	color: #fff;
	font-weight: 700;
	text-indent: 0.26667vw;
	font-family: AlibabaSans102-Bd;
}
.CouponBoxNew--brCouponDesc--2UyzlMH {
	position: relative;
	color: #ff174d;
	line-height: 3.73333vw;
	text-overflow: ellipsis;
}
.CouponBoxNew--brPriceBoxInner--3tuSqaP {
	-webkit-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	height: 5.86667vw;
	line-height: 5.86667vw;
	font-family: AlibabaSans102-Bd;
}
.CouponBoxNew--br-aftercoupon-tag--1biyQ24 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	color: rgba(255, 210, 215, 0.8);
	font-size: 2.93333vw;
}
.CouponBoxNew--br-aftercoupon-price--3HOFtCW {
	position: relative;
	color: rgba(255, 210, 215, 0.8);
	font-size: 3.2vw;
	text-decoration: line-through;
}
.CouponBoxNew--br-aftercouponBox--35LJP3Z {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	height: 2.66667vw;
	color: rgba(255, 210, 215, 0.8);
	line-height: 2.66667vw;
}
.CouponBoxNew--flexcolumn--Ut0CBWP {
	position: relative;
	-webkit-flex-direction: column;
	flex-direction: column;
	height: 10.66667vw;
}
.CouponBoxNew--flexcolumn--Ut0CBWP,
.CouponBoxNew--ndaysPriceBox--1SZmfun {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.CouponBoxNew--ndaysPriceBox--1SZmfun {
	position: absolute;
	bottom: 11.46667vw;
	left: 1.6vw;
	-webkit-align-items: center;
	align-items: center;
	height: 4.8vw;
	padding: 0 1.2vw;
	border-radius: 0.8vw;
	background: rgba(0, 0, 0, 0.3);
}
.CouponBoxNew--ndaysPriceFont--37kyI0C {
	color: #fff;
	font-weight: 700;
	font-size: 2.93333vw;
}
.CouponBoxNew--brPriceDesc--a3wLmZ0 {
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	height: 9.86667vw;
	border: none;
	font-family: PingFangSC-Medium;
}
.NewCustomerNew--newCustomerNew--11sjLIq {
	overflow: hidden;
	width: 46.4vw;
	height: 71.73333vw;
	margin-bottom: 3.2vw;
	border-radius: 2.4vw;
	background-color: #fff;
}
.NewCustomerNew--brandGoodImgWrap--3uR5xUh,
.NewCustomerNew--newCustomerNewTop--1OGR2Gh {
	position: relative;
	width: 46.4vw;
	height: 55.2vw;
	background-color: #fff;
}
.NewCustomerNew--brandGoodImgWrap--3uR5xUh {
	display: -webkit-flex;
	display: flex;
}
.NewCustomerNew--brandLogoWrap--1jT2KAT {
	position: absolute;
	top: 1.6vw;
	left: 1.6vw;
	overflow: hidden;
	box-sizing: border-box;
	width: 8vw;
	height: 8vw;
	border-radius: 1.6vw;
	background-color: #fff;
}
.NewCustomerNew--brandGoodTitleWrap--1s7k2TS {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	box-sizing: border-box;
	width: 46.4vw;
	height: 6.13333vw;
	margin-bottom: 1.73333vw;
	padding: 2.4vw 1.6vw 0;
}
.NewCustomerNew--brandGoodTitle--nhUvMVu {
	-webkit-flex: 1;
	flex: 1;
	overflow: hidden;
	height: 4.53333vw;
	color: #333;
	font-size: 3.73333vw;
	line-height: 4.8vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: PingFangSC-Medium;
}
.NewCustomerNew--floatWrap--L2yG9gN {
	z-index: 3;
	-webkit-flex-direction: row;
	flex-direction: row;
	padding-right: 1.6vw;
	padding-left: 1.6vw;
}
.NewCustomerNew--floatBox--1_u4D_c,
.NewCustomerNew--floatWrap--L2yG9gN {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	height: 3.73333vw;
}
.NewCustomerNew--floatBox--1_u4D_c {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	width: 44.4vw;
}
.NewCustomerNew--periodBox--3j0Y5Qb {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	max-width: 41.06667vw;
	height: 3.73333vw;
	margin-right: 0.8vw;
	border: 1px solid #ffa880;
	border-radius: 0.53333vw;
}
.NewCustomerNew--periodDesc--2mQyZt2 {
	max-width: 27.2vw;
	height: 3.73333vw;
	padding: 0 0.8vw;
	border-right: 1px dashed #ffa880;
	color: #ff5000;
	font-size: 2.66667vw;
	line-height: 4vw;
}
.NewCustomerNew--periodInfo--1wkl9ui {
	height: 3.73333vw;
	padding-right: 0.8vw;
	padding-left: 0.8vw;
	color: #ff5000;
	font-size: 2.66667vw;
	line-height: 4vw;
}
.NewCustomerNew--couponBox--2Edgupf {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 46.4vw;
	height: 10vw;
}
.NewCustomerNew--newCustomer--3Fyis8D {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 3.73333vw;
	margin-right: 0.8vw;
	border-radius: 0.53333vw;
}
.NewCustomerNew--info--250sc7g {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-top: 2vw;
	padding: 0 1.6vw;
}
.NewCustomerNew--infoFont--tsVDshb {
	overflow: hidden;
	width: 46.13333vw;
	color: #979797;
	font-size: 2.93333vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
}
.NewCustomerNew--deliveryTiming_box--2siPzo- {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 3.73333vw;
	margin-right: 0.8vw;
	padding: 0 0.8vw;
	border-radius: 0.53333vw;
	background-color: #fff1f3;
}
.NewCustomerNew--newCustomerNew_deliveryTiming_font--2Vhy4so {
	color: #ff1759;
	font-size: 2.66667vw;
}
.NewCustomerNew--newCustomerNew_benefitInfo--TRurc3o {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 3.73333vw;
	margin-right: 0.8vw;
	padding: 0 0.8vw;
	border-radius: 0.53333vw;
	background-color: #fff1f3;
}
.NewCustomerNew--newCustomerNew_benefitInfo_font--2KuDoid {
	color: #ff1759;
	font-size: 2.66667vw;
}
.NewCustomerNew--newCustomerNew_sale_box--1qlXR5n {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4vw;
	margin-right: 0.8vw;
	padding: 0 0.8vw;
	border-radius: 0.53333vw;
	background-color: #f9e8fd;
}
.NewCustomerNew--newCustomerNew_sale__font--yV59JcG {
	color: #bd42df;
	font-size: 2.66667vw;
}
.FilterTagsSelect--FilterTagsSelectBox--3w2B8C4 {
	z-index: 2;
	margin-top: -0.13333vw;
	padding: 2.66667vw 2.4vw 2.13333vw;
	border-radius: 0 0 4.8vw 4.8vw;
	background-color: #fff;
}
.FilterTagsSelect--FilterTagsSelectList--2MyUm0_ {
	-webkit-flex-direction: row;
	flex-direction: row;
	margin-bottom: 4vw;
}
.FilterTagsSelect--FilterTagsSelectLi--VD5Wts- {
	width: 30.13333vw;
	height: 6.66667vw;
	margin-right: 2.53333vw;
	border-radius: 3.73333vw;
	background: #efefef;
	color: #333;
	font-size: 2.93333vw;
	line-height: 6.8vw;
	letter-spacing: 0;
	text-align: center;
	font-family: PingFangSC-Regular;
}
.FilterTagsSelect--isChooseLi--2Y3IptF {
	border-radius: 3.73333vw;
	background: #ffe2ee;
	color: #ff395f;
	font-size: 2.93333vw;
	letter-spacing: 0;
	text-align: center;
	font-family: PingFangSC-Medium;
}
.NewFilter--NewFilterBox--1k5bybU {
	position: relative;
	z-index: 4;
	width: 100%;
	height: 12vw;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.NewFilter--NewFilterListContent--NkV286g {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
}
.NewFilter--NewFilterListBox--53OIkB8 {
	z-index: 2;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 100vw;
	margin-top: -0.13333vw;
	padding: 2.8vw 2.4vw 2.53333vw;
	background-color: #fff;
}
.NewFilter--NewFilterLi--LOtc-vG,
.NewFilter--NewFilterLiLink--2WdGqeT {
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 6.66667vw;
}
.NewFilter--NewFilterLi--LOtc-vG {
	margin-right: 2.4vw;
	border: 1px solid hsla(0, 0%, 59.2%, 0.28);
	border-radius: 3.73333vw;
}
.NewFilter--NewFilterLiFont--2PJ2K75 {
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	text-align: center;
	font-family: PingFangSC-Medium;
}
.NewFilter--groupIcon--3PfaemU {
	margin-left: 1.06667vw;
}
.NewFilter--groupIconRotate--TUQNNdx {
	margin-left: 1.06667vw;
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
}
.NewFilter--isChooseBorder--12c8fv_ {
	border: 1px solid rgba(255, 57, 95, 0.4);
}
.NewFilter--isChooseColor--3VvZ13x {
	color: #ff395f;
}
.NewFilter--mask--3Z-zaqC {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
}
.CountDown--countdownWrap--1r0lTyi {
	position: absolute;
	top: 7.46667vw;
	left: 50%;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4.8vw;
	padding: 0.66667vw 0.8vw;
	border-radius: 1.06667vw;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.CountDown--countTimeBox--11FNSmO {
	position: relative;
	width: 4.53333vw;
	height: 3.46667vw;
}
.CountDown--countTimeBoxPicture--1cWCNdx {
	position: absolute;
	left: 0;
	width: 2.4vw;
	height: 3.46667vw;
}
.CountDown--countdownTime--19j-89t {
	width: 4.4vw;
	height: 3.46667vw;
	border-radius: 1.06667vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 3.46667vw;
	text-align: center;
}
.CountDown--countdownText--qqUiPg_ {
	margin-left: 0.48vw;
	font-weight: 600;
	font-size: 2.93333vw;
	line-height: 3.73333vw;
	opacity: 0.8;
}
.NewTabItem--tabBarItemWrap--2PaGWnb {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	box-sizing: content-box;
	width: 33.33333vw;
	background-color: #f5f5f5;
}
.NewTabItem--tabItemPic--1YNSuiB {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 13.2vw;
}
.NewTabItem--tabItemText--3fZ2k-U {
	margin-bottom: 3.2vw;
	color: #333;
	font-weight: 600;
	font-size: 4.26667vw;
	letter-spacing: 0;
	text-align: center;
	font-family: PingFangSC-Semibold;
}
.NewTabItem--tabItemActiveDom--2mNpAGB {
	position: absolute;
	bottom: 0;
	z-index: 1;
	overflow: hidden;
	width: 3.2vw;
	height: 3.2vw;
	background-color: #fff;
}
.NewTabItem--tabActiveSector--1M4XBox {
	position: absolute;
	top: -3.2vw;
	width: 6.4vw;
	height: 6.4vw;
	border-radius: 3.2vw;
	background-color: #f5f5f5;
}
.NewTabItem--feedsBottomText--2yQuzCL {
	position: absolute;
	top: 8vw;
	left: 0;
	width: 100%;
	color: #999;
	font-size: 3.2vw;
	line-height: 3.46667vw;
	letter-spacing: 0;
	text-align: center;
	font-family: PingFangSC-Regular;
}
.NoemaListJingxuanfeedsPlaceholder--rootBox--38P9VvZ {
	position: relative;
	top: -0.26667vw;
	left: 0;
	width: 100vw;
}
.NoemaListJingxuanfeedsPlaceholder--rootBoxPlaceholder--17gSe10 {
	position: absolute;
	top: 0;
	overflow: hidden;
	width: 100vw;
	height: 6.4vw;
	border-top-left-radius: 3.2vw;
	border-top-right-radius: 3.2vw;
	background-image: -webkit-linear-gradient(top, #fff, #f1f1f1);
	background-image: linear-gradient(180deg, #fff, #f1f1f1);
}
.NoFeedsHint--container--39SzTwA {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	width: 100vw;
	height: 38.66667vw;
	margin-top: 20.8vw;
	padding-right: 3.2vw;
}
.NoFeedsHint--hintImg--WoNQvCq {
	-webkit-flex: 0 0 auto;
	flex: 0 0 auto;
	margin: 0 auto 2.13333vw;
}
.NoFeedsHint--hintText--1spVdys {
	margin: -4vw auto 0;
	color: #999;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
	font-family: PingFangSC-Regular, sans-serif;
}
.NoFeedsHint--cover_resource_hint--33cpHQB {
	z-index: 9;
	height: 26.66667vw;
	background-color: #f1f1f1;
}
.RankCard--rank_content--3Pzr-_B {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 71.33333vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
	background-image: -webkit-linear-gradient(285deg, #ffdad2, #fff0f0 70%, #ffc6d5);
	background-image: linear-gradient(165deg, #ffdad2, #fff0f0 70%, #ffc6d5);
}
.RankCard--rankImgOne--wkFJAz1 {
	position: relative;
	top: 0;
	width: 39.33333vw;
	height: 44.4vw;
	margin-right: 4vw;
	margin-left: 4.26667vw;
	border-radius: 2.26667vw;
	background: hsla(0, 0%, 100%, 0.42);
}
.RankCard--rankImgTwo--14hvvOg {
	position: relative;
	top: 0.8vw;
	left: -1.6vw;
	z-index: 2;
	width: 42.53333vw;
	height: 44.4vw;
	border-radius: 2.4vw;
	background: #fff6e9;
	box-shadow: 0 -0.13333vw 0.4vw 0 rgba(255, 43, 88, 0.07);
}
.RankCard--rankImgThree--3xfrYK_ {
	position: relative;
	top: 0.93333vw;
	left: -1.06667vw;
	z-index: 3;
	display: block;
	width: 44.26667vw;
	height: 44.53333vw;
	border-top-left-radius: 2.4vw;
	border-top-right-radius: 2.4vw;
	background-color: #fff;
	box-shadow: 0 -2px 3px 0 rgba(255, 167, 167, 0.14);
}
.RankCard--rankCouponbox--39QL3-T {
	position: absolute;
	bottom: 0;
	left: 1.06667vw;
	z-index: 5;
}
.RankCard--rankCouponBg--2yvXX7q {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 44.26667vw;
	height: 8.53333vw;
	padding: 0 2.13333vw 0 1.86667vw;
	border-radius: 2.4vw;
	background-image: -webkit-linear-gradient(94deg, #ff2546, #ff4890);
	background-image: linear-gradient(-4deg, #ff2546, #ff4890);
}
.RankCard--rankCouponBg--2yvXX7q,
.RankCard--rankCouponLeft--3JZXGP0 {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.RankCard--rankCouponLeft--3JZXGP0 {
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.RankCard--rankCouponRank--1SSHtwB {
	max-width: 34.66667vw;
	color: #fff;
	font-size: 3.46667vw;
	text-overflow: ellipsis;
}
.RankCard--rankImgbox--Ntb8f9W {
	position: relative;
	width: 46.4vw;
	height: 54.4vw;
	padding: 1.6vw 1.6vw 0;
}
.RankCard--rankImgbox--Ntb8f9W,
.RankCard--rankNameBox--3kQljlX {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.RankCard--rankNameBox--3kQljlX {
	z-index: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	height: 5.6vw;
	margin: 1.86667vw 2.4vw 0;
	padding: 0;
	color: #333;
	font-size: 4vw;
	line-height: 5.6vw;
}
.RankCard--rankName--3vT_l_q {
	overflow: hidden;
	color: #333;
	font-size: 3.73333vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: PingFangSC-Medium;
}
.RankCard--rankBenefitInfo--2fjes7c {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 4.66667vw;
	margin-top: 2vw;
	margin-left: 2.4vw;
}
.RankCard--rankBenefitInfoFont--2t8qEeR {
	z-index: 1;
	overflow: hidden;
	width: 44.4vw;
	height: 4.66667vw;
	color: #ff2647;
	font-size: 3.2vw;
	line-height: 4.66667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.RankCard--rankReducedPercent--hSW92yT {
	position: absolute;
	top: 4.8vw;
	left: 2.66667vw;
	z-index: 4;
}
.RankCard--rankReducedPercentContent--H3wpzOJ {
	position: absolute;
	top: 0.4vw;
	left: 2.93333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
}
.RankCard--rankReducedPercentContentFont--8FVv3th {
	height: 4.26667vw;
	color: #ff2766;
	font-size: 3.73333vw;
}
.RankCard--rankReducedPercentContentNum--wNL0bkb {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	line-height: 5.33333vw;
}
.RankCard--num--1cOj3vL {
	color: #ff2766;
	font-size: 4.53333vw;
	font-family: AlibabaSans102-Bd;
}
.RankCard--unit--2TLm66L {
	color: #ff2766;
	font-size: 3.06667vw;
	font-family: AlibabaSans102-Bd;
}
.ShortVideoCardNew--short_video_card--2ipgH92 {
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
}
.ShortVideoCardNew--short_video_card--2ipgH92,
.ShortVideoCardNew--wraper---CqyTPD {
	position: relative;
	width: 46.4vw;
	height: 75.46667vw;
}
.ShortVideoCardNew--mask--22PLmdV {
	position: absolute;
	top: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	width: 46.4vw;
	height: 75.46667vw;
	border-radius: 3.2vw;
	background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.1), transparent 14%, transparent 47%, rgba(0, 0, 0, 0.51) 92%);
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent 14%, transparent 47%, rgba(0, 0, 0, 0.51) 92%);
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.ShortVideoCardNew--short_video_broadcast--Svs2I1J {
	position: absolute;
	top: 2.4vw;
	left: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 4vw;
	padding: 0 1.33333vw;
	border-radius: 2vw;
	background-color: rgba(0, 0, 0, 0.2);
}
.ShortVideoCardNew--short_video_broadcastText--1xslL0J {
	overflow: hidden;
	max-width: 32vw;
	height: 3.2vw;
	margin-left: 0.4vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ShortVideoCardNew--short_video_user--7QgAM7B {
	position: absolute;
	bottom: 2.13333vw;
	left: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.33333vw;
}
.ShortVideoCardNew--short_video_userName--18bTa1K {
	overflow: hidden;
	max-width: 22.4vw;
	height: 3.2vw;
	color: hsla(0, 0%, 100%, 0.8);
	font-size: 2.93333vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ShortVideoCardNew--short_video_good--3ZrlFu0 {
	position: absolute;
	bottom: 2.66667vw;
	left: 1.73333vw;
	overflow: hidden;
	width: 42.8vw;
	height: 12.8vw;
	border-radius: 1.6vw;
	background-color: #fff;
}
.ShortVideoCardNew--short_video_goodTitle--2tXP0R6 {
	position: absolute;
	top: 1.6vw;
	left: 13.6vw;
	overflow: hidden;
	width: 28vw;
	height: 4vw;
	color: #111;
	font-size: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ShortVideoCardNew--short_video_goodPriceArea--1KQQqW2 {
	position: absolute;
	top: 5.86667vw;
	left: 13.6vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	width: 28vw;
	height: 4.53333vw;
	white-space: nowrap;
}
.ShortVideoCardNew--short_video_activityPrice--3b8O1Tk {
	margin-right: 0.8vw;
	color: #ff0030;
	font-size: 3.73333vw;
	font-family: AlibabaSans102-Bd;
}
.ShortVideoCardNew--short_video_activityPrice_desc--1UFlHWK {
	margin-right: 0.8vw;
	color: #ff0030;
	font-size: 2.66667vw;
}
.ShortVideoCardNew--short_video_goodImg--2Q1PoD7 {
	position: absolute;
	top: 0.53333vw;
	left: 0.53333vw;
	overflow: hidden;
	width: 11.73333vw;
	height: 11.73333vw;
	border-radius: 1.06667vw;
	background-color: #f8f8f8;
}
.ShortVideoItem--shortVideoItem--1Umw9JA {
	position: relative;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
}
.ShortVideoItem--shortVideoOutside--1cqHpWU {
	position: relative;
}
.ShortVideoItem--shortVideoPoster--bYyEvEe {
	display: -webkit-flex;
	display: flex;
	width: 46.4vw;
	height: 75.46667vw;
	border-radius: 3.2vw;
}
.SliderNewFeeds--sliderContentFeeds--2iVytq5 {
	position: relative;
	z-index: 2;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
}
.SliderNewFeeds--swiperContainerFeeds--1xp9TR- {
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	border-radius: 3.2vw;
	box-shadow: 0 0.26667vw 1.33333vw 0 rgba(0, 0, 0, 0.16);
}
.SliderNewFeeds--swiperWrapper--7xTO9a2 {
	-webkit-flex-direction: row;
	flex-direction: row;
}
.SliderNewFeeds--slidSliderItem--3WXBZvt {
	position: relative;
	width: 46.4vw;
	border-radius: 3.2vw;
}
.SliderNewFeeds--sliderNewfeedsPagination--1F5bJxc {
	position: absolute;
	bottom: 3.2vw;
	left: 50%;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 1.33333vw;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.SliderNewFeeds--sliderNewfeedsPagination--1F5bJxc .SliderNewFeeds--swiper-pagination-bullet--Szyr88X {
	width: 1.6vw;
	height: 0.8vw;
	border-radius: 0.4vw;
	background-color: hsla(0, 0%, 100%, 0.57);
}
.SliderNewFeeds--sliderNewfeedsPagination--1F5bJxc .SliderNewFeeds--swiper-pagination-bullet-active--sgXo7D- {
	width: 3.33333vw;
	background-color: #fff;
}
.SliderNewFeeds--sliderNewfeedsPagination--1F5bJxc .SliderNewFeeds--swiper-pagination-bullet--Szyr88X:not(:last-of-type) {
	margin-right: 5px;
}
.LiveTip--liveTipBox--3qisUcw {
	position: absolute;
	top: 2.4vw;
	left: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.06667vw;
	padding: 0 2vw 0 0.66667vw;
	border-radius: 2.53333vw;
	background-color: rgba(0, 0, 0, 0.3);
}
.LiveTip--liveImage--3f-ckt9 {
	width: 4.13333vw;
	height: 4.13333vw;
}
.LiveTip--liveText--3GvHjyH {
	height: 2.93333vw;
	margin-left: 0.53333vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	letter-spacing: -0.13333vw;
}
.Brand--brandRoot--EMAEUjr {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	padding: 1.06667vw;
	border-radius: 3.2vw;
}
.Brand--subscribe--2wdYCo2 {
	position: absolute;
	top: 1.6vw;
	right: 1.6vw;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 13.46667vw;
	height: 5.06667vw;
	border-radius: 5.4vw;
	background: rgba(0, 0, 0, 0.35);
	color: #fff;
	font-size: 2.93333vw;
	font-family: PingFangSC-Medium;
}
.Brand--greenBackground--37dd_AX {
	background-image: -webkit-linear-gradient(top, #16a765 69%, #2cad5f);
	background-image: linear-gradient(180deg, #16a765 69%, #2cad5f);
}
.Brand--redBackground--bJX0247 {
	background-image: -webkit-linear-gradient(top, #ff174d 58%, #fe5f45);
	background-image: linear-gradient(180deg, #ff174d 58%, #fe5f45);
}
.Brand--brandLiveTipBox--sR1evM5 {
	position: absolute;
	top: 3.33333vw;
	right: 3.33333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.06667vw;
	padding: 0 2vw 0 0.66667vw;
	border-radius: 2.53333vw;
	background-color: rgba(0, 0, 0, 0.3);
}
.Brand--brandLiveTip--3aKdT3T {
	width: 4vw;
	height: 4vw;
	margin-right: 0.4vw;
	border-radius: 50%;
}
.Brand--brandLiveText--UEQ-dfb {
	height: 2.93333vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	letter-spacing: -0.13333vw;
}
.Brand--ShopGoodImg--3bKl174 {
	width: 44.26667vw;
	height: 44.26667vw;
	border-radius: 2.66667vw;
}
.Brand--ShopGooInfo--GjAJhq5 {
	margin-top: -10.26667vw;
}
.Brand--ShopGoodLogo--1_GpUGr {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 44.26667vw;
	height: 10.26667vw;
}
.Brand--ShopGoodLogoBackground--2tt5hr- {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 44.26667vw;
}
.Brand--ShopGoodLogoImageBox--1ECpR3Y {
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	width: 16vw;
	height: 6.66667vw;
	border-radius: 3.4vw;
	background-color: #fff;
}
.Brand--ShopGoodLogoImage--2b-i7l6 {
	height: 6.66667vw;
}
.Brand--ShopGoodInfoContent--1bS2InV {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	overflow: auto;
}
.Brand--ShopGoodInfoTitle--G3mwapZ {
	max-width: 45.33333vw;
	margin-top: -0.53333vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 5.06667vw;
	letter-spacing: 0;
	text-align: center;
	text-overflow: ellipsis;
}
.Brand--ShopGoodBox--1DON2_P {
	width: 44.26667vw;
	margin-top: 1.73333vw;
	padding: 1.33333vw 0.66667vw 0;
	border-radius: 2.66667vw;
	background-color: #fff;
}
.Brand--ShopGoodItem--1_GMphs {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin-bottom: 1.06667vw;
}
.Brand--ShopGoodPic--2V-lyFS {
	width: 11.2vw;
	height: 11.2vw;
	margin-right: 2px;
	border-radius: 1.6vw;
}
.Brand--ShopGoodPriceMessage--QvZdwBs {
	position: relative;
	width: 31.06667vw;
	height: 10.66667vw;
}
.Brand--ShopGoodPriceBackground--PB_zQr6 {
	position: absolute;
	top: 0;
	left: 0;
	width: 31.06667vw;
	height: 10.66667vw;
}
.Brand--sellingPoint--1IZJ_2X {
	position: absolute;
	top: 0.8vw;
	left: 0;
	overflow: hidden;
	max-width: 13.33333vw;
	font-size: 2.53333vw;
	line-height: 3.2vw;
	letter-spacing: -1;
	word-break: break-all;
}
.Brand--activityPrice--nEDA8jO {
	position: absolute;
	bottom: 0.8vw;
	left: 1.2vw;
	font-size: 2.58133vw;
	line-height: 2.58133vw;
	letter-spacing: 0;
	opacity: 0.6;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--afterCouponPriceBox--uy_YpbE {
	position: absolute;
	top: 0;
	right: 2.13333vw;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	width: 14.26667vw;
	height: 7.33333vw;
}
.Brand--afterCouponPrice--2XtRWsS,
.Brand--afterCouponPriceBox--uy_YpbE {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.Brand--afterCouponPrice--2XtRWsS {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	margin-bottom: 0.26667vw;
}
.Brand--afterCouponPriceUnit--4pk-44S {
	margin-right: 0.26667vw;
	font-weight: 700;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--afterCouponPriceNumber--1yY0SNL {
	font-weight: 700;
	font-size: 3.06667vw;
	line-height: 3.06667vw;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--afterCouponPriceTip--pclsQ3n {
	color: #ff174d;
	font-size: 1.87733vw;
	line-height: 2.34667vw;
	letter-spacing: 0;
}
.Brand--ShopBenefit--3gD0SJC {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 44.26667vw;
	height: 8vw;
	margin-top: 1.06667vw;
}
.Brand--ShopBenefitBackground--2C4whTk {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 44.26667vw;
	height: 8vw;
}
.Brand--ShopBenefitMessage--1QRG9aT {
	position: relative;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 34.66667vw;
	height: 8vw;
	padding-left: 1.86667vw;
	color: #ff174d;
	font-size: 3.11867vw;
	letter-spacing: 0;
}
.Brand--ShopBenefitMessage--1QRG9aT,
.Brand--ShopBenefitPrice--3a3X9b4 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.Brand--ShopBenefitPrice--3a3X9b4 {
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: center;
	justify-content: center;
}
.Brand--ShopBenefitPriceUnit--229Lns9 {
	color: #ff174d;
	font-weight: 700;
	font-size: 2.66667vw;
	line-height: 2.93333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--ShopBenefitPriceNumber--K11aU-C {
	margin-right: 0.66667vw;
	color: #ff174d;
	font-weight: 700;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--ShopBenefitText--OBwWgBx {
	overflow: hidden;
	padding-left: 0.53333vw;
	color: #ff174d;
	font-size: 3.2vw;
	letter-spacing: -0.06667vw;
	text-overflow: ellipsis;
	word-break: break-all;
}
.Brand--ShopBenefitButton--2bPZJws {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 9.6vw;
	height: 8vw;
}
.Brand--ShopBenefitButtonTet--28KgL1j {
	width: 6.13333vw;
	height: 4.53333vw;
	padding: 0.66667vw 0;
	border-radius: 2.26667vw;
	background: #ff174d;
	color: #fff;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: -0.13333vw;
	text-align: center;
}
.BenefitPoints--benefitPoints--Y8Mk-o6 {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 46.4vw;
	margin-top: 0.8vw;
	padding: 0 2.4vw;
}
.BenefitPoints--benefitPoints--Y8Mk-o6,
.BenefitPoints--benefitPointsItem--1t7zEeb {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	height: 4.4vw;
}
.BenefitPoints--benefitPointsItem--1t7zEeb {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: center;
	justify-content: center;
	margin-right: 0.8vw;
	padding: 0 1.13333vw;
	border: 1px solid rgba(255, 16, 16, 0.2);
	border-radius: 1.06667vw;
	background-color: rgba(249, 58, 74, 0.02);
}
.BenefitPoints--benefitPointsItemContent--2jIrjdT {
	color: #fc3745;
	font-size: 2.93333vw;
	line-height: 4.4vw;
	text-align: center;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceBox--R9oq5Ri {
	position: relative;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceContentBox--1rMxghD {
	position: relative;
	width: 41.46667vw;
	height: 12.13333vw;
	margin-top: 1.86667vw;
	margin-bottom: 2.93333vw;
	margin-left: 2.26667vw;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceBackground--1_iyWb7 {
	width: 41.46667vw;
	height: 12.13333vw;
}
.BrokenLinePriceBoxSingleItem--monthlySales--3Vn4jFP {
	position: absolute;
	top: 1.06667vw;
	left: 0;
	overflow: hidden;
	max-width: 21.33333vw;
	font-weight: 700;
	font-size: 2.93333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
	word-break: break-all;
}
.BrokenLinePriceBoxSingleItem--originPrice--3mqkZI1 {
	position: absolute;
	bottom: 0.8vw;
	left: 1.46667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 2.93333vw;
	margin-top: 1.6vw;
	color: #666;
	line-height: 2.93333vw;
	opacity: 0.62;
}
.BrokenLinePriceBoxSingleItem--originPriceTag--177COQ1 {
	margin-top: 0.26667vw;
	margin-right: 0.26667vw;
	font-weight: 500;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: sans-serif;
}
.BrokenLinePriceBoxSingleItem--originPriceNum--2AkNs2r {
	font-weight: 700;
	font-size: 2.93333vw;
	line-height: 3.2vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBox--3usAp9t {
	position: absolute;
	top: 0.13333vw;
	right: 2.26667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 17.33333vw;
	height: 8.53333vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPrice--1Z_FaQe {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	margin-bottom: 0.26667vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceUnit--1g_h5y1 {
	margin-right: 0.4vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceNumber--3heqj24 {
	color: #fff;
	font-size: 4.26667vw;
	line-height: 1;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--singleItemStatus--MUcIdGa {
	color: #fff;
	font-size: 2.13333vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipBox--1xX_hS8 {
	position: absolute;
	bottom: -15.6vw;
	z-index: 10;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 17.46667vw;
	-webkit-animation: BrokenLinePriceBoxSingleItem--fadeInOut--ZMkbQBV 4s ease;
	animation: BrokenLinePriceBoxSingleItem--fadeInOut--ZMkbQBV 4s ease;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipBoxBackground--16Am6jy {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 46.4vw;
	height: 17.46667vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTip--KoN8wT3 {
	position: absolute;
	bottom: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 15.6vw;
	padding: 3.46667vw 4vw;
	border-radius: 3.2vw;
	-webkit-transform: rotateY(-100%);
	transform: rotateY(-100%);
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipImageBox--2LNW9LV {
	overflow: hidden;
	width: 6.4vw;
	height: 6.4vw;
	margin-right: 2.66667vw;
	border-radius: 50%;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipImage--qIaL4-a {
	width: 6.4vw;
	height: 6.4vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipText--3BZqsv_ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextTop--1nGOAHv {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextTopText--3F_Z1qg {
	margin-right: 0.26667vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottom--3uxqgdE {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 1.6vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottomText--ETgKq9_ {
	color: #ff6565;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottomImage--1Siz5b_ {
	width: 2.8vw;
	height: 3.86667vw;
	margin-left: 1.6vw;
}
.BrokenLinePriceBoxSingleItem--subscribeTip--3T96tWq {
	color: #fff;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	text-align: center;
	font-family: PingFangSC-Medium;
}
@-webkit-keyframes BrokenLinePriceBoxSingleItem--fadeInOut--ZMkbQBV {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
@keyframes BrokenLinePriceBoxSingleItem--fadeInOut--ZMkbQBV {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
.ItemTopSubscribe--box--XrJkBm1 {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 8vw;
	background-color: #fff;
}
.ItemTopSubscribe--bg--1C-JKMO {
	position: absolute;
	top: 0;
	left: 0;
	width: 46.4vw;
	height: 8vw;
}
.ItemTopSubscribe--progressBar--3JPNc_Q {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 41.6vw;
	height: 5.6vw;
}
.ItemTopSubscribe--progressBarBg--EitoeUu {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 41.6vw;
	height: 4vw;
	margin: auto;
}
.ItemTopSubscribe--progress--1yC8vMU {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	height: 4vw;
	margin: auto;
	border-radius: 2.13333vw;
	background-image: url('https://gw.alicdn.com/imgextra/i2/O1CN01sLCMZq1SwU5SwJXoE_!!6000000002311-2-tps-456-45.png');
	background-size: 100% 100%;
	-webkit-transition: width 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: width 1.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.ItemTopSubscribe--progressIcon--2ZBPnTQ {
	position: absolute;
	top: -0.8vw;
	right: -1.06667vw;
	z-index: 1;
	width: 5.6vw;
	height: 5.6vw;
}
.ItemTopSubscribe--progressText--naq3n5J {
	height: 4vw;
	padding-left: 1.6vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 4vw;
}
.ItemTopSubscribe--remindBox--2zGytdQ {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 42.66667vw;
	height: 5.33333vw;
}
.ItemTopSubscribe--quantityTxt--3Jr0-HC {
	color: #18a976;
	font-weight: 700;
	font-size: 3.2vw;
}
.ItemTopSubscribe--remind--1hRbHNm {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 17.86667vw;
	height: 5.33333vw;
	border-radius: 2.8vw;
	background-image: -webkit-linear-gradient(bottom, #a9f0be, #cbf3d8);
	background-image: linear-gradient(0deg, #a9f0be, #cbf3d8);
}
.ItemTopSubscribe--remindText--SX-SF4Y {
	color: #18a976;
	font-weight: 700;
	font-size: 3.2vw;
}
.ItemTopSubscribe--remindIcon--3bzZis8 {
	width: 2.93333vw;
	height: 2.93333vw;
	margin-right: 0.2vw;
}
.ItemTop--itemTop--u-difOP {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 46.4vw;
	border-radius: 3.2vw;
}
.ItemTop--itemPic--2g4Wziw {
	width: 100%;
	height: 100%;
	border-radius: 3.2vw;
}
.ItemTop--soldOutUrl--2E_ke3f {
	position: absolute;
	top: 9.86667vw;
	left: 9.86667vw;
	width: 26.66667vw;
	height: 26.66667vw;
}
.ItemTop--subscribe--3p3WkIQ {
	top: 1.6vw;
	right: 1.6vw;
	width: 13.46667vw;
	height: 5.06667vw;
	border-radius: 5.4vw;
	background: rgba(0, 0, 0, 0.35);
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.98667vw;
	font-family: PingFangSC-Medium;
}
.ItemTop--liveMessage--1LeQ4AO,
.ItemTop--subscribe--3p3WkIQ {
	position: absolute;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.ItemTop--liveMessage--1LeQ4AO {
	top: 0;
	left: 0;
	width: 16.8vw;
	height: 5.33333vw;
	border-radius: 1.73333vw 0.26667vw 2.66667vw;
	background-image: -webkit-linear-gradient(219deg, #ff44b0, #ff202a);
	background-image: linear-gradient(231deg, #ff44b0, #ff202a);
}
.Item--itemRoot--1rMPKKv {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.Item--itemName--13PFBds {
	overflow: hidden;
	margin-top: 1.86667vw;
	padding: 0 2.4vw;
	color: #333;
	font-size: 3.73333vw;
	line-height: 5.06667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
	font-family: PingFangSC-Medium, sans-serif;
}
.BenefitPoints--benefitPoints--1j93Vvd {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 46.4vw;
	margin-top: 0.8vw;
	padding: 0 2.4vw;
}
.BenefitPoints--benefitPoints--1j93Vvd,
.BenefitPoints--benefitPointsItem--vBT8na1 {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	height: 4.4vw;
}
.BenefitPoints--benefitPointsItem--vBT8na1 {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: center;
	justify-content: center;
	margin-right: 0.8vw;
	padding: 0 1.13333vw;
	border: 1px solid rgba(255, 16, 16, 0.2);
	border-radius: 1.06667vw;
	background-color: rgba(249, 58, 74, 0.02);
}
.BenefitPoints--benefitPointsItemContent--1LzjBxO {
	color: #fc3745;
	font-size: 2.66667vw;
	line-height: 4.4vw;
	text-align: center;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceBox--2ehaxfA {
	position: relative;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceContentBox--1bWmvx5 {
	position: relative;
	width: 41.46667vw;
	height: 12.13333vw;
	margin-top: 2.26667vw;
	margin-bottom: 2.93333vw;
	margin-left: 2.26667vw;
}
.BrokenLinePriceBoxSingleItem--brokenLinePriceBackground--30fmimc {
	width: 41.46667vw;
	height: 12.13333vw;
}
.BrokenLinePriceBoxSingleItem--monthlySales--30wRLqb {
	position: absolute;
	top: 1.06667vw;
	left: 0;
	overflow: hidden;
	max-width: 21.33333vw;
	font-weight: 700;
	font-size: 2.93333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
	word-break: break-all;
}
.BrokenLinePriceBoxSingleItem--originPrice--3_H7u00 {
	position: absolute;
	bottom: 0.8vw;
	left: 1.46667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 2.93333vw;
	margin-top: 1.6vw;
	color: #666;
	line-height: 2.93333vw;
	opacity: 0.62;
}
.BrokenLinePriceBoxSingleItem--originPriceTag--3ZB3dVS {
	margin-top: 0.26667vw;
	margin-right: 0.26667vw;
	font-weight: 500;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: sans-serif;
}
.BrokenLinePriceBoxSingleItem--originPriceNum--3qRxo7t {
	font-weight: 700;
	font-size: 3.2vw;
	line-height: 3.2vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBox--2Qd0iZQ {
	position: absolute;
	top: 0.13333vw;
	right: 2.26667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 17.33333vw;
	height: 8.53333vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPrice--2OKq7AQ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	margin-bottom: 0.26667vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceUnit--3z3Bq9l {
	margin-right: 0.4vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceNumber--2DFANOC {
	color: #fff;
	font-size: 4.26667vw;
	line-height: 1;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.BrokenLinePriceBoxSingleItem--singleItemStatus--28pdSPW {
	color: #fff;
	font-size: 2.13333vw;
	line-height: 2.66667vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipBox--2M8rID7 {
	position: absolute;
	bottom: -15.6vw;
	z-index: 10;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 17.46667vw;
	-webkit-animation: BrokenLinePriceBoxSingleItem--fadeInOut--3FvVkuY 4s ease;
	animation: BrokenLinePriceBoxSingleItem--fadeInOut--3FvVkuY 4s ease;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipBoxBackground--3QQyTDn {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 46.4vw;
	height: 17.46667vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTip--3kyzmEu {
	position: absolute;
	bottom: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 15.6vw;
	padding: 3.46667vw 4vw;
	border-radius: 3.2vw;
	-webkit-transform: rotateY(-100%);
	transform: rotateY(-100%);
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipImageBox--TqRRKjQ {
	overflow: hidden;
	width: 6.4vw;
	height: 6.4vw;
	margin-right: 2.66667vw;
	border-radius: 50%;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipImage--3l_EtSS {
	width: 6.4vw;
	height: 6.4vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipText--ROG2mYt {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextTop--1GwUtuP {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextTopText--15M4Pc0 {
	margin-right: 0.26667vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottom--2lTsQFg {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 1.6vw;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottomText--1Jso5ku {
	color: #ff6565;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
}
.BrokenLinePriceBoxSingleItem--afterCouponPriceBoxTipTextBottomImage--9LLY_7P {
	width: 2.8vw;
	height: 3.86667vw;
	margin-left: 1.6vw;
}
.BrokenLinePriceBoxSingleItem--subscribeTip--1d_mh3M {
	color: #fff;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	text-align: center;
	font-family: PingFangSC-Medium;
}
@-webkit-keyframes BrokenLinePriceBoxSingleItem--fadeInOut--3FvVkuY {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
@keyframes BrokenLinePriceBoxSingleItem--fadeInOut--3FvVkuY {
	0% {
		opacity: 0;
	}
	2% {
		opacity: 0.5;
	}
	4% {
		opacity: 1;
	}
	96% {
		opacity: 1;
	}
	98% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
	}
}
.ItemTopSubscribe--box--3Pb_FF0 {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 46.4vw;
	height: 8vw;
	background-color: #fff;
}
.ItemTopSubscribe--bg--2DPDQfb {
	position: absolute;
	top: 0;
	left: 0;
	width: 46.4vw;
	height: 8vw;
}
.ItemTopSubscribe--progressBar--3aK-ekn {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 41.6vw;
	height: 5.6vw;
}
.ItemTopSubscribe--progressBarBg--NK6wngO {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 41.6vw;
	height: 4vw;
	margin: auto;
}
.ItemTopSubscribe--progress--3qcxEi3 {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	height: 4vw;
	margin: auto;
	border-radius: 2.13333vw;
	background-image: url('https://gw.alicdn.com/imgextra/i2/O1CN01sLCMZq1SwU5SwJXoE_!!6000000002311-2-tps-456-45.png');
	background-size: 100% 100%;
	-webkit-transition: width 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: width 1.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.ItemTopSubscribe--progressIcon--2pqT_D0 {
	position: absolute;
	top: -0.8vw;
	right: -2.8vw;
	z-index: 1;
	width: 5.6vw;
	height: 5.6vw;
}
.ItemTopSubscribe--progressText--3yX7QvG {
	height: 4vw;
	padding-left: 1.6vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 4vw;
}
.ItemTopSubscribe--remindBox--1hjznnK {
	position: relative;
	z-index: 1;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 42.66667vw;
	height: 5.33333vw;
}
.ItemTopSubscribe--quantityTxt--30lBD89 {
	color: #18a976;
	font-weight: 700;
	font-size: 3.2vw;
}
.ItemTopSubscribe--remind--3-1y-iG {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 17.86667vw;
	height: 5.33333vw;
	border-radius: 2.8vw;
	background-image: -webkit-linear-gradient(bottom, #a9f0be, #cbf3d8);
	background-image: linear-gradient(0deg, #a9f0be, #cbf3d8);
}
.ItemTopSubscribe--remindText--3SLoptd {
	color: #18a976;
	font-weight: 700;
	font-size: 3.2vw;
}
.ItemTopSubscribe--remindIcon--19f5ofS {
	width: 2.93333vw;
	height: 2.93333vw;
	margin-right: 0.2vw;
}
.LiveTip--liveTipBox--2BJKjis {
	position: absolute;
	top: 2.4vw;
	left: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.06667vw;
	padding: 0 2vw 0 0.66667vw;
	border-radius: 2.53333vw;
	background-color: rgba(0, 0, 0, 0.3);
}
.LiveTip--liveImage--bFoOMnn {
	width: 4.13333vw;
	height: 4.13333vw;
}
.LiveTip--liveText--5lJ84XX {
	height: 2.93333vw;
	margin-left: 0.53333vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	letter-spacing: -0.13333vw;
	font-family: PingFangSC-Medium, sans-serif;
}
.LiveTop--liveTop--1XIAv1- {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 46.4vw;
	border-radius: 3.2vw;
}
.LiveTop--itemPic--3FVi69O {
	width: 100%;
	height: 100%;
	border-radius: 3.2vw;
}
.LiveTop--bottomLiveRoom--2xIucCs {
	position: absolute;
	bottom: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 12vw;
	padding: 1.86667vw 1.86667vw 0;
	background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.25) 44%, rgba(0, 0, 0, 0.5));
	background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.25) 44%, rgba(0, 0, 0, 0.5));
}
.LiveTop--liveRoomLogo--3Ey4z61 {
	width: 6.66667vw;
	height: 6.66667vw;
	margin-right: 1.73333vw;
	border-radius: 50%;
	background-color: #fff;
}
.LiveTop--liveRoomName--15jWi2n {
	margin-top: 1.2vw;
	color: #fff;
	font-size: 3.2vw;
	line-height: 3.2vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
	font-family: PingFangSC-Regular;
}
.LiveTop--rightArrow--3nuge5w {
	width: 1.13333vw;
	height: 1.73333vw;
	margin-top: 1.2vw;
	margin-left: 1.33333vw;
	-webkit-transform: scale(1.2);
	transform: scale(1.2);
}
.LiveTop--liveTip--nqMK-1q {
	position: absolute;
	top: 1.6vw;
	left: 1.6vw;
}
.LiveTop--subscribe--2LherK9 {
	position: absolute;
	top: 2.4vw;
	right: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 13.46667vw;
	height: 5.06667vw;
	border-radius: 5.4vw;
	background: rgba(0, 0, 0, 0.35);
	color: #fff;
	font-size: 2.93333vw;
	font-family: PingFangSC-Medium;
}
.LiveTop--soldOutUrl--376vkXc {
	position: absolute;
	top: 9.86667vw;
	left: 9.86667vw;
	width: 26.66667vw;
	height: 26.66667vw;
}
.Live--feedsRoot--1u4zHC- {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.Live--itemName--3GKsNum {
	overflow: hidden;
	margin-top: 1.86667vw;
	padding: 0 2.4vw;
	color: #333;
	font-size: 3.73333vw;
	line-height: 5.06667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
	font-family: PingFangSC-Medium, sans-serif;
}
.Brand--brandRoot--kQrBE55 {
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 95.2vw;
	height: 45.6vw;
	margin: auto auto 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.Brand--brandRoot--kQrBE55,
.Brand--posterBox--3IWrKWv {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
}
.Brand--posterBox--3IWrKWv {
	width: 32vw;
	height: 43.46667vw;
	margin-left: 1.06667vw;
	border-radius: 2.13333vw;
}
.Brand--liveMessage--3iy_k8f {
	top: 0;
	width: 16.8vw;
	height: 5.33333vw;
	border-radius: 1.73333vw 0.26667vw 2.66667vw;
	background-image: -webkit-linear-gradient(219deg, #ff44b0, #ff202a);
	background-image: linear-gradient(231deg, #ff44b0, #ff202a);
}
.Brand--liveMessage--3iy_k8f,
.Brand--orderPrompt--3Xm5t0Y {
	position: absolute;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.Brand--orderPrompt--3Xm5t0Y {
	bottom: 0;
	width: 100%;
	height: 5.6vw;
	border-radius: 0 0 2.4vw 2.4vw;
	background: rgba(0, 0, 0, 0.6);
}
.Brand--orderText--37GEHDE {
	color: #fff;
	font-size: 2.66667vw;
}
.Brand--liveBox--NQVaS-d {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	height: 3.73333vw;
	margin-left: 1.06667vw;
	padding: 0 1.06667vw;
	border-radius: 1.86667vw;
	background: #ff205f;
}
.Brand--liveText--1OpE2Bt {
	margin-left: 0.26667vw;
	color: #fff;
	font-size: 2.66667vw;
	white-space: noWrap;
}
.Brand--arrow--1sSoegD {
	width: 1.2vw;
	height: 2vw;
}
.Brand--feedsConfig--2ImNnvb {
	position: relative;
	width: 57.33333vw;
	height: 41.33333vw;
	margin-left: 2.4vw;
}
.Brand--storeNameBox--2GSU1zY {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	width: 56vw;
	height: 4.4vw;
}
.Brand--storeName--qMqRCiI {
	max-width: 26.93333vw;
	margin-left: 1.33333vw;
	color: #000;
	font-weight: 700;
	font-size: 3.2vw;
	text-overflow: ellipsis;
}
.Brand--activity--2KKN6e9 {
	width: 14vw;
	height: 2.8vw;
	margin-left: 1.33333vw;
}
.Brand--profitBox--1FG47kx {
	position: absolute;
	top: 6.13333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	max-width: 54.66667vw;
	height: 6.13333vw;
	padding: 0 1.6vw;
	border-radius: 1.06667vw;
	background-image: -webkit-linear-gradient(42deg, #ffe0b8, #ffeacf);
	background-image: linear-gradient(48deg, #ffe0b8, #ffeacf);
}
.Brand--profitText--8-SOi_B {
	max-width: 53.86667vw;
	color: #823030;
	font-size: 2.66667vw;
	text-overflow: ellipsis;
}
.Brand--feedsBox--1SOUdK_ {
	position: absolute;
	top: 13.06667vw;
	left: 0.8vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	overflow: hidden;
	width: 56vw;
	height: 19.33333vw;
}
.Brand--feedsItem--1XBsLku {
	overflow: hidden;
	width: 15.33333vw;
	height: 19.33333vw;
	margin-right: 5.06667vw;
}
.Brand--feedsPicture--38jHFWY {
	width: 14.66667vw;
	height: 14.66667vw;
	border-radius: 1.6vw;
}
.Brand--feedsPriceBox--1PQ5PUw {
	position: absolute;
	top: 14.66667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	box-sizing: border-box;
	width: 15.33333vw;
	height: 4.53333vw;
	padding: 0 0.8vw;
	color: #ff174d;
	font-weight: 700;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Brand--feedsSymbol--3bLWiW_ {
	margin-top: 0.26667vw;
	font-size: 2.53333vw;
}
.Brand--feedsPrice--3jOIJcf {
	max-width: 11.46667vw;
	font-size: 2.8vw;
	text-overflow: ellipsis;
}
.Brand--orderBox--3fo7ux6 {
	position: absolute;
	top: 33.33333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	width: 57.33333vw;
	height: 8.26667vw;
	border-radius: 2.13333vw;
	background: #fff;
}
.Brand--orderImage--2SgCmoc {
	position: absolute;
	left: 2.26667vw;
	width: 2.8vw;
	height: 2.8vw;
}
.Brand--orderBackground--1HlxRun {
	position: absolute;
	width: 57.33333vw;
	height: 8.26667vw;
}
.Brand--timer--3jLAUMH {
	max-width: 25.06667vw;
	margin-left: 2.4vw;
	color: #666;
	font-size: 3.2vw;
	text-overflow: ellipsis;
}
.Brand--icon--3BkIWFZ {
	width: 4.26667vw;
	height: 4.26667vw;
}
.Brand--buttonPicture--KyQKboP {
	position: absolute;
	right: -0.53333vw;
	width: 27.6vw;
	height: 8.26667vw;
}
.Brand--button--qX5MbGc {
	position: absolute;
	right: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 22.66667vw;
	height: 8.26667vw;
}
.Brand--buttonText--31raaOO {
	margin-right: 0.8vw;
	margin-left: 0.8vw;
	color: #fff;
	font-weight: 600;
	font-size: 3.73333vw;
}
.Brand--liveTitleWrap--aFtfkQa {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-flex-wrap: nowrap;
	flex-wrap: nowrap;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
}
.Brand--liveName--2kV0F0A {
	color: #333;
	font-weight: 700;
	font-size: 3.73333vw;
	text-overflow: ellipsis;
}
.Brand--liveIcon--3Hx51Dj {
	overflow: hidden;
	width: 4vw;
	height: 4vw;
	margin-right: 1.06667vw;
	border-radius: 50%;
	background-color: #fff;
}
.Item--feedsRoot--1xmuGJD {
	position: relative;
	overflow: hidden;
	width: 95.2vw;
	height: 42.66667vw;
	margin: auto auto 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.Item--feedBtnBg--1AQKWZN {
	position: absolute;
	bottom: 3.2vw;
	left: 0;
	width: 95.2vw;
	height: 9.33333vw;
	opacity: 0.2;
}
.Item--feedBtnBg2--FoN8dvB {
	position: absolute;
	bottom: 0;
	width: 95.2vw;
	height: 9.33333vw;
	opacity: 0.4;
}
.Item--feedDetail--3W-GC0x {
	height: 33.33333vw;
	border-radius: 3.2vw 3.2vw 0;
	background-color: #fff;
}
.Item--feedBtnDetail--3zKXTIX,
.Item--feedDetail--3W-GC0x {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 95.2vw;
}
.Item--feedBtnDetail--3zKXTIX {
	height: 9.33333vw;
}
.Item--btnBg--2pJ0oAt {
	position: absolute;
	top: 0;
	right: 0;
}
.Item--goodPicWrap--2Zer-s5 {
	position: relative;
	overflow: hidden;
	width: 31.2vw;
	height: 31.2vw;
	margin-right: 2.13333vw;
	margin-left: 1.06667vw;
	border-radius: 2.13333vw;
}
.Item--goodDetailWrap--185hpUO {
	position: relative;
	-webkit-flex: 1;
	flex: 1;
	height: 31.2vw;
	padding-top: 1.33333vw;
	padding-bottom: 1.06667vw;
}
.Item--goodTitleWrap--1gtMZp2 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 5.33333vw;
	padding-right: 1.06667vw;
}
.Item--goodTitle--_hErCnT {
	overflow: hidden;
	width: 100%;
	height: 4.53333vw;
	color: #333;
	font-weight: 600;
	font-size: 3.73333vw;
	line-height: 4.8vw;
	text-overflow: ellipsis;
	white-space: noWrap;
}
.Item--goodBenefitsWrap--siraxTc {
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	margin-top: 0.93333vw;
}
.Item--benefitPoints--1YJLgH5,
.Item--goodBenefitsWrap--siraxTc {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	height: 4.53333vw;
}
.Item--benefitPoints--1YJLgH5 {
	position: relative;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-align-self: flex-start;
	align-self: flex-start;
	box-sizing: border-box;
	max-width: 100%;
	margin-right: 1.06667vw;
	margin-bottom: 1.33333vw;
	padding: 0.93333vw 1.06667vw;
	border: 1.5px solid transparent;
	border-radius: 1.06667vw;
	background-image: -webkit-linear-gradient(top, #d37d3f, #f2ab7e), -webkit-linear-gradient(top, #fbd8aa, #e07d3f);
	background-image: linear-gradient(180deg, #d37d3f, #f2ab7e), linear-gradient(180deg, #fbd8aa, #e07d3f);
	background-clip: padding-box, border-box;
	background-origin: padding-box, border-box;
}
.Item--benefitPointsText--1Sy8Dgd {
	margin-left: 0.53333vw;
	color: #fff;
	font-size: 2.66667vw;
}
.Item--liveMessage--2cdV-Ju {
	position: absolute;
	top: 0;
	left: 0;
	-webkit-justify-content: center;
	justify-content: center;
	width: 16.8vw;
	height: 5.33333vw;
	border-radius: 1.73333vw 0.26667vw 2.66667vw;
	background-image: -webkit-linear-gradient(219deg, #ff44b0, #ff202a);
	background-image: linear-gradient(231deg, #ff44b0, #ff202a);
}
.Item--couponTxtWrap--1JD1gtQ,
.Item--liveMessage--2cdV-Ju {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.Item--couponTxtWrap--1JD1gtQ {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-self: flex-start;
	align-self: flex-start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	overflow: hidden;
	max-width: 100%;
	height: 4.53333vw;
	padding: 0.93333vw 1.06667vw;
	border-radius: 1.06667vw;
	background-image: -webkit-linear-gradient(290deg, #ffe0b8, #ffeacf);
	background-image: linear-gradient(160deg, #ffe0b8, #ffeacf);
}
.Item--couponTxt--1g0HBJB {
	margin-left: 0.53333vw;
	color: #823030;
	font-size: 2.66667vw;
}
.Item--remindDom--3Q6OFpG {
	position: absolute;
	bottom: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 100%;
	height: 5.6vw;
	border-radius: 0 0 2.4vw 2.4vw;
	background: rgba(0, 0, 0, 0.35);
}
.Item--remindText--3JYSuDc {
	color: #fff;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
}
.Item--priceAreaWrap--YAya9xF {
	position: absolute;
	bottom: 1.06667vw;
	left: 0;
	width: 58.53333vw;
	height: 12.53333vw;
}
.Item--actPriceWrap--3lbCBxK {
	position: absolute;
	top: 0;
	right: 0;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	width: 24vw;
	height: 10.13333vw;
}
.Item--actPrice--x2Iu8ag,
.Item--actPriceWrap--3lbCBxK {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.Item--actPrice--x2Iu8ag {
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	width: 100%;
	height: 4.26667vw;
}
.Item--actPriceTag--3s29Owb {
	height: 2.66667vw;
	margin-right: 0.53333vw;
	color: #ff395f;
	font-weight: 500;
	font-size: 3.2vw;
	line-height: 2.93333vw;
	font-family: sans-serif;
}
.Item--actPriceNum--2OFEryU {
	height: 4.26667vw;
	color: #fb3362;
	font-weight: 700;
	font-size: 5.6vw;
	line-height: 4.53333vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Item--afterCouponPriceTxt--1OhHfr_ {
	height: 2.66667vw;
	margin-top: 0.53333vw;
	color: #ff395f;
	font-size: 2.13333vw;
	line-height: 2.93333vw;
}
.Item--originPriceWrap--149oCFQ {
	position: absolute;
	bottom: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: flex-end;
	justify-content: flex-end;
	padding-left: 1.6vw;
}
.Item--originText--2_JfCDX {
	height: 2.66667vw;
	color: #666;
	font-size: 3.2vw;
	line-height: 2.93333vw;
	opacity: 0.62;
}
.Item--originPriceTag--20kxVtx {
	margin-top: 0.26667vw;
	margin-right: 0.26667vw;
	font-weight: 500;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: sans-serif;
}
.Item--originPriceNum--3R6sJcs {
	font-weight: 700;
	font-size: 3.2vw;
	line-height: 3.2vw;
	font-family: AlibabaSans102-Bd, sans-serif;
}
.Item--originPrice--2SSSGZ8 {
	height: 2.93333vw;
	margin-top: 1.6vw;
	color: #666;
	line-height: 2.93333vw;
	opacity: 0.62;
}
.Item--originPrice--2SSSGZ8,
.Item--soldProgressWrap--2YcyzvW {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.Item--soldProgressWrap--2YcyzvW {
	position: relative;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 29.86667vw;
	height: 3.46667vw;
	margin-right: 2.4vw;
}
.Item--soldProgressBg--2q2SZBZ {
	position: relative;
}
.Item--soldProgressBg1--23PnBOH,
.Item--soldProgressBg--2q2SZBZ {
	overflow: hidden;
	width: 29.86667vw;
	height: 2.13333vw;
	border-radius: 2.13333vw;
	background-image: -webkit-linear-gradient(left, #fddd8f, #ffb56a);
	background-image: linear-gradient(90deg, #fddd8f, #ffb56a);
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.Item--soldProgressBg1--23PnBOH {
	position: absolute;
	top: 0.66667vw;
	left: 0;
}
.Item--soldProgressBox--2UEvR0m {
	position: absolute;
	top: 0;
	left: 2.4vw;
	overflow: hidden;
	width: 29.86667vw;
	height: 3.46667vw;
}
.Item--soldProgress--38P0zfq {
	left: -28.13333vw;
	width: 29.86667vw;
	height: 3.46667vw;
}
.Item--soldProgress--38P0zfq,
.Item--soldProgressImg--2_z25sJ {
	position: absolute;
	top: 0;
	border-top-left-radius: 2.13333vw;
	border-bottom-left-radius: 2.13333vw;
	-webkit-transition: -webkit-transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: -webkit-transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: transform 1.6s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	-webkit-transform: translateX(0);
	transform: translateX(0);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-perspective: 1000;
	perspective: 1000;
}
.Item--soldProgressImg--2_z25sJ {
	left: 0;
}
.Item--lightning--348IYOX {
	width: 1.86667vw;
	height: 2.13333vw;
	margin-top: 0.53333vw;
	margin-left: 0.53333vw;
}
.Item--truncation--3fVbo2e {
	position: absolute;
	top: 0.66667vw;
	left: -0.26667vw;
}
.Item--soldProgressRadio--zHxn-TT {
	position: absolute;
	top: 0;
	right: 0;
	box-sizing: content-box;
	width: 2.93333vw;
	height: 2.93333vw;
	border: 0.26667vw solid #fff;
	border-radius: 50%;
	background-image: -webkit-linear-gradient(20deg, #ff7410, #ff4c10);
	background-image: linear-gradient(70deg, #ff7410, #ff4c10);
	-webkit-transition: -webkit-transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: -webkit-transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	transition: transform 1.6s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
	-webkit-transform: translateX(0);
	transform: translateX(0);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-perspective: 1000;
	perspective: 1000;
}
.Item--feedBenefits--3KEGmmO {
	overflow: hidden;
	padding-left: 2.4vw;
}
.Item--feedBenefits--3KEGmmO,
.Item--soldInfoWrap--1TO3cBE {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.Item--soldInfoWrap--1TO3cBE {
	height: 4vw;
}
.Item--loadingBar--3ZJJ5EE {
	color: #666;
	font-size: 3.2vw;
}
.Item--btnWrap--v03oM3o {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 32.26667vw;
	height: 9.33333vw;
	padding-left: 5.33333vw;
}
.Item--btnText--3c0QmBI {
	margin-left: 0.33333vw;
	color: #fff;
	font-weight: 600;
	font-size: 4vw;
}
.Item--roomStatusWrap--2iwWY6M {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	height: 3.73333vw;
	margin-left: 1.06667vw;
	padding: 0 1.06667vw;
	border-radius: 1.86667vw;
	background: #ff205f;
}
.Item--roomStatusText--zEYvApd {
	margin-left: 0.26667vw;
	color: #fff;
	font-size: 2.66667vw;
	white-space: noWrap;
}
.Item--liveTitleWrap--2VsYL1e {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 4.26667vw;
}
.Item--liveName--2Izj_f1 {
	margin-left: 0.53333vw;
	color: #999;
	font-size: 2.66667vw;
}
.Item--liveNameContainer--KYvAP-P {
	overflow: hidden;
	max-width: 22em;
	margin-top: 0.66667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.Item--liveGoodTitleWrap--3bovg8O {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 4.26667vw;
	margin-top: 0.53333vw;
	margin-bottom: 0.53333vw;
	padding-right: 2.4vw;
}
.Item--liveGoodTitle--2dZllXR {
	overflow: hidden;
	height: 4.53333vw;
	color: #333;
	font-weight: 600;
	font-size: 3.73333vw;
	line-height: 4.53333vw;
	text-overflow: ellipsis;
	white-space: noWrap;
}
.Item--liveIcon--2hwBL4F {
	overflow: hidden;
	width: 4vw;
	height: 4vw;
	margin-right: 1.06667vw;
	border-radius: 50%;
	background-color: #fff;
}
.Item--remindStyle--3NLa1bX {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 9.33333vw;
}
.Item--remindStyleText--GMRx7je {
	margin-left: 1.06667vw;
	color: #666;
	font-size: 3.2vw;
}
.SnapUpList--listWrap--30C3OEv {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100vw;
	padding-top: 3.2vw;
	padding-right: 2.4vw;
	padding-left: 2.4vw;
}
.SnapUpList--listContent--21u5Uv9 {
	-webkit-flex-flow: wrap;
	flex-flow: wrap;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 100%;
}
.SnapUpList--listContent--21u5Uv9,
.SnapUpList--listLoadMore--3e8ZWRa {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
}
.SnapUpList--listLoadMore--3e8ZWRa {
	-webkit-justify-content: center;
	justify-content: center;
	width: 95.2vw;
	height: 0;
	margin-bottom: 0.53333vw;
	border-radius: 4.53333vw;
	opacity: 0;
}
.SnapUpList--transitionElement--2PHjday {
	position: absolute;
	top: -0.26667vw;
	left: 0;
	width: 100vw;
	height: 6.4vw;
	border-top-left-radius: 3.2vw;
	border-top-right-radius: 3.2vw;
	background-image: -webkit-linear-gradient(top, #fff, #f1f1f1);
	background-image: linear-gradient(180deg, #fff, #f1f1f1);
}
.SnapUpList--feedsTitleWrap--1eYZe0S {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100vw;
	height: 4.26667vw;
	margin-top: 1.6vw;
	margin-bottom: 2.13333vw;
	padding-right: 2.4vw;
	padding-left: 2.4vw;
}
.SnapUpList--feedsTitle--1XtmiSc {
	margin-right: 1.73333vw;
	color: #333;
	font-weight: 600;
	font-size: 3.73333vw;
}
.SnapUpList--feedsSubTitle--3MQ-zV9 {
	color: #999;
	font-size: 3.2vw;
}
.SnapUpList--loadMoreText--4xuRr5O {
	margin-left: 2.13333vw;
	color: #333;
	font-weight: 600;
	font-size: 3.73333vw;
}
.SnapUpList--endText--3V1YRsB {
	-webkit-align-self: center;
	align-self: center;
	justify-self: center;
	margin-top: 4vw;
	color: #999;
	font-size: 3.73333vw;
}
.StickyCoupons--coupons_content_price--2hOUiAA {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	margin-bottom: 0.93333vw;
}
.StickyCoupons--coupons_content_price_nuit--1XdsmeD {
	color: #f31c45;
	font-size: 3.2vw;
	font-family: PingFangSC-Regular, sans-serif;
}
.StickyCoupons--coupons_content_price_num--3PrnuZB {
	color: #ff174d;
	line-height: 7.33333vw;
	font-family: AlibabaSans102-Bd;
}
.StickyCoupons--coupons_content_btn--3RVPknL {
	-webkit-align-items: center;
	align-items: center;
	width: 10.66667vw;
	height: 5.33333vw;
	border-radius: 2.66667vw;
	background-image: -webkit-linear-gradient(top, #ff3307, #ff2742 32%, #f31212);
	background-image: linear-gradient(180deg, #ff3307, #ff2742 32%, #f31212);
	color: #fff;
	box-shadow: inset 3px 5px 14px 0 rgba(255, 152, 166, 0.55), inset -9px -16px 136px 0 #f50317;
	font-size: 2.93333vw;
	font-family: PingFangSC-Medium, sans-serif;
}
.StickyCoupons--coupons_content_btn--3RVPknL,
.StickyCoupons--sticky_coupon--3i1VRCG {
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.StickyCoupons--sticky_coupon--3i1VRCG {
	position: relative;
	top: -4vw;
	-webkit-flex-direction: row;
	flex-direction: row;
	overflow: 'hidden';
	width: 100vw;
	padding-top: 3.2vw;
	padding-bottom: 3.2vw;
	border-radius: 0 0 3.2vw 3.2vw;
	background: #fff;
}
.StickyCoupons--sticky_coupon_content--1wKTuGr {
	position: absolute;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
}
.StickyCoupons--sticky_coupon_content_l--2hAX4LJ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	width: 20.8vw;
	line-height: 13.33333vw;
}
.StickyCoupons--sticky_coupon_content_l_unit--1KJfDZj {
	color: #ff174d;
	font-size: 4.26667vw;
	font-family: PingFangSC-Regular;
}
.StickyCoupons--sticky_coupon_content_l_num--3mEWSn7 {
	color: #ff174d;
	font-size: 7.73333vw;
	font-family: AlibabaSans102-Bd;
}
.StickyCoupons--sticky_coupon_content_r--3R6wsBk {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 75.86667vw;
	padding-right: 3.332vw;
	padding-left: 2.83733vw;
}
.StickyCoupons--sticky_coupon_content_r_content--2i0ShUT {
	max-width: 56.8vw;
}
.StickyCoupons--sticky_coupon_content_r_title--uQxb_-a {
	color: #f72f41;
	font-weight: 700;
	font-size: 3.46667vw;
	line-height: 4.93333vw;
}
.StickyCoupons--sticky_coupon_content_r_desc--2NK5kCM {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	color: rgba(247, 47, 65, 0.55);
	font-size: 3.2vw;
	line-height: 4.4vw;
}
.StickyCoupons--sticky_coupon_btn--3Mdk7ze {
	padding: 0.8vw 2vw;
	border-radius: 7.2vw;
	background-image: -webkit-linear-gradient(top, #ff3307, #ff2742 32%, #f31212);
	background-image: linear-gradient(180deg, #ff3307, #ff2742 32%, #f31212);
	color: #fff;
	box-shadow: inset 3px 5px 14px 0 rgba(255, 152, 166, 0.55), inset -9px -16px 136px 0 #f50317;
	font-size: 3.2vw;
	line-height: 4.4vw;
}
.StickyCoupons--sticky_coupon_content_r_desc_modified--1cd4OhR {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	color: rgba(215, 100, 30, 0.88);
	font-size: 3.46667vw;
	line-height: 4.4vw;
}
.StickyCoupons--sticky_coupon_content_l_unit_modified--2jtME7b {
	color: #d96406;
	font-size: 4vw;
	font-family: AlibabaSans102-Medium, sans-serif;
}
.StickyCoupons--sticky_coupon_content_l_num_modified--1gkMUeI {
	color: #d96406;
	font-size: 5.6vw;
	font-family: AlibabaSans102-Bd;
}
.StickyCoupons--sticky_coupon_content_l_modified--1pyoW-f {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: center;
	justify-content: center;
	width: 20.8vw;
	line-height: 6.66667vw;
}
.StickyCoupons--sticky_coupon_btn_modified--13iD9qI {
	width: 10.66667vw;
	height: 4.53333vw;
	margin-right: 2vw;
	padding: 0.8vw 2vw;
	border-radius: 7.2vw;
	background: #d7641e;
	color: #fff;
	font-size: 3.2vw;
	line-height: 2.93333vw;
}
.StickyCoupons--sticky_coupon_modified--2rMmNjB {
	position: relative;
	top: -2.4vw;
	z-index: 2;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: 'hidden';
	width: 100vw;
	padding-top: 1.86667vw;
	padding-bottom: 9.33333vw;
	border-radius: 0 0 3.2vw 3.2vw;
	background: #f5f5f5;
}
.ThemeGoodNew--thShopGoodWrap--1gvkNJn {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	width: 47.6vw;
	height: 78vw;
	margin-bottom: 3.2vw;
	border-radius: 2.4vw;
	background-color: #fff;
}
.ThemeGoodNew--thShopGoodImgbox--3KGlpgU {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	width: 47.6vw;
	height: 55.73333vw;
	padding: 1.6vw 1.6vw 0;
}
.ThemeGoodNew--thShopGoodImgboxOne--28Epeg2 {
	position: relative;
	top: 0;
	width: 39.33333vw;
	height: 39.33333vw;
	margin-right: 4vw;
	margin-left: 4.26667vw;
	border-radius: 2.26667vw;
	background: hsla(0, 0%, 100%, 0.47);
}
.ThemeGoodNew--thShopGoodImgboxTwo--1IL3k9q {
	position: relative;
	top: 0.8vw;
	left: -1.6vw;
	z-index: 2;
	width: 42.53333vw;
	height: 42.53333vw;
	border-radius: 2.4vw;
	background: #fffbfb;
	box-shadow: 0 -0.13333vw 0.4vw 0 rgba(255, 43, 88, 0.07);
}
.ThemeGoodNew--thBrandLogoCouponbox--Y8Cytx8 {
	position: absolute;
	bottom: 0;
	left: 1.6vw;
	z-index: 5;
}
.ThemeGoodNew--thShopNameBox--2Mft3_K {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 5.6vw;
	margin: 1.86667vw 2.4vw 0 0;
}
.ThemeGoodNew--thShopName--2UMQcG7 {
	overflow: hidden;
	height: 5.6vw;
	margin-left: 2.4vw;
	color: #333;
	font-size: 3.73333vw;
	line-height: 5.6vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: PingFangSC-Medium;
}
.ThemeGoodNew--thBenefitInfo--VFHbZcz {
	position: relative;
	left: 2.4vw;
	margin-top: 0.66667vw;
}
.ThemeGoodNew--thBenefitInfoFont--m2StiDp {
	overflow: hidden;
	width: 44.4vw;
	height: 4.66667vw;
	color: rgba(138, 83, 57, 0.8);
	font-size: 3.46667vw;
	line-height: 4.66667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ThemeGoodNew--thShopInfo--1UW0dAY {
	position: relative;
	left: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	height: 4.8vw;
	padding: 0.93333vw 2vw;
	border-radius: 2.4vw;
	background-color: hsla(0, 0%, 100%, 0.9);
}
.ThemeGoodNew--thShopInfoDesc--3cRG7AB {
	font-size: 2.93333vw;
	white-space: nowrap;
}
.ThemeGoodNew--thShopInfoBox--QGOAPoJ {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	width: 47.6vw;
	margin-top: 1.86667vw;
}
.ThemeGoodNew--thShopGoodImgZ--3SNk5SR {
	position: absolute;
	top: 0.93333vw;
	left: -1.06667vw;
	z-index: 3;
	width: 44.4vw;
	height: 45.86667vw;
	border-radius: 2.4vw;
	background-color: rgba(202, 95, 95, 0.03);
}
.TimeoutFeedsHint--container--2ZYqd6o {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	width: 100vw;
	height: 38.66667vw;
	margin-top: 20.8vw;
	padding-right: 3.2vw;
}
.TimeoutFeedsHint--hintImg--2xKO0z1 {
	-webkit-flex: 0 0 auto;
	flex: 0 0 auto;
	margin: 0 auto 2.13333vw;
}
.TimeoutFeedsHint--hintText--Daw3mrt {
	margin: -4vw auto 0;
	color: #999;
	font-size: 3.2vw;
	line-height: 3.2vw;
	letter-spacing: 0;
	font-family: PingFangSC-Regular, sans-serif;
}
.TimeoutFeedsHint--cover_resource_hint--2VePw2Z {
	z-index: 9;
	height: 26.66667vw;
	background-color: #f1f1f1;
}
.TopicShoppingGuide--topic_shopping_guide_box--1uIQIuq {
	position: relative;
}
.TopicShoppingGuide--topic_shopping_guide--1SHPg8M {
	position: relative;
	display: block;
	overflow: hidden;
	box-sizing: border-box;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.TopicShoppingGuide--topic_shopping_guide_mask--12buidT {
	position: absolute;
	top: 0;
	left: 0;
	width: 46.4vw;
	height: 22.26667vw;
	border-top-left-radius: 3.2vw;
	border-top-right-radius: 3.2vw;
	background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.2), transparent);
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent);
}
.TopicShoppingGuide--topic_shopping_guide_background--pTmJM41 {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.TopicShoppingGuide--topic_shopping_guide_content--2bX0wj8 {
	position: relative;
	top: 0;
	left: 0;
	width: 46.4vw;
	padding-top: 3.73333vw;
}
.TopicShoppingGuide--topic_shopping_guide_content_top--2epfUjH {
	height: 18.66667vw;
}
.TopicShoppingGuide--content_title_box--kclnlDt {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-content: center;
	align-content: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.06667vw;
	margin-bottom: 2vw;
	padding-left: 2.4vw;
}
.TopicShoppingGuide--content_title_box_newImage--2U5qa7K {
	width: 7.33333vw;
	height: 5.06667vw;
	margin-right: 1.2vw;
}
.TopicShoppingGuide--content_title--3AUufyx {
	display: block;
	max-width: 41.06667vw;
	color: #fff;
	font-weight: bolder;
	font-size: 4.26667vw;
	line-height: 5.06667vw;
	text-overflow: ellipsis;
}
.TopicShoppingGuide--content_desc--tB5CyMZ {
	overflow: hidden;
	max-width: 41.06667vw;
	height: 8vw;
	margin-bottom: 1.86667vw;
	padding-left: 2.8vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 4vw;
	letter-spacing: 0;
	text-overflow: ellipsis;
	word-break: break-all;
}
.TopicShoppingGuide--content_roleInfo--28BGRE0 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-align-self: flex-start;
	align-self: flex-start;
	height: 6.4vw;
	margin-bottom: 2.53333vw;
	margin-left: 1.6vw;
	padding-right: 2.26667vw;
	border-radius: 3.66667vw;
	background-color: hsla(0, 0%, 100%, 0.3);
}
.TopicShoppingGuide--content_roleInfo_icon--34wYaK0 {
	position: absolute;
	top: 50%;
	left: 0;
	overflow: hidden;
	box-sizing: content-box;
	width: 8vw;
	height: 8vw;
	margin-right: 0.93333vw;
	border: 0.4vw solid hsla(0, 0%, 100%, 0.3);
	border-right-color: transparent;
	border-radius: 50%;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.TopicShoppingGuide--content_roleInfo_icon_image--2zMveEg {
	width: 8vw;
	height: 8vw;
	background-color: #fff;
}
.TopicShoppingGuide--content_roleInfo_desc--2d-N9Jf {
	max-width: 30.93333vw;
	margin-left: 9.33333vw;
	color: #fff;
	font-size: 3.2vw;
	line-height: 6.4vw;
	text-overflow: ellipsis;
}
.TopicShoppingGuide--itemList--WH8SOPd {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	overflow: hidden;
	width: 44.26667vw;
	height: 36.53333vw;
	margin: 1.06667vw;
	padding-top: 1.73333vw;
	border-radius: 2.13333vw;
	background-color: #fff;
}
.TopicShoppingGuide--itemList_item--3zmQrq4 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	padding-left: 1.33333vw;
}
.TopicShoppingGuide--itemsImage--1iuIJlv {
	width: 19.33333vw;
	height: 19.33333vw;
	margin-right: 1.33333vw;
}
.TopicShoppingGuide--itemList_info--lQIvG5Z {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
}
.TopicShoppingGuide--itemList_info_title--2xn20fz {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	overflow: hidden;
	max-width: 18.66667vw;
	margin-bottom: 1.73333vw;
	color: rgba(0, 0, 0, 0.76);
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	white-space: pre-wrap;
}
.TopicShoppingGuide--itemList_info_desc--OynRnnJ {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4.8vw;
	margin-bottom: 1.33333vw;
	padding: 0 1.33333vw;
	border-radius: 1.06667vw;
	background-color: #ffeaea;
}
.TopicShoppingGuide--itemList_info_desc_font--Fmpa9io {
	max-width: 16.8vw;
	color: #ff1850;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	text-overflow: ellipsis;
}
.TopicShoppingGuide--itemList_info_price--1uDGV5S {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
}
.TopicShoppingGuide--itemList_info_unit--1y6Per- {
	margin-right: 0.66667vw;
	color: #ff174d;
	font-weight: 700;
	font-size: 3.2vw;
	line-height: 3.2vw;
	font-family: PingFangSC-Regular, sans-serif;
}
.TopicShoppingGuide--itemList_info_num--2vr2FgS {
	color: #ff1850;
	font-size: 4.8vw;
	line-height: 4.8vw;
	font-family: AlibabaSans102-Bd;
}
.TopicShoppingGuide--itemsList--3MScEas {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	overflow: hidden;
	width: 44.26667vw;
	height: 42.93333vw;
	margin: 0 auto 1.06667vw;
	padding: 1.33333vw 0;
	border-radius: 2.13333vw;
	background-color: #fff;
}
.TopicShoppingGuideVideo--topicShoppingGuideVideo--2SvnckV {
	position: relative;
	overflow: hidden;
	width: 46.4vw;
	height: 75.46667vw;
	margin-bottom: 2.4vw;
	border-radius: 3.2vw;
	background-color: #fff;
}
.TopicShoppingGuideVideo--topicShoppingGuideVideoContent--1ZfGO1I {
	position: relative;
	z-index: 2;
	width: 100%;
	height: 100%;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.TopicShoppingGuideVideo--contentTitleBoxNewImage--2OBx4Fv {
	position: absolute;
	top: 2.4vw;
	left: 2.4vw;
	width: 7.33333vw;
	height: 5.06667vw;
}
.TopicShoppingGuideVideo--shortVideoBroadcast--3siI13w {
	position: absolute;
	top: 2.13333vw;
	right: 2.13333vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 4.4vw;
	padding: 0 1.73333vw;
	border-radius: 2.13333vw;
	background-color: rgba(0, 0, 0, 0.3);
}
.TopicShoppingGuideVideo--shortVideoBroadcastPlayImage--3ldSW8O {
	width: 1.6vw;
	height: 1.86667vw;
	margin-right: 0.4vw;
}
.TopicShoppingGuideVideo--shortVideoBroadcastText--31FzBSD {
	overflow: hidden;
	max-width: 32vw;
	color: #fff;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.TopicShoppingGuideVideo--topicShoppingGuideVideoContentBottom--1J-iCqw {
	position: absolute;
	bottom: 0;
	overflow: hidden;
	width: 100%;
	padding: 1.33333vw 1.06667vw;
	border-radius: 3.2vw;
	background: #e6e4e5;
}
.TopicShoppingGuideVideo--topicShoppingGuideVideoContentBottomBackground--3JiUpKW {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 23.86667vw;
	border-radius: 3.2vw;
}
.TopicShoppingGuideVideo--goodsItem--3Qw-Oq6 {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin: 0 auto 1.66667vw;
}
.TopicShoppingGuideVideo--goodsPic--2PWZgSp {
	width: 12.53333vw;
	height: 12.53333vw;
	margin-right: 2px;
	border-radius: 1.6vw;
}
.TopicShoppingGuideVideo--goodsPriceMessage--2ybJPVo {
	position: relative;
	width: 30.66667vw;
	height: 10.4vw;
}
.TopicShoppingGuideVideo--goodsPriceBackground--BGlpaiz {
	position: absolute;
	top: 0;
	left: 0;
	width: 30.66667vw;
	height: 10.4vw;
}
.TopicShoppingGuideVideo--sellingPoint--3dOGFor {
	position: absolute;
	top: 1.2vw;
	left: 0;
	overflow: hidden;
	max-width: 13.33333vw;
	color: #ff1e4c;
	font-size: 2.34667vw;
	line-height: 2.8vw;
	letter-spacing: 0;
	word-break: break-all;
}
.TopicShoppingGuideVideo--activityPrice--2gk8R2R {
	position: absolute;
	bottom: 0.53333vw;
	left: 1.06667vw;
	color: #ff1e4c;
	font-size: 2.34667vw;
	line-height: 2.34667vw;
	letter-spacing: 0;
	opacity: 0.6;
	font-family: AlibabaSans102-Bd;
}
.TopicShoppingGuideVideo--afterCouponPriceBox--1v6WxoU {
	position: absolute;
	top: 0;
	right: 1.86667vw;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 14.4vw;
	height: 8vw;
}
.TopicShoppingGuideVideo--afterCouponPrice--26XswRp {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: center;
	justify-content: center;
	margin-bottom: 0.26667vw;
}
.TopicShoppingGuideVideo--afterCouponPriceUnit--14Xsr62 {
	margin-right: 0.26667vw;
	color: #fff;
	font-weight: 700;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: AlibabaSans102-Bd;
}
.TopicShoppingGuideVideo--afterCouponPriceNumber--2h0rDsK {
	color: #fff;
	font-weight: 700;
	font-size: 3.06667vw;
	line-height: 3.06667vw;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd;
}
.TopicShoppingGuideVideo--afterCouponPriceTip--1BK3w3L {
	color: #fff;
	font-size: 1.87733vw;
	line-height: 2.34667vw;
	letter-spacing: 0;
}
.TopicShoppingGuideVideo--shopMessage--2s2Ydsm {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	padding: 1.33333vw 0.26667vw 1.06667vw;
	border-top: 0.13333vw solid rgba(157, 86, 86, 0.2);
}
.TopicShoppingGuideVideo--shopLogo--2pr9LDY {
	width: 4.8vw;
	height: 4.8vw;
	margin-right: 0.66667vw;
	border-radius: 50%;
}
.TopicShoppingGuideVideo--showName--2rvzcmu {
	-webkit-flex: 1;
	flex: 1;
	overflow: hidden;
	color: #333;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	font-family: PingFangSC-Regular;
}
.TopicShoppingGuideVideo--shopViewNumber--1j2hedp {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.TopicShoppingGuideVideo--shopViewNumberTip--4W0Z7zQ {
	width: 2.95733vw;
	height: 2.66667vw;
}
.TopicShoppingGuideVideo--number--3ZR34yB {
	margin-left: 1.33333vw;
	color: #333;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	font-family: PingFangSC-Medium;
}
.TopicShoppingGuideVideo--goodsShowBox--1p-eY5A {
	position: absolute;
	right: 2.4vw;
	bottom: 2.4vw;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 16vw;
	height: 19.73333vw;
	padding: 1.33333vw;
	border-radius: 2.4vw;
	background: #e6e4e5;
}
.TopicShoppingGuideVideo--goodsAfterCouponPrice--2Fujqio {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 1.06667vw;
}
.TopicShoppingGuideVideo--goodsAfterCouponPriceUnit--wi3jhKW {
	margin-right: 0.26667vw;
	color: #333;
	font-weight: 700;
	font-size: 2.66667vw;
	line-height: 2.66667vw;
	font-family: AlibabaSans102-Bd;
}
.TopicShoppingGuideVideo--goodsAfterCouponPriceNumber--3SKO2r0 {
	color: #333;
	font-weight: 700;
	font-size: 3.06667vw;
	line-height: 3.06667vw;
	letter-spacing: -0.06667vw;
	font-family: AlibabaSans102-Bd;
}
.StickySlider--stickSliderBox--3ieLYCJ {
	position: relative;
	z-index: 3;
	overflow: hidden;
	border-radius: 4.8vw 4.8vw 0 0;
	background: #f5f5f5;
}
.StickySlider--infiniteFeedsBox--3zns2-l {
	padding: 0 1.2vw;
}
.skeleton {
	overflow: hidden;
	margin: 0 1.6vw 3.2vw;
	border-radius: 1.6vw;
}
.skeleton,
.skeleton-highlight {
	width: 46.4vw;
	background-repeat: no-repeat;
}
.skeleton-highlight {
	height: 93.33333vw;
	margin-top: -8vw;
	background-image: -webkit-linear-gradient(left, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%);
	background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%);
	background-position: 0 0;
	background-size: 13.33333vw 93.33333vw;
	opacity: 0.5;
	-webkit-transform: translateX(-29.33333vw) rotate(15deg);
	transform: translateX(-29.33333vw) rotate(15deg);
}
.skeleton-highlight-animation {
	-webkit-animation-name: skeleton-highlight;
	animation-name: skeleton-highlight;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-iteration-count: 5;
	animation-iteration-count: 5;
}
@-webkit-keyframes skeleton-highlight {
	0% {
		-webkit-transform: translateX(-29.333vw) rotate(15deg);
		transform: translateX(-29.333vw) rotate(15deg);
	}
	to {
		-webkit-transform: translateX(60vw) rotate(15deg);
		transform: translateX(60vw) rotate(15deg);
	}
}
@keyframes skeleton-highlight {
	0% {
		-webkit-transform: translateX(-29.333vw) rotate(15deg);
		transform: translateX(-29.333vw) rotate(15deg);
	}
	to {
		-webkit-transform: translateX(60vw) rotate(15deg);
		transform: translateX(60vw) rotate(15deg);
	}
}
.skeleton-item {
	height: 75.46667vw;
	background-image: -webkit-linear-gradient(#f0f0f0 100%, transparent 0), -webkit-linear-gradient(#f0f0f0 100%, transparent 0),
		-webkit-linear-gradient(#f0f0f0 100%, transparent 0), -webkit-linear-gradient(#f0f0f0 100%, transparent 0), -webkit-linear-gradient(#f8f8f8 100%, transparent 0);
	background-image: linear-gradient(#f0f0f0 100%, transparent 0), linear-gradient(#f0f0f0 100%, transparent 0), linear-gradient(#f0f0f0 100%, transparent 0),
		linear-gradient(#f0f0f0 100%, transparent 0), linear-gradient(#f8f8f8 100%, transparent 0);
	background-position: 1.6vw 61.33333vw, 1.6vw 54.66667vw, 1.6vw 48vw, 1.06667vw 1.06667vw, 0 0;
	background-size: 41.6vw 12vw, 40vw 5.06667vw, 43.2vw 5.06667vw, 44.26667vw 44.26667vw, 46.4vw 75.46667vw;
}
.TbPopPush--tbCalendarToastBox--1y7uoy7 {
	position: fixed;
	bottom: 6.66667vw;
	z-index: 4;
	width: 100vw;
}
.TbPopPush--tbCalendarToast--2X8inRq {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	margin: 0 auto;
	padding: 1.6vw 4vw;
	border-radius: 6.66667vw;
	background-color: rgba(17, 17, 17, 0.7);
}
.TbPopPush--tbCalendarToastText--2aAlwxP {
	overflow: hidden;
	max-width: 57.33333vw;
	margin-right: 4.66667vw;
	color: #fff;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: PingFangSC-Medium, sans-serif;
}
.TbPopPush--itemTipBtn--3qJTAP_ {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 20vw;
	height: 7.73333vw;
	border-radius: 5.26667vw;
	background: -webkit-linear-gradient(bottom, hsla(0, 0%, 100%, 0) 85%, hsla(0, 0%, 100%, 0.59)), -webkit-linear-gradient(bottom, #45b559, #0ea059);
	background: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 85%, hsla(0, 0%, 100%, 0.59)), linear-gradient(0deg, #45b559, #0ea059);
	box-shadow: 0.33333vw 0.66667vw 2vw rgba(0, 163, 68, 0.3);
}
.TbPopPush--appointmentTipIcon--3QwNJqF {
	margin-right: 0.66667vw;
}
.TbPopPush--close--5-ViRna {
	width: 2.13333vw;
	height: 2.13333vw;
	margin-left: 2.13333vw;
}
.TbPopPush--tbPushTip--25WB6YV {
	padding: 0;
	background-image: -webkit-linear-gradient(bottom, #4eb857, #00a16b);
	background-image: linear-gradient(0deg, #4eb857, #00a16b);
	color: #fff;
	font-weight: 700;
	font-size: 3.46667vw;
	font-family: PingFangSC-Semibold, sans-serif;
}
.TipModel--tipModelBox--6BS0WMV {
	position: fixed;
	top: 0;
	z-index: 11;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
}
.TipModel--tipModelContent--1QTTFQk {
	width: 69.06667vw;
	border-radius: 3.2vw;
	background: hsla(0, 0%, 100%, 0.8);
}
.TipModel--tipModelTitle--k7wzXTd {
	margin-top: 5.33333vw;
	color: #000;
	font-size: 4vw;
	text-align: center;
	font-family: PingFangSC-Medium, sans-serif;
}
.TipModel--tipModelText1--3zGExnr {
	margin-top: 1.2vw;
	color: #000;
	font-size: 3.2vw;
	line-height: 4.8vw;
	text-align: center;
}
.TipModel--tipModelText2--3cglHEr {
	margin-top: 0.4vw;
	color: #000;
	font-size: 3.2vw;
	line-height: 4.8vw;
	text-align: center;
}
.TipModel--tipModelBtnBox--1V9cNoK {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	width: 100%;
	height: 11.33333vw;
	margin-top: 5.33333vw;
	border-top: 1px solid #aaafb0;
}
.TipModel--tipModelBtnCancel--2gcwNts,
.TipModel--tipModelBtnConfirm--3FrVUc6 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex: 1;
	flex: 1;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 100%;
	color: #007aff;
	font-size: 4.26667vw;
	font-family: PingFangSC-Medium, sans-serif;
}
.TipModel--tipModelBtnConfirm--3FrVUc6 {
	border-left: 1px solid #aaafb0;
}
.TopAtmosTrigger--top_atmosTrigger_image_box--1mqKFsc {
	position: relative;
	z-index: 10;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	justify-items: center;
	width: 100vw;
	height: 13.33333vw;
	margin: 0.53333vw auto 0;
}
.TopAtmosTrigger--top_atmosTrigger_placeholder--25-clFD {
	width: 100vw;
	height: 2.4vw;
}
.LiveVideo--topLive--2c9bEDm {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
	opacity: 0;
	-webkit-transition-timing-function: cubic-bezier(1, 0, 1, 0);
	transition-timing-function: cubic-bezier(1, 0, 1, 0);
	-webkit-transition-duration: 1s;
	transition-duration: 1s;
	-webkit-transition-property: opacity;
	transition-property: opacity;
}
.LiveVideo--liveVideoContent--rruJCl- {
	position: absolute;
	top: 0;
	width: 100vw;
	height: 153.33333vw;
}
.LiveRotation--topLiveAtmosphere--15v2Loq {
	position: absolute;
	bottom: -10.66667vw;
	left: 0;
	z-index: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	justify-items: center;
	width: 100vw;
	height: 119.2vw;
	margin: 0 auto;
}
.LiveRotation--topLiveAtmosphereBackground--3k-KZ3v {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100vw;
	pointer-events: none;
}
.LiveRotation--topLiveAtmosphereBottomImage--3vq8VKA {
	position: absolute;
	top: 20vw;
	left: 0;
	z-index: 0;
	width: 100%;
	pointer-events: none;
}
.LiveRotation--topLiveBox--1wSoVh_ {
	position: relative;
	top: var(--safe-top);
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	width: 100%;
	height: 100%;
	-webkit-transition-duration: 0ms;
	transition-duration: 0ms;
	-webkit-transition-property: -webkit-transform;
	transition-property: -webkit-transform;
	transition-property: transform;
	transition-property: transform, -webkit-transform;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.MiniLiveSort--miniLiveIndicatorContent--AX064Jb {
	position: relative;
	width: 12vw;
	height: 12vw;
	margin-top: 1.86667vw;
	border-radius: 3.2vw;
}
.MiniLiveSort--miniLiveIndicatorOrder--2Lizvuo {
	position: absolute;
	top: -0.26667vw;
	left: 1.6vw;
	width: 5.06667vw;
	height: 4.53333vw;
}
.MiniLiveSort--miniLiveIndicatorOrderImage--39BWSY5 {
	width: 5.06667vw;
	height: 4.53333vw;
}
.MiniLiveSort--miniLiveIndicatorBackground--1vDmFBg {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 12vw;
	height: 12vw;
	border-radius: 3.2vw;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.MiniLiveSort--miniLiveIndicatorOfficialAtmosphere--1LH1Jxm {
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 0;
	width: 13.86667vw;
	height: 13.86667vw;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.MiniLiveSort--miniLiveIndicatorOfficialAtmosphereImage--3kTqe81 {
	width: 100%;
	height: 100%;
}
.ShowLiveComponent--goodsCard--1w3HNy1 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 2.53333vw;
	padding: 1.06667vw 2.66667vw 1.06667vw 1.06667vw;
	border-radius: 3.2vw;
	background-color: #fff;
	box-shadow: 0 0.26667vw 2.66667vw 0 rgba(255, 126, 126, 0.3);
}
.ShowLiveComponent--goodsImage--1Y7wm_R {
	width: 11.2vw;
	height: 11.2vw;
	border-radius: 2.13333vw;
}
.ShowLiveComponent--goodsMessage--EAxM_0w {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin-left: 1.73333vw;
}
.ShowLiveComponent--goodsName--10qlUVQ {
	overflow: hidden;
	max-width: 32vw;
	color: #333;
	font-size: 2.93333vw;
}
.ShowLiveComponent--goodsPriceBox--2wVWUTX {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: baseline;
	align-items: baseline;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}
.ShowLiveComponent--priceSign--20cCvkd {
	margin-right: 0.26667vw;
	color: #ff174d;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
	font-family: PingFangSC-Regular, sans-serif;
}
.ShowLiveComponent--goodsPrice--3nv2jWe {
	color: #ff174d;
	font-size: 4.26667vw;
	line-height: 4.26667vw;
	font-family: AlibabaSans102-Bd;
}
.ShowLiveComponent--TipRotation--Ga9g8k1 {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	height: 5.06667vw;
	margin-top: 1.73333vw;
	padding-right: 1.86667vw;
	border-radius: 2.4vw;
	background-image: -webkit-linear-gradient(bottom, #ff174d, #fe5f45);
	background-image: linear-gradient(0deg, #ff174d, #fe5f45);
}
.ShowLiveComponent--TipImageBox--11Zsb7x {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.ShowLiveComponent--TipImage--3ZfdDiy,
.ShowLiveComponent--TipImageBox--11Zsb7x {
	width: 4.8vw;
	height: 4.8vw;
	border-radius: 50%;
}
.ShowLiveComponent--swiperContainer--1wOFrM1 {
	overflow: hidden;
	max-width: 39.73333vw;
	height: 5.06667vw;
	margin-left: 0.93333vw;
}
.ShowLiveComponent--sliderBlockSwiperWrapper--1p9fvv1 {
	display: -webkit-flex;
	display: flex;
	width: 100%;
	height: 100%;
}
.ShowLiveComponent--swiperSlide--2ugi-d9 {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	-webkit-justify-content: center;
	justify-content: center;
	height: 5.06667vw;
}
.ShowLiveComponent--swiperSlideText--2Dd_tE7 {
	color: #fff;
	font-size: 3.2vw;
	line-height: 3.2vw;
}
.ShowLiveComponent--currentLiveIdentification--1nB_Z3O {
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-align-content: center;
	align-content: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 4.53333vw;
	padding: 0.26667vw 2.13333vw 0.26667vw 0.26667vw;
	border-radius: 2.53333vw;
	background: rgba(0, 0, 0, 0.4);
}
.ShowLiveComponent--currentLiveIdentificationText--1ZKKWtO {
	overflow: hidden;
	max-width: 32vw;
	margin-left: 5.86667vw;
	color: #fff;
	font-size: 2.93333vw;
	line-height: 2.93333vw;
}
.ShowLiveComponent--currentLiveTip--3PB2fcF {
	position: absolute;
	top: 0;
	left: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	-webkit-justify-content: center;
	justify-content: center;
	width: 9.06667vw;
	height: 9.06667vw;
	padding-bottom: 1.6vw;
	border: 0.53333vw solid #737a94;
	border-radius: 50%;
	background-image: -webkit-linear-gradient(right, #ff0242, #ff4473);
	background-image: linear-gradient(270deg, #ff0242, #ff4473);
	-webkit-transform: translate(-25%, -25%) scale(0.5);
	transform: translate(-25%, -25%) scale(0.5);
	-webkit-transform-origin: center center;
	transform-origin: center center;
}
.ShowLiveComponent--currentLiveTip1--f64Am-A {
	height: 4.04267vw;
	-webkit-animation: ShowLiveComponent--currentLiveTip1--f64Am-A 1.5s linear infinite;
	animation: ShowLiveComponent--currentLiveTip1--f64Am-A 1.5s linear infinite;
}
.ShowLiveComponent--currentLiveTip1--f64Am-A,
.ShowLiveComponent--currentLiveTip2--2W_B1g5 {
	width: 1vw;
	border-radius: 0.33867vw;
	background-color: #fff;
	-webkit-transform-origin: center bottom;
	transform-origin: center bottom;
}
.ShowLiveComponent--currentLiveTip2--2W_B1g5 {
	height: 3.032vw;
	margin: 0 0.73333vw;
	-webkit-animation: ShowLiveComponent--currentLiveTip2--2W_B1g5 1.5s linear infinite;
	animation: ShowLiveComponent--currentLiveTip2--2W_B1g5 1.5s linear infinite;
}
.ShowLiveComponent--currentLiveTip3--3rwwV43 {
	width: 1vw;
	height: 5.55733vw;
	border-radius: 0.33867vw;
	background-color: #fff;
	-webkit-transform-origin: center bottom;
	transform-origin: center bottom;
	-webkit-animation: ShowLiveComponent--currentLiveTip3--3rwwV43 1.5s linear infinite;
	animation: ShowLiveComponent--currentLiveTip3--3rwwV43 1.5s linear infinite;
}
@-webkit-keyframes ShowLiveComponent--currentLiveTip1--f64Am-A {
	0% {
		height: 4.04267vw;
	}
	25% {
		height: 5.55733vw;
	}
	50% {
		height: 4.04267vw;
	}
	75% {
		height: 3.032vw;
	}
	to {
		height: 4.04267vw;
	}
}
@keyframes ShowLiveComponent--currentLiveTip1--f64Am-A {
	0% {
		height: 4.04267vw;
	}
	25% {
		height: 5.55733vw;
	}
	50% {
		height: 4.04267vw;
	}
	75% {
		height: 3.032vw;
	}
	to {
		height: 4.04267vw;
	}
}
@-webkit-keyframes ShowLiveComponent--currentLiveTip2--2W_B1g5 {
	0% {
		height: 3.032vw;
	}
	25% {
		height: 4.04267vw;
	}
	50% {
		height: 5.55733vw;
	}
	75% {
		height: 4.04267vw;
	}
	to {
		height: 3.032vw;
	}
}
@keyframes ShowLiveComponent--currentLiveTip2--2W_B1g5 {
	0% {
		height: 3.032vw;
	}
	25% {
		height: 4.04267vw;
	}
	50% {
		height: 5.55733vw;
	}
	75% {
		height: 4.04267vw;
	}
	to {
		height: 3.032vw;
	}
}
@-webkit-keyframes ShowLiveComponent--currentLiveTip3--3rwwV43 {
	0% {
		height: 5.55733vw;
	}
	25% {
		height: 4.04267vw;
	}
	50% {
		height: 3.032vw;
	}
	75% {
		height: 4.04267vw;
	}
	to {
		height: 5.55733vw;
	}
}
@keyframes ShowLiveComponent--currentLiveTip3--3rwwV43 {
	0% {
		height: 5.55733vw;
	}
	25% {
		height: 4.04267vw;
	}
	50% {
		height: 3.032vw;
	}
	75% {
		height: 4.04267vw;
	}
	to {
		height: 5.55733vw;
	}
}
.TopLiveAtmos--topLiveAtmosphereBox--3sqryuZ {
	position: relative;
	z-index: 0;
	width: 100vw;
	height: 91.2vw;
}
.TopLiveAtmos--miniLiveSort--18dZnUv {
	position: absolute;
	right: 2.93333vw;
	bottom: 0;
	z-index: 2;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 100%;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.TopLiveAtmos--liveRoomAtmosphere--3xRExfY {
	position: absolute;
	bottom: 0;
	left: 2.4vw;
	z-index: 2;
	-webkit-align-items: flex-start;
	align-items: flex-start;
}
.TopLiveAtmos--liveVideoMask--3l9-KYn {
	position: absolute;
	z-index: 5;
	width: 100%;
	height: 100%;
}
.ToastText--slideToastText--27H_Xng {
	position: fixed;
	top: calc(var(--safe-top) + 13.33333vw);
	right: 0;
	left: 0;
	z-index: 1;
	max-width: 58.13333vw;
	margin: auto;
	padding: 0.26667vw 2.66667vw;
	border-radius: 4.8vw;
	background-color: rgba(17, 17, 17, 0.65);
	color: #fff;
	font-size: 2.66667vw;
	font-family: PingFangSC-Regular, sans-serif;
}
</style>
