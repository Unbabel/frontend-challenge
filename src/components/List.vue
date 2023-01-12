<template>
    <section class="content">
        <ul class="list">
            <li class="list__item">
                <article>
                    <div class="note__header">
                        <Checkbox />
                        <svg width="26" height="26" class="icon">
                            <use href="src/assets/images/sprite.svg#person" />
                        </svg>
                        <div contenteditable class="note__title" />
                        <button class="btn btn__delete">
                            <svg width="16" height="20">
                                <use href="src/assets/images/sprite.svg#delete" />
                            </svg>
                        </button>
                    </div>
                    <div contenteditable class="note__content"></div>
                </article>
            </li>
        </ul>
        <button class="btn btn__add">
            <svg width="32" height="32">
                <use href="src/assets/images/sprite.svg#add-row" />
            </svg>
        </button>
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
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

        article {
            display: flex;
            flex-direction: column;
        }

        .icon {
            margin-left: 16px;
            margin-right: 8px;
            flex-shrink: 0;
        }

        &:hover {
            .btn__delete {
                visibility: visible;
                opacity: 1;
                transition: opacity 1s cubic-bezier(0, 0, 0.3, 1);
            }
        }
    }
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
        margin-left: 66px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: #778195;
    }
}

.btn {
    &__add {
        margin: 24px 0;
    }
    
    &__delete {
        margin-left: 8px;
        visibility: hidden;
        opacity: 0;
    }
}
</style>