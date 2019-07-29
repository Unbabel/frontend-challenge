<template>
  <header>
    <NavigationComponent />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationComponent from '../components/Navigation-component/Navigation-component.vue';

@Component({
  components: {
    NavigationComponent
  }
})

export default class TranscriptionList extends Vue {}
</script>
