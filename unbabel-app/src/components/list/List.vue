<template>
  <div class="list">
    <ListItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :voice="item.voice"
      :text="item.text"
    />
  </div>
</template>

<script>
import ListItem from '@/components/list/ListItem'

export default {
  name: 'List',
  components: {
    ListItem
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.$store
      .dispatch('transcripts/GET_TRANSCRIPTS')
      .then(res => {
        this.items = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss">
  .list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 95vw;

    @include from($mobile) {
      max-width: 80vw;
    }
  }
</style>
