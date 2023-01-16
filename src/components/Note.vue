<template>
    <article data-testid="note">
        <div class="note__header">
            <Checkbox data-testid="checkbox" />
            <Icon name="person" class="icon" />
            <Input v-model="data.voice" class="note__title" :aria-label="$t('aria.title')" data-testid="note-title" />
            <button @click="deleteNote(data.id)" class="btn" :aria-label="$t('aria.delete')" data-testid="delete-button">
                <Icon name="delete" />
            </button>
        </div>
        <Input v-model="data.text" class="note__content" :aria-label="$t('aria.content')" data-testid="note-content" />
    </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Checkbox from '@/components/custom/Checkbox.vue'
import Input from '@/components/custom/Input.vue'
import Icon from '@/components/icons/Icon.vue'
import { Note } from '@/interfaces'
import { mapMutations } from 'vuex';

export default defineComponent({
    components: {
        Checkbox,
        Input,
        Icon
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