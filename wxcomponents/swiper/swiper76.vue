<template>
	<view>
		<view id="home_top_container">
			<view class="banner_container">
				<view class="device-helper">
					<view class="h5-home-title">
						<view class="h5-home-title-left">
							<h3>
								服务助手
								<span></span>
							</h3>
							<p>快捷服务功能</p>
						</view>
					</view>
					<ul>
						<view class="device-helper-item-height">
							<li class="device-helper-item">
								<view class="device-helper-text">
									<h4 style="color: rgb(160, 70, 80);">延保服务中心</h4>
									<h5 style="color: rgb(190, 118, 134);">快捷申请履约</h5>
								</view>
								<image
									alt=""
									src="https://img20.360buyimg.com/ling/jfs/t1/94113/21/19723/17825/627e1730Ed21d98d4/5ff7952b0640b0a6.png"
									class="device-helper-img adevice-helper-img1666440771447 "
									style="opacity: 1;"
								/>
							</li>
						</view>
						<view class="device-helper-item-height">
							<li class="device-helper-item">
								<view class="device-helper-text">
									<h4 style="color: rgb(70, 160, 145);">故障自查</h4>
									<h5 style="color: rgb(118, 190, 166);">快速排查故障原因</h5>
								</view>
								<image
									alt=""
									src="https://img30.360buyimg.com/ling/jfs/t1/131396/4/26627/21581/627e1730Ee7796918/ae2e692a0b8e7154.png"
									class="device-helper-img adevice-helper-img1666440771447 "
									style="opacity: 1;"
								/>
							</li>
						</view>
						<view class="device-helper-item-height">
							<li class="device-helper-item">
								<view class="device-helper-text">
									<h4 style="color: rgb(160, 88, 70);">卖了换钱</h4>
									<h5 style="color: rgb(189, 136, 123);">免费拆旧搬运</h5>
								</view>
								<image
									alt=""
									src="https://img11.360buyimg.com/ling/jfs/t1/64563/28/18297/21267/627e1730Eee83bb36/a7e6f6bc589fc0a9.png"
									class="device-helper-img adevice-helper-img1666440771447 "
									style="opacity: 1;"
								/>
							</li>
						</view>
						<view class="device-helper-item-height">
							<li class="device-helper-item">
								<view class="device-helper-text">
									<h4 style="color: rgb(82, 137, 199);">品牌服务指南</h4>
									<h5 style="color: rgb(117, 164, 202);">客服、质保一键查</h5>
								</view>
								<image
									alt=""
									src="https://img13.360buyimg.com/ling/jfs/t1/96971/7/21519/22675/627e1730E7695214e/b459ffa40341afa5.png"
									class="device-helper-img adevice-helper-img1666440771447 "
									style="opacity: 1;"
								/>
							</li>
						</view>
					</ul>
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
.title_container {
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: space-between;
	justify-content: space-between;
}
.title_container .my_home_device {
	color: #262626;
	display: inline-block;
	font-family: PingFangSC-Medium;
	font-size: 4vw;
	font-weight: bolder;
	height: 4vw;
	line-height: 4vw;
}
.title_container .all_btn {
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	width: 9.33333vw;
}
.title_container .all_btn span {
	color: #7e7e7e;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	font-weight: 400;
	margin-right: 0.66667vw;
	vertical-align: middle;
}
.title_container .all_btn img {
	height: 2.4vw;
	-webkit-transform: translateY(-1px);
	-ms-transform: translateY(-1px);
	transform: translateY(-1px);
	vertical-align: middle;
	width: 0.93333vw;
}

.product_box {
	background: #fff;
	border: 1px solid #ffc7a7;
	border-radius: 2.66667vw;
	-webkit-box-shadow: 0 0.53333vw 1.86667vw 0 rgba(255, 221, 170, 0.39);
	box-shadow: 0 0.53333vw 1.86667vw 0 rgba(255, 221, 170, 0.39);
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 33.6vw;
	overflow: hidden;
	padding: 0;
	width: 100%;
	z-index: 10;
}
.product_box .product_box_loading {
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnQAAAD4BAMAAACXqmZ2AAAAJFBMVEUAAAD////////////////////////z8/P4+Pj29vb9/f36+vpOb/vMAAAABnRSTlMA2jEMpKNp2o12AAAD/UlEQVR42uzd343TQBCAcUt0AA1AB1RBJachMQVMnHuPdeH9fKKAy9EAR3nwZGmDkPc2o53Z1fcVsJJ/cvx3rAzvvgi9vbvPw/BJqKT3w/AsVNL4cRAq6wN0pd1BVxx00G0GXZygg24z6OIEHXSbQRcn6KDbDLo4QQfdZtDFCTroNoMuTtBBtxl0cYIOus2gixN00G0GXZygM6P7vahV03fpuiu6n2rZD+m5lG6ntp2k41K6WW07SMcldKNa1/OkckK3V+sepd8Sule17l76LaGb9W8c7EroFrVukn5L6NQ+SRof1KPpLEkt0s3qVHqB2SDdXp1KDxwt0s3qVLrbNUg3ql9HWWuRbqdeJVdJLdLt1a9J1lqk+6qOyRp00P0v6GQNOuiggw66f4JO1qCDjhuxpui4/X9DPHQqjkedxfGAvThe6xTHy8Qbkn6DDrr8oHMPOujyg8496KDLDzr3oIMuP+jcgw66/KBzDzro8oPOPeigyw8696CDLj/o3IMOuvygcw866PKDzj3ooMsPOveggy4/6NyrS/eyaEnTOdoS1el2Wtop1hL16RYtbYq1RFNfJp4iLVGf7qLlHSMtUZ9u1vIOkZaoT7doeVOkJerT6S1FWgI66KCDDjrooIMOugDbDR100EGnCh100EEXaLuhgw466FShgw466AJtN3TQQQedKnTQ9UUXY9amyXGdGBNeTQ6JxZgrbHI0McY0a5MDsUFmqFscww4yud/k8H+Q70Va/OSkr6CDLj/o3IMOuvygcw866PKDzj3ooMsPOveggy4/6NyDDrr8oHMPOujya5nu5WHRsqans4SpNt3N/8L+9CxBqk43LnpbUxS7unQGcnHsatNd9PaOEqLKdN/Uol8Socp0s1p0kAjVpLPa6YLsdnXpLmpRkKNdVbpRrYpwkq1Kt1erHsW/qnQXtSnGL7aRWeLrJvGvJt2oVoU42LUy/H/dSdyrSbdXq0KcJ1r5WictxHmilW/E0kLci0HXBN2iVoW4OoGuCTo1KNCrNuiaoOv5B5tsm/UW9k03q23JNUTfFyevat29rPVN96d9OzhBIIaiKGoPNmBzBpwGUoR7FxYg2IHl6SowIHyQvPB83FPAQC7MIsnPpc92a0P2Rmzrsz3akL39H7+U4rfKPnQai1MsMPuos7Vnn+m++3b0AfvHa+Lyrm0n+lpHK/oyUSv6ClsseXBCLHlcRy14SEwteDRRLncgVi53DFsvdvh/gdQnJ0tkPnQC6b4hnQ/Ska5EOh+kI12JdD5IR7oS6XyQjnQl0vkgHelKpPNBOtKVSOeDdKQrkc4H6UhXIp0P0pGuRDofpCNdiXQ+SEe65c6k+9XxYDMQ/me20xvJR2+8CQeWbwAAAABJRU5ErkJggg==)
		no-repeat;
	background-size: 100% 100%;
	height: 33.6vw;
	width: 100%;
}
.product_box .more_device_box {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	height: 34.93333vw;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	width: 100%;
}
.product_box .more_device_box .img_icon {
	background: #f3c896;
	border-radius: 6vw;
	border-radius: 50%;
	height: 12vw;
	margin-top: 3.2vw;
	vertical-align: middle;
	width: 12vw;
}
.product_box .more_device_box .m_d_text {
	color: #999;
	font-family: PingFangSC;
	font-size: 3.2vw;
	font-weight: 400;
	margin-top: 1.33333vw;
}
.product_box .more_device_box .m_d_btn {
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	background-image: url(https://storage.jd.com/smart-home-h5/static/media/btn_more_d.576b25ce26108d01293e.png);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 100%;
	height: 5.86667vw;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 2.13333vw;
	width: 20.53333vw;
}
.product_box .card_one_box,
.product_box .more_device_box .m_d_btn {
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
}
.product_box .card_one_box {
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	padding: 3.46667vw 0 0 3.73333vw;
	width: 100%;
}
.product_box .card_one_box .product_img {
	border-radius: 1.33333vw;
	height: auto;
	margin-right: 3.2vw;
	width: 22.13333vw;
}
.product_box .card_one_box .product_info_box {
	-webkit-box-flex: 1;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-align: start;
	-ms-flex-align: start;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex: 1 1;
	-ms-flex: 1 1;
	flex: 1 1;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
}
.product_box .card_one_box .product_info_box .title {
	color: #262626;
	display: inline-block;
	font-family: PingFangSC-Medium;
	font-size: 3.46667vw;
	font-weight: bolder;
	height: 4vw;
	line-height: 4.4vw;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 53.33333vw;
}
.product_box .card_one_box .product_info_box .use_time {
	color: #7e7e7e;
	display: inline-block;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	font-weight: 400;
	height: 3.2vw;
	line-height: 3.2vw;
	margin-top: 1.33333vw;
}
.product_box .card_one_box .product_info_box .service_type {
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
	margin-top: 2.13333vw;
	width: 100%;
}
.product_box .card_one_box .product_info_box .service_type,
.product_box .card_one_box .product_info_box .service_type .btn_one {
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	height: 5.6vw;
}
.product_box .card_one_box .product_info_box .service_type .btn_one {
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	background: #fff2e2;
	border-radius: 1.06667vw;
	-webkit-justify-content: center;
	justify-content: center;
	margin-right: 1.6vw;
	padding: 0 2.8vw;
}
.product_box .card_one_box .product_info_box .service_type .btn_one span {
	color: #ff4a00;
	font-family: PingFangSC-Regular;
	font-size: 2.66667vw;
	-webkit-transform: translateY(0);
	-ms-transform: translateY(0);
	transform: translateY(0);
	white-space: nowrap;
}
.product_box .card_one_box .product_info_box .more_service {
	background-image: url(https://storage.jd.com/smart-home-h5/static/media/btn_more_s.c0bdc252a431bfa6d186.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 5.86667vw;
	margin-top: 2.4vw;
	width: 20.53333vw;
}
.product_box .card_one_box .product_info_box .more_service,
.product_box .no_service_box {
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
}
.product_box .no_service_box {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	height: 35.2vw;
	width: 100%;
}
.product_box .no_service_box .s_icon {
	background-image: url(data:image/png;base64,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);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	height: 9.6vw;
	margin-top: -2.66667vw;
	width: 9.6vw;
}
.product_box .no_service_box .s_text {
	color: #999;
	display: inline-block;
	font-family: PingFangSC;
	font-size: 3.2vw;
	font-weight: 400;
	line-height: 3.2vw;
	margin-top: 1.06667vw;
	text-align: center;
	width: 100%;
}
.product_box .no_service_box .s_btn {
	background-image: url(https://storage.jd.com/smart-home-h5/static/media/btn_add_d.9e1c9eafaaa6494a9592.png);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 98%;
	height: 5.86667vw;
	margin-top: 3.2vw;
	width: 33.86667vw;
}
.product_box .no_service_box .s-icon-my-electrical-3CS {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: -2.66667vw;
}
.product_box .no_service_box .s-icon-my-electrical-3CS .s-icon-my-electrical-3CS-text {
	color: #999;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
}
.product_box .no_service_box .s-icon-my-electrical-3CS .s-icon-my-electrical-3CS-btn {
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	background: #fff;
	border: 1px solid #f40;
	border-radius: 3.73333vw;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	height: 7.46667vw;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 1.6vw;
	width: 19.73333vw;
}
.product_box .no_service_box .s-icon-my-electrical-3CS .s-icon-my-electrical-3CS-btn .text {
	color: #f40;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	font-weight: 400;
}
.product_box .no_service_box .more-line {
	line-height: 5.6vw;
	text-align: center;
}
.refresh_toast_box {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-justify-content: center;
	justify-content: center;
}
.my_device_container {
	width: 100%;
}
.my_device_container .box {
	border-radius: 3.33333vw;
	margin: 3.2vw 0 0;
	padding: 4.53333vw 3.73333vw 4.26667vw;
}
.h5-home-title {
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	margin-bottom: 4.53333vw;
	width: 100%;
}
.h5-home-title,
.h5-home-title .h5-home-title-left {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
}
.h5-home-title .h5-home-title-left {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
}
.h5-home-title .h5-home-title-left h3 {
	color: #262626;
	font-family: PingFangSC-Medium;
	font-size: 4vw;
	font-weight: bolder;
	line-height: 1;
	padding-right: 3.46667vw;
	position: relative;
}
.h5-home-title .h5-home-title-left h3 span {
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAiCAYAAAC5gzL5AAAARGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAsoAMABAAAAAEAAABYAAAAAPA8oawAAAIiSURBVHicpdTNahNRGAbg9ztzJiMTKEYzWQRRsYuKCC1qoW3AjfeQZWAgJJCbGOYSAiEw2QSyzF0I/dGCSqUIXVSoYBYZarChxdEz87nQQGrzMzN+y/Pz8HI4vIT/mFar9UoI8UKkBXq9XlYIsQHAT42Mx+P1KIpMTdNep0K63e4tAJtENBgMBmepkCAInjLzipRyz3VdlRjp9/sZZt4CMARwCgCJEd/3H0dRdEfX9f16vf4rMeJ5ns7M20R0nsvlTibriZAgCFYBFIQQb8vl8s/JuowLOI4jNU0rAbgwDON4ei92kmKx+ICZi5qmHdq2/SMxwsxCKVUioksiOvp3PxbSbDbvEdF9IcT7er1+lRhxHEdIKUsAAl3X3806sxSxLKtARI+Y+aharY4TI8xMRLRDRMo0zcN55xYinU7nLoA1Zv5k2/b3NAgppbYBQEp5AIATI+12+zYRPQFwUqvVzhclnvtjmXkTgGTmfSKam2JukmazuUJE68z82ff94SJgLpLJZJ4BMIho13XdKDHieZ4ZhuFzZv7SaDS+LgNmIkqpDQAmEe0S0dIUN5DpAs7n82dxgBvIpIDDMNwrl8thYqTf72eUUlsAhoZhnMYFriGj0WiNiK4VcCLE8zw9iqIdIcS36QJOmmQ1DMOCUurNdAHHHek4jvxbfRfZbPZ4+ZUZSSzLejivgGMnEUK8BHBlmubHNADw500sAB8qlcplWuQ3K17VgfMiUXYAAAAASUVORK5CYII=);
	background-repeat: no-repeat;
	background-size: contain;
	color: #7e7e7e;
	display: block;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	height: 2.93333vw;
	position: absolute;
	right: 0.8vw;
	top: 0.8vw;
	width: 1.46667vw;
}
.h5-home-title .h5-home-title-left p {
	color: #7e7e7e;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	margin-top: 2px;
}
.h5-home-title .h5-home-title-more {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
}
.h5-home-title .h5-home-title-more h4 {
	color: #7e7e7e;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	line-height: 4vw;
	padding-right: 2.93333vw;
	position: relative;
}
.h5-home-title .h5-home-title-more h4:after {
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAARGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABgoAMABAAAAAEAAABgAAAAAKkzX04AAAKnSURBVHic7dbPSxRxGMfx9zM7O2ZWYiAodalDXTqIFw8tpIeI1m128OBdgkL64aEOQuGCQl3yUhSCxN4nxNVd5yAR1KFD9A8kFCVF3pNyd9zv08EROsW4s7YdfGAuH5758pqZZ7584aAOKllJnKaVlZUz29vbWdu2g+Hh4bWWgorF4qGurq53wDngs2VZg67rru8XyIrTpKoWO/hTxpg53/fbWwYaGxvbsizrLvArii7Ztn2nUCjEepimgwBc111V1VnAAJZlWZP9/f2DLQOJiEmlUg9V9VUUdajqfLlcPtESEIDruj/T6fR14GsUna7X60+DIGhrCQggl8t9Am6o6tZuVKvVbqtqrO2j6SCAfD5fEZHHqqpACpgqlUqZloFExHR2ds6IyJsoOmJZ1nylUulpCQhgaGho0xhzDdgAUNWzYRg+9n3faQkIYGRkZA24BVQBRGTEcZzxpPOUaHOr1WqLqjq3O0+qOr28vDyQZM3Ef0cQBMeq1eqqiAwAqOr79fX1zMTERLWR9RJv/5ubm1si8v2P6Hhvb2/D6yYCqao4jjMOXImimojcGx0d/fW3+/YNVC6Xz6vqDDvzo6o6l8/nXyRZs2FQpVLpMcY8F5GjACLytru7+76I1P85KAiCtjAMnwFnAFR1A7iayWR+JME0BFJVCcNwQkTcKNoCbnqe9yEppiHQ0tLSoDFmimhuROSJ53mLzcDsGbSwsHASmBeRDgAReV2tVqdFxDQLFHtj9H2/3XEcH8hF0TfHcS5ks9mPzcIA2HGaCoWClU6n7wJZgOg8NN5sDMT8ZH19fReByajfALOe5600GwMx3lCxWDwkIo+Aw1H0MpVKPWjm3OwJFJVG1xfbtq/lcrmf+4GBmENdKpXOisjler0eROeggzqo/7Z+A8pU+25lq1TFAAAAAElFTkSuQmCC);
	background-position: 100%;
	background-repeat: no-repeat;
	background-size: contain;
	content: '';
	display: block;
	height: 2.93333vw;
	position: absolute;
	right: 0;
	top: 1px;
	width: 2.93333vw;
}
.device-helper {
	background-color: #fff;
	border-radius: 1.86667vw;
	margin: 0 4vw 2.93333vw;
	padding: 4.53333vw 3.73333vw 1.33333vw;
}
.device-helper ul {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-box-align: end;
	-ms-flex-align: end;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}
.device-helper ul .device-helper-item-height {
	height: 17.2vw;
	margin-bottom: 1.6vw;
	position: relative;
	width: 41.06667vw;
}
.device-helper ul .device-helper-item-height:nth-child(2n-1) {
	margin-right: 2.4vw;
}
.device-helper ul .device-helper-item-height .bubble {
	background: url(data:image/png;base64,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)
		no-repeat;
	background-size: 100%;
	font-size: 2.93333vw;
	left: 0;
	position: absolute;
	text-align: center;
	top: -2vw;
	z-index: 100;
}
.device-helper ul .device-helper-item-height .bubble .text {
	color: #fff;
	font-family: PingFangSC;
	font-size: 2.93333vw;
	font-weight: 500;
	line-height: 4vw;
	padding: 0.4vw 1.6vw 2vw;
}
.device-helper ul li {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-box-align: start;
	-ms-flex-align: start;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.02);
	border-radius: 1.33333vw;
	border-radius: 1.6vw;
	-webkit-box-shadow: 0 0.4vw 2vw 0 rgba(0, 0, 0, 0.05);
	box-shadow: 0 0.4vw 2vw 0 rgba(0, 0, 0, 0.05);
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	height: 16vw;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	overflow: hidden;
	padding: 0 1.86667vw;
	width: 41.06667vw;
}
.device-helper ul li .device-helper-img {
	height: 12.8vw;
	margin-top: 1.6vw;
	width: 12.8vw;
}
.device-helper ul li .device-helper-text {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: start;
	-ms-flex-align: start;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 4vw;
}
.device-helper ul li .device-helper-text h4 {
	color: #a04650;
	font-family: PingFangSC;
	font-size: 3.46667vw;
	font-weight: bolder;
	line-height: 3.46667vw;
	margin-bottom: 2vw;
}
.device-helper ul li .device-helper-text h5 {
	color: #be7686;
	font-family: PingFangSC;
	font-size: 2.93333vw;
	font-weight: 400;
	line-height: 2.93333vw;
	max-width: 23.46667vw;
	white-space: nowrap;
}
.banner_container {
	background-image: url(https://storage.jd.com/smart-home-h5/static/media/homeBack.839bc45b366b763d918a.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100%;
	padding: 7.2vw 0 0;
	width: 100%;
}
.staticCopy_container {
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 6.4vw;
	padding-bottom: 16.4vw;
	width: 100%;
}
.staticCopy_container .staticCopyImg,
.staticCopy_container .staticCopyImg img {
	height: 4vw;
	width: 21.86667vw;
}
.staticCopy_container .staticCopyDescribe {
	-ms-flex-preferred-size: 100%;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	color: #a0a0a0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-basis: 100%;
	flex-basis: 100%;
	font-size: 2.93333vw;
	-webkit-justify-content: center;
	justify-content: center;
	margin-top: 2.93333vw;
}
.staticCopy_container .staticCopyDescribe .lineOfDashes {
	background-color: #e0dddc;
	height: 1px;
	width: 7.73333vw;
}
.staticCopy_container .staticCopyDescribe .staticCopyText {
	padding: 0 1.6vw;
}
.foot-bar-container .foot-bar-inner-container,
.foot-bar-container .tab {
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	height: 13.33333vw;
	width: 100%;
}
.foot-bar-container .tab {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	font-size: 2.66667vw;
	-webkit-justify-content: center;
	justify-content: center;
}
.foot-bar-container .tab.active {
	color: #f0250f;
}
.foot-bar-container .tab .icon {
	margin-bottom: 1.33333vw;
}
.foot-bar {
	height: calc(13.33333vw + env(safe-area-inset-bottom));
	height: calc(13.33333vw + constant(safe-avwrea-inset-bottom));
}
.foot-bar-container {
	-webkit-box-align: start;
	-ms-flex-align: start;
	-webkit-align-items: flex-start;
	align-items: flex-start;
	background: #fff;
	bottom: 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	left: 0;
	position: fixed;
	width: 100vw;
	z-index: 102;
}
.foot-bar-container,
.foot-bar-container .foot-bar-inner-container {
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
}
.foot-bar-container .amplifying-tab,
.foot-bar-container .foot-bar-inner-container {
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	height: 13.33333vw;
	width: 100%;
}
.foot-bar-container .amplifying-tab {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	color: #222;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	font-size: 2.66667vw;
	font-weight: 700;
	-webkit-justify-content: center;
	justify-content: center;
}
.foot-bar-container .amplifying-tab.amplifying {
	height: 15.46667vw;
	position: relative;
}
.foot-bar-container .amplifying-tab.amplifying .icon {
	-webkit-transform: translateY(-1.33333vw);
	-ms-transform: translateY(-1.33333vw);
	transform: translateY(-1.33333vw);
}
.foot-bar-container .amplifying-tab .icon {
	margin-bottom: 1.06667vw;
}
.activities-inventory-wrap {
	height: auto;
	min-width: 13.33333vw;
}
.activities-inventory-wrap .activities-inventory-img {
	height: 100%;
	width: 100%;
}
.activities-inventory-wrap .activities-inventory-img-opacity {
	height: 0%;
	opacity: 0;
	width: 0;
}
.activity-container .activities-inventory {
	bottom: 37.33333vw;
	max-width: 13.33333vw;
	position: fixed;
	right: 3.33333vw;
	-ms-touch-action: none;
	touch-action: none;
	z-index: 2001;
}
.home {
	background-color: #f7f3f1;
	min-height: calc(100vh - 13.33333vw);
}
.home #home_middle_container {
	background: #fff;
	border-radius: 1.86667vw;
	margin: 0 3.73333vw;
}
</style>
