<template>
	<view>
		<view class="rankContainer">
			<!-- <image class="rankTitle" src="https:https://storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_header_title.png" /> -->
			<text class="rankTitle">超级榜单</text>
			<view class="itemsContainer">
				<view class="rankItemContainer">
					<view class="skuContainer" style="width: 64.875px; height: 64.875px;">
						<image
							class="sku"
							src="https://m.360buyimg.com/n1/jfs/t1/194670/36/4330/394672/60a77d5bEfc33d58b/63ae160db873ce37.png!q70.webp"
							style="width: 64.875px; height: 64.875px; animation: 0.6s linear 0s 1 normal forwards running bigScale130;"
						/>
					</view>
					<image class="rankNum" src="https:https://storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_top_v5.png" />
					<view class="saleInfo">热销500万+件</view>
				</view>
				<view class="rankItemContainer">
					<view class="skuContainer" style="width: 64.875px; height: 64.875px;">
						<image
							class="sku"
							src="https://m.360buyimg.com/n1/jfs/t1/176830/32/930/507148/608519f7Ea27c38fc/bb92b1f409d89f48.png!q70.webp"
							style="width: 64.875px; height: 64.875px; animation: 0.6s linear 0s 1 normal forwards running bigScale130;"
						/>
						
					</view>
					<image class="rankNum" src="https:https://storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_top_v6.png" />
					<view class="saleInfo">热销200万+件</view>
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
	.rankContainer {
	  width: 171.499875px;
	  height: 124.999875px;
	  background-image: url('//storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_rank_list_header_bg_v2.png');
	  background-size: 171.499875px 44.500125px;
	  background-repeat: no-repeat;
	  background-color: #fff;
	  border-radius: 7.999875px;
	  -webkit-border-radius: 7.999875px;
	  -moz-border-radius: 7.999875px;
	  -ms-border-radius: 7.999875px;
	  -o-border-radius: 7.999875px;
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
	  width: 94.000125px;
	  height: 15px;
	  margin-top: 9px;
	  margin-left: 7.5px;
	  font-family: fangsong;
	  font-weight: 800;
	  font-size: 36rpx;
	}
	.rankContainer .itemsContainer {
	  width: 151.000125px;
	  height: 85.999875px;
	  margin-top: 8.500125px;
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
	  margin-left: 7.999875px;
	  margin-right: 12.499875px;
	}
	:root {
	  --clipRightZone: 15px;
	  --fringeTabbarHeight: px75px(100);
	}
	.rankItemContainer {
	  width: 70.000125px;
	  height: 85.999875px;
	  padding-left: 4.999875px;
	  position: relative;
	}
	.rankItemContainer .rankNum {
	  width: 22.000125px;
	  height: 27px;
	  position: absolute;
	  left: 0;
	  top: 0;
	}
	.rankItemContainer .saleInfo {
	  width: 64.999875px;
	  height: 18px;
	  background-color: rgba(255, 55, 16, 0.1);
	  border-radius: 9px;
	  -webkit-border-radius: 9px;
	  -moz-border-radius: 9px;
	  -ms-border-radius: 9px;
	  -o-border-radius: 9px;
	  color: #ff3710;
	  font-size: 10.000125px;
	  font-weight: 500;
	  text-align: center;
	  font-family: PingFangSC;
	  -webkit-line-clamp: 1;
	  -webkit-box-orient: vertical;
	  line-height: 19.000125px;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
	:root {
	  --clipRightZone: 15px;
	  --fringeTabbarHeight: px75px(100);
	}
	.couponContainer {
	  width: 171.499875px;
	  height: 124.999875px;
	  background-image: url('//storage.360buyimg.com/supermarket-bucket/sm_homepage/v3_0/img_feeds_coupon_header_bg_v2.png');
	  background-size: 171.499875px 44.500125px;
	  background-repeat: no-repeat;
	  background-color: #fff;
	  border-radius: 7.999875px;
	  -webkit-border-radius: 7.999875px;
	  -moz-border-radius: 7.999875px;
	  -ms-border-radius: 7.999875px;
	  -o-border-radius: 7.999875px;
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: flex;
	  -webkit-box-orient: vertical;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: column;
	  flex-direction: column;
	}
	.couponContainer .title {
	  width: 61.999875px;
	  height: 15px;
	  margin-top: 9px;
	  margin-left: 7.5px;
	}
	.couponContainer .itemsContainer {
	  width: 157.5px;
	  height: 90px;
	  margin-top: 4.000125px;
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
	  margin-left: 7.000125px;
	  margin-right: 7.000125px;
	}
	:root {
	  --clipRightZone: 15px;
	  --fringeTabbarHeight: px75px(100);
	}
</style>
