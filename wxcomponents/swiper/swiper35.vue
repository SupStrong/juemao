<template>
	<view class="promotion-content">
		<view class="sale-tag">
			<view class="iconfont icon-arrow-right arrow-tag"></view>
			<image src="https://p2-q.mafengwo.net/s14/M00/6E/73/wKgE2l0HRqKAMs0TAAAHGU7z1rY778.png" alt="" />
			<view class="flex-1">
				<view class="sale-tag-item">
					<text>严选商家</text>
					<text>·</text>
				</view>
				<view class="sale-tag-item">
					<text>精选线路</text>
					<text>·</text>
				</view>
				<view class="sale-tag-item">
					<text>安心出游</text>
					<text>·</text>
				</view>
				<view class="sale-tag-item"><text>服务保障</text></view>
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
.promotion-content {
	padding: 3.2vw;
	content: 'viewport-units-buggyfill; padding: 3.2vw';
}
.sale-tag {
	box-sizing: border-box;
	height: 9.6vw;
	background: url(https://p2-q.mafengwo.net/s14/M00/E8/7C/wKgE2l0G-n6ASg0lAAAZwmKlMhU978.png), linear-gradient(134deg, #4f5359, #36393d);
	background-position: 0 0;
	background-size: auto 100%;
	background-repeat: no-repeat;
	border-radius: 1.6vw;
	padding: 0 2.133vw 0 3.2vw;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	position: relative;
	content: 'viewport-units-buggyfill; height: 9.6vw; border-radius: 1.6vw; margin-bottom: 3.2vw; padding: 0 2.133vw 0 3.2vw';
	image {
		width: 23.2vw;
		height: 6.3vw;
		margin-right: 2.133vw;
	}
	.sale-tag-item {
		color: #ffdab3;
		font-family: PingFangSC-Light;
		font-weight: 300;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 0;
		text {
			font-size: 3.2vw;
		}
	}
}
.arrow-tag {
	color: #717376;
	position: absolute;
	right: 2.133vw;
	font-size: 2.667vw;
	content: 'viewport-units-buggyfill; right: 2.133vw; font-size: 2.667vw';
}
.flex-1 {
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
}
</style>
