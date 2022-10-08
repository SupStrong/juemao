<template>
	<view class="product-con">
		<view class="item-list" style="background-image: url(https://img13.360buyimg.com/ling/jfs/t1/215584/24/20206/12018/62bed306E88fdfdbd/71dc26139a8a1010.png);">
			<!---->
			<view class="product-tit">
				<view class="pt-tit">手机贴膜</view>
				<!---->
			</view>
			<view class="product-box">
				<view class="product-list">
					<view class="pl-img"><img class="pl-pic" src="https://img13.360buyimg.com/ling/jfs/t1/101509/15/29605/172795/629eca1eE8145672a/6efa69fb7a0bc327.jpg" /></view>
					<view class="pl-con">
						<view class="pl-tit">梵帝西诺【两片装-贴坏包赔】黑鲨5/5pro/5RS钢化膜 全玻璃高清防刮手机保护贴膜</view>
						<view class="pl-label"><text class="icon-label label1"></text></view>
						<view class="pl-comment">
							<text class="c-num">98</text>
							<text>条评价</text>
						</view>
						<view class="pl-price jdfont">¥15.9</view>
					</view>
				</view>
				<view class="product-list">
					<view class="pl-img"><img class="pl-pic" src="https://img13.360buyimg.com/ling/jfs/t1/7598/22/16414/111908/62762de8Edace8b4b/186a3ca9f5f45ffa.jpg" /></view>
					<view class="pl-con">
						<view class="pl-tit">梵帝西诺【两片装-贴坏包赔】黑鲨5/5pro/5RS钢化膜 高清全覆盖防刮手机保护贴膜 黑色</view>
						<view class="pl-label"><text class="icon-label label1"></text></view>
						<view class="pl-comment">
							<text class="c-num">98</text>
							<text>条评价</text>
						</view>
						<view class="pl-price jdfont">¥16.9</view>
					</view>
				</view>
				<view class="product-list">
					<view class="pl-img"><img class="pl-pic" src="https://img13.360buyimg.com/ling/jfs/t1/205626/34/21664/411788/626392e3E72c190ea/7684c9e5e79730a9.jpg" /></view>
					<view class="pl-con">
						<view class="pl-tit">HotFire 黑鲨5pro钢化膜 黑鲨5pro游戏手机贴膜 全屏覆盖自动吸附手机玻璃保护膜防摔防刮花</view>
						<view class="pl-label"><text class="icon-label label1"></text></view>
						<view class="pl-comment">
							<text class="c-num">100+</text>
							<text>条评价</text>
						</view>
						<view class="pl-price jdfont">¥19.9</view>
					</view>
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
	
	.product-con .item-list {
	  width: 348rpx;
	  background-repeat: repeat-x;
	  background-position: 100% 0;
	  background-size: 100% 10.67vw;
	  min-height: 78.67vw;
	  margin-bottom: 2.13vw;
	  float: left;
	  background-color: #fff;
	  border-radius: 2.67vw;
	  position: relative
	}
	
	.product-con .item-list .load-bg {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background-color: rgba(0, 0, 0, .7);
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: flex;
	  -webkit-box-align: center;
	  -webkit-align-items: center;
	  align-items: center;
	  -webkit-box-pack: center;
	  -webkit-justify-content: center;
	  justify-content: center;
	  z-index: 99
	}
	
	.product-con .item-list:nth-child(2n) {
	  float: right
	}
	
	.product-con .item-list.special-col {
	  width: 94.67vw;
	  min-height: 56vw
	}
	
	.product-con .item-list.special-col .product-list {
	  float: left
	}
	
	.product-con .item-list.special-col .product-tit .pt-tit {
	  max-width: 70.67vw
	}
	
	.product-con .product-tit {
	  padding: 2.67vw 3.2vw;
	  height: 10.67vw;
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: flex;
	  -webkit-box-pack: justify;
	  -webkit-justify-content: space-between;
	  justify-content: space-between;
	  -webkit-box-align: center;
	  -webkit-align-items: center;
	  align-items: center
	}
	
	.product-con .product-tit .pt-tit {
	  font-size: 3.73vw;
	  color: #1a1a1a;
	  max-width: 100%;
	  word-wrap: normal;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  overflow: hidden;
	  text-align: justify;
	  max-width: 25.33vw
	}
	
	.product-con .product-tit .il-refresh {
	  display: block;
	  font-size: 3.2vw;
	  color: grey
	}
	
	.product-con .product-tit .il-refresh .icon-refresh {
	  display: inline-block;
	  width: 3.47vw;
	  height: 3.47vw;
	  background: url(//img13.360buyimg.com/ling/jfs/t1/188847/9/22802/2024/625771beE5b538d6a/9eae644298ca7a46.png) no-repeat;
	  background-size: 3.47vw auto;
	  margin-right: 1.07vw;
	  vertical-align: middle
	}
	
	.product-con .product-list {
	  padding: 2.13vw;
	  min-height: 13.33vw;
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: flex
	}
	
	.product-con .product-list .pl-img {
	  height: 16.53vw;
	  border-radius: 1.33vw;
	  margin-right: 2.13vw;
	  background-color: #fff;
	  overflow: hidden;
	  -webkit-box-flex: 0;
	  -webkit-flex: 0 0 16.53vw;
	  flex: 0 0 16.53vw
	}
	
	.product-con .product-list .pl-img .pl-pic {
	  display: block;
	  width: 16.53vw;
	  height: 16.53vw
	}
	
	.product-con .product-list .pl-con {
	  width: 24.4vw
	}
	
	.product-con .product-list .pl-con .pl-tit {
	  margin-top: -.53vw;
	  line-height: 4.8vw;
	  font-size: 2.93vw;
	  color: #1a1a1a;
	  overflow: hidden;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	  word-break: break-all;
	  text-overflow: ellipsis;
	  line-height: 3.73vw;
	  max-height: 7.47vw
	}
	
	.product-con .product-list .pl-con .pl-label {
	  height: 4.27vw;
	  line-height: 3.2vw;
	  padding: .53vw 0;
	  overflow: hidden
	}
	
	.product-con .product-list .pl-con .pl-label .icon-label {
	  display: inline-block;
	  height: 3.2vw;
	  margin-right: 1.07vw;
	  background-repeat: no-repeat
	}
	
	.product-con .product-list .pl-con .pl-label .icon-label.label1 {
	  width: 5.87vw;
	  background-image: url(//img11.360buyimg.com/ling/jfs/t1/1607/20/17336/5072/627b83f3Eb14ba928/d020c7dd7e54c5ff.png);
	  background-size: 5.87vw auto
	}
	
	.product-con .product-list .pl-con .pl-label .icon-label.label2 {
	  background-image: url(//img12.360buyimg.com/ling/jfs/t1/146252/35/27320/10585/627b55f8E9b121c8e/06683ff9c14a1936.png)
	}
	
	.product-con .product-list .pl-con .pl-label .icon-label.label3 {
	  width: 11.2vw;
	  background-image: url(//img30.360buyimg.com/ling/jfs/t1/90380/33/28261/8638/627b55f8Edd5596c0/1e1d1e6baddc4ef1.png);
	  background-size: 11.2vw auto
	}
	
	.product-con .product-list .pl-con .pl-label .icon-label.label4 {
	  background-image: url(//img30.360buyimg.com/ling/jfs/t1/63456/29/17735/4625/627b55f9E9536f15d/d774a4393fd536e6.png)
	}
	
	.product-con .product-list .pl-con .pl-label .icon-label.label2,
	.product-con .product-list .pl-con .pl-label .icon-label.label4 {
	  width: 10.4vw;
	  background-size: 10.4vw auto
	}
	
	.product-con .product-list .pl-con .pl-comment {
	  height: 3.2vw;
	  line-height: 3.2vw;
	  font-size: 2.13vw;
	  color: grey
	}	
	
	.product-con .product-list .pl-con .pl-price {
	  line-height: 4.8vw;
	  font-size: 3.47vw;
	  color: #fa2c19
	}

</style>
