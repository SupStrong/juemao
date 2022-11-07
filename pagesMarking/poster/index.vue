<template>
	<div class="container" catchtouchmove="ture">
		<div class="content" :class="iphoneModel ? 'X' : ''">
			<l-painter class="fl-row-center" isCanvasToTempFilePath @success="shareImg = $event" :board="templateArr[currentTab].template" :dirty="true" />
		</div>
		<div class="toolbar" :class="iphoneModel ? 'X' : ''">
			<scroll-view class="item-box" scroll-x>
				<a v-for="(item, index) in templateArr" :key="index" :class="currentTab == index ? 'item active' : 'item'" :data-current="index" @click="switchTab(index)">
					<img :src="item.small_bg" alt />
					<span class="left"></span>
					<i class="iconfont">&#xe6e4;</i>
				</a>
			</scroll-view>
			<div class="save-button" v-if="status == 0">该商品已下架或不存在</div>
			<div class="save-button" v-if="status == 2">未正确生成合伙人海报</div>
			<div class="save-button fl-row-center" :class="iphoneModel ? 'X' : ''" v-if="authorization == false && status == 1" @click="saveToCarame()">
				<i class="iconfont">&#xe70c;</i>
				<span>保存到相册</span>
			</div>
			<div class="save-button" :class="iphoneModel ? 'X' : ''" v-if="authorization == true && status == 1">
				<span class="setting">
					打开授权设置页
					<button open-type="openSetting"></button>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

const customStyle = '';
export default {
	data() {
		return {
			status: 1,
			authorization: false,
			routeData: '',
			shareImg: '',
			customStyle: customStyle,
			currentTab: 0,
			templateArr: [{ template: {} }],
			itemsList: [
				{
					id: 202,
					type: 1,
					title: '笨蛋',
					status: 0,
					template: {
						type: 'image',
						width: '500',
						height: '875',
						src: 'http://admin.cw100.com/storage/uploads/image/2022/11/01/c43576d5c09a1667793a0c93c784d5dc.png',
						css: {
							width: '500rpx',
							height: '875rpx',
							background: ''
						},
						views: [
							{
								type: 'image',
								src: 'http://admin.cw100.com//storage/data/mini_wxcbe60162f9dc451c/2020/04/21/_a=3361&t=kq&sid=87&cid=110100.jpg',
								css: {
									hasBorder: 0,
									right: '28rpx',
									bottom: '122rpx',
									position: 'fixed',
									width: '161rpx',
									height: '161rpx',
									borderRadius: '0'
								}
							}
						]
					},
					small_bg: 'https://guide.cw100.com/storage/uploads/image/2021/06/13/9a1e549ccbf3db9c75d33a0b8e99ee47.jpg'
				},
				{
					id: 201,
					template: {
						type: 'image',
						src: 'https://guide.cw100.com//storage/uploads/image/2021/06/13/a142b217bc90704d450c49a9dd1af383.jpg',
						css: {
							// 根节点若无尺寸，自动获取父级节点
							width: '600rpx',
							height: '1050rpx'
						},
						views: [
							{
								css: {
									background: '#07c160',
									height: '120rpx',
									width: '120rpx',
									display: 'inline-block'
								},
								type: 'view'
							},
							{
								css: {
									background: '#333333',
									height: '120rpx',
									width: '120rpx',
									position: 'fixed',
									top: '120rpx',
									right: '139rpx',
									borderTopRightRadius: '60rpx',
									borderBottomLeftRadius: '60rpx',
									display: 'inline-block',
									margin: '0 30rpx'
								},
								views: [],
								type: 'image'
							},
							{
								css: {
									background: '#ff9d00',
									height: '120rpx',
									width: '120rpx',
									borderRadius: '50%',
									display: 'inline-block'
								},
								views: [],
								type: 'view'
							}
						]
					},
					small_bg: 'https://guide.cw100.com//storage/uploads/image/2021/06/13/3628229474e090b988239e3f0b9505b7.jpg'
				}
			]
		};
	},
	onShow() {
		this.routeData = this.$root.$mp.query;
		this.routeData.type = 1;
		var _that = this;
		wx.getSetting({
			success(res) {
				if ('scope.writePhotosAlbum' in res.authSetting) {
					if (res.authSetting['scope.writePhotosAlbum'] == true) {
						_that.authorization = false;
					} else {
						_that.authorization = true;
					}
				} else {
					_that.authorization = false;
				}
			}
		});
	},
	computed: {
		...mapState({
			iphoneModel: state => state.iphoneModel,
			userInfo: state => state.userInfo
		})
	},
	methods: {
		getPainterData(id, type, type_son = '') {
			this.itemsList.forEach(element => {
				//element.template = JSON.parse(element.template);
				element.template = element.template;
			});
			if (this.itemsList.length > 0) {
				this.templateArr = this.itemsList;
			}
		},
		switchTab(oIndex) {
			this.shareImg = '';
			// if (this.getData.goods && this.getData.goods.length == 1 && oIndex == 4) {
			//   showPopup("该门店下只有一个商品,海报生成失败");
			//   return false;
			// } else {
			//   this.currentTab = oIndex;
			// }
			// console.log(this.templateArr[thicurrentTab].template,"templateArr[currentTab].template")
			this.currentTab = oIndex;
		},
		saveToCarame() {
			let _this = this;
			wx.showLoading({
				title: '图片保存中...'
			});
			wx.getSetting({
				success(res) {
					if (res.authSetting['scope.writePhotosAlbum'] == true) {
						_this.saveImage();
					}
					if (!res.authSetting['scope.writePhotosAlbum']) {
						wx.authorize({
							scope: 'scope.writePhotosAlbum',
							success() {
								_this.saveImage();
							},
							fail(errMsg) {
								_this.authorization = true;
								showPopup('请点击授权按钮', 0);
							}
						});
					}
				}
			});
		},
		saveImage() {
			let _this = this;
			_this.authorization = false;
			wx.saveImageToPhotosAlbum({
				filePath: _this.shareImg,
				success: function() {
					wx.hideLoading();
					showPopup('已保存至手机', 1);
				}
			});
		}
	},
	watch: {
		routeData: {
			handler: function(val, oldval) {
				if (val.type == 1) {
					// id = 需要的ID
					// type = 类型
					// type_son = 子类
					this.getPainterData(this.routeData.store_id, 3);
					// this.setPosterStatus('store');//清除海报状态
				}
				if (val.type == 2) {
					wx.setNavigationBarTitle({
						title: '商品海报'
					});
					this.getPainterData(this.routeData.goods_id, 1);
				}
				if (val.type == 4 && val.name == 'baoming') {
					wx.setNavigationBarTitle({
						title: '报名活动海报'
					});
					this.getPainterData(this.routeData.promote_id, 2, 100);
				}
				if (val.type == 4 && val.name == 'change') {
					wx.setNavigationBarTitle({
						title: '以旧换新海报'
					});
					this.getPainterData(this.routeData.promote_id, 2, 300);
				}
				if (val.type == 4 && val.name == 'ticket') {
					wx.setNavigationBarTitle({
						title: '卡券海报'
					});
					this.getPainterData(this.routeData.promote_id, 2, 200);
				}
				if (val.type == 5 && val.name == 'insider') {
					wx.setNavigationBarTitle({
						title: '内幕海报'
					});
					this.getPainterData(this.routeData.id, 4);
				}
				if (val.type == 6 && val.name == 'partner') {
					wx.setNavigationBarTitle({
						title: '合伙人'
					});
					this.getPainterData(this.userInfo.store_id, 5);
				}
				if (val.type == 7) {
					wx.setNavigationBarTitle({
						title: '会员'
					});
					this.getPainterData(0, 7);
					this.setPosterStatus('member'); //清除海报状态
				}
			},
			deep: true
		}
	}
};
</script>
<style lang="scss">
.container {
	background: rgba(51, 51, 51, 1);
	width: 100%;
	height: 100%;
	position: relative;
}

page {
	height: 100%;
}
.content {
	display: flex;
	align-items: center;
	justify-content: center;
}
.fl-row-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.toolbar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 750rpx;
	height: 270rpx;
	background: #fff;

	&.X {
		height: 358rpx;
	}

	.item-box {
		width: 750rpx;
		height: 182rpx;
		background: #000;
		white-space: nowrap;
		padding: 14rpx 30rpx 0;

		.item {
			display: inline-block;
			height: 152rpx;
			width: 96rpx;
			background: #f6f6f6;
			margin-right: 24rpx;
			border-radius: 8rpx;
			position: relative;

			img {
				border-radius: 8rpx;
				height: 152rpx;
				width: 96rpx;
			}

			.left {
				position: absolute;
				top: 4rpx;
				right: 4rpx;
				width: 0;
				height: 0;
				border-width: 20rpx;
				border-style: solid;
				border-color: #f36e20 #f36e20 transparent transparent;
				display: none;
			}

			i {
				position: absolute;
				right: 6rpx;
				top: 6rpx;
				font-size: 16rpx;
				color: #fff;
				display: none;
			}

			&.active {
				img {
					border: 4rpx solid #f36e20;
				}

				.left,
				i {
					display: block;
				}
			}

			img {
				border-radius: 8rpx;
				height: 152rpx;
				width: 96rpx;
			}
		}
	}

	.save-button {
		width: 750rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: #fff;
		font-size: 32rpx;
		background: #f36e20;

		&.X {
			border-radius: 46rpx;
			width: 690rpx;
			margin: 10rpx auto;
		}

		i {
			color: #fff;
			font-size: 28rpx;
			margin-right: 5px;
			padding-top: 2px;
		}

		.setting {
			display: block;
			height: 90rpx;
			position: relative;

			button {
				position: absolute;
				top: 0;
				left: 0;
				height: 90rpx;
				width: 100%;
				line-height: 90rpx;
				text-align: center;
				color: #fff;
				font-size: 32rpx;
				opacity: 0;
			}
		}
	}
}

.content {
	height: calc(100% - 270rpx);
	width: 100%;
	background: #333;

	&.X {
		height: calc(100% - 358rpx);
	}
}

painter {
	height: 100%;
	width: 100%;

	canvas {
	}
}
</style>
