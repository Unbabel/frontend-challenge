<template>
    <section class="content">
        <Transition>
            <TransitionGroup v-if="!listIsEmpty" tag="ul" class="list">
                <li v-for="note in notes" :key="note.id">
                    <Note :data="note" />
                </li>
            </TransitionGroup>
        </Transition>
        <button @click="addNote" class="btn" :aria-label="$t('aria.add')">
            <Icon name="add" />
        </button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations, mapState } from 'vuex'
import Note from '@/components/Note.vue'
import Icon from '@/components/icons/Icon.vue'

export default defineComponent({
    components: {
        Note,
        Icon
    },
    computed: {
        ...mapState(['notes']),
        listIsEmpty() {
            return this.notes.length === 0
        }
    },
    methods: {
        ...mapMutations(['addNote'])
    }
})
</script>

<style src="@/assets/css/transitions.scss" lang="scss" scoped />
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
}

.btn {
    margin: 24px 0;
}
</style>