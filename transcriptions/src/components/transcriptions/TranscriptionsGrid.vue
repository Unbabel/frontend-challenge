// eslint-disable-file @typescript-eslint/no-explicit-any

<template>
  <main class="content">
    <div class="content-wrapper" v-if="transcriptions && transcriptions.length">
      <TranscriptionCard
        v-for="item in transcriptions"
        :item="item"
        :key="item.id"
      />
    </div>
    <TranscriptionsAdd></TranscriptionsAdd>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TranscriptionCard from "./TranscriptionCard.vue";
import TranscriptionsAdd from "./TranscriptionsAdd.vue";
import { TranscriptionList, State } from "@/types";
import { MutationTypes } from "@/store/transcriptions";
import { useStore } from "@/store";

const store = useStore();

@Options({
  components: { TranscriptionCard, TranscriptionsAdd },
})
export default class TranscriptionsGrid extends Vue {
  private transcriptions: TranscriptionList = [];
  created(): void {
    const relevantMutationTypes = [
      MutationTypes.TRANSCRIPTIONS_FETCH_SUCCESS.toString(),
      MutationTypes.TRANSCRIPTIONS_UPDATE_SUCCESS.toString(),
      MutationTypes.TRANSCRIPTIONS_ADD_ONE.toString(),
      MutationTypes.TRANSCRIPTIONS_REMOVE_ONE.toString(),
    ];
    store.subscribe((mutation, state: State) => {
      if (
        relevantMutationTypes.includes(mutation.type) &&
        state.transcriptions.data
      ) {
        this.transcriptions = state.transcriptions.data;
      }
    });
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  background: #f6f7f8;
  height: auto;
  display: grid;
  align-content: start;
  min-height: calc(100vh - 69px);

  &-wrapper {
    border: 1px solid #eaedef;
    box-sizing: border-box;
    margin: 24px auto 0 auto;
    width: 738px;
    height: auto;
    max-width: calc(100vw - 30px);
    background: #ffffff;
  }
}
</style>
