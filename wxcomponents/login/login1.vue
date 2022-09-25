<template>
	<view class="">
		<view class="login-btn" v-if="onloginstate">
			拆个盲盒，每天惊喜不断!
			<view>微信一键登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				onloginstate:true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.login-btn {
	width: 100%;
	height: 100rpx;
	position: fixed;
	left: 0;
	bottom: 140rpx;
	background-color: #fff;
	border-radius: 40rpx;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	color: #303133;
	padding: 0 20rpx 0 30rpx;
	box-sizing: border-box;
	view {
		width: 320rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		background-color: #303133;
		border-radius: 40rpx;
		color: #fff;
	}
}
</style>
