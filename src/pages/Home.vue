<template>
  <div>
    <Header title="Transcriptions">
      <TranscriptionsMenu />
    </Header>
    <div class="container">
      <TranscriptionsList v-if="transcriptions.length > 0" :items="transcriptions" />
      <IconButton title="Add item" :onClick="newItem">
        <AddIcon />
      </IconButton>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header' 
import TranscriptionsMenu from '@/components/TranscriptionsMenu'
import TranscriptionsList from '@/components/TranscriptionsList'
import IconButton from '@/components/IconButton'
import AddIcon from '@/assets/add-row.svg'

export default {
  name: 'Home',
  components: {
    Header,
    TranscriptionsMenu,
    TranscriptionsList,
    IconButton,
    AddIcon
  },
  computed: {
    ...mapState(['transcriptions'])
  },
  methods: {
    newItem() {
      // eslint-disable-next-line
      console.log('new');
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
</style>
