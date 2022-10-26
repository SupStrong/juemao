<template>
	<view class="address-list">
		<view class="rf-list" v-if="addressList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in addressList"
				:key="index"
				@click="openDialog(item)"
			>
				<view
					class="mid"
					@longtap="handleSelect(item.id)"
				>
					<view class="address-box">
						<text v-if="parseInt(item.is_default, 10) === 1" class="tag" :class="'text-' + themeColor.name"
							>默认</text
						>
						<text class="address in1line"
							>{{ item.detail }} </text
						>
					</view>
					<view class="u-box">
						<text class="name">{{ item.realname }}</text>
						<text class="mobile">{{ item.phone }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<view class="btn-left" @click="handleAddress('wx')">
				从微信导入
			</view>
			<view class="btn-right" @click="handleAddress('new')">
				+ 收货地址
			</view>
		</view>
		<tn-modal v-model="visible" :custom="true"  :showCloseBtn="true">
		  <view class="custom-modal-content">
		    <view class="">
		      <view class="tn-text-lg tn-text-bold tn-color-purplered tn-text-center tn-padding">新增收货地址</view>
		      <view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
		        <input placeholder="姓名" name="input" placeholder-style="color:#AAAAAA" maxlength="20" :model="infoForm.real_name"></input>
		      </view>
			  <view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
			    <input placeholder="11位手机号码" name="input" placeholder-style="color:#AAAAAA" maxlength="20" :model="infoForm.phone"></input>
			  </view>
			  <view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
			    <picker mode="region" @change="bindPickerChange" :value="index" :range="array">
			      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min" style="align-items: center;">
			        <view class="justify-content-item">
			          <view class="tn-color-gray">
			            
			              <view class="tn-color-gray" v-if="index">{{array[index]}}</view>
			              <view class="tn-color-gray" v-else>省市区</view>
			          </view>
			        </view>
        <view class="justify-content-item tn-text-lg tn-color-grey">
			          <view class="tn-icon-right"></view>
			        </view>
			      </view>
			    </picker>
			  </view>
			  <view class="tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 20rpx 0 20rpx 0;">
			    <input placeholder="街道,楼牌号等信息" name="input" placeholder-style="color:#AAAAAA" maxlength="20"></input>
			  </view>
			  
		    </view>
		    <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" style="margin-top: 50rpx;">
		      <tn-button backgroundColor="#3668FC" padding="40rpx 0" width="60%" shadow fontBold open-type="getPhoneNumber" @click="saveFun">
		        <text class="tn-color-white">保 存 收 货 地 址</text>
		      </tn-button>
		    </view>
		  </view>
		</tn-modal>
		
		<tn-action-sheet
        v-model="actionSheetShow"
		mode="single"
        :list="actionSheetList"
        @click="actionSheetClick"
      ></tn-action-sheet>
	</view>
</template>

<script>
  import loginMixins from '@/mixins/login.js';
  import {getAddressList,saveAddress } from '@/api/modules/address'
  export default {
	mixins: [loginMixins],
		data() {
			return {
				visible:false,
				index: 0,
				array: ['女', '男', '保密'],
				addressList:[
				{
						
						address_name:'呃呃',
						address_details:'测试机',
						realname:'俩次',
						mobile:'17338132745',
						id:'1',
				is_default: false,

					},{
						
						address_name:'呃呃',
						address_details:'测试机',
						realname:'俩次',
						mobile:'17338132745',
						id:'1',
				is_default: true,

					}
				],
				xToken: "",
				infoForm:{
					real_name:"",
					phone:"",
					city_id:"",
					district:""
				},
				actionSheetShow: false,
				actionSheetList:[
					{
					text: "编辑"
				},
				{
					text: "删除"
				},
				{
					text: "复制"
				},
				
			]
		
			}
		},
		onLoad(){
			this.handleGetToken()
			this.getAddressListFun()
		},
		methods: {
			handleSelect(){
				console.log("长按")
			},
			bindPickerChange: function(e) {
				console.log(e,"eee")
			},
			handleAddress(type){
				if(type == 'wx'){
					
				}else{
					this.visible = true

				}
			},
			//列表
			getAddressListFun(){
				getAddressList().then(res =>{

					if(res.status==1){
						this.addressList = res.data
					}
				})
			},

			// 保存
			saveFun(){
				saveAddress(this.infoForm).then(res=>{

				})
			},
			
			actionSheetClick(index){
				uni.hideKeyboard()
                let type = this.actionSheetList[index].text
			},
			openDialog(val){
				if(val.is_default == 1){
					this.actionSheetList.unshift({
						text: "取消默认地址"
					})
				} else {
					this.actionSheetList.unshift({
					text: "设为默认地址"
				})
				}
				this.actionSheetShow=true
			}

			 
		}
	}
</script>

<style lang="scss" scoped>
page {
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
.btn{
	position: fixed;
	bottom: 50rpx;
	width: 690rpx;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	justify-content: space-around;
	view{
		width: 50%;
		background-color: #FBBD12;
		color: white;
		text-align: center;
		padding: 20rpx 0;
	}
	.btn-left{
		border-top-left-radius: 60rpx;
		border-bottom-left-radius: 60rpx;
		border-right: 1rpx solid white;
	}
	.btn-right{
		border-top-right-radius: 60rpx;
		border-bottom-right-radius: 60rpx;
		border-left: 1rpx solid white;
	}
}
</style>
