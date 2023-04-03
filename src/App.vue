<script>
import CatalogView from './components/CatalogView.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    CatalogView,
    TheHeader,
},
}
</script>

<template>
<div class="app">
  <TheHeader></TheHeader>
  <div class="page">
    <CatalogView></CatalogView>
  </div>
</div>
</template>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  font-family: 'Inter';
}
</style>
