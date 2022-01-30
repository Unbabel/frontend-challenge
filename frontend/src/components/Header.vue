<template>
  <div class="container">
    <div class="container-max-width container-line">
      <div class="title">{{ $t('transcriptions.title') }}</div>
      <div class="actions">
        <LocaleSelector/>
        <UploadSvg @click="upload()" />
        <FetchSvg @click="fetch()" />
      </div>
    </div>
  </div>
</template>

<script>

import iconsMixin from '@/mixins/iconsMixin.js'
import { mapActions, mapState } from 'vuex'
import LocaleSelector from '@/components/LocaleSelector.vue'

export default {
  name: 'Header',
  components: {
    LocaleSelector
  },
  mixins: [iconsMixin],
  computed: {
     ...mapState(["rows"])
  },
  methods: {
     ...mapActions(['setRows', 'errorLoadingData']),
     async fetch(){
      try {
        const { data } = await this.$axios.get(process.env.VUE_APP_FETCH_URL)
        this.setRows(data)
      } catch (e) {
        this.errorLoadingData(e)
      }
    },
    async upload(){
      try {
        await this.$axios.post(process.env.VUE_APP_UPLOAD_URL, this.rows)
      } catch (e) {
         this.errorLoadingData(e)
      }
    }
  } 
}
</script>

<style scoped>
.title{
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: medium;
  color: #414C5E;
  flex-grow: 1;
  padding: 20px;
}
.container-line {
  display: flex;
}
.container {
  background: white;
  border-bottom: 2px solid #E0E0E0;
}
.actions{
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 20px;
}
.actions > svg {
  margin-left: 20px;
  cursor: pointer;
}
</style>
