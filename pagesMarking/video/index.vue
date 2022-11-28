<template>
  <view class="template-circle tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <view class="custom-nav__back" @click="tn('')">
          <view class="tn-icon-add-circle" style="text-shadow:  1rpx 0 0 #FFF, 0 1rpx 0 #FFF, -1rpx 0 0 #FFF , 0 -1rpx 0 #FFF;"></view>
        </view>
        <view class="tn-margin-top tn-margin-left" style="text-shadow:  1rpx 0 0 #FFF, 0 1rpx 0 #FFF, -1rpx 0 0 #FFF , 0 -1rpx 0 #FFF;">
          <tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" :bold="true" :fontSize="36"></tn-tabs>
        </view>
      </view>

    </tn-nav-bar>
    
    <!-- 发现 -->
    <view class="" v-if="current==0">
      
      <swiper class="card-swiper" :circular="true" vertical="true"
        :autoplay="false" duration="500" interval="5000" @change="cardSwiper" > 
        <swiper-item v-for="(item,index) in swiperList0" :key="index" :class="cardCur==index?'cur':''">
          <view class="swiper-item image-banner">
			 <video :id="`video-${item.id}`" :src="item.mp4"
			  loop style="height: 100vh;width: 100vw;" v-if="item.type == 'video'"></video>
			  <swiper class="card-swiper" :circular="true"
				:autoplay="true" duration="500" interval="5000" @change="cardSwiper" v-if="item.type == 'imgList'"> 
				<swiper-item v-for="(citem,cindex) in item.imgList" :key="index" :class="cardCur==cindex?'cur':''"  style="display: flex;align-items: center;;width: 100%;">
				  <view class="swiper-item image-banner">
					<image :src="citem" mode="aspectFill" style="max-height: 80vh;width: 100%;"></image>
				  </view>
				</swiper-item>
			  </swiper>
			  <view class="indication">
				  <block v-for="(item,index) in swiperListText" :key="index">
					  <view class="spot" :class="cardCur==index?'active':''"></view>
				  </block>
			  </view>
          </view>
          <view class="swiper-item-icon image-banner">
            <view class="">
              <view class="user-pic button-0">
                <view class="user-image">
                  <view class="tn-shadow-blur" :style="'background-image:url('+ item.url + ');width: 87rpx;height: 87rpx;background-size: cover;overflow: hidden;'">
                  </view>
                </view>
              </view>
              <view class="icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-1">
                <view class="tn-icon-like-fill" style="font-size: 70rpx;"></view>
                <view class="tn-margin-top-xs" style="font-size: 20rpx;position: relative;">{{item.like}}</view>
              </view>
              <view class="icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-2">
                <view class="tn-icon-message-fill" style="font-size: 70rpx;"></view>
                <view class="tn-margin-top-xs" style="font-size: 20rpx;position: relative;">{{item.message}}</view>
              </view>
              <view class="icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-3">
                <view class="tn-icon-send-fill" style="font-size: 70rpx;"></view>
                <view class="tn-margin-top-xs" style="font-size: 20rpx;position: relative;">{{item.share}}</view>
              </view>
            </view>
			<view class="electric-house">
				<view class="headerMain">
					<view class="headerInfo">
						<view class="headerTitle">
							<image src="" alt="" class="jinghao" />
							<text class="headerTitleDsc">宿舍生活</text>
						</view>
						<view class="headerHot">
							<image src="" alt="" class="iconfire" />
							732人追捧</view>
							<view class="headerInfoDesc">
								<text class="quotationMark">“</text>
								<text class="desc">宿舍好物，让生活舒适感飙升~</text>
								<text class="quotationMark">”</text>
							</view>
						<view class="headerDes">
							<view class="goodsBox">
								<image src="https://m.360buyimg.com/babel/jfs/t1/179650/19/29949/90602/63771db0E81534097/53311d8f636ef38d.jpg.avif" alt="" class="iconmore" />
							</view>
							<view class="goodsBox">
								<image src="https://m.360buyimg.com/babel/jfs/t1/179650/19/29949/90602/63771db0E81534097/53311d8f636ef38d.jpg.avif" alt="" class="iconmore" />
							</view>
						</view>
				</view>
			</view>
			</view>
			
           
            <view class="swiper-item-text">
              <view class="tn-color-white tn-text-xl">
                <text class="tn-icon-topics tn-padding-right-xs"></text>
                <text class="tn-text-bold">{{item.user}}</text>
                
              </view>
              <view class="tn-color-white tn-padding-top-xs tn-text-lg clamp-text-2" style="width: 72%;">
                {{item.title}}
              </view>
            </view>       
            
          </view>
		  
          
        </swiper-item>
      </swiper>
      
    </view>
    <!-- 压屏窗-->
      <view class="tn-flex" style="margin-bottom: 100rpx;padding-top: 46vh;">
        <view class="tn-flex-1 tn-margin-sm tn-radius" @click="navEdit">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
              <view class="tn-icon-camera-fill"></view>
            </view>  
            <view class="tn-color-white tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">发布动态</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-sm tn-radius" @click="navCreate">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
              <view class="tn-icon-flag-fill"></view>
            </view>  
            <view class="tn-color-white tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">发起活动</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-sm tn-radius" @click="navBuild">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
              <view class="tn-icon-topics-fill"></view>
            </view>  
            <view class="tn-color-white tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">创建圈子</text>
            </view>
          </view>
        </view>
      </view>
    </tn-landscape> 
        
  </view>
</template>

<script>
  export default {
    name: 'CirclePage',
    data(){
      return {
          cardCur: 0,
          swiperList0: [{
            id: 0,
            type: 'imgList',
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699066-assets/web-upload/f7a37b29-506a-4e79-937f-826334902bb4.jpeg',
            mp4: 'https://tnuiimage.tnkjapp.com/new/111.mp4',
            user: '图鸟猪猪',
            title: '晚风轻踩着云朵，月亮在贩售快乐，你从银河背后靠近我，我与星辉一同为你沉沦。。',
            like: '12.9W',
            message: '1.6W',
            share: '2.2W',
			imgList:['https://tnuiimage.tnkjapp.com/shop/cup1.jpg','https://tnuiimage.tnkjapp.com/swiper/read.jpg'],
          }, {
            id: 1,
            type: 'video',
            url: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
            mp4: 'https://tnuiimage.tnkjapp.com/new/22.mp4',
            user: '图鸟北北',
            title: '我不喜欢带伞，因为雨水从不滴落在我的心上；心若向阳，无惧远方。。',
            like: '231',
            message: '35',
            share: '16'
            }, {
            id: 2,
            type: 'video',
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664179989916-assets/web-upload/eda197eb-42ce-44b1-9b14-fce3481db603.jpeg',
            mp4: 'https://tnuiimage.tnkjapp.com/new/111.mp4',
            user: '你的名字',
            title: '为什么我没能早点遇见你...',
            like: '292',
            message: '108',
            share: '63'
          }],
          current: 0,
          scrollList: [
            {name: '推荐'},
            {name: '关注'},
            {name: '朋友', count: ''}
          ],
          // 内容默认隐藏显示的高度
          contentHideShowHeight: 0,
          adList: [
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad1.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad2.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad3.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad4.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad5.jpg'}
          ],
          adAutoplay: false,
          
          /* 压屏窗*/
          show2: false,
          maskCloseable: true,
      }
    },
    onLoad() {
      this.initContentData()
      this.contentHideShowHeight = uni.upx2px(56) * 3
    },
    onReady() {
      // this.$nextTick(() => {
      //   this.getContentRectInfo()
      // })
    },
    onShow() {
      this.adAutoplay = true
    },
    onHide() {
      this.adAutoplay = false
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
        for (let i = 0; i < this.swiperList0.length; i++) {
          const videoContext = uni.createVideoContext(`video-${this.swiperList0[i]['id']}`, this)
          if (i === this.cardCur) {
            // #ifdef H5
            videoContext.play()
            // #endif
            // #ifndef H5
            videoContext.play()
            // #endif
            
          } else {
            // #ifdef MP-WEIXIN
            videoContext.stop()
            // #endif
            // #ifndef MP-WEIXIN
            videoContext.pause()
            // #endif
          }
        }
      },
      // 暂停所有视频
      stopAllVideo() {
        this.current = 0
      },
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // 震动跳转
      navEdit(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/circlePages/edit'
        })
      },
      // 震动跳转
      navCreate(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/circlePages/create'
        })
      },
      // 震动跳转
      navBuild(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/circlePages/build'
        })
      },
      // 处理内容，给内容添加对应的标识信息
      initContentData() {
        this.content.forEach((item, index) => {
          // 是否需要隐藏内容
          item.hideContent = false
          // 显示所有内容
          item.showAllContent = false
          // 内容容器的实际高度
          item.contentContainerHeight = 0
          // 内容容器是否初始化完成
          item.contentContainerInit = false
          this.$set(this.content, index, item)
        })
      },
      // 获取内容容器的信息
      getContentRectInfo() {
        let contentRect = {}
        const query = uni.createSelectorQuery().in(this)
        // 筛选出存在内容的数据
        this.content.forEach((item, index) => {
          if (item?.content) {
            query.select(`#blogger__content--${index}`).boundingClientRect()
            contentRect[index] = item
          }
        })
        // 获取所有内容的宽高信息
        query.exec(res => {
          if (!res) {
            setTimeout(() => {
              this.getContentRectInfo()
            }, 10)
            return
          }
          res.map((item) => {
            // 获取对应的标号
            const id = item.id
            const idIndex = /blogger__content--(\d)/.exec(id)[1]
            let contentItem = this.content[idIndex]
            contentItem.hideContent = item.height > this.contentHideShowHeight
            contentItem.showAllContent = false
            contentItem.contentContainerHeight = item.height
            contentItem.contentContainerInit = true
            this.$set(this.content, idIndex, contentItem)
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .template-circle{
    max-height: 100vh;
	background-color: #000;
  }
  /* 底部安全边距 start*/
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
    height: calc(140rpx + constant(safe-area-inset-bottom));
  }
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 50rpx;
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
  .logo-image{
    width: 60rpx;
    height: 60rpx;
    position: relative;
    margin-top: -15rpx;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  
  
  /* 博主头像 start*/
  .image-circle{
    // padding: 95rpx;
    width: 190rpx;
    height: 190rpx;
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
  
  
/* 文章内容 start*/
  .blogger {
    &__item {
      padding: 30rpx;
    }
    
    &__author {
      &__btn {
        margin-right: -12rpx;
        opacity: 0.5;
      }
    }
    
    &__desc {
      line-height: 55rpx;
      
      &__label {
        padding: 0 20rpx;
        margin: 0rpx 18rpx 0 0;
        
        &--prefix {
          color: #00FFC8;
          padding-right: 10rpx;
        }
      }
      &__content {
        
      }
    }
    
    &__content {
      margin-top: 18rpx;
      padding-right: 18rpx;
      
      &__data {
        line-height: 46rpx;
        text-align: justify;
        overflow: hidden;
        transition: all 0.25s ease-in-out;

      }
      
      &__status {
        margin-top: 10rpx;
        font-size: 26rpx;
        color: #82B2FF;
      }
    }
    
    &__main-image {
      border-radius: 16rpx;
      
      &--1 {
        max-width: 80%;
        max-height: 300rpx;
      }
      
      &--2 {
        max-width: 260rpx;
        max-height: 260rpx;
      }
      
      &--3 {
        height: 212rpx;
        width: 100%;
      }
    }
    
    &__count-icon {
      font-size: 40rpx;
      padding-right: 5rpx;
    }
    
    &__ad {
      width: 100%;
      height: 500rpx;
      transform: translate3d(0px, 0px, 0px) !important;
      
      ::v-deep .uni-swiper-slide-frame {
        transform: translate3d(0px, 0px, 0px) !important;
      }
      .uni-swiper-slide-frame {
        transform: translate3d(0px, 0px, 0px) !important;
      }
      
      &__item {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-origin: left center;
        transform: translate3d(100%, 0px, 0px) scale(1) !important;
        transition: transform 0.25s ease-in-out;
        z-index: 1;
        
        &--0 {
          transform: translate3d(0%, 0px, 0px) scale(1) !important;
          z-index: 4;
        }
        &--1 {
          transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
          z-index: 3;
        }
        &--2 {
          transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
          z-index: 2;
        }
      }
      
      &__content {
        border-radius: 40rpx;
        width: 640rpx;
        height: 500rpx;
        overflow: hidden;
      }
      
      &__image {
        width: 100%;
        height: 100%;
      }
    }
  }
  /* 文章内容 end*/
   
   /* 间隔线 start*/
  .tn-strip-bottom {
   width: 100%;
   border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }
   /* 间隔线 end*/
  
  /* 广告内容 start */
  .ad-image{
    width: 80rpx;
    height: 80rpx;
    position: relative;
  }
  .ad-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20%;
  }
  /* 自定义导航栏内容 end */
  
  
  /* 全屏轮播  start*/
  .card-swiper {
    height: 100vh !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    // height: 100vh;
    border-radius: 0rpx;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    will-change: transform;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
    will-change: transform;
  }
    
    .card-swiper swiper-item .swiper-item-text {
      margin-top: -360rpx;
      // margin-top: calc(-380rpx + env(safe-area-inset-bottom) / 2);
      // margin-top: calc(-380rpx + constant(safe-area-inset-bottom));
      width: 100%;
      display: block;
      height: 50%;
      border-radius: 10rpx;
      transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
      transition: all 0.6s ease 0s;
      will-change: transform;
      overflow: hidden;
    }
      
    .card-swiper swiper-item.cur .swiper-item-text {
      margin-top: -360rpx;
      // margin-top: calc(-380rpx + env(safe-area-inset-bottom) / 2);
      // margin-top: calc(-380rpx + constant(safe-area-inset-bottom));
      width: 100%;
      transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
      transition: all 0.6s ease 0s;
      will-change: transform;
      text-shadow: 0rpx 10rpx 20rpx rgba(0,0,0,0.1);
    }  
  
  .card-swiper swiper-item .swiper-item-icon {
    // transform: translate(0rpx, 0rpx) scale(1, 1);
    transition: all 0.6s ease 0s;
    // overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-icon {
    // transform: translate(0rpx, 0rpx) scale(1, 1);
    transition: all 0.6s ease 0s;
  }

  /* 用户头像 start */
  .user-image {
    width: 87rpx;
    height: 87rpx;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  
  }
  
  .user-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border: 6rpx solid rgba(255,255,255,0.9);
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
    // background-color: #FFFFFF;
  }
  
  
  /* 图标容器15 start */
    .icon15 {
      &__item {
        width: 30%;
        border-radius: 10rpx;
        padding: 30rpx;
        margin: 20rpx 10rpx;
        transform: scale(1);
        transition: transform 0.3s linear;
        transform-origin: center center;
        
        &--icon {
          color: #EAEBEF;
          width: 90rpx;
          height: 90rpx;
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
    
              
          }
        }
      }
    }
    
    /* 按钮 */
    .button-0 {
      position: fixed;
      /* bottom:200rpx;
        right: 20rpx; */
      bottom: 52%;
      right: 30rpx;
      z-index: 1001;
      border-radius: 100px;
      opacity: 0.9;
    }
    
    /* 按钮 */
    .button-1 {
      position: fixed;
      /* bottom:200rpx;
        right: 20rpx; */
      bottom: 41%;
      right: 30rpx;
      z-index: 1001;
      border-radius: 100px;
      opacity: 0.9;
    }
    .button-2 {
      position: fixed;
      /* bottom:200rpx;
        right: 20rpx; */
      bottom: 33%;
      right: 30rpx;
      z-index: 1001;
      border-radius: 100px;
      opacity: 0.9;
    }
    .button-3 {
      position: fixed;
      /* bottom:200rpx;
        right: 20rpx; */
      bottom: 25%;
      right: 30rpx;
      z-index: 1001;
      border-radius: 100px;
      opacity: 0.9;
    }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: fixed;
    // display:flex;
    display: block;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #000;
    opacity: 0.3;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    margin: 20rpx 0 !important;
    left: 95vw;
    top: -60vh;
    position: relative;
  }
  
  .spot.active{
    opacity: 0.6;
    height: 30rpx;
    background-color: #000;
  }  
  
  /* 资讯主图 start*/
  .image-article {
    border-radius: 8rpx;
    border: 1rpx solid #F8F7F8;
    width: 200rpx;
    height: 200rpx;
    position: relative;
  }
  
  .image-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 10rpx;
  }
  
  .article-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  /* 文字截取*/
  .clamp-text-1 {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .clamp-text-2 {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 35rpx;
      padding: 5rpx 25rpx;
  
      &--prefix {
        padding-right: 10rpx;
      }
    }
  }
  
  
  /* 图标容器9 start */
  .icon9 {
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
        width: 110rpx;
        height: 110rpx;
        font-size: 65rpx;
        border-radius: 50%;
        margin: 20rpx 40rpx;
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
    }
  }
  
  
  /* 悬浮 */
  .tnxuanfu{
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
  /* 悬浮按钮 */
  .button-shop {
    width: 90rpx;
    height: 90rpx;
    display: flex;
    flex-direction: row;
    position: fixed;
    /* bottom:200rpx;
      right: 20rpx; */
    left: 5rpx;
    top: 5rpx;
    z-index: 1001;
    border-radius: 100px;
    opacity: 0.9;
  }
  
  
  /* 按钮 */
  .edit {
    bottom: 300rpx;
    right: 75rpx;
    position: fixed;
    z-index: 9999;
  }
  
  
  .pa,
  .pa0 {
    position: absolute
  }
  
  .pa0 {
    left: 0;
    top: 0
  }
  
  
  .bg0 {
    width: 100rpx;
    height: 100rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .bg1 {
    width: 100%;
    height: 100%;
  }
  
  
  
  
  .hx-box {
    top: 50%;
    left: 50%;
    width: 100rpx;
    height: 100rpx;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
  }
  
  .hx-box .pr {
    width: 100rpx;
    height: 100rpx;
    transform-style: preserve-3d;
    animation: hxz 20s linear infinite;
  }
  
  @keyframes hxz {
    0% {
      transform: rotateX(0deg);
    }
  
    100% {
      transform: rotateX(-360deg);
    }
  }
  
  
  
  .hx-box .pr .pa0 {
    width: 100rpx;
    height: 100rpx;
    /* border: 4px solid #5ec0ff; */
    border-radius: 1000px;
  }
  
  .hx-box .pr .pa0 .span {
    display: block;
    width: 100%;
    height: 100%;
    background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat center center;
    background-size: 100% 100%;
    animation: hx 4s linear infinite;
  }
  
  @keyframes hx {
    to {
      transform: rotate(360deg);
    }
  }
  
  .hx-k1 {
    transform: rotateX(-60deg) rotateZ(-60deg)
  }
  
  .hx-k2 {
    transform: rotateX(-30deg) rotateZ(-30deg)
  }
  
  .hx-k3 {
    transform: rotateX(0deg) rotateZ(0deg)
  }
  
  .hx-k4 {
    transform: rotateX(30deg) rotateZ(30deg)
  }
  
  .hx-k5 {
    transform: rotateX(60deg) rotateZ(60deg)
  }
  
  .hx-k6 {
    transform: rotateX(90deg) rotateZ(90deg)
  }
 
 .electric-house .headerMain {
   position: absolute;
   left: 3.4667vw;
   top: 31.4667vw;
 }
 .electric-house .headerInfo {
   width: 51.2vw;
   height: 45.6vw;
   color: #fff;
   margin-top: 	650rpx;
 }
 .electric-house .headerInfo .headerTitle {
   white-space: nowrap;
   margin-bottom: 1.4222vw;
 }
 .electric-house .headerInfo .headerTitle .jinghao {
   width: 4.2667vw;
   height: 5.1556vw;
   vertical-align: middle;
   display: inline-block;
 }
 .electric-house .headerInfo .headerTitle .headerTitleDsc {
   width: 51.2vw;
   height: 9.9556vw;
   font-size: 8.5333vw;
   font-family: FZRuiZhengHeiS-B-GB;
   font-weight: 700;
   color: #fff;
   margin-left: 0.9778vw;
   white-space: nowrap;
   vertical-align: middle;
 }
 .electric-house .headerInfo .headerHot {
   height: 4.0889vw;
   background: linear-gradient(90deg, #ffd7d7, #ffe6e6 35.8596712351%, #ffefb7);
   border-radius: 2.0444vw;
   margin-bottom: 3.2vw;
   white-space: nowrap;
   font-size: 2.4889vw;
   color: #212121;
   vertical-align: middle;
   font-family: PingFang SC;
   font-weight: 400;
   line-height: 4.0889vw;
   display: inline-block;
   padding-right: 1.7778vw;
 }
 .electric-house .headerInfo .headerHot .iconfire {
   width: 1.7778vw;
   height: 2.1333vw;
   margin-left: 1.7778vw;
   margin-right: 0.4444vw;
   vertical-align: middle;
   display: inline-block;
 }
 .electric-house .headerInfo .headerInfoDesc {
   background: linear-gradient(
     270deg,
     transparent,
     #000 51.0968506336%,
     transparent
   );
   opacity: 1;
   width: 57.3333vw;
   height: 5.6889vw;
   white-space: nowrap;
   margin-bottom: 3.0222vw;
   display: flex;
   align-items: center;
 }
 .electric-house .headerInfo .headerInfoDesc .quotationMark {
   width: 2.5778vw;
   height: 4vw;
   font-size: 5.3333vw;
   font-family: Arial;
   font-weight: 700;
   vertical-align: top;
   color: #fff;
 }
 .electric-house .headerInfo .headerInfoDesc .desc {
   font-size: 2.9333vw;
   font-family: PingFang SC;
   font-weight: 500;
   vertical-align: top;
   color: #fff;
 }
 .electric-house .headerInfo .headerDes {
   display: flex;
   justify-content: start;
   width: 46.2222vw;
   height: 18.6667vw;
 }
 .electric-house .headerInfo .headerDes .goodsBox {
   font-size: 0;
   margin-right: 1.3333vw;
   width: 18.6667vw;
   height: 18.6667vw;
   border-radius: 2.6667vw;
   border: 0.5333vw solid hsla(0, 0%, 100%, 0.3);
   background-color: #fff;
   overflow: hidden;
   display: inline-block;
 }
 .electric-house .headerInfo .headerDes .goodsBox image {
   height: 100%;
   width: 100%;
 }
 .electric-house .headerInfo .headerDes .iconBox {
   width: 6.2222vw;
   height: 18.6667vw;
   display: inline-block;
 }
 .electric-house .headerInfo .headerDes .iconBox .iconmore {
   box-sizing: initial;
   width: 6.2222vw;
   height: 18.6667vw;
 }
 .electric-house .headerSwiper {
   width: 100%;
   height: 25.0667vw;
   position: absolute;
   bottom: 2.8444vw;
 }
</style>
