<template>
	<view>
		<view class="bg-white margin-bottom-sm list-radius padding-sm recommend-list-box">
			<view class="flex flex-wrap">
				<view class="basis-xs text-right">
					<image class="img-aat" src="https://aliyun-wb-bvqq7ezi1t.oss-cn-beijing.aliyuncs.com/aat.png" lazy-load mode="widthFix"/>
				</view>
				<view class="basis-lg text-center">
					<text class="text-black text-bold">您可能感兴趣</text>
				</view>
				<view class="basis-xs text-left">
					<image class="img-aat" src="https://aliyun-wb-bvqq7ezi1t.oss-cn-beijing.aliyuncs.com/aat.png" lazy-load mode="widthFix"/>
				</view>
			</view>
			<view class="grid col-2 text-center margin-top-sm">
				<block v-for="(item,index) in listData" :key="index" v-if="listData.length< 5">
					<view class="padding-xs" @tap="listTap(item,index)">
						<view class="img-goods" :style="[{backgroundImage:'url('+ item.img +')'}]"/>
						<view class="text-black text-sm margin-top-xs">{{item.title}}</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData:[
					{
						img:'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
						title:'商品标题'
					},{
						img:'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
						title:'商品标题'
					},{
						img:'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
						title:'商品标题'
					},{
						img:'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
						title:'商品标题'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.flex{
		display: flex;	
	} 
	.flex-wrap{
		flex-wrap: wrap;
		align-items: center;
	}
	.basis-xs {
		flex-basis:20%;
	}
	.basis-lg {
		flex-basis:60%;
	}
	.text-left {
		text-align: left;
	}
	.text-center {
		text-align: center;
	}
	.text-right {
		text-align: right;
	}
	.padding-xs{
		width: 50%;
		display: inline-block;
	}
	.text-bold{
		font-weight: bold;
	}
.recommend-list-box {
	    flex: 1;
	    width: 342rpx;
	    justify-content: center;
	    align-items: center;
	    float: left;
	    display: inline-block;
	    background-color: white;
	    border-radius: 16rpx;
		padding: 20rpx 0;
	.img-aat {
		width: 55rpx;
		margin-top: 10rpx;
	}
	.img-goods {
		font-variant: small-caps;
		margin: 0;
		padding: 0;
		display: inline-flex;
		text-align: center;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		white-space: nowrap;
		position: relative;
		width: 137rpx;
		height: 137rpx;
		background-size: cover;
		background-position: center;
		vertical-align: middle;
		border-radius: 12%;
	}
}
</style>
