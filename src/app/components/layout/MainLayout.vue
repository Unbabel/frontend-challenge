<template>
  <div class="main-layout">
    <NavBar />
    <div class="main-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Main Layout
 *
 * Will display the `Navbar` on top and a page body bellow
 *
 * Slots:
 *  default - body content
 */
import NavBar from './NavBar.vue';
</script>

<stlye lang="scss" scoped>
.main-layout {
  display: grid;
  grid-row: 1fr min-content;

  .main-body {
    width: $main-block-width;
    margin: auto;
    margin-top: 1rem;

    @media screen and (max-width: $main-block-width) {
      width: 90%;
    }
  }
}
</stlye>
