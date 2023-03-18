<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './app/components/layout/MainLayout.vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('setup');
</script>
