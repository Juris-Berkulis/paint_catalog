<script>
export default {
    props: {
        selectedSort: {
            type: Object,
        },
        sortOptions: {
            type: Array,
        },
        selectSortOption: {
            type: Function,
        },
        isShowSortOptions: {
            type: Boolean,
        },
        setIsShowSortOptions: {
            type: Function,
        },
    },
    methods: {
        clickSortOption (sortOption) {
            this.selectSortOption(sortOption);
            this.setIsShowSortOptions(false);
        },
    },
}
</script>

<template>
<div class="productsSort">
    <div class="productsSort__selected" @click="(event) => setIsShowSortOptions(true)">
        <p class="productsSort__selectedText">{{ selectedSort.name }}</p>
        <iconExpandList></iconExpandList>
    </div>
    <div class="productsSort__list" v-if="isShowSortOptions">
        <div class="productsSort__listItem" v-for="sortOption in sortOptions" :key="sortOptions.name" @click="(event) => clickSortOption(sortOption)">
            <p class="productsSort__listItemText">{{ sortOption.name }}</p>
        </div>
    </div>
    <BaseCloseField v-bind:isShowCloseField="isShowSortOptions" v-bind:setIsShowCloseField="setIsShowSortOptions"></BaseCloseField>
</div>
</template>

<style scoped>
.productsSort {
    position: relative;
}

.productsSort__selected {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.productsSort__selectedText {
    margin-right: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.productsSort__list {
    position: absolute;
    top: 0;
    right: 0;
    width: 248px;
    background-color: #ffffff;
    z-index: 2;
}

.productsSort__listItem {
    padding: 16px 24px;
    background-color: transparent;
    cursor: pointer;
}

.productsSort__listItem:hover {
    background-color: #7BB899;
}

.productsSort__listItemText {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
</style>
