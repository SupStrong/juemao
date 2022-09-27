<template>
	<view>
		<view class="group-wrapper borderRadius20" style="background:#fff;margin:0 10px;margin-top:12px;">
			<view class="hd">
				<view class="left">
					<image src="https://qiniu.crmeb.net/attach/2021/11/238c5202111181433515309.gif" mode=""  class="icon"></image>
					
					<view class="name">拼团活动</view>
					<view class="person">
						<view class="avatar-box">
							<block v-for="(item,index) in pinkInfo.avatars" :key="index">
								<image :src="item" mode=""></image>
							</block>
						</view>
						<view class="num" v-if="pinkInfo.pink_count>0">2人拼团成功</view>
					</view>
				</view>
				<navigator class="more" url="/pages/activity/goods_combination/index" hover-class="none">更多<text class="iconfont icon-jiantou"></text></navigator>
			</view>
			<view class="group-scroll">
				<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" show-scrollbar="false">
					<navigator class="group-item" style="margin-right:10px;" v-for="(item,index) in combinationList" :key="index"
					 :url="'/pages/activity/goods_combination_details/index?id='+item.id" hover-class="none">
						<image :src="item.image" mode="aspectFill"></image>
						<view class="people">2人团</view>
						<view class="info">
							<view class="name line1">{{item.title}}</view>
							<view class="price-box">
								<text class="price" style="color:rgba(29,176,252,1);">￥900</text>
							</view>
						</view>
						<view class="bom-btn" style="background-color:rgba(29,176,252,1);">参与拼团</view>
					</navigator>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'combination',
		data() {
			return {
				pinkInfo: '',
				combinationList: [
					{
						image:'https://demo26.crmeb.net/uploads/attach/2022/01/20220128/small_e2fd950c316c7ded99baa5772e5488eb.png',
						people:'3',
						title:'诺米家居 矿石博览馆系列藤条香氛无火香薰精油卧室助眠除臭 纯洁100ml',
						price:'120'
					},
					{
						image:'https://demo26.crmeb.net/uploads/attach/2022/01/20220128/small_e2fd950c316c7ded99baa5772e5488eb.png',
						people:'3',
						title:'诺米家居 矿石博览馆系列藤条香氛无火香薰精油卧室助眠除臭 纯洁100ml',
						price:'120'
					},
					{
						image:'https://demo26.crmeb.net/uploads/attach/2022/01/20220128/small_e2fd950c316c7ded99baa5772e5488eb.png',
						people:'3',
						title:'诺米家居 矿石博览馆系列藤条香氛无火香薰精油卧室助眠除臭 纯洁100ml',
						price:'120'
					}
				]
			};
		},
		created() {
		},
		mounted() {
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.line1{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.group-wrapper {
		padding: 20rpx 20rpx 26rpx 20rpx;
		background: #fff;

		.hd {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;
				.name{
					font-size: 32rpx;
					font-weight: 600;
				}

				.icon {
					width: 36rpx;
					height: 36rpx;
					margin-right: 12rpx;
				}

				.title {
					width: 134rpx;
					height: 33rpx;
				}

				.person {
					display: flex;
					align-items: center;
					margin-left: 40rpx;

					.avatar-box {
						display: flex;
						align-items: center;

						image {
							width: 30rpx;
							height: 30rpx;
							border-radius: 50%;
							margin-right: -10rpx;
						}
					}

					.num {
						margin-left: 18rpx;
						font-size: 26rpx;
						color: #999999;
					}
				}
			}

			.more {
				font-size: 26rpx;
				color: #999;

				.iconfont {
					margin-left: 6rpx;
					font-size: 25rpx;
				}
			}
		}

		.group-scroll {
			width: 100%;
			margin-top: 25rpx;

			.group-item {
				display: inline-block;
				width: 220rpx;
				box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.03);
				border-radius: 16rpx;
				position: relative;
				background-color: #fff;

				.people {
					position: absolute;
					width: 140rpx;
					height: 32rpx;
					background: rgba(0, 0, 0, 0.1);
					box-shadow: 2rpx 2rpx 8rpx 0 rgba(0, 0, 0, 0.06);
					border-radius: 16rpx;
					top: 12rpx;
					left: 12rpx;
					font-size: 20rpx;
					color: #fff;
					text-align: center;
					line-height: 32rpx;
				}

				image {
					width: 100%;
					height: 220rpx;
					border-radius: 16rpx 16rpx 0 0;
				}

				.info {
					padding: 2rpx 12rpx 10rpx 12rpx;

					.name {
						font-size: 24rpx;
					}

					.price-box {
						display: flex;
						align-items: center;
						margin-top: 6rpx;

						.tips {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 76rpx;
							height: 30rpx;
							margin-right: 6rpx;
							border-radius: 2px;
							font-size: 18rpx;
						}

						.price {
							font-size: 28rpx;
							font-weight: 700;

							text {
								font-size: 18rpx;
							}
						}
					}

				}

				.bom-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 48rpx;
					border-radius: 0px 0px 16rpx 16rpx;
					color: #fff;
					font-size: 24rpx;

				}
			}
		}
	}
</style>
