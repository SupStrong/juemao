//收货地址接口

import {myRequest} from "../request.js"

//商品分类接口
export function getGoodsNav (data) {
	return myRequest({
		method: "GET",
		url: '/api/api-product/category',
		data
	})
}

// 商品列表接口
export function getGoodsList (data) {
	return myRequest({
		method: "POST",
		url: '/api/api-product/lists',
		data
	})
}

// 商品详情接口
export function getGoodsDetail (data) {
	return myRequest({
		method: "GET",
		url: `/api/api-product/show/{data.id}`,
		data
	})
}
