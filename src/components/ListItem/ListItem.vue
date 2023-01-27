<template>
  <li
    :title="item.voice"
    class="qa-list-item c-list-item"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="c-list-item__checkbox">
      <Checkbox @change="$emit('select')" />
      <Icon name="person" />
    </div>
    <Title
      v-if="editMode.title === false"
      :text="item.voice"
      type="h3"
      class="c-list-item__title"
      @dblclick.native="editMode.title = true"
    />
    <TextInput
      v-else
      type="text"
      class="c-list-item__title-input"
      :text="editableItem.voice"
      @input="(value) => (editableItem.voice = value)"
      @keydown.enter.native="updateTitle"
    />
    <p
      v-if="editMode.text === false"
      class="qa-list-item__text c-list-item__text"
      @dblclick="editMode.text = true"
    >
      {{ item.text }}
    </p>
    <TextArea
      v-else
      class="qa-list-item__text-inpu c-list-item__text-input"
      :text="editableItem.text"
      @input="(value) => (editableItem.text = value)"
      @keydown.enter.native="updateText"
    />
    <Transition appear>
      <Button
        v-if="isHovered"
        class="c-list-item__delete-button"
        icon="delete"
        @click="DELETE_ITEM(item)"
      />
    </Transition>
  </li>
</template>

<script>
import Title from "@/components/Title/Title.vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import Button from "@/components/Button/Button.vue";
import Icon from "@/components/Icon/Icon.vue";
import TextInput from "@/components/TextInput/TextInput.vue";
import TextArea from "@/components/TextArea/TextArea.vue";

import { mapActions } from "vuex";

export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isHovered: false,
      editableItem: {
        voice: "",
        text: "",
      },
      editMode: {
        title: false,
        text: false,
      },
    };
  },
  methods: {
    ...mapActions("list/", ["DELETE_ITEM", "UPDATE_ITEM"]),
    update() {
      let updatedItem = { ...this.item, ...this.editableItem };
      this.UPDATE_ITEM(updatedItem);
    },
    updateTitle() {
      this.editMode.title = false;
      this.update();
    },
    updateText() {
      this.editMode.text = false;
      this.update();
    },
  },
  created() {
    this.editableItem = { ...this.editableItem, ...this.item };
  },
  components: {
    Title,
    Checkbox,
    Button,
    Icon,
    TextInput,
    TextArea,
  },
};
</script>
