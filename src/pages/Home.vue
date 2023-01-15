<template>
    <Header />
    <Content />
    <Footer />
    <Loading v-if="loading" />
    <Toast />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
import Loading from '@/components/Loading.vue'
import Toast from '@/components/Toast.vue'
import { mapState } from 'vuex'

export default defineComponent({
    components: {
        Header,
        Content,
        Footer,
        Loading,
        Toast
    },
    computed: {
        ...mapState(['loading'])
    }
})
</script>