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
      <input-text
        classes="font-montserrat item-title"
        :content="item.voice"
        :editAction="updateItem"
        tag="h2"
        type="voice"
      />
      <input-text
        classes="item-text"
        :content="item.text"
        :editAction="updateItem"
        tag="p"
        type="text"
      />
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

<style>
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

@media only screen and (max-width: 768px) {
  .opacity-transition {
    opacity: 1;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ListItem } from "@/store/types";
import InputCheckbox from "../InputCheckbox/InputCheckbox.vue";
import InputText from "../InputText/InputText.vue";

export default defineComponent({
  components: { InputCheckbox, InputText },
  name: "ListItem",
  props: {
    item: { type: Object as PropType<ListItem>, required: true },
    deleteAction: { type: Function, required: true },
    updateAction: { type: Function, required: true },
  },
  methods: {
    removeItem() {
      this.deleteAction(this.item.id);
    },
    updateItem(value: string, type: string) {
      this.updateAction(this.item.id, value, type);
    },
  },
});
</script>
