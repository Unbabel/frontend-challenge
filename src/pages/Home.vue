<template>
    <Header />
    <Content />
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
    components: {
        Header,
        Content,
        Footer
    }
})
</script>