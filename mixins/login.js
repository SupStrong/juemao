/*
	登录mixins
*/
import {
	getToken
} from '@/api/modules/api.js';
export default {
	
	data() {
		return {
		}
	},
	methods: {
		handleGetToken(){
			console.log("!2121")
			getToken().then(result => {
				console.log(result)
			})
		}
	}
}