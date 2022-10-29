//收货地址接口

import {myRequest} from "../request.js"

//列表接口
export function getAddressList (data) {
	return myRequest({
		method: "GET",
		url: '/api/api-address/lists',
		data
	})
}

//列表接口
export function saveAddress (data) {
	return myRequest({
		method: "POST",
		url: '/api/api-address/store',
		data
	})
}
// 
export function getRegionAll (data) {
	return myRequest({
		method: "POST",
		url: '/api/api-region/getAll',
		data
	})
}