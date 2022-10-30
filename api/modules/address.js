//收货地址接口

import {myRequest} from "../request.js"

//列表接口
export function getAddressList (data) {
	return myRequest({
		method: "GET",
		url: '/api/address/list',
		data
	})
}

//保存地址
export function saveAddress (data) {
	return myRequest({
		method: "POST",
		url: '/api/address/edit',
		data
	})
}

export function getRegionAll (data) {
	return myRequest({
		method: "GET",
		url: '/api/city_list',
		data
	})
}

export function delAddress (data) {
	return myRequest({
		method: "POST",
		url: '/api/address/del',
		data
	})
}