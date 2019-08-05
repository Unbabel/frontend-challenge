<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <p>{{item.voice}}</p>
      <p>{{item.text}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
</style>
