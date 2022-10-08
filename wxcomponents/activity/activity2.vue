<template>
	<view class="youji-mfw-index-box">
		<!-- v-for="(item,index) in list" -->
		<!-- 已改为页面外渲染cell -->
		<view class="youji-mfw-index-item">	
			<!-- 封面+游记信息 -->
			<view class="Image-box">
				<!-- 封面 -->
				<image class="Image" mode="widthFix"
				:src="item.Image"
				></image>
				<!-- 游记信息 -->
				<view class="content">
					<!-- 如：游记·香格里拉 -->
					<view class="Top-youji-tit">
						<text class="youji-tit-text text appttf-mfw-blod"
						>活动·{{item.UserGPS}}</text>
					</view>
					<!-- 游记标题 -->
					<view class="Bottom-desc-Title">
						<text class="desc-Title-text text appttf-mfw-blod"
						>{{item.title}}</text>
					</view>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="UserInfo-box">
				<view class="UserInfo">
					<view class="left">
						<view class="Image-box">
							<image class="Image" mode="widthFix"
							:src="item.UserImage"
							></image>
						</view>
						<view class="UserName">
							<text class="UserName-text text"
							>{{item.UserName}}</text>
						</view>
					</view>
					<view class="right">
						<view class="Icon">
							<!-- #ifdef APP-NVUE -->
							<text class="app-iconfont">&#xe66b;</text>
							<!-- #endif -->
							<!-- #ifndef APP-NVUE -->
							<text class="app-iconfont custom-icon-kanguo2"></text>
							<!-- #endif -->
						</view>
						<view class="kanci">
							<text class="kanci-text text">{{item.count_kanci}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"FatFatMeng-youji-mfw",
		props:{
			// 仿马蜂窝APP首页游记(瀑布流里的)
			// 数据列表
		},
		data() {
			return {
				item:{
					Image:'https://b1-q.mafengwo.net/s16/M00/C6/2B/CoUBUmEVR62AE95QABTH688x_Jo604.jpg?imageMogr2%2Fauto-orient%2Fthumbnail%2F!350x466r%2Fgravity%2FCenter%2Fcrop%2F350x466%2Fformat%2Fwebp%2Fstrip',
					UserGPS:'玉兰油',
					title:'打卡甘肃省博物馆💕领略丝绸之路文明',
					UserImage:'https://n1-q.mafengwo.net/s12/M00/D1/C3/wKgED1v3uaOADWepACAWS9q5Rhg19.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
					UserName:'诗的寓意',
					count_kanci:'2343'
				}
			};
		},
		beforeCreate(){
			// #ifdef APP-PLUS
			const domModule = weex.requireModule('dom');
			// APP NVUE下 加载字体图标
			domModule.addRule('fontFace', {
				fontFamily: 'appiconfont',
				src: "url('http://at.alicdn.com/t/font_2582495_l8bsl3n1qme.ttf')"
			});
			// 自定义字体,不是icons字体图标
			domModule.addRule('fontFace', {
				fontFamily: 'appttf',
				src: "url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6f9528be-c345-44ba-b6fd-591d2d036aec/9768b86a-b79c-41bc-9305-c42785200f0d.ttf')"
			});
			// #endif
		}
	}
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
	.app-iconfont,.nvueiconfont {
		/* #ifdef APP-PLUS  */
	    font-family: appiconfont;
		/* #endif */
		font-size: 16px;
		color: #333;
		
	}
	.app-ttf{
		/* #ifdef APP-PLUS  */
		font-family: appttf;
		/* #endif */
		font-size: 16px;
	}
	
	.youji-mfw-index-item{
		position: relative;
	}
	.content{
		position: absolute;
		bottom: 64rpx;
	}
	.youji-mfw-index-box{
		/* #ifndef APP-NVUE */
		display: flex;
		view {
			display: flex;
		}
		/* #endif */
		flex: 1;
		width: 348rpx;
		justify-content: center;
		align-items: center;
		float: left;
		display: inline-block;
		background-color: white;
		border-radius: 10rpx;
		.youji-mfw-index-item{
			width: 348rpx;
			height: 550rpx;
			border-radius: 20rpx;
			//padding: 10rpx 0;
			// margin-bottom: 20rpx;
			.Image-box{
				width:348rpx;
				border-radius: 20rpx;
				.Image{
					width:348rpx;
					border-radius: 20rpx;
				}
				.content{
					width: 348rpx;
					//background-color: #3DA7FF;
					align-items: center;
					.Top-youji-tit{
						width: 324rpx;//28rpx,左右14
						background-color: rgba(255, 255, 255, 0);
						.youji-tit-text{
							//width: 162rpx;// 324/2=162
							/* #ifndef APP-NVUE */
							font-size: 24rpx;
							width: 136rpx;
							/* #endif */
							
							/* #ifdef APP-NVUE */
							font-size: 24rpx;
							width: 132rpx;
							/* #endif */
							max-width: 162rpx;
							font-weight: 700;
							padding: 10rpx 14rpx;
							background-color: #ffdb26;
							align-items: center;
							border-top-left-radius: 10rpx;
							border-top-right-radius: 10rpx;
							//border-bottom-right-radius: 5px;
							//border-bottom-left-radius: 5px;
							color: #242629;
						}
					}
					.Bottom-desc-Title{
						width: 324rpx;//28rpx,左右14
						background-color: rgba(255, 255, 255, 0.85);
						padding: 10rpx 14rpx;
						border-top-right-radius: 10rpx;
						border-bottom-right-radius: 10rpx;
						border-bottom-left-radius: 10rpx;
						.desc-Title-text{
							/* #ifndef APP-NVUE */
							-webkit-line-clamp: 2!important;
							/* #endif */
							
							/* #ifdef APP-NVUE */
							lines:2!important;
							/* #endif */
							
							color: #242629;
							font-size: 28rpx;
							font-weight: 700;
						}
					}
				}
			}
			.UserInfo-box{
				width: 348rpx;
				align-items: center;
				justify-content: center;
				margin-top: 50rpx;
				.UserInfo{
					width: 324rpx;//28rpx,左右14
					//background-color: #07C160;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-between;
					//align-items: center;
					.left{
						flex-direction: row;
						flex-wrap: nowrap;
						//justify-content: center;
						align-items: center;
						.Image-box{
							width: 36rpx;
							border-radius: 18rpx;
							.Image{
								width: 36rpx;
								border-radius: 18rpx;
							}
						}
						.UserName{
							margin-left: 10rpx;
							width: 120rpx;
							max-width: 160rpx;
							.UserName-text{
								color: #717376;
								font-size: 24rpx;
							}
						}
					}
					.right{
						flex-direction: row;
						flex-wrap: nowrap;
						align-items: center;
						.Icon{
							margin-right: 6rpx;
							.app-iconfont{
								color: #717376;
								font-size: 28rpx;
							}
						}
						.kanci{
							width: 80rpx;
							max-width: 100rpx;
							.kanci-text{
								/* #ifndef APP-NVUE */
								font-size: 24rpx;
								/* #endif */
								
								/* #ifdef APP-NVUE */
								font-size: 22rpx;
								/* #endif */
								color: #717376;
							}
						}
					}
				}
			}
		}
	}
	
	
	
	
</style>
