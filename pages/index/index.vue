<template>
	<view class="template-set">
		<!-- 商品 -->
		<!-- <goodsLevelHorizontal /> -->
		<!-- <goodsLevelVertical /> -->
		<!-- 轮播 -->
		<bannerItem />
		<!-- 搜索 -->
		<searchItem />
		<!-- 视频 -->
		<videoItem></videoItem>
		<!-- 试卷 -->
		<paperItem></paperItem>
		<!-- 分类 -->
		<!-- <navItem></navItem> -->
		<!-- 优惠券 -->
		<couponItem></couponItem>
		<!-- 问答 -->
		<amswersItem></amswersItem>
		<!-- 文章 -->
		<articleItem></articleItem>
		<!-- 图集 -->
		<atlasItem></atlasItem>
		<!-- 品牌 -->
		<brandItem></brandItem>
		<!-- 卡片 -->
		<cardItem></cardItem>
		<!-- 海报 -->
		<posterItem></posterItem>
		<!-- 标签 -->
		<tagItem></tagItem>
		<!-- 模板 -->
		<templateItem></templateItem>
		<!-- 杂七杂八 -->
		<mixedItem></mixedItem>
		
		<!-- <view class=""  @click="isVisibile = true">
			按钮
		</view> -->
		<!-- 弹窗 -->
		<popupItem :isVisibile="isVisibile"></popupItem>
	</view>
</template>

<script>
import popupItem from '@/wxcomponents/popup/index.vue';
import goodsLevelHorizontal from '@/wxcomponents/goods/goodsLevelHorizontal.vue';
import goodsLevelVertical from '@/wxcomponents/goods/goodsLevelVertical.vue';
import bannerItem from '@/wxcomponents/banner/index.vue';
import videoItem from '@/wxcomponents/video/index.vue';
import paperItem from '@/wxcomponents/paper/index.vue';
import searchItem from '@/wxcomponents/search/index.vue';
import navItem from '@/wxcomponents/nav/index.vue';
import mixedItem from '@/wxcomponents/mixed/index.vue';
import couponItem from '@/wxcomponents/coupon/index.vue';
import amswersItem from '@/wxcomponents/amswers/index.vue';
import articleItem from '@/wxcomponents/article/index.vue';
import atlasItem from '@/wxcomponents/atlas/index.vue';
import brandItem from '@/wxcomponents/brand/index.vue';
import cardItem from '@/wxcomponents/card/index.vue';
import tagItem from '@/wxcomponents/tag/index.vue';
import templateItem from '@/wxcomponents/template/index.vue';
import posterItem from '@/wxcomponents/poster/index.vue';

import initialMixins from '@/mixins/initial.js'
export default {
	mixins: [initialMixins],
	name: 'Index1',
	data() {
		return {
			isVisibile: false
		};
	},
	computed: {},
	components: {
		popupItem,
		bannerItem,
		videoItem,
		paperItem,
		navItem,
		mixedItem,
		couponItem,
		amswersItem,
		articleItem,
		searchItem,
		atlasItem,
		brandItem,
		cardItem,
		posterItem,
		tagItem,
		templateItem,
		goodsLevelHorizontal,
		goodsLevelVertical,
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	page{
		height: 100vh;
		overflow: scroll;
	}
	.template-set{
		height: 100vh;
		overflow: scroll;
		// background-color: red;
	}
</style>
<!-- 杂草也有存在的意义， -->
<!-- 折朵花 -->
<!-- 吹了吹风，淋了淋雨 -->
<!-- 再给你个狗日的三五个月你就知道低头了
这个春天啊 是你的
等你低头了 就是我的春天了。 -->
<!-- 哪一次我都是先惦记着你啊 -->
<!-- 你的命比我金贵 -->

<!-- 到地里走走 -->
<!-- 
        四季
到地里走走 抽上几袋旱烟
踢开杂草 给仰着头的麦穗讲讲道理
清晨夜晚、刮风下雨
一年四季 你的命比我金贵
淋了雨 吹了风 
等你低了头 我就老了一岁 
 -->
 <!-- 
	花

  -->
 
 风把树叶吹到我脸上