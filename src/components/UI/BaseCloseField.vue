<script>
export default {
    name: 'BaseCloseField',
    props: {
        isShowCloseField: {
            type: Boolean,
        },
        setIsShowCloseField: {
            type: Function,
        },
    },
}
</script>

<template>
<div class="closeField" @click="(event) => setIsShowCloseField(false)" v-if="isShowCloseField"></div>
</template>

<style scoped>
.closeField {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.7;
    z-index: 1;
}
</style>
