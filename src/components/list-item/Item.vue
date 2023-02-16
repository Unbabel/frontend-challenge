<script setup>
// Components
import ItemTitle from './item-title/ItemTitle.vue';
import ItemBody from './item-body/ItemBody.vue';
import Checkbox from '../checkbox/Checkbox.vue';

defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  }
});


</script>

<template>
  <table class="custom-table">
    <tr>
      <td>
        <Checkbox />
      </td>
      <td>
        <img src="src/assets/person.svg" alt="person-icon" />
      </td>
      <td>
        <ItemTitle :text="title" />
      </td>
    </tr>
    <tr>
      <td />
      <td />
      <td>
        <ItemBody :content="content" />
      </td>
    </tr>
  </table>

</template>

<style scoped lang="scss">
@use '../../assets/main.css';

.custom-table {
  width: 100%;
}

td:nth-child(1) {
  padding-right: 1rem;
}

td:nth-child(2) {
  @extend .flex-center;

  padding-right: 0.5rem;
}

tr>td {
  padding-bottom: 0.5em;
}

tr td:last-child {
  width: 100%;
  white-space: nowrap;
}
</style>
