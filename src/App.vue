<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
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
  computed: {
    ...mapState({
      isShowProductsCart: (state) => state.moduleProductsCart.isShowProductsCart,
      productsListInCart: (state) => state.moduleProductsCart.productsListInCart,
    }),
  },
  methods: {
    ...mapActions({
      setIsShowProductsCart: 'moduleProductsCart/setIsShowProductsCart',
      setProductsListInCart: 'moduleProductsCart/setProductsListInCart',
    }),
  },
  watch: {
    productsListInCart: {
      handler(value) {
        localStorage.setItem('productsListInCart', JSON.stringify(value));
      },
      deep: true
    },
  },
  mounted() {
    const productsList = JSON.parse(localStorage.getItem('productsListInCart'));
    
    if (productsList) {
      this.setProductsListInCart(productsList);
    }
  },
}
</script>

<template>
<div class="app">
  <div class="up">
    <TheHeader></TheHeader>
    <div class="page">
      <CatalogView></CatalogView>
    </div>
  </div>
  <TheFooter></TheFooter>
  <ProductsCart></ProductsCart>
  <BaseCloseField 
    v-bind:isShowCloseField="isShowProductsCart" 
    v-bind:setIsShowCloseField="setIsShowProductsCart" 
    v-bind:transitionDuration="0.5" 
    v-bind:transitionDelay="0.1"
  ></BaseCloseField>
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
  font-family: 'Inter', 'Times New Roman', sans-serif;
  font-style: normal;
}

.up {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
