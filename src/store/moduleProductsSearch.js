export const moduleProductsSearch = {
    namespaced: true,
    state: () => ({
        valueInSearchInput: '',
    }),
    getters: {

    },
    mutations: {
        setValueInSearchInputMutation(state, valueInSearchInput) {
            state.valueInSearchInput = valueInSearchInput;
        },
    },
    actions: {
        setValueInSearchInput({commit}, valueInSearchInput) {
            commit('setValueInSearchInputMutation', valueInSearchInput)
        },
    },
};
