<template>
  <div>
    <Header title="Transcriptions">
      <TranscriptionsMenu />
    </Header>
    <div class="container">
      <TranscriptionsList :items="transcriptions" />
      <IconButton title="Add item" :onClick="newItem">
        <AddIcon />
      </IconButton>
    </div>
  </div>
</template>

<script>
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
    transcriptions() {
      return [
        {
          title: "Item 1",
          description: "test"
        },
        {
          title: "Item 2",
          description: "test"
        }
      ]
    }
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
}
</style>
