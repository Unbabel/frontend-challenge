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
    <Title :text="item.voice" type="h3" class="c-list-item__title" />
    <p class="qa-list-item__text c-list-item__text">{{ item.text }}</p>
    <Button
      v-if="isHovered"
      class="c-list-item__delete-button"
      icon="delete"
      @click="$emit('delete', item)"
    />
  </li>
</template>

<script>
import Title from "@/components/Title/Title.vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import Button from "@/components/Button/Button.vue";
import Icon from "@/components/Icon/Icon.vue";

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
    };
  },
  components: {
    Title,
    Checkbox,
    Button,
    Icon,
  },
};
</script>
