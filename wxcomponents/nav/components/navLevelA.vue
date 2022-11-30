<template>
	<view>
		<tn-scroll-list :indicatorWidth="100" :indicatorBarWidth="30" indicatorColor="#FFE2D9"
		  indicatorActiveColor="#FF7043">
		  <view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
			<block v-for="(item, index) in historyData" :key="index">
			  <view class="tn-flex-1 tn-padding-sm tn-radius">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
				  <view class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
					:class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
					<view :class="[`tn-icon-${item.icon}`]"></view>
				  </view>
				  <view class="tn-color-black tn-text-df tn-text-center tn-margin-top-sm">
					<text class="tn-text-ellipsis">{{ item.title }}</text>
				  </view>
				</view>
			  </view>
			</block>
		  </view>
		</tn-scroll-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyData: [{
					title: '分销中心',
					icon: 'organizatio',
					color: 'orange',
				  },
				  {
					title: '积分商城',
					icon: 'level',
					color: 'purple',
				  },
				  {
					title: '限时秒杀',
					icon: 'clock',
					color: 'blue',
				  },
				  {
					title: '社区团购',
					icon: 'team',
					color: 'purplered',
				  },
				  {
					title: '大转盘',
					icon: 'group-circle',
					color: 'teal',
				  },
				  {
					title: '商品核销',
					icon: 'scan',
					color: 'orangered',
				  },
				  {
					title: '满减优惠',
					icon: 'coupon',
					color: 'indigo',
				  },
				  {
					title: '视频直播',
					icon: 'video',
					color: 'green',
				  }
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  /* 图标容器11 start */
  .icon11 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;

      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;

        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
        }
      }
    }
  }
</style>
