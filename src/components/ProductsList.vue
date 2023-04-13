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
    <div class="productsList__filled" v-if="productsData.length">
        <ProductsListItem 
            v-for="product in productsData" 
            :key="product.id" 
            v-bind:product="product" 
            v-bind:addProductInCart="addProductInCart"
        ></ProductsListItem>
    </div>
    <p class="productsList__emptyText" v-else>Список товаров пуст</p>
</div>
</template>

<style scoped>
.productsList__filled {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.productsList__emptyText {
    font-weight: 400;
    font-size: 28px;
    line-height: 100%;
    text-align: center;
}
</style>
