<template>
  <div>
    <Header></Header>
    <section>
      <List :list-data="data"></List>
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
  data: function () {
    return {
      fetchListData: function () {
        this.$store.dispatch('fetchListData')
      }
    }
  },
  computed: {
    data () {
      return this.$store.state.list.listData
    }
  },
  created () {
    this.fetchListData()
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

section {
  width: $content-width;
  margin: $default-margin auto;
}
</style>
