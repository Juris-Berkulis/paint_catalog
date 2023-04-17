<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import ProductsSearch from './ProductsSearch.vue';

export default {
    components: {
        ProductsSearch,
    },
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
            isShowMobileMenu: false,
        }
    },
    computed: {
        ...mapGetters({
            totalProductsCountInCart: 'moduleProductsCart/totalProductsCountInCart',
        }),
    },
    methods: {
        ...mapActions({
            setIsShowProductsCart: 'moduleProductsCart/setIsShowProductsCart',
        }),
        setIsShowMobileMenu (boolean) {
            this.isShowMobileMenu = boolean;
        }
    },
}
</script>

<template>
<div class="header">
    <div class="header__burgerMenu" @click="(event) => setIsShowMobileMenu(true)">
        <div class="header__burgerMenuLine"></div>
        <div class="header__burgerMenuLine"></div>
        <div class="header__burgerMenuLine"></div>
    </div>
    <div class="header__logo">
        <p class="header__logoText">Colors</p>
        <div class="header__logoIcon"></div>
    </div>
    <div :class="['header__menu', {'header__menu__showForMobile': isShowMobileMenu}]">
        <div class="header__menuCloseBtn" @click="(event) => setIsShowMobileMenu(false)">
            <IconCross></IconCross>
        </div>
        <div class="header__main">
            <div class="header__mainNav">
                <a class="header__mainNavLink" href="#">Продукты</a>
                <a class="header__mainNavLink" href="#">Цвета</a>
                <a class="header__mainNavLink" href="#">Вдохновение</a>
                <a class="header__mainNavLink" href="#">Советы</a>
                <a class="header__mainNavLink" href="#">Найти магазин</a>
            </div>
            <div class="header__mainTel">
                <p class="header__mainTelContent">
                    <a class="header__mainTelContentLink" href="tel:+74952217769">+7 (495) 221-77-69</a>
                </p>
                <p class="header__mainTelDescription">Заказать звонок</p>
            </div>
        </div>
        <div class="header__btnsPanel">
            <div class="header__btn">
                <ProductsSearch 
                    v-bind:valueInSearchInput="valueInSearchInput" 
                    v-bind:setValueInSearchInput="setValueInSearchInput"
                ></ProductsSearch>
            </div>
            <div class="header__btn">
                <IconProfile></IconProfile>
            </div>
            <div class="header__btn">
                <IconLike></IconLike>
            </div>
        </div>
    </div>
    <BaseCloseField 
        class="catalogView__closeFieldForMenu" 
        v-bind:isShowCloseField="isShowMobileMenu" 
        v-bind:setIsShowCloseField="setIsShowMobileMenu" 
        v-bind:transitionDuration="1" 
        v-bind:transitionDelay="0.1"
    ></BaseCloseField>
    <div class="header__btn header__btn__cart" @click="(event) => setIsShowProductsCart(true)">{{ totalProductsCountInCart }}</div>
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

@media (max-width: 1301px) {
    .header {
        height: 64px;
        padding: 0 24px;
    }
}

.header__burgerMenu {
    display: none;
    height: 14px;
    width: 24px;
    cursor: pointer;
}

@media (max-width: 1301px) {
    .header__burgerMenu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

@media (max-width: 1301px) {
    .header__burgerMenuLine {
        height: 2px;
        width: 100%;
        background-color: #1F2020;
    }
}

.header__logo {
    display: flex;
    margin-right: 9vw;
}

@media (max-width: 1301px) {
    .header__logo {
        margin-right: 0;
    }
}

.header__logoText {
    font-family: 'TT Hoves', 'Times New Roman', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
}

@media (max-width: 1301px) {
    .header__logoText {
        font-size: 22px;
        line-height: 22px;
    }
}

.header__logoIcon {
    height: 8px;
    width: 8px;
    margin-top: 4px;
    border-radius: 50%;
    background-color: #1F2020;
}

@media (max-width: 1301px) {
    .header__logoIcon {
        margin-top: 2px;
    }
}

.header__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

@media (max-width: 1301px) {
    .header__menu {
        position: relative;
        position: fixed;
        top: 0;
        bottom: 0;
        left: -100%;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        background-color: #ffffff;
        transform: translateX(0);
        transition: transform 1s linear 0.1s;
        z-index: 3;
    }
}

@media (max-width: 1301px) {
    .header__menu__showForMobile {
        transform: translateX(100%);
    }
}

.header__menuCloseBtn {
    display: none;
}

@media (max-width: 1301px) {
    .header__menuCloseBtn {
        position: absolute;
        top: 20px;
        right: 20px;
        display: block;
    }
}

.header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 6vw;
    flex-grow: 1;
}

@media (max-width: 1301px) {
    .header__main {
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 0;
        margin-right: 0;
        margin-bottom: 40px;
        padding: 0 20px;
        overflow-y: auto;
    }
}

@media (max-width: 1301px) {
    .header__mainNav {
        display: flex;
        flex-direction: column;
    }
}

.header__mainNavLink {
    margin-right: 24px;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
}

@media (max-width: 1301px) {
    .header__mainNavLink {
        margin-right: 0;
        margin-bottom: 40px;
    }
}

.header__mainTelContentLink {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
}

.header__mainTelDescription {
    font-weight: 400;
    font-size: 14px;
    opacity: 0.3;
}

.header__btnsPanel {
    display: flex;
}

.header__btn {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
}

@media (max-width: 1301px) {
    .header__btn:last-child {
        margin-right: 0;
    }
}

.header__btn__cart {
    margin-right: 0;
    border-radius: 50%;
    background-color: #7BB899;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.06em;
    opacity: 1;
}

.header__btn__cart:hover {
    opacity: 0.9;
}

.catalogView__closeFieldForMenu {
    display: none;
}

@media (max-width: 1301px) {
    .catalogView__closeFieldForMenu {
        display: block;
    }
}
</style>
