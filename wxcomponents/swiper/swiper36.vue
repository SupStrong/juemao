<template>
	<view>
		<view class="safe-guard">
			<view class="iconfont"></view>
			<view class="safe-guard-content">
				<view>严格消毒</view>
				<view>体温检测</view>
				<view>健康码乘车</view>
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
.safe-guard {
	background: #fffadf;
	height: 11.733vw;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding-left: 3.2vw;
	.iconfont {
		display: block;
		width: 21.867vw;
		height: 7.467vw;
		background: url(https://n1-q.mafengwo.net/s16/M00/54/FB/CoUBUl8NGZiAVwDJAAAUJDSVark778.png) no-repeat;
		background-size: 100% 100%;
	}
	.safe-guard-content {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		view {
			display: inline-block;
			vertical-align: top;
			margin-left: 3.2vw;
		}
		view:before {
			content: '';
			display: inline-block;
			vertical-align: top;
			width: 4.267vw;
			height: 4.267vw;
			background: url(https://b1-q.mafengwo.net/s16/M00/54/95/CoUBUl8NGW6AaHemAAAEq7Vh_yI015.png) no-repeat;
			margin-top: 4rpx;
			background-size: 100% 100%;
		}
	}
}
</style>
