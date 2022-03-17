<template>
  <router-view />
</template>

<style>
body {
  background: #f6f7f8;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #778195;
}

button {
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.25s opacity;
}
button:hover {
  opacity: 1;
}

.font-open-sans {
  font-family: "Open Sans", sans-serif;
}

.font-montserrat {
  font-family: "Montserrat", sans-serif;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.column {
  flex-direction: column;
}

.align-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}
.justify-center {
  justify-content: center;
}

.fixed-max-width {
  max-width: 738px;
}

.margin-center {
  margin: 0 auto;
}

.opacity-transition {
  opacity: 0;
  transition: 0.25s opacity;
}
</style>
