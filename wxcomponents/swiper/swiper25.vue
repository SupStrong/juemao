<template>
	<view>
		<swiper class="card-swiper tn-margin-top-sm" :circular="true"
		  :autoplay="true" duration="5000000" interval="5000" @change="cardSwiper" style="height: 114.4vw;"> 
		  <swiper-item v-for="(item,index) in 3" :key="index" :class="cardCur==index?'cur':''">
			<view class="swiper-slide" data-swiper-slide-index="2" style="width: 375px;">
				<view
					class="content swiper-lazy swiper-lazy-loaded"
					style="background-image: url(https://m.360buyimg.com/babel/jfs/t1/153273/6/25423/220769/62d8d1adE51cb3cb3/a9c144bdd0cb0c78.png);"
				>
					<view class="shop"></view>
					<view class="product">
						<view class="item">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								data-src=""
								src="//m.360buyimg.com/babel/jfs/t1/108244/7/32036/52645/6332a827E8e7ccad9/803213653cc388be.png"
							/>
						</view>
						<view class="item">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								data-src=""
								src="//m.360buyimg.com/babel/jfs/t1/119109/9/29796/194867/63317ef2E48f3cb50/a40822c4f74a6f7b.png"
							/>
						</view>
						<view class="item">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								data-src=""
								src="//m.360buyimg.com/babel/jfs/t1/26836/26/20051/52645/63327990Efb9665ce/6e0efc8921582fe0.png"
							/>
						</view>
						<view class="item">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								data-src=""
								src="//m.360buyimg.com/babel/jfs/t1/188348/34/28654/50231/631953daEbd02ea80/b826b535369d8cf9.png"
							/>
						</view>
						<view class="item">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								data-src=""
								src="//m.360buyimg.com/babel/jfs/t1/153444/8/26980/143565/63228c51Efffe805a/0b21e1f4bdc8994f.png"
							/>
						</view>
						<view class="item">
							<image
								class="swiper-lazy swiper-lazy-loaded"
								data-src=""
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
.swiper-3d,
.swiper-3d.swiper-css-mode .swiper-wrapper {
	-webkit-perspective: 106.66667vw;
	perspective: 106.66667vw;
}
.swiper-3d .swiper-cube-shadow,
.swiper-3d .swiper-slide,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-wrapper {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
	background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
	background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.5), transparent);
}
.swiper-3d .swiper-slide-shadow-right {
	background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent);
}
.swiper-3d .swiper-slide-shadow-top {
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
}
.swiper-3d .swiper-slide-shadow-bottom {
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);
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
.swiper-centered > .swiper-wrapper:before {
	content: '';
	flex-shrink: 0;
	order: 9999;
}
.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
	-webkit-margin-start: var(--swiper-centered-offset-before);
	margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-horizontal > .swiper-wrapper:before {
	height: 100%;
	width: var(--swiper-centered-offset-after);
}
.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
	-webkit-margin-before: var(--swiper-centered-offset-before);
	margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-vertical > .swiper-wrapper:before {
	width: 100%;
	height: var(--swiper-centered-offset-after);
}
.swiper-centered > .swiper-wrapper > .swiper-slide {
	scroll-snap-align: center center;
}
img {
	width: 100%;
}
.small-container {
	width: 100%;
	height: 24.8vw;
}
.small-container .small-slide {
	flex-shrink: 0;
	width: 24vw;
	height: 24.8vw;
	transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
	transition: transform 0.5s, -webkit-transform 0.5s;
	-webkit-transform: scale(0.85);
	transform: scale(0.85);
	overflow: hidden;
}
.small-container .small-slide.swiper-slide-active {
	-webkit-transform: scale(1);
	transform: scale(1);
	margin: 0 1.6vw;
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
	height: 42.71111vw;
	margin-left: 44vw;
}
.product {
	width: 90%;
	height: 55.22222vw;
	/* margin-left: 44vw; */
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	overflow: hidden;
	margin: 0 auto;
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
