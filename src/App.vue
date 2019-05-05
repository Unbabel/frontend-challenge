<template>
  <div id="app">
    <NavbarMenu @uploadData="uploadData" @getData="getData"/>
    <ListContent :listData="listData" @addItem="addItem"/>
  </div>
</template>

<script>
import axios from 'axios';
import NavbarMenu from './components/NavbarMenu.vue';
import ListContent from './components/ListContent.vue';

const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
});

export default {
  name: 'app',
  components: {
    NavbarMenu,
    ListContent,
  },
  data() {
    return {
      listData: [],
    };
  },
  methods: {
    async getData() {
      const response = await api.get();
      this.listData = response.data;
    },

    async uploadData() {
      api.post(this.listData);
    },

    addItem() {
      this.listData.push({
        id: Date.now(),
        voice: '',
        text: '',
      });
    },
  },
};
</script>

<style lang="scss">
@import "assets/style/main.scss";
</style>
