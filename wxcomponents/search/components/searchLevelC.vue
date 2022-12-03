<template>
	<view class="zebra-jinkou-merged-header tmg-2021-header  has-color hack_by_hideHeader_pt20_under_ios9 transparent">
		<view class="background"></view>
		<view class="merged-header">
			<view class="tmallhk-site-icon">
				<image src="https://gw.alicdn.com/imgextra/i4/O1CN01kzM95a1KJznl4Uxko_!!6000000001144-2-tps-80-80.png_110x10000.jpg_.webp" style="width: 162rpx;height: 50rpx;">
			</view>

			<view class="search-wrapper">
				<image src="https://gw.alicdn.com/imgextra/i4/O1CN01kzM95a1KJznl4Uxko_!!6000000001144-2-tps-80-80.png_110x10000.jpg_.webp" style="width: 36rpx;height: 36rpx">
				<span class="hot-search" >全球新发现</span>
			</view>

			<view class="import-header custom-area" id="custom-header-placeholder"></view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
 .zebra-jinkou-merged-header.transparent .cart .cart-svg,
 .zebra-jinkou-merged-header.transparent .more-svg,
 .zebra-jinkou-merged-header.transparent .tmallhk-site-icon .site-icon {
  fill: #fff;
}
.hidden {
  display: none;
}
.need-head {
  height: 50px;
  padding-top: var(--safe-area-inset-top);
}
 .zebra-jinkou-merged-header {
  padding: 0 12px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2002;
  background-color: transparent;
  padding-top: var(--safe-area-inset-top);
  display: flex;
  align-items: center;
}
 .zebra-jinkou-merged-header .background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  -webkit-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}
 .zebra-jinkou-merged-header .merged-header {
  position: relative;
  padding: 10px 0;
  height: 30px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-direction: row;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
 .zebra-jinkou-merged-header .merged-header .tmallhk-site-icon {
  position: relative;
  margin-top: -6px;
  width: 81px;
  height: 25px;
  -webkit-transition: width 0.3s;
  -moz-transition: width 0.3s;
  transition: width 0.3s;
}
 .zebra-jinkou-merged-header .merged-header .search-wrapper {
  position: relative;
  margin-left: 10px;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  -moz-transition: transform 0.4s, -moz-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s, -moz-transform 0.4s;
  width: 100%;
  height: 29px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-direction: row;
  padding-left: 7px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  will-change: width;
}
 .zebra-jinkou-merged-header .merged-header .search-wrapper .search-icon {
  width: 18px;
  height: 18px;
}
 .zebra-jinkou-merged-header .merged-header .search-wrapper .hot-search {
  margin-left: 4px;
  color: #ccc;
  font-family: PingFang SC;
  text-decoration: none;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 210px;
  font-size: 12px;
  font-weight: 200;
  -webkit-transform-origin: 0 center;
  -moz-transform-origin: 0 center;
  -ms-transform-origin: 0 center;
  transform-origin: 0 center;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
}
@media screen and (max-width: 356px) {
   .zebra-jinkou-merged-header .merged-header .search-wrapper .hot-search {
    display: none;
  }
}
 .zebra-jinkou-merged-header .merged-header .btn-action-follow {
  margin-left: 6px;
  width: 57px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
 .zebra-jinkou-merged-header .merged-header .btn-action-follow .follow-icon {
  display: none;
  margin-left: -5px;
  width: 26px;
  height: 24px;
  -o-object-fit: contain;
  object-fit: contain;
}
 .zebra-jinkou-merged-header .merged-header .btn-action-follow.active {
  background: #fff;
  color: #333;
}
 .zebra-jinkou-merged-header .merged-header .btn-action-follow.active .follow-icon {
  display: block;
}
 .zebra-jinkou-merged-header.has-color .background {
  opacity: 1;
  background: #6746f9;
}
 .zebra-jinkou-merged-header.transparent:not([class~='has-color']) .background {
  opacity: 0;
}
 .zebra-jinkou-merged-header.transparent.has-background .background {
  opacity: 1;
  background: #fff;
}
 .zebra-jinkou-merged-header.transparent.has-background .search-wrapper {
  background-color: #f2f0f2;
}
 .zebra-jinkou-merged-header.transparent.has-background .search-wrapper .hot-search {
  color: #8f8e92;
}
@media screen and (max-width: 356px) {
   .zebra-jinkou-merged-header.transparent.has-background .search-wrapper .hot-search {
    display: block;
  }
}
 .zebra-jinkou-merged-header.transparent.has-background .search-wrapper .search-icon g {
  stroke: #b5b5b5;
}
 .zebra-jinkou-merged-header.transparent.has-background .btn-action-follow.active {
  -webkit-box-shadow: 0 2.5px 7.5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2.5px 7.5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2.5px 7.5px rgba(0, 0, 0, 0.1);
}
 .zebra-jinkou-merged-header.transparent .goback-btn-icon .back-svg {
  stroke: #fff;
}
 .zebra-jinkou-merged-header.transparent .search-wrapper {
  border: none;
}
 .zebra-jinkou-merged-header.transparent .search-wrapper .hot-search {
  color: #ccc;
}
 .zebra-jinkou-merged-header.light-mode .goback-btn-icon .back-svg,
 .zebra-jinkou-merged-header.transparent.has-background .goback-btn-icon .back-svg {
  -webkit-transition: stroke 0.4s;
  -moz-transition: stroke 0.4s;
  transition: stroke 0.4s;
  stroke: var(--color-text-0, #333);
}
 .zebra-jinkou-merged-header.light-mode .tmallhk-site-icon .site-icon,
 .zebra-jinkou-merged-header.transparent.has-background .tmallhk-site-icon .site-icon {
  fill: var(--color-brand-1, #7c48db);
}
 .zebra-jinkou-merged-header.light-mode .cart .cart-svg,
 .zebra-jinkou-merged-header.light-mode .more-svg,
 .zebra-jinkou-merged-header.transparent.has-background .cart .cart-svg,
 .zebra-jinkou-merged-header.transparent.has-background .more-svg {
  fill: var(--color-text-0, #333);
}
 .zebra-jinkou-merged-header.light-mode .search-wrapper {
  color: #ccc;
  border: 2px solid var(--color-brand-1, #7c48db);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
 .zebra-jinkou-merged-header.light-mode .search-wrapper .hot-search {
  color: #ccc;
}
 .zebra-jinkou-merged-header.has-background .tmallhk-site-icon {
  opacity: 0;
  width: 0;
}
 .zebra-jinkou-merged-header.has-background .search-wrapper {
  color: #ccc;
  border: none;
}
 .zebra-jinkou-merged-header.has-background .search-wrapper .hot-search {
  color: #ccc;
}
.TMG_transparent_navigtion_adapter {
  margin: 0;
  margin-top: var(--safe-area-inset-top);
}
@supports (width: var(--tmg-top-nav-height)) {
  .TMG_transparent_navigtion_adapter {
    padding-top: 50px;
  }
}

</style>
