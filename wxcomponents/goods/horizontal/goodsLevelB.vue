<template>
	<view class="tpl-wrapper">
		<view
			style="position: relative; display: flex; overflow: hidden; box-sizing: border-box; background-color: red; margin: 0px; padding-left: 0px; padding-right: 0px; width: 375px; height: 70px;"
		>
			<view style="position: absolute; display: flex; overflow: hidden; left: 0px; top: 0px; margin: 0px; width: 100%; height: 100%;">
				<view
					style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: 100% 100%; background-image: url(https://img.alicdn.com/tfs/TB17j53tFzqK1RjSZSgXXcpAVXa-1125-210.png_760x760q90_.webp);"
				>
					<image src="" style="max-height: 100%; max-width: 100%; opacity: 0;" />
				</view>
			</view>
			<view
				style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; flex-direction: row; margin: 0px; padding-left: 0px; padding-right: 0px; width: 100%; height: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
			>
				<view
					style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; margin: 9px 0px 0px 9px; padding-left: 0px; padding-right: 0px; width: 253px; height: 100%; max-height: calc((100% - 9px) - 0px); -webkit-box-orient: vertical; -webkit-box-direction: normal;"
				>
					<view
						style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: row; place-self: flex-start center; margin: 3px 0px 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: 25px; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
					>
						<view
							style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; font-size: 14px; margin: 0px; width: fit-content; visibility: visible; color: rgb(255, 255, 255); height: auto; justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
						>
							<text style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 17px;">新品尝鲜价</text>
						</view>
						<view
							style="position: relative; display: none; flex-shrink: 1; flex-grow: 0; overflow: hidden; box-sizing: border-box; background-color: rgba(0, 0, 0, 0.098); place-self: center; padding-right: 5px; margin: 0px 0px 3px 5px; padding-left: 5px; height: 16px; border-radius: 8px; flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
						></view>
					</view>
					<view
						style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: row; margin: -4px 0px 0px -1.5px; padding-left: 0px; padding-right: 0px; width: fit-content; height: 25px; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
					>
						<view
							style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; margin: 0px 5px 0px 0px; align-items: center; justify-content: flex-start; flex-direction: row; place-self: center flex-start; padding-left: 0px; padding-right: 0px; width: fit-content; height: 100%; max-height: calc((100% - 0px) - 0px); -webkit-box-align: center; -webkit-box-pack: start; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
						>
							<view
								style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; font-size: 15px; place-self: flex-end center; margin: 0px; width: fit-content; visibility: visible; color: rgb(255, 255, 255); height: auto; justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							>
								<text style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 18px;">￥</text>
							</view>
							<view
								style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; font-size: 24px; place-self: flex-end center; margin: 2px 0px 0px; width: fit-content; visibility: visible; color: rgb(255, 255, 255); height: auto; justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							>
								<text style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 29px;">119</text>
							</view>
							<view
								style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; font-size: 13px; place-self: flex-end center; margin: 0px 0px 1px; width: fit-content; color: rgb(255, 255, 255); height: auto; justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							></view>
						</view>
						<view
							style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: row; visibility: visible; place-self: center; margin: 3px 0px 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: 100%; max-height: calc((100% - 3px) - 0px); -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
						>
							<view
								style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; font-size: 11px; place-self: center; margin: 0px 0px 0px 2px; width: fit-content; visibility: visible; color: rgb(255, 255, 255); height: 100%; justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							>
								<text style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 13px;">价格</text>
							</view>
							<view
								style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; font-size: 13px; place-self: center; margin: 0.5px 0px 0px; width: fit-content; visibility: visible; color: rgb(255, 255, 255); height: 100%; max-height: calc((100% - 0.5px) - 0px); justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							>
								<text style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">￥</text>
							</view>
							<view
								style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; font-size: 13px; margin: 0px 0px 0px -2px; width: fit-content; text-decoration: line-through; visibility: visible; color: rgb(255, 255, 255); height: 100%; max-height: calc((100% - 0px) - 0px); justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							>
								<text style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">168</text>
							</view>
							<view
								view-name="View"
								style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; visibility: visible; margin: 0px; width: 9px; height: 1px; place-self: flex-start;"
							></view>
							<view
								style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; font-size: 11px; place-self: center; margin: 0px; width: fit-content; color: rgb(255, 255, 255); height: auto; justify-content: flex-start; align-items: center; overflow: hidden; max-width: none; -webkit-box-pack: start; -webkit-box-align: center;"
							></view>
						</view>
						<view
							class="dx-event-node"
							style="position: relative; display: none; flex-shrink: 1; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: row; place-self: center; margin: 0px 0px 0px 1px; padding-left: 0px; padding-right: 0px; width: fit-content; height: 100%; border-radius: 12px; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
						></view>
					</view>
				</view>
				<view
					class="dx-event-node"
					style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; align-items: center; justify-content: center; place-self: center; margin: 0px 0px 0px 10px; padding-left: 0px; padding-right: 0px; width: 100px; height: 70px; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-box-align: center; -webkit-box-pack: center;"
				>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; place-self: center; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
					<view
						style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; visibility: visible; place-self: center; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					>
						<view
							style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; visibility: visible; place-self: center; margin: 0px; width: 86px; height: 50px;"
						>
							<view
								style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(https://img.alicdn.com/tfs/TB1PzW3tFzqK1RjSZSgXXcpAVXa-270-126.png_180x180q90_.webp);"
							>
								<image
									src="https://img.alicdn.com/tfs/TB1PzW3tFzqK1RjSZSgXXcpAVXa-270-126.png_180x180q90_.webp"
									style="max-height: 100%; max-width: 100%; opacity: 0;"
								/>
							</view>
						</view>
					</view>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; place-self: center; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; place-self: center; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; place-self: center; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
					<view
						style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; box-sizing: border-box; flex-direction: column; place-self: center; margin: 0px; padding-left: 0px; padding-right: 0px; width: fit-content; height: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal;"
					></view>
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
