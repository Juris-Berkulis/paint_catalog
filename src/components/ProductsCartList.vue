<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import ProductsCartListItem from './ProductsCartListItem.vue';

export default {
    components: {
        ProductsCartListItem,
    },
    computed: {
        ...mapState({
            productsListInCart: (state) => state.moduleProductsCart.productsListInCart,
        }),
    },
}
</script>

<template>
<div class="productsCartList">
    <ProductsCartListItem 
        v-for="productInCart in productsListInCart" 
        :key="productInCart.id" 
        v-bind:productInCart="productInCart" 
    ></ProductsCartListItem>
</div>
</template>

<style scoped>
.productsCartList {
    height: calc(100% - 135px);
    overflow-y: auto;
}
</style>
