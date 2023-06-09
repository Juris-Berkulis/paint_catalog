<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import ProductsFilter from '../components/ProductsFilter.vue';
import ProductsSort from '../components/ProductsSort.vue';
import ProductsList from '../components/ProductsList.vue';
import {sliderData} from '../data/sliderData';

export default {
    components: { 
        ProductsList, 
        ProductsSort,
        ProductsFilter,
    },
    data() {
        return {
            productsData: [],
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
            sliderData: sliderData,
            currentPage: 1,
            isShowProductsFilter: false,
            isProductsDataLoading: true,
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
        setCurrentPage (page) {
            this.currentPage = page;
        },
        previousPage () {
            if (this.currentPage === 1) {
                this.currentPage = this.sliderData.length;
            } else {
                this.currentPage--;
            }
        },
        nextPage () {
            if (this.currentPage === this.sliderData.length) {
                this.currentPage = 1;
            } else {
                this.currentPage++;
            }
        },
        setIsShowProductsFilter (boolean) {
            this.isShowProductsFilter = boolean;
        },
        async getProductsData () {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/Juris-Berkulis/paint_catalog/main/src/data/productsData.json`);

                if (response.ok) {
                    this.productsData = await response.json();
                } else {
                    throw {message: `Ошибка HTTP: ${response.status}`}
                }
            } catch (error) {
                alert(error.message);
            } finally {
                this.isProductsDataLoading = false;
            }
        },
    },
    computed: {
        ...mapState({
            valueInSearchInput: (state) => state.moduleProductsSearch.valueInSearchInput,
        }),
        valueInSearchInputLowerCase () {
            return this.valueInSearchInput.toLowerCase();
        },
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
        productsDataFilteredAndSearched () {
            return [...this.productsDataFiltered].filter(product => {
                return product.name.toLowerCase().includes(this.valueInSearchInputLowerCase)
            })
        },
        productsDataFilteredAndSearchedAndSorted () {
            return [...this.productsDataFilteredAndSearched].sort((product1, product2) => {
                const directionSort = this.selectedSort.isReversed ? -1 : 1;

                return directionSort * (product1[this.selectedSort.value] - product2[this.selectedSort.value])
            })
        },
    },
    async mounted() {
        await this.getProductsData();
    },
}
</script>

<template>
<div class="catalogView">
    <div class="catalogView__upperline"></div>
    <BaseSlider 
        v-bind:sliderData="sliderData" 
        v-bind:currentPage="currentPage" 
        v-bind:setCurrentPage="setCurrentPage" 
        v-bind:previousPage="previousPage" 
        v-bind:nextPage="nextPage"
    >
        <template v-slot:category>
            <div class="category">
                <p class="category__text">Главная</p>
                <div class="category__separator"></div>
                <p class="category__text">Продукты</p>
                <div class="category__separator"></div>
                <p class="category__text">Краски</p>
            </div>
        </template>
    </BaseSlider>
    <div class="catalogView__root">
        <div :class="['catalogView__filterWrapper', {'catalogView__filterWrapper__showForMobile': isShowProductsFilter}]">
            <div class="catalogView__filterLine" @click="(event) => setIsShowProductsFilter(false)"></div>
            <ProductsFilter 
                v-bind:filterOptions="filterOptions" 
                v-bind:setFilterOptions="setFilterOptions"
            ></ProductsFilter>
        </div>
        <BaseCloseField class="catalogView__closeFieldForFilter" v-bind:isShowCloseField="isShowProductsFilter" v-bind:setIsShowCloseField="setIsShowProductsFilter" v-bind:transitionDuration="0.5" v-bind:transitionDelay="0.1"></BaseCloseField>
        <div class="catalogView__main">
            <div class="catalogView__mainHead">
                <p class="catalogView__mainHeadCount">{{ productsDataFilteredAndSearchedAndSorted.length }} товаров</p>
                <p class="catalogView__mainHeadFilterOpeningBtn" @click="(event) => setIsShowProductsFilter(true)">Фильтры</p>
                <ProductsSort 
                    v-bind:selectedSort="selectedSort" 
                    v-bind:sortOptions="sortOptions" 
                    v-bind:selectSortOption="selectSortOption" 
                    v-bind:isShowSortOptions="isShowSortOptions" 
                    v-bind:setIsShowSortOptions="setIsShowSortOptions"
                ></ProductsSort>
            </div>
            <ProductsList 
                v-if="!isProductsDataLoading" 
                v-bind:productsData="productsDataFilteredAndSearchedAndSorted" 
            ></ProductsList>
            <BaseLoader 
                v-else
            ></BaseLoader>
        </div>
    </div>
</div>
</template>

<style scoped>
.catalogView {
    background-color: #ffffff;
}

@media (max-width: 1301px) {
    .catalogView {
        padding: 0 24px;
    }
}

.catalogView__upperline {
    display: none;
}

@media (max-width: 1301px) {
    .catalogView__upperline {
        height: 1px;
        width: 100%;
        display: block;
        background-color: #1F2020;
        opacity: 0.06;
    }
}

.catalogView__root {
    display: flex;
    justify-content: space-between;
    padding: 72px 64px 125px;
}

@media (max-width: 1301px) {
    .catalogView__root {
        padding: 0 0 30px;
    }
}

@media (max-width: 1301px) {
    .catalogView__filterWrapper {
        position: fixed;
        top: 100%;
        right: 0;
        left: 0;
        padding: 12px 24px 114px;
        background-color: #ffffff;
        border-radius: 24px 24px 0px 0px;
        transform: translateY(0);
        transition: transform 0.5s linear 0.1s;
        z-index: 2;
    }
}

@media ((max-width: 1301px) and (max-height: 350px)) {
    .catalogView__filterWrapper {
        padding: 12px 24px 0;
    }
}

@media (max-width: 1301px) {
    .catalogView__filterWrapper__showForMobile {
        transform: translateY(-100%);
    }
}

.catalogView__filterLine {
    display: none;
}

@media (max-width: 1301px) {
    .catalogView__filterLine {
        display: block;
        width: 28px;
        height: 4px;
        background-color: #1F2020;
        opacity: 0.6;
        border-radius: 40px;
        margin-bottom: 38px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}

.catalogView__closeFieldForFilter {
    display: none;
}

@media (max-width: 1301px) {
    .catalogView__closeFieldForFilter {
        display: block;
    }
}

.catalogView__main {
    flex-grow: 1;
}

.catalogView__mainHead {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
}

@media (max-width: 1301px) {
    .catalogView__mainHead {
        margin-bottom: 0;
    }
}

.catalogView__mainHeadCount {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

@media (max-width: 1301px) {
    .catalogView__mainHeadCount {
        display: none;
    }
}

.catalogView__mainHeadFilterOpeningBtn {
    display: none;
}

@media (max-width: 1301px) {
    .catalogView__mainHeadFilterOpeningBtn {
        display: block;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }
}

.category {
    display: flex;
    align-items: center;
}

.category__text {
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.3;
    margin-right: 8px;
}

@media (max-width: 1301px) {
    .category__text {
        color: #1F2020;
    }
}

.category__separator {
    height: 3px;
    width: 3px;
    background: #C4C4C4;
    opacity: 0.3;
    margin-right: 8px;
    border-radius: 50%;
}

@media (max-width: 1301px) {
    .category__separator {
        opacity: 1;
    }
}
</style>
