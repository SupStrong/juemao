<template>
	<view class="video-tem video-tem-1">
		<view class="vod-info cell-item">
			<view class="vod-detail">
				<view class="info-pic">
					<view class="vod-poster" style="background: url(https://gfs16.gomein.net.cn/T1Puh9BCKv1RCvBVdK.png);"></view>
					<view class="vod-favour-count">
						<text></text>
						38
					</view>
					<i class="video-play-icon"></i>
				</view>
			</view>
			<view class="vod-right-box">
				<view class="vod-cont vod-cont-1">
					<view class="cont-desc overflow-two">
						#和王铮亮一起来国美门店解锁看球新姿势 📺;百寸巨幕观赛，啤酒美食畅饮 &玩游戏赢周边，千元礼金等你来领 💕这个冬天《还是爱着》💕
					</view>
					<view class="cont-pic">
						<image alt="" class="userface" src="https://gfs14.gomein.net.cn/T1qjJnBQbv1RCvBVdK_34.jpg?v=2" />
						<view class="cont-name overflow-one">真快乐官方</view>
					</view>
				</view>
				<view class="vod-goods">
					<image alt="" class="goods-img" src="https://gfs17.gomein.net.cn/T1FoAOB5bv1RCvBVdK_360.jpg" />
					<image alt="" class="goods-img" src="https://gfs17.gomein.net.cn/T1eQWhBKxT1RCvBVdK_360.jpg" />
				</view>
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
.overflow-one {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.overflow-two {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.video-tem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.video-tem .vod-info {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column wrap;
          flex-flow: column wrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  margin-bottom: 20rpx;
  border-radius: 14rpx;
}
.video-tem .vod-info .vod-detail {
  width: 100%;
  height: 344rpx;
}
.video-tem .vod-info .vod-detail .info-pic {
  position: relative;
  width: 100%;
  height: 344rpx;
  border-radius: 14rpx 14rpx 0 0;
}
.video-tem .vod-info .vod-detail .info-pic .vod-poster {
  width: 100%;
  height: 344rpx;
  border-radius: 14rpx 14rpx 0 0;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-attachment: fixed;
  background-size: cover !important;
}
.video-tem .vod-info .vod-detail .info-pic .play-btn {
  position: absolute;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAMAAABGFileAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4AAAD6+vpLS0ubm5sAAADU1NQAAADz8/Px8fHo6OjOzs6CgoJ2dnZvb29iYmI2NjYdHR0AAAAAAAD8/Pzm5ubAwMC8vLxCQkL39/fu7u7X19eMjIwhISH5+fnj4+Pg4ODb29v///8xdpGzAAAANXRSTlNNAARKOhtDHxYJKAw/MQ5HRS0l+zfyYIUQthLl4dKvd3FuaFpTSTX1zqGeXuzcunxU7snFwOnJg1wAAALASURBVFjDtdmJVtpAAIXhO/tkX0CLaFWkqK1au+X9X60ieiKYZFb+B/gOJzMJs4AYS7RqeC4rhk0tedGKkpiDwRSFxKfYvF0EuFRxjFanmZ9bFgzT5cLdXcxhUa2ok5vNYVkl7F2aMtjHM0t3KeFWauW2cI4nRpfO4VGlDW4i4ZeadMsKvrUT7nID/5pRt9wgpHTETSqEpQZdKhGaGHLnCI5ln90WEcrpobtElIoDl0rESe+7KSJV049uxhCrtHdNc+H0+WrtMCd6dzGp3ncv/Vm5DR1MP/f5rntt9h2WJe9uifHWj917X09hVfPuFhjvsus7+QKbGN25dGoynHcf+/kLFqmdqzDRrNvr/Brm8p3LMVF30OwHzGVbN4GV6zJ87dYVVq7T8PGtW9i6fWffjDMCRLq73cXK9FVDAmfXPHwpgXZy++4fMN4tgXJ3zcMnCRp31zx8jID7u93FDUZKkAe43ePYO7KADHG7CwynUQW53RUGE2Bh7uWYizD3DIMpbI70e+ujPF8dOB+eMNwSPMT9PfZilCiO8r5RtMf4PtQE4hjfM05QHuP72xAQdoT/C0FA5h7u+cq09ANp4/8fS0JAFvHXD8XWJXX09Y5+dVM71355XZFXN8NEdx7ryWbnkhzjPXmsf8s3V8Rdr3OycydHbn3nvL/Qb+70iv36xHE/lPf7LFphvJu/sxf13wqWid41rK3XV9cPsI3v7bs5YpXtuVm8bXfvRjwokLR3Iz4JVpJDN6kQnho4j9II7nbwXE4hME4HXdLGOOTq3b4GAcmEfHbDZ1ueTJ0rq4BnO+USwfxmAjWd22c5nGPK4j6AFs4jVtrdi+gaLqWUTLi+Fy48c7l3ygpYlQvXe7KkYTDFtc+9HlU5Jqqa0vseMms5w1Cy0F73kH1Up7fyI17zRiRh96Z9yUILoYRelpRY9R8vxs3yyW5uuAAAAABJRU5ErkJggg==) no-repeat;
  background-size: contain;
  border: none;
  width: 86.4rpx;
  height: 86.4rpx;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.video-tem .vod-info .vod-detail .info-pic .vod-time {
  position: absolute;
  left: 16rpx;
  top: 16rpx;
  min-width: 60rpx;
  padding: 0 12rpx;
  height: 30rpx;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16rpx;
  font-family: PingFangSC-Regular;
  font-size: 18rpx;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30rpx;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.video-tem .vod-info .vod-detail .info-pic .video-play-icon {
  width: 38rpx;
  height: 38rpx;
  position: absolute;
  right: 14rpx;
  top: 14rpx;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAAHfOtk4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJqADAAQAAAABAAAAJgAAAACE8iBbAAAE2UlEQVRYCb1YTWhcVRROzKChIRlBk0XVsZskIAYtzELMQpAkuHDRLqK4mh/UjRaVJt3Y6BMLSoqgqIFo0HRpiFTBRUlAdJHgoiFNHJD8lXawISYVM0QTCxPj913nvJ558968+6LjgW/uOeeec+555953731TV3eb0mCbKdbzB+SY39LPHWjT5A8ODt6cmJh4gjwt6XKayvr6+rdEydbhT4m+FIbtKRHo7ohQah0OZIgxS+xtZUdHx3BJ6ZunI8nTyBFLT2v0Yuga6WdQDjdoyJTvEaVKrE4emn0VEcXB05blyL4XgPuUkSN8gzClNok2DbQBPwGGZNgEpGxJp5s/IJynESv7hu7x8OscTkpu5nljY+Pa3NxcQRk2M5IjiqBSuJMohtJms1nmaSgmjG51QanncI8AJykEEYdbAPaDDKAvqzqHPquML4H/gbIUU/WZur0CRVwrffiL0DELl3SwoNlxjQMYPtLb7JOSvgY+S4WmTCbzgJYDeE6wA8SYGRfT00AF6UndBTU1NZ2vMFIKFrNPyYHsEZAEvwVqbGx812vMYEtAl7fDT15ZWbmGHeGCXx91DMatJzDY5OTkd/39/d/TOIQu6dkchHFTiENQ9/vo2NbBxPBFMEdFCGlNELHxCyZ9zWA4OQxMfh3IAZcBX/ILFvoCIlIB+AD4S0f1Botat88QLC8BuXqFhsDcJYJlexx2VwFm6r5OLLoOzD5b4mtoXkv+cK35zl4ymWyxjMhdxgTK+DksLi4+19XV1bG1tXWzra3tYz8bpTPbFTPTR4vq/4dtbW29l+/k8PAwZ7kaJc2zVrOQvsHBwRPFYvH1lpaWoNo+bB2MQRsaGmKFQuFsZ2fnERlEtUcjBaMja7i0tLSrggi7EylYb2/vR1UmY53LIpRmZ2evdHd3fx1iOMXMeFRVUC6X+3l/f78Yj8fPWQSi/468m05FtGiKizBfkJpxXzos8aKyQGdZM3+C/xV4iMoIxDPzHbGXxxT5bjCvihDScrP8RNt4g0nfY2CeEsHT3oD8OVD06H3vGl4bkbmMeGDzJKv6PouDapnAjwC3/IoklJ3LBj2lGLCEzwC+250YHaJluSeA7SDfoMRYlROALJwg/3+r58L6CmA1y8ibGCvEW/1h7whlwSMIfIU+BdwK6opwf88AdwL/N3FMviS/Ab9wcNkwqDxJhQ2Nj48/zsOKZwu/QaucLzbhtA1zYC7mreRF6TQFW5Kj2Ws/MzNzJZVKTa2tre15+yLK77FifRGdAs1xSDy6urp6htVcXl5O9fT0uN+3gU7+HX1M7L/eCsxQ7e3tx6anp19mkpubmy+l02mbrxxJ09wKOJU1JV6gxsbGUolEwvZC2syKcbOrCfEewO8a3gVisdi5fD5/y3Igc1vh18ExS4dQs729vd2RkZGpgYEBc7SHOvgb5Hj+8fw6DkQ9/9yQvPQNDQ19Mzo6et1VHp7huXpZdn4meAqI28bDtnD//Pz8NraO3219LOwKsPkQKEpi9OF6ex6oyVvKAUKIa30MMN+GOjHxS4BJAfq4kr5atDzILwB5HdwvMelngs8CtTrQeXB/AZQlBNlQtcTEhlPMa9CTgPUaFGdPyzX0LcBrjpkyT78r2iTmGiuGm3In8CBAXgC2bkfhOnj+GURdJPobarA0pi/3ohgAAAAASUVORK5CYII=) no-repeat;
  background-size: cover;
  display: inline-block;
}
.video-tem .vod-info .vod-detail .info-pic .vod-favour-count {
  position: absolute;
  left: 14rpx;
  top: 14rpx;
  min-width: 60rpx;
  padding: 0 16rpx;
  height: 34rpx;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 17rpx;
  font-size: 24rpx;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-items: center;
}
.video-tem .vod-info .vod-detail .info-pic .vod-favour-count text {
  display: inline-block;
  width: 24rpx;
  height: 24rpx;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAACX0lEQVRIDZ2VT0gVURTGHUuLzH8VVBLVpiBSQSiRwCAQAheSEriNaNGmXRFBuGvlQjduy0Ub29RGpI1QqxbBw9IWYlqJSoYhUlFWb/p9992Zd+e+6fWaC793zznfd87ouzPzqqrcFYZhzs0rien5Lh/7GeMn2G0L7XZ/LLXGqM4HtYY4JcnBAdgfF1MDHKEvULru10yO8K6aj6UUdSNytEQixrUojsRxisnrkQfwFX7DOmg9L2zhW7vf0ISdJDfZc0EQ1JmRZT7UWI3eCq/L+EolGl9AV6lSrKDni5mNKH6DC65A/sWvubqJMQzAyxIhc4Fpd0FrvrCFU3ZfY8/DZjycZAjuxwUC8nNeXk/NHJ4OLOQMAteQFmO7TH2Ppr1KM6TV8D7VwbWliX4Nsw54RldYhFrf4Od4NiBQww7Y9g1ujt4Lk3GNpAcW4oITUD8JW06pEFLsh8ITYlXyS1A8A78L8Qho6Xt/As98T2qOcRZ60sSSA8N4COMgnIeD8Anm4SHna54bPJ3k8pyAfbAK0/AIz2f25KJBd8gEaL2Bi7A3chEfh1H4CXpk7sFhR28i1/ezBFpjkaZjawE1zcGuWMgYMKMRlkH3RYMuMAn6y8ybN+PcRJtmwQ94oFu7Gdb57sy7PuHMnvyiVa+kJv0Hg6B1Nfu8ZCez7piJ0euN5Iot3Epa/z9jzrCd1ZvopngUdDA6oGMJsYKEntO2/wP7338LEftAh67Xpe7zsgtPB6yAfrm6y5pdEfNZWIVtuOZqiqndhjwswClfrzinuQ7GQes9fAQNHoF/vicrvlBW4x/1HUcNY7qAAwAAAABJRU5ErkJggg==) no-repeat;
  background-size: cover;
  margin-right: 8rpx;
}
.video-tem .vod-info .vod-cont {
  position: relative;
  width: 100%;
  padding: 0 20rpx 20rpx;
}
.video-tem .vod-info .vod-cont .cont-pic {
  width: 64rpx;
  height: 64rpx;
  margin-left: 8rpx;
}
.video-tem .vod-info .vod-cont .userface {
  margin-top: -32rpx;
  left: 20rpx;
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  margin-right: 13rpx;
  border: 2rpx solid #fff;
}
.video-tem .vod-info .vod-cont .cont-name {
  max-width: 310rpx;
  -webkit-text-size-adjust: none;
  font-size: 28rpx;
  color: #262C32;
  height: 50rpx;
  padding: 12rpx 0 8rpx 0;
  font-weight: bold;
}
.video-tem .vod-info .vod-cont .cont-desc {
  font-size: 24rpx;
  color: #777777;
  line-height: 30rpx;
  font-weight: 400;
}
.video-tem .vod-info .vod-goods {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-justify-content: space-between;
  overflow: hidden;
  padding: 0 20rpx 20rpx;
}
.video-tem .vod-info .vod-goods .goods-img {
  width: 144rpx;
  height: 144rpx;
  background: #ffffff;
  border: 1px solid #EBECED;
  border-radius: 6rpx;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.video-tem .vod-info .vod-goods .goods-img:first-child {
  margin-right: 14rpx;
}
.video-tem .vod-info .vod-goods .vod-goods:last-child {
  border-radius: 0 0 14rpx 0;
}
.video-tem .vod-info .vod-goods .vod-goods:first-child {
  border-radius: 0 14rpx 0 0;
}
.video-tem-1 .vod-info {
  height: 360rpx;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-flow: inherit;
  -ms-flex-flow: inherit;
}
.video-tem-1 .vod-info .vod-detail {
  width: 360rpx;
  height: 360rpx;
}
.video-tem-1 .vod-info .vod-detail .info-pic {
  width: 360rpx;
  height: 360rpx;
  border-radius: 14rpx 0 0 14rpx;
  overflow: hidden;
}
.video-tem-1 .vod-info .vod-detail .info-pic .vod-poster {
  width: 360rpx;
  height: 360rpx;
  border-radius: 14rpx 0 0 14rpx;
}
.video-tem-1 .vod-info .vod-cont {
  padding-top: 28rpx;
  padding-left: 24rpx;
}
.video-tem-1 .vod-info .vod-cont .cont-desc {
  max-width: 310rpx;
  height: 72rpx;
  line-height: 36rpx;
  font-size: 30rpx;
  font-weight: bold;
  color: #262C32;
}
.video-tem-1 .vod-info .vod-cont .cont-pic {
  width: 100%;
  display: -webkit-box;
  display: box;
  display: -ms-flexbox;
  display: flex;
  margin: 14rpx 0 0 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-animation: center;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.h_center {
  -webkit-box-pack: center;
  box-pack: center;
  -ms-flex-pack: center;
      justify-content: center;
  -webkit-justify-content: center;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.h_space_between {
  -webkit-box-pack: center;
  box-pack: center;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -webkit-justify-content: space-between;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.v_center:not(.vertical) {
  -webkit-box-align: center;
  box-align: center;
  -ms-flex-align: center;
      align-items: center;
  -webkit-align-items: center;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.v_center.vertical {
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-box-pack: center;
  box-pack: center;
  -ms-flex-pack: center;
      justify-content: center;
  -webkit-justify-content: center;
  flex-direction: column;
  -ms-flex-direction: column;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.center {
  -webkit-box-align: center;
  -moz-box-align: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-align: center;
  box-pack: center;
  -ms-flex-align: center;
      align-items: center;
  -webkit-align-items: center;
  -ms-flex-pack: center;
      justify-content: center;
  -webkit-justify-content: center;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.vertical {
  -webkit-box-orient: vertical;
  box-orient: vertical;
  flex-direction: column;
  -ms-flex-direction: column;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.reverse {
  -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
  -ms-direction: row-reverse;
  -webkit-box-direction: reverse;
  box-direction: reverse;
}
.video-tem-1 .vod-info .vod-cont .cont-pic.stretch {
  -ms-flex-line-pack: stretch;
      align-content: stretch;
}
.video-tem-1 .vod-info .vod-cont .userface {
  width: 48rpx;
  height: 48rpx;
  margin-top: 22rpx;
  margin-right: 10rpx;
}
.video-tem-1 .vod-info .vod-cont div.cont-name {
  max-width: 252rpx;
}
.video-tem-1 .vod-info .vod-cont .cont-name {
  padding-left: 0;
  margin-top: 20rpx;
  font-size: 24rpx;
  font-weight: 400;
  color: #919599;
}
.video-tem-1 .vod-info .vod-goods {
  padding-left: 24rpx;
}
.video-tem-1 .vod-info .vod-goods .goods-img {
  width: 144rpx;
  height: 144rpx;
  border: 0px solid #fff;
}
</style>
