<template>
  <div>
    <input type="checkbox" />
    <i>person</i>
    <div>
      <input type="text" v-model="item.voice" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="item.text"
      ></textarea>
    </div>
    <button v-on:click="deleteItem(item.id)">delete</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "ListItem",

  props: {
    item: {
      required: true,
      type: Object
    }
  },

  methods: mapMutations("transcriptions", {
    deleteItem: MUTATIONS.DELETE
  })
};
</script>

<style scoped lang="scss"></style>
