export const moduleProductsCart = {
    namespaced: true,
    state: () => ({
        isShowProductsCart: false,
        productsListInCart: [],
    }),
    getters: {
        totalProductsCountInCart(state) {
            return state.productsListInCart.reduce((acc, currentProduct) => {
                return !currentProduct.isMarkProductForRemoval ? acc + currentProduct.count : acc
            }, 0)
        },
    },
    mutations: {
        isShowProductsCartMutation(state, isShowProductsCart) {
            state.isShowProductsCart = isShowProductsCart;
        },
        productsListInCartMutation(state, productsListInCart) {
            state.productsListInCart = productsListInCart;
        },
    },
    actions: {
        deleteProductsMarkedForDeletion({dispatch, state}) {
            const newProductsListInCart = state.productsListInCart;

            dispatch('setProductsListInCart', newProductsListInCart.filter(product => {
                return !product.isMarkProductForRemoval
            }));
        },
        setIsShowProductsCart({dispatch, commit}, isShowProductsCart) {
            commit('isShowProductsCartMutation', isShowProductsCart);

            if (!isShowProductsCart) {
                dispatch('deleteProductsMarkedForDeletion');
            }
        },
        setProductsListInCart({commit}, productsListInCart) {
            commit('productsListInCartMutation', productsListInCart);
        },
        increaseProductsCountInCart({commit, state}, product) {
            for (let productIndexInCart=0; productIndexInCart < state.productsListInCart.length; productIndexInCart++) {
                if (state.productsListInCart[productIndexInCart].id === product.id) {
                    const newProductsListInCart  = state.productsListInCart;
                    newProductsListInCart[productIndexInCart].count++;
                    commit('productsListInCartMutation', newProductsListInCart);
                    return true
                }
            }

            return false
        },
        decreaseProductsCountInCart({commit, state}, product) {
            for (let productIndexInCart=0; productIndexInCart < state.productsListInCart.length; productIndexInCart++) {
                if (state.productsListInCart[productIndexInCart].id === product.id) {
                    if (state.productsListInCart[productIndexInCart].count > 1) {
                        const newProductsListInCart  = state.productsListInCart;
                        newProductsListInCart[productIndexInCart].count--;
                        commit('productsListInCartMutation', newProductsListInCart);
                    }
        
                return
                }
            }
        },
        async addProductInCart({commit, state, dispatch}, product) {
            const isProductHasInCart = await dispatch('increaseProductsCountInCart', product);

            if (!isProductHasInCart) {
                commit('productsListInCartMutation', [...state.productsListInCart, {...product, count: 1}]);
            }
        },
        markProductForRemovalOrReturn ({dispatch, state}, {product, isMarkProductForRemoval}) {
            for (let productIndexInCart=0; productIndexInCart < state.productsListInCart.length; productIndexInCart++) {
                if (state.productsListInCart[productIndexInCart].id === product.id) {
                    const newProductsListInCart = state.productsListInCart;
                    newProductsListInCart[productIndexInCart].isMarkProductForRemoval = isMarkProductForRemoval;
                    dispatch('setProductsListInCart', newProductsListInCart);
                    return
                }
            }
        },
    },
};
