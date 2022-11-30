<template>
	<view class="content">
		<view
			class="zebra-industry-item"
			style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; border-radius: 3.2vw; margin-top: 0.8vw; margin-bottom: 1.6vw; background: rgb(255, 255, 255); overflow: hidden;width: 714rpx;margin: 0 auto;"
		>
			<view
				class="zebra-industry-item-banner-wrapper"
				style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0;"
			>
				<view
					class="zebra-industry-item-banner"
					style="display: flex; position: relative; height: 10.6667vw; width: 95.2vw; flex-direction: row; align-items: center; justify-content: flex-start; padding: 0vw 3.2vw; box-sizing: border-box;"
				>
					<image
						src="//gw.alicdn.com/imgextra/i2/O1CN01LNqZNH1H2BdWYxv4i_!!6000000000699-2-tps-1428-160.png_.webp"
						style="width: 95.2vw; height: 10.6667vw; position: absolute; top: 0vw; left: 0vw;"
					/>
					<text
						class="banner-title"
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.0667vw; white-space: pre-wrap; font-weight: 700; color: rgb(255, 255, 255); z-index: 3;"
					>
						国际自营
					</text>
					<view
						class="line"
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: relative; margin: 0vw 2.1333vw; width: 0.2667vw; height: 5.0667vw; background-color: rgb(255, 255, 255); z-index: 3;"
					></view>
					<text
						class="banner-subtitle"
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.0667vw; white-space: nowrap; font-weight: normal; color: rgb(255, 255, 255); z-index: 3; width: 45.6vw; text-overflow: ellipsis; overflow: hidden;"
					>
						抢百元神券
					</text>
					<image
						class="banner-goBtn"
						src="//gw.alicdn.com/tfs/TB1uwg7X0Tfau8jSZFwXXX1mVXa-324-150.png_110x10000.jpg_.webp"
						style="width: 14.4vw; height: 6.6667vw; position: relative; margin-left: auto; z-index: 3;"
					/>
				</view>
			</view>
			<view
				class="zebra-mechant-wrapper"
				style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0;"
			></view>
			<view
				class="zebra-goods-wrapper"
				style="border: 0px solid black; box-sizing: border-box; display: flex; flex-flow: row wrap; align-content: flex-start; flex-shrink: 0;width: 714rpx;"
			>
				<view
					class="zebra-goods "
					style="display: flex; position: relative; width: 50%; align-items: center; height: 19.8667vw; padding-left: 1.6vw; box-sizing: border-box; border-top: 1px solid rgb(230, 230, 230);"
					v-for="(item,index) in 4" :key="index"
				>
					<view
						class="goods-logo"
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0;"
					>
						<image
							src="//gw.alicdn.com/bao/uploaded/O1CN01fPGa2W1RBwDwTQhtn_!!6000000002074-0-yinhe.jpg_140x10000Q75.jpg_.webp"
							style="width: 16.6667vw; height: 16.6667vw;"
						/>
					</view>
					<view
						class="goods-info"
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; margin-left: 1.6vw; width: 26.6667vw; align-items: flex-start;"
					>
						<view
							class="goods-title"
							style="border: 0px solid black; box-sizing: border-box; display: inline-block; flex-direction: column; align-content: flex-start; flex-shrink: 0; margin-bottom: 0.4vw; height: 4.8vw; font-size: 3.2vw; font-weight: 600; line-height: 4.8vw; color: rgb(51, 51, 51); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 26.6667vw;"
						>
							LGG?益生菌粉
						</view>
						<text
							class="goods-subtitle"
							style="border-width: 1px; border-style: solid; border-color: rgb(255, 225, 228); position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; padding: 0vw 1.0667vw; height: 4.8vw; max-width: 25.3333vw; line-height: 4.8vw; color: rgb(255, 0, 54); border-radius: 0.5333vw; background-color: rgb(254, 238, 244); overflow: hidden; text-overflow: ellipsis;"
						>
							限时爆款直降
						</text>
						<view
							class="goods-price-wrapper"
							style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; align-items: baseline;"
						>
							<view
								class="goods-price"
								style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; margin-top: 1.6vw; margin-right: 0.8vw; font-size: 2.9333vw; line-height: 4.4vw; align-items: baseline;"
							>
								<text
									class="mer-text currency active"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: inline-block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: pre-wrap; font-family: PingFang SC; transform: scale(0.916667); transform-origin: center center; color: rgb(255, 0, 54);"
								>
									¥
								</text>
								<text
									class="mer-text active active-price"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: inline-block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 4.2667vw; white-space: pre-wrap; font-family: PingFang SC; color: rgb(255, 0, 54); font-weight: 600;"
								>
									364.8
								</text>
							</view>
						</view>
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
.content {
	margin: 0 auto;
	display: flex;
	justify-content: center;
}
</style>
