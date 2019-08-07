<template>
  <article>
    <Checkbox :id="item.id" />
    <div class="form">
      <Icon :name="`person`" :width="26" :height="26" />
      <form :action="updateItem">
        <EditableInput :item="item" />
        <EditableTextarea type="multiline" :item="item" />
      </form>
    </div>
    <button v-on:click="deleteItem(item.id)">
      <Icon :name="`delete`" :width="16" :height="20" />
    </button>
  </article>
</template>

<script>
import { mapMutations } from "vuex";

import Checkbox from "@/components/ui/Checkbox";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextarea from "@/components/ui/EditableTextarea";
import Icon from "@/components/ui/Icon";

import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "ListItem",

  components: {
    Checkbox,
    EditableInput,
    EditableTextarea,
    Icon
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

  > label {
    top: 5px;
    margin-right: 16px;
    flex-shrink: 1;
  }

  .form {
    margin-right: 1rem;
    display: flex;
    width: 100%;

    span {
      margin-right: 8px;
    }

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
