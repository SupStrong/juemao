<template>
	<view class="buy_area">
		<view id="giftPromotionFloor" style="" class="gift_promotion_floor">
			<view class="gift_promotion_floor_bg">
				<view class="gift_promotion_left">
					<text class="gift_priceDom">¥</text>
					<text class="gift_priceText">10</text>
				</view>
				<view class="gift_promotion_right">
					<text class="top_text">首购礼金</text>
					<text class="bottom_text">店铺新客限时优惠，限享一次</text>
				</view>
			</view>
		</view>
		<view id="favShopGuideContainer">
			<view class="fav_shop_bar" id="favShopGuide">
				<i></i>
				关注
				<text id="shopName">little freddie小皮海外有机京东自营旗舰店</text>
				，立享粉丝价，
				<text id="shopFav1">立即关注</text>
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
	
	.gift_promotion_floor {
		margin: 12px 18px;
	}
	.gift_promotion_floor_bg {
		align-items: center;
		background: url(https://img12.360buyimg.com/img/s678x96_jfs/t1/155590/6/21928/31809/61a721d4E716e8c0a/12780c2967e6340b.png) no-repeat;
		background-size: 100% 48px;
		color: #fff;
		display: flex;
		height: 48px;
		width: 100%;
	}
	.gift_promotion_floor_bg .gift_promotion_left {
		background: linear-gradient(#fe404f, #fa2c1b);
		border-radius: 12px 50px 50px 12px;
		height: 44px;
		line-height: 44px;
		margin: 2px 8px 2px 2px;
		padding: 0 14px 0 12px;
	}
	.gift_promotion_floor_bg .gift_promotion_left .gift_priceDom {
		font-family: JDZhengHei-01;
		font-size: 18px;
	}
	.gift_promotion_floor_bg .gift_promotion_left .gift_priceText {
		font-family: JDZhengHei-01;
		font-size: 32px;
	}
	.gift_promotion_floor_bg .gift_promotion_right {
		display: flex;
		flex-direction: column;
	}
	.gift_promotion_floor_bg .gift_promotion_right .top_text {
		font-size: 14px;
		font-weight: 700;
	}
	.gift_promotion_floor_bg .gift_promotion_right .bottom_text {
		font-size: 12px;
	}
	
	.buy_area .fav_shop_bar {
		background-color: #eff1f3;
		border-radius: 6px;
		color: #666;
		font-size: 12px;
		line-height: 21px;
		margin: 10px 18px;
		padding: 7px 10px;
		position: relative;
	}
	.buy_area .fav_shop_bar i {
		border-bottom: 5px solid #efefef;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		display: block;
		left: 40%;
		position: absolute;
		top: -5px;
	}
	.buy_area .fav_shop_bar text {
		color: #f2270c;
		display: inline-block;
	}
</style>
