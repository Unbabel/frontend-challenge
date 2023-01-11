<template>
    <section class="notes">
        <div>List</div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
$header: 69px;
$footer: 36px;
.notes {
    min-height: calc(100% - $header - $footer);
}
</style>