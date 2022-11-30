<template>
	<view class="content">
		<swiper class="card-swiper tn-margin-top-sm" :circular="true"
		  :autoplay="true" duration="500" interval="5000" @change="cardSwiper" style="height: 114.4vw;"> 
		  <swiper-item v-for="(item,index) in 3" :key="index" :class="cardCur==index?'cur':''">
			<view class="swiper-slide" style="width: 375px;">
				<view
					class="content swiper-lazy swiper-lazy-loaded"
					style="background-image: url(https://m.360buyimg.com/babel/jfs/t1/153273/6/25423/220769/62d8d1adE51cb3cb3/a9c144bdd0cb0c78.png);"
				>
					<view class="shop"></view>
					<view class="product">
						<view class="item" v-for="(item,index1) in 6" :key="index1">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								src="//m.360buyimg.com/babel/jfs/t1/184636/18/28450/135396/63280152E3fc6c0c2/7ba40df8ab293b64.png"
							/>
						</view>
					</view>
				</view>
			</view>
		  </swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.swiper {
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow: hidden;
	list-style: none;
	padding: 0;
	z-index: 1;
}
.swiper-vertical > .swiper-wrapper {
	flex-direction: column;
}
.swiper-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	transition-property: -webkit-transform;
	transition-property: transform;
	transition-property: transform, -webkit-transform;
	box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-wrapper {
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}
.swiper-pointer-events {
	touch-action: pan-y;
}
.swiper-pointer-events.swiper-vertical {
	touch-action: pan-x;
}
.swiper-slide {
	flex-shrink: 0;
	width: 100%;
	height: 100%;
	position: relative;
	transition-property: -webkit-transform;
	transition-property: transform;
	transition-property: transform, -webkit-transform;
}
.swiper-slide-invisible-blank {
	visibility: hidden;
}
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
	height: auto;
}
.swiper-autoheight .swiper-wrapper {
	align-items: flex-start;
	transition-property: height, -webkit-transform;
	transition-property: transform, height;
	transition-property: transform, height, -webkit-transform;
}
.swiper-css-mode > .swiper-wrapper {
	overflow: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
	display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
	scroll-snap-align: start start;
}
.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
	-ms-scroll-snap-type: x mandatory;
	scroll-snap-type: x mandatory;
}
.swiper-vertical.swiper-css-mode > .swiper-wrapper {
	-ms-scroll-snap-type: y mandatory;
	scroll-snap-type: y mandatory;
}
img {
	width: 100%;
}
.content {
	width: 96.53333vw;
	height: 114.4vw;
	margin: 2.66667vw auto 0;
	background-repeat: no-repeat;
	background-size: contain;
	overflow: hidden;
}
.shop {
	width: 49.95556vw;
	height: 20.71111vw;
	margin-left: 44vw;
}
.product {
	width: 49.95556vw;
	height: 90.22222vw;
	margin-left: 44vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	overflow: hidden;
}
.product .item {
	flex-shrink: 0;
	width: 24.26667vw;
	height: 24.26667vw;
	overflow: hidden;
	image{
		width: 100%;
		height: 100%;
	}
}
</style>
