<template>
	<view class="content">
	<view class="flex-1" :style="modulMTop">
		<swiper autoplay :interval="3000" class="swiper-box flex-1" @change="changeSwiper" :current="swiperCurrent">
			<swiper-item class="swiper-box flex-1" v-for="(item, index) in articleList" :key="index">
				<view class="flex-1 swiper-box"><image :src="item.image[0] || item.videoCover" mode="aspectFill"></image></view>
				<view class="info-box w-100">
					<view class="w-100" style="height: 268rpx;">
						<view class="flex-1 mx-2">
							<view class="row-ac py-2">
								<view class="iconfont icon-fuhao- mr-1"></view>
								<view class="font-s-65 in1line">{{ item.title }}</view>
							</view>
							<view class="in2line font-s-3 flex-1 subtitle-box mx-1">{{ item.subtitle }}</view>
							<view class="row-ac count-box font-s-1 mt-2 ml-1">
								<view class="read-count">{{ item.readCount }}</view>
								<view class="ml-1">次浏览</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="flex-1 row" style="height: 60rpx;">
			<view class="dicator-item " v-for="(item, index) in articleList.length" :key="item" :class="index == swiperCurrent ? ' active' : ''">
				<view class="dicator-box"></view>
			</view>
		</view>
	</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperCurrent: 0,
			articleList: [
				{
					id: 4,
					title: '8个护肤小技巧，一般人做不到',
					subtitle: '护肤是女孩子需要长期坚持的事情，懂得精致护肤的女孩子，也总是拥有一个让人羡慕的高颜值',
					commentCount: 0,
					readCount: 2,
					fabulousCount: 0,
					isFabulous: false,
					collectionCount: 0,
					isCollection: false,
					image: ['https://demo.chunfengbuy.com/uploads/20220519/5b4daeb0fdc3b91bd18c018eb450a437.jpg'],
					video: '',
					videoCover: null,
					userName: null,
					userImage: '',
					createdAt: '2022-05-19 21:02:21',
					productData: []
				},
				{
					id: 3,
					title: '炎热的夏季，为什么胃却怕寒？缓解胃寒怎么吃?',
					subtitle: '从中医角度上来讲，胃寒主要是指寒邪入侵导致胃部阳气虚弱，继而影响了胃部的正常功能',
					commentCount: 0,
					readCount: 3,
					fabulousCount: 0,
					isFabulous: false,
					collectionCount: 0,
					isCollection: false,
					image: ['https://demo.chunfengbuy.com/uploads/20220519/cc0ba9cb2c3321249df75a70e1cf01f9.png'],
					video: '',
					videoCover: null,
					userName: null,
					userImage: '',
					createdAt: '2022-05-19 20:59:25',
					productData: []
				}
			]
		};
	},
	props: {
		articleInfo: {
			type: [String, Object],
			default: () => {
				return {};
			}
		}
	},
	computed: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss">
@import '@/static/css/main.scss';
.content{
	padding: 0 30rpx;
}
.swiper-box {
	height: 690rpx;
}
.info-box {
	background-color: rgba(245, 245, 245, 0.98);
	position: absolute;
	bottom: 0;
	left: 0;
	.iconfont {
		font-size: 38rpx;
		color: #000;
	}
	.subtitle-box {
		height: 80rpx;
		font-weight: 300;
	}
	.count-box {
		font-weight: 300;
		.read-count {
			color: #c4997a;
		}
	}
}
.dicator-item {
	width: 36rpx;
	height: 5rpx;
	transition: all 0.6s;
	background: #dbdbdb;
	margin-right: 8rpx;
}
.active .dicator-box {
	width: 36rpx;
	height: 5rpx;
	background: red;
}
</style>
