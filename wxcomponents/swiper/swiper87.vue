<template>
	<view
		id="top-info"
		class="tn-footerfixed tn-flex tn-flex-row-between tn-flex-col-center tn-padding tn-safe-area-inset-bottom dd-glass"
		:style="{ transform: `translateY(${topInfoTranslateY}px)` }"
		@click="showModal"
	>
		<view class="justify-content-item tn-padding-bottom">
			<view class="tn-flex tn-flex-col-center tn-flex-row-left">
				<view class="user-pic">
					<view class="user-image">
						<view
							class="tn-shadow-blur"
							style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg');width: 100rpx;height: 100rpx;background-size: cover;"
						></view>
					</view>
				</view>
				<view class="tn-padding-right tn-color-black">
					<view class="tn-padding-right tn-padding-left-sm">
						<text class="tn-text-lg tn-text-bold">图鸟北北</text>
						<text class="tn-padding-left-sm">打杂UI</text>
					</view>
					<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
						<text class="tn-color-blue--dark tn-text-bold">抓住那只猪科技有限公司</text>
					</view>
				</view>
			</view>
		</view>
		<view class="justify-content-item tn-flex-col-center tn-flex-row-center tn-text-center tn-padding-bottom">
			<view class=""><text class="tn-icon-wechat-fill tn-color-green--dark" style="font-size: 50rpx;"></text></view>
			<view class=""><text class="tn-text-sm">加微信</text></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			topInfo: {
				height: 0
			},
			topInfoTranslateY: 0,
			prevScrollTop: 0
		};
	},
	onPageScroll(e) {
		this.handlePageScroll(e.scrollTop);
	},
	methods: {
		// 处理页面滚动事件
		handlePageScroll(scrollTop) {
			console.log(scrollTop);
			if (this.prevScrollTop > scrollTop) {
				// 下滑
				this.topInfoTranslateY = 0;
			} else {
				// 上滑
				if (scrollTop > this.topInfo.height) {
					this.topInfoTranslateY = this.topInfo.height;
				}
			}

			this.prevScrollTop = scrollTop;
		}
	}
};
</script>

<style lang="scss" scoped>
	  /* 底部悬浮按钮 start*/
	  .tn-tabbar-height {
	  	min-height: 120rpx;
	  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	  }
	  .tn-footerfixed {
	    position: fixed;
	    background-color: rgba(255,255,255,0.5);
	    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	    bottom: 0;
	    width: 100%;
	    transition: all 0.25s ease-out;
	    will-change: transform;
	    z-index: 100;
	  }
	  
</style>
