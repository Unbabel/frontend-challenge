<template>
  <ul>
    <li v-for="item in listData" :key="item.id">
      {{ item.id }}
    </li>
  </ul>
</template>

<script>
// import Header from '@/components/Header.vue'

export default {
  name: 'Header',
  props: {
    listData: Array
  },
  mounted: function () {
    console.log('listData', this.listData)
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: $default-padding;
    background-color: #FFFFFF;
    border-top: 1px solid $border-color;
    border-right: 1px solid $border-color;
    border-left: 1px solid $border-color;

    &:last-child {
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>
