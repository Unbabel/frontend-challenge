<template>
  <div>
    <Header @uploadData="handleDataUpload" @fetchData="handleDataFetch"></Header>
    <section>
      <List :list-data="data" @deleteData="handleDataDeletion"></List>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'

export default {
  name: 'ListView',
  components: {
    Header,
    List
  },
  methods: {
    handleDataUpload: function () {
      console.log('data upload handled!')
    },
    handleDataFetch: function () {
      this.$store.dispatch('fetchListData')
    },
    handleDataDeletion: function (ev, id) {
      console.log('data deletion handled!', id)
    }
  },
  computed: {
    data () {
      return this.$store.state.list.listData
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
