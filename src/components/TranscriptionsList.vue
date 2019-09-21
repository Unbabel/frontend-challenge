<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
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
  margin: 0 0 20px;
  padding: 0;
  background: #FFF;
  border: 1px solid #e6e6e6;
}
li {
  padding: 20px;
}
li + li{
  border-top: 1px solid #e6e6e6;
}
</style>
