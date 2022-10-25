<template>
	<view class="rax-view-v2">
		<view class="rax-view-v2 DoubleOneModule--rootContainer--2esSVk1">
			<view style="width: 100vw; height: 37.0667vw;">
				
				<image
					class="rax-image DoubleOneModule--backgroundMinStyle--3EhZz_5"
					src="//gw.alicdn.com/imgextra/i2/O1CN01BRXcMb1QVLOGmmH1X_!!6000000001981-2-tps-1125-417.png_790x10000.jpg_.webp"
					style="width: 100vw; height: 37.0667vw; object-fit: cover;"
				/>
			</view>
			<view class="rax-view-v2 DoubleOneModule--viewContainers--Pqft5Py" style="top: 10.6667vw;">
				
				<view class="rax-view-v2 BottomModule--container--12dvEl1">
					<view class="rax-view-v2 rax-scrollview rax-scrollview-horizontal" style="height: 24vw; overflow: scroll hidden;">
						<view class="rax-view-v2 rax-scrollview-content-container-horizontal" v-for="item in 6" :key="index">
							<view id="bottom_module-1" class="BottomModule--bottomLink--3R9YB9s" style="margin-left: 0vw; margin-right: 1.2vw;">
								
								<image
									class="rax-image BottomModule--bottomBg--1di6g-5"
									src="//gw.alicdn.com/imgextra/i1/O1CN01Ax1lhG1LGABWkxTpw_!!6000000001271-2-tps-270-106.png_220x10000.jpg_.webp"
									style="width: 24vw; height: 9.6vw; object-fit: cover;"
								/>
								<text class="rax-text-v2 BottomModule--bottomText--3wT3_W0">拱墅地铁住宅</text>
								<view class="rax-view-v2 BottomModule--subWrap--2R6rKkz">
									<image
										class="rax-image BottomModule--bottomPic--121xaUJ"
										resizemode="cover"
										data-once="true"
										src="//gw.alicdn.com/bao/uploaded/i3/O1CN01fKfP0x1bAEuTeIxzx_!!0-paimai.jpg_220x10000Q75.jpg_.webp"
										style="width: 22.9333vw; height: 16vw; object-fit: cover;"
									/>
								</view>
							</view>
						</view>
					</view>
				</view>
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
.rax-app-tab-bar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	flex-direction: row;
	border: 0.13333vw solid #eee;
	background-color: #fff;
	z-index: 999;
}
.rax-view-v2 {
	box-sizing: border-box;
	flex-shrink: 0;
	align-content: flex-start;
	border: 0 solid #000;
	margin: 0;
	padding: 0;
	min-width: 0;
}
.rax-scrollview-vertical,
.rax-view-v2 {
	display: flex;
	flex-direction: column;
}
.rax-scrollview-horizontal {
	display: flex;
	flex-direction: row;
}
.rax-scrollview-content-container-horizontal {
	flex-direction: row;
}
.rax-scrollview-webcontainer {
	display: block;
}
.Home--container--3rRoViT {
	width: 100vw;
	height: 100%;
	flex: 1;
}
.Home--scrollView--1OP272S {
	position: relative;
	background-color: #f0f0f0;
}
.Home--bgPicture--JlIhEzr {
	width: 100vw;
	height: 113.06667vw;
	position: absolute;
	top: 0;
	z-index: -1;
}
.Home--sticky--TEuXOhK {
	position: -webkit-sticky;
	position: sticky;
}
.rax-view {
	display: flex;
	position: relative;
	flex-direction: column;
	flex-shrink: 0;
	align-content: flex-start;
	border: 0 solid #000;
	margin: 0;
	padding: 0;
	min-width: 0;
}
.rax-text,
.rax-view {
	box-sizing: border-box;
}
.rax-text {
	display: block;
	font-size: 4.26667vw;
	white-space: pre-wrap;
}
.rax-text--overflow-hidden {
	overflow: hidden;
}
.rax-text--singleline {
	white-space: nowrap;
}
.rax-text--multiline {
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
.Link--container--2mss_Yy {
	position: absolute;
	top: 0;
	left: 0;
	width: 1px;
	height: 1px;
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

.BottomBox--container--1Ro4n6S {
	height: 15.46667vw;
	position: relative;
	justify-content: center;
	flex-direction: row;
}
.BottomBox--noMore--1kfEahx {
	width: 25.33333vw;
	height: 5.86667vw;
}
@-webkit-keyframes BottomBox--spin--2BSvAAw {
	0% {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(1turn);
	}
}
@keyframes BottomBox--spin--2BSvAAw {
	0% {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(1turn);
	}
}
.BottomBox--pic--KP8fxCz {
	width: 6.93333vw;
	height: 6.93333vw;
	margin-top: 2.66667vw;
}
.CarItemAb--container--3H5XrSR {
	background: #fff;
	border-radius: 0.8vw;
	width: 46.4vw;
	text-decoration: none;
	position: relative;
	margin-bottom: 2.4vw;
	display: flex;
	flex-direction: column;
	height: 84vw;
}
.CarItemAb--picBg--vlrTVos {
	width: 46.4vw;
	height: 46.4vw;
	border-top-left-radius: 0.8vw;
	border-top-right-radius: 0.8vw;
}
.CarItemAb--textZone--sEvN2kF {
	padding: 1.6vw 2.4vw 2.4vw;
	position: relative;
	width: 46.4vw;
	flex-direction: column;
	border-bottom-right-radius: 0.8vw;
	border-bottom-left-radius: 0.8vw;
}
.CarItemAb--title--wboKv4e {
	font-family: PingFangSC-Medium;
	font-size: 4vw;
	font-weight: 900;
	color: #111;
	line-height: 5.6vw;
}
.CarItemAb--benefitsText--3hREh7t {
	padding-top: 0.53333vw;
	font-size: 3.46667vw;
	color: #eb0045;
}
.CarItemAb--priceZone--fBNA4sB {
	height: 4.26667vw;
	margin-top: 1.06667vw;
	position: relative;
	flex-direction: row;
	display: flex;
	align-items: baseline;
}
.CarItemAb--pricePrefix--1pGQfeY {
	font-family: PingFangSC-Medium;
	font-size: 2.66667vw;
	padding-right: 1.06667vw;
	line-height: 4.26667vw;
}
.CarItemAb--priceNum--59GG4Bw {
	font-size: 4.26667vw;
	font-weight: 900;
	line-height: 4.26667vw;
}
.CarItemAb--unitPrice--1flNS03 {
	font-family: PingFangSC-Semibold;
	font-size: 3.73333vw;
	line-height: 3.73333vw;
}
.CarItemAb--line--2zcIVnD {
	height: 0.13333vw;
	background-color: #f0f0f0;
	margin-top: 1.6vw;
	margin-bottom: 1.06667vw;
}
.CarItemAb--iconZone--1v5zTRA {
	position: relative;
	flex-direction: row;
	align-items: center;
	height: 6.4vw;
}
.CarItemAb--columnPic--1bwUaBf {
	width: 6.4vw;
	height: 6.4vw;
	padding-right: 1.06667vw;
}
.CarItemAb--iconText--ecDZ8RL {
	font-size: 3.2vw;
	font-weight: 900;
	color: #292b2c;
	padding-right: 1.06667vw;
	line-height: 4.4vw;
}
.CarItemAb--textView--1icDmQC {
	position: relative;
	flex-direction: row;
	align-items: center;
}
.CarItemAb--line2--2NBGQec {
	width: 0.13333vw;
	height: 2.93333vw;
	margin-right: 1.06667vw;
	background-color: #f0f0f0;
}
.CarItemAb--locationPic--3P4XJ1c {
	height: 3.2vw;
	width: 3.2vw;
	padding-right: 0.53333vw;
}
.CarItemAb--cityText--1i5XkeF {
	font-size: 3.2vw;
	font-weight: 900;
	color: #999;
}
.CarItemAb--remindZone--tx3xtRE {
	position: relative;
	flex-direction: row;
	height: 5.86667vw;
	background-color: #fef5f8;
	border-radius: 3.2vw;
	align-items: center;
	border: 0.13333vw solid #eb0045;
	margin-top: 0.8vw;
}
.CarItemAb--remindPic--3PtMFrp {
	height: 3.2vw;
	width: 3.2vw;
	padding-right: 1.06667vw;
	padding-left: 1.86667vw;
}
.CarItemAb--remindText--9FUxaIC {
	font-size: 3.2vw;
	color: #eb0045;
}
.Tabbar--container--1cz8mS3 {
	flex-direction: row;
	height: 12.8vw;
	padding-top: 0.53333vw;
	padding-bottom: 0.26667vw;
	align-items: center;
	justify-content: space-between;
	border-top: 0.13333vw solid #e1e1e1;
	background-color: #fff;
}
.Tabbar--link--nBCT2wr {
	width: 23.73333vw;
	flex-direction: column;
	align-items: center;
}
.Tabbar--picWrap--sQLOkzw {
	position: relative;
	height: 7.2vw;
	width: 7.2vw;
	align-items: center;
}
.Tabbar--pic--2YLwOHd {
	height: 7.2vw;
	width: 7.2vw;
}
.Tabbar--fgPic--3dX-g0Y {
	position: absolute;
	bottom: 1.6vw;
	opacity: 1;
}
.Tabbar--topPic--3dZtmWu {
	position: absolute;
	bottom: 1.6vw;
	opacity: 0;
	transform: translateY(2.4vw);
}
.Tabbar--textWrap--1oT6CFg {
	position: relative;
	margin-top: 0.8vw;
	width: 100%;
	height: 3.2vw;
	align-items: center;
}
.Tabbar--text--3sxU5bA,
.Tabbar--topText--1nPtIUc {
	font-size: 2.93333vw !important;
	line-height: 3.2vw;
	text-align: center;
}
.Tabbar--topText--1nPtIUc {
	position: absolute;
	top: 0;
	opacity: 0;
}
.Tabbar--cornerPic--192QdES {
	height: 3.46667vw;
	font-size: 2.66667vw !important;
	display: flex;
	line-height: 3.2vw !important;
	justify-content: center !important;
	text-align: center !important;
	align-items: center !important;
	width: 3.46667vw;
	position: absolute;
	left: 3.73333vw;
	bottom: 3.73333vw;
	color: #fff;
	background-color: #eb0045;
	border: 0.26667vw solid #fff;
	border-radius: 3.46667vw;
}
.Tabbar--miniCorner--xzrT1cd {
	width: 5.33333vw;
}
.DoubleOneModule--rootContainer--2esSVk1 {
	width: 100vw;
	position: relative;
	flex-direction: row;
	margin-top: 1.06667vw;
}
.DoubleOneModule--backgroundStyle--2HPVALp {
	width: 100vw;
	height: 65.33333vw;
}
.DoubleOneModule--backgroundMinStyle--3EhZz_5 {
	width: 100vw;
	height: 37.06667vw;
}
.DoubleOneModule--backgroundTopStyle--2I9ib_P {
	width: 100vw;
	height: 42.66667vw;
}
.DoubleOneModule--viewContainers--Pqft5Py {
	position: absolute;
	top: 10.66667vw;
	left: 0;
}
.BottomModule--container--12dvEl1 {
	width: 100vw;
	position: relative;
	padding-left: 1.6vw;
	padding-right: 1.6vw;
}
.BottomModule--bottomLink--3R9YB9s {
	width: 24vw;
	height: 24vw;
	border-radius: 3.2vw;
	position: relative;
	margin-right: 1.2vw;
	background-color: #fff;
}
.BottomModule--bottomBg--1di6g-5 {
	width: 24vw;
	height: 9.6vw;
	border-bottom-left-radius: 3.2vw;
	border-bottom-right-radius: 3.2vw;
	position: absolute;
	bottom: 0;
}
.BottomModule--bottomText--3wT3_W0 {
	position: absolute;
	width: 24vw;
	padding-left: 0.8vw;
	padding-right: 0.8vw;
	font-size: 3.46667vw;
	line-height: 4vw;
	font-weight: 700;
	color: #fff;
	text-align: center;
	bottom: 1.86667vw;
}
.BottomModule--subWrap--2R6rKkz {
	position: relative;
	width: 22.93333vw;
	align-items: center;
	height: 24vw;
	border-radius: 3.2vw;
	display: flex;
	margin-top: 0.53333vw;
	margin-left: 0.53333vw;
}
.BottomModule--bottomPic--121xaUJ {
	width: 22.93333vw;
	height: 16vw;
	border-radius: 2.66667vw;
}
.BottomModule--subText--1LJIK-u {
	position: absolute;
	bottom: 7.73333vw;
	text-align: center;
	width: 20.8vw;
	height: 4vw;
	line-height: 4vw;
	font-size: 2.93333vw;
	font-weight: 700;
	color: #fff;
	background-color: #ff4a4a;
	border-radius: 3.2vw;
}
</style>