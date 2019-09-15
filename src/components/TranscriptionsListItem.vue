<template>
  <div>
    {{ item.title }} - 
    {{ item.description }}
  </div>
</template>

<script>
export default {
  name: 'TranscriptionsListItem',
  components: {
  },
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>
