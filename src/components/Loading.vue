<template>
    <div class="loading-container">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.loading-container {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 0.25rem;
    border: 4px solid white;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--unb-purple) transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>