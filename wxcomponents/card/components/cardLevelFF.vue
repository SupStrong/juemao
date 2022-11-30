<template>
	<view
		class="mui-zebra-module"
		style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0; position: relative;"
	>
		<view
			class="rax-view-v2 "
			style="width: 95.2vw; height: 36vw; margin: 0.8vw 2.4vw 1.6vw; flex-direction: column; align-items: center; justify-content: flex-start; border-radius: 3.2vw; position: relative; overflow: hidden;"
		>
			<image
				src="//gw.alicdn.com/imgextra/i1/O1CN01T7NTyH1dP0vtDtPt5_!!6000000003727-2-tps-714-266.png_790x10000.jpg_.webp"
				style="width: 95.2vw; height: 36vw; left: 0vw; bottom: 0vw; top: 0vw; z-index: 1;"
			/>
			<view
				class="rax-view-v2 "
				style="z-index: 5; position: absolute; left: var(--layout-item-mix-1x3__base-dt-btn-left, 1.6vw); bottom: var(--layout-item-mix-1x3__base-dt-btn-bottom, 1.6vw);"
			>
			</view>
			<view
				class="rax-view-v2 "
				style="display: flex; position: absolute; align-items: center; flex-direction: row; border-radius: 3.2vw; overflow: hidden; z-index: 5; bottom: var(--layout-item-mix-1x3__base-dt-items-bottom, 1.6vw); right: var(--layout-item-mix-1x3__base-dt-items-right, 2.13vw); white-space: nowrap; width: auto; height: auto;"
			>
				<view
					style="display: flex; position: relative; margin-left: var(--layout-item-mix-1x3__base-dt-item-margin-left, 1.33vw);"
					v-for="(item,index) in 3"
					:key="index"
				>
					<view
						class="rax-view-v2 "
						style="display: flex; align-items: center; flex-direction: column; border-radius: 2.4vw; background-color: rgb(255, 255, 255); height: 25.8667vw; overflow: hidden; width: 20vw;"
					>
						<view name="picture" class="rax-view-v2 " style="width: 20vw; height: 20vw; position: relative;">
							<image
								class="pic"
								src="//gw.alicdn.com/tps/O1CN01LBNUky1RoPVVfiD5A_!!6000000002158-0-yinhe.jpg_150x10000Q75.jpg_.webp"
								style="width: 20vw; height: 20vw; background-color: rgb(255, 255, 255); object-fit: contain;"
							/>
						</view>
						<view name="priceWrapper" class="rax-view-v2 " style="height: 5.3333vw; margin-top: 0.2667vw; position: relative;">
							<view
								class="rax-view-v2 "
								style="display: flex; height: var(--tm-base-item-price__base-dt-block-height, 5.0667vw); flex-flow: row wrap; align-items: baseline; justify-content: var(--tm-base-item-price__base-dt-block-justify-content, flex-start); font-family: -apple-system, sans-serif; overflow: hidden;"
							>
								<view
									class="rax-view-v2 "
									style="flex-flow: row-reverse wrap; justify-content: flex-end; align-items: baseline; overflow: hidden; width: fit-content;"
								>
									<view class="rax-view-v2 " style="justify-content: flex-start; flex-direction: row; align-items: baseline;">
										<text
											class="rax-text-v2 "
											style="height: var(--tm-base-item-price__base-dt-block-height, 5.0667vw); font-weight: 400; line-height: 120%; font-size: var(--tm-base-item-price__base-dt-yen-font-size, 2.9333vw); color: var(--tm-base-item-price__base-dt-price-color, #FF0036); display: flex; align-items: flex-end;"
										>
											¥
										</text>
										<text
											class="rax-text-v2 "
											style="height: var(--tm-base-item-price__base-dt-block-height, 5.0667vw); font-weight: 500; line-height: 120%; font-size: var(--tm-base-item-price__base-dt-price-font-size, 4.2667vw); color: var(--tm-base-item-price__base-dt-price-color, #FF0036); display: flex; align-items: flex-end;"
										>
											1039
										</text>
									</view>
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

<style lang="scss" scoped>
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
</style>
