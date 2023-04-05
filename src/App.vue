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
      productsListInCart: [],
    }
  },
  computed: {
    totalProductsCountInCart () {
      return this.productsListInCart.reduce((acc, currentProduct) => {
        return !currentProduct.isMarkProductForRemoval ? acc + currentProduct.count : acc
      }, 0)
    },
  },
  methods: {
    setIsShowProductsCart (boolean) {
      this.isShowProductsCart = boolean;

      if (!boolean) {
        this.deleteProductsMarkedForDeletion();
      }
    },
    increaseProductsCountInCart (product) {
      for (let productIndexInCart=0; productIndexInCart < this.productsListInCart.length; productIndexInCart++) {
        if (this.productsListInCart[productIndexInCart].id === product.id) {
          this.productsListInCart[productIndexInCart].count++;
          return true
        }
      }

      return false
    },
    decreaseProductsCountInCart (product) {
      for (let productIndexInCart=0; productIndexInCart < this.productsListInCart.length; productIndexInCart++) {
        if (this.productsListInCart[productIndexInCart].id === product.id) {
          if (this.productsListInCart[productIndexInCart].count > 1) {
            this.productsListInCart[productIndexInCart].count--;
          }

          return
        }
      }
    },
    addProductInCart (product) {
      if (!this.increaseProductsCountInCart(product)) {
        this.productsListInCart.push({...product, count: 1});
      }
    },
    markProductForRemovalOrReturn (product, isMarkProductForRemoval) {
      for (let productIndexInCart=0; productIndexInCart < this.productsListInCart.length; productIndexInCart++) {
        if (this.productsListInCart[productIndexInCart].id === product.id) {
          this.productsListInCart[productIndexInCart].isMarkProductForRemoval = isMarkProductForRemoval;
          return
        }
      }
    },
    deleteProductsMarkedForDeletion () {
      this.productsListInCart = this.productsListInCart.filter(product => {
        return !product.isMarkProductForRemoval
      })
    },
    clearProductsListInCart () {
      this.productsListInCart = [];
    },
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
      this.productsListInCart = productsList;
    }
  },
}
</script>

<template>
<div class="app">
  <div class="up">
    <TheHeader v-bind:setIsShowProductsCart="setIsShowProductsCart" v-bind:totalProductsCountInCart="totalProductsCountInCart"></TheHeader>
    <div class="page">
      <CatalogView v-bind:addProductInCart="addProductInCart"></CatalogView>
    </div>
  </div>
  <TheFooter></TheFooter>
  <ProductsCart v-bind:isShowProductsCart="isShowProductsCart" v-bind:setIsShowProductsCart="setIsShowProductsCart" v-bind:productsListInCart="productsListInCart" v-bind:increaseProductsCountInCart="increaseProductsCountInCart" v-bind:decreaseProductsCountInCart="decreaseProductsCountInCart" v-bind:markProductForRemovalOrReturn="markProductForRemovalOrReturn" v-bind:clearProductsListInCart="clearProductsListInCart"></ProductsCart>
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
