<template>
  <ul
    v-if="!!list.length"
    class="flex column fixed-max-width margin-center list"
  >
    <list-item
      v-for="item in list"
      :deleteAction="removeItem"
      :item="item"
      :key="item.id"
    />
  </ul>
</template>

<style scoped>
.list {
  list-style-type: none;
  padding: 0;
  margin-top: 24px;
  background: white;
  border: 1px solid #ebeef0;
  border-radius: 2px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { CONSTANTS } from "@/utils/constants";
import { List } from "@/store/types";
import ListItem from "@/components/ListItem/ListItem.vue";

export default defineComponent({
  components: { ListItem },
  name: "ListContainer",
  computed: {
    list: (): List[] => store.getters.list,
  },
  methods: {
    removeItem(id: number) {
      store.dispatch(CONSTANTS.STORE.ACTIONS.REMOVE_ITEM, id);
    },
  },
});
</script>
