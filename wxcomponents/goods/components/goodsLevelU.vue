<template>
	<view class="swiper-item image-banner">
		<image src="https://tnuiimage.tnkjapp.com/swiper/read.jpg" mode="aspectFill"></image></view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
/* 轮播视觉差 start */
.image-banner{
	width: 348rpx;
	height: 500rpx !important;
	margin-bottom: 20rpx;
	image{
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}
}

</style>
