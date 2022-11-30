<template>
	<tn-modal v-model="isVisibile" :custom="true" width='0%'>
		<view class="custom-modal-content">
			<view class="rax-view-v2 Subscribe--subScribeInner--Uns6ZGu">
				<image class="Subscribe--subScribeHearder--2ozHx0G" src="//gw.alicdn.com/imgextra/i3/O1CN016WPVRS1CIbhRV0fAh_!!6000000000058-2-tps-630-364.png" />
				<image class="Subscribe--subScribeIcon--3ObPNNi" src="//gw.alicdn.com/imgextra/i4/O1CN017OZtyr1TlK03TK5gJ_!!6000000002422-2-tps-40-41.png" />
				<text lines="1" class="rax-text-v2 Subscribe--subScribeTitle--22flWzo">恭喜你订阅成功</text>
				<text lines="1" class="rax-text-v2 Subscribe--subScribeCaption--CIlUiwk">记得回【有好货首页-右上角我的兴趣】查</text>
				<text lines="1" class="rax-text-v2 Subscribe--subScribeCon--3xh3EDQ">看我已关注以及更多推荐兴趣哦</text>
				<view class="rax-view-v2 Subscribe--subScribeBtn--mSaxfI2">我知道啦</view>
			</view>
		</view>
	</tn-modal>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		isVisibile: {
			type: Boolean,
			default: false
		}
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	
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
	  // width: 84vw;
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
