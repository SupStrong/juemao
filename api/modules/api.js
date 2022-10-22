import {myRequest} from "../request.js"


export function getToken (data) {
	return myRequest({
		method: "GET",
		url: `/api/auth/token`,
		data
	})
}

export function getUserInfo (data) {
	return myRequest({
		method: "GET",
		url: `/papi/sys/merchant/${data.child}/type`,
		data
	})
}

export function setLogin (data) {
	return myRequest({
		method: "GET",
		url: `/papi/sys/merchant/${data.child}/type`,
		data
	})
}