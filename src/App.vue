<script>
import CatalogView from './views/CatalogView.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    CatalogView,
    TheHeader,
    TheFooter,
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

.page {
  padding: 0 64px;
}
</style>
