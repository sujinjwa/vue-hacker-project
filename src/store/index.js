import { createStore } from 'vuex'
import { fetchListItem, fetchUserInfo, fetchAskItem } from '../api/index';

export default createStore({
  state: {
    list: [],
    user: '',
    item: '',
  },

  getters: {
  },

  mutations: {
    // 첫 번째 parametr = 5번째 줄에 있는 state
    // 두 번째 parameter = 받아온 list
    SET_LIST(state, list) {
      state.list = list;
    },

    SET_USER(state, user) {
      state.user = user;
    },

    SET_ITEM(state, id) {
      state.item = id;
    }
  },

  actions: {
    // pageName = 
    FETCH_LIST(context, pageName) {
      return fetchListItem(pageName)
        .then((res) => {
          context.commit('SET_LIST', res.data);
          return res;
        }).catch(error => console.log(error));
    },

    FETCH_USER(context, userName) {
      return fetchUserInfo(userName)
        .then((res) => {
          context.commit('SET_USER', res.data);
          return res;
        }).catch(error => console.log(error));
    },

    FETCH_ITEM(context, id) {
      console.log(id);
      return fetchAskItem(id)
        .then((res) => {
          context.commit('SET_ITEM', res.data);
          console.log('ff');
          return res;
        }).catch(error => console.log(error));
    },
  },

  modules: {
  }
})