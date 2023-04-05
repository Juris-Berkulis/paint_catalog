<script>
export default {
    props: {
        productInCart: {
            type: Object,
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
    computed: {
        isMarkProductForRemoval () {
            return this.productInCart.isMarkProductForRemoval
        },
    },
}
</script>

<template>
<div class="productsCartListItem">
    <div class="productsCartListItem__line"></div>
    <div class="productsCartListItem__left">
        <div :class="['productsCartListItem__imgWrapper', {'productsCartListItem__imgWrapper__forRemoval': isMarkProductForRemoval}]">
            <img class="productsCartListItem__img" :src="`../../img/products/${productInCart.id}.png`" alt="photo">
        </div>
        <div :class="['productsCartListItem__description', {'productsCartListItem__description__forRemoval': isMarkProductForRemoval}]">
            <p class="productsCartListItem__descriptionName">{{ productInCart.name }}</p>
            <p class="productsCartListItem__descriptionSum">{{ productInCart.price * productInCart.count }} ₽</p>
        </div>
    </div>
    <div class="productsCartListItem__right">
        <div class="productsCartListItem__btnsPanel">
            <button class="productsCartListItem__panelBtn" @click="(event) => decreaseProductsCountInCart(productInCart)">
                <div :class="['productsCartListItem__panelBtnIconHorizontal', {'productsCartListItem__panelBtnIconHorizontal__forRemoval': isMarkProductForRemoval}]"></div>
            </button>
            <p :class="['productsCartListItem__btnsPanelCount', {'productsCartListItem__btnsPanelCount__forRemoval': isMarkProductForRemoval}]">{{ productInCart.count }}</p>
            <button class="productsCartListItem__panelBtn" @click="(event) => increaseProductsCountInCart(productInCart)">
                <div :class="['productsCartListItem__panelBtnIconHorizontal', {'productsCartListItem__panelBtnIconHorizontal__forRemoval': isMarkProductForRemoval}]"></div>
                <div :class="['productsCartListItem__panelBtnIconVertical', {'productsCartListItem__panelBtnIconVertical__forRemoval': isMarkProductForRemoval}]"></div>
            </button>
        </div>
        <div class="productsCartListItem__productDelBtn productsCartListItem__productDelBtn__delete" v-if="!isMarkProductForRemoval" @click="(event) => markProductForRemovalOrReturn(productInCart, true)">
            <IconCross></IconCross>
        </div>
        <div class="productsCartListItem__productDelBtn productsCartListItem__productDelBtn__return" v-else @click="(event) => markProductForRemovalOrReturn(productInCart, false)">
            <IconReturn></IconReturn>
        </div>
    </div>
</div>
</template>

<style scoped>
.productsCartListItem {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
}

.productsCartListItem__line {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #000000;
    opacity: 0.1;
}

.productsCartListItem__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 62px;
}

.productsCartListItem__imgWrapper {
    margin-right: 8px;
    opacity: 1;
}

.productsCartListItem__imgWrapper__forRemoval {
    opacity: 0.4;
}

.productsCartListItem__img {
    width: 96px;
}

.productsCartListItem__description {
    opacity: 1;
}

.productsCartListItem__description__forRemoval {
    opacity: 0.2;
}

.productsCartListItem__descriptionName {
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
    margin-bottom: 16px;
}

.productsCartListItem__descriptionSum {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
}

.productsCartListItem__right {
    display: flex;
    align-items: center;
}

.productsCartListItem__btnsPanel {
    display: flex;
    align-items: center;
    margin-right: 37px;
}

.productsCartListItem__panelBtn {
    position: relative;
    width: 40px;
    height: 24px;
    background: #F2F2F2;
    border-radius: 4px;
    border: none;
    opacity: 1;
}

.productsCartListItem__panelBtn:hover {
    opacity: 0.7;
}

.productsCartListItem__panelBtnIconHorizontal, 
.productsCartListItem__panelBtnIconVertical {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000000;
    opacity: 1;
}

.productsCartListItem__panelBtnIconHorizontal {
    height: 1.4px;
    width: 10px;
}

.productsCartListItem__panelBtnIconVertical {
    height: 10px;
    width: 1.4px;
}

.productsCartListItem__panelBtnIconHorizontal__forRemoval, 
.productsCartListItem__panelBtnIconVertical__forRemoval {
    opacity: 0.2;
}

.productsCartListItem__btnsPanelCount {
    padding: 0 17px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    opacity: 1;
}

.productsCartListItem__btnsPanelCount__forRemoval {
    opacity: 0.2;
}

.productsCartListItem__productDelBtn {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.productsCartListItem__productDelBtn__delete {
    opacity: 0.2;
}

.productsCartListItem__productDelBtn__delete:hover {
    opacity: 0.7;
}

.productsCartListItem__productDelBtn__return {
    opacity: 1;
}

.productsCartListItem__productDelBtn__return:hover {
    opacity: 0.7;
}
</style>
