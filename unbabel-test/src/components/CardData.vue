<template>
  <div class="card-data" data-testid="container">
    <div class="checkbox-container">
      <CustomCheckbox />
    </div>
    <div class="content-container">
      <img src="@/assets/person.svg" alt="Person icon" />
      <div class="content">
        <input
          type="text"
          name="title"
          @change="updateMessageVoice"
          :value="item.voice"
          :id="'voice-id-' + item.id"
          aria-label="title"
          role="input"
        />
        <textarea
          type="text"
          name="text"
          @change="updateMessageText"
          :value="item.text"
          :id="'text-id-' + item.id"
          aria-label="text"
          role="textarea"
        />
      </div>
    </div>
    <div class="button-container">
      <CustomButton
        class="delete-btn"
        @click="deleteItem"
        label="Delete"
        icon="delete.svg"
      />
    </div>
  </div>
</template>

<script>
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import CustomButton from "@/components/CustomButton.vue";
import store from "@/store";

export default {
  name: "CardData",
  components: { CustomCheckbox, CustomButton },
  props: {
    item: {
      id: Number,
      voice: String,
      text: String,
    },
    updateMessageVoice: Function,
    updateMessageText: Function,
  },
  methods: {
    deleteItem() {
      store.commit("deleteMessage", this.item.id);
    },
  },
};
</script>

<style lang="scss">
.card-data {
  display: grid;
  grid-template-columns: 5% 80% 15%;
  align-items: flex-start;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  &:hover {
    .button-container {
      display: block;
    }
  }
  .content-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
    .content {
      display: flex;
      flex-direction: column;
      width: 90%;
      input {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        color: #566074;
        border: none;
      }
      textarea {
        font-family: Open Sans;
        font-size: 16px;
        font-weight: 400;
        color: #778195;
        border: none;
      }
    }
  }
  .checkbox-container {
    display: flex;
    justify-content: center;
    checkbox {
      width: 1rem;
      height: 1rem;
    }
  }
  .button-container {
    display: none;
    button {
      background-color: #fb2c2c;
      color: white;
      &:hover {
        background-color: #ff6464;
      }
    }
  }
}
</style>
