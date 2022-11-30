<template>
	<view class="rankContainer">
		<!-- <image class="rankTitle" src="https:https://storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_header_title.png" /> -->
		<text class="rankTitle">超级榜单</text>
		<view class="itemsContainer">
			<view class="rankItemContainer">
				<view class="skuContainer" style="width: 129.75rpx; height: 129.75rpx;">
					<image
						class="sku"
						src="https://m.360buyimg.com/n1/jfs/t1/194670/36/4330/394672/60a77d5bEfc33d58b/63ae160db873ce37.png!q70.webp"
						style="width: 129.75rpx; height: 129.75rpx; animation: 0.6s linear 0s 1 normal forwards running bigScale130;"
					/>
				</view>
				<image class="rankNum" src="https:https://storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_top_v5.png" />
				<view class="saleInfo">热销500万+件</view>
			</view>
			<view class="rankItemContainer">
				<view class="skuContainer" style="width: 129.75rpx; height: 129.75rpx;">
					<image
						class="sku"
						src="https://m.360buyimg.com/n1/jfs/t1/176830/32/930/507148/608519f7Ea27c38fc/bb92b1f409d89f48.png!q70.webp"
						style="width: 129.75rpx; height: 129.75rpx; animation: 0.6s linear 0s 1 normal forwards running bigScale130;"
					/>
				</view>
				<image class="rankNum" src="https:https://storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_top_v6.png" />
				<view class="saleInfo">热销200万+件</view>
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
.rankContainer {
	width: 348rpx;
	height: 249.99975rpx;
	background-image: url('//storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_header_bg_v2.png');
	background-size: 342.99975rpx 89.00025rpx;
	background-repeat: no-repeat;
	background-color: #fff;
	border-radius: 15.99975rpx;
	-webkit-border-radius: 15.99975rpx;
	-moz-border-radius: 15.99975rpx;
	-ms-border-radius: 15.99975rpx;
	-o-border-radius: 15.99975rpx;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	margin-bottom: 20rpx;
}
.rankContainer .rankTitle {
	width: 188.00025rpx;
	height: 30rpx;
	margin-top: 18rpx;
	margin-left: 15rpx;
	font-family: fangsong;
	font-weight: 800;
	font-size: 36rpx;
}
.rankContainer .itemsContainer {
	width: 302.00025rpx;
	height: 171.99975rpx;
	margin-top: 17.00025rpx;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	margin-left: 15.99975rpx;
	margin-right: 24.99975rpx;
}
:root {
	--clipRightZone: 30rpx;
	--fringeTabbarHeight: px150rpx(100);
}
.rankItemContainer {
	width: 140.00025rpx;
	height: 171.99975rpx;
	padding-left: 9.99975rpx;
	position: relative;
}
.rankItemContainer .rankNum {
	width: 44.00025rpx;
	height: 54rpx;
	position: absolute;
	left: 0;
	top: 0;
}
.rankItemContainer .saleInfo {
	width: 129.99975rpx;
	height: 36rpx;
	background-color: rgba(255, 55, 16, 0.1);
	border-radius: 18rpx;
	-webkit-border-radius: 18rpx;
	-moz-border-radius: 18rpx;
	-ms-border-radius: 18rpx;
	-o-border-radius: 18rpx;
	color: #ff3710;
	font-size: 20.00025rpx;
	font-weight: 500;
	text-align: center;
	font-family: PingFangSC;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	line-height: 38.00025rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
:root {
	--clipRightZone: 30rpx;
	--fringeTabbarHeight: px150rpx(100);
}
.couponContainer {
	width: 342.99975rpx;
	height: 249.99975rpx;
	background-image: url('//storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_coupon_header_bg_v2.png');
	background-size: 342.99975rpx 89.00025rpx;
	background-repeat: no-repeat;
	background-color: #fff;
	border-radius: 15.99975rpx;
	-webkit-border-radius: 15.99975rpx;
	-moz-border-radius: 15.99975rpx;
	-ms-border-radius: 15.99975rpx;
	-o-border-radius: 15.99975rpx;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
}
.couponContainer .title {
	width: 123.99975rpx;
	height: 30rpx;
	margin-top: 18rpx;
	margin-left: 15rpx;
}
.couponContainer .itemsContainer {
	width: 315rpx;
	height: 180rpx;
	margin-top: 8.00025rpx;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	margin-left: 14.00025rpx;
	margin-right: 14.00025rpx;
}
:root {
	--clipRightZone: 30rpx;
	--fringeTabbarHeight: px150rpx(100);
}
</style>
