<template>
  <div class="flex column align-center fixed-max-width margin-center list-wrap">
    <ul v-if="!!list.length" class="list">
      <list-item
        v-for="item in list"
        :deleteAction="removeItem"
        :updateAction="updateItem"
        :item="item"
        :key="item.id"
      />
    </ul>

    <button @click="addItem" class="list-add">
      <img
        src="@/assets/add-row.svg"
        alt="Add row icon"
        title="Add a new row to the list"
        width="32"
        height="32"
      />
    </button>
  </div>
</template>

<style scoped>
.list-wrap {
  padding-top: 70px;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  background: white;
  border: 1px solid #ebeef0;
  border-radius: 2px;
  width: 100%;
}

.list-add {
  margin: 16px 0;
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
    updateItem(id: number, value: string, type: string) {
      store.dispatch(CONSTANTS.STORE.ACTIONS.UPDATE_ITEM, { id, value, type });
    },
    addItem() {
      store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
    },
  },
});
</script>
