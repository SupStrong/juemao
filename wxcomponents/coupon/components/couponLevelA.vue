<template>
	<view class="bab_opt_mod bab_opt_mod_1_2 module_84991162 free_coupon">
		<view class="rv" style="overflow: hidden; height: 92px;">
			<view class="rv-wrap" style="transform:scale(1.0000);-webkit-transform:scale(1.0000);transform-origin:left top;-webkit-transform-origin:left top;width:375px">
				<view
					class="free_coupon_module slide_android upload  coupon_11x gotouse slide no-default-padding"
					style="background:url(https://m.360buyimg.com/babel/jfs/t1/170303/40/30377/34477/632966dbEdf257c82/00575b577baef9ce.jpg) no-repeat 0 0;background-size:100% 100%"
				>
					<view style="border-radius:0;overflow:hidden;border-collapse:separate;perspective:1px;margin:3px 10px;margin-right:0">
						<view class="scrollbar" style="overflow-x:scroll;overflow-y:hidden">
							<view
								v-for="(item, index) in 5"
								:key="index"
								style="border-radius:4px 4px 4px 4px;margin-right:3px;border-collapse:separate;overflow:hidden;box-sizing:border-box;padding-top:23.661971830985916%;width:144px;height:84px"
								class="coupon can_get button_can_click expo"
							>
								<image
									class="lazyload-img lazyload-img-wmh fadein"
									src="https://m11.360buyimg.com/babel/jfs/t1/16780/17/23993/35701/63329b4aEd29c8bc0/59b7f1eee291f408.jpg"
									style="width: 100%; height: 100%; background-color: transparent; background-image: none;position: absolute;top: 0;"
								/>
							</view>
						</view>
					</view>
				</view>
			</view>
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
.free_coupon_module.slide {
	overflow-scrolling: touch;
	-webkit-overflow-scrolling: touch;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
}
.free_coupon_module.slide::-webkit-scrollbar {
	display: none;
}
.free_coupon_module.slide a.coupon_empty:before {
	left: 74%;
	top: 29%;
}
.free_coupon_module.slide a.coupon_today_empty:before {
	left: 70%;
	top: 40%;
}
.free_coupon_module.slide a.coupon_receive:before,
.free_coupon_module.slide a.coupon_today_receive:before {
	left: 74%;
	top: 40%;
}
.free_coupon_module.slide a.coming:before {
	left: 0;
	position: absolute;
	top: 0;
	z-index: 1;
}
.free_coupon_module.slide.upload {
	font-size: 0;
	letter-spacing: -6px;
}
.free_coupon_module.slide.upload a {
	display: inline-block;
	position: relative;
	width: 144px;
}
.free_coupon_module.slide.upload a img {
	position: absolute;
}
</style>
