<template>
  <div class="container">
    <Header @uploadData="handleDataUpload" @fetchData="handleDataFetch"></Header>
    <section>
      <TranscriptionsList :list-data="data"></TranscriptionsList>
    </section>
    <ErrorMessage :error-message="errorMessage"></ErrorMessage>
  </div>
</template>

<script>
import Header from '@/components/core/Header.vue'
import TranscriptionsList from '@/components/transcriptions/TranscriptionsList.vue'
import ErrorMessage from '@/components/core/ErrorMessage.vue'

export default {
  name: 'TranscriptionsView',
  components: {
    Header,
    TranscriptionsList,
    ErrorMessage
  },
  methods: {
    handleDataUpload: function () {
      this.$store.dispatch('uploadTranscriptionsData')
    },
    handleDataFetch: function () {
      this.$store.dispatch('fetchTranscriptionsData')
    }
  },
  computed: {
    data () {
      return this.$store.state.transcriptions.transcriptionsData
    },
    errorMessage () {
      return this.$store.state.transcriptions.errorMessage
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  section {
    width: 100%;
    max-width: $content-width;
    margin: $default-margin auto;
  }
}
</style>
