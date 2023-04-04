<script>
export default {
    props: {
        filterOptions: {
            type: Array,
        },
        setFilterOptions: {
            type: Function,
        },
    },
}
</script>

<template>
<div class="productsFilter">
    <div class="productsFilter__option" v-for="filterOption in filterOptions" :key="filterOption.name" @click="(event) => setFilterOptions(filterOption)">
        <div :class="`productsFilter__optionSwitch ${filterOption.isTurnedOn && 'productsFilter__optionSwitch__isTurnedOn'}`">
            <div class="productsFilter__optionSwitchIcon"></div>
        </div>
        <p class="productsFilter__optionText">{{ filterOption.name }}</p>
    </div>
</div>
</template>

<style scoped>
.productsFilter {
    margin-right: 138px;
}

.productsFilter__option {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    cursor: pointer;
}

.productsFilter__optionSwitch {
    height: 22px;
    width: 36px;
    display: flex;
    align-items: center;
    margin-right: 12px;
    padding-left: 7px;
    border-radius: 40px;
    background-color: #F2F2F2;
    transition: all 0.3s linear 0.1s;
}

.productsFilter__optionSwitch__isTurnedOn {
    padding-left: 21px;
    background-color: #7BB899;
}

.productsFilter__optionSwitchIcon {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #1F2020;
}

.productsFilter__optionText {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.06em;
    white-space: nowrap;
    text-transform: uppercase;
}
</style>
