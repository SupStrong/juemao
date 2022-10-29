import md5 from "js-md5"
import qs from 'qs'
// 公共地址
const platform = uni.getSystemInfoSync().platform
export const myRequest = (options) => {
	if (!options.headers) options.headers = {}
	let newData = {}
	options.headers['x-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiSUQiOjEsIlVzZXJuYW1lIjoiIiwiTmlja05hbWUiOiIiLCJBdmF0YXIiOiIiLCJBY2NvdW50IjoiMTczMzgxMzIzNTEiLCJhdXRob3JpdHlfaWQiOjAsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2Njc1NzA1NjEsImlzcyI6InFtUGx1cyIsIm5iZiI6MTY2Njk2NDc2MX0.ysGU2Xx6hB-Y8phOn8TkWkc3pW5YOGVSyCMf7ssPpl8'
	if (options.headers.noFilter) {
		newData = options.data;
	} else {
		for (let key in options.data) {
			if (options.data[key] && options.data[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
				newData[key] = options.data[key];
			}
		}
	}
	let newUrl = 'http://api-crmb.17shici.com' + options.url
	return new Promise((resolve, reject) => {
		uni.request({
			url: newUrl,
			//默认参数
			data: newData,
			// 配置请求头参数-例如token
			header: Object.assign({}, options.headers),
			responseType: options.responseType,
			method: options.method || 'GET',
			success: (res) => {
				const {
					statusCode,
					data,
					code
				} = res
				let return_message = res.data.msg || (res.data.error && res.data.error.message) || res.data.errorInfo || null;
				let resCode = res.statusCode
				let dataCode = data.statusCode || data.code || (options.isUrl == 'bapi' ? 200 : 0)
				let isCapi = options.url.indexOf('capi') > -1;
				switch (resCode) {
					case 200:
						switch (dataCode) {
							case 200:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 1:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 400:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 302:
								// 成功的数据data状态码  则直接返回数据
								resolve({
									data:{}
								})
								break;	
							case 403:
								removeStorage();
								if(options.noLogin != true) {
									// #ifdef MP-WEIXIN || MP-ALIPAY
									uni.navigateTo({
										url: '/pageUserInfos/login/auth/index'
									})
									// #endif
									// #ifdef H5 || MP-TOUTIAO
									uni.navigateTo({
										url: '/pages/login/auth/login'
									})
									// #endif
								}
								break;
							case 422:
								// 成功的数据data状态码  则直接返回数据
								resolve(res)
								break;
							case 200:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 0:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case -1:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							default:
								reject(res)
								return uni.showToast({
									title: return_message || '请求失败',
									icon: 'none',
								})
						}
						break;
					case 401:
						removeStorage();
						if(options.noLogin != true) {
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
					case 403:
						removeStorage();
						if(options.noLogin != true) {
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
					case 500:
						switch (dataCode) {
							case 403:
								removeStorage();
								if(options.noLogin != true) {
									// #ifdef MP-WEIXIN || MP-ALIPAY
									uni.navigateTo({
										url: '/pageUserInfos/login/auth/index'
									})
									// #endif
									// #ifdef H5 || MP-TOUTIAO
									uni.navigateTo({
										url: '/pages/login/auth/login'
									})
									// #endif
								}
								break;
							default:
								reject(res)
								return uni.showToast({
									title: return_message || '请求失败',
									icon: 'none',
								})
						}
						break;
					default:
						reject(res);
						return uni.showToast({
							title: return_message || '请求失败',
							icon: 'none',
						})
				}
			},
			// 接口接口失败
			fail: (error) => {
				// 失败数据
				reject(error)
			},
			complete: (data) => {
				switch (data.statusCode) {
					case 401:
						removeStorage();
						if(options.noLogin != true) {
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
					case 403:
						removeStorage();
						if(options.noLogin != true) {
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
				}
			}
		})
	})
}
