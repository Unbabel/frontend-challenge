<template>
  <div class="layout">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/navigation/Menu'

export default {
  name: 'BaseLayout',
  components: {
    Menu
  }
}
</script>
