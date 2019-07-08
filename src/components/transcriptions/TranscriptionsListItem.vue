<template>
  <div class="list-item-content">
    <Checkbox :id="item.id" class="checkbox"></Checkbox>
    <i class="person"></i>
    <div class="text-container">
      <EditableText v-model="item.voice" :custom-class="'voice'"></EditableText>
      <EditableText v-model="item.text" :custom-class="'text'" :type="'multiline'"></EditableText>
    </div>
    <i class="delete" v-on:click="deleteData(item.id)"></i>
  </div>
</template>

<script>
import Checkbox from '@/components/ui/Checkbox.vue'
import EditableText from '@/components/ui/EditableText.vue'

export default {
  name: 'TranscriptionsListItem',
  props: {
    item: Object
  },
  components: {
    Checkbox,
    EditableText
  },
  methods: {
    deleteData: function (id) {
      this.$store.dispatch('deleteListData', id)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.list-item-content {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: $default-padding 53px $default-padding $default-padding;

  &:hover i.delete {
    visibility: visible;
    opacity: 1;
  }

  i {
    display: block;

    &.person {
      background: url('~@/assets/images/person.svg') center / cover no-repeat;
      width: 26px;
      height: 26px;
      margin-right: 8px;
      flex-shrink: 0;
    }

    &.delete {
      position: absolute;
      top: $default-margin;
      right: $default-margin;
      width: 16px;
      height: 20px;
      background: url('~@/assets/images/delete.svg') center / cover no-repeat;
      cursor: pointer;
      visibility: hidden;
      opacity: 0;
      transition: opacity $default-time $default-easing;
    }
  }

  .text-container {
    width: 100%;
  }
}
</style>
