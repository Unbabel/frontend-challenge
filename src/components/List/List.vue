<template>
  <section class="qa-list c-list">
    <ul v-if="list.length > 0" class="qa-list__list c-list__list">
      <Transition-group name="list" appear>
        <ListItem v-for="item in list" :key="item.id" :item="item" />
      </Transition-group>
    </ul>
    <Title v-else text="Nothing to display" type="h5" />
    <Button title="Add" @click="$emit('add')" icon="add-row" />
  </section>
</template>

<script>
import ListItem from "@/components/ListItem/ListItem.vue";
import Button from "@/components/Button/Button.vue";
import Title from "@/components/Title/Title.vue";

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
    Title,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";

.c-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  .c-list__list {
    padding: 0;
  }
}
</style>
