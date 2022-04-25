import { createStore } from 'vuex';

import adminModule from './modules/admin';
import userModule from './modules/user';

const store = createStore({
	modules: { adminModule, userModule },
	state: {},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;
