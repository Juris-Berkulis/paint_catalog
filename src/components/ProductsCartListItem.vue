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
    },
}
</script>

<template>
<div class="productsCartListItem">
    <div class="productsCartListItem__line"></div>
    <div class="productsCartListItem__left">
        <img class="productsCartListItem__img" :src="`../../img/products/${productInCart.id}.png`" alt="photo">
        <div class="productsCartListItem__description">
            <p class="productsCartListItem__descriptionName">{{ productInCart.name }}</p>
            <p class="productsCartListItem__descriptionSum">{{ productInCart.price * productInCart.count }} ₽</p>
        </div>
    </div>
    <div class="productsCartListItem__right">
        <div class="productsCartListItem__btnsPanel">
            <button class="productsCartListItem__panelBtn" @click="(event) => decreaseProductsCountInCart(productInCart)">
                <div class="productsCartListItem__panelBtnIconHorizontal"></div>
            </button>
            <p class="productsCartListItem__btnsPanelCount">{{ productInCart.count }}</p>
            <button class="productsCartListItem__panelBtn" @click="(event) => increaseProductsCountInCart(productInCart)">
                <div class="productsCartListItem__panelBtnIconHorizontal"></div>
                <div class="productsCartListItem__panelBtnIconVertical"></div>
            </button>
        </div>
        <button class="productsCartListItem__productDelBtn">x</button>
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

.productsCartListItem__img {
    width: 96px;
    background-repeat: 8px;
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
}

.productsCartListItem__panelBtnIconHorizontal {
    height: 1.4px;
    width: 10px;
}

.productsCartListItem__panelBtnIconVertical {
    height: 10px;
    width: 1.4px;
}

.productsCartListItem__btnsPanelCount {
    padding: 0 17px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
}
</style>
