<script>

export default {
    name: 'BaseSlider',
    props: {
        sliderData: {
            type: Array,
        },
        currentPage: {
            type: Number,
        },
        setCurrentPage: {
            type: Function,
        },
        previousPage: {
            type: Function,
        },
        nextPage: {
            type: Function,
        },
    },
}
</script>

<template>
<div class="slider">
    <div class="slider__list" :style="`transform: translateX(-${(currentPage - 1) * 100}vw)`">
        <div class="slider__listItem" v-for="sliderDataItem in sliderData" :key="sliderDataItem.id">
            <img class="slider__listItemImg" :src="`../../../img/slider/${sliderDataItem.id}.jpg`" alt="slider">
            <div class="slider__listItemText">
                <p class="slider__listItemTextTitle">{{ sliderDataItem.title }}</p>
                <p class="slider__listItemTextDescription">{{ sliderDataItem.description }}</p>
            </div>
        </div>
    </div>
    <div class="slider__pageWrapper">
        <div :class="`slider__page ${page === currentPage && 'slider__page__current'}`" v-for="page in sliderData.length" :key="page" @click="(event) => setCurrentPage(page)"></div>
    </div>
    <div class="slider__arrow slider__arrow__previous" @click="(event) => previousPage()">
        <IconArrow></IconArrow>
    </div>
    <div class="slider__arrow slider__arrow__next" @click="(event) => nextPage()">
        <IconArrow></IconArrow>
    </div>
    <div class="slider__slot__category">
        <slot name="category"></slot>
    </div>
</div>
</template>

<style scoped>
.slider {
    position: relative;
    overflow-x: hidden;
}

.slider__list {
    display: flex;
    transition: transform 0.3s linear 0.1s;
}

.slider__listItem {
    position: relative;
}

.slider__listItemImg {
    width: 100vw;
}

.slider__listItemText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 472px;
}

.slider__listItemTextTitle {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    text-align: center;
}

.slider__listItemTextDescription {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-align: center;
}

.slider__pageWrapper {
    position: absolute;
    bottom: 39px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 16px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
}

.slider__page {
    height: 6px;
    width: 6px;
    margin: 0 8px;
    background: #FFFFFF;
    opacity: 0.2;
    border-radius: 50%;
    cursor: pointer;
}

.slider__page__current {
    opacity: 1;
}

.slider__arrow {
    position: absolute;
    bottom: 30%;
    cursor: pointer;
}

.slider__arrow__previous {
    left: 22%;
    transform: rotateZ(180deg);
}

.slider__arrow__next {
    right: 22%;
}

.slider__slot__category {
    position: absolute;
    top: 32px;
    left: 64px;
}
</style>
