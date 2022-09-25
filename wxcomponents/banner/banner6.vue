<template>
		<view class="content">
			<view class="left">
				<image src="https://aliyun-wb-bvqq7ezi1t.oss-cn-beijing.aliyuncs.com/ceshi/man.png"></image>
				<view class="list-btn" @click="onPut(1)">放入一张男生纸条</view>
				<view class="list-btn" @click="onextract(1)">抽取一张男生纸条</view>
			</view>
			<view class="right">
				<image src="https://aliyun-wb-bvqq7ezi1t.oss-cn-beijing.aliyuncs.com/ceshi/woman.png" mode=""></image>
				<view class="list-btn" @click="onPut(0)">放入一张女生纸条</view>
				<view class="list-btn" @click="onextract(0)">抽取一张女生纸条</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

	.content{
		width: 100%;
		height: 587rpx;
		margin-top: 60rpx;
		display: flex;
		flex-flow:row wrap;
		padding: 0 15rpx;
		justify-content: space-between;
		
	}
	.content>view{
		width: 346rpx;
		height: 587rpx;
		position: relative;
		padding: 352rpx 22rpx 0 22rpx;
		box-sizing: border-box;
		image{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 20rpx;
			z-index: -1;
		}
	}
	.list-btn{
		width: 100%;
		height: 98rpx;
		border-radius: 20rpx;
		background-color: #000;
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 10rpx 0px rgba(0, 0, 0, 0.12);
	}
</style>
