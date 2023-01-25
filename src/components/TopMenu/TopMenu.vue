<template>
  <nav class="qa-top-menu c-top-menu">
    <div class="c-top-menu__inner-container">
      <Title :text="title" type="h1" />
      <div class="c-top-menu__content">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script>
import Title from "@/components/Title/Title.vue";

export default {
  name: "TopMenu",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components: {
    Title,
  },
};
</script>
