<template>
  <view class="index">
            
    <view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <Basic ref="basic"></Basic>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <NavItem ref="navItem"></NavItem>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <childItem ref="vip"></childItem>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <cartItem ref="template"></cartItem>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <UserItem ref="about"></UserItem>
      </scroll-view>
    </view>
    
    <tn-tabbar
      v-model="currentIndex"
      :list="tabbarList"
      activeColor="#838383"
      inactiveColor="#AAAAAA"
      activeIconColor="tn-cool-bg-color-7"
      :animation="true"
	  height='120'
      :safeAreaInsetBottom="true"
      @change="switchTabbar"
    ></tn-tabbar>

  </view>
</template>

<script>
  import Basic from './index1.vue'
  import NavItem from '@/pagesMarking/nav/index.vue'
  import TemplatePage from './index1.vue'
  import childItem from './index3.vue'
  import cartItem from '@/pagesMarking/cart/index.vue'
  import UserItem from '@/pages/user/index.vue'
  
  export default {
    components: {
      Basic,
      NavItem,
      TemplatePage,
      cartItem,
      UserItem,
	  childItem
    },
    data() {
      return {
        // 底部tabbar菜单数据
        tabbarList: [
          {
            title: '首页',
            activeIcon: 'count-fill',
            inactiveIcon: 'menu',
			iconSize: 50,
          },
          {
            title: '分类',
            activeIcon: 'honor-fill',
            inactiveIcon: 'honor',
            iconSize: 50,
          },
          {
            title: '逛逛',
            activeIcon: 'vip-fill',
            inactiveIcon: 'vip',
            activeIconColor: '#FFFFFF',
            inactiveIconColor: '#FFFFFF',
            iconSize: 50,
            out: true
          },
          {
            title: '购物车',
            activeIcon: 'discover-fill',
            inactiveIcon: 'discover',
            iconSize: 50,
            count: 100
          },
          {
            title: '我的',
            activeIcon: 'computer-fill',
            inactiveIcon: 'computer',
			iconSize: 50,
            dot: true
          }
        ],
        // tabbar当前被选中的序号
        currentIndex: 0,
        // 自定义底栏对应页面的加载情况
        tabberPageLoadFlag: []
      }
    },
    onLoad(options) {
      const index = Number(options.index || 0)
      // 根据底部tabbar菜单列表设置对应页面的加载情况
      this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
        return index === tabbar_index
      })
      this.switchTabbar(index)
    },
    methods: {
      // 切换导航
      switchTabbar(index) {
        this._switchTabbarPage(index)
      },
      
      
      // 导航页面滚动到底部
      tabbarPageScrollLower(e) {
      },
      
      // 切换导航页面
      _switchTabbarPage(index) {
        const selectPageFlag = this.tabberPageLoadFlag[index]
        if (selectPageFlag === undefined) {
          return
        }
        if (selectPageFlag === false) {
          this.tabberPageLoadFlag[index] = true
        }
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .index {
    overflow: hidden;
    height: 100%;
  }
  
  .custom-tabbar-page {
    height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2));
  }

</style>
