<template>
    <section class="content">
        <ul class="list">
            <li v-for="note in notes" :key="note.id">
                <Note :data="note" />
            </li>
        </ul>
        <button class="btn">
            <svg width="32" height="32">
                <use href="src/assets/images/sprite.svg#add-row" />
            </svg>
        </button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Note from '@/components/Note.vue'
import { mapState } from 'vuex';

export default defineComponent({
    components: { Note },
    computed: {
        ...mapState(['notes'])
    }
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
}

.btn {
    margin: 24px 0;
}
</style>