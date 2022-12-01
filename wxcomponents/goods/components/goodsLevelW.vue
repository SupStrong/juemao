<template>
	<view class="product__item">
		<view class="item__image">
			<tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage" :index="item.id" imgMode="widthFix"></tn-lazy-load>
		</view>
		<view class="item__data">
			<view class="item__title-container">
				<view v-if="item.storeType === 1" class="item__store-type tn-cool-bg-color-1">自营</view>
				<text class="item__title">{{ item.title }}</text>
			</view>
			<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
				<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
			</view>
			<view class="item__price-container">
				<text class="item__price--unit">￥</text>
				<text class="item__price--integer">{{ item.priceInteger }}</text>
				<text class="item__price--dot">.</text>
				<text class="item__price--decimal">{{ item.priceDecimal }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	 props: {
	    item: {
	      type: Object
	    },
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	/* 标题 end */
	
	.product__item {
		background-color: #ffffff;
		border-radius: 10rpx;
		overflow: hidden;
		// margin: 0 10rpx;
		margin-bottom: 20rpx;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		width: 342rpx;
		.item {
			/* 图片 start */
			&__image {
				width: 100%;
				height: auto;
				background-color: #ffffff;
			}
			/* 图片 end */
	
			/* 内容 start */
			&__data {
				padding: 8rpx 14rpx;
			}
	
			/* 标题 start */
			&__title-container {
				text-align: justify;
				line-height: 38rpx;
				vertical-align: middle;
			}
			&__store-type {
				height: 28rpx;
				font-size: 20rpx;
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 0 4rpx;
				border-radius: 6rpx;
				white-space: nowrap;
				text-align: center;
				top: -2rpx;
				margin-right: 6rpx;
			}
			&__title {
			}
			/* 标题 end */
	
			/* 标签 start */
			&__tags-container {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: flex-start;
			}
			&__tag {
				margin: 10rpx;
				color: #e83a30;
				border: 2rpx solid #e83a30;
				padding: 0 6rpx;
				border-radius: 10rpx;
				font-size: 20rpx;
	
				&:first-child {
					margin-left: 0rpx !important;
				}
			}
			/* 标签 end */
	
			/* 价格 start */
			&__price-container {
				font-size: 24rpx;
				color: #e83a30;
				font-weight: bold;
			}
			&__price {
				&--unit {
				}
				&--integer {
					font-size: 38rpx;
				}
				&--decimal {
				}
			}
			/* 价格 end */
			/* 内容 end */
		}
	}
</style>
