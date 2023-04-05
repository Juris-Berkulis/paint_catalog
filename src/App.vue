<script>
import CatalogView from './views/CatalogView.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ProductsCart from './components/ProductsCart.vue';

export default {
  components: {
    CatalogView,
    TheHeader,
    TheFooter,
    ProductsCart,
  },
  data() {
    return {
      isShowProductsCart: false,
    }
  },
  methods: {
    setIsShowProductsCart (boolean) {
      this.isShowProductsCart = boolean;
    },
  },
}
</script>

<template>
<div class="app">
  <div class="up">
    <TheHeader v-bind:setIsShowProductsCart="setIsShowProductsCart"></TheHeader>
    <div class="page">
      <CatalogView></CatalogView>
    </div>
  </div>
  <TheFooter></TheFooter>
  <ProductsCart v-bind:isShowProductsCart="isShowProductsCart" v-bind:setIsShowProductsCart="setIsShowProductsCart"></ProductsCart>
  <BaseCloseField v-bind:isShowCloseField="isShowProductsCart" v-bind:setIsShowCloseField="setIsShowProductsCart"></BaseCloseField>
</div>
</template>

<style scoped>
.app {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter';
}

.up {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
