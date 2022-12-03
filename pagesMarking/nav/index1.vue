<template>
	<view
		style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex: 0 0 auto; position: relative; margin-bottom: 0vw; height: 100vh; overflow: hidden; background-color: rgb(230, 230, 230); transition: width 300ms ease-in-out 0ms, height, top, bottom, left, right, backgroundColor, opacity, transform;"
	>
		<view
			style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; align-items: center; background-color: rgb(255, 255, 255); width: 17.3333vw; height: 100%; overflow: auto; padding-bottom: env(safe-area-inset-bottom);"
		>
			<view
				id="Tabrecommend"
				style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; place-content: flex-start center; flex-shrink: 0; width: 12.8vw; margin-top: 3.4667vw; align-items: center;"
			>
				<view
					style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; place-content: flex-start center; flex-shrink: 0; width: 53px; height: 53px; align-items: center; border-radius: 133.333vw; overflow: hidden; background-color: rgb(124, 72, 219);"
				>
					<view
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; place-content: flex-start center; flex-shrink: 0; width: 49px; height: 49px; align-items: center; border-radius: 133.333vw; overflow: hidden; background-color: white;"
					>
						<image
							src="//gw.alicdn.com/imgextra/i2/O1CN01Zc9GpR20Gz3CbN7s9_!!6000000006823-2-tps-160-160.png_110x10000.jpg_.webp"
							style="width: 44px; height: 44px; border-radius: 133.333vw; overflow: hidden;"
						/>
					</view>
				</view>
				<text
					class="text"
					
					style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; color: var(--color-brand-1, #7c48db); font-weight: bold; line-height: 4.9333vw; text-align: center; margin-top: 1.3333vw; width: 12.8vw; overflow: hidden;"
				>
					推荐
				</text>
			</view>
		</view>
		<view style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex: 1 1 auto; overflow: hidden;">
			<view
				class="rax-scrollview rax-scrollview-vertical rax-scrollview"
				style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex: 1 1 0%; overflow: hidden scroll;"
			>
				<view
					class="rax-scrollview-webcontainer"
					style="border: 0px solid black; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; padding-bottom: env(safe-area-inset-bottom);"
				>
					<view
						style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; align-items: center; margin-top: 2.6667vw; width: 77.3333vw;margin-left: 20rpx; border-radius: 3.2vw; background-color: white;"
					>
						<view
							style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; place-content: flex-start space-between; flex-shrink: 0; align-items: center; width: 77.3333vw; height: 10.2667vw; padding: 2.6667vw 2.6667vw 1.2vw;"
						>
							<view
								style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; align-items: baseline;"
							>
								<text
									class="text"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 4.5333vw; white-space: pre-wrap; color: var(--color-text-0, #333); font-weight: 600; text-align: left;"
								>
									潮流彩妆
								</text>
							</view>
						</view>
						<view style="border-bottom: 1px solid rgb(230, 230, 230); width: 72vw;"></view>
						<view
							style="border: 0px solid black; box-sizing: border-box; display: flex; flex-flow: row wrap; align-content: flex-start; flex-shrink: 0; padding-left: 4.5333vw; padding-right: 0.2667vw; padding-bottom: 3.0667vw; width: 77.3333vw;"
						>
							<view
								style="display: flex; position: relative; flex-direction: column; align-items: center; margin-top: 3.0667vw; margin-right: 4.2667vw; width: 13.8667vw;"
								v-for="(item,index) in 8"
								:key="index"
							>
								<image
									src="//gw.alicdn.com/imgextra/i4/O1CN01RkpIwP29AsJSECttX_!!6000000008028-0-tps-100-100.jpg_110x10000Q75.jpg_.webp"
									style="width: 13.3333vw; height: 13.3333vw;"
								/>
								<text
									class="text"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 2.9333vw; white-space: pre-wrap; color: var(--color-text-0, #333); font-weight: 400; text-align: center; width: 13.8667vw; overflow: hidden; text-overflow: ellipsis; margin-top: 0.6667vw;"
								>
									无暇底妆
								</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped></style>
