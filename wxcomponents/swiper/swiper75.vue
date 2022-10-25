<template>
	<view>
		<view class="bab_opt_mod bab_opt_mod_1_8 module_73406257 ranking_list">
			<view class="content_rank_module">
				<a
					class="content_rank_wrap expo"
					style="background-image:url('https://m.360buyimg.com/babel/jfs/t1/156789/27/17789/38967/605c3919Ee7022487/b974697c96ecea57.jpg')"
				>
					<view class="content_rank_type" style="color:#232326;text-align:center">达人精选榜</view>
					<view class="content_rank_title" style="color:#333333">在家观影更顺畅的大屏电视精选</view>
					<view class="content_rank_detail">
						<view target="_self" class="content_rank_product">
							<view class="content_rank_pic">
								<image
									class="lazyload-img bg lazyload-img-wm fadein"
									src="//m11.360buyimg.com/babel/jfs/t1/171246/11/31125/132385/63512454E8c1530b6/407242f967acf8aa.jpg"
									style="background-color: transparent; background-image: none;"
								/>
							</view>
							<view class="content_rank_badget tip-first" style="color:#ffffff">1</view>
							<view class="content_rank_name">卡萨帝（Casarte）银河系列K55E10 55英寸超薄4K超高清声控智慧屏雅马哈音响平板影院电视4+64G以旧换新</view>
						</view>
						<view target="_self" class="content_rank_product">
							<view class="content_rank_pic">
								<image
									class="lazyload-img bg lazyload-img-wm fadein"
									src="//m11.360buyimg.com/babel/jfs/t1/165331/2/29581/149560/63522db8E6cd9f534/1ecee6998dec97f7.jpg"
									style="background-color: transparent; background-image: none;"
								/>
							</view>
							<view class="content_rank_badget tip-second" style="color:#ffffff">2</view>
							<view class="content_rank_name">SHARP 【新品】夏普 70英寸电视 4K超清 远场语音智能WIFI液晶平板电视机 70英寸 官方标配</view>
						</view>
						<view target="_self" class="content_rank_product">
							<view class="content_rank_pic">
								<image
									class="lazyload-img bg lazyload-img-wm fadein"
									src="//m11.360buyimg.com/babel/jfs/t1/211286/40/26911/60554/634d4a95Ebbf51d21/840f1904570c9338.jpg"
									style="background-color: transparent; background-image: none;"
								/>
							</view>
							<view class="content_rank_badget tip-third" style="color:#ffffff">3</view>
							<view class="content_rank_name">华为智慧屏 S Pro 75英寸 120Hz超薄全面屏 3GB+32GB鸿蒙HarmonyOS AI摄像头4K超高清液晶游戏电视机HD75KANS</view>
						</view>
					</view>
					<view class="content_rank_desc"></view>
				</a>
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
	
	.content_rank_module * {
		box-sizing: content-box;
	}
	.content_rank_module .content_rank_wrap {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #333;
		display: block;
		line-height: 1.4;
		padding: 15px 15px 0;
	}
	.content_rank_module .content_rank_type {
		color: #232326;
		font-size: 14px;
		letter-spacing: 5px;
		margin-bottom: 4px;
		overflow: hidden;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.content_rank_module .content_rank_title {
		color: #333;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 3px;
		line-height: 16px;
		overflow: hidden;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.content_rank_module .content_rank_detail {
		background: #fff;
		margin-top: 14px;
		overflow: hidden;
		padding: 15px 10px;
	}
	.content_rank_module .content_rank_detail .content_rank_product {
		box-sizing: border-box;
		float: left;
		padding: 0 7px;
		position: relative;
		text-align: center;
		width: 33.3%;
	}
	.content_rank_module .content_rank_detail .content_rank_product .content_rank_badget {
		background-image: url(//storage11.360buyimg.com/tower/babelnode/static/media/rank_notop3.bbecb6e8.png);
		background-repeat: no-repeat;
		background-size: 100%;
		color: #fff;
		font-size: 10px;
		font-weight: 700;
		height: 28px;
		left: 0;
		line-height: 21px;
		position: absolute;
		top: -5px;
		width: 28px;
	}
	.content_rank_module .content_rank_detail .content_rank_product .content_rank_badget.tip-first {
		background-image: url(//storage11.360buyimg.com/tower/babelnode/static/media/rank_top3_1.0c4a14a0.png);
	}
	.content_rank_module .content_rank_detail .content_rank_product .content_rank_badget.tip-second {
		background-image: url(//storage11.360buyimg.com/tower/babelnode/static/media/rank_top3_2.fe4431aa.png);
	}
	.content_rank_module .content_rank_detail .content_rank_product .content_rank_badget.tip-third {
		background-image: url(//storage11.360buyimg.com/tower/babelnode/static/media/rank_top3_3.bdf9f12d.png);
	}
	.content_rank_module .content_rank_detail .content_rank_product .content_rank_pic {
		position: relative;
	}
	.content_rank_module .content_rank_detail .content_rank_product .content_rank_pic img {
		display: block;
		height: auto;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
	// .content_rank_module .content_rank_detail .content_rank_product .content_rank_pic:before {
	// 	content: ' ';
	// 	display: block;
	// 	padding-top: 100%;
	// }
	.content_rank_module .content_rank_detail .content_rank_name {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		font-size: 12px;
		height: 32px;
		margin-top: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
	}
	.content_rank_module .content_rank_detail .content_rank_singlename {
		-webkit-line-clamp: 1;
		height: 16px;
	}
	.content_rank_module .content_rank_detail .content_rank_price {
		color: #f02b2b;
	}
	.content_rank_module .content_rank_detail .content_rank_price .unit {
		font-size: 12px;
	}
	.content_rank_module .content_rank_detail .content_rank_price .price {
		font-size: 13px;
		font-weight: 700;
	}
	.content_rank_module .content_rank_desc {
		color: #aaa;
		font-size: 14px;
		height: 22px;
		padding: 5px;
	}
	.content_rank_module .content_rank_desc > div {
		display: inline-block;
		vertical-align: middle;
	}
	.content_rank_module .content_rank_desc .content_rank_publisher {
		font-size: 14px;
		max-width: 140px;
		overflow: hidden;
		padding-right: 10px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.content_rank_module .content_rank_desc .content_rank_publisher img {
		border-radius: 50%;
		display: inline-block;
		height: 20px;
		vertical-align: middle;
		width: 20px;
	}
	.content_rank_module .content_rank_desc .content_rank_view {
		float: right;
	}
	.content_rank_module .content_rank_desc .content_rank_view i {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAbCAMAAADf5/YYAAAAZlBMVEUAAACYmJiXl5eampqhoaGYmJiXl5eXl5eYmJiYmJiYmJiYmJiampqenp6Xl5eYmJiYmJiampqYmJiZmZmZmZmcnJyioqKYmJiYmJiZmZmYmJiZmZmZmZmZmZmZmZmZmZmampqXl5fhsTBEAAAAIXRSTlMA+fUhEaPs4tKylVAnCazBbBieXzQuC8d6Qc2OhH5aSzxX6ZINAAABGElEQVQ4y5VU2Y7DIAyEDTkhHDmb3vv/P7lDFCxabSuZJ3s82B4wiLe1PP3gmrqqGzf45yK+LDW28jdfsh3VB27R/RAts7riH24Y5B5sb7pQsU6hb+2+SQ7hnTxWEbe6f0F7bWOOanxFbeRSzWXe5oX6i3ybZQlnAM4c3gSpUeB0+MbBPQeSVyPok3clgdcEeWyvj8KqQWdbilyi1LVco8BLAjeoatRuOpBNwh8glRFXJaxHgg3oazROyDWRBNTpDrNDPsIn1DoJMaMnTaBBg0l+DzmGIhraZmFRWdC65x56uYvMQwgJsqv1qEcOevTZYKAsK7fl9c06E9Z5f7lL+eEuRWDMCWMGGfPNeDusd8l/8/z/hPdX/QEoki4/UtUUqAAAAABJRU5ErkJggg==)
			no-repeat 0 0;
		background-size: 100%;
		display: inline-block;
		height: 15px;
		margin-right: 5px;
		vertical-align: -3px;
		width: 22.5px;
	}
	.lazyload-img{
		height: 180rpx;
	}
</style>