<template>
  <span>
    <component v-if="!editMode" :is="tag" :class="classes" @click="edit">
      {{ value }}
    </component>

    <span v-else class="flex align-center">
      <component
        ref="editInput"
        :is="tagType"
        :class="classes"
        :value="value"
        @input="updateValue"
      />
      <button @click="save" :disabled="!value.length" class="save-button">
        Save
      </button>
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
      editMode: !this.content,
      value: this.content,
    };
  },
  methods: {
    focusInput() {
      // Delay the focus() because the component is not present yet
      setTimeout(() => {
        if (this.$refs.editInput) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this.$refs as any).editInput.focus();
        }
      }, 100);
    },
    edit() {
      this.editMode = true;
      this.focusInput();
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
  margin-top: -1px;
  height: 80px;
}

.save-button {
  font-size: 12px;
  margin-left: 8px;
  padding: 3px 6px;
  background: green;
  color: white;
  border-radius: 3px;
}

.save-button:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
