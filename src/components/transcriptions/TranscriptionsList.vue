<template>
  <div>
    <ul>
      <li v-for="item in listData" :key="item.id">
        <TranscriptionsListItem :item="item"></TranscriptionsListItem>
      </li>
    </ul>
    <i class="add-row" v-on:click="addNewData"></i>
  </div>
</template>

<script>
import TranscriptionsListItem from '@/components/transcriptions/TranscriptionsListItem.vue'

export default {
  name: 'TranscriptionsList',
  props: {
    listData: {
      required: true,
      type: Array
    }
  },
  components: {
    TranscriptionsListItem
  },
  methods: {
    addNewData: function () {
      this.$store.dispatch('addNewTranscription')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

ul {
  list-style: none;
  margin: 0 0 $default-margin 0;
  padding: 0 $default-padding;

  li {
    position: relative;
    margin: 0;
    background-color: #FFFFFF;
    border-top: 1px solid $list-border-color;
    border-right: 1px solid $list-border-color;
    border-left: 1px solid $list-border-color;

    &:last-child {
      border-bottom: 1px solid $list-border-color;
    }
  }
}

i.add-row {
  background: url('~@/assets/images/add-row.svg') center / cover no-repeat;
  width: 32px;
  height: 32px;
  margin: 0 auto $default-margin auto;
  display: block;
  cursor: pointer;
}
</style>
