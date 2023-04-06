<script>
export default {
    props: {
        product: {
            type: Object,
        },
        addProductInCart: {
            type: Function,
        },
    },
}
</script>

<template>
    <div class="productsListItem">
        <img class="productsListItem__img" :src="`../../img/products/${product.id}.png`" alt="photo">
        <p class="productsListItem__name">{{ product.name }}</p>
        <div class="productsListItem__additionally">
            <p class="productsListItem__price">{{ product.price }} ₽</p>
            <button class="productsListItem__btn" @click="(event) => addProductInCart(product)">
                <div class="productsListItem__btnIcon__vertical productsListItem__btnIcon"></div>
                <div class="productsListItem__btnIcon__horizontal productsListItem__btnIcon"></div>
            </button>
        </div>
        <div class="productsListItem__underline"></div>
    </div>
</template>

<style scoped>
.productsListItem {
    position: relative;
    width: 278px;
    padding: 16px 0;
}

@media (max-width: 1280px) {
    .productsListItem {
        width: 156px;
        padding: 24px 0 34px;
    }
}

.productsListItem__img {
    width: 100%;
    margin-bottom: 16px;
}

.productsListItem__name {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 16px;
}

@media (max-width: 1280px) and (hover: none) and (pointer: coarse), (max-width: 400px) {
    .productsListItem__name {
        margin-bottom: 20px;
        letter-spacing: 0.02em;
    }
}

.productsListItem__additionally {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.productsListItem__price {
    font-weight: 600;
    font-size: 16px;
}

.productsListItem__btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 80px;
    height: 32px;
    background: #7BB899;
    border: none;
    border-radius: 8px;
}

.productsListItem:hover .productsListItem__btn {
    opacity: 1;
}

.productsListItem:hover .productsListItem__btn:hover {
    opacity: 0.9;
}

@media (max-width: 1280px) and (hover: none) and (pointer: coarse), (max-width: 400px) {
    .productsListItem__btn {
        height: 24px;
        width: 40px;
        opacity: 1;
        background: #F2F2F2;
        border-radius: 6px;
    }
}

.productsListItem__btnIcon {
    position: absolute;
    height: 2px;
    width: 12px;
    background-color: #1F2020;
}

.productsListItem__btnIcon__vertical {
    left: 50%;
    transform: translateX(-50%);
}

.productsListItem__btnIcon__horizontal {
    top: 50%;
    transform: translateY(-50%) rotateZ(90deg);
}

.productsListItem__underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: #000000;
    opacity: 0.1;
}
</style>
