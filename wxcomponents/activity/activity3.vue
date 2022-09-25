<template>
	<view class="huati-mfw-index-box">
		<!-- v-for="(item,index) in list" -->
		<!-- 已改为页面外渲染cell -->
		<view class="huati-mfw-index-item">	
			<!-- 封面+游记信息 -->
			<view class="Image-box">
				<!-- 封面 -->
				<image class="Image" mode="widthFix"
				:src="item.Image"
				></image>
				<!-- 游记信息 -->
				<view class="content">
					<view class="Top-huati-tit">
						<!-- 定位icons图标 -->
						<view class="Image-box">
							<image class="Image" mode="widthFix"
							:src="Image_GPS"
							></image>
						</view>
						<text class="huati-tit-text text appttf-mfw-blod"
						>{{item.UserGPS}}</text>
					</view>
					<!-- 话题标题 + 话题下的第一个游记的标题 -->
					<view class="Bottom-desc-Title"
					:class="index==1?'blued':''||index==2?'huang':''"
					>
						<view class="desc-huati">
							<!-- 话题Icons图标 -->
							<view class="Icons">
								<!-- #ifdef APP-NVUE -->
								<text class="app-iconfont">&#xe604;</text>
								<!-- #endif -->
								<!-- #ifndef APP-NVUE -->
								<text class="app-iconfont custom-icon-label"></text>
								<!-- #endif -->
							</view>
							<!-- 话题名称 -->
							<view class="huati-Title">
								<text class="huati-Title-text text appttf-mfw-blod"
								>{{item.huati_title}}</text>
							</view>
						</view>
						<!-- 关联话题下的第一个游记标题 -->
						<text class="desc-Title-text text appttf-mfw-blod"
						>{{item.title}}</text>
					</view>
				</view>
			</view>
			<view class="Bottom-Image-bg">
				<view class="Image-bg"></view>
			</view>
			<!-- 用户信息,[话题组件，这里为XX人正在热议] -->
			<view class="UserInfo-box">
				<view class="UserInfo">
					<view class="left">
						<view class="UserName">
							<text class="UserName-text text"
							>{{item.count_kanci}}人正在热议</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"FatFatMeng-huati-mfw",
		props:{
		},
		data() {
			return {
				// 定位Icons图标
				Image_GPS:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6f9528be-c345-44ba-b6fd-591d2d036aec/143415cb-090e-4c98-93b2-b2f480e34405.png',
				item:{
					Image:'https://b1-q.mafengwo.net/s16/M00/C6/2B/CoUBUmEVR62AE95QABTH688x_Jo604.jpg?imageMogr2%2Fauto-orient%2Fthumbnail%2F!350x466r%2Fgravity%2FCenter%2Fcrop%2F350x466%2Fformat%2Fwebp%2Fstrip',
					UserGPS:'玉兰油',
					title:'【梦回大唐】神都洛阳，令姿煌煌 | 6天5夜深度游',
					UserImage:'https://n1-q.mafengwo.net/s12/M00/D1/C3/wKgED1v3uaOADWepACAWS9q5Rhg19.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
					UserName:'诗的寓意',
					count_kanci:'2343',
					huati_title:'我的战役日常',
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


<style  lang="scss" scoped>
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
	.huati-mfw-index-item{
		position: relative;
	}
	.content{
		position: absolute;
		bottom: 60rpx;
	}
	.huang{
		background-color: rgba(255, 200, 0, 0.75)!important;
	}
	.blued{
		background-color: rgba(0, 126, 255, 0.75)!important;
	}
	// .Top-right-ImageVideoIcon{
	// 	position: absolute;
	// 	top: 0;
	// 	right: 0;
	// }
	.huati-mfw-index-box{
		/* #ifndef APP-NVUE */
		display: flex;
		view {
			display: flex;
		}
		/* #endif */
		flex: 1;
		width: 342rpx;
		height: 550rpx;
		//padding: 10rpx 0;
		//background-color: #07C160;
		justify-content: center;
		align-items: center;
		float: left;
		background-color: white;
		border-radius: 10rpx;
		// margin-bottom: 20rpx;
    display: inline-block;
		.huati-mfw-index-item{
			width: 342rpx;
			border-radius: 20rpx;
			//padding: 10rpx 0;
			margin-bottom: 30rpx;//图文特殊点，离下面30rpx
			align-items: center;
			.Image-box{
				width:342rpx;
				border-radius: 20rpx;
				.Image{
					width:342rpx;
					border-radius: 20rpx;
				}
				// .Top-right-ImageVideoIcon{
				// 	image,.Image{
				// 		width: 50rpx;
				// 	}
				// }
				.content{
					width: 342rpx;
					//background-color: #3DA7FF;
					align-items: center;
					background-image:linear-gradient(to top,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0));
					border-bottom-right-radius: 20rpx;
					border-bottom-left-radius: 20rpx;
					.Top-huati-tit{
						margin-bottom: 14rpx;
						width: 324rpx;//28rpx,左右14
						background-color: rgba(255, 255, 255, 0);
						flex-direction: row;
						flex-wrap: nowrap;
						align-items: center;
						.Image-box{
							width: 30rpx;
							.Image{
								width: 30rpx;
							}
						}
						.huati-tit-text{
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
							padding: 10rpx 4rpx;
							//background-color: #ffdb26;
							align-items: center;
							border-top-left-radius: 10rpx;
							border-top-right-radius: 10rpx;
							//border-bottom-right-radius: 5px;
							//border-bottom-left-radius: 5px;
							color: #fff;
						}
					}
					.Bottom-desc-Title{
						width: 342rpx;//28rpx,左右14
						//background-color: rgba(217, 222, 232, 0.75);
						//background-color: rgba(0, 126, 255, 0.75);
						background-color: rgba(125, 182, 216, 0.75);
						padding: 10rpx 14rpx;
						border-radius: 20rpx;
						flex-direction: column;
						.desc-huati{
							flex-direction: row;
							flex-wrap: nowrap;
							align-items: center;
							//padding-top: 6rpx;
							padding-bottom: 10rpx;
							.Icons{
								.app-iconfont{
									color: #FFFFFF;
									font-size: 28rpx;
								}
							}
							.huati-Title{
								margin-left: 10rpx;
								min-width: 140rpx;
								max-width: 280rpx;
								.huati-Title-text{
									color: #FFFFFF;
									/* #ifdef APP-NVUE */
									font-size: 32rpx;
									/* #endif */
									
									/* #ifndef APP-NVUE */
									font-size: 28rpx;
									font-weight: 700;
									/* #endif */
								}
							}
						}
						.desc-Title-text{
							/* #ifndef APP-NVUE */
							-webkit-line-clamp: 2!important;
							/* #endif */
							
							/* #ifdef APP-NVUE */
							lines:2!important;
							/* #endif */
							
							color: #f1f2f6;
							font-size: 24rpx;
							font-weight: 700;
						}
					}
				}
			}
			.Bottom-Image-bg{
				width: 342rpx;
				align-items: center;
				justify-content: center;
				.Image-bg{
					width: 312rpx;
					background-color: #e8e8e8;
					height: 16rpx;
					border-bottom-left-radius: 20rpx;
					border-bottom-right-radius: 20rpx;
				}
			}
			.UserInfo-box{
				width: 342rpx;
				align-items: center;
				justify-content: center;
				margin-top: 35rpx;
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
						.UserName{
							margin-left: 10rpx;
							min-width: 120rpx;
							max-width: 300rpx;
							.UserName-text{
								color: #717376;
								font-size: 24rpx;
							}
						}
					}
					
				}
			}
		}
	}
	
	
	
	
</style>
