import {createStore} from 'vuex';
import { moduleProductsCart } from './moduleProductsCart';
import { moduleProductsSearch } from './moduleProductsSearch';

export default createStore({
    modules: {
        moduleProductsCart,
        moduleProductsSearch,
    },
});
