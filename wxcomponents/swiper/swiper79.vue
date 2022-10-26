<template>
	<view>
		<tn-popup mode="right" v-model="visibile" width="600rpx" zIndex='202222' maskCloseable='true' @close='handleClose'>
		  <view class="content">
		    <scroll-view scroll-y="true" style="height: 100vh;position: relative;">
		      <view class="activity-item" v-for="item in 5" @click="handleTo">
		      	<image class="image-item" src="https://commimg.pddpic.com/oms_img_ng/2022-10-21/a1923dcc-1178-4070-8578-efbd6ea49cf4.jpeg?imageView2/q/80/format/webp" mode='widthFix'></image>
		      </view>
		    </scroll-view>
			<image class="close-icon" src="https://funimg.pddpic.com/mobile-subjects/2020-08-06/8970f9c1-0cac-4d6d-86b2-66dba3c82b4b.png?imageView2/q/80/format/webp" mode="" @click="handleClose"></image>
		  </view>
		</tn-popup>
	</view>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
	  // 距离底部的距离
	  visibile: {
	    type: [Boolean],
	    default: true
	  },
	 },
	methods: {
		handleClose(){
			this.$emit('update')
		},
		handleTo(path){
			uni.navigateTo({
				url: path
			});
		}
	}
};
</script>
<style lang="scss" scoped>
	.image-item{
		width: 100%;
		// height: 380rpx;
		
	}
	/deep/ .tn-popup{
		z-index: 29099;
	}
	.close-icon{
		width: 90rpx;
		height: 160rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		left: -19rpx;
		margin: auto;
	}
</style>