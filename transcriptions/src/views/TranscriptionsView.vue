<template>
  <TranscriptionsToolbar></TranscriptionsToolbar>
  <TranscriptionsGrid></TranscriptionsGrid>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TranscriptionsToolbar from "@/components/transcriptions/TranscriptionsToolbar.vue";
import TranscriptionsGrid from "@/components/transcriptions/TranscriptionsGrid.vue";
@Options({
  components: { TranscriptionsToolbar, TranscriptionsGrid },
})
export default class TranscriptionsView extends Vue {}
</script>
