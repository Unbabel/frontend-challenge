<script setup>
import PageHeader from "./components/base/PageHeader.vue";
import BaseLayout from "./layouts/BaseLayout.vue";
</script>

<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:header>
        <PageHeader>
          <template v-slot:actions>
            <RouterView name="PageActions"></RouterView>
          </template>
        </PageHeader>
      </template>
      <RouterView />
    </BaseLayout>
  </div>
</template>

<style scoped></style>
