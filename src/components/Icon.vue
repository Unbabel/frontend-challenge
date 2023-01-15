<template>
    <component :is="componentName" />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
    props: ['name'],
    components: {
        UploadIcon: defineAsyncComponent(() => import('@/components/icons/UploadIcon.vue')),
        FetchIcon: defineAsyncComponent(() => import('@/components/icons/FetchIcon.vue')),
        CheckmarkIcon: defineAsyncComponent(() => import('@/components/icons/CheckmarkIcon.vue')),
        PersonIcon: defineAsyncComponent(() => import('@/components/icons/PersonIcon.vue')),
        DeleteIcon: defineAsyncComponent(() => import('@/components/icons/DeleteIcon.vue')),
        AddIcon: defineAsyncComponent(() => import('@/components/icons/AddIcon.vue')),
    },
    computed: {
        componentName() {
            return this.name + '-icon'
        }
    }
})
</script>