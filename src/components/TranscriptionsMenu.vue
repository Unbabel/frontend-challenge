<template>
  <div>
    <ul>
      <li>
        <IconButton title="Upload data" v-bind:onClick="uploadData">
          <UploadIcon />
        </IconButton>
      </li>
      <li>
        <IconButton title="Get data" v-bind:onClick="loadData">
          <FetchIcon />
        </IconButton>
      </li>
    </ul>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton' 
import UploadIcon from '@/assets/upload.svg'
import FetchIcon from '@/assets/fetch-document.svg'

export default {
  name: 'TranscriptionsMenu',
  components: {
    IconButton,
    UploadIcon,
    FetchIcon
  },
  methods: {
    uploadData() {
      // eslint-disable-next-line
      console.log('upload')
    },
    loadData() {
      // eslint-disable-next-line
      console.log('load')
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
}

li {
  display: inline-block;
}
</style>
