<script>
import ProductsList from '../components/productsList.vue';
import {productsData} from '../data/productsData';

export default {
    components: { 
        ProductsList, 
    },
    data() {
        return {
            productsData: productsData,
        }
    },
}
</script>

<template>
<div class="catalogView">
    <div>
        Фильтр
    </div>
    <div class="catalogView__main">
        <div class="catalogView__mainHead">
            <p>412 товаров</p>
            <p>Сначала дорогие</p>
        </div>
        <ProductsList v-bind:productsData="productsData"></ProductsList>
    </div>
</div>
</template>

<style scoped>
.catalogView {
    display: flex;
    justify-content: space-between;
}
</style>
