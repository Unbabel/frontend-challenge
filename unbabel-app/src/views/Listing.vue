<template>
  <div class="container">
    <List />
  </div>
</template>

<script>
import List from '@/components/list/List'

export default {
  name: 'Listing',
  components: {
    List
  }
}
</script>

<style lang="scss">
  .container{
    width: 100%;
    margin-top: 1.5em;
  }
</style>
