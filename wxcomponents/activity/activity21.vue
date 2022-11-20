<template>
	<view>
		<view
			class="rax-view-v2 __tracker poi-play-doc-item-box"
			style="margin-right: 0vw;"
		>
			<view class="rax-view-v2 poi-play-doc-top-pic">
				<image
					lazyload="true"
					mode="aspectFill"
					class="poi-play-doc-top-pic-ico"
					src="https://img.alicdn.com/imgextra/i4/O1CN01EovZWa2B2kbkfOxfV_!!0-alitrip.jpg"
					style="width: 43.2vw; height: 55.3333vw; object-fit: cover;"
				/>
			</view>
			<view class="rax-view-v2 poi-play-doc-item-mask"></view>
			<view class="rax-view-v2 poi-play-doc-item-title">之前来京都好几次，没时间去故宫转转，今天刚好闲来故宫看看，</view>
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
}
.rax-text-v2 {
  box-sizing: border-box;
  display: block;
  font-size: 4.26667vw;
  white-space: pre-wrap;
}
.rax-text-v2--overflow-hidden {
  overflow: hidden;
}
.rax-text-v2--singleline {
  white-space: nowrap;
}
.rax-text-v2--multiline {
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.poi-play-doc-item-title-box {
  margin: 0 auto 3.06667vw;
  padding-top: 2.66667vw;
  width: 41.06667vw;
  height: 11.73333vw;
}
.poi-play-doc-item-mask {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 23.2vw;
  width: 43.2vw;
  opacity: 0.9;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.72), transparent);
  border-radius: 0 0 2.4vw 2.4vw;
}
.poi-play-doc-item-title {
  position: absolute;
  bottom: 1.73333vw;
  left: 0;
  right: 0;
  padding: 0 1.6vw;
  line-height: 4.53333vw;
  font-size: 3.46667vw;
  font-weight: 500;
  color: #fff;
  line-height: 4.93333vw;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.poi-play-doc-item-box,
.poi-play-doc-top-pic {
  position: relative;
  height: 55.33333vw;
  width: 43.2vw;
}
.poi-play-doc-top-pic {
  background-color: #fffefe;
}
.poi-play-doc-top-pic-ico {
  border-radius: 2.4vw;
}
</style>
