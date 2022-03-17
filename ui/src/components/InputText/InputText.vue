<template>
  <span>
    <component v-if="!editMode" :is="tag" :class="classes" @click="edit">
      {{ value }}
    </component>

    <span v-else class="flex align-center">
      <component
        :is="tagType"
        :class="classes"
        :value="value"
        @input="updateValue"
      />
      <button @click="save" class="save-button">Save</button>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputText",
  props: {
    tag: { type: String, required: true },
    editAction: { type: Function, required: true },
    type: { type: String, required: true },
    classes: { type: String, default: "" },
    content: { type: String, default: "" },
  },
  data() {
    return {
      tagType: this.tag === "p" ? "textarea" : "input",
      editMode: false,
      value: this.content,
    };
  },
  methods: {
    edit() {
      this.editMode = true;
    },
    updateValue(e: Event) {
      const target = e.target as HTMLInputElement;
      this.value = target.value;
    },
    save() {
      this.editMode = false;
      this.editAction(this.value, this.type);
    },
  },
});
</script>

<style scoped>
input,
textarea {
  appearance: none;
  border: 1px solid #cfcbd3;
}

textarea {
  width: 90%;
}

.save-button {
  font-size: 12px;
  margin-left: 8px;
  padding: 3px 6px;
  background: green;
  color: white;
  border-radius: 3px;
}
</style>
