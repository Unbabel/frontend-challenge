<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Montserrat-Medium";
  src: local("Montserrat-Medium"),
    url(./assets-for-challenge/fonts/Montserrat-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-SemiBold";
  src: local("Montserrat-SemiBold"),
    url(./assets-for-challenge/fonts/Montserrat-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "OpenSans-Regular";
  src: local("OpenSans-Regular"),
    url(./assets-for-challenge/fonts/OpenSans-Regular.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
