<template>
  <div class="header">
    <div class="container">
      <h1>{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header {
  background: #FFF;
  box-shadow: 0 1px 3px 0 #CCC;
}

.container {
  display: flex;
  max-width: 960px;
  flex: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
}

h1 {
  margin: 0;
  font: 18px "Montserrat", Arial, sans-serif;
  font-weight: 500;
  color: #414C5E;
}
</style>
