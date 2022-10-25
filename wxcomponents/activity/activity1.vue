<template>
	<view class="Topbangdan-mfw-index-box">
		<!-- v-for="(item,index) in list" -->
		<!-- 已改为页面外渲染cell -->
		<view class="Topbangdan-mfw-index" :class="'item' + id">
			<!-- Top盒子 - [背景,标题,xx人推荐,榜单按钮] -->
			<view class="Top-Image-mfw-box">
				<!-- 背景盒子 id = 话题/广场圈(id)  -->
				<view class="bg-Image-box" :data-id="item.id"><image class="Image" mode="widthFix" :src="icons[0].Mfw_Topbangdan_bg_Image"></image></view>
				<!-- 标题,xx人推荐,榜单按钮盒子 -->
				<view class="post-content-box">
					<!-- 顶部 榜单按钮 -->
					<view class="Top">
						<!-- 靠右边显示 -->
						<view class="ringht-bd-btn"><text class="bd-btn-text app-ttf">榜单</text></view>
					</view>
					<!-- 中间 [话题/广场圈(标题)] -->
					<view class="conter">
						<view class="Title-ttf-box">
							<text class="text title-text app-ttf">{{ item.huati_title }}</text>
						</view>
					</view>
					<!-- 底部 [xx人推荐(看过xx次)] -->
					<view class="Bottom">
						<view class="desc-ttf-box">
							<text class="text desc-text">{{ item.huati_count_kanci }}人推荐</text>
						</view>
					</view>
				</view>
			</view>
			<!-- Bottom盒子 [Top榜单前1-15]  -->
			<view class="Bottom-topbangdan-Info-box">
				<!-- 只渲染前3条数据 -->
				<view class="topbangdan-item" v-if="index <= 2" v-for="(items, index) in item.list" :key="index">
					<!-- 左边 [文章封面,排名] -->
					<view class="left">
						<!-- 文章封面 -->
						<view class="Image-box"><image class="Image" mode="widthFix" :src="items.Image"></image></view>
						<!-- count排名背景icon图标 -->
						<view class="count-Image-icons">
							<image class="Image-count" mode="scaleToFill" :src="icons[0].Mfw_Topbangdan_count_qian_Image"></image>
							<text class="text count-text app-ttf">0{{ index + Number(1) }}</text>
						</view>
					</view>
					<!-- 右边 [标题,评分(5星),xx条评论] -->
					<view class="right">
						<!-- 标题 -->
						<view class="Top-Title">
							<text class="text Title-text">{{ items.title }}</text>
						</view>
						<view class="Bottom-ping-feng">
							<!-- 评分(5星)盒子 -->
							<view class="pingxing-box">
								<view class="pingxing-item icons" v-for="idx in 5">
									<!-- #ifdef APP-NVUE -->
									<text class="nvueiconfont">&#xe64f;</text>
									<!-- #endif -->
									<!-- #ifndef APP-NVUE -->
									<text class="app-iconfont custom-icon-xingxing3"></text>
									<!-- #endif -->
								</view>
							</view>
							<view class="count-desc">
								<text class="text desc-text">{{ items.comment_count }}条</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'FatFatMeng-Topbangdan-mfw',
	props: {
	},
	data() {
		return {
			item:{
				huati_title:'最佳排行榜',
				huati_count_kanci:124,
				list: [
					{
						Image:
							'https://n1-q.mafengwo.net/s11/M00/18/CE/wKgBEFtQBiuAeQgQAAyvP32cmvw63.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
						title: '玉兰油一二三',
						comment_count: '1234'
					},
					{
						Image:
							'https://n1-q.mafengwo.net/s11/M00/18/CE/wKgBEFtQBiuAeQgQAAyvP32cmvw63.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
						title: '雅诗兰黛一二三',
						comment_count: '987'
					},
					{
						Image:
							'https://n1-q.mafengwo.net/s11/M00/18/CE/wKgBEFtQBiuAeQgQAAyvP32cmvw63.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
						title: '小子一二三',
						comment_count: '842'
					}
				],
			},
			// 仿马蜂窝APP的榜单 icons 图标素材
			icons: [
				{
					// 榜单背景图
					Mfw_Topbangdan_bg_Image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6f9528be-c345-44ba-b6fd-591d2d036aec/3a3b10bf-85fd-4dfa-a00d-fc3c2d51c342.png',
					// “热门榜单” - 数字(排行)icons背景图 Top1-Top3
					Mfw_Topbangdan_count_qian_Image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6f9528be-c345-44ba-b6fd-591d2d036aec/b18417c7-b9ee-4d9d-9093-7c79d1a5584a.png'
				}
			]
		};
	},
	beforeCreate() {
	}
};
</script>

<style lang="scss" scoped>
/* #ifndef APP-NVUE */
view, scroll-view, swiper-item {
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	flex-grow: 0;
	flex-basis: auto;
	align-items: stretch;
	align-content: flex-start;
}
/* #endif */
.app-iconfont,
.nvueiconfont {
	/* #ifdef APP-PLUS  */
	font-family: appiconfont;
	/* #endif */
	font-size: 16px;
	color: #333;
}
.app-ttf {
	/* #ifdef APP-PLUS  */
	font-family: appttf;
	/* #endif */
	font-size: 16px;
}
// 由于nvue没有媒体查询，所以必须指定宽度
// 750rpx - 左右20 = 710rpx
// 710rpx / 2 = 355rpx
// 355rpx - 3 = 348rpx(352盒子的宽度)(3距离)
// 348rpx X 2 = 704rpx
// 710rpx - 704rpx = 6rpx(中间的间隙)
.Topbangdan-mfw-index,
.Top-Image-mfw-box,
.bg-Image-box,
.bg-Image-box > .Image {
	border-radius: 20rpx;
}
.bg-Image-box {
	position: relative;
}
.post-content-box {
	position: absolute;
}

.Topbangdan-mfw-index-box {
	/* #ifndef APP-NVUE */
	display: flex;
	view {
		display: flex;
	}
	/* #endif */
	flex: 1;
	width: 348rpx;
	//background-color: #F368E0;
	justify-content: center;
	align-items: center;
	//padding: 10rpx 0;
	// margin-bottom: 20rpx;
	float: left;
	.left{
		height: 90rpx;
	}
	.Topbangdan-mfw-index {
		width: 348rpx;
		height: 550rpx;
		//border-radius: 14rpx;
		background-color: #f8ede2;
		// top
		.Top-Image-mfw-box {
			width: 348rpx;
			//border-radius: 14rpx;
			.bg-Image-box {
				//background-color: #F0AD4E;
				width: 348rpx;
				height: 200rpx !important;
				.Image {
					width: 348rpx;
					height: 200rpx !important;
				}
			}
			.post-content-box {
				width: 348rpx;
				.Top {
					width: 348rpx;
					padding: 14rpx 14rpx 0 14rpx;
					align-items: flex-end;
					.ringht-bd-btn {
						background-color: #ffd4b3;
						padding: 6rpx 10rpx;
						border-radius: 12rpx;
						.bd-btn-text {
							color: #242629;
							font-size: 24rpx;
							font-weight: 700;
						}
					}
				}
				.conter {
					width: 348rpx;
					//background-color: #0FAEFF;
					padding-bottom: 20rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					.Title-ttf-box {
						.title-text {
							/* #ifndef APP-NVUE */
							color: #ffffff;
							letter-spacing: 6rpx;
							//background: linear-gradient(234deg,#fadac3,#ffc7a0);
							background: linear-gradient(234deg, #fadac3, #ffd9be);
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
							text-shadow: none;
							font-size: 36rpx;
							/* #endif */

							/* #ifdef APP-NVUE */
							color: #fadac3;
							font-size: 40rpx;
							/* #endif */

							font-weight: 700;
						}
					}
				}
				.Bottom {
					width: 348rpx;
					padding: 0 20rpx;
					.desc-ttf-box {
						.desc-text {
							color: rgba(250, 218, 195, 0.8);
							font-size: 24rpx;
						}
					}
				}
			}
		}
		// bottom
		.Bottom-topbangdan-Info-box {
			width: 348rpx;
			padding-bottom: 20rpx;
			.topbangdan-item {
				width: 348rpx;
				flex-direction: row;
				flex-wrap: nowrap;
				padding: 12rpx 20rpx;
				align-items:end;
				height: 114rpx;
				.left {
					.Image-box {
						position: relative;
						border-radius: 14rpx;
						width: 90rpx;
						height: 90rpx;
						.Image {
							width: 90rpx;
							height: 90rpx;
							border-radius: 14rpx;
						}
					}
					.count-Image-icons {
						position: relative;
						top: -93rpx;
						/* #ifndef APP-NVUE */
						width: 55rpx;
						height: 65rpx;
						/* #endif */

						/* #ifdef APP-NVUE */
						width: 50rpx;
						height: 62rpx;
						/* #endif */
						//justify-content: center;
						align-items: center;
						.Image-count {
							position: relative;
							/* #ifndef APP-NVUE */
							width: 55rpx;
							height: 65rpx;
							/* #endif */

							/* #ifdef APP-NVUE */
							width: 50rpx;
							height: 62rpx;
							/* #endif */
						}
						.count-text {
							position: absolute;
							color: #242629;
							font-weight: 700;
							font-size: 24rpx;
							top: 13rpx;
						}
					}
				}
				.right {
					margin-left: 12rpx;
					width: 191rpx;
					justify-content: center;
					//background-color: #007AFF;
					.Top-Title {
						.Title-text {
							color: #242629;
							font-size: 26rpx;
						}
					}
					.Bottom-ping-feng {
						margin-top: 10rpx;
						flex-direction: row;
						flex-wrap: nowrap;
						.pingxing-box {
							flex-direction: row;
							flex-wrap: nowrap;
							.pingxing-item,
							.icons {
								.nvueiconfont,
								.app-iconfont {
									font-size: 24rpx;
									color: #ffd326;
								}
							}
						}
						.count-desc {
							padding-left: 6rpx;
							.desc-text {
								/* #ifdef APP-NVUE || MP */
								font-size: 20rpx;
								/* #endif */

								/* #ifndef APP-NVUE */
								font-size: 24rpx; //h5环境最小是24rpx(12px),低于12px不生效，无效果
								/* #endif */
								color: #242629;
							}
						}
					}
				}
			}
		}
	}
}
</style>
