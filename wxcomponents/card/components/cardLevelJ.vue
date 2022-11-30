<template>
		<view
			class="rax-view-v2 ug-activity-mod--card--GuwBh2X"
			style="background-color: rgb(189, 49, 75); background-image: url(https://gw.alicdn.com/imgextra/i3/O1CN010MA4wp1lq3ETt1E3P_!!6000000004869-2-tps-726-304.png);"
		>
			<view
				class="rax-view-v2 ug-activity-mod--countdownWrap--2E9pHeU"
				style="color: rgb(255, 239, 93); font-size: 2.9333vw; line-height: 2.9333vw; font-family: PingFangSC-Medium; letter-spacing: 0vw;"
			>
				<text class="rax-text-v2 ug-activity-mod--countdownPrefix--3AfNqnA">距离结束</text>
				0天 04:22:41
				
			</view>
			<view class="rax-view-v2 ug-activity-mod--titleWrap--1_N3jfs">
				<text class="rax-text-v2 ug-activity-mod--title--3EY8wA0">科学防疫物品清单</text>
				<text class="rax-text-v2 ug-activity-mod--subtitle--3QzmKbo">健康好物一站购齐</text>
				<view
					class="rax-view-v2 ug-activity-mod--button--2tofa5Q"
					style="background-color: rgb(189, 49, 75); box-shadow: rgba(160, 6, 49, 0.22) 2px 2px 5px 0px; margin-top: 2.6667vw;"
				>
					<text class="rax-text-v2 ug-activity-mod--buttonText--QtrAF0d" style="font-family: PingFangSC-Semibold;">去抢购&nbsp;</text>
					<image src="//gw.alicdn.com/imgextra/i3/O1CN01XWUqi71gwOdBodheU_!!6000000004206-2-tps-42-22.png_110x10000.jpg_.webp" style="width: 5.8667vw;height: 3vw;" />
					&nbsp;
					<image
						src="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwcHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDEwIDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgICAgIDxnIGlkPSLml6XljoYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzIuMDAwMDAwLCAtMTIxOS4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxnIGlkPSLnn6nlvaLlpIfku70tMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTA3MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5Mi4wMDAwMDAsIDEyOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9Iui3r+W+hC05IiBwb2ludHM9IjE2OC45OTU5MDEgMjIuNTA4MDE4NSAxNzYuNDg3ODgyIDMwIDE2OC45OTU5MDEgMzcuNDkxOTgxNSI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
						style="width: 1.0667vw; height: 2.1333vw;"
					/>
				</view>
				
			</view>
			<view class="rax-view-v2 ug-activity-mod--goodsListWrap--XyDJC3-">
				<view class="rax-view-v2 ug-activity-mod--goodsItem--1-qNA2X"  v-for="(item,index) in 2" :key="index">
					<view class="rax-view-v2 ug-activity-mod--goodsImgWrap--1z1P17q">
						<image src="//gw.alicdn.com/bao/upload/O1CN01KvYHsF23TIaNNvqNS_!!6000000007256-0-yinhe.jpg_220x10000Q75.jpg_.webp" style="width: 24vw; height: 24vw;" />
						<view class="rax-view-v2 ug-activity-mod--goodsTag--17DiCui">科学防疫</view>
					</view>
					<view class="rax-view-v2 ug-activity-mod--goodsPrice--1J6KrOa">¥74</view>
				</view>
			</view>
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
		position: relative;
	}
	.rax-text-v2 {
	    box-sizing: border-box;
	    display: block;
	    font-size: 4.26667vw;
	    white-space: pre-wrap;
	}
	
	.ug-activity-mod--button--2tofa5Q {
	  height: 8vw;
	  width: 27.46667vw;
	  flex-direction: row;
	  justify-content: center;
	  align-items: center;
	  border-radius: 4vw;
	  border: 1px solid #fff;
	}
	.ug-activity-mod--buttonText--QtrAF0d {
	  font-family: PingFangSC-Medium;
	  font-size: 3.73333vw;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 3.73333vw;
	  max-width: 24vw;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  overflow: hidden;
	}
	.ug-activity-mod--button--1v2c07V {
	  border-radius: 4vw;
	  border: 1px solid #fff;
	}
	.ug-activity-mod--activeButton--1BWegoU,
	.ug-activity-mod--button--1v2c07V {
	  height: 8vw;
	  width: 22.93333vw;
	  flex-direction: row;
	  justify-content: center;
	  align-items: center;
	  color: #fff;
	}
	.ug-activity-mod--activeButton--1BWegoU {
	  border-radius: 4vw;
	}
	.ug-activity-mod--buttonText--fLt7Ktm {
	  font-family: PingFangSC-Medium;
	  font-size: 3.73333vw;
	  letter-spacing: 0;
	  line-height: 3.73333vw;
	}
	.ug-activity-mod--card--3wp2sAk {
	  position: relative;
	  background-repeat: no-repeat;
	  background-size: cover;
	  border-radius: 3.2vw;
	  align-items: center;
	  margin: 1.2vw 0;
	  overflow: hidden;
	}
	.ug-activity-mod--cardTagWrap--5zSZx58 {
	  position: absolute;
	  top: 3.73333vw;
	  right: 3.73333vw;
	  width: 27.46667vw;
	  height: 17.33333vw;
	  border-radius: 3.2vw 3.2vw 0 0;
	  border: 1px solid #fff;
	}
	.ug-activity-mod--btWrap--14ESamO {
	  position: absolute;
	  bottom: -5.06667vw;
	  left: -1px;
	}
	.ug-activity-mod--cardTagDate--3WyiRWo {
	  font-family: PingFangSC-Semibold;
	  font-size: 3.2vw;
	  color: #fff;
	  letter-spacing: 0;
	  text-align: center;
	  line-height: 6.4vw;
	  height: 6.4vw;
	}
	.ug-activity-mod--cardTagBottomWrap--20D955W {
	  flex: 1;
	  flex-direction: row;
	  padding: 1.33333vw 0;
	  background: #fff;
	}
	.ug-activity-mod--cardTagDescWrap--2E4VuEc {
	  flex-direction: row;
	  height: 5.33333vw;
	  align-items: center;
	}
	.ug-activity-mod--cardTagPoint--1NKcrCj {
	  width: 5.33333vw;
	  height: 5.33333vw;
	  border-radius: 50%;
	  justify-content: center;
	  align-items: center;
	  margin: 0 0.8vw 0 1.06667vw;
	  color: #fff;
	  font-family: PingFangSC-Semibold;
	  font-size: 2.93333vw;
	  letter-spacing: 0;
	}
	.ug-activity-mod--cardTagDesc--2ytVzkO {
	  display: block;
	  font-family: PingFangSC-Semibold;
	  font-size: 3.2vw;
	  letter-spacing: 0;
	  width: 19.2vw;
	  text-align: center;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  overflow: hidden;
	}
	.ug-activity-mod--countdownWrap--3KB4liy {
	  position: absolute;
	  top: 0;
	  left: 0;
	  height: 8.26667vw;
	  width: 42.66667vw;
	  flex-direction: row;
	  align-items: center;
	  padding-left: 3.2vw;
	  background: rgba(0, 0, 0, 0.4);
	  border-radius: 1.06667vw 0 3.2vw 0;
	}
	.ug-activity-mod--countdownPrefix--10fs7ro {
	  font-family: PingFangSC-Regular;
	  font-size: 2.93333vw;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 2.93333vw;
	  text-align: center;
	  margin-right: 1.33333vw;
	}
	.ug-activity-mod--countdownText--2fiCSTL {
	  width: 20vw;
	  font-family: PingFangSC-Medium;
	  font-size: 2.93333vw;
	  color: #ffef5d;
	  letter-spacing: 0;
	  text-align: center;
	  line-height: 2.93333vw;
	}
	.ug-activity-mod--titleWrap--ujKXpeV {
	  width: 88.53333vw;
	  height: 12.8vw;
	  margin: 10.93333vw 0 3.73333vw;
	}
	.ug-activity-mod--title--1KFJBd6 {
	  font-family: PingFangSC-Semibold;
	  font-size: 5.6vw;
	  font-weight: 700;
	  line-height: 5.6vw;
	}
	.ug-activity-mod--subtitle--1L76LcV,
	.ug-activity-mod--title--1KFJBd6 {
	  width: 56vw;
	  color: #fff;
	  letter-spacing: 0;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  overflow: hidden;
	}
	.ug-activity-mod--subtitle--1L76LcV {
	  font-family: PingFangSC-Regular;
	  font-size: 3.46667vw;
	  line-height: 3.73333vw;
	  margin-top: 3.46667vw;
	}
	.ug-activity-mod--goodsListWrap--1NxZoVY {
	  height: 40vw;
	  width: 94.66667vw;
	  background: #fff;
	  border-radius: 2.66667vw;
	  margin-bottom: 1.06667vw;
	  flex-direction: row;
	  align-items: center;
	  padding: 0 2.13333vw;
	}
	.ug-activity-mod--goodsItem--2Q8Mmx6 {
	  width: 28vw;
	  align-items: center;
	}
	.ug-activity-mod--goodsImgWrap--2cHQsAv {
	  position: relative;
	  margin-bottom: 5.06667vw;
	  width: 28vw;
	  height: 28vw;
	  border-radius: 1.6vw;
	  justify-content: center;
	  align-items: center;
	}
	.ug-activity-mod--goodsImg--m3x3avC {
	  border-radius: 1.6vw;
	}
	.ug-activity-mod--goodsTag--2ZmoWjm {
	  position: absolute;
	  left: 2.66667vw;
	  bottom: -3.33333vw;
	  height: 6.66667vw;
	  width: 22.66667vw;
	  background-image: linear-gradient(124deg, #ff7198, #f2058f 98%);
	  box-shadow: inset 0.26667vw -0.4vw 0.53333vw 0 rgba(255, 206, 223, 0.41);
	  border-radius: 3.33333vw;
	  font-family: PingFangSC-Medium;
	  font-size: 3.33333vw;
	  color: #fff;
	  display: block;
	  line-height: 6.66667vw;
	  text-align: center;
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	}
	.ug-activity-mod--goodsPrice--1s8TbOc {
	  font-family: PingFangSC-Medium;
	  font-size: 3.46667vw;
	  color: #ff5000;
	  line-height: 3.46667vw;
	  height: 3.46667vw;
	}
	.ug-activity-mod--card--GuwBh2X {
	  position: relative;
	  background-repeat: no-repeat;
	  background-size: cover;
	  border-radius: 3.2vw;
	  overflow: hidden;
	  flex-direction: row;
	  margin: 1.2vw 0;
	  padding: 3.2vw;
	  align-items: center;
	  width: 720rpx;
	  margin: 0 auto;
	}
	.ug-activity-mod--countdownWrap--2E9pHeU {
	  position: absolute;
	  top: 0;
	  left: 0;
	  height: 8.26667vw;
	  width: 42.66667vw;
	  flex-direction: row;
	  align-items: center;
	  padding-left: 3.2vw;
	  background: rgba(0, 0, 0, 0.4);
	  border-radius: 1.06667vw 0 3.2vw 0;
	}
	.ug-activity-mod--countdownPrefix--3AfNqnA {
	  font-family: PingFangSC-Regular;
	  font-size: 2.93333vw;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 2.93333vw;
	  text-align: center;
	  margin-right: 1.33333vw;
	}
	.ug-activity-mod--countdownText--YgtwoQ5 {
	  width: 20vw;
	  font-family: PingFangSC-Medium;
	  font-size: 2.93333vw;
	  color: #ffef5d;
	  letter-spacing: 0;
	  text-align: center;
	  line-height: 2.93333vw;
	}
	.ug-activity-mod--titleWrap--1_N3jfs {
	  width: 40.8vw;
	  margin-top: 7.73333vw;
	}
	.ug-activity-mod--title--3EY8wA0 {
	  width: 29.6vw;
	  font-family: PingFangSC-Semibold;
	  font-size: 4.8vw;
	  font-weight: 700;
	  letter-spacing: 0;
	  line-height: 5.33333vw;
	  color: #fff;
	}
	.ug-activity-mod--subtitle--3QzmKbo {
	  font-family: PingFangSC-Regular;
	  font-size: 3.2vw;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 3.2vw;
	  margin-top: 1.6vw;
	  width: 38.4vw;
	}
	.ug-activity-mod--goodsListWrap--XyDJC3- {
	  flex-direction: row;
	  align-items: center;
	  min-height: 30.4vw;
	}
	.ug-activity-mod--goodsItem--1-qNA2X {
	  width: 24vw;
	  align-items: center;
	  border-radius: 2.66667vw;
	  background: #fff;
	  overflow: hidden;
	}
	.ug-activity-mod--goodsItem--1-qNA2X:nth-child(1){
		margin-right: 1.6vw;
	}
	.ug-activity-mod--goodsImgWrap--1z1P17q {
	  position: relative;
	  width: 24vw;
	  height: 24vw;
	  justify-content: center;
	  align-items: center;
	}
	.ug-activity-mod--goodsTag--17DiCui {
	  position: absolute;
	  left: 1.6vw;
	  bottom: -3.33333vw;
	  height: 6.66667vw;
	  width: 20.8vw;
	  background-image: linear-gradient(124deg, #ff7198, #f2058f 98%);
	  box-shadow: inset 0.26667vw -0.4vw 0.53333vw 0 rgba(255, 206, 223, 0.41);
	  border-radius: 3.33333vw;
	  font-family: PingFangSC-Medium;
	  font-size: 3.33333vw;
	  color: #fff;
	  display: block;
	  line-height: 6.66667vw;
	  text-align: center;
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	}
	.ug-activity-mod--goodsPrice--1J6KrOa {
	  margin: 5.06667vw 0 1.86667vw;
	  font-family: PingFangSC-Medium;
	  font-size: 3.46667vw;
	  color: #ff5000;
	  line-height: 3.46667vw;
	}
	.ug-activity-mod--normalCard--FroKrNZ {
	  height: 28.8vw;
	}
	.ug-activity-mod--largeCard--1DKqFjp,
	.ug-activity-mod--normalCard--FroKrNZ {
	  position: relative;
	  background-repeat: no-repeat;
	  background-size: cover;
	  border-radius: 3.2vw;
	  overflow: hidden;
	  flex-direction: row;
	  margin: 1.2vw 0;
	  align-items: center;
	}
	.ug-activity-mod--largeCard--1DKqFjp {
	  height: 60vw;
	}
	.ug-activity-mod--countdownWrap--1LbAx37 {
	  position: absolute;
	  top: 0;
	  left: 0;
	  height: 8.26667vw;
	  width: 42.66667vw;
	  flex-direction: row;
	  align-items: center;
	  padding-left: 3.2vw;
	  background: rgba(0, 0, 0, 0.4);
	  border-radius: 1.06667vw 0 3.2vw 0;
	}
	.ug-activity-mod--countdownPrefix--1EGJXKY {
	  font-family: PingFangSC-Regular;
	  font-size: 2.93333vw;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 2.93333vw;
	  text-align: center;
	  margin-right: 1.33333vw;
	}
	.ug-activity-mod--countdownText--2cnrF2E {
	  width: 20vw;
	  font-family: PingFangSC-Medium;
	  font-size: 2.93333vw;
	  color: #ffef5d;
	  letter-spacing: 0;
	  text-align: center;
	  line-height: 2.93333vw;
	}
	.ug-activity-mod--normalCardButtonWrap--2PrzO_K {
	  position: absolute;
	  top: 11.33333vw;
	  right: 3.46667vw;
	}
	.ug-activity-mod--largeCardButtonWrap--sa1_0cx {
	  position: absolute;
	  top: 10.66667vw;
	  right: 3.46667vw;
	}
	.ug-activity-mod--mod--thkhCte {
	  font-family: PingFangSC;
	  border-radius: 3.2vw;
	  margin: 1.2vw 0;
	  overflow: hidden;
	}
	.ug-activity-mod--card--20aLLz6 {
	  position: relative;
	}
	.ug-activity-mod--bgPic--3_QO54o {
	  position: absolute;
	  width: 100vw;
	  top: 0;
	  left: 0;
	}
	.ug-activity-mod--topWrap--1bvDEPW {
	  position: relative;
	  flex-direction: row;
	  justify-content: space-between;
	}
	.ug-activity-mod--countdownWrap--3CRdxhv {
	  height: 8.26667vw;
	  width: 42.66667vw;
	  flex-direction: row;
	  align-items: center;
	  padding-left: 3.2vw;
	  background: rgba(0, 0, 0, 0.4);
	  border-radius: 1.06667vw 0 3.2vw 0;
	}
	.ug-activity-mod--countdownPrefix--oFA8WN6 {
	  font-size: 2.93333vw;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 2.93333vw;
	  text-align: center;
	  margin-right: 1.33333vw;
	}
	.ug-activity-mod--title--1qpeNFA {
	  font-size: 4.8vw;
	  font-weight: 500;
	  color: #fff;
	  margin-left: 3.2vw;
	  margin-top: 2.66667vw;
	  line-height: 4.8vw;
	}
	.ug-activity-mod--subscribeWrap--akQGgke {
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  margin-right: 3.2vw;
	}
	.ug-activity-mod--goodsWrap--2vnURij {
	  padding: 3.2vw;
	  flex-direction: row;
	  flex-wrap: wrap;
	}
	.ug-activity-mod--itemWrap--2BrykK7 {
	  width: 29.06667vw;
	  height: 44.8vw;
	  border-radius: 1.6vw;
	  background: #fff;
	  margin-bottom: 1.6vw;
	  overflow: hidden;
	  align-items: center;
	}
	.ug-activity-mod--goodsImg--F0-t0Ez {
	  margin-top: 1.6vw;
	  width: 25.86667vw;
	  height: 25.86667vw;
	  border-radius: 1.6vw;
	}
	.ug-activity-mod--itemTitle--r_pyNJQ {
	  font-family: PingFangSC;
	  font-weight: 500;
	  width: 29.06667vw;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	  overflow: hidden;
	  text-align: center;
	  font-size: 3.46667vw;
	  color: #000;
	  line-height: 5.6vw;
	}
	.ug-activity-mod--seckillWrap--o74unpm {
	  position: relative;
	  width: 26.93333vw;
	  height: 5.33333vw;
	  background-image: linear-gradient(90deg, #ff693f 3%, #ff2424 97%);
	  border-radius: 2.66667vw;
	  flex-direction: row;
	  justify-content: center;
	  align-items: center;
	  color: #fff;
	}
	.ug-activity-mod--seckillPriceL--6HNguWi {
	  font-size: 2.66667vw;
	  font-family: PingFangSC-Regular;
	  letter-spacing: -1px;
	}
	.ug-activity-mod--seckillPriceC--1YN_TQk {
	  font-size: 2.66667vw;
	  font-family: PingFangSC-Regular;
	  margin-left: 0.26667vw;
	  margin-right: 0.13333vw;
	}
	.ug-activity-mod--seckillPriceR--3UP4hr6 {
	  font-family: PingFangSC-Semibold;
	  font-size: 3.73333vw;
	  color: #fff;
	}
	.ug-activity-mod--goodsIcon--2qi_ySm {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 26.93333vw;
	  height: 5.33333vw;
	}
	.ug-activity-mod--activityPrice--3YHlpBd {
	  font-family: PingFangSC-Regular;
	  position: relative;
	  font-size: 2.66667vw;
	  color: #999;
	  height: 4.8vw;
	  justify-content: center;
	  align-items: center;
	}
	.ug-activity-mod--lineIcon--3PZu4ND {
	  position: absolute;
	  top: 50%;
	  left: 0;
	  transform: translateY(-50%);
	  width: 100%;
	  height: 0.26667vw;
	  background-color: #999;
	  opacity: 0.8;
	}
	.ug-activity-mod--more--1EaUorx {
	  align-items: center;
	  font-size: 3.46667vw;
	  color: #fff;
	  margin-bottom: 3.2vw;
	  opacity: 0.8;
	  font-family: PingFangSC-Regular;
	}
	.ug-activity-mod--moreIconWrap--3I2E-SJ {
	  flex-direction: row;
	  align-items: center;
	}
	body {
	  background-color: #170132;
	}
	.ug-activity-mod--modWrap--C4ykZxx {
	  padding: 0 1.6vw;
	}
	.ug-activity-mod--modTitle--3QJwcPL {
	  font-family: PingFangSC-Semibold;
	  font-size: 4.8vw;
	  font-weight: 700;
	  color: #fff;
	  letter-spacing: 0;
	  line-height: 4.8vw;
	  padding: 3.2vw 0;
	}
	.ug-activity-mod--emptyWrap--23fOFym {
	  padding: 10.13333vw 0;
	  align-items: center;
	}
	.ug-activity-mod--emptyDesc--1WuqiBM {
	  font-family: PingFangSC-Regular;
	  font-size: 4vw;
	  color: hsla(0, 0%, 100%, 0.6);
	  letter-spacing: 0;
	  margin-top: 3.2vw;
	}

</style>
