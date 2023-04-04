<script>
import ProductsFilter from '../components/ProductsFilter.vue';
import ProductsSort from '../components/ProductsSort.vue';
import ProductsList from '../components/productsList.vue';
import {productsData} from '../data/productsData';

export default {
    components: { 
        ProductsList, 
        ProductsSort,
        ProductsFilter,
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
            filterOptions: [
                {value: 'isNew', name: 'Новинки', isTurnedOn: false},
                {value: 'isInStock', name: 'Есть в наличии', isTurnedOn: false},
                {value: 'isContractProduct', name: 'Контрактные', isTurnedOn: false},
                {value: 'isExclusiveProduct', name: 'Эксклюзивные', isTurnedOn: false},
                {value: 'isDiscount', name: 'Распродажа', isTurnedOn: false},
            ],
        }
    },
    methods: {
        selectSortOption (sortOption) {
            this.selectedSort = sortOption;
        },
        setIsShowSortOptions (boolean) {
            this.isShowSortOptions = boolean;
        },
        setFilterOptions (filterOption) {
            const index = this.filterOptions.indexOf(filterOption);

            this.filterOptions[index].isTurnedOn = !filterOption.isTurnedOn;
        },
    },
    computed: {
        productsDataFiltered () {
            return [...this.productsData].filter(product => {
                for (let i=0; i < this.filterOptions.length; i++) {
                    if (!product[this.filterOptions[i].value] && this.filterOptions[i].isTurnedOn) {
                        return false
                    }
                }

                return true
            })
        },
        productsDataFilteredAndSorted () {
            return [...this.productsDataFiltered].sort((product1, product2) => {
                const directionSort = this.selectedSort.isReversed ? -1 : 1;

                return directionSort * (product1[this.selectedSort.value] - product2[this.selectedSort.value])
            })
        },
    },
}
</script>

<template>
<div class="catalogView">
    <ProductsFilter v-bind:filterOptions="filterOptions" v-bind:setFilterOptions="setFilterOptions"></ProductsFilter>
    <div class="catalogView__main">
        <div class="catalogView__mainHead">
            <p>{{ productsDataFilteredAndSorted.length }} товаров</p>
            <ProductsSort v-bind:selectedSort="selectedSort" v-bind:sortOptions="sortOptions" v-bind:selectSortOption="selectSortOption" v-bind:isShowSortOptions="isShowSortOptions" v-bind:setIsShowSortOptions="setIsShowSortOptions"></ProductsSort>
        </div>
        <ProductsList v-bind:productsData="productsDataFilteredAndSorted"></ProductsList>
    </div>
</div>
</template>

<style scoped>
.catalogView {
    display: flex;
    justify-content: space-between;
}

.catalogView__main {
    flex-grow: 1;
}

.catalogView__mainHead {
    display: flex;
    justify-content: space-between;
}
</style>
