<template>
	<view class="tn-flex tn-flex-wrap tn-padding-xs" style="margin-top: -30rpx;"  @click="navTuniaoUI">
	  <view class="" style="width: 100%;">
	    <view class="image-piccapsule tn-shadow-blur" style="background-image:url('https://cdn.nlark.com/yuque/0/2022/png/280373/1645424144815-assets/web-upload/c4c49dcc-adb1-4976-8558-234b88ae98ff.png');">
	       <view class="image-capsule">
	       </view>
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
  .image-capsule{
    padding: 100rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-piccapsule{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  
</style>
