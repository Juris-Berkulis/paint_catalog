<script>
import ProductsCartList from './ProductsCartList.vue';

export default {
    components: {
        ProductsCartList,
    },
    props: {
        isShowProductsCart: {
            type: Boolean,
        },
        setIsShowProductsCart: {
            type: Function,
        },
        productsListInCart: {
            type: Array,
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
        totalProductsSumInCart () {
            return this.productsListInCart.reduce((acc, currentProduct) => {
                return acc + currentProduct.price * currentProduct.count
            }, 0)
        },
        totalProductsCountInCart () {
            return this.productsListInCart.reduce((acc, currentProduct) => {
                return acc + currentProduct.count
            }, 0)
        },
    },
}
</script>

<template>
<div class="productsCart" v-if="isShowProductsCart">
    <div class="productsCart__up">
        <div class="productsCart__head">
            <p class="productsCart__headTitle">Корзина</p>
            <button @click="(event) => setIsShowProductsCart(false)">x</button>
        </div>
        <div class="productsCart__additionally">
            <p class="productsCart__additionallyCount">{{ totalProductsCountInCart }} товаров</p>
            <button class="productsCart__additionallyDelBtn">Очистить список</button>
        </div>
        <ProductsCartList v-bind:productsListInCart="productsListInCart" v-bind:increaseProductsCountInCart="increaseProductsCountInCart" v-bind:decreaseProductsCountInCart="decreaseProductsCountInCart" v-bind:markProductForRemovalOrReturn="markProductForRemovalOrReturn"></ProductsCartList>
    </div>
    <div class="productsCart__bottom">
        <div class="productsCart__total">
            <p class="productsCart__totalText">Итого</p>
            <p class="productsCart__totalPrice">{{ totalProductsSumInCart }}₽</p>
        </div>
        <button class="productsCart__placeOrderBtn">Оформить заказ</button>
    </div>
</div>
</template>

<style scoped>
.productsCart {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 40px 40px;
    background-color: #ffffff;
    z-index: 2;
}

.productsCart__up {
    height: calc(100% - 95px);
}

.productsCart__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
}

.productsCart__headTitle {
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -0.04em;
}

.productsCart__additionally {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.productsCart__additionallyCount {
    font-weight: 400;
    font-size: 14px;
    line-height: 112%;
}

.productsCart__additionallyDelBtn {
    font-weight: 300;
    font-size: 14px;
    line-height: 112%;
    opacity: 0.4;
    border: none;
    background-color: transparent;
}

.productsCart__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 40px;
}

.productsCart__totalText {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
}

.productsCart__totalPrice {
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.02em;
}

.productsCart__placeOrderBtn {
    padding: 20px 57px;
    background: #7BB899;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 1;
}

.productsCart__placeOrderBtn:hover {
    opacity: 0.9;
}
</style>
