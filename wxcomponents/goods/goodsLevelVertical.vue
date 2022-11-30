<template>
	<view class="goods-all">
		<view class="goods-list" style="position: relative;padding: 0 16rpx;display: flow-root;">
			<tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
				<template v-slot:left="{ leftList }">
					<goodsLevelA />
					<goodsLevelB />
					<goodsLevelC />
					<goodsLevelD />
					<goodsLevelE />
					<goodsLevelF />
					<goodsLevelG />
					<goodsLevelH />
					<goodsLevelI />
					<goodsLevelJ />
					<goodsLevelK />
					
					<goodsLevelL />
					<goodsLevelM />
					<goodsLeveLN />
					<goodsLevelO />
					<goodsLevelP />
					<goodsLevelQ />
					<goodsLevelR />
					<goodsLevelS />
					<goodsLevelT />
					<!-- <view v-for="(item, index) in leftList" :key="item.id" class="product__item">
						<view class="item__image"><tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage" :index="item.id" imgMode="widthFix"></tn-lazy-load></view>
						<view class="item__data">
							<view class="item__title-container">
								<view v-if="item.newProduct" class="item__store-type tn-cool-bg-color-8">图鸟社区</view>
								<view v-else-if="item.storeType === 1" class="item__store-type tn-cool-bg-color-1">自营</view>
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
					</view> -->
				</template>
				<template v-slot:right="{ rightList }">
					<view class="goods-list" style="position: relative;display: flow-root;">
						<view v-for="(item, index) in rightList" :key="item.id" class="product__item">
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
					</view>
				</template>
			</tn-waterfall>
		</view>
	</view>
</template>

<script>
import goodsLevelA from '@/wxcomponents/goods/components/goodsLevelA.vue';
import goodsLevelB from '@/wxcomponents/goods/components/goodsLevelB.vue';
import goodsLevelC from '@/wxcomponents/goods/components/goodsLevelC.vue';
import goodsLevelD from '@/wxcomponents/goods/components/goodsLevelD.vue';
import goodsLevelE from '@/wxcomponents/goods/components/goodsLevelE.vue';
import goodsLevelF from '@/wxcomponents/goods/components/goodsLevelF.vue';
import goodsLevelG from '@/wxcomponents/goods/components/goodsLevelG.vue';
import goodsLevelH from '@/wxcomponents/goods/components/goodsLevelH.vue';
import goodsLevelI from '@/wxcomponents/goods/components/goodsLevelI.vue';
import goodsLevelJ from '@/wxcomponents/goods/components/goodsLevelJ.vue';
import goodsLevelK from '@/wxcomponents/goods/components/goodsLevelK.vue';
import goodsLevelL from '@/wxcomponents/goods/components/goodsLevelL.vue';
import goodsLevelM from '@/wxcomponents/goods/components/goodsLevelM.vue';
import goodsLevelN from '@/wxcomponents/goods/components/goodsLevelN.vue';
import goodsLevelO from '@/wxcomponents/goods/components/goodsLevelO.vue';
import goodsLevelP from '@/wxcomponents/goods/components/goodsLevelP.vue';
import goodsLevelQ from '@/wxcomponents/goods/components/goodsLevelQ.vue';
import goodsLevelR from '@/wxcomponents/goods/components/goodsLevelR.vue';
import goodsLevelS from '@/wxcomponents/goods/components/goodsLevelS.vue';
import goodsLevelT from '@/wxcomponents/goods/components/goodsLevelT.vue';
export default {
	data() {
		return {
			list: [],
			loadStatus: 'loadmore',
			data: [
				{
					title: '图鸟科技 设计师专属笔记本 告别卡慢热',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer1.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: true, // 是否为新品
					tags: ['满1000减80', '免息'],
					price: 6999
				},
				{
					title: '图鸟科技 开发便携笔记本 告别笨重外出',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: ['免息'],
					price: 7999
				},
				{
					title: '图鸟科技 T10 宇宙9000 10G全网通',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: true, // 是否为新品
					tags: [],
					price: 4999
				},
				{
					title: '图鸟科技 T10Pro 宇宙9010 10G全网通',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: true, // 是否为新品
					tags: [],
					price: 6999
				},
				{
					title: '图鸟科技 运动手表 不用插卡即可通话',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: [],
					price: 2999
				},
				{
					title: '图鸟科技 页面设计 专为第三方提供精美酷炫页面',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
					storeType: 2, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: ['酷炫'],
					price: 10999
				},
				{
					title: '图鸟科技 海报设计 想不到就过来聊聊吧',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
					storeType: 2, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: ['哎呀'],
					price: 399
				},
				{
					title: '图鸟科技 环保袋',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/bag1.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: ['合作免费送'],
					price: 0
				},
				{
					title: '图鸟科技 纸杯',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/cup2.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: ['合作免费送'],
					price: 0
				},
				{
					title: '图鸟科技 抱枕',
					mainImage: 'https://tnuiimage.tnkjapp.com/shop/pillow.jpg',
					storeType: 1, // 1 自营 2 第三方店铺
					newProduct: false, // 是否为新品
					tags: [],
					price: 99
				}
			]
		};
	},
	components: {
		goodsLevelA,
		goodsLevelB,
		goodsLevelC,
		goodsLevelD,
		goodsLevelE,
		goodsLevelF,
		goodsLevelG,
		goodsLevelH,
		goodsLevelI,
		goodsLevelJ,
		goodsLevelK,
		goodsLevelL,
		goodsLevelM,
		goodsLevelN,
		goodsLevelO,
		goodsLevelP,
		goodsLevelQ,
		goodsLevelR,
		goodsLevelS,
		goodsLevelT
	},
	onReachBottom() {
		this.getRandomData();
	},
	mounted() {
		this.getRandomData();
	},
	methods: {
		getPrice(price) {
			const priceStr = String(price);
			if (priceStr.indexOf('.') !== -1) {
				return priceStr.split('.');
			} else {
				return [priceStr, '00'];
			}
		},
		getRandomData() {
			this.loadStatus = 'loading';
			for (let i = 0; i < 10; i++) {
				let index = this.$t.number.randomInt(0, this.data.length - 1);
				let item = JSON.parse(JSON.stringify(this.data[index]));
				let price = this.getPrice(item.price);
				item.id = this.$t.uuid();
				item.priceInteger = price[0];
				item.priceDecimal = price[1];
				this.list.push(item);
				console.log(this.list, '1234567');
			}
		},
		// 瀑布流加载完毕事件
		handleWaterFallFinish() {
			this.loadStatus = 'loadmore';
		}
	}
};
</script>

<style lang="scss" scoped>
.goods-all {
	height: 100vh;
	overflow: scroll;
	background-color: red;
}
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
.goods-list > *:nth-child(1) {
	margin-right: 20rpx;
}
/deep/ #tn-waterfall-right{
	margin-right: 2rpx;
}
</style>
