import { createStore } from 'vuex';

import adminModule from './modules/admin';
import userModule from './modules/user';

const store = createStore({
	modules: { adminModule, userModule },
	state() {
		return {
			userId: 'c3',
		};
	},
	getters: {
		userId(state) {
			return state.userId;
		},
	},
	mutations: {},
	actions: {},
});

export default store;
