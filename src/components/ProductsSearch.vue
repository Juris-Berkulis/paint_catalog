<script>
export default {
    props: {
        valueInSearchInput: {
            type: String,
        },
        setValueInSearchInput: {
            type: Function,
        },
    },
    data() {
        return {
            isShowInput: false,
        }
    },
    methods: {
        setIsShowInput () {
            this.isShowInput = !this.isShowInput;
        },
        closeInput () {
            this.isShowInput = false;
        },
    },
}
</script>

<template>
<form class="productsSearch" @submit.prevent="(event) => closeInput()" action="">
    <input class="productsSearch__input" :value="valueInSearchInput" @input="(event) => setValueInSearchInput(event.target.value)" v-if="isShowInput" placeholder="Название товара" type="text">
    <IconSearch v-bind:search="setIsShowInput"></IconSearch>
</form>
</template>

<style scoped>
.productsSearch {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.productsSearch__input {
    position: absolute;
    top: 50%;
    right: calc(100% + 10px);
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: 2px solid #7BB899;
    transform: translate(0, -50%);
    z-index: 2;
}
</style>
