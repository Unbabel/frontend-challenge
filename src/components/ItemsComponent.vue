<template>
  <transition-group name="list" tag="ul" class="items container" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <li v-for="item in items" :key="item.id" class="items__item items-item">
      <input
        type="checkbox"
        class="items-item__checkbox"
        v-model="item.checked"
      />
      <img
        src="@/assets/person.svg"
        alt="icon person"
        class="items-item__icon"
      />
      <div class="items-item__content">
        <p
          class="items-item__title"
          contenteditable="true"
          @input="item.voice = $event.target.innerText"
        >
          {{ item.voice }}
        </p>
        <p
          class="items-item__text"
          contenteditable="true"
          @input="item.text = $event.target.innerText"
        >
          {{ item.text }}
        </p>
      </div>
      <button
        class="items-item__button items-item__button--delete"
        @click="deleteItem(item.id)"
      >
        <img src="@/assets/delete.svg" aria-label="Delete item" alt="Delete" />
      </button>
    </li>
  </transition-group>
  <div class="items__wrapper">
    <button class="items__button items__button--add" @click="addNewItem">
      <img src="@/assets/add-row.svg" alt="add row button" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ["addNewItem", "deleteItem"],
  methods: {
    addNewItem() {
      this.$emit("addNewItem");
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-20px)';
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow to ensure the transition starts
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      el.style.opacity = 0;
      el.style.transform = 'translateY(-20px)';
      done();
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";

// helper blocks to avoid train of classes
.items-item {
  &__checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 2px;
    border: 2px solid #859eff;
    width: 16px;
    height: 16px;
    position: relative;
    margin: 0.313rem 1rem 0 0;

    &:checked {
      background-color: #859eff;

      &::after {
        content: "✓";
        color: white;
        position: absolute;
        left: 1px;
        top: -2px;
      }
    }
  }

  &__content {
    font-size: 1rem;
    flex: 1;
    padding-left: 0.5rem;
  }

  &__title {
    color: #566074;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  &__text {
    color: #778195;
    font-family: "Open Sans", sans-serif;
    max-width: 595px;
  }

  &__button {
    &--delete {
      opacity: 0; // instead of display: none I chose opacity change so that there's a smoother transition when hovering
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
  }
}

.items {
  background: white;
  border: 1px solid #eaedef;
  margin: 1.5rem auto;

  &__item {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    border-bottom: 1px solid #eaedef;
    transition: transform 0.5s ease, opacity 0.5s ease;

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      .items-item__button--delete {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    padding-bottom: 1.5rem;
  }
}
</style>
