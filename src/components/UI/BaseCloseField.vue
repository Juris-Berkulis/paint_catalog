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
        transitionDuration: {
            type: Number,
            default: 0,
        },
        transitionDelay: {
            type: Number,
            default: 0,
        },
    },
}
</script>

<template>
<div :class="`closeField ${isShowCloseField ? 'closeField__opened' : 'closeField__closed'}`" :style="{'transitionDuration': `${transitionDuration}s`, 'transitionDelay': `${transitionDelay}s`}" @click="(event) => setIsShowCloseField(false)"></div>
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
    transition: all linear;
    z-index: 1;
}

.closeField__opened {
    visibility: visible;
}

.closeField__closed {
    visibility: hidden;
}
</style>
