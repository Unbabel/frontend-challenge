<template>
  <div class="list-item">

    <div class="left-actions">
      <div class="actions">
        <Checkbox
          :initial-value="selected"
          :id-for="id"
          @changedValue="toggleSelection"
        />
        <img src="@/assets/icons/person.svg" alt="Person icon">
      </div>
    </div>

    <div class="title">
      <TextInput
        :initial-value="voice"
        :extra-class="'headline'"
        @changedValue="saveTitle"
      />
    </div>

    <div class="right-actions">
      <div class="actions">
        <a
          href="#"
          class="btn"
          @click.prevent="removeItem"
        >
          <img src="@/assets/icons/delete.svg" alt="Trash icon">
        </a>
      </div>
    </div>

    <div class="body">
      <TextInput
        :initial-value="text"
        :extra-class="'fullwidth'"
        @changedValue="saveBody"
      />
    </div>

  </div>
</template>

<script>
import Checkbox from '@/components/inputs/Checkbox'
import TextInput from '@/components/inputs/TextInput'

export default {
  name: 'ListItem',
  components: {
    Checkbox,
    TextInput
  },
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    voice: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSelection () {
      this.$emit('toggleSelection', {
        id: this.id,
        selected: !this.selected
      })
    },
    saveTitle (value) {
      this.$store.commit('transcriptions/updateField', {
        id: this.id,
        field: 'voice',
        value: value
      })
    },
    saveBody (value) {
      this.$store.commit('transcriptions/updateField', {
        id: this.id,
        field: 'text',
        value: value
      })
    },
    removeItem () {
      this.$emit('removeItem', this.id)
    }
  }
}
</script>

<style lang="scss">
  .list-item{
    display: grid;
    grid-template-columns: 60px  auto  40px;
    grid-template-areas:
        'left title right'
        '.... content ....';
    grid-gap: .5em;
    padding: 1em;
    background: $white;
    border: 2px solid darken($gray-lighter, 1%);
    border-bottom: 0;
    border-top-right-radius: $default-border-radius;
    border-top-left-radius: $default-border-radius;
    width: auto;

    &:last-child{
      border-top: 2px solid darken($gray-lighter, 1%);
      border-bottom: 2px solid darken($gray-lighter, 1%);
      border-bottom-right-radius: $default-border-radius;
      border-bottom-left-radius: $default-border-radius;
    }

    &:hover{
      .right-actions{
        z-index: 1;
        .actions{
          opacity: 1;
          transition: opacity $default-transition-speed;
        }
      }
    }

    .left-actions, .title, .right-actions, .actions{
      display: flex;
      align-items: center;
    }

    .left-actions, .right-actions{
      justify-content: flex-start;
    }

    //  Individual grid positioning
    .left-actions{
      grid-area: left;
      .actions{
        .checkbox{
          margin-top: 0.3em;
        }
        img{
          margin-left: 1em;
        }
      }
    }

    .title{
      grid-area: title;
    }

    .right-actions{
      grid-area: right;
      z-index: -1;
      .actions{
        opacity: 0;
        transition: opacity $default-transition-speed;
      }
    }

    .body{
      grid-area: content;
      p{
        color: $gray-light;
        margin: 0;
      }
    }
  }
</style>
