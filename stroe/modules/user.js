export default {
	state: {
		userInfo: {}
	},
	getters: {
		getUserInfo: state => state.userInfo
		
	},
	mutations: {
	 userCommits(state, info){
		state.userInfo = info 
	 }			
	},
	actions: {
		responseUserInfo ({commit}, data){
			commit('userCommits', data)
		}
	}
}