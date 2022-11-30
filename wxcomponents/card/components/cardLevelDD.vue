<template>
	<view class="rax-view-v2 mpmw-commodity-list" style="margin-top: 0vw; margin-bottom: 0vw;width:750rpx;">
		<view class="rax-view-v2 mppmw-commodity-list-card">
			<view class="rax-view-v2 card-content" style="background: rgb(255, 255, 255);">
				<view class="rax-view-v2 primary">
					<text class="rax-text-v2 title" style="color: rgb(17, 17, 17);">岩板电视柜榜</text>
					<view class="rax-view-v2 group">
						<image class="icon" src="//gw.alicdn.com/imgextra/i1/O1CN01XqEPX71D0ZlbEZvUh_!!6000000000154-2-tps-48-48.png_.webp" />
						<view class="num">1883</view>
						<view class="rax-view-v2 view">
							<text class="rax-text-v2 tag">设计师</text>
							<text class="rax-text-v2 favor">收藏</text>
						</view>
					</view>
				</view>
				<view class="rax-view-v2 collect-imgs">
					<view class="rax-view-v2 sub">
						<view class="rax-view-v2 mask"></view>
						<view class="rax-view-v2 group1">
							<image class="lable-icon" src="//gw.alicdn.com/imgextra/i3/O1CN01tpHPXS1P429INtruD_!!6000000001786-2-tps-36-36.png_.webp" />
							<image class="entryPic" src="//gw.alicdn.com/bao/uploaded/i1/O1CN017EG10s1DTt6f9Xgxe_!!6000000000218-2-yinhe.png_.webp" />
						</view>
						<view class="rax-view-v2 infoWrapper"><text class="rax-text-v2 info" style="color: rgb(181, 94, 3);">784位设计师收藏</text></view>
					</view>
					<view class="rax-view-v2 side">
						<view class="rax-view-v2 contain-bac">
							<view class="contain-bac-mask"></view>
							<image class="lable-icon" src="//gw.alicdn.com/imgextra/i2/O1CN013vGXee1QZ0YJsHN5V_!!6000000001989-2-tps-36-36.png_.webp" />
							<view
								class="rax-view-v2 group2"
								style="background-image: url(https://img.alicdn.com/bao/upload/O1CN01LtNcnO1fJdSCwBcnN_!!6000000003986-0-yinhe.jpg);"
							></view>
						</view>
						<view class="rax-view-v2 contain-bac">
							<view class="contain-bac-mask"></view>
							<image class="lable-icon" src="//gw.alicdn.com/imgextra/i3/O1CN012W4I231GJIoNbHzbT_!!6000000000601-2-tps-36-36.png_.webp" />
							<view
								class="rax-view-v2 group3"
								style="background-image: url(https://img.alicdn.com/bao/upload/O1CN01kynfXx1Gahr959S2n_!!6000000000639-0-yinhe.jpg);"
							></view>
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
.card-content,
.collect-imgs {
	display: flex;
	flex-direction: row;
}
.card-content {
	width: 95.2vw;
	height: 38.4vw;
	padding: 2.66667vw;
	border-radius: 3.2vw;
	margin-bottom: 2.4vw;
}
.card-content .primary {
	display: flex;
	flex-direction: column;
	padding: 7.73333vw 0;
	margin-left: 3.06667vw;
}
.card-content .title {
	overflow: hidden;
	width: 27.2vw;
	height: 10.66667vw;
	font-family: PingFang SC;
	font-size: 4.53333vw;
	font-weight: 500;
	line-height: 5.33333vw;
	text-overflow: ellipsis;
	webkit-line-clamp: 2;
	webkit-box-orient: vertical;
}
.card-content .group {
	flex-direction: row;
	padding: 0.53333vw;
	background-color: #111;
	border-radius: 2.13333vw;
	width: 25.33333vw;
	display: flex;
	justify-content: center;
	font-family: PingFangSC-Medium;
	align-items: center;
	margin: 2.66667vw 2.66667vw 0 0;
}
.card-content .icon {
	width: 3.2vw;
	height: 3.2vw;
}
.card-content .lable-icon {
	width: 4.53333vw;
	height: 4.53333vw;
	position: absolute;
}
.card-content .num {
	margin-left: 0.53333vw;
	font-family: Helvetica;
	font-size: 2.66667vw;
	color: #fff;
	white-space: nowrap;
	margin-top: -0.13333vw;
}
.card-content .view {
	display: flex;
	flex-direction: row;
	padding: 0.26667vw 0;
}
.card-content .tag {
	color: #fff;
}
.card-content .favor,
.card-content .tag {
	font-family: PingFang SC;
	font-size: 2.66667vw;
	font-weight: 500;
	line-height: 2.66667vw;
	white-space: nowrap;
}
.card-content .favor {
	margin-left: 0.26667vw;
	color: #fddf00;
}
.card-content .sub {
	display: flex;
	flex-direction: column;
	margin-left: 6.66667vw;
	background-color: #fff;
	border-radius: 1.6vw;
	width: 33.06667vw;
	position: relative;
}
.card-content .mask {
	position: absolute;
	background: #000;
	opacity: 0.03;
	height: 33.06667vw;
	border-radius: 1.6vw;
	width: 33.06667vw;
}
.card-content .group1 {
	display: flex;
	flex-direction: column;
}
.card-content .view1 {
	display: flex;
	flex-direction: row;
	align-self: flex-start;
	padding: 0.13333vw 1.46667vw 0.93333vw;
	background-image: url('https://img.alicdn.com/imgextra/i1/O1CN01VMliwZ1M9a5vFlofv_!!6000000001392-2-tps-72-72.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: 0 0;
	background-origin: padding-box;
}
.card-content .num1 {
	margin-right: 0.53333vw;
	font-family: PingFangSC-Medium;
	font-size: 3.06667vw;
	font-weight: 600;
	line-height: 3.73333vw;
	color: #fff;
	white-space: nowrap;
}
.card-content .entryPic {
	width: 24vw;
	height: 24vw;
	-o-object-fit: contain;
	object-fit: contain;
	margin: 3.2vw auto auto;
}
.card-content .infoWrapper {
	display: flex;
	justify-content: center;
	flex-direction: row;
	padding: 0.53333vw 6.13333vw;
	border-radius: 0 0 1.6vw 1.6vw;
	z-index: 9999;
	margin-top: 0.53333vw;
}
.card-content .info {
	font-family: PingFang SC;
	font-size: 2.66667vw;
	font-weight: 400;
	line-height: 3.2vw;
	white-space: nowrap;
}
.card-content .side {
	display: flex;
	flex-direction: column;
	width: 16vw;
	margin-left: 1.06667vw;
	justify-content: space-between;
}
.card-content .contain-bac {
	width: 16vw;
	height: 16vw;
	border-radius: 1.6vw;
	background-color: #fff;
	position: relative;
}
.card-content .contain-bac-mask {
	position: absolute;
	background: #000;
	opacity: 0.03;
	width: 16vw;
	height: 16vw;
	border-radius: 1.6vw;
}
.card-content .group2 {
	justify-content: flex-start;
	padding-bottom: 11.2vw;
	width: 12.8vw;
	height: 12.8vw;
	margin: auto;
}
.card-content .group2,
.card-content .view2 {
	display: flex;
	flex-direction: row;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: 0 0;
	background-origin: padding-box;
}
.card-content .view2 {
	padding: 0.13333vw 1.33333vw 0.93333vw;
	background-image: url('https://img.alicdn.com/imgextra/i2/O1CN01ojvZy91aBmceyJkNj_!!6000000003292-2-tps-72-72.png');
}
.card-content .num2 {
	margin-left: 0.26667vw;
	font-family: PingFangSC-Medium;
	font-size: 3.06667vw;
	font-weight: 600;
	line-height: 3.73333vw;
	color: #fff;
	white-space: nowrap;
}
.card-content .group3 {
	flex-direction: column;
	padding-bottom: 11.33333vw;
	width: 12.8vw;
	height: 12.8vw;
	margin: auto;
}
.card-content .group3,
.card-content .view3 {
	display: flex;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: 0 0;
	background-origin: padding-box;
}
.mpmw-commodity-list {
	margin: 3.2vw 0;
	padding: 0 3.2vw;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
