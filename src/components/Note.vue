<template>
    <article>
        <div class="note__header">
            <Checkbox />
            <svg width="26" height="26" class="icon">
                <use href="src/assets/images/sprite.svg#person" />
            </svg>
            <div contenteditable class="note__title">{{ data?.voice }}</div>
            <button class="btn">
                <svg width="16" height="20">
                    <use href="src/assets/images/sprite.svg#delete" />
                </svg>
            </button>
        </div>
        <div contenteditable class="note__content">{{ data?.text }}</div>
    </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Checkbox from '@/components/Checkbox.vue'
import { Note } from '@/interfaces'

export default defineComponent({
    components: { Checkbox },
    props: {
        data: Object as PropType<Note>
    }
})
</script>

<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    padding: 24px;

    &:hover {
        .btn {
            visibility: visible;
            opacity: 1;
            transition: opacity 1s cubic-bezier(0, 0, 0.3, 1);
        }
    }
}

.icon {
    margin-left: 16px;
    margin-right: 8px;
    flex-shrink: 0;
}

div[contenteditable] {
    border: none;
    outline: none;
    font-size: 16px;
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
        flex-grow: 1;
        line-break: anywhere;
    }

    &__content {
        margin: 0 24px 0 66px;
        margin-left: 68px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: #778195;
    }
}

.btn {
    margin-left: 8px;
    visibility: hidden;
    opacity: 0;
}
</style>