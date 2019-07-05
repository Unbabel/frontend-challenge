<template>
  <div>
    <ul>
      <li v-for="item in listData" :key="item.id">
        <input type="checkbox" :id="item.id">
        <label :for="item.id"></label>
        <i class="person"></i>
        <div>
          <h2>{{ item.voice }}</h2>
          <p>{{ item.text }}</p>
        </div>
        <i class="delete" v-on:click="deleteData(item.id)"></i>
      </li>
    </ul>
    <i class="add-row"></i>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'

export default {
  name: 'Header',
  props: {
    listData: Array
  },
  methods: {
    deleteData: function (id) {
      console.log('delete', id)
      this.$emit('deleteData', id)
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

    input {
      display: none;
    }

    label {
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 2px solid $checkbox-border-color;
      flex-shrink: 0;
      cursor: pointer;
      position: relative;
      margin: 5px 16px 0 0;

      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 1px;
        width: 11px;
        height: 8px;
        z-index: 1;
        background: url('/images/check-mark.svg') center / cover no-repeat;
        display: none;
      }
    }

    input:checked + label {
      background-color: $checkbox-border-color;

      &::before {
        display: block;
      }
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

    div {

      h2 {
        @include list-title;
        margin: 5px 0 8px 0;
      }

      p {
        @include list-text;
      }
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
