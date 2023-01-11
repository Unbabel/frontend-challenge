<template>
    <div class="not_found">
        <h1>404</h1>
        <h2>{{ $t('not-found') }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.not_found {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-light);
    color: var(--unb-app-title);
}

h2 {
    margin: 0;
    text-align: center;
}
</style>