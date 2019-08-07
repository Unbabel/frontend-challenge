<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Base",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
> div {
  position: relative;
  width: inherit;
}
</style>
