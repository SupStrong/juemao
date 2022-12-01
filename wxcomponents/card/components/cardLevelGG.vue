<template>
	<view class="topic-list-wrap">
		<view class="topic-group" v-for="(item, index) in 5" :key="index">
			<view class="like-topic-item margin-b-16 margin-b-16">
				<view class="topic-avatar">
					<image alt="" src="//gfs16.gomein.net.cn/T1_CZ9BvE_1RCvBVdK.jpg"  />
					</view>
				<view class="topic-content">
					<view class="topic-title">
						<image class="topic-title-icon" src="./download.png" alt="" />
						<view class="topic-title-text">元宇宙神奇购物狂</view>
					</view>
					<view class="topic-des">共 6 条精彩内容</view>
				</view>
			</view>
			<view class="like-topic-item margin-b-16 margin-b-16">
				<view class="topic-avatar">
					<image alt="" src="//gfs14.gomein.net.cn/T1jvWIBTdT1RCvBVdK.png"  />
				</view>
				<view class="topic-content">
					<view class="topic-title">
						<image class="topic-title-icon" src="./download.png" alt="" />
						<view class="topic-title-text">家智能我智障了</view>
					</view>
					<view class="topic-des">共 9 条精彩内容</view>
				</view>
			</view>
			<view class="like-topic-item">
				<view class="topic-avatar">
					<image alt="" src="//gfs14.gomein.net.cn/T1crd9BXxT1RCvBVdK.png"  />
				</view>
				<view class="topic-content">
					<view class="topic-title">
						<image class="topic-title-icon" src="./download.png" alt="" />
						<view class="topic-title-text">世界杯来了</view>
					</view>
					<view class="topic-des">共 1 条精彩内容</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script></script>
<style lang="scss" scoped>
	.topic-item[data-v-8cdc6ff2] {
	  width: fit-content;
	  height: 93.8664rpx;
	  padding-right: 46.9336rpx;
	  background: rgba(153, 153, 153, 0.6);
	  border-radius: 51.2rpx;
	  display: inline-block;
	  margin-right: 25.6rpx;
	}
	.topic-item .topic-item-content[data-v-8cdc6ff2] {
	  display: flex;
	  align-items: center;
	  justify-content: flex-start;
	}
	.topic-item .topic-item-content .topic-item-avatar[data-v-8cdc6ff2] {
	  width: 85.3336rpx;
	  height: 85.3336rpx;
	  border-radius: 50%;
	  overflow: hidden;
	  margin: 0 8.5336rpx 0 4.2664rpx;
	}
	.topic-item .topic-item-content .topic-item-avatar > image[data-v-8cdc6ff2] {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}
	.topic-item .topic-item-content .topic-item-title[data-v-8cdc6ff2] {
	  line-height: 93.8664rpx;
	  font-size: 34.1336rpx;
	  font-weight: 500;
	  color: #fff;
	}
	.card {
	  border-radius: 34.1336rpx;
	}
	.card .card-content {
	  background-color: #fff;
	  margin-bottom: 17.0664rpx;
	  padding: 34.1336rpx 25.6rpx;
	  border-radius: 34.1336rpx;
	}
	.card .overflow-one {
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.card-header {
	  width: 100%;
	  height: 68.2664rpx;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  margin-bottom: 25.6rpx;
	}
	.card-header .card-header-avatar {
	  width: 68.2664rpx;
	  height: 68.2664rpx;
	  border-radius: 50%;
	}
	.card-header .card-header-title {
	  font-size: 34.1336rpx;
	  color: #262626;
	  height: 68.2664rpx;
	  line-height: 68.2664rpx;
	  flex-basis: calc(100% - 243.2rpx);
	  font-weight: 700;
	}
	.card-header .card-header-opt {
	  width: 140.8rpx;
	  height: 59.7336rpx;
	  border: 2.1336rpx solid rgb(217, 217, 217);
	  border-radius: 29.8664rpx;
	  box-sizing: border-box;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.card-header .card-header-opt > image {
	  width: 25.6rpx;
	  height: 25.6rpx;
	}
	.card-header .card-header-opt > text{
	  color: #262626;
	  font-size: 25.6rpx;
	}
	.card-body {
	  padding-bottom: 8.5336rpx;
	}
	.card-body .card-des {
	  font-size: 29.8664rpx;
	  color: #262626;
	  line-height: 44.8rpx;
	  width: 100%;
	  overflow: hidden;
	  margin-bottom: 17.0664rpx;
	  word-wrap: break-word;
	  word-break: break-all;
	}
	.card-body .overflow-two {
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	}
	.card-body .card-show {
	  width: 100%;
	}
	.card-body .card-show .more {
	  width: 66.1336rpx;
	  // height: 42.6664rpx;
	  // line-height: 42.6664rpx;
	  background: rgba(17, 17, 17, 0.6);
	  border-radius: 27.7336rpx;
	  font-size: 25.6rpx;
	  font-weight: 600;
	  color: #fff;
	  position: absolute;
	  bottom: 34.1336rpx;
	  right: 17.0664rpx;
	  text-align: center;
	}
	.card-body .card-show .card-show-single {
	  width: 100%;
	}
	.card-body .card-show .card-show-single .card-show-single-content {
	  width: 100%;
	  height: 714.6664rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: #d8d8d8;
	  border-radius: 25.6rpx;
	  position: relative;
	  margin-bottom: 19.2rpx;
	}
	.card-body .card-show .card-show-single .card-show-single-content > image {
	  width: 100%;
	  height: 100%;
	  border-radius: 25.6rpx;
	  object-fit: cover;
	}
	.card-body .card-show .topic-video {
	  position: absolute;
	  width: 68.2664rpx;
	  height: 68.2664rpx;
	  left: 50%;
	  top: 50%;
	  transform: translate(-50%, -50%);
	}
	.card-body .card-show .topic-video img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}
	.card-body .card-show .card-show-double {
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  position: relative;
	}
	.card-body .card-show .card-show-double .card-show-single-content {
	  width: 348.8rpx;
	  height: 348.8rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-wrap: wrap;
	  background-color: #d8d8d8;
	  border-radius: 25.6rpx;
	  margin-bottom: 19.2rpx;
	  position: relative;
	}
	.card-body .card-show .card-show-double .card-show-single-content > image {
	  width: 100%;
	  height: 100%;
	  border-radius: 25.6rpx;
	  object-fit: cover;
	}
	.card-body .card-show .card-show-four {
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  flex-wrap: wrap;
	  position: relative;
	}
	.card-body .card-show .card-show-four .card-show-single-content {
	  width: 348.8rpx;
	  height: 348.8rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-wrap: wrap;
	  background-color: #d8d8d8;
	  border-radius: 25.6rpx;
	  margin-bottom: 19.2rpx;
	  position: relative;
	}
	.card-body .card-show .card-show-four .card-show-single-content > image {
	  width: 100%;
	  height: 100%;
	  border-radius: 25.6rpx;
	  object-fit: cover;
	}
	.card-body .card-show .card-show-six {
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  flex-wrap: wrap;
	  position: relative;
	}
	.card-body .card-show .card-show-six .card-show-single-content {
	  width: 227.2rpx;
	  height: 227.2rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-wrap: wrap;
	  background-color: #d8d8d8;
	  border-radius: 25.6rpx;
	  margin-bottom: 19.2rpx;
	  position: relative;
	}
	.card-body .card-show .card-show-six .card-show-single-content > image {
	  width: 100%;
	  height: 100%;
	  border-radius: 25.6rpx;
	  object-fit: cover;
	}
	.like-topic-item {
	  width: 100%;
	  height: 113.0664rpx;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	.like-topic-item .topic-avatar {
	  width: 113.0664rpx;
	  height: 113.0664rpx;
	  border-radius: 17.0664rpx;
	  overflow: hidden;
	  margin-right: 17.0664rpx;
	  border: 2.1336rpx solid #f5f5f5;
	}
	.like-topic-item .topic-avatar > image {
	  border-radius: 17.0664rpx;
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}
	.like-topic-item .topic-content {
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  width: 430.9336rpx;
	  height: 113.0664rpx;
	}
	.like-topic-item .topic-content .topic-title {
	  display: flex;
	  justify-content: flex-start;
	  width: 430.9336rpx;
	  // height: 42.6664rpx;
	  margin-right: 4.2664rpx;
	  padding-top: 12.8rpx;
	}
	.like-topic-item .topic-content .topic-title .topic-title-icon {
	  width: 38.4rpx;
	  height: 38.4rpx;
	  margin-right: 4.2664rpx;
	}
	.like-topic-item .topic-content .topic-title .topic-title-icon > image {
	  width: 38.4rpx;
	  height: 38.4rpx;
	}
	.like-topic-item .topic-content .topic-title .topic-title-text {
	  width: 388.2664rpx;
	  // line-height: 42.6664rpx;
	  font-size: 29.8664rpx;
	  font-weight: 500;
	  color: #000;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.like-topic-item .topic-content .topic-des {
	  width: 100%;
	  line-height: 32rpx;
	  font-size: 21.3336rpx;
	  font-weight: 400;
	  color: #8c8c8c;
	  padding-bottom: 12.8rpx;
	}
	::-webkit-scrollbar {
	  display: none;
	}
	.overflow-one {
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.margin-b-32 {
	  margin-bottom: 34.1336rpx;
	}
	.margin-b-24 {
	  margin-bottom: 25.6rpx;
	}
	.margin-b-16 {
	  margin-bottom: 17.0664rpx;
	}
	.margin-p-16 {
	  margin-top: 17.0664rpx;
	}
	.page-wrap {
	  width: 100%;
	  background-image: url(https://js.gomein.net.cn/etm/ent-activity/assets/banner.c74b8352.png);
	  background-size: 100% 492.8rpx;
	  background-repeat: no-repeat;
	  background-color: #f5f5f5;
	  padding-bottom: 25.6rpx;
	}
	.banner {
	  width: 100%;
	  height: 375.4664rpx;
	  box-sizing: border-box;
	  padding: 76.8rpx 0 0 34.1336rpx;
	}
	.banner .topic-scroll {
	  white-space: nowrap;
	  overflow-x: scroll;
	  overflow-y: hidden;
	}
	.banner .topic-scroll .topic-group .topic-wrap {
	  height: 93.8664rpx;
	}
	.content-wrap {
	  width: 100%;
	  padding: 0 17.0664rpx;
	  box-sizing: border-box;
	}
	.like-topic-title {
	  // line-height: 42.6664rpx;
	  font-size: 29.8664rpx;
	  color: #262626;
	  margin-bottom: 17.0664rpx;
	  font-weight: 700;
	}
	.topic-list-wrap {
	  width: 100%;
	  height: 441.6rpx;
	  padding: 34.1336rpx 0 34.1336rpx 25.6rpx;
	  box-sizing: border-box;
	  background-color: #fff;
	  border-radius: 34.1336rpx;
	  display: flex;
	  justify-content: flex-start;
	  white-space: nowrap;
	  overflow-x: scroll;
	  overflow-y: hidden;
	}
	.topic-list-wrap .topic-group {
	  width: 561.0664rpx;
	  margin-right: 25.6rpx;
	}

</style>
