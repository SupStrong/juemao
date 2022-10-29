<template>
	<view class="address-list">
		<view class="rf-list" v-if="addressList.length > 0">
			<view class="rf-list-item" v-for="(item, index) in addressList" :key="index" @click="openDialog(item)">
				<view class="mid" @longtap="handleSelect(item.id)">
					<view class="address-box">
						<text v-if="parseInt(item.is_default, 10) === 1" class="tag" :class="'text-' + themeColor.name">默认</text>
						<text class="address in1line">{{ item.detail }}</text>
					</view>
					<view class="u-box">
						<text class="name">{{ item.real_name }}</text>
						<text class="mobile">{{ item.phone }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<view class="btn-left" @click="handleAddress('wx')">从微信导入</view>
			<view class="btn-right" @click="handleAddress('new')">+ 收货地址</view>
		</view>
		<view class="empty__item tn-margin-top"><tn-empty icon="https://tnuiimage.tnkjapp.com/empty/alien/2.png" text="空空如也" :imgWidth="200" :imgHeight="200"></tn-empty></view>
		<tn-modal v-model="visible" :custom="true" :showCloseBtn="true">
			<view class="custom-modal-content">
				<view class="">
					<view class="tn-text-lg tn-text-bold tn-color-purplered tn-text-center tn-padding">新增收货地址</view>
					<view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
						<input placeholder="姓名" name="input" placeholder-style="color:#AAAAAA" maxlength="20" v-model="infoForm.real_name" />
					</view>
					<view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
						<input placeholder="11位手机号码" name="number	" placeholder-style="color:#AAAAAA" maxlength="20" v-model="infoForm.phone" />
					</view>
					<view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
						<picker mode="multiSelector" @change="bindRegionChange" @columnchange="bindMultiPickerColumnChange" :value="valueRegion" :range="multiArray">
							<view class="acea-row tn-flex tn-flex-row-between">
								<view class="picker" v-if="region.length">{{ region[0] }}/{{ region[1] }}/{{ region[2] }}</view>
								<view class="picker tn-color-gray" v-else>请选择省市区</view>
								<view class="justify-content-item tn-text-lg tn-color-grey"><view class="tn-icon-right"></view></view>
							</view>
						</picker>
					</view>
					<view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
						<input placeholder="街道,楼牌号等信息" name="input" placeholder-style="color:#AAAAAA" maxlength="20" v-model="infoForm.district" />
					</view>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" style="margin-top: 50rpx;">
					<tn-button backgroundColor="#3668FC" padding="40rpx 0" width="60%" shadow fontBold open-type="getPhoneNumber" @click="saveFun">
						<text class="tn-color-white">保 存 收 货 地 址</text>
					</tn-button>
				</view>
			</view>
		</tn-modal>

		<tn-action-sheet v-model="actionSheetShow" mode="single" :list="actionSheetList" @click="actionSheetClick" @close="closedActionSheet"></tn-action-sheet>
	</view>
</template>

<script>
import loginMixins from '@/mixins/login.js';
import { getAddressList, saveAddress, getRegionAll } from '@/api/modules/address';
export default {
	mixins: [loginMixins],
	data() {
		return {
			visible: false,
			index: 0,
			isShowAddress: '',
			array: ['女', '男', '保密'],
			addressList: [],
			infoForm: {
				real_name: '',
				phone: '',
				province_id: '',
				city_id: '',
				area_id: '',
				district: ''
			},

			region: [],
			valueRegion: [0, 0, 0],
			actionSheetShow: false,
			pickerShow: false,
			actionSheetListData: [
				{
					text: '编辑'
				},{
					text: '复制'
				},{
					text: '删除'
				},
			],
			actionSheetList: [],
			district: [],
			multiArray: [],
			multiIndex: [0, 0, 0],
			cityId: 0,
			defaultRegion: []
		};
	},
	onLoad() {
		this.handleGetToken();
		this.getAll();
	},
	methods: {
		handleSelect() {
			console.log('长按');
		},
		getAll() {
			getRegionAll().then(res => {
				if (res.code == 1) {
					this.district = res.data;
					this.initialize();
				}
			});
		},
		handleAddress(type) {
			if (type == 'wx') {
			} else {
				this.visible = true;
			}
		},
		initialize() {
			let that = this,
				province = [],
				city = [],
				area = [];
			let cityChildren = that.district[0].children || [];
			let areaChildren = cityChildren.length ? cityChildren[0].children || [] : [];
			that.district.forEach((item, i) => {
				province.push(item.name);
				if (item.name === this.region[0]) {
					this.valueRegion[0] = i;
					this.multiIndex[0] = i;
				}
			});
			that.district[this.valueRegion[0]].children.forEach((item, i) => {
				if (this.region[1] == item.children) {
					this.valueRegio[1] = i;
					this.multiIndex[1] = i;
				}
				city.push(item.name);
			});
			that.district[this.valueRegion[0]].children[this.valueRegion[1]].children.forEach((item, i) => {
				if (this.region[2] == item.children) {
					this.valueRegio[2] = i;
					this.multiIndex[2] = i;
				}
				area.push(item.name);
			});
			this.multiArray = [province, city, area];
		},
		bindRegionChange: function(e) {
			let multiIndex = this.multiIndex,
				province = this.district[multiIndex[0]] || { v: [] },
				city = province.children[multiIndex[1]] || { v: 0 },
				area = city.children[multiIndex[2]] || { v: 0 },
				multiArray = this.multiArray,
				value = e.detail.value;

			this.region = [multiArray[0][value[0]], multiArray[1][value[1]], multiArray[2][value[2]]];
			// province.city_id,city.city_id,area.city_id
			this.infoForm = {
				...this.infoForm,
				province_id: province.city_id,
				city_id: city.city_id,
				area_id: area.city_id
			};
			this.valueRegion = [0, 0, 0];
			this.initialize();
		},
		bindMultiPickerColumnChange(e) {
			let that = this,
				column = e.detail.column,
				value = e.detail.value,
				currentCity = this.district[value] || {
					c: []
				},
				multiArray = that.multiArray,
				multiIndex = that.multiIndex;
			multiIndex[column] = value;
			switch (column) {
				case 0:
					let areaList = currentCity.children[0] || {
						c: []
					};
					multiArray[1] = currentCity.children.map(item => {
						return item.name;
					});
					multiArray[2] = areaList.children.map(item => {
						return item.name;
					});
					break;
				case 1:
					let cityList = that.district[multiIndex[0]].children[multiIndex[1]].children || [];
					multiArray[2] = cityList.map(item => {
						return item.name;
					});
					break;
				case 2:
					break;
			}
			// #ifdef MP || APP-PLUS
			this.$set(this.multiArray, 0, multiArray[0]);
			this.$set(this.multiArray, 1, multiArray[1]);
			this.$set(this.multiArray, 2, multiArray[2]);
			// #endif
			// #ifdef H5
			this.multiArray = multiArray;
			// #endif
			this.multiIndex = multiIndex;
			// this.setData({ multiArray: multiArray, multiIndex: multiIndex});
		},
		//列表
		getAddressListFun() {
			getAddressList().then(res => {
				if (res.code == 1) {
					this.addressList = res.data;
				}
			});
		},

		// 保存
		saveFun() {
			saveAddress(this.infoForm).then(res => {
				if (res.code == 1) {
					this.visible = false;
				} else {
					// res.msg
				}
			});
		},

		actionSheetClick(index) {
			uni.hideKeyboard();
			let type = this.actionSheetList[index].text;
		},
		closedActionSheet() {
			this.actionSheetShow = false;
		},
		openDialog(val) {
			let list1 = [
				{
					text: '取消默认地址'
				}
			];
			let list2 = [
				{
					text: '设为默认地址'
				}
			];
			if (val.is_default == 1) {
				this.actionSheetList = list1.concat(this.actionSheetListData);
			} else {
				this.actionSheetList = list2.concat(this.actionSheetListData);
			}
			this.actionSheetShow = true;
		}
	},
	mounted() {
		this.getAddressListFun();
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: #f8f8f8;
}
.rf-list {
	margin-bottom: 40rpx;

	border-top: 2rpx solid #f1f1f1;
	.rf-list-item {
		background-color: #fff;
		display: flex;
		align-items: center;
		margin: 0 30rpx;
		border-bottom: 2rpx solid #f1f1f1;
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		.left {
		}

		.mid {
			flex: 1;
		}

		.right {
			.icon-bianji {
				display: flex;
				align-items: center;
				height: 80rpx;
				font-size: 40rpx;
				color: #909399;
				padding-left: 30rpx;
			}
		}
	}

	.tips {
		display: block;
		padding: 16rpx 30rpx 10rpx;
		font-size: 24rpx;
	}

	.no-data {
		margin: 20rpx 0;
		display: flex;
		justify-content: center;
	}
}
.address-list {
	position: relative;
	.address-box {
		display: flex;
		align-items: center;
		.tag {
			font-size: 24rpx;
			margin-right: 4rpx;
			border: 1px solid;
			border-radius: 4rpx;
			padding: 0 4rpx;
		}
		.address {
			font-size: 30rpx;
			color: #303133;
		}
	}
	.u-box {
		font-size: 28rpx;
		color: #909399;
		margin-top: 16rpx;

		.name {
			margin-right: 30rpx;
		}
	}
}
.btn {
	position: fixed;
	bottom: 50rpx;
	width: 690rpx;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	justify-content: space-around;
	view {
		width: 50%;
		background-color: #fbbd12;
		color: white;
		text-align: center;
		padding: 20rpx 0;
	}
	.btn-left {
		border-top-left-radius: 60rpx;
		border-bottom-left-radius: 60rpx;
		border-right: 1rpx solid white;
	}
	.btn-right {
		border-top-right-radius: 60rpx;
		border-bottom-right-radius: 60rpx;
		border-left: 1rpx solid white;
	}
}
</style>
