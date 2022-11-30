<template>
	<view class="rax-view-v2 mui-zebra-module" style="position:relative;">
		<view class="rax-view-v2 container" style="position:relative;width:100%;padding-top:0.8vw;padding-bottom:2.4vw;">
			<image
				class="containerBg"
				src="https://gw.alicdn.com/imgextra/i4/O1CN01oBoh4p21Lqxps71Ly_!!6000000006969-1-tps-750-345.gif"
				style="width:100%;height:179px;position:absolute;left:0vw;top:0vw;"
			/>
			<view class="rax-view-v2 actCard" style="position:relative;width:93.6vw;margin-left:3.2vw;">
				<image
					class="actBannerPic"
					src="//gw.alicdn.com/imgextra/i4/O1CN01zpbCS91s1r89zSedR_!!6000000005707-2-tps-702-318.png_790x10000.jpg_.webp"
					style="width: 93.6vw; height: 100%; border-radius: 1.6vw;"
				/>
				<view
					class="rax-view-v2 actWrapper"
					style="position:relative;margin-top:23.0667vw;margin-left:2.4vw;width:89.0667vw;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;overflow: scroll;"
				>
					<view
						class="rax-view-v2 cube"
						style="position: relative; width: 21.8667vw; height: 22.4vw; border-radius: 0.8vw; background: rgb(255, 255, 255); display: flex; flex-direction: column; place-items: center flex-start; overflow: hidden;"
						v-for="(item, index) in 6"
						:key="index"
					>
						<view
							class="rax-view-v2 cubeMask"
							style="position: absolute; background: linear-gradient(rgb(255, 255, 255) 0%, rgb(219, 203, 254) 100%); border-bottom-left-radius: 0.8vw; border-bottom-right-radius: 0.8vw; left: 0vw; bottom: 0vw; width: 100%; height: 9.3333vw;"
						></view>
						<view
							class="rax-view-v2 itemListWrapper"
							style="position: absolute; width: 100%; height: auto; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; transition-duration: 800ms; transition-timing-function: cubic-bezier(0, 0, 0.25, 1); transition-property: transform; will-change: transform;"
						>
							<view class="item" style="display: flex; position: relative; width: 21.8667vw; height: 22.4vw; flex-direction: column; align-items: center;">
								<image
									class="cubeImg"
									src="//gw.alicdn.com/bao/uploaded/O1CN01TJgZzF1z4mv16dei1_!!6000000006661-0-yinhe.jpg_110x10000Q75.jpg_.webp"
									style="width: 12vw; height: 12vw; position: relative; margin-top: 0.8vw;"
								/>
								<text
									class="cubeTitle"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.4667vw; white-space: nowrap; color: rgb(0, 0, 0); font-weight: 400; line-height: 5.0667vw; text-align: center; min-width: 13.8667vw; max-width: 20.2667vw; margin-top: 0.5333vw; text-overflow: clip; overflow: hidden;"
								>
									苹果盛典
								</text>
								<text
									class="cubeDesc"
									style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; color: rgb(109, 41, 255); font-weight: 400; line-height: 3.7333vw; text-align: center; width: 26.4vw; transform: scale(0.833); transform-origin: center 0px; text-overflow: ellipsis; overflow: hidden;"
								>
									抢苹果14
								</text>
							</view>
						</view>
						<view
							class="rax-view-v2 cubeTopMask"
							style="position: absolute; background: linear-gradient(rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 100%); border-top-left-radius: 0.8vw; border-top-right-radius: 0.8vw; left: 0vw; top: 0vw; width: 100%; height: 2.4vw;"
						></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
.rax-view-v2 {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-content: flex-start;
	border: 0 solid #000;
	margin: 0;
	padding: 0;
	min-width: 0;
}
.rax-text-v2 {
	box-sizing: border-box;
	display: block;
	font-size: 4.26667vw;
	white-space: pre-wrap;
}
.rax-text-v2--overflow-hidden {
	overflow: hidden;
}
.rax-text-v2--singleline {
	white-space: nowrap;
}
.rax-text-v2--multiline {
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
</style>