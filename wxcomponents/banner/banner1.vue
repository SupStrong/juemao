<template>
	<view class="tn-flex tn-margin-left tn-margin-right tn-margin-top-sm">
		<view class="tn-flex-2">
			<view class="image-pic tn-margin-right" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/cup2.jpg')"><view class="image-tuniao1"></view></view>
		</view>
		<view class="tn-flex-1">
			<view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg')"><view class="image-tuniao2"></view></view>
			<view class="image-pic tn-margin-top" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/banner1.jpg')"><view class="image-tuniao2"></view></view>
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
	  /* 热门图片 start*/
	  .image-tuniao1{
	    padding: 164rpx 0rpx;
	    font-size: 40rpx;
	    font-weight: 300;
	    position: relative;
	  }
	  .image-tuniao2{
	    padding: 75rpx 0rpx;
	    font-size: 40rpx;
	    font-weight: 300;
	    position: relative;
	  }
	  .image-tuniao3{
	    padding: 90rpx 0rpx;
	    font-size: 40rpx;
	    font-weight: 300;
	    position: relative;
	  }
	  .image-pic{
	    background-size: cover;
	    background-repeat:no-repeat;
	    // background-attachment:fixed;
	    background-position:top;
	    border-radius: 10rpx;
	  }
</style>
