import {apiRequest} from "../api/apiRequest";

export default {
    namespaced: true,
    state: {
        list: [],
    },
    getters: {
        getList: state => state.list,
    },
    mutations: {
        setList (state, payload) {
            state.list = [...payload];
        },
        addItemToList: (state, item) => {
            state.list = [...state.list, item];
        },
        removeItemFromList: (state, id) => {
            state.list = state.list.filter(item => item.id !== id);
        },
    },
    actions: {
        async fetchList (store) {
            try {
                const list = await apiRequest("", {
                    method: "GET",
                });
                store.commit("setList", list);
            }
            catch (error) {
                // handle request error
            }
        }

    }
};
