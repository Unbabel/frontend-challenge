<template>
  <main class="app-view">
    <section class="padding-all text-center">
      <h2>Ooops!</h2>
      <div>Seems like this page does not exist.</div>
      <RouterLink class="caption" :to="{ name: 'home' }">
        Redirect to home screen
      </RouterLink>
    </section>
  </main>
</template>
