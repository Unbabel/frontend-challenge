<template>
  <section class="qa-list c-list">
    <ul class="qa-list__list c-list__list">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        @delete="$emit('delete', item)"
      />
    </ul>
    <Button @click="$emit('add')" icon="add-row" />
  </section>
</template>

<script>
import ListItem from "@/components/ListItem/ListItem.vue";
import Button from "@/components/Button/Button.vue";

export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ListItem,
    Button,
  },
};
</script>
