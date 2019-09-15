<template>
  <div>
    <Header title="Transcriptions">
      <TranscriptionsMenu />
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header' 
import TranscriptionsMenu from '@/components/TranscriptionsMenu' 

export default {
  name: 'Home',
  components: {
    Header,
    TranscriptionsMenu
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
}
</style>
