<template>
    <section class="content">
        <ul class="list">
            <li class="list__item">
                <div class="note__header">
                    <Checkbox />
                    <svg width="26" height="26">
                        <use href="src/assets/images/sprite.svg#person" />
                    </svg>
                    <div contenteditable class="note__title" />
                </div>
                <div contenteditable class="note__content"></div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Checkbox from '@/components/Checkbox.vue'

export default defineComponent({
    components: { Checkbox }
})
</script>

<style lang="scss" scoped>
$header: 69px;
$footer: 36px;

.content {
    min-height: calc(100% - $header - $footer);
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.list {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    @media(min-width: 768px) {
        margin-top: 24px;
        max-width: 738px;
    }

    &__item {
        padding: 24px;
        display: flex;
        flex-direction: column;

        svg {
            margin-left: 16px;
            margin-right: 8px;
        }
    }
}

div[contenteditable] {
    border: none;
    outline: none;
    font-size: 16px;
    width: 82%;
}

.note {
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    &__title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #566074;
        line-break: anywhere;
    }

    &__content {
        margin-left: 66px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: #778195;
    }
}
</style>