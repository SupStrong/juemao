<template>
	<view class="index-product-wrapper" style="margin-top:0px;">
		<view class="nav-bd" style="justify-content:flex-end;">
			<view class="item" v-for="(item,index) in explosiveMoney" :index="index" @click="ProductNavTab(index)">
				<view class="txt" :style="{ 'color': index==ProductNavindex ? themeColor : '' }">{{item.name}}</view>
				<view class="label"  :style="{ 'background': index==ProductNavindex ? themeColor : '','color': index==ProductNavindex ? '#fff' : '' }">{{item.detail}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'promotionList',
		props: {
			dataConfig: {
				type: Object,
				default: () => {}
			},
			iSshowH: {
				type: Boolean,
				default: false
			},
			isSortType:{
				type: String | Number,
				default:0
			}
		},
		data() {
			return {
				ProductNavindex:0,
				explosiveMoney:[
					{
						name:'首发新品',
						detail:'最新出炉',
					},{
						name:'精品推荐',
						detail:'猜你喜欢',
					},{
						name:'热门榜单',
						detail:'好评如云',
					},{
						name:'促销单品',
						detail:'多买多销',
					}
				],
				themeColor:'#1db0fc'
			};
		},
		created() {
		},
		methods: {
			// 首发新品切换
			ProductNavTab(index) {
				this.ProductNavindex = index;
			},
			goDetail(item){
				this.$emit('detail',item);
			}
		}
	}
</script>

<style lang="scss">
	.index-product-wrapper {
		margin: 30rpx 20rpx 0 20rpx;

		&.on {
			min-height: 1500rpx;
		}

		.nav-bd {
			display: flex;
			align-items: center;
			margin-top: 30rpx;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 25%;
				
				&.on{
					border-radius: 0;
				}

				.txt {
					font-size: 32rpx;
					color: #282828;
				}

				.label {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 124rpx;
					height: 32rpx;
					margin-top: 5rpx;
					font-size: 24rpx;
					color: #999;
					border-radius: 16rpx;
				}
			}
		}

		.list-box {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 30rpx;

			.item {
				width: 345rpx;
				margin-bottom: 20rpx;
				background-color: #fff;
				border-radius: 20rpx;
				overflow: hidden;
				position: relative;

				.pictrue_log {
					width: 92rpx;
					height: 44rpx;
					font-size: 26rpx;
					line-height: 44rpx;
				}

				image {
					width: 100%;
					height: 346rpx;
					display: block;
				}

				.text-info {
					padding: 10rpx 20rpx 15rpx;

					.title {
						color: #222222;
					}

					.old-price {
						margin-top: 4rpx;
						font-size: 26rpx;
						color: #AAAAAA;
						text-decoration: line-through;

						text {
							margin-right: 2px;
							font-size: 20rpx;
						}
					}

					.price {
						display: flex;
						align-items: flex-end;
						font-size: 36rpx;
						font-weight: 550;

						text {
							padding-bottom: 4rpx;
							font-size: 26rpx;
							font-weight: normal;
						}

						.txt {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 28rpx;
							height: 28rpx;
							margin-left: 15rpx;
							margin-bottom: 10rpx;
							border-radius: 4rpx;
							font-size: 20rpx;
							font-weight: normal;
							&.on{
								margin-left: 0;
							}
						}
					}
				}
			}

			&.on {
				display: flex;
			}
		}
	}
</style>
