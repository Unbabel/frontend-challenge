<template>
    <div id="app">
      <section class="app-border">
        <chall></chall>
      </section>
    </div>
</template>

<script>

  import chall from './components/chall'

  export default {
    name: 'App',
    components: {
      chall
    }
  }
</script>

<style>

  body {
    background-color: #F6F7F8;
    background-size: cover;
  }

  .app-border{
    margin: 5% 10% 10% 10%;
    -webkit-box-shadow: 0px 0px 32px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 32px -11px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 32px -11px rgba(0,0,0,0.75);
  }

</style>
