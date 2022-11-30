<template>
  <view class="">
    <navLevelA></navLevelA>
    <navLevelB></navLevelB>
    <navLevelC></navLevelC>
  </view>
</template>

<script>
import navLevelA from '@/wxcomponents/nav/components/navLevelA.vue';
import navLevelB from '@/wxcomponents/nav/components/navLevelB.vue';
import navLevelC from '@/wxcomponents/nav/components/navLevelC.vue';
  export default {
    data() {
      return {
      };
    },
	components:{
		navLevelA,
		navLevelB,
		navLevelC,
	}
  }
</script>

<style lang="scss" scoped>
</style>