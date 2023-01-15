<template>
    <article>
        <div class="note__header">
            <Checkbox />
            <svg width="26" height="26" class="icon">
                <use href="src/assets/images/sprite.svg#person" />
            </svg>
            <CustomInput v-model="data.voice" class="note__title" :aria-label="$t('aria.title')" />
            <button @click="deleteNote(data.id)" class="btn" :aria-label="$t('aria.delete')">
                <svg width="16" height="20">
                    <use href="src/assets/images/sprite.svg#delete" />
                </svg>
            </button>
        </div>
        <CustomInput v-model="data.text" class="note__content" :aria-label="$t('aria.content')" />
    </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Checkbox from '@/components/Checkbox.vue'
import CustomInput from '@/components/CustomInput.vue'
import { Note } from '@/interfaces'
import { mapMutations } from 'vuex';

export default defineComponent({
    components: { 
        Checkbox,
        CustomInput
    },
    props: {
        data: {
            type: Object as PropType<Note>,
            required: true
        }
    },
    methods: {
        ...mapMutations(['updateNote', 'deleteNote'])
    },
    watch: {
        data: {
            handler(newValue) {
                this.updateNote(newValue)
            },
            deep: true
        }
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

.note {
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    &__title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        flex-grow: 1;
        line-break: anywhere;
    }

    &__content {
        margin: 0 24px 0 66px;
        margin-left: 68px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: var(--unb-item-content);
    }
}

.btn {
    margin-left: 8px;
    visibility: hidden;
    opacity: 0;
}
</style>