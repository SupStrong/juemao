<template>
	<view>
		<view class="swiper tn-padding" :style="{ height: swiperContainerHeight + 'px' }">
			<tn-stack-swiper :list="list" direction="vertical" height="100%" :switchRate="10" :scaleRate="0.05" :translateRate="8"></tn-stack-swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperContainerHeight: 0,
			list: [
				{
					image: 'https://tnuiimage.tnkjapp.com/bless/bless-1.jpg'
				},
				{
					image: 'https://tnuiimage.tnkjapp.com/bless/bless-2.jpg'
				},
				{
					image: 'https://tnuiimage.tnkjapp.com/bless/bless-3.jpg'
				},
				{
					image: 'https://tnuiimage.tnkjapp.com/bless/bless-4.jpg'
				}
			],
			autoplay: false
		};
	},
	onReady() {
		this.$nextTick(() => {
			this.initSwiperContainer();
		});
	},
	onShow() {
		this.autoplay = true;
	},
	onHide() {
		this.autoplay = false;
	},
	methods: {
		// 初始化轮播图容器
		initSwiperContainer() {
			// 获取底部tabbar信息
			this._tGetRect('.tabbar').then(res => {
				if (!res.height) {
					setTimeout(() => {
						this.initSwiperContainer();
					}, 10);
					return;
				}
				// 获取系统信息
				const systemInfo = uni.getSystemInfoSync();
				this.swiperContainerHeight = systemInfo.safeArea.height - res.height - 10;
			});
		}
	}
};
</script>

<style lang="scss" scoped>	
.tn-custom-nav-bar__back {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1000rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  font-size: 18px;
  
  .icon {
    display: block;
    flex: 1;
    margin: auto;
    text-align: center;
  }
  
  &:before {
    content: " ";
    width: 1rpx;
    height: 110%;
    position: absolute;
    top: 22.5%;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    opacity: 0.7;
    background-color: #FFFFFF;
  }
}
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;

    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      margin-left: 30rpx;
      flex-basis: 5%;
    }

    &__search {
      flex-basis: 60%;
      width: 100%;
      height: 100%;

      &__box {
        width: 100%;
        height: 70%;
        padding: 10rpx 0;
        margin: 0 30rpx;
        border-radius: 60rpx 60rpx 0 60rpx;
        font-size: 24rpx;
      }

      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }

      &__text {
        color: #AAAAAA;
      }
    }
  }

  .logo-image {
    width: 60rpx;
    height: 60rpx;
    position: relative;
    margin-top: -15rpx;
  }

  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 50%;
  }

  /* 自定义导航栏内容 end */
  
  /* 轮播图 start */
  .swiper {
    border-radius: 10rpx;
    overflow: hidden;
  }
  /* 轮播图 end */

  /* 间隔线 start*/
  .tn-strip-bottom {
    width: 100%;
    border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }

  /* 间隔线 end*/

  /* 底部tabbar start*/
  .footerfixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 999;
    background-color: #FFFFFF;
    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }

  .tabbar {
    display: flex;
    align-items: center;
    min-height: 110rpx;
    justify-content: space-between;
    padding: 0;
    height: calc(110rpx + env(safe-area-inset-bottom) / 2);
    padding-bottom: calc(env(safe-area-inset-bottom) / 2);
  }

  .tabbar .action {
    font-size: 22rpx;
    position: relative;
    flex: 1;
    text-align: center;
    padding: 0;
    display: block;
    height: auto;
    line-height: 1;
    margin: 0;
    overflow: initial;
  }

  .tabbar .action .bar-icon {
    width: 100rpx;
    position: relative;
    display: block;
    height: auto;
    margin: 0 auto 10rpx;
    text-align: center;
    font-size: 42rpx;
  }

  .tabbar .action .bar-icon image {
    width: 50rpx;
    height: 50rpx;
    display: inline-block;
  }
</style>
