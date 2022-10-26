<template>
	<view>
		<tn-popup mode="right" v-model="visibile" width="600rpx" zIndex='20100' maskCloseable='true'>
		  <view class="content">
		    <scroll-view scroll-y="true" style="height: 100vh;">
		      <view class="" v-for="item in 5">
		      	<image class="image-item" src="https://commimg.pddpic.com/oms_img_ng/2022-10-21/a1923dcc-1178-4070-8578-efbd6ea49cf4.jpeg?imageView2/q/80/format/webp" mode='widthFix'></image>
		      </view>
		    </scroll-view>
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
	methods: {}
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
</style>