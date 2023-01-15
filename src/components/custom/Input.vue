<template>
    <div contenteditable @input="updateValue">{{ modelValue }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        updateValue(e: Event) {
            this.$emit('update:modelValue', (e.target as HTMLDivElement).innerText)
        }
    }
})
</script>

<style lang="scss" scoped>
div[contenteditable] {
    border: none;
    outline: none;
    font-size: 16px;
}
</style>