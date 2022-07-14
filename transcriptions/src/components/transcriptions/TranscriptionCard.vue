<template>
  <div class="grid item">
    <label
      class="checkbox-wrapper"
      role="checkbox"
      aria-label="checkbox"
      :aria-checked="checked"
    >
      <input type="checkbox" :checked="checked" />
      <span></span>
    </label>
    <img
      src="@/assets/person.svg"
      height="26"
      width="26"
      alt="Person icon"
      title="Profile picture"
      role="presentation"
    />
    <div class="input-fields">
      <h2
        class="item-title"
        name="voice"
        placeholder="Enter voice..."
        aria-label="Voice"
        contentEditable="true"
        @input="onInput"
      >
        {{ item.voice }}
      </h2>
      <p
        class="item-text"
        name="text"
        placeholder="Enter text..."
        aria-label="Text"
        contentEditable="true"
        @input="onInput"
      >
        {{ item.text }}
      </p>
    </div>
    <div class="item-action">
      <button
        type="button"
        class="btn-remove"
        aria-label="delete transcription"
        @click="deleteTranscription"
        :disabled="isButtonDisabled"
      >
        <img
          src="@/assets/delete.svg"
          width="16"
          height="20"
          alt="Delete icon"
          title="Delete transcription"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import { Transcription } from "@/types";
import { MutationTypes } from "@/store/transcriptions";
import TranscriptionsBaseComponent from "@/mixins/TranscriptionsBaseComponent";

@Options({
  props: ["item"],
})
export default class TranscriptionCard extends TranscriptionsBaseComponent {
  private checked = true;
  item!: Transcription;

  created() {
    this.setupActionListener();
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    this.sendAnalytics("click", "toggle transcription", this.item.id);
  }

  onInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const fieldName = target.getAttribute("name");
    const fieldValue = target.innerText || "";
    if (fieldName) {
      this.store.commit(MutationTypes.TRANSCRIPTIONS_SET_FIELD, {
        id: this.item.id,
        fieldName,
        fieldValue,
      });
    }
  }

  deleteTranscription() {
    const id = this.item.id;
    this.sendAnalytics("click", "delete transcription", id);
    this.store.commit(MutationTypes.TRANSCRIPTIONS_REMOVE_START, id);
    setTimeout(() => {
      this.store.commit(MutationTypes.TRANSCRIPTIONS_REMOVE_ONE, id);
    }, 150); // TODO: fake timeout to show that actions are disabled during removal
  }
}
</script>

<style scoped lang="scss">
.item {
  display: grid;
  grid-template-columns: 40px 40px 1fr 40px;
  padding: 15px;
  border-top: 1px solid #ebeef0;
}
.item:nth-of-type(1) {
  border-top: 0;
}
.item-action {
  min-width: 20px;
}
.item-copy {
  width: 100%;
}
.input-fields {
  margin-top: -5px; /* compensate padding on contenteditable input */
}
.item-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #566074;
  letter-spacing: 0;
  margin: 0;
  padding: 10px;
  text-align: left;
  outline-color: #859eff;
}
.item-text {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #778195;
  letter-spacing: 0;
  text-align: left;
  grid-column: 3;
  margin: 0;
  padding: 10px;
  line-height: 1.4rem;
  outline-color: #859eff;
}
[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  position: absolute;
  color: #999999;
  background-color: transparent;
}

.checkbox-wrapper {
  width: 16px;
  height: 16px;
  margin: 0 8px;
  span {
    display: inline-block;
    border: 0;
    border-radius: 2px;
    width: 16px;
    height: 16px;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + *::before {
    content: "";
    display: inline-block;
    background: #ffffff;
    color: #ffffff;
    border: 2px solid #859eff;
    border-radius: 2px;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
  }
  input[type="checkbox"]:checked + *::before {
    content: "✓";
    background: #859eff;
  }
}

button:disabled > img {
  opacity: 0.4;
  cursor: progress;
}

.btn-remove {
  background: transparent;
  color: #bfc4ce;
  opacity: 0;
  border: 0;
  outline: none;
  padding: 5px;
}

.item:hover .btn-remove {
  opacity: 1;
}
@media only screen and (max-width: 768px) {
  .btn-remove {
    opacity: 1;
  }
}
</style>
