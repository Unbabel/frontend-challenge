<template>
  <li class="grid item">
    <input-checkbox />
    <img
      src="@/assets/person.svg"
      height="26"
      width="26"
      alt="Person icon"
      title="Profile picture"
    />
    <span>
      <h2 class="font-montserrat item-title">{{ item.voice }}</h2>
      <p class="item-text">{{ item.text }}</p>
    </span>
    <div class="opacity-transition item-action">
      <button type="button" @click="removeItem">
        <img
          src="@/assets/delete.svg"
          width="16"
          height="20"
          alt="Delete icon"
          title="Delete item from the list"
        />
      </button>
    </div>
  </li>
</template>

<style scoped>
.item {
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: 12px;
  border-bottom: 1px solid #ebeef0;
  padding: 24px;
}

.item-action {
  min-width: 20px;
}

.item-title {
  font-weight: 600;
  font-size: 1rem;
  color: #566074;
  line-height: 1.7;
}

.item-text {
  font-size: 1rem;
  color: #778195;
}

.item:hover .opacity-transition {
  opacity: 1;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ListItem } from "@/store/types";
import InputCheckbox from "../InputCheckbox/InputCheckbox.vue";

export default defineComponent({
  components: { InputCheckbox },
  name: "ListItem",
  props: {
    item: { type: Object as PropType<ListItem>, required: true },
    deleteAction: { type: Function, required: true },
  },
  methods: {
    removeItem() {
      this.deleteAction(this.item.id);
    },
  },
});
</script>
