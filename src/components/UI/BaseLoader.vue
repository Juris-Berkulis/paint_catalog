<script>
export default {
    name: 'BaseLoader',
}
</script>

<template>
<div class="loader">
    <div class="loader__icon"></div>
</div>
</template>

<style scoped>
@keyframes loaderAnimation {
    0% {
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
}

.loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader__icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 20px solid #7BB899;
    border-left: 25px solid transparent;
    animation: loaderAnimation 3s linear 0s infinite normal;
}
</style>
