//收货地址接口

import {myRequest} from "../request.js"

//商品分类接口
export function getDiyDefault (data) {
	return myRequest({
		method: "GET",
		url: `/api/v2/diy/get_diy/${data.id}`,
		data
	})
}
