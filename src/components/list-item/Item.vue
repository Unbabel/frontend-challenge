<script>
// Store
import { mapActions } from 'vuex';

// Components
import ItemTitle from './item-title/ItemTitle.vue';
import ItemBody from './item-body/ItemBody.vue';
import Checkbox from '../checkbox/Checkbox.vue';
import IconButton from '../icon-button/IconButton.vue';

export default {
  components: {
    ItemTitle,
    ItemBody,
    Checkbox,
    IconButton
  },
  props: {
    itemId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  methods: {
    onDeleteCallback() {
      this.deleteListItem(this.itemId);
    },
    ...mapActions({
      deleteListItem: 'deleteListItem'
    })
  },
  data() {
    return {
      showDeleteBtn: false,
    }
  }
}

</script>

<template>
  <div class="item-container" @mouseover="showDeleteBtn = true" @mouseleave="showDeleteBtn = false">
    <div class="item-cell-1">
      <Checkbox :id="itemId" />
      <div class="m" />
      <img src="src/assets/person.svg" alt="person-icon" />
      <div class="half-m" />
      <div class="item-title-wrapper">
        <ItemTitle :text="title" />
      </div>
      <span class="delete-span" :class="showDeleteBtn && 'visible'">
        <IconButton icon="src/assets/delete.svg" @onClickCallback="onDeleteCallback" />
      </span>
    </div>
    <div class="item-cell-2">
      <ItemBody :content="content" />
    </div>
  </div>
</template>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.item-cell-1 {
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-cell-2 {
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 4.3rem;
  padding-right: 2rem;
}

.item-title-wrapper {
  width: 100%;
  padding-top: 0.2rem;
}

.m {
  margin-right: 1rem;
}

.half-m {
  margin-right: 0.5rem;
}

.visible {
  visibility: visible !important;
}

.delete-span {
  width: 100%;
  text-align: end;
  visibility: hidden;
}

@media (max-width: 768px) {
  .item-cell-2 {
    padding: 0;
  }
}
</style>
