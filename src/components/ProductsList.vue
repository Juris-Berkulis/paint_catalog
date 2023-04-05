<script>
import ProductsListItem from './ProductsListItem.vue';

export default {
    props: {
        productsData: {
            type: Array,
        },
        addProductInCart: {
            type: Function,
        },
    },
    components: { 
        ProductsListItem, 
    },
}
</script>

<template>
<div class="productsList">
    <ProductsListItem v-for="product in productsData" v-bind:product="product" :key="product.id" v-bind:addProductInCart="addProductInCart"></ProductsListItem>
</div>
</template>

<style scoped>
.productsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
