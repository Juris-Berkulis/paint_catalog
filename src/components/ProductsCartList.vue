<script>
import ProductsCartListItem from './ProductsCartListItem.vue';

export default {
    components: {
        ProductsCartListItem,
    },
    props: {
        productsListInCart: {
            type: Array,
        },
        increaseProductsCountInCart: {
            type: Function,
        },
        decreaseProductsCountInCart: {
            type: Function,
        },
        markProductForRemovalOrReturn: {
            type: Function,
        },
    },
}
</script>

<template>
<div class="productsCartList">
    <ProductsCartListItem 
        v-for="productInCart in productsListInCart" 
        :key="productInCart.id" 
        v-bind:productInCart="productInCart" 
        v-bind:increaseProductsCountInCart="increaseProductsCountInCart" 
        v-bind:decreaseProductsCountInCart="decreaseProductsCountInCart" 
        v-bind:markProductForRemovalOrReturn="markProductForRemovalOrReturn"
    ></ProductsCartListItem>
</div>
</template>

<style scoped>
.productsCartList {
    height: calc(100% - 135px);
    overflow-y: auto;
}
</style>
