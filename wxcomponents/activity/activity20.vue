<template>
	<view>
		<view class="tn-color-black tn-text-bold tn-bg-yellow mould-shadow" style="height: 160rpx;border-radius: 10rpx;width: 348rpx;margin-bottom: 20rpx;">
			<view class="tn-padding-left tn-padding-top-lg">
			  话题 · 秋天收集者
			</view>
			<view class="tn-padding-left tn-padding-top-xs">
			  立即参与话题
			  <text class="tn-icon-right tn-padding-left-xs"></text>
			</view>
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
  /* 阴影 start*/
  .mould-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }    
  
  .tn-tabbar-height {
  	min-height: 20rpx;
  	height: calc(40rpx + env(safe-area-inset-bottom) / 2);
  }
  
</style>
