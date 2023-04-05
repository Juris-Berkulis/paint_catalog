<script>
export default {
    props: {
        setIsShowProductsCart: {
            type: Function,
        },
        totalProductsCountInCart: {
            type: Number,
        },
    },
}
</script>

<template>
<div class="header">
    <div class="header__Logo">
        <p class="header__LogoText">Colors</p>
        <div class="header__LogoIcon"></div>
    </div>
    <div class="header__Main">
        <div class="header__MainNav">
            <a class="header__MainNavLink" href="#">Продукты</a>
            <a class="header__MainNavLink" href="#">Цвета</a>
            <a class="header__MainNavLink" href="#">Вдохновение</a>
            <a class="header__MainNavLink" href="#">Советы</a>
            <a class="header__MainNavLink" href="#">Найти магазин</a>
        </div>
        <div class="header__MainTel">
            <p class="header__MainTelContent">
                <a class="header__MainTelContentLink" href="tel:+74952217769">+7 (495) 221-77-69</a>
            </p>
            <p class="header__MainTelDescription">Заказать звонок</p>
        </div>
    </div>
    <div class="header__BtnsPanel">
        <div class="header__Btn">
            <IconSearch></IconSearch>
        </div>
        <div class="header__Btn">
            <IconProfile></IconProfile>
        </div>
        <div class="header__Btn">
            <IconLike></IconLike>
        </div>
        <div class="header__Btn header__Btn__Cart" @click="(event) => setIsShowProductsCart(true)">{{ totalProductsCountInCart }}</div>
    </div>
</div>
</template>

<style scoped>
.header {
    height: 104px;
    width: 100%;
    padding: 0 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1F2020;
    background-color: #ffffff;
}

.header__Logo {
    display: flex;
}

.header__LogoText {
    font-family: 'TT Hoves';
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
}

.header__LogoIcon {
    height: 8px;
    width: 8px;
    margin-top: 4px;
    border-radius: 50%;
    background-color: #1F2020;
}

.header__Main {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__MainNavLink {
    margin-right: 24px;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
}

.header__MainTelContentLink {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
}

.header__MainTelDescription {
    font-weight: 400;
    font-size: 14px;
    opacity: 0.3;
}

.header__BtnsPanel {
    display: flex;
}

.header__Btn {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
}

.header__Btn:last-child {
    margin: 0;
}

.header__Btn__Cart {
    border-radius: 50%;
    background-color: #7BB899;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.06em;
    opacity: 1;
}

.header__Btn__Cart:hover {
    opacity: 0.9;
}
</style>
