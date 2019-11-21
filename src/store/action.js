export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id); // 记录答案
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1); // 进入下一题，让 itemNum + 1
		}
	},
	//初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	}
}