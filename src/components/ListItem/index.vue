<template>
  <article>
    <Checkbox :id="item.id" />
    <div>
      <i>person</i>
      <form :action="updateItem">
        <EditableInput type="text" :item="item" v-on:change="updateItem()" />
        <EditableInput type="multiline" :item="item" />
      </form>
    </div>
    <button v-on:click="deleteItem(item.id)">delete</button>
  </article>
</template>

<script>
import { mapMutations } from "vuex";

import Checkbox from "@/components/ui/Checkbox";
import EditableInput from "@/components/ui/EditableInput";

import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "ListItem",

  components: {
    Checkbox,
    EditableInput
  },

  props: {
    item: {
      required: true,
      type: Object
    }
  },

  methods: mapMutations("transcriptions", {
    deleteItem: MUTATIONS.DELETE,
    updateItem: MUTATIONS.UPDATE
  })
};
</script>

<style scoped lang="scss">
article {
  border-bottom: 1px solid $color-transcription-border;
  background-color: $color-white;
  padding: $rules-gutter;
  display: flex;
  align-items: flex-start;

  input[type="checkbox"] {
    margin-right: 1rem;
  }
  > div:nth-child(2) {
    margin-right: 1rem;
    display: flex;
    width: 100%;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    i {
      margin-right: 0.5rem;
    }
  }
  button {
    visibility: hidden;
  }
  &:hover button {
    visibility: visible;
  }
}
</style>
