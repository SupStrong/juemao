<template>
	<view class="content">
		<A></A>
		<B></B>
		<C></C>
	</view>
</template>
<script>
	import A from '@/wxcomponents/swiper/swiper24.vue'
	import B from '@/wxcomponents/swiper/swiper25.vue'
	import C from '@/wxcomponents/swiper/swiper26.vue'
	export default {
		name: 'index',
		data() {
			return {
			};
		},
		components:{
			A,
			B,
			C
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		height: 100vh;
		overflow: scroll;
	}
</style>