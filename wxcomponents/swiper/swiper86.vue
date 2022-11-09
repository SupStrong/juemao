<template>
    <view class="">
      <view class="tn-plan-content tn-margin tn-text-justify">
        <view v-for="(item,index) in planList" :key="index" class="tn-plan-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
          <text class="tn-plan-content__item--prefix">#</text> {{item.name}}
        </view>
      </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				planList: [{
				          name: '看书',
				          color: 'red',
				          time: '2021-12-13 06:20',
				        }, {
				          name: '早起',
				          color: 'cyan',
				          time: '8:37',
				        }, {
				          name: '做30个深蹲',
				          color: 'blue',
				        }, {
				          name: '散步',
				          color: 'green',
				        }, {
				          name: '写新的轮播效果',
				          color: 'orange',
				        }, {
				          name: '吃早餐',
				          color: 'purplered',
				        }, {
				          name: '陪猫猫玩',
				          color: 'purple',
				        }, {
				          name: '睡午觉',
				          color: 'brown',
				        }, {
				          name: '干饭饭',
				          color: 'yellowgreen',
				        }, {
				          name: '蔡猪北',
				          color: 'grey',
				        }]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  /* 计划内容 start*/
  .tn-plan-content {
    &__item {
      display: inline-block;
      line-height: 45rpx;
      padding: 10rpx 30rpx;
      margin: 20rpx 20rpx 5rpx 0rpx;
      
      &--prefix {
        padding-right: 10rpx;
      }  
    }
  }
</style>
