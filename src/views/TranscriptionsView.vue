<template>
  <div>
    <Header @uploadData="handleDataUpload" @fetchData="handleDataFetch"></Header>
    <section>
      <TranscriptionsList :list-data="data"></TranscriptionsList>
    </section>
  </div>
</template>

<script>
import Header from '@/components/core/Header.vue'
import TranscriptionsList from '@/components/transcriptions/TranscriptionsList.vue'

export default {
  name: 'TranscriptionsView',
  components: {
    Header,
    TranscriptionsList
  },
  methods: {
    handleDataUpload: function () {
      this.$store.dispatch('uploadListData')
    },
    handleDataFetch: function () {
      this.$store.dispatch('fetchListData')
    }
  },
  computed: {
    data () {
      return this.$store.state.transcriptions.transcriptionsData
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

section {
  width: 100%;
  max-width: $content-width;
  margin: $default-margin auto;
}
</style>
