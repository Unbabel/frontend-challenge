<template>
  <div>
    <ul>
      <li v-for="item in listData" :key="item.id">
        <Checkbox :id="item.id"></Checkbox>
        <i class="person"></i>
        <div class="text-container">
          <EditableText v-model="item.voice" :custom-class="'voice'"></EditableText>
          <EditableText v-model="item.text" :custom-class="'text'" :type="'multiline'"></EditableText>
        </div>
        <i class="delete" v-on:click="deleteData(item.id)"></i>
      </li>
    </ul>
    <i class="add-row" v-on:click="addNewData"></i>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue'
import EditableText from '@/components/EditableText.vue'

export default {
  name: 'Header',
  props: {
    listData: Array
  },
  components: {
    Checkbox,
    EditableText
  },
  methods: {
    deleteData: function (id) {
      this.$emit('deleteData', id)
    },
    addNewData: function () {
      this.$emit('addData')
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
    padding: $default-padding 53px $default-padding $default-padding;
    background-color: #FFFFFF;
    border-top: 1px solid $list-border-color;
    border-right: 1px solid $list-border-color;
    border-left: 1px solid $list-border-color;
    display: flex;
    flex-flow: row nowrap;

    &:last-child {
      border-bottom: 1px solid $list-border-color;
    }

    &:hover i.delete {
      visibility: visible;
      opacity: 1;
    }

    i {
      &.person {
        background: url('/images/person.svg') center / cover no-repeat;
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
        background: url('/images/delete.svg') center / cover no-repeat;
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
}

i.add-row {
  background: url('/images/add-row.svg') center / cover no-repeat;
  width: 32px;
  height: 32px;
  margin: 0 auto $default-margin auto;
  display: block;
  cursor: pointer;
}
</style>
