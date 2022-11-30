<template>
	<tn-modal v-model="isVisibile" width="70%" padding="0 0" :custom="true">
		<view
			class="rax-modal-main"
			style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: auto; height: auto; background-color: transparent; position: relative; border-radius: 3.2vw; -webkit-box-align: center; align-items: center;"
		>
			<view
				style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 72vw; position: relative; border-radius: 3.2vw; -webkit-box-align: center; align-items: center; background-color: rgb(248, 248, 248);"
			>
				<view
					style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; place-content: flex-start center; flex-shrink: 0; position: relative; width: 72vw; height: 35.6vw; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; z-index: 1;"
				>
					<image
						class="rax-image "
						src="//gw.alicdn.com/tfs/TB16u2PoQL0gK0jSZFxXXXWHVXa-395-285.png_450x10000.jpg_.webp"
						style="width: 205px; height: 205px; margin-bottom: 5.33333vw;"
					/>
				</view>
				<text
					style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.06667vw; white-space: pre-wrap; color: rgb(51, 51, 51); line-height: 7.2vw;"
				>
					恭喜开到了
				</text>
				<text
					style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.06667vw; white-space: pre-wrap; color: rgb(51, 51, 51); line-height: 7.2vw;"
				>
					机长满满的爱
				</text>
				<view
					style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; place-content: flex-start center; flex-shrink: 0; width: 58vw; height: 12vw; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; border-radius: 13.3333vw; background-image: linear-gradient(to right, rgb(129, 85, 255), rgb(145, 144, 244)); margin-top: 12vw;"
				>
					<text
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 32rpx; white-space: pre-wrap; color: rgb(255, 255, 255);"
					>
						邀请好友再开宝箱
					</text>
				</view>
			</view>
			<image
				class="rax-image "
				src="//gw.alicdn.com/tfs/TB1L3jDoQT2gK0jSZPcXXcKkpXa-204-204.png_110x10000.jpg_.webp"
				style="width: 1.02rem; height: 1.02rem; margin-top: 8vw;"
			/>
		</view>
	</tn-modal>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		isVisibile: {
			type: Boolean,
			default: false
		}
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	
</style>
