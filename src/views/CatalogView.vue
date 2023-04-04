<script>
import ProductsSort from '../components/ProductsSort.vue';
import ProductsList from '../components/productsList.vue';
import {productsData} from '../data/productsData';

export default {
    components: { 
        ProductsList, 
        ProductsSort,
    },
    data() {
        return {
            productsData: productsData,
            selectedSort: {value: 'price', name: 'Сначала дорогие', isReversed: true},
            sortOptions: [
                {value: 'price', name: 'Сначала дорогие', isReversed: true},
                {value: 'price', name: 'Сначала недорогие', isReversed: false},
                {value: 'popularity', name: 'Сначала популярные', isReversed: true},
                {value: 'dateAdded', name: 'Сначала новые', isReversed: true},
            ],
            isShowSortOptions: false,
        }
    },
    methods: {
        selectSortOption (sortOption) {
            this.selectedSort = sortOption;
        },
        setIsShowSortOptions (boolean) {
            this.isShowSortOptions = boolean;
        },
    },
    computed: {
        productsDataSorted () {
            return [...productsData].sort((product1, product2) => {
                const directionSort = this.selectedSort.isReversed ? -1 : 1;

                return directionSort * (product1[this.selectedSort.value] - product2[this.selectedSort.value])
            })
        },
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
            <ProductsSort v-bind:selectedSort="selectedSort" v-bind:sortOptions="sortOptions" v-bind:selectSortOption="selectSortOption" v-bind:isShowSortOptions="isShowSortOptions" v-bind:setIsShowSortOptions="setIsShowSortOptions"></ProductsSort>
        </div>
        <ProductsList v-bind:productsData="productsDataSorted"></ProductsList>
    </div>
</div>
</template>

<style scoped>
.catalogView {
    display: flex;
    justify-content: space-between;
}

.catalogView__mainHead {
    display: flex;
    justify-content: space-between;
}
</style>
