<template>
	<view class="bg-white margin padding-sm radius zaiui-activity">
		<view class="cu-list grid col-2">
			<view class="cu-item">
				<view class="grid col-2">
					<image class="width-img" style="height: 266rpx!important;" src="https://tnuiimage.tnkjapp.com/shop/cup1.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="cu-item">
				<view class="grid col-2">
					<view class="padding-left-sm" v-for="(item,index) in list_data" :key="index" v-if="index < 2" @tap="listTap(item,index)">
						<view class="text-black text-bold text-left">{{item.title}}</view>
						<view class="text-orange text-sm text-left">{{item.text}}</view>
						<view class="margin-tb-sm">
							<image class="width-img" :src="item.img" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="grid col-2 padding-right-sm margin-top-sm">
					<view class="padding-lr-xs" v-for="(item,index) in list_data" :key="index" v-if="index >= 2 && index < 4" @tap="listTap(item,index)">
						<view class="text-black text-bold text-left ">{{item.title}}</view>
						<view class="margin-top-sm">
							<image class="width-img" :src="item.img" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="grid col-2 margin-top-sm">
					<view class="padding-left-sm" v-for="(item,index) in list_data" :key="index" v-if="index >= 4 && index < 6" @tap="listTap(item,index)">
						<view class="text-black text-bold text-left ">{{item.title}}</view>
						<view class="margin-top-sm">
							<image class="width-img" :src="item.img" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'activity-list',
		
		data() {
			return {
				list_data:[
					{
						title:'转转社区',
						text:'发现有趣',
						img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png'
					},
					{
						title:'转转社区',
						text:'发现有趣',
						img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png'
					},
					{
						title:'转转社区',
						text:'发现有趣',
						img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png'
					},
					{
						title:'转转社区',
						text:'发现有趣',
						img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png'
					},{
						title:'转转社区',
						text:'发现有趣',
						img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png'
					},
					{
						title:'转转社区',
						text:'发现有趣',
						img:'https://demo26.crmeb.net/uploads/attach/2021/11/20211113/small_2fbe723632427b0768df24c4f23c6cad.png'
					}
				]
			}
		},
		props: {
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	@import url('css/nav7.css');
	.zaiui-activity {
		.cu-list.grid>.cu-item {
			padding: 0;
			.cu-btn {
				text{
					color: #FFFFFF;
					font-size: 26rpx;
					margin: 0;
					width: auto;
				}
				.text {
					margin-left: 10rpx;
				}
			}
			image {
				width: 100%;
			}
			&::after {
				top: 0;
				left: 0;
				width: 200%;
				height: 200%;
				content: " ";
				position: absolute;
				transform: scale(.5);
				transform-origin: 0 0;
				pointer-events: none;
				box-sizing: border-box;
				border-radius: inherit;
			}
			&:nth-of-type(1) {
				&::after {
					border-right: 2rpx solid rgba(0, 0, 0, .1);
					border-bottom: 2rpx solid rgba(0, 0, 0, .1);
				}
			}
			&:nth-of-type(2) {
				&::after {
					border-right: 0;
					border-bottom: 2rpx solid rgba(0, 0, 0, .1);
				}
			}
			&:nth-of-type(3) {
				&::after {
					border-right: 2rpx solid rgba(0, 0, 0, .1);
					border-bottom: 0;
				}
			}
			&:nth-of-type(4) {
				&::after {
					border-right: 0;
					border-bottom: 0;
				}
			}
		}
	}
</style>
