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
      type="h4"
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
        title="Delete"
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

<style lang="scss">
@import "../../assets/styles/variables.scss";

.c-list-item {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(10px, 50px) 1fr;
  border: 1px solid lighten($color: $third-color, $amount: 35%);
  background-color: white;
  padding: 20px 10px;
  gap: 0px 15px;
  align-items: flex-start;

  .c-list-item__checkbox {
    grid-column: 1 / 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-start;
    padding: $vertical-spacing;
  }
  .c-list-item__title,
  .c-list-item__title-input {
    padding: $vertical-spacing 0;
    margin: $vertical-spacing 0;
  }
  .c-list-item__title,
  .c-list-item__text {
    &:hover {
      cursor: pointer;
      padding: $vertical-spacing;
      border: $border-width solid $primary-color;
      border-radius: $border-radius;
    }
  }
  .c-list-item__title,
  .c-list-item__title-input {
    font-family: $monserrat, sans-serif;
    font-size: 16px;
    font-weight: 700;
    grid-column: 2 / 6;
    grid-row: 1;
  }
  .c-list-item__text,
  .c-list-item__text-input {
    font-family: $open-sans, sans-serif;
    font-size: 16px;
    grid-column: 2 / 6;
    grid-row: 2;
  }
  .c-list-item__delete-button {
    grid-column: 6;
    grid-row: 1;
    justify-self: center;
  }
  .c-list-item__title,
  .c-list-item__title-input,
  .c-list-item__text,
  .c-list-item__text-input {
    display: flex;
    justify-content: flex-start;
    text-align: left;
  }
}
</style>
