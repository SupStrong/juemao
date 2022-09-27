<template>
	<view class="bg-white margin radius">
		<view class="grid col-4 padding zaiui-sell-quickly-box">
			<view class="live-box">
				<view class="text-black text-lg text-bold">省心快卖</view>
				<view class="cu-tag bg-red round text-center margin-tb-xs">
					<text>立即开卖</text>
					<text class="cuIcon-right text-xs"></text>
				</view>
				<!--赚钱滚动信息-->
				<view class="user-list-box">
					<swiper class="swiper" disable-touch :touchable="false" autoplay circular vertical 
					previous-margin="23.5rpx" next-margin="23.5rpx" interval="1000" :current="indexs" @animationfinish="earnSwiper">
						<swiper-item v-for="(item,index) in ListData.swiper" :key="index">
							<view class="swiper-padding">
								<view class="flex flex-wrap swiper-item" :class="index == indexs?'show':''">
									<view class="basis-xs">
										<image class="img" :src="item.img" mode="widthFix"/>
									</view>
									<view class="basis-xl text-cut">
										<text class="text-xs">{{item.text}}</text>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<block v-for="(item,index) in ListData.list" :key="index" v-if="index < 3">
				<view class="live-box text-center zaiui-sell-quickly-list" @tap="listTap(item,index)">
					<image class="img" :src="item.img" mode="widthFix"/>
					<view class="text-black">{{item.title}}</view>
					<view class="text-xs text-gray text-cut">{{item.text}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'sell-quickly-list',
		data() {
			return {
				ListData: { 
					swiper: [
						{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							text:'xx赚了20元'
						},{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							text:'xx赚了20元'
						},{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							text:'xx赚了20元'
						},{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							text:'xx赚了20元'
						}
					], 
					list: [
						{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							title:'最新活动',
							text:'优惠到家'
						},{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							title:'最新资讯',
							text:'最新的资讯'
						},{
							img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png',
							title:'扫码识别',
							text:'好产品'
						}
					] ,
				},
			    indexs: 0,
			};
		},
		props: {
		},
		methods: {
			earnSwiper(e) {
				this.indexs = e.detail.current;
			},
			listTap(data,index) {
				this.$emit('listTap', {
					data,
					index
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url('css/nav7.css');
	.zaiui-sell-quickly-box {
		.live-box {
			position: relative;
			.flex-wrap {
				background-color: #FAFAFA;
				border-radius: 16rpx 16rpx;
				.basis-xs {
					flex-basis: 30%;
					width: 30%;
					.img {
						width: 100%;
						border-radius: 25%;
					}
				}
				.basis-xl {
					flex-basis: 70%;
					width: 70%;
				}
			}
		}
		.user-list-box {
			.swiper {
				height: 92rpx;
				swiper-item {
					height: 46rpx !important;
					.swiper-padding {
						padding: 4rpx 0;
					}
					.swiper-item {
						border-radius: 37rpx 37rpx;
						opacity: .5;
						transition: opacity .2s;
						.img {
							width: 37rpx !important;
							border-radius: 100% !important;
						}
						.basis-xs {
							flex-basis: 24%;
							width: 24%;
						}
						.basis-xl {
							line-height: 37rpx;
							flex-basis: 76%;
							width: 76%;
							text {
								color: #838383;
								margin-left: 6rpx;
							}
						}
					}
					.swiper-item.show {
						opacity: 1;
						transition: opacity .2s;
					}
				}
			}
		}
		.zaiui-sell-quickly-list {
			.img {
				width: 101rpx;
			}
		}
	}
</style>
