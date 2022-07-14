import { State } from "@/types";
import { Options, Vue } from "vue-class-component";
import { useStore } from "@/store";

@Options({})
export default class TranscriptionsBaseComponent extends Vue {
  isButtonDisabled = false;
  store = useStore();

  setButtonDisabledStatus(isDisabled: boolean) {
    this.isButtonDisabled = isDisabled;
  }

  sendAnalytics(action: string, event: string, payload?: number | string) {
    // TODO: implement proper analytics
    console.log(
      `submit analytics: action: ${action} event: ${event} payload: ${
        payload || ""
      }`
    );
  }

  setupActionListener() {
    this.store.subscribe((mutation, state: State) => {
      this.setButtonDisabledStatus(
        state.transcriptions.isFetching ||
          state.transcriptions.isUpdating ||
          state.transcriptions.isAdding ||
          state.transcriptions.isRemoving
      );
    });
  }
}
