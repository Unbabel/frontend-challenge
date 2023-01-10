<template>
    <header>
        <div class="header-content">
            <span>{{ $t('title') }}</span>
            <button>Button</button>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 69px;
    background-color: white;
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

    .header-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 24px;

        @media(min-width: 768px) {
            max-width: 738px;
        }
    }
}

span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #414C5E;
}
</style>