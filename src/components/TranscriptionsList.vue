<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <TranscriptionsListItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import TranscriptionsListItem from '@/components/TranscriptionsListItem' 

export default {
  name: 'TranscriptionsList',
  components: {
    TranscriptionsListItem
  },
  props: {
    items: Array
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 20px 0;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
</style>
