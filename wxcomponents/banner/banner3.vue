<template>
	<view class="tn-margin-top-sm">
	  <view class="tn-flex tn-flex-row-between tn-bg-yellow  tn-round tn-padding-xs tn-margin">
		<view class="justify-content-item tn-text-center tn-flex" style="padding: 25rpx 30rpx">
		  <tn-avatar-group :lists="latestUserAvatar" size="sm"></tn-avatar-group> 
		  <text class="tn-padding-xs">629人</text>
		</view>
		<view class="justify-content-item tn-text-right tn-padding-top-xs">
		  <view class="tn-text-bold">
			北北·图鸟小圈子
		  </view>
		  <view class="tn-text-xs tn-color-gray--dark tn-padding-top-xs">
			北北们的作品集，一起干巴爹叭
		  </view>
		</view>
		<view class="justify-content-item tn-text-right tn-margin-right tn-padding-top-lg">
		  <text class="tn-icon-right tn-color-gray--dark"></text>
		</view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latestUserAvatar: [
					{src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					{src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					{src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					{src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
			    ],
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
