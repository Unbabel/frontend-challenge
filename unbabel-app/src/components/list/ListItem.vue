<template>
  <div class="list-item">

    <div class="left-actions">
      <div class="actions">
        <Checkbox
          :initial-value="selected"
          :id="id"
        />
        <img src="@/assets/icons/person.svg" alt="Person icon">
      </div>
    </div>
    <div class="title">
      <h3 v-text="voice" />
    </div>
    <div class="right-actions">
      <div class="actions">
        <a
          href="#"
          class="btn"
          @click.prevent="selectItem"
        >
          <img src="@/assets/icons/delete.svg" alt="Person icon">
        </a>
      </div>
    </div>

    <div class="body">
      <p v-text="text" />
    </div>

  </div>
</template>

<script>
import Checkbox from '@/components/inputs/Checkbox'

export default {
  name: 'ListItem',
  components: {
    Checkbox
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
    selectItem () {
      this.$emit('selectItem', this.id)
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
      display: flex;
      justify-content: center;
    }

    //  Individual grid positioning
    .left-actions{
      grid-area: left;
      justify-content: flex-start;
      .actions{
        img{
          margin-left: 1em;
        }
      }
    }

    .title{
      grid-area: title;
      > * {
        color: $gray;
        font-family: $font-montserrat;
        font-weight: $font-weight-semibold;
        margin: 0;
      }
    }

    .right-actions{
      grid-area: right;
      justify-content: flex-end;
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
