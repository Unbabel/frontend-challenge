<template>
  <div id="app">
    <Header/>
    <List/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import List from './components/List'

import './styles/main.scss'

export default {
  name: 'app',
  components: {
    Header,
    List
  }
}
</script>