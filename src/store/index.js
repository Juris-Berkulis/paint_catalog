import {createStore} from 'vuex';
import { moduleProductsCart } from './moduleProductsCart';

export default createStore({
    modules: {
        moduleProductsCart,
    },
});
