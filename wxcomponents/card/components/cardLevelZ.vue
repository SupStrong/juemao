<template>
	<view class="rax-view-v2 itemWrapper" style="position: relative; width: 100vw; height: auto;background-color: rgb(62,10,126);">
		<view
			class="rax-view-v2 rax-scrollview rax-scrollview-horizontal rax-scrollview"
			style="display: flex; flex-direction: row; margin-bottom: 1.4vw; margin-top: 1.4vw; overflow: scroll hidden; flex: 1 1 0%;"
		>
			<view
				class="rax-view-v2 rax-scrollview-content-container-horizontal"
				style="flex-direction:row;padding-left:2.1333vw;height:48vw;display:flex;align-items:center;justify-content:flex-start;"
			>
				<view
					class="itemCard"
					style="border: 0px solid black; box-sizing: border-box; display: flex; flex-direction: column; place-content: flex-start; flex-shrink: 0; position: relative; width: 29.8667vw; height: 43.7333vw; border-radius: 1.6vw; margin-right: 2.1333vw; background: rgb(255, 255, 255); overflow: hidden; align-items: flex-start;"
					v-for="(item,index) in 6"
					:key="index"
				>
					<view class="rax-view-v2 itemImgWrapper" style="position: relative; width: 100%; height: auto;">
						<image
							class="itemImg"
							src="//gw.alicdn.com/imgextra/i4/O1CN01XuCk5X22Cyu8Hyf0B_!!6000000007085-0-yinhe.jpg_230x10000Q75.jpg_.webp"
							style="width: 29.8667vw; height: 29.8667vw; border-radius: 1.6vw;"
						/>
						<view
							class="rax-view-v2 itemTag"
							style="position: absolute; left: 0vw; bottom: 0vw; background: linear-gradient(98deg, rgb(201, 141, 245) 5%, rgb(182, 145, 248) 99%); border-top-right-radius: 1.0667vw;"
						>
							<text
								class="itemTagText"
								style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; color: var(--color-text-6, #fff); font-weight: 400; text-align: left; transform: scale(0.916); transform-origin: center center; max-width: 100%; text-overflow: ellipsis; overflow: hidden;"
							>
								SPA级按摩自由
							</text>
						</view>
					</view>
					<text
						class="itemTitle"
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.7333vw; white-space: nowrap; color: var(--color-text-1, #111); font-weight: 500; line-height: 3.7333vw; text-align: left; width: 100%; margin-top: 1.6vw; max-width: 100%; text-overflow: ellipsis; padding-left: 1.8667vw; overflow: hidden;"
					>
						VEGAMOUR头皮按摩梳
					</text>
					<text
						class="itemDesc"
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 3.2vw; white-space: nowrap; color: var(--color-brand-1, #7c48db); font-weight: 400; line-height: 4.2667vw; text-align: left; width: 80%; margin-top: 2.1333vw; text-overflow: ellipsis; padding-left: 1.8667vw; overflow: hidden;"
					>
						干湿两用
					</text>
					<view
						class="rax-view-v2 itemCart j_AddCart"
						style="position: absolute; right: 1.8667vw; bottom: 1.8667vw; width: 5.3333vw; height: 5.3333vw; background: rgb(124, 72, 219); border-radius: 2.6667vw; display: flex; align-items: center; justify-content: center;"
					>
						<image
							class="cartIcon"
							src="//gw.alicdn.com/imgextra/i2/O1CN0170Zqo61jX9dimTR4T_!!6000000004557-2-tps-40-42.png_110x10000.jpg_.webp"
							style="width: 2.6667vw; height: 2.6667vw;"
						/>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script></script>
<style lang="scss" scoped></style>
