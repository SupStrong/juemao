<template>
	<view>
		<view class="week-skucard">
			<view class="skucard-border"></view>
			<view class="corner">
				<view class="corner-sort" style=""></view>
				<view class="corner-tag" style="background-image: url(https://m.360buyimg.com/babel/jfs/t1/186347/13/21038/19002/612e0012E34547634/b817dd52aab0d699.png);">
					<view class="week-star-container star"><view class="star-icon star" style="width: 100%;"></view></view>
				</view>
			</view>
			<view class="img-container" style="background-image: url(https://m.360buyimg.com/babel/jfs/t1/73083/30/17126/103200/6137268dE909a157d/cff647faf9ac806d.png);">
				<img
					data-src="https://m.360buyimg.com/ceco/s300x300_jfs/t1/39475/37/20438/45208/6319cd39Ee7c728c0/7c930b6c23312885.png"
					src="https://m.360buyimg.com/ceco/s300x300_jfs/t1/39475/37/20438/45208/6319cd39Ee7c728c0/7c930b6c23312885.png"
					class="main-img"
				/>
				<img
					data-src="https://m.360buyimg.com/ceco/s200x200_jfs/t1/108488/36/31040/44215/6319ce74E7ac8a43f/c2c53ac2028ae617.jpg"
					src="https://m.360buyimg.com/ceco/s200x200_jfs/t1/108488/36/31040/44215/6319ce74E7ac8a43f/c2c53ac2028ae617.jpg"
					class="secondary-img"
					style="border: 2rpx solid rgb(93, 84, 255);"
				/>
				<view
					class="info info0"
					style="color: rgb(6, 6, 10); background-image: url(https://m.360buyimg.com/babel/jfs/t1/182268/15/21149/2826/612df92eE9f3be6f8/5d3188cf6c3c8b05.png);"
				>
					<text>穿着轻盈</text>
				</view>
				<view
					class="info info1"
					style="color: rgb(6, 6, 10); background-image: url(https://m.360buyimg.com/babel/jfs/t1/182268/15/21149/2826/612df92eE9f3be6f8/5d3188cf6c3c8b05.png);"
				>
					<text>质地蓬松</text>
				</view>
				<view
					class="info info2"
					style="color: rgb(6, 6, 10); background-image: url(https://m.360buyimg.com/babel/jfs/t1/40838/26/15791/2754/612df93bE31396c6a/a0127dacf2bb1cff.png);"
				>
					<text>触感细腻</text>
				</view>
			</view>
			<view class="content-container">
				<view class="sku-title" style="color: rgb(255, 255, 255);">七匹狼 经典样式羽绒服</view>
				<view class="go-btn" style="background-image: url(https://m.360buyimg.com/babel/jfs/t1/200409/4/9479/8470/614c728dEe16f47b8/4c77b0d4a43d7956.png);"></view>
				<view class="desc-container">
					<view class="week-desc" style="color: rgb(255, 255, 255);">
						<text class="expand-btn"></text>
						选用经典造型，结合纯色图案修饰，外观更显简约。经过衔缝工艺处理，实现有效固定，不再担心内芯移动问题。
					</view>
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
.week-skucard {
	box-sizing: border-box;
	width: 750rpx;
	min-height: 534.3359724rpx;
	margin: 26.496rpx 0;
	border-radius: 13.248rpx;
	position: relative;
	background-color: #242733;
}
.week-skucard.shop-rank {
	background-color: #d0e0f8;
	border: 2.2080276rpx solid #b8cffc;
}
.week-skucard.shop-rank .skucard-border {
	display: none;
}
.week-skucard .skucard-border {
	pointer-events: none;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsYAAAHkCAMAAAAKOhknAAABQVBMVEUAAAAa9+sI/dsA/cVVqv9qa/860uoA/dMA/dkB/eoA/d9igf8A/swp3f1fif0N9fIL9ckZ6/ZrZP9lef8A/eRobv9Lr/Me5dYV7c86yf9alP9SpfU7xelWm/g00P9Bwf9Fuv9TpP9qaf5WnP8x1OMq2d5tXv9Fue9Pq/9mdP5ak/ki4/k2zeVBv+wl4NoS8tldjf9KtP9LsP9OmfoA/ccA/8ZlbP8A/sVoZ/8v1/8v1/8A/cgw1f9qY/8v2P8A/8kA/9xwYv8A/9ZdmP8A/+gA/9Bmgf9RrvtZn/0O+NA8ze0o5v9DxP8Z79Zpdv9tav8D//EA/+sA/+I8zf9rcP821f9Xo/8e7f1gkP8V9PlDw/It3eRhjP8m5N9Ju/9Ltvcz1uhTqf9jh/9NtP8N+vZoe/8t3v8h6dtHvPR7Zv818P8mdBspAAAAP3RSTlMAAg7vDg4O7+/v7+/w8O/v7+/w7+/v7+/v7+/v7+/v7+/v7+/v7/Lv7+/v7+/v7ybv7+8loXRyV6yld8BeysTsGmEfAAAH10lEQVR42uzXQWsTQQCG4dlGqEoWEbx4qT/AwxyaUJKWbijmFA9VKeJdesj//wFuSm8qTdJe5uN5GHZgzy8fTNnpSqnzy8nQnvWBbo61elnf9/LlaN/2cXs7nqf9/q9fT/r5tM1+7v/WXy/rLt5HXamzYXUzTNo1PdTp9PSZXh/v7XiO9+EQb57h3WHeH+Tzv/UHuN9u+0V97Hi8LqaryeyinkBD6tWi3/ZXDx2Pn/l6PasFmlMXm82ydA9bvB7m4w3NKWV5v9ntcVcn63kZf0Bzxm6Xm76O9c5WMxXTqLHcxXZRSh2m5yqmVV133t/VMh/HWMU0azfHy3J5c2GMaVfXXW2uy2So1ph2daXenZVhciJj2tWVk7M7GdM2GRNAxgSQMQFkTAAZE0DGBJAxAWRMABkTQMYEkDEBZEwAGRNAxgSQMQFkTAAZE0DGBJAxAWRMABkTQMYEkDEBZEwAGRNAxgSQMQFkTAAZE0DGBJAxAcaMP8qYxu0y/iFj2iZjAsiYADImgIwJIGMCyJgAXXklY1pnjQlgjQkgYwLImAAyJoAnHgGsMQFkTAAZE0DGBJAxAWRMABkTQMYEkDEBZEwAGRNAxgSQMQFkTAAZE0DGBJAxAWRMABkTQMYEkDEBZEyAMeNPX2VM22RMABkTQMYEkDF/2KWDIgCBGABiVrAAgvjg3wM9Gd1JNCRAYwI0JkBjAjQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwI0JkBjAjQmYBpfGrOcxgRoTIDGBGhMgMYEaEyAxgRoTIDGBJzGr8bspjEBGhOgMQEaE6AxARoToDEBGhOgMQEaE6AxARoToDEBGhOgMQEaE6AxARoToDEBGhOgMQEaEzCNb41ZTmMCNCZAYwI0JkBjAjQm4DT+NGY3jQnQmACNCdCYAI0J0JgAjQmYxo/GLKcxARoToDEBGhOgMQEaE6AxARoToDE/u3RMBCAQBEBMC0ODE1BAj38T/Mu4nURDAjQmQGMCNCZAYwI0JmA1vjRmOI0J0JiA3fjWmNk0JkBjAjQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwI0JmA3/jRmNo0J0JgAjQnQmACNCdCYAI0J0JiA1fjQmOE0JkBjAjQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwJ241djZtOYAI0J0JgAjQnQmACNCdCYAI0J0JgAjQnQmIDV+NSY4TQmQGMCNCZAYwI0JkBjAjQmQGMCNCZAYwJ240djZtOYAI0J0JgAjQnQmACNCdCYAI0J0JgAjQnQmACN+dmlgxoEoiCAYgJIEIAKPJCggQOn9S9i/8iYl1ZDAzQmYBp/NGY3jQnQmACNCTiNXxqznMYEaEyAxgRoTIDGBGhMgMYEaEyAxgRoTIDGBGhMgMYEaEyAxgRoTIDGBGhMgMYEaEyAxgRoTIDGBGhMgMYEaEyAxgRoTIDGBEzjn8bspjEBGhOgMQEaE3AavzVmOY0J0JgAjQnQmACNCdCYAI0J0JgAjQnQmACNCdCYAI0JmMZ/jdlNYwI0JuA0fmrMchoToDEBGhOgMQEaE6AxARoToDEBGhOgMQEaE6AxARoTMI0vjdntNH5ozHIaE6AxARoToDEBGhOgMQEaE6AxARoToDEBGhOgMQHT+KsxN7t0TIQwEAVQEAoUMBigwwxpYiH+LeROxn+zq2Fn05gAjQnQmACNCdCYAI0J0JgAjQnQmACNCdCYAI0J0JgAjQnQmACNCdCYAI0J0JgAjQlYjd8aM5zGBGhMgMYEaEyAxgRoTMBufGnMbM/HS2Om05gAjQnQmACNCdCYAI0J0JgAjQnQmACNCdCYgN34rzGzaUyAxgRoTIDGBGhMwGr805jhNCZAYwI0JkBjAjQmQGMCNCZAYwI0JkBjAlbjj8YMpzEBGhOgMQG78akxs2lMgMYEaEyAxgRoTIDGBGhMgMYEaEyAxgRoTIDGBGhMgMYEaEyAxgRoTMBq/NWY4XbjQ2Nm05gAjQnQmACNCdCYm106IAIAhAEg1MFG9i+li7E/yECAxgRoTIDGBGhMgMYEaEyAxgT8xkdjltOYAI0J0JgAjQnQmACNCdCYgGl8NWY3jQnQmACNCdCYAI0J0JgAjQnQmACNCdCYAI0JeO3USUvDQBjG8Rlje7GIVFxAvYiOKOocJhuUkqYSN1AvIuKCIojm+38BJ1LUNMukSIV5fX7Mxpz/vMgYCEDGQAAyBgKQMRCAjIEAnbFAxmA5ZAwEIGMgABkDAcgYCEDGQAAyBgKQMRCAjIEAZAwEIGMgQemMnUgiY7AXZyrust4w4MgYrMW5n/aZN3AxjcFenIWpz2TUURjHYCvOlBCKMVePY3QMduLZMA71LZ3EQ8dgJd2tHwvFGWdBEnn6A8AqLNu64tjXEevlJYkrGYB1VDiqOOs46AwcN5Az0Fi7/Xn+0uw/0GrpNQ1K+aFIxajirGPpRoNh5EzPwmRWG1lp5rDMdp2tOvul1s0OyuzUWG5ozWzDaK/KvNlcucWi3Zylos0x3QLxJU5TESqd74h+SK/nRH/kbDIXTb2Ne6x3b/Jc53wSd0bveU+1Toxufjg1Oapwm/eQ95JzXOX122XR9birgrhKt++rLF7tAydMhAzFCKajAAAAAElFTkSuQmCC);
	background-size: 100% 100%;
}
.week-skucard .corner {
	position: absolute;
	top: 13.248rpx;
	z-index: 1;
}
.week-skucard .corner .corner-sort {
	width: 90.5279724rpx;
	height: 45.2640276rpx;
	margin-left: 25.3920276rpx;
	background-size: cover;
	text-align: center;
	font-size: 33.12rpx;
	line-height: 69.552rpx;
	font-family: JDZhengHei;
	font-weight: 700;
	color: #000;
}
.week-skucard .corner .corner-tag {
	box-sizing: border-box;
	width: 149.04rpx;
	height: 70.6559724rpx;
	background-image: url(data:image/png;base64,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);
	background-size: 100% 100%;
	padding-top: 36.432rpx;
	padding-left: 13.248rpx;
}
.week-skucard .img-container {
	position: relative;
	height: 386.4000276rpx;
	background-image: url('//m.360buyimg.com/babel/jfs/t1/36489/30/18449/16542/630db0c6E8ae7a70f/cedc40ed60dc666c.pn'g);
	background-size: cover;
	background-color: #fff;
	border-radius: 11.0399724rpx 11.0399724rpx 0 0;
}
.week-skucard .img-container.shop-rank {
	background-image: url('//m.360buyimg.com/babel/jfs/t1/140383/19/29037/13402/630db0c6Eb3097bbf/0b29c8e67ae1f6ac.png');
}
.week-skucard .img-container .info {
	position: absolute;
	width: 249.5039724rpx;
	height: 49.68rpx;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	line-height: 0;
	color: #06060a;
}
.week-skucard .img-container .info text {
	display: inline-block;
	text-align: center;
	width: 182.16rpx;
	line-height: 55.2000276rpx;
	font-size: 28.7040276rpx;
	font-family: PingFangSC;
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.week-skucard .img-container .info0,
.week-skucard .img-container .info1 {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAAAsCAMAAABPLJQhAAAAkFBMVEUAAAD///8AAAAEBBEGBgoAAAACAgb///8AAAAEBAcAAAAAAADKyszh4eIZGRv39/cNDRAGBggDAwYAAAAAAAAAAAAMDA8bGxtSUkgCAgQBAQTt7e0AAAAAAAAICAj////7+/uBgYMFBQn9/f1xcXMwMDORkZN4eHpGRkq1tberq62hoaFkZGdSUlY+PkIoKCrAkd+9AAAAH3RSTlMA/YkO8wRb+0HNs3v+/f379evgwaeDJhYM11L7mW429vJhRAAAASpJREFUaN7tmleWwjAMRWXATpuh9yl2ogSYAux/dziBX8IJf3rm7uAe2ZZVyBNnPSksYnqC/rwqcymUVbqizqQlK0HsZ9SVuIqskwNHxwVp6kS2V87Kgflj2PU+9nJRitapn+kaW9E7lnPS0IrsRpXBjqIP49tgia3oHXczcEXrokNGGlqR7fvwGzuK1qnfzRpb0Tv+f5KGVmQenbfYUawzx2SFregd85Q0tCK76PT1uBiWrFhnjvGyPY4mmSRGsKJ16i+hNrZFjRGs6B0Ppt/CplGcilbkXTEe3Ke4gq8oO4oPDqoRfxevzw3yi3pLGsB5sUn9rw+cbEX8b3gAxRR+SYzf2AigPYXfZMRvFeM3/AMY2+AP35oR6msQHt46QwBLKSGsFsEviF0AurGDDSOrU7MAAAAASUVORK5CYII=);
	top: 185.472rpx;
	left: 32.0160276rpx;
}
.week-skucard .img-container .info0 text,
.week-skucard .img-container .info1 text {
	margin: 0 7.7279724rpx;
}
.week-skucard .img-container .info1 {
	top: 275.9999724rpx;
}
.week-skucard .img-container .info2 {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAAAsCAMAAABPLJQhAAAAkFBMVEUAAAD///8AAAAGBgkHBxItLS0DAwj///8AAAAUFBcWFhgEBAcAAAAAAAAGBgrp6en39/cGBggDAwYAAAAAAAAAAAAMDA8CAgQAAAAAAADd3d/Pz9EAAAAICAj////7+/uBgYMFBQn9/f0wMDR2dnhvb3GRkZNGRkrFxce1tberq62hoaFkZGdSUlY+PkIoKCqXr65bAAAAHnRSTlMA/YnzDgVa+0EU+82qevz8++vgwbSDJteYUP39bjYCKgncAAABSElEQVRo3u2aaXLCMAyFbXCcOAs7hW44dha69/63a5l02ukMhIh/z+L5BN/o2ZIlCbqS9QhFRSIukFlVdYmipsoVHXFZSyD5JifyRWL9HnuLIxlXVK8m6dT7HY6srAsaoVo8S7sDkpXliGbTvMEiJCMKXc0skk3piDfje7AgkhGXLRohDTESxT5GIyRG8TGdSqyLSI7i5gXOpiTESGzfAAlJUbz9nEGVNXREM39CDOJwxEisSkjCX0R1lvDhIwYra/4h6mye6TNlTXqHly/+ELU7SCujTspkr5g2/UFcuMn3ceM+7VEJO8SJO6gX0bUeGrGL4sactqnatnjF6ZG72Jv2wY064EWNwJ+bLi8GnTSGCD31syjgrmU4k88Uhy9x+I0NHu0pBk3G8FvFPBr+DMY2HIZv4Y9QWQzCOawzhL+UwmO1CG9B7AtzOWVai4zBSgAAAABJRU5ErkJggg==);
	top: 66.24rpx;
	right: 32.0160276rpx;
}
.week-skucard .img-container .info2 text {
	margin-left: 60.7199724rpx;
}
.week-skucard .img-container .main-img,
.week-skucard .img-container .secondary-img {
	object-fit: contain;
	object-position: center;
	position: absolute;
}
.week-skucard .img-container .main-img {
	top: 28.7040276rpx;
	left: 235.152rpx;
	width: 313.5360276rpx;
	height: 313.5360276rpx;
}
.week-skucard .img-container .secondary-img {
	width: 196.5119724rpx;
	height: 196.5119724rpx;
	top: 154.5600276rpx;
	right: 66.24rpx;
	border-radius: 98.2560276rpx;
	background-color: #fff;
}
.week-skucard .content-container {
	padding: 13.248rpx 2.2080276rpx 17.6639724rpx 28.7040276rpx;
	position: relative;
	overflow: hidden;
	min-height: 99.36rpx;
	background-color: #242733;
	border-radius: 13.248rpx;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeMAAAAICAMAAAD9XWf/AAAAolBMVEUAAABN2PYA/8lwWv8A/9RvWf9vWv8A/9s/xfJpbv8A/8gA/8ddkPtSqPcA/9UA/9QA/9MV8eMr3esU7dEV8ttKhf4A/9oI/dAu2uwY7eUA/88B/89bhP4B/85PrfZgivtsYv8Q8dQA/8hmaP8A/ccD/tQG/c8B/89mav9jcv9paf9JsfZItPRqcP8/xfEJ+t0A/8hWnPkg6ec7yPAw1+sq3urryIbBAAAANnRSTlMAAmhoaG5maGdnbmtpZ25rZWlqBQ4JZglnZ1wxFD9qZ10iYj87KBZKNilKQTBubVZUWzZZR11mlpQKAAACWElEQVRIx7XWUVOjQBAEYEguwQACi4KJInrq3elFzcXo//9rl93tmZ2tVXxImMeven1I01VGE3nnURztL47PLjNBbGPHSiuVpB/mQNLK72OJvlbGEkewjVIrcy72UddLc452Jzjxctuf2uNYs83z/EZfx7HmdoHTBppN7X1BxzE62XH6QJHoKhXENnqsMg0XgorKVFdcgwIDtZpaEJmuExYS7E2tTMfqTZulemk6rtdMz6+24VdNZKi4F7HcdpyvI77HF9vwy72j2Vz/9vPZIB1uYcfZ3QW+qujiLhPENnasNFQKqmiyoMAGY3rHfmwPRLCVwo5dbFljx45O6Bp+2fQ0Y22W8hw7FrEFnYvRzz//go5lYcfpFUceUkFsI8euacaCMFlQYESYMRNbAiPSFRPxjFUwY9Nx/cy0phlrIkPHvYih41wT7p5m/Bgx0e4G6XALO84uz2J8VeceSRs/VpWSzDwnlmCVMS/WGmq9mKGk9WKJOS+mlN3xxsVqffuKPxzRinfiZY+OtxzrcnRsCLZAxbcNx6b2ZgN0FAs7Tn+JRQliGznGM2biyTKFJmdMxJYkbHLGMoaOlYu984wdfTZjdNyzYca5nHHMM35i+0u7G6TDLew4+8dfwe9MENvYsRIz3gjCjEHCPom1oMCYEn1+TNmOlYjVdsf1jqmjijWRUcVbF6OKNeG6G5oxWzeb2k4G6DgWdvyT/+/+k0qSNn6sKgUVE9NxIV/SjGWstX16MXTsxUzJ3l+jjl3snToWRB2Ll+v+1JTcuxjP+GloxjHvbogON3H/ATAWbjadaVplAAAAAElFTkSuQmCC);
	background-repeat: no-repeat;
	background-position: 28.7040276rpx 71.7600276rpx;
	background-size: 533.232rpx 8.8320276rpx;
}
.week-skucard .content-container .sku-title {
	box-sizing: border-box;
	height: 55.2000276rpx;
	line-height: 0;
	padding-top: 27.5999724rpx;
	width: 552.0000276rpx;
	font-size: 37.5359724rpx;
	font-family: PingFangSC;
	font-weight: 700;
	color: #fff;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.week-skucard .content-container .go-btn {
	width: 174.4320276rpx;
	height: 50.7839724rpx;
	background-image: url(data:image/png;base64,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);
	background-size: cover;
	position: absolute;
	right: 0;
	top: 22.0800276rpx;
}
.week-skucard .content-container .desc-container {
	margin: 33.12rpx 0 0;
}
.week-star-container {
	position: relative;
	height: 17.6639724rpx;
	width: 99.36rpx;
	background-size: 19.872rpx 17.6639724rpx;
	overflow: hidden;
	background-repeat: repeat-x;
}
.week-star-container.star {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAGFBMVEUAAAAEBAkNDREFBQsLCwsGBgoAABEICAi2NVYgAAAACHRSTlMAMg0pFCIHGq7FhYoAAABbSURBVAjXYwABJQYYMIYxmAQVoCxWwQAoS1FQCEwnuRsKCpeoMTAkC0KAGVA5BCiAVAEBSCVEEGKOI5AhwoDKCgSyRMEsQ8FQQWEwS9CIQVkQbL8JkHAG6cUEADwlCOcjdr/iAAAAAElFTkSuQmCC);
}

.week-star-container .star-icon {
	width: 100%;
	height: 100%;
	background-size: 19.872rpx 17.6639724rpx;
	background-repeat: repeat-x;
}
.week-star-container .star-icon.star {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAPFBMVEUAAAAAAAUGBgoGBggGBgkEBAkFBQgFBQoGBgoICAgGBggGBgoEBAoGBgoEBAgGBgoEBAoEBAoICAgGBgqikKr8AAAAE3RSTlMACsdN9da5YkQ8Nu3dpYN0Wi4eBUzYrwAAAHhJREFUGNNtj1kOwCAIRBF3u5f737WTGuqSvg91XhACKdbSDPNsskjuszEURALuThYB5au4c9y9AL/HfKPyWmVgvTB9VJZAck249DajtKhZEuLroqqIUNWh6kCobKq2th9SCDhYjXHCmG1ZnP4r/qyP07eduv1/eQDTfwiNB9eMbQAAAABJRU5ErkJggg==);
}
.week-desc {
	font-size: 24.2879724rpx;
	font-family: PingFangSC;
	font-weight: 400;
	color: #fff;
	overflow: hidden;
	height: 33.12rpx;
	line-height: 33.12rpx;
	padding-right: 28.7040276rpx;
	position: relative;
}
.week-desc.shop-rank {
	color: #616a8d;
}
.week-desc.shop-rank .expand-btn {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAApVBMVEUkJjIiJjIkJjIjJjIiJjIkJjIiJjIkJjIkJjIiJjIiJDIiJjIkJjQiJjIkJDIkKDQiJjAmJjIiIjQeLCwqKiokJjQkJjIkJjIgIycoKkQiJS1UTuQdISBcU/4mKT1SS9tgV/8sLlM1NHFGQa5QStJaUvY+O5I7OYtUTOAxMWRDQKQzMmowMF4ZHg85N4BJRLhAPZoqLEtZUfBXT+02NXhMR8VBPp/W6RxuAAAAF3RSTlP36+HVyb2zp5uReGxiVko+NCgcEAaFhcoJ5oIAAAKXSURBVEjHvZbnjqswEIX39t4LB+OOMR0WSPL+j3ZtkqwT6a4C/MgoYTCS/XnOjMvD718/f3z/9vXL508f/3x4/+7tm9evXr54iJ43UPD4pnFQPHVZC0GkUyOK5IYVwqQ6wn8gf29CQPJCVFrdjkTpShQ5wXoIlDA1oQC5aQAltREKa+WiOrNAtNgAm2m6DgLNSnpO/oUduQRXRo7TKpnGGrmgHIPP4w1VemHVzo84qCsb5j7cURRWQEhhHWPGlTIRwWQP981IJhmTzmYnohPFFmS5XDQXOMfUSNUGxYSHRE1ddvLQ1HWpWd/UzZMAIqfLc5LUFxDNh3gY4tg/khkC0FjuKICI2TbUB+pisVzQgjy9l8xbdnrOcjkjSnbgTiL26FyQWeilEJpWNEBkXtaaVY1u9mNZq6P8z0Bo1S+VC0YjCnI1LQXbtbStkpZ6OqiXS7d+EXq5KIIGxVIILxQuIql7IZgvsZEJYdy8O2vzivW5tfaR7Z3rQulPC+UicRKTMDdZ2jRlpkqrInMLxUEMy7LM/71znpnQddwE2cm4beks1yFp2xY+VE60bAjnc06cu4BskiuXNs9ztu/yzmTurZ751DI/EeIgc40EuTYlvpKjq9xpYjKbpiwZU8yf95N3cyTeh8RvKmFjCOnYEPGpBydpdxJyPC6YEEko4dWL0elhgY7FvgI69HKOkbuGDpCrxbhhW0HtEuwhAD3IImnAZ3QinAuQsK1s2SDRT77CGI8PuaMYReDa3MgGV5CwQa7f6skgfWKNTNhoAZ1I8RhDjXKHUyTy4CFhq99yaPFUEQfZP5YRIvfrRMKh9g3OA5vOv4ZDa9Pxi2OTnuUjnPjTN8TsH+H4vcdF4h5Xontc7u53Tb3LhfsftqYSuTv165YAAAAASUVORK5CYII=);
}
.week-desc .expand-btn {
	position: absolute;
	right: 28.7040276rpx;
	display: inline-block;
	box-sizing: border-box;
	width: 110.3999724rpx;
	height: 33.12rpx;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAApVBMVEUkJjIiJjIkJjIjJjIiJjIkJjIiJjIkJjIkJjIiJjIiJDIiJjIkJjQiJjIkJDIkKDQiJjAmJjIiIjQeLCwqKiokJjQkJjIkJjIgIycoKkQiJS1UTuQdISBcU/4mKT1SS9tgV/8sLlM1NHFGQa5QStJaUvY+O5I7OYtUTOAxMWRDQKQzMmowMF4ZHg85N4BJRLhAPZoqLEtZUfBXT+02NXhMR8VBPp/W6RxuAAAAF3RSTlP36+HVyb2zp5uReGxiVko+NCgcEAaFhcoJ5oIAAAKXSURBVEjHvZbnjqswEIX39t4LB+OOMR0WSPL+j3ZtkqwT6a4C/MgoYTCS/XnOjMvD718/f3z/9vXL508f/3x4/+7tm9evXr54iJ43UPD4pnFQPHVZC0GkUyOK5IYVwqQ6wn8gf29CQPJCVFrdjkTpShQ5wXoIlDA1oQC5aQAltREKa+WiOrNAtNgAm2m6DgLNSnpO/oUduQRXRo7TKpnGGrmgHIPP4w1VemHVzo84qCsb5j7cURRWQEhhHWPGlTIRwWQP981IJhmTzmYnohPFFmS5XDQXOMfUSNUGxYSHRE1ddvLQ1HWpWd/UzZMAIqfLc5LUFxDNh3gY4tg/khkC0FjuKICI2TbUB+pisVzQgjy9l8xbdnrOcjkjSnbgTiL26FyQWeilEJpWNEBkXtaaVY1u9mNZq6P8z0Bo1S+VC0YjCnI1LQXbtbStkpZ6OqiXS7d+EXq5KIIGxVIILxQuIql7IZgvsZEJYdy8O2vzivW5tfaR7Z3rQulPC+UicRKTMDdZ2jRlpkqrInMLxUEMy7LM/71znpnQddwE2cm4beks1yFp2xY+VE60bAjnc06cu4BskiuXNs9ztu/yzmTurZ751DI/EeIgc40EuTYlvpKjq9xpYjKbpiwZU8yf95N3cyTeh8RvKmFjCOnYEPGpBydpdxJyPC6YEEko4dWL0elhgY7FvgI69HKOkbuGDpCrxbhhW0HtEuwhAD3IImnAZ3QinAuQsK1s2SDRT77CGI8PuaMYReDa3MgGV5CwQa7f6skgfWKNTNhoAZ1I8RhDjXKHUyTy4CFhq99yaPFUEQfZP5YRIvfrRMKh9g3OA5vOv4ZDa9Pxi2OTnuUjnPjTN8TsH+H4vcdF4h5Xontc7u53Tb3LhfsftqYSuTv165YAAAAASUVORK5CYII=);
	background-size: contain;
	background-repeat: no-repeat;
}
.week-desc .expand-btn.shop-rank {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAeCAMAAADpcJv8AAAAb1BMVEXA2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f7A2f4AAADA2f56m/uPrfyvyv2XtPyFpfy40v6Kqfyivv2mwv2cuf1/oPuAofusx/20z/4kbjibAAAAFnRSTlPz6NzRxbmuopeLgHRoXVFGOi4jFwwAa6GhTgAAAZxJREFUSMfNltly8yAMRvsv3fdNQkhsxu//jIXGHtW+cCunnem5IAmT0SFfZODk9eX56fHh/u725vrq8uL87PT/v79/TuCbsWsohwE/ZQiZjtAk5kwCnyKUmdNOjYRA8GUoBNmjoSGCiTiQXVMLgREaqlUzqoWX9Cm/Ik2eMho1QRPD4pWC71Mr/JxbsGlSANU4UBzqtL7o6pJJw/RBw1HhbQ2xRUMMCi7Y1gCTQZMzrEJ7j993x7YmZ4Mm0KKeiKBvg8c2bGsoGDSDLDSMH0htya6BxenLCBMyGDS4+OBrSuhSSg7bIL3d1pB+e6dG0Ot/s5zW0BTcGdqIYc6moAZEmBcaDW1fC1T0jrsKuTk4TBqPtNEC9obOSJB6TccCqYRp1aXARkPbH0+HctBIyw39FKfHCBuPp3mzkVbnoBkzzrUhIgtsbDbmrTNi6sF5VzDWgp4OQZZmOX7r1IOgtIKCiCHX9sZjF9D8W9aaFPYea9TXF+tcVmL3kzZ8rH3ce6xBHX70kFZPsV45St1zgRqtF6jxN18Hf/Zyezxvkq/zu9DdyQEAAAAASUVORK5CYII=);
}
.week-desc.expand {
	height: 66.24rpx;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
</style>
