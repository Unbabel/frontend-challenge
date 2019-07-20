<template>
  <div id="app">
    <Header @get-data="getData" @upload-data="uploadData"/>
    <List :items="items" @edit-item="editItem"/>
    <button @click="addItem">
        <img src="./assets/add-row.svg" aria-hiden="true">
        <span class="sr-only">Add row</span>
    </button>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import List from './components/List'

const URL = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';
import axios from'axios';

import './styles/main.scss'

export default {
  name: 'app',
  data: () => {
    return {
      items: []
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: new Date().getTime(),
        voice: "Add yout title here...",
        text: "Add yout hiper awesome content here..."
      })
    },
    editItem(newItem) {
      this.items = [...this.items, newItem]
    },
    getData() {
      axios(URL)
        .then(res => this.items = res.data)
        .catch(error => console.error('Error getting data: ', error))
    },
    uploadData() {
      axios(URL, this.items)
        .then(res => console.log('Data added with sucess!'))
        .catch(error => console.error('Error getting data: ', error))
    },

  },
  components: {
    Header,
    List
  }
}
</script>

<style lang="scss" scoped>
  button {
    display: block;
    margin: 1rem auto;
  }
</style>
