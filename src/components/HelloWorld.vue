<template>
  <div class="hello d-flex flex-column">
    <div class="waviy">
      <span style="--i: 1">T</span>
      <span style="--i: 2">A</span>
      <span style="--i: 3">B</span>
      <span style="--i: 4">A</span>
      <span style="--i: 5">S</span>
      <span style="--i: 6">S</span>
      <span style="--i: 7">U</span>
      <span style="--i: 8">M'</span>
      <span style="--i: 1" class="mr-3">S</span>

      <span style="--i: 2">C</span>
      <span style="--i: 3">O</span>
      <span style="--i: 4">D</span>
      <span style="--i: 5">I</span>
      <span style="--i: 6">N</span>
      <span style="--i: 7" class="mr-3">G</span>

      <span style="--i: 1">C</span>
      <span style="--i: 2">H</span>
      <span style="--i: 3">A</span>
      <span style="--i: 4">L</span>
      <span style="--i: 5">L</span>
      <span style="--i: 6">E</span>
      <span style="--i: 7">N</span>
      <span style="--i: 8">G</span>
      <span style="--i: 1">E</span>
    </div>
    <div class="mt-5 pt-5 view-challenge-button-container">
      <router-link to="/viewChallenge" custom v-slot="{ navigate }">
        <div @click="navigate" @keypress.enter="navigate" role="link">
          <div class="box-1">
            <div class="btn btn-one">
              <span>VIEW</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
