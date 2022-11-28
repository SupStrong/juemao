<template>
	<view class="template-bless tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
				<text class="icon tn-icon-left"></text>
				<text class="icon tn-icon-home-capsule-fill"></text>
			</view>
			<view class="logo-banner"><image src="http://www.cofco.com/img/logo.png" mode=""></image></view>
		</tn-nav-bar>

		<view class="top-backgroup"><image class="backgroud-image" src="https://tnuiimage.tnkjapp.com/index_bg/basic_new.jpg" mode=""></image></view>

		<view class="" @click="handleBtn">按钮</view>
		<view class="" @click="handleBtn2">按钮2</view>
	<!-- 	<tn-modal v-model="isVisibile2" :custom="true" :showCloseBtn="true">
			<view class="custom-modal-content">
				<view class="rax-view-v2 Subscribe--subScribeInner--Uns6ZGu" data-before-current-y="156.015625" data-appeared="true" data-has-appeared="true">
					<image
						class="Subscribe--subScribeHearder--2ozHx0G"
						src="//gw.alicdn.com/imgextra/i3/O1CN016WPVRS1CIbhRV0fAh_!!6000000000058-2-tps-630-364.png"
					/>
					<image
						class="Subscribe--subScribeIcon--3ObPNNi"
						src="//gw.alicdn.com/imgextra/i4/O1CN017OZtyr1TlK03TK5gJ_!!6000000002422-2-tps-40-41.png"
					/>
					<text lines="1" class="rax-text-v2 Subscribe--subScribeTitle--22flWzo">恭喜你订阅成功</text>
					<text lines="1" class="rax-text-v2 Subscribe--subScribeCaption--CIlUiwk">记得回【有好货首页-右上角我的兴趣】查</text>
					<text lines="1" class="rax-text-v2 Subscribe--subScribeCon--3xh3EDQ">看我已关注以及更多推荐兴趣哦</text>
					<view class="rax-view-v2 Subscribe--subScribeBtn--mSaxfI2">我知道啦</view>
				</view>
			</view>
		</tn-modal> -->
		<tn-modal v-model="isVisibile2" width='70%' padding='0 0' :custom="true">
			<view
				class="rax-modal-main"
				style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: auto; height: auto; background-color: transparent; position: relative; border-radius: 3.2vw; -webkit-box-align: center; align-items: center;"
			>
				<view
					style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 72vw; position: relative; border-radius: 3.2vw; -webkit-box-align: center; align-items: center; background-color: rgb(248, 248, 248);"
				>
					<view
						style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; place-content: flex-start center; flex-shrink: 0; position: relative; width: 72vw; height: 35.6vw; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; z-index: 1;"
					>
						<image
							class="rax-image "
							src="//gw.alicdn.com/tfs/TB16u2PoQL0gK0jSZFxXXXWHVXa-395-285.png_450x10000.jpg_.webp"
							style="width: 205px; height: 205px; margin-bottom: 5.33333vw;"
						/>
					</view>
					<text
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.06667vw; white-space: pre-wrap; color: rgb(51, 51, 51); line-height: 7.2vw;"
					>
						恭喜开到了
					</text>
					<text
						style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 5.06667vw; white-space: pre-wrap; color: rgb(51, 51, 51); line-height: 7.2vw;"
					>
						机长满满的爱
					</text>
					<view
						style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; place-content: flex-start center; flex-shrink: 0; width: 58vw; height: 12vw; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; border-radius: 13.3333vw; background-image: linear-gradient(to right, rgb(129, 85, 255), rgb(145, 144, 244)); margin-top: 12vw;"
					>
						<text
							style="border-width: 0px; border-style: solid; border-color: black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 32rpx; white-space: pre-wrap; color: rgb(255, 255, 255);"
						>
							邀请好友再开宝箱
						</text>
					</view>
				</view>
				<image class="rax-image " src="//gw.alicdn.com/tfs/TB1L3jDoQT2gK0jSZPcXXcKkpXa-204-204.png_110x10000.jpg_.webp" style="width: 1.02rem; height: 1.02rem; margin-top: 8vw;" />
			</view>
		</tn-modal>
		<!-- <swiperBBSP /> -->
	<!-- 	<swiperBBSK />
		<swiperBBSC />
		<swiperBBSA />
		
		<swiperBBSD />
		<swiperBBSG />
		<swiperBBSJ />
		<swiperBBSE />
		<swiperBBST />
		<swiperBBSW /> -->
		<swiperBBSWW />
		<swiperBBSWP />
		
		<swiperBBB />
		<swiperBBC />
		<swiperBBV />
		<swiperBBS />
		<!-- <swiperBBD /> 稍等 -->
		<!-- <swiperBBF /> 稍等 -->
		<!-- <swiperBBSWI />稍等 -->
		<!-- <swiperBBSWO />稍等 -->
	<!-- 	<swiperBBSWL />
		<swiperBBX />
		<swiperBBP />
			<swiperBBO />
		<swiperBBB />
		<swiperBBC />
		<swiperBBV />
		<swiperBBS />
		<swiperBBD />
		<swiperBBF />
		<swiperBBG />
		<swiperBBH />
		<swiperBBJ />
		<swiperBBK /> -->
		<!-- <swiperBBL /> -->
	<!-- 	<swiperBBZ :visibile='isVisibile' @update="handleUpdate" />
		<swiperBBX /> -->
		
		<swiperBAS />
		<swiperBAD />
		<swiperBAF />
		<swiperBAG />
		<swiperBAH />
		<swiperBAJ />
		<swiperBAK />
		<swiperBAL />
		<swiperBAZ /> 
		<swiperBAX />
<!-- 
		<swiperBBVV />
		<swiperBBDD /> 
		<swiperBBAA />
			<swiperBBSS />
		<swiperBBSL />
		<swiperBHQ></swiperBHQ>
		<swiperBHW></swiperBHW>
		<swiperBHE></swiperBHE>
		<swiperBHR></swiperBHR>
		<swiperBHT></swiperBHT>
		<swiperBHY></swiperBHY>
		<swiperBHU></swiperBHU>
		<swiperBHI></swiperBHI>
		<swiperBHO></swiperBHO>
		<swiperBHP></swiperBHP> -->
		
	<!-- 	<swiperBC></swiperBC>
		<swiperBD></swiperBD>
		<swiperBE></swiperBE>
		<swiperBF></swiperBF>
		<swiperBG></swiperBG>
		<swiperBH></swiperBH>
		<swiperBA></swiperBA>
		<swiperBL></swiperBL>
		<swiperBV></swiperBV>
		<swiperBJ></swiperBJ>
		<swiperSS></swiperSS>
		<swiperTT></swiperTT>
		<swiperUU></swiperUU>
		<swiperYY></swiperYY>
		<swiperOO></swiperOO>
		<swiperXX></swiperXX>
		<swiperII></swiperII>
		<swiperMM></swiperMM>
		<swiperLL></swiperLL>
		<swiperKK></swiperKK>
		<swiperWW></swiperWW>
		<swiperVV></swiperVV>	
		<swiperEE></swiperEE>
		<swiperAA></swiperAA>
		<swiperCC></swiperCC>
		<swiperGG></swiperGG>
		<swiperJJ></swiperJJ> -->
<!-- 
		<swiperBB></swiperBB>
		<swiperDD></swiperDD> 
		<swiperA></swiperA>
		<swiperB></swiperB>
		<swiperC></swiperC>
		<swiperD></swiperD>
		<swiperE></swiperE>
		<swiperF></swiperF>
		<swiperG></swiperG>
		<swiperH></swiperH>
		<swiperI></swiperI>
		<swiperJ></swiperJ>
		<swiperK></swiperK>
		<swiperL></swiperL>
		<swiperM></swiperM>
		<swiperN></swiperN>
		<swiperO></swiperO>
		<swiperP></swiperP>
		<swiperQ></swiperQ>
		<swiperW></swiperW> -->
		<!-- 缩放 -->
		<!-- <tn-notice-bar :show="closeNoticeShow" :list="list" :closeBtn="true" @close="closeNoticeShow = false"></tn-notice-bar> -->
		<!-- 广告位 -->
		<!-- <bannerA></bannerA>
		<bannerB></bannerB>
		<bannerC></bannerC>
		<bannerD></bannerD>
		<bannerE @freshAllData="freshAllData" @refreshData="onRefreshData" :hideAnimation="hideAnimation"></bannerE>
		<bannerF></bannerF>
		<bannerG></bannerG> -->
		<!-- <bannerG></bannerG> -->
		<!--  -->

		<!-- 登录 -->
		<!-- <loginA></loginA> -->
		<!-- 底部背景图片-->
		<view class="login__bg login__bg--bottom"><image src="https://tnuiimage.tnkjapp.com/bless/bless-bottom.jpg" mode="widthFix"></image></view>
		<!-- 底部tabbar start-->
		<view class="tabbar footerfixed">
			<view class="action" @click="navTuniaoUI">
				<view class="bar-icon"><image class="" src="https://tnuiimage.tnkjapp.com/bless/bless-home.png"></image></view>
				<view class="tn-color-gray">首页</view>
			</view>
			<view class="action" @click="navTuniaoUI">
				<view class="bar-icon"><image class="" src="https://tnuiimage.tnkjapp.com/bless/bless-flower.png"></image></view>
				<view class="tn-color-gray">发现</view>
			</view>
			<view class="action bar-center" @click="navTuniaoHome">
				<view class="nav-index-button">
					<view class="nav-index-button__content">
						<view class="nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center">
							<!-- <view class="tn-icon-logo-tuniao"></view> -->
							<view class="bar-circle"><image class="" src="https://tnuiimage.tnkjapp.com/bless/bless-tiger.png"></image></view>
						</view>
					</view>

					<view class="nav-index-button__meteor">
						<view class="nav-index-button__meteor__wrapper">
							<view
								v-for="(item, index) in 6"
								:key="index"
								class="nav-index-button__meteor__item"
								:style="{ transform: `rotateX(${-60 + 30 * index}deg) rotateZ(${-60 + 30 * index}deg)` }"
							>
								<view class="nav-index-button__meteor__item--pic"></view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="action" @click="navTuniaoUI">
				<view class="bar-icon">
					<!-- <view class="tn-icon-image-text tn-color-gray--dark">
          </view> -->
					<image class="" src="https://tnuiimage.tnkjapp.com/bless/bless-china.png"></image>
				</view>
				<view class="tn-color-gray">祝福</view>
			</view>
			<view class="action" @click="navTuniaoUI">
				<view class="bar-icon">
					<!-- <view class="tn-icon-my tn-color-gray--dark">
          </view> -->
					<image class="" src="https://tnuiimage.tnkjapp.com/bless/bless-money.png"></image>
				</view>
				<view class="tn-color-gray">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js';
import { getDiyDefault }  from '@/api/modules/default.js';
import swiperA from '@/wxcomponents/swiper/swiper1.vue';
import swiperB from '@/wxcomponents/swiper/swiper2.vue';
import swiperC from '@/wxcomponents/swiper/swiper3.vue';
import swiperD from '@/wxcomponents/swiper/swiper4.vue';
import swiperE from '@/wxcomponents/swiper/swiper5.vue';
import swiperF from '@/wxcomponents/swiper/swiper6.vue';
import swiperG from '@/wxcomponents/swiper/swiper7.vue';
import swiperH from '@/wxcomponents/swiper/swiper8.vue';
import swiperI from '@/wxcomponents/swiper/swiper9.vue';
import swiperJ from '@/wxcomponents/swiper/swiper10.vue';
import swiperK from '@/wxcomponents/swiper/swiper11.vue';
import swiperL from '@/wxcomponents/swiper/swiper12.vue';
import swiperM from '@/wxcomponents/swiper/swiper13.vue';
import swiperN from '@/wxcomponents/swiper/swiper14.vue';
import swiperO from '@/wxcomponents/swiper/swiper15.vue';
import swiperP from '@/wxcomponents/swiper/swiper16.vue';
import swiperQ from '@/wxcomponents/swiper/swiper17.vue';
import swiperW from '@/wxcomponents/swiper/swiper18.vue';
import swiperWW from '@/wxcomponents/swiper/swiper19.vue';
import swiperVV from '@/wxcomponents/swiper/swiper20.vue';
import swiperEE from '@/wxcomponents/swiper/swiper21.vue';
import swiperAA from '@/wxcomponents/swiper/swiper22.vue';
import swiperBB from '@/wxcomponents/swiper/swiper23.vue';
// import swiperBB from '@/wxcomponents/swiper/swiper23.vue'
import swiperCC from '@/wxcomponents/swiper/swiper27.vue';
import swiperDD from '@/wxcomponents/swiper/swiper28.vue';
import swiperGG from '@/wxcomponents/swiper/swiper29.vue';
import swiperJJ from '@/wxcomponents/swiper/swiper30.vue';
import swiperKK from '@/wxcomponents/swiper/swiper31.vue';
import swiperLL from '@/wxcomponents/swiper/swiper32.vue';
import swiperMM from '@/wxcomponents/swiper/swiper33.vue';
import swiperII from '@/wxcomponents/swiper/swiper34.vue';
import swiperXX from '@/wxcomponents/swiper/swiper35.vue';
import swiperOO from '@/wxcomponents/swiper/swiper36.vue';
import swiperSS from '@/wxcomponents/swiper/swiper37.vue';
import swiperTT from '@/wxcomponents/swiper/swiper38.vue';
import swiperUU from '@/wxcomponents/swiper/swiper39.vue';
import swiperYY from '@/wxcomponents/swiper/swiper40.vue';
import swiperBV from '@/wxcomponents/swiper/swiper41.vue';
import swiperBJ from '@/wxcomponents/swiper/swiper42.vue';
import swiperBL from '@/wxcomponents/swiper/swiper43.vue';
import swiperBA from '@/wxcomponents/swiper/swiper44.vue';
import swiperBC from '@/wxcomponents/swiper/swiper45.vue';
import swiperBD from '@/wxcomponents/swiper/swiper46.vue';
import swiperBE from '@/wxcomponents/swiper/swiper47.vue';
import swiperBF from '@/wxcomponents/swiper/swiper48.vue';
import swiperBG from '@/wxcomponents/swiper/swiper49.vue';
import swiperBH from '@/wxcomponents/swiper/swiper50.vue';

import swiperBHQ from '@/wxcomponents/swiper/swiper51.vue';
import swiperBHW from '@/wxcomponents/swiper/swiper52.vue';
import swiperBHE from '@/wxcomponents/swiper/swiper53.vue';
import swiperBHR from '@/wxcomponents/swiper/swiper54.vue';
import swiperBHT from '@/wxcomponents/swiper/swiper55.vue';
import swiperBHY from '@/wxcomponents/swiper/swiper56.vue';
import swiperBHU from '@/wxcomponents/swiper/swiper57.vue';
import swiperBHI from '@/wxcomponents/swiper/swiper58.vue';
import swiperBHO from '@/wxcomponents/swiper/swiper59.vue';
import swiperBHP from '@/wxcomponents/swiper/swiper60.vue';

import swiperBAS from '@/wxcomponents/swiper/swiper61.vue';
import swiperBAD from '@/wxcomponents/swiper/swiper62.vue';
import swiperBAF from '@/wxcomponents/swiper/swiper63.vue';
import swiperBAG from '@/wxcomponents/swiper/swiper64.vue';
import swiperBAH from '@/wxcomponents/swiper/swiper65.vue';
import swiperBAJ from '@/wxcomponents/swiper/swiper66.vue';
import swiperBAK from '@/wxcomponents/swiper/swiper67.vue';
import swiperBAL from '@/wxcomponents/swiper/swiper68.vue';
import swiperBAZ from '@/wxcomponents/swiper/swiper69.vue';
import swiperBAX from '@/wxcomponents/swiper/swiper70.vue';

import swiperBBS from '@/wxcomponents/swiper/swiper71.vue';
import swiperBBD from '@/wxcomponents/swiper/swiper72.vue';
import swiperBBF from '@/wxcomponents/swiper/swiper73.vue';
import swiperBBG from '@/wxcomponents/swiper/swiper74.vue';
import swiperBBH from '@/wxcomponents/swiper/swiper75.vue';
import swiperBBJ from '@/wxcomponents/swiper/swiper76.vue';
import swiperBBK from '@/wxcomponents/swiper/swiper77.vue';
import swiperBBL from '@/wxcomponents/swiper/swiper78.vue';
import swiperBBZ from '@/wxcomponents/swiper/swiper79.vue';
import swiperBBX from '@/wxcomponents/swiper/swiper80.vue';
import swiperBBP from '@/wxcomponents/swiper/swiper81.vue';
import swiperBBO from '@/wxcomponents/swiper/swiper82.vue';
import swiperBBB from '@/wxcomponents/swiper/swiper83.vue';
import swiperBBC from '@/wxcomponents/swiper/swiper84.vue';
import swiperBBV from '@/wxcomponents/swiper/swiper85.vue';

import swiperBBVV from '@/wxcomponents/swiper/swiper86.vue';
import swiperBBDD from '@/wxcomponents/swiper/swiper87.vue';
import swiperBBAA from '@/wxcomponents/swiper/swiper88.vue';
import swiperBBSS from '@/wxcomponents/swiper/swiper89.vue';
import swiperBBSL from '@/wxcomponents/swiper/swiper90.vue';

import swiperBBSP from '@/wxcomponents/swiper/swiper91.vue';
import swiperBBSK from '@/wxcomponents/swiper/swiper92.vue';
import swiperBBSC from '@/wxcomponents/swiper/swiper93.vue';
import swiperBBSA from '@/wxcomponents/swiper/swiper94.vue';

import swiperBBSD from '@/wxcomponents/swiper/swiper95.vue';
import swiperBBSG from '@/wxcomponents/swiper/swiper96.vue';
import swiperBBSJ from '@/wxcomponents/swiper/swiper97.vue';
import swiperBBSE from '@/wxcomponents/swiper/swiper98.vue';
import swiperBBST from '@/wxcomponents/swiper/swiper99.vue';
import swiperBBSW from '@/wxcomponents/swiper/swiper100.vue';

import swiperBBSWW from '@/wxcomponents/swiper/swiper101.vue';
import swiperBBSWP from '@/wxcomponents/swiper/swiper102.vue';
import swiperBBSWO from '@/wxcomponents/swiper/swiper103.vue';
import swiperBBSWI from '@/wxcomponents/swiper/swiper104.vue';
import swiperBBSWL from '@/wxcomponents/swiper/swiper105.vue';

import bannerA from '@/wxcomponents/banner/banner1.vue';
import bannerB from '@/wxcomponents/banner/banner2.vue';
import bannerC from '@/wxcomponents/banner/banner3.vue';
import bannerD from '@/wxcomponents/banner/banner4.vue';
import bannerE from '@/wxcomponents/banner/banner5.vue';
import bannerF from '@/wxcomponents/banner/banner6.vue';
// import bannerG from '@/wxcomponents/banner/banner7.vue';

import loginA from '@/wxcomponents/login/login1.vue';

// 登录
export default {
	name: 'index',
	mixins: [template_page_mixin],
	data() {
		return {
			list: ['电影资源仅提供介绍，请上拥有版权的APP观看', '排行仅为个人喜欢，不喜勿喷', '抓住那只猪科技有限公司出品', '今天想找个人一起去看电影'],
			closeNoticeShow: true,
			isVisibile: false,
			isVisibile2: false
		};
	},
	components: {
		swiperA,
		swiperB,
		swiperC,
		swiperD,
		swiperE,
		swiperF,
		swiperG,
		swiperH,
		swiperI,
		swiperJ,
		swiperK,
		swiperL,
		swiperM,
		swiperN,
		swiperO,
		swiperP,
		swiperQ,
		swiperW,
		bannerA,
		bannerB,
		bannerC,
		bannerD,
		bannerE,
		bannerF,
		swiperWW,
		swiperVV,
		swiperEE,
		swiperAA,
		swiperBB,
		swiperCC,
		swiperDD,
		swiperJJ,
		swiperGG,
		swiperKK,
		swiperLL,
		swiperMM,
		swiperII,
		swiperXX,
		swiperOO,
		swiperSS,
		swiperTT,
		swiperUU,
		swiperYY,
		swiperBV,
		swiperBJ,
		swiperBL,
		swiperBA,
		swiperBC,
		swiperBD,
		swiperBE,
		swiperBF,
		swiperBG,
		swiperBH,
		swiperBHQ,
		swiperBHW,
		swiperBHE,
		swiperBHR,
		swiperBHT,
		swiperBHY,
		swiperBHU,
		swiperBHI,
		swiperBHO,
		swiperBHP,
		swiperBBP,
		swiperBBO,
		swiperBBB,
		swiperBBC,
		swiperBBV,
		swiperBBVV,
		swiperBBDD,
		swiperBBAA,
		swiperBBSS,
		swiperBBSL,
		swiperBAS,
		swiperBAD,
		swiperBAF,
		swiperBAG,
		swiperBAH,
		swiperBAJ,
		swiperBAK,
		swiperBAL,
		swiperBAZ,
		swiperBAX,
		swiperBBS,
		swiperBBD,
		swiperBBF,
		swiperBBG,
		swiperBBH,
		swiperBBJ,
		swiperBBK,
		swiperBBL,
		swiperBBZ,
		swiperBBX,
		// bannerG,
		loginA,
		swiperBBSP,
		swiperBBSK,
		swiperBBSC,
		swiperBBSA,

		swiperBBSD,
		swiperBBSG,
		swiperBBSJ,
		swiperBBSE,
		swiperBBST,
		swiperBBSW,
		swiperBBSWW,
		swiperBBSWP,
		swiperBBSWO,
		swiperBBSWI,
		swiperBBSWL
	},
	mounted() {
		console.log('-----');
		this.getDiy()
	},
	onLoad(){
	},
	methods: {
		getDiy(){
			let that = this;
			
			getDiyDefault({id:'15'}).then(res => {
				console.log(res,"Rerere")
			});
		},
		handleBtn() {
			uni.navigateTo({ url: '/pages/index/index3'})
			// this.isVisibile = true;
		},
		handleBtn2() {
			this.isVisibile2 = true;
		},
		handleUpdate() {
			this.isVisibile = false;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/templatePage/custom_nav_bar.scss';
.template-bless {
	height: 100vh;
	width: 750rpx;
	overflow: scroll;
}
page {
	height: 100vh;
	overflow: scroll;
}
.top-backgroup {
	height: 667rpx;
	z-index: -1;

	.backgroud-image {
		width: 100%;
		height: 667rpx;
	}
}
.login {
	position: relative;
	height: 100%;
	z-index: 1;

	/* 背景图片 start */
	&__bg {
		z-index: -1;
		position: fixed;

		&--top {
			top: 0;
			left: 0;
			right: 0;
			width: 100%;

			.bg {
				width: 750rpx;
				will-change: transform;
			}
			.rocket {
				margin: 50rpx 30%;
				width: 300rpx;
				will-change: transform;
			}
		}

		&--bottom {
			bottom: -10rpx;
			left: 0;
			right: 0;
			width: 100%;
			// height: 144px;
			// margin-bottom: env(safe-area-inset-bottom);

			image {
				width: 750rpx;
				will-change: transform;
			}
		}
	}
}
/* 背景图片 end */

/* 底部tabbar start*/
.footerfixed {
	position: fixed;
	width: 100%;
	bottom: 0;
	z-index: 999;
	// background-color: #FFFFFF;
	// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
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

.bar-center {
	animation: suspension 3s ease-in-out infinite;
}

@keyframes suspension {
	0%,
	100% {
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
				content: ' ';
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
				background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc2.png) no-repeat center center;
				background-size: 100% 100%;
				animation: arc 4s linear infinite;
			}
		}
	}
}

@keyframes suspension {
	0%,
	100% {
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
.logo-banner {
	width: 70%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-sizing: border-box;
	/* background-color: rgba(0, 0, 0, 0.15); */
	border-radius: 1000rpx;
	border: 1rpx solid rgba(255, 255, 255, 0.5);
	color: #ffffff;
	font-size: 36rpx;
	margin: 0 auto;
	image {
		width: 100%;
		height: 100%;
	}
}
.rax-view-v2 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-content: flex-start;
  border: 0 solid #000;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.Subscribe--subScribeMengCeng--2EOHFWE,
.Subscribe--subScribeWrap--3B5xU4C {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
}
.Subscribe--subScribeMengCeng--2EOHFWE {
  background-color: #000;
  opacity: 0.6;
  top: 0;
}
.Subscribe--subScribeInner--Uns6ZGu {
  display: flex;
  position: fixed;
  z-index: 100;
  top: 50%;
  right: 7.46667vw;
  align-items: center;
  flex-direction: column;
  border-radius: 5.33333vw;
  background-color: #fff;
  width: 84vw;
  height: 94.66667vw;
  margin-top: -47.33333vw;
  transform: scale(1);
}
.Subscribe--subScribeHearder--2ozHx0G {
  position: relative;
  top: -0.26667vw;
  width: 84vw;
  height: 48.4vw;
}
.Subscribe--subScribeIcon--3ObPNNi {
  position: absolute;
  top: 53.33333vw;
  left: 19.46667vw;
  width: 5.33333vw;
  height: 5.33333vw;
}
.Subscribe--subScribeTitle--22flWzo {
  position: absolute;
  top: 52.66667vw;
  left: 28.53333vw;
  white-space: nowrap;
  color: #333;
  font-family: PingFang SC;
  font-size: 4.8vw;
  font-weight: 400;
}
.Subscribe--subScribeCaption--CIlUiwk {
  left: 8.66667vw;
  top: 62.53333vw;
}
.Subscribe--subScribeCaption--CIlUiwk,
.Subscribe--subScribeCon--3xh3EDQ {
  position: absolute;
  color: #666;
  font-family: PingFang SC;
  font-size: 3.46667vw;
  font-weight: 400;
}
.Subscribe--subScribeCon--3xh3EDQ {
  top: 67.33333vw;
  left: 17.86667vw;
}
.Subscribe--subScribeBtn--mSaxfI2 {
  width: 75.2vw;
  height: 12.66667vw;
  border-radius: 6.33333vw;
  background-image: linear-gradient(90deg, #199fff, #007ae6);
  position: absolute;
  top: 76.66667vw;
  left: 4.53333vw;
  text-align: center;
  line-height: 12.66667vw;
  color: #fff;
  font-weight: 400;
  font-size: 4.8vw;
}
.Subscribe--nofocus--K3-ZqzX {
  font-size: 3.73333vw;
  color: #fff;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1.6vw;
  width: 48.53333vw;
  height: 10vw;
  line-height: 10vw;
  white-space: nowrap;
  text-align: center;
}
.Subscribe--nofocus--K3-ZqzX,
.Subscribe--unfirst--bzaW2xO {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.Subscribe--unfirst--bzaW2xO {
  width: 81.46667vw;
  height: 28.93333vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  border-radius: 4.8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Subscribe--successFocus--1jARuhl {
  font-size: 4.8vw;
  color: #fff;
  margin-top: 4.53333vw;
}
.Subscribe--successText--hLwQtyN {
  font-size: 3.46667vw;
  color: #fff;
  opacity: 1;
  margin-top: 2.4vw;
}
.Subscribe--successCon--3aYcpI_ {
  font-size: 3.46667vw;
  color: #fff;
  opacity: 1;
  margin-top: 1.33333vw;
}

</style>
