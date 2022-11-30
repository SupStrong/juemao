<template>
	<view
		class="rax-view rax-scrollview rax-scrollview-horizontal listContainer"
		style="box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex: 1 1 0%; position: relative; overflow: scroll;"
	>
		<view
			class="rax-view rax-scrollview-content-container-horizontal"
			style="box-sizing: border-box; display: flex; flex-direction: row; align-content: flex-start; flex-shrink: 0; position: relative; height: 68.2667vw; padding-left: 3.2vw; padding-top: 0.8vw; padding-bottom: 2.4vw;"
			v-for="(item,index) in 3" 
			:key="index"
		>
			<view
				class="boardItem"
				style="display: flex; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; width: 62.1333vw; height: 65.7333vw; background: rgb(255, 255, 255); border-radius: 1.6vw; margin-right: 1.6vw; padding-top: 2.9333vw; overflow: hidden; box-sizing: border-box; transform: translate3d(0px, 0px, 0px);"
			>
				<image
					class="boardItemBg"
					src="https://gw.alicdn.com/imaextra/i4/O1CN015JLTaR1nr5L2j0YVr_!!6000000005142-2-tps-466-493.png_570x10000.jpg_.webp"
					style="width: 100%; height: 246px; position: absolute; left: 0vw; top: 0vw;"
				/>
				<view
					class="rax-view-v2 borderFrame"
					style="position: absolute; top: 0vw; left: 0vw; width: 124.267vw; height: 131.467vw; border-color: rgb(255, 255, 255); border-width: 1px; border-style: solid; transform-origin: 0px 0px; transform: scale(0.5);"
				></view>
				<view
					class="rax-view-v2 boardTitleWrapper"
					style="position: relative; display: flex; flex-direction: row; align-items: center; justify-content: flex-start; width: 100%; padding-left: 3.2vw;"
				>
					<text
						class="boardTitleText"
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.3333vw; white-space: nowrap; color: rgb(3, 3, 3); font-weight: 600; line-height: 5.3333vw; text-align: left; text-overflow: ellipsis; overflow: hidden;"
					>
						悦已小酌
					</text>
					<image
						class="boardTitleArr"
						src="https://gw.alicdn.com/imageextra/i2/O1CN01lC60Wu1H88lQBvCEI_!!6000000000712-2-tps-34-34.png_110x10000.jpg_.webp"
						style="width: 4.5333vw; height: 4.5333vw; margin-left: 0.4vw;"
					/>
				</view>
				<text
					class="boardTag"
					style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: pre-wrap; color: rgb(156, 136, 255); font-weight: 400; line-height: 3.2vw; text-align: left; margin: 1.6vw 0vw 1.6vw 3.2vw;"
				>
					#新锐潮流
				</text>
				<view class="rax-view-v2 boardWrapper" style="margin-left: 3.2vw; width: 55.7333vw; display: flex; flex-direction: row; justify-content: space-between;">
					<view
						class="rax-view-v2 boardTopItem"
						style="position: relative; width: 34.9333vw; height: 50.1333vw; background: rgb(255, 255, 255); border-radius: 1.6vw; display: flex; flex-direction: column; align-items: center;"
					>
						<view
							class="rax-view-v2 topimageWrapper"
							style="margin-top: 6.4vw; position: relative; width: 30.1333vw; height: 30.1333vw; background: rgb(255, 255, 255); align-items: center; justify-content: center;"
						>
							<image
								class="topItemMask"
								src="https://gw.alicdn.com/imageextra/i3/O1CN01GazXRR23h2VAoJ8rR_!!6000000007286-2-tps-245-221.png_360x10000.jpg_.webp"
								style="width: 30.1333vw; height: 30.1333vw; position: absolute; left: 0vw; top: 0vw;"
							/>
							<image
								class="topItemimage"
								src="https://img.alicdn.com/tfscom///gw.alicdn.com/imageextra/i1/O1CN01uBfgU51Spc8EWLjrc_!!6000000002296-0-tps-800-800.jpg_360x10000Q75.jpg_.webp"
								style="width: 28vw; height: 28vw;"
							/>
						</view>
						<image
							class="topItemTag"
							src="https://gw.alicdn.com/imageextra/i1/O1CN01NB262A1vWUREpsOYp_!!6000000006180-2-tps-96-68.png_.webp"
							style="width: auto; height: 8.2667vw; position: absolute; left: 1.8667vw; top: 1.3333vw;"
						/>
						<view class="rax-view-v2 topItemInfo" style="width: 100%; position: relative; display: flex; flex-direction: column; align-items: center;">
							<text
								class="topItemTitle"
								style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; color: rgb(84, 84, 84); font-weight: 400; text-align: left; max-width: 32.5333vw; text-overflow: ellipsis; overflow: hidden;"
							>
								官方直采 假一赔十
							</text>
							<view class="rax-view-v2 topItemScoreWrapper" style="margin-top: 1.6vw; position: relative; display: flex; flex-direction: row;">
								<image
									class="topItemScoreBg"
									src="https://gw.alicdn.com/imageextra/i1/O1CN01JpDIhl1KOZpWdcrpp_!!6000000001154-2-tps-165-36.png_290x10000.jpg_.webp"
									style="width: 22vw; height: 4.8vw; position: absolute; left: 0vw; top: 0vw;"
								/>
								<view
									class="rax-view-v2 topItemScore"
									style="margin-left: 13.3333vw; width: 8.6667vw; display: flex; flex-direction: row; justify-content: center;"
								>
									<text
										class="number"
										style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 4.2667vw; white-space: pre-wrap; color: var(--color-text-0, #333); font-weight: 400; line-height: 4.2667vw; text-align: left; font-family: tmall-price-ExtraBold;"
									>
										91
									</text>
									<text
										class="dot"
										style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: pre-wrap; color: var(--color-text-0, #333); font-weight: 400; transform: scale(0.833333); transform-origin: left center; line-height: 3.2vw; text-align: left; font-family: tmall-price-ExtraBold;"
									>
										.2
									</text>
								</view>
							</view>
						</view>
					</view>
					<view
						class="rax-view-v2 bottomWrapper"
						style="width: 20vw; height: 50.1333vw; border-radius: 1.6vw; display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between;"
					>
						<view
							class="rax-view-v2 item"
							style="position: relative; width: 20vw; height: 24.6667vw; display: flex; flex-direction: column; align-items: center; background-color: rgb(255, 255, 255); border-radius: 1.6vw;"
							v-for="(item,index) in 2"
							:key="index"
						>
							<view class="rax-view-v2 itemimageWrapper" style="width: 17.8667vw; height: 17.8667vw;">
								<image
									class="itemimage"
									src="https://img.alicdn.com/tfscom///gw.alicdn.com/imageextra/i1/O1CN01ss7gTV1CDZNc5csav_!!6000000000047-0-tps-800-800.jpg_220x10000Q75.jpg_.webp"
									style="width: 17.8667vw; height: 17.8667vw; position: relative; border-radius: 0.8vw;"
								/>
								<image
									class="itemTag"
									src="https://gw.alicdn.com/imageextra/i4/O1CN01AYHiup1gmmHrEwTWA_!!6000000004185-2-tps-126-68.png_110x10000.jpg_.webp"
									style="width: 8.5333vw; height: auto; position: absolute; top: 1.0667vw; left: 0.9333vw;"
								/>
							</view>
							<text
								class="itemTitle"
								style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; color: var(--color-text-2, #666); font-weight: 400; line-height: 4.2667vw; text-align: left; margin-top: 0.5333vw; max-width: 90%; text-overflow: ellipsis; overflow: hidden;"
							>
								XXO
							</text>
						</view>
						</view>
				</view>
			</view>
			<!-- <view class="rax-view-v2 moreItemPlaceHolder" style="position: relative; width: 11.2vw; height: 30.6667vw;"></view> -->
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
