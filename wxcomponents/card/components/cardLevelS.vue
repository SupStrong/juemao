<template>
	<view
		class="mui-zebra-module"
		style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: relative;"
	>
		<view
			style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: relative; width: 95.2vw; height: 83.4667vw; overflow: hidden; border-radius: 3.2vw; margin-left: 2.4vw; margin-top: 0.8vw; margin-bottom: 1.6vw; z-index: 1;"
		>
			<view
				class="rax-view-v2 rax-scrollview rax-scrollview-horizontal rax-scrollview"
				style="display: flex; flex-direction: row; height: 86.1333vw; width: 95.2vw; border-radius: 3.2vw; "
			>
				<view class="rax-view-v2 rax-scrollview-content-container-horizontal" style="flex-direction: row;">
					<view
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; position: relative; align-items: flex-start; width: 44.2667vw; height: 83.4667vw; border-top-left-radius: 3.2vw; border-bottom-left-radius: 3.2vw;"
					>
						<view
							style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: relative; align-items: flex-start; width: 44.2667vw; height: 83.4667vw;"
						>
							<image
								src="//gw.alicdn.com/imgextra/i4/O1CN01xFfDAk23IJ861mEHQ_!!6000000007232-2-tps-332-626.png_360x10000.jpg_.webp"
								style="width: 44.2667vw; height: 83.4667vw; position: relative; border-top-left-radius: 3.2vw; border-bottom-left-radius: 3.2vw;"
							/>

							<view
								style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: absolute; bottom: 16.6667vw; left: 2.4vw; background-color: rgba(0, 0, 0, 0.75); width: 36vw; height: 6.4vw;"
							>
								<text
									class="text"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.3333vw; white-space: nowrap; opacity: 1; line-height: 6.4vw; color: rgb(255, 255, 255); font-weight: 600; margin-left: 0.6667vw; max-width: 35.3333vw; overflow: hidden; text-overflow: ellipsis;"
								>
									休闲卫衣
								</text>
							</view>
							<view
								style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; position: absolute; bottom: 11.7333vw; left: 2.4vw; align-items: flex-start; background-color: rgba(0, 0, 0, 0.75); width: 36vw; height: 4.4vw;"
							>
								<text
									class="text"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.4667vw; white-space: nowrap; opacity: 1; margin-left: 0.6667vw; line-height: 4.4vw; color: rgb(255, 255, 255); font-weight: 400; max-width: 35.3333vw; overflow: hidden; text-overflow: ellipsis;"
								>
									活力一整个秋冬
								</text>
							</view>
						</view>
					</view>
					<view
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; margin-left: -2.4vw; align-items: flex-start; border-radius: 3.2vw; background-color: rgb(255, 255, 255); height: 83.4667vw; padding-top: 1.4667vw; padding-left: 1.0667vw; padding-right: 3.0667vw; position: relative;width: 400rpx;overflow: scroll;"
					>
						<view
							style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: relative; align-items: flex-start; height: 78.6667vw; margin-left: 3.0667vw;"
							v-for="(item, index) in 3"
							:key="index"
						>
							<view
								style="display: flex; position: relative; width: 26.5333vw; height: 36.2667vw; margin-top: 2.8vw; flex-direction: column; align-items: flex-start;"
								v-for="(item, index1) in 2"
								:key="index1"
							>
								<view
									style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 26.4vw; border-radius: 1.6vw; height: 26.4vw;"
								>
									<image
										src="//gw.alicdn.com/bao/upload/O1CN01RLo3tF24rP62g7aZw_!!6000000007444-2-yinhe.png_220x10000.jpg_.webp"
										style="width: 26.4vw; height: 26.4vw; border-radius: 1.6vw;"
									/>
								</view>
								<text
									class="text"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.4667vw; white-space: nowrap; opacity: 1; margin-top: 1.3333vw; max-width: 26.5333vw; overflow: hidden; text-overflow: ellipsis; line-height: 4.9333vw; color: rgb(0, 0, 0); font-weight: 400;"
								>
									KARL LAGERFELD卡尔拉格斐动休闲纯色老佛爷女士卫衣
								</text>
								<view
									style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; align-items: center; height: 4.1333vw;"
								>
									<text
										class="text"
										style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 2.9333vw; white-space: nowrap; opacity: 1; margin-left: 0.1333vw; line-height: 4vw; color: rgb(0, 0, 0); font-weight: 400; margin-top: 1.0667vw; overflow: hidden;"
									>
										¥
									</text>
									<text
										class="text"
										style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: flex; flex-direction: row; place-content: flex-start center; flex-shrink: 0; font-size: 4vw; white-space: nowrap; opacity: 1; color: rgb(0, 0, 0); font-weight: 500; margin-left: 0.5333vw; overflow: hidden;"
									>
										929
									</text>
								</view>
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

<style lang="scss" scoped></style>
