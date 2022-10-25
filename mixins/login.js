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
			getToken().then(result => {
				console.log(result.data.token)
			})
		}
	}
}