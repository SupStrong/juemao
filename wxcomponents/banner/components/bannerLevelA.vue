<template>
	<view>
	  <view class="tn-margin-left tn-margin-right tn-margin-top-sm">
		<tn-swiper :list="banner" :height="320" :effect3d="false" mode="round"></tn-swiper>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [{
				  image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner1.jpg'
				}, {
				  image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner2.jpg'
				}, {
				  image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner3.jpg'
				}, {
				  image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner4.jpg'
				}],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>
