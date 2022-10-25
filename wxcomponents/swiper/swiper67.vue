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
									<text class="rax-text-v2 NewTabItem--tabItemText--3fZ2k-U" style="margin-bottom: 4.5333vw; color: rgb(51, 51, 51);">今日爆款</text>
									<text class="rax-text-v2 NewTabItem--feedsBottomText--2yQuzCL" style="color:#999;">热卖中</text>
								</view>
							</view>
						</view>
						<view class="rax-view-v2" style="width: 138px;">
							<view class="rax-view-v2">
								<view
									style="height: 13.2vw; background-color: rgb(255, 255, 255); border-top-left-radius: 4.8vw; border-top-right-radius: 4.8vw; width: 33.3333vw;"
									class="NewTabItem--tabBarItemWrap--2PaGWnb"
								>
									<text class="rax-text-v2 NewTabItem--tabItemText--3fZ2k-U" style="margin-bottom: 4.5333vw; color: rgb(254, 16, 68);">早10点抢</text>
									<view class="rax-view-v2 CountDown--countdownWrap--1r0lTyi" style="background: rgb(255, 238, 245);">
										<view class="rax-view-v2 CountDown--countTimeBox--11FNSmO">
											<img
												style="position: absolute; left: 0vw; width: 2.4vw; height: 3.4667vw;"
												src="//gw.alicdn.com/imgextra/i4/O1CN01FWwSlo1GFddwOHLgJ_!!6000000000593-2-tps-18-25.png_110x10000.jpg_.webp"
											/>
											<text class="rax-text-v2 CountDown--countdownTime--19j-89t" style="background: rgb(255, 57, 95);">2</text>
										</view>
										<text
											class="rax-text-v2 CountDown--countdownText--qqUiPg_ rax-text-v2--overflow-hidden rax-text-v2--singleline"
											style="color: rgb(255, 47, 99);"
										>
											小时后结束
										</text>
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
									<text class="rax-text-v2 NewTabItem--tabItemText--3fZ2k-U" style="margin-bottom: 4.5333vw; color: rgb(51, 51, 51);">晚8点半抢</text>
									<view class="rax-view-v2 CountDown--countdownWrap--1r0lTyi" style="background: rgb(225, 246, 223);">
										<view class="rax-view-v2 CountDown--countTimeBox--11FNSmO">
											<img
												style="position: absolute; left: 0vw; width: 2.4vw; height: 3.4667vw;"
												src="//gw.alicdn.com/imgextra/i4/O1CN01FWwSlo1GFddwOHLgJ_!!6000000000593-2-tps-18-25.png_110x10000.jpg_.webp"
											/>
											<text class="rax-text-v2 CountDown--countdownTime--19j-89t" style="background: rgb(31, 171, 79);">9</text>
										</view>
										<text
											class="rax-text-v2 CountDown--countdownText--qqUiPg_ rax-text-v2--overflow-hidden rax-text-v2--singleline"
											style="color: rgb(31, 171, 79);"
										>
											小时后开始
										</text>
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
  .CountDown--countdownTime--19j-89t {
  	width: 4.4vw;
  	height: 3.46667vw;
  	border-radius: 1.06667vw;
  	color: #fff;
  	font-size: 2.66667vw;
  	line-height: 3.46667vw;
  	text-align: center;
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
</style>