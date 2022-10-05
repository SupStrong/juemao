<template>
  <view class="template-panoramic tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :isBack="false" :bottomShadow="false" :backgroundColor="navBarBackgroundColor">
      <view id="navbar" class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back">
          <view class="logo-pic tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/logo2.png')">
            <view class="logo-image">
            </view>
          </view> 
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center" :style="[navBarStyle]">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left" style="background-color: rgba(230,230,230,0.3);">
            <view class="custom-nav__search__icon tn-icon-search"></view>
            <view class="custom-nav__search__text tn-padding-left-xs">搜索 芊云全景</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    <swiper class="card-swiper" :circular="true"
      :autoplay="true" duration="500" interval="28000" @change="cardSwiper"> 
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <view class="swiper-item image-banner">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
        <block v-for="(item,index) in swiperList" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view>
    
    <!-- 方式15 start-->
    <view class="tn-flex tn-margin-xs tn-padding-top-sm tn-color-white icon-function" id="page_tips">
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-rocket"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis">约拍</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur ">
            <view class="tn-icon-honor"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis">创作</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-moon"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis">云币</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-identity"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis">认证</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 方式15 end-->
    
    <!-- 更多信息-->
    <view class="health-shadow tn-margin tn-color-black tn-bg-white" style="position: relative;z-index: 1;padding: 20rpx 6rpx;">
      <!-- 方式9 start-->
      <view class="tn-flex">
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white">
              <view class="tn-icon-camera"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">拍摄教程</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
              <view class="tn-icon-chemistry"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">功能实验</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
              <view class="tn-icon-vip"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">会员权益</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
              <view class="tn-icon-like-lack"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">萌新求助</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white">
              <view class="tn-icon-message"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">问题反馈</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式9 end-->
      <view class="tn-flex tn-padding-top-sm">
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
              <view class="tn-icon-cube"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">航拍中国</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white">
              <view class="tn-icon-copy"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">全景看房</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
              <view class="tn-icon-fire"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">全景旅游</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white">
              <view class="tn-icon-star"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">全景游戏</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
              <view class="tn-icon-menu-circle"></view>
            </view>  
            <view class="tn-color-black tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">更多功能</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式9 end-->  
    </view>
    
    <!-- banner start-->
    <view class="tn-flex tn-flex-wrap tn-padding-xs" style="margin-top: -30rpx;">
      <view class="" style="width: 100%;">
        <view class="image-piccapsule tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/capsule-banner/banner-tnui.png');">
           <view class="image-capsule">
           </view>
         </view>  
      </view>  
    </view>
    <!-- banner end-->
    
    

    
    <!-- <view class="tn-flex tn-flex-row-between">
      <view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
        推荐博主
      </view>
      <view class="justify-content-item tn-margin tn-text-lg tn-color-gray--disabled">
        <text class="tn-padding-xs">全部</text>
        <text class="tn-icon-topics"></text>
      </view>
    </view> -->
   
    
    
    <view class="">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
          热门项目
        </view>
        <view class="justify-content-item tn-margin tn-text-lg tn-color-gray--disabled">
          <text class="tn-padding-xs">全部</text>
          <text class="tn-icon-topics"></text>
        </view>
      </view>
      
      <view class="tn-flex tn-margin-left tn-margin-right tn-margin-top-sm">
        <view class="tn-flex-2">
          
          <view class="image-pic tn-margin-right" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/card.jpg')">
            <view class="image-tuniao1">
            </view>
          </view> 
          
        </view>
        <view class="tn-flex-1">
          <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg')">
            <view class="image-tuniao2">
            </view>
          </view> 
          <view class="image-pic tn-margin-top" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/banner1.jpg')">
            <view class="image-tuniao2">
            </view>
          </view> 
        </view>
      </view>
      
      
      <view class="tn-flex tn-flex-row-between tn-margin-top">
        <view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
          业务范围
        </view>
        <!-- <view class="justify-content-item tn-margin tn-text-xxl tn-color-gray--disabled">
          <text class="tn-padding-xs">全部</text>
          <text class="tn-icon-topics"></text>
        </view> -->
      </view>
      
      <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin-left tn-margin-right">
        <block v-for="(item, index) in tuniaoData" :key="index">
          <view class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between tn-color-white" :class="[`tn-bg-${item.color}`]">
            <view class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
              <!-- <view class="tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                <view :class="[`tn-icon-${item.icon}`]"></view>
              </view> -->
              <view class="tn-info__item__left__content">
                <view class="tn-info__item__left__content--title tn-text-xxl">{{ item.title }}</view>
                <view class="tn-info__item__left__content--data tn-padding-top-xs">
                {{ item.value }}
                <text class="tn-icon-right tn-padding-left-xs"></text>
                </view>
              </view>
            </view>
            <view class="tn-info__item__right">
              <view class="tn-info__item__right--icon">
                <view :class="[`tn-icon-${item.icon}`]"></view>
              </view>
            </view>
          </view>
        </block>
      </view>
      
    </view>


    <view class="tn-margin-top-sm">
      <tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height">
        <tn-tabs :list="fixedList" :current="current" :isScroll="false" activeColor="#000" bold="true" :fontSize="32" :badgeOffset="[20, 50]" @change="tabChange" backgroundColor="#FFFFFF" :height="110"></tn-tabs>
      </tn-sticky>
    </view>
    
    <view class="" style="padding: 30rpx 20rpx;">
      <tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
        <template v-slot:left="{ leftList }">
          <view v-for="(item, index) in leftList" :key="item.id" class="product__item">
            <view class="item__image">
              <tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage" :index="item.id" imgMode="widthFix"></tn-lazy-load>
            </view>
            <view class="item__data">
              <view class="item__title-container">
                <view v-if="item.newProduct" class="item__store-type tn-cool-bg-color-8">达人</view>
                <view v-else-if="item.storeType === 1" class="item__store-type tn-cool-bg-color-1">SVIP</view>
                <text class="item__title">{{ item.title }}</text>
              </view>
              <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
                <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
              </view>
              <!-- <view class="item__price-container">
                <text class="item__price--unit">￥</text>
                <text class="item__price--integer">{{ item.priceInteger }}</text>
                <text class="item__price--dot">.</text>
                <text class="item__price--decimal">{{ item.priceDecimal }}</text>
              </view> -->
              <view class="tn-flex tn-padding-right-sm tn-padding-top-sm tn-padding-bottom-xs">
                <view class="justify-content-item tn-flex">
                  <view style="margin-right: 10rpx;">
                    <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
                  </view>
                  <text class="tn-color-gray">{{ item.viewUser.viewUserCount }} 人在看</text>
                </view>
              </view>
            </view>
          </view>
        </template>
        <template v-slot:right="{ rightList }">
          <view v-for="(item, index) in rightList" :key="item.id" class="product__item">
            <view class="item__image">
              <tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage" :index="item.id" imgMode="widthFix"></tn-lazy-load>
            </view>
            <view class="item__data">
              <view class="item__title-container">
                <view v-if="item.storeType === 1" class="item__store-type tn-cool-bg-color-5">VIP</view>
                <text class="item__title">{{ item.title }}</text>
              </view>
              <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
                <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
              </view>
              <!-- <view class="item__price-container">
                <text class="item__price--unit">￥</text>
                <text class="item__price--integer">{{ item.priceInteger }}</text>
                <text class="item__price--dot">.</text>
                <text class="item__price--decimal">{{ item.priceDecimal }}</text>
              </view> -->
              <view class="tn-flex tn-padding-right-sm tn-padding-top-sm tn-padding-bottom-xs">
                <view class="justify-content-item tn-flex">
                  <view style="">
                    <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
                  </view>
                  <text class="tn-color-gray">{{ item.viewUser.viewUserCount }} 人在看</text>
                </view>
              </view>
            </view>
          </view>
        </template>
      </tn-waterfall>
    </view>
    
    <tn-load-more :status="loadStatus"></tn-load-more>
    
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      
      
      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/home_tnnew.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-home.png'></image> -->
        </view>
        <view class="tn-color-gray">首页</view>
      </view>
      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-discover tn-color-gray--dark">
          </view>  -->        
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-flower.png'></image> -->
        </view>
        <view class="tn-color-gray">圈子</view>
      </view>
      
      <!-- <view class="action bar-center">
        <view class="bar-circle tn-shadow-blur">
          <view class="tn-icon-camera-fill tn-color-white">
          </view>
        </view>
        <view class="tn-color-gray">发布</view>
      </view> -->
      
      <view class="action bar-center" @click="">
        <view class="nav-index-button">
          <view class="nav-index-button__content">
              <view class="nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <!-- <view class="tn-icon-logo-tuniao"></view> -->
                <view class="bar-circle">
                  <!-- <image class="" src='https://tnuiimage.tnkjapp.com/login/1/login_top3.png'></image> -->
                  <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-tiger.png'></image>
                </view>
              </view>  
          </view>
        
          <view class="nav-index-button__meteor">
            <view class="nav-index-button__meteor__wrapper">
              <view v-for="(item,index) in 6" :key="index" class="nav-index-button__meteor__item" :style="{transform: `rotateX(${-60 + (30 * index)}deg) rotateZ(${-60 + (30 * index)}deg)`}">
                <view class="nav-index-button__meteor__item--pic"></view>
              </view>
            </view>
          </view>
        </view>
        <!-- <view class="tn-color-gray">发布</view> -->
      </view>
      
      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-image-text tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/case_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-china.png'></image> -->
        </view>
        <view class="tn-color-gray">优选</view>
      </view>
      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-money.png'></image> -->
        </view>
        <view class="tn-color-gray">我的</view>
      </view>
    </view>
    
    
    
    <view class="tn-padding-xl"></view>
    
    <!-- 回到首页悬浮按钮-->
    <nav-index-button></nav-index-button>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplatePanoramic',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          title: '免费开源',
          name: '商业合作请联系作者',
          text: '微信：tnkewo',
          url: 'https://tnuiimage.tnkjapp.com/swiper/adno3.jpg',
        }, {
          id: 1,
          type: 'image',
          title: '图鸟南南',
          name: '欢迎加入东东们',
          text: '如果你也有不错的作品',
          url: 'https://tnuiimage.tnkjapp.com/swiper/adno4.jpg',
        }, {
          id: 2,
          type: 'image',
          title: '图鸟西西',
          name: '一起玩转scss',
          text: '用最少的代码做最骚的效果',
          url: 'https://tnuiimage.tnkjapp.com/swiper/adno5.jpg',
        }, {
          id: 3,
          type: 'image',
          title: '图鸟北北',
          name: '微信号 tnkewo',
          text: '商业合作请联系作者',
          url: 'https://tnuiimage.tnkjapp.com/swiper/adno2.jpg',
        }],
        
        current: 0,
        fixedList: [
          {name: '推荐'},
          {name: '附近'},
          {name: '最新'},
          {name: '精品'},
          {name: '人气', count: ''},
        ],

        tuniaoData: [
          {
            title: 'UI设计',
            icon: 'image-text-fill',
            color: 'red',
            value: '前往咨询'
          },
          {
            title: '小程序',
            icon: 'data-fill',
            color: 'orange',
            value: '前往咨询'
          },
          {
            title: '网站开发',
            icon: 'statistics-fill',
            color: 'purple',
            value: '前往咨询'
          },
          {
            title: '其他业务',
            icon: 'bankcard-fill',
            color: 'blue',
            value: '前往咨询'
          }
        ],
        navBarRectInfo: {},
        navBarChangebaseLineHeight: 0,
        navBarStyle: {
          color:'#FFFFFF',
          opacity: 1,
          display: 'flex'
        },
        navBarBackgroundColor: 'rgba(255, 255, 255, 0)',
        activeBgAnimation: {},
        
        /* 瀑布流*/
        loadStatus: 'loadmore',
        list: [],
        data: [
          {
            title: '广大军训快闪',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer1.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: true, // 是否为新品
            tags: ['军训汇演','青春校园'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 338
            },
          },
          {
            title: '万科神奇动物主场',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['空间设计'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 289
            },
          },
          {
            title: '北海世博园灯笼走廊',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: true, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 381
            },
          },
          {
            title: '浦江航拍夜上海',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: true, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 526
            },
          },
          {
            title: '2021建档百年外滩灯光秀',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 372
            },
          },
          {
            title: '广州纳达堡三室两厅',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
            storeType: 2, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['VR看房'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 694
            },
          },
          {
            title: '冰岛极光航拍',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
            storeType: 2, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['看世界'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 508
            },
          },
          {
            title: '泰山之巅',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/bag1.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['航拍中国'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 923
            },
          },
          {
            title: '广州分手塔',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/cup2.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['热门景点'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 989
            },
          },
          {
            title: '珠海澳门交界',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/pillow.jpg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
          }
        ]
      }
    },
    /* 瀑布流*/
    onLoad() {
      this.getRandomData()
    },
    onReachBottom() {
      this.getRandomData()
    },
    /* 顶部导航*/
    onReady() {
      this.$nextTick(() => {
        this.initNavBarRectInfo()
      })
    },
    onPageScroll() {
      this.updateNavBarRectInfo()
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      // resume
      resume(e) {
        this.cardCur2 = e.detail.current
      },
      // 初始化导航栏信息
      async initNavBarRectInfo() {
        const navBarRectInfo = await this._tGetRect('#navbar')
        const pageTipsRectInfo = await this._tGetRect('#page_tips')
        // console.log(navBarRectInfo, pageTipsRectInfo, navBarRectInfo?.top, pageTipsRectInfo?.top);
        if (!navBarRectInfo.hasOwnProperty('top') || !pageTipsRectInfo.hasOwnProperty('top')) {
          setTimeout(() => {
            this.initNavBarRectInfo()
          }, 10)
          return
        }
        this.navBarRectInfo = {
          top: navBarRectInfo.top
        }
        this.navBarChangebaseLineHeight = pageTipsRectInfo.top - navBarRectInfo.top
      },
      // 更新导航栏信息
      updateNavBarRectInfo() {
        this._tGetRect('#page_tips').then((res) => {
          const top = res?.top || 0
          if (!top) {
            return
          }
          const differHeight = top - this.navBarRectInfo.top
          const opacity = differHeight / this.navBarChangebaseLineHeight
          if (opacity < 0) {
            // this.navBarStyle.opacity = 1
            // this.navBarStyle.display = 'flex'
            this.navBarStyle.color = 'rgba(0, 0, 0, ${opacity})'
            this.navBarBackgroundColor = `rgba(255, 255, 255, 1)`
          } else {
            // this.navBarStyle.opacity = 1 - opacity
            // this.navBarStyle.display = 'flex'
            this.navBarStyle.color = 'rgba(255, 255, 255, 1)'
            this.navBarBackgroundColor = `rgba(255, 255, 255, ${1 - opacity})`
          }
          
          // console.log(top, differHeight, opacity);
        })
      },
      // 跳转到
      navTuniaoUI(e) {
        uni.navigateTo({
          url: '/pages/index/index'
        })
      },
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
      /* 瀑布流*/
      // 获取随机数据
      getRandomData() {
        this.loadStatus = 'loading'
        for (let i = 0; i < 10; i++) {
          let index = this.$t.number.randomInt(0, this.data.length - 1)
          let item = JSON.parse(JSON.stringify(this.data[index]))
          let price = this.getPrice(item.price)
          item.id = this.$t.uuid()
          item.priceInteger = price[0]
          item.priceDecimal = price[1]
          this.list.push(item)
        }
      },
      // 瀑布流加载完毕事件
      handleWaterFallFinish() {
        this.loadStatus = 'loadmore'
      },
      // 获取价格整数和小数部分
      getPrice(price) {
        const priceStr = String(price)
        if (priceStr.indexOf('.') !== -1) {
          return priceStr.split('.')
        } else {
          return [priceStr, '00']
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  .template-panoramic {
    // background-color: #FBFBFB;
  }
  
  .icon-function {
      position: relative;
      z-index: 1;
      margin: 20rpx 5rpx;
      margin-top: -420rpx;
  }

  /* 轮播视觉差 start */
  .card-swiper {
    height: 600rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    // padding: 0rpx 30rpx 90rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    opacity: 0;
  }
  
  .spot{
    background-color: #FFFFFF;
    opacity: 0.6;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    top: -60rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  
  
  /* 图标容器15 start */
 .icon15 {
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
       // border-radius: 50%;
       margin-bottom: 0rpx;
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
       }
     }
   }
 }
  
    
  /* 图标容器9 start */
    .icon9 {
      &__item {
        width: 30%;
        background-color: #FFFFFF;
        border-radius: 10rpx;
        transform: scale(1);
        transition: transform 0.3s linear;
        transform-origin: center center;
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          font-size: 50rpx;
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
          }
        }
      }
    }
  
  
  /* 阴影 start*/
  .health-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
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
        // color: #AAAAAA;
      }
    }
  }
  .logo-image{
    width: 65rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  

  /* 热门图片 start*/
  .image-tuniao1{
    padding: 164rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-tuniao2{
    padding: 75rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-tuniao3{
    padding: 90rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }
  /* 胶囊banner*/
  .image-capsule{
    padding: 100rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-piccapsule{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  
  
  /* 业务展示 start */
  .tn-info {
    
    &__container {
      margin-top: 10rpx;
      margin-bottom: 50rpx;
    }
    
    &__item {
      width: 48%;
      margin: 15rpx 0rpx;
      padding: 40rpx 30rpx;
      border-radius: 15rpx;
      
  
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/2.png);
        }
      
      &__left {
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
          font-size: 40rpx;
          margin-right: 20rpx;
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
          }
        }
        
        &__content {
          font-size: 25rpx;          
          
          &--data {
            color: rgba(255,255,255,0.5);
            margin-top: 5rpx;
            // font-weight: bold;
          }
        }
      }
      
      &__right {
        &--icon {
          position: absolute;
          right: 0rpx;
          top: 50rpx;
          font-size: 100rpx;
          width: 108rpx;
          height: 108rpx;
          text-align: center;
          line-height: 60rpx;
          opacity: 0.15;  
        }
      }
    }
  }
  /* 业务展示 end */
  
  .product__item {
    background-color: #FFFFFF;
    border-radius: 10rpx;
    overflow: hidden;
    margin: 0 10rpx;
    margin-bottom: 20rpx;
    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
    
    .item {
      /* 图片 start */
      &__image {
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
      }
      /* 图片 end */
      
      /* 内容 start */
      &__data {
        padding: 8rpx 14rpx;
      }
      
      /* 标题 start */
      &__title-container {
        text-align: justify;
        line-height: 38rpx;
        vertical-align: middle;
      }
      &__store-type {
        height: 28rpx;
        font-size: 20rpx;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 4rpx;
        border-radius: 6rpx;
        white-space: nowrap;
        text-align: center;
        top: -2rpx;
        margin-right: 6rpx;
      }
      &__title {
        
      }
      /* 标题 end */
      
      /* 标签 start */
      &__tags-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
      }
      &__tag {
        margin: 10rpx;
        color: #E83A30;
        border: 2rpx solid #E83A30;
        padding: 0 6rpx;
        border-radius: 10rpx;
        font-size: 20rpx;
        
        &:first-child {
          margin-left: 0rpx !important;
        }
      }
      /* 标签 end */
      
      /* 价格 start */
      &__price-container {
        font-size: 24rpx;
        color: #E83A30;
        font-weight: bold;
      }
      &__price {
        &--unit {
          
        }
        &--integer {
          font-size: 38rpx;
        }
        &--decimal {
          
        }
      }
      /* 价格 end */
      /* 内容 end */
    }
  }
  
  /* 底部tabbar start*/
  .footerfixed{
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
  
  .bar-center{
    animation: suspension 3s ease-in-out infinite;
  }
  
  @keyframes suspension {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.8rem);
    }
  }  
  
  .tabbar .action .bar-icon {
  	width: 100rpx;
  	position: relative;
  	display: block;
  	height: auto;
  	margin: 0 auto 10rpx;
  	text-align: center;
  	font-size: 42rpx;
    // line-height: 50rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
  
  .tabbar .action .bar-circle {
    position: relative;
    display: block;
    margin: 0rpx auto 0rpx;
    text-align: center;
    font-size: 52rpx;
    line-height: 90rpx;
    // background-color: #01BEFF;
    width: 100rpx !important;
    height: 100rpx !important;
    overflow: hidden;
    // border-radius: 50%;
    // box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
    //   0px -8px 40px rgba(255, 255, 255, 1),
    //   inset 0px -10px 10px rgba(70,23,129, 0.05),
    //   inset 0px 10px 20px rgba(255, 255, 255, 1);
    // box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
  }
  
  .tabbar .action .bar-circle image {
    width: 100rpx;
  	height: 100rpx;
  	display: inline-block;
    margin: 0rpx auto 0rpx;
  }
  
  /* 流星+悬浮 */
  .nav-index-button {
    animation: suspension 3s ease-in-out infinite;
    z-index: 999999;
    
    
    &__content {
      position: absolute;
      width: 100rpx;
      height: 100rpx;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;
        transform: scale(0.85);
        
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
          // background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
        }
      }
    }
    
    &__meteor {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100rpx;
      height: 100rpx;
      transform-style: preserve-3d;
      transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
      
      &__wrapper {
        width: 100rpx;
        height: 100rpx;
        transform-style: preserve-3d;
        animation: spin 20s linear infinite;
      }
      
      &__item {
        position: absolute;
        width: 100rpx;
        height: 100rpx;
        border-radius: 1000rpx;
        left: 0;
        top: 0;
        
        &--pic {
          display: block;
          width: 100%;
          height: 100%;
          background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc1.png) no-repeat center center;
          background-size: 100% 100%;
          animation: arc 4s linear infinite;
        }
      }
    }
  }
  
  
  @keyframes suspension {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.6rem);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotateX(0deg);
    }
  
    100% {
      transform: rotateX(-360deg);
    }
  }
  
  @keyframes arc {
    to {
      transform: rotate(360deg);
    }
  }
  
</style>
