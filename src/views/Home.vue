<script lang="ts">
import Header from '@/components/Header.vue';
import ListItems from '@/components/ListItems.vue';
import { Options, Vue } from 'vue-class-component';


@Options({
  components: {
    Header,
    ListItems
  },
})
export default class Home extends Vue {
}
</script>

<template>
  <div>
    <Header />
    <ListItems /> 
  </div>
</template>

<style>
</style>
