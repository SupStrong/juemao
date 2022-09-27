<template>
	<view :style="{padding:'0 20rpx'}">
		<view class="barg borderRadius15" style="background: linear-gradient(180deg, #FDDBB2 0%, #FDEFC6 100%);margin-top:0px;">
				<view class="title" :style="'color:#FF6000;'">
					砍价专区·BARGAINING
				</view>
				<view class="barg-swiper">
					<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" show-scrollbar="true">
						<view class="wrapper">
							<block v-for="(item,index) in bargList" :key="index">
								<view class='list-box' :style="'margin-right:20rpx;'" @click="bargDetail(item)">
									<image :src="item.image" mode="aspectFill" class="slide-image"></image>
									<view class="info-txt">
										<view class="price" style="color:#E93323;">￥{{item.price}}</view>
										<view class="txt" style="background-color:#E93323;">立即砍价</view>
									</view>
								</view>
							</block>
							<navigator url="/pages/activity/goods_bargain/index" class="more-box" hover-class="none">
								<view class="txt">查看更多</view>
								<image src="/static/images/mores.png"></image>
							</navigator>
						</view>
					</scroll-view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		name: 'bargain',
		props: {
			dataConfig: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				bargList: [
					{
						image:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
						price:'120'
					},{
						image:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
						price:'120'
					},{
						image:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
						price:'120'
					},{
						image:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
						price:'120'
					}
				],
			};
		},
		created() {},
		mounted() {
		},
		methods: {
			bargDetail(item){
			    this.$emit('changeBarg', item);
			}
		}
	}
</script>

<style lang="scss">
	.borderRadius15{
		border-radius: 15rpx;
	}
	.barg {
		padding-bottom: 32rpx;
		padding-left: 20rpx;
		background:linear-gradient(180deg,rgba(253,219,178,1) 0%,rgba(253,239,198,1) 100%);
		background-size: 100% 100%;
		box-sizing: border-box;
		
		.title {
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 42rpx;
			font-size: 38rpx;
			color: #FF6000;
			font-weight: bold;
	
			image {
				width: 463rpx;
				height: 39rpx;
			}
		}
	
		.barg-swiper {
			margin-top: 43rpx;
			padding-right: 20rpx;
	
			.wrapper {
				display: flex;
			}
	
			.list-box {
				flex-shrink: 0;
				width: 210rpx;
				background-color: #fff;
				border-radius: 16rpx;
				overflow: hidden;
				margin-right: 20rpx;
	
				image {
					width: 100%;
					height: 210rpx;
				}
	
				.info-txt {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding-top: 4rpx;
					padding-bottom: 18rpx;
	
					.price {
						font-weight: 700;
						color: #FF6000;
						font-size: 28rpx;
						text{
							font-size: 18rpx;
						}
					}
	
					.txt {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 136rpx;
						height: 33rpx;
						margin-top: 10rpx;
						border-radius: 17px;
						font-size: 18rpx;
						color: #fff;
	
					}
				}
			}
	
			.more-box {
				flex-shrink: 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 80rpx;
				background-color: #fff;
				border-radius: 16rpx;
	
				image {
					width: 24rpx;
					height: 24rpx;
					margin-top: 10rpx;
				}
	
				.txt {
					display: block;
					writing-mode: vertical-lr;
					font-size: 26rpx;
					line-height: 1.2;
				}
			}
		}
	}
</style>
