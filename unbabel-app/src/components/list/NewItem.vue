<template>
  <div
    ref="mewItem"
    :class="transition"
    class="new-item"
  >
    <div class="header">
      <TextInput
        :initial-value="''"
        :extra-class="'headline fullwidth'"
        :placeholder="'Title'"
        :name="'title'"
        @changedValue="saveTitle"
      />
    </div>
    <div class="body">
      <TextInput
        :initial-value="''"
        :extra-class="'fullwidth'"
        :placeholder="'Transcript...'"
        @changedValue="saveBody"
      />
    </div>
    <div class="footer">
      <a
        href="#"
        class="btn close"
        title="Cancel"
        aria-label="Close"
        @click.prevent="close"
      >Cancel</a>
      <a
        href="#"
        class="btn primary"
        title="Save item"
        aria-label="Save"
        @click.prevent="saveItem"
      >Save</a>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/inputs/TextInput'

const animTimeout = 200

export default {
  name: 'NewItem',
  components: {
    TextInput
  },
  data () {
    return {
      title: '',
      body: '',
      transition: ''
    }
  },
  mounted () {
    this.transition = 'ease-in'
    setTimeout(() => {
      this.transition += ' visible'
      this.$refs.mewItem.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, animTimeout)
  },
  methods: {
    saveTitle (value) {
      this.title = value
    },
    saveBody (value) {
      this.body = value
    },
    saveItem () {
      if (this.title.trim().length > 0 && this.body.trim().length > 0) {
        this.$store.commit('transcriptions/addItem', {
          voice: this.title,
          text: this.body
        })
        this.close()
      }
    },
    close () {
      this.transition = 'prepare-ease-out'
      setTimeout(() => {
        this.transition += ' ease-out'
      })

      setTimeout(() => {
        this.$emit('close')
      }, animTimeout)
    }
  }
}
</script>

<style lang="scss">
  .new-item{
    display: flex;
    flex-direction: column;
    border: none;
    padding: 1em;
    margin: 0 auto 15px auto;
    height: 0;
    max-height: 115px;
    width: 100%;
    max-width: 80%;

    background: $white;
    @include shadow-no-hover();

    overflow: hidden;
    transform: scale(.8);

    &.ease-in{
      height: 115px;
      transform: scale(1);
      transition: all $default-transition-speed ease-in-out;
      &.visible{
        height: auto;
        max-height: 100%;
        overflow: visible;
        transition: all $default-transition-speed ease-in-out;
      }
    }

    &.prepare-ease-out{
      transform: scale(1);
      height: 115px;
      max-height: 115px;
      overflow: hidden;
      transition: height $default-transition-speed ease-in-out;

      &.ease-out{
        height: 0;
        transform: scale(.8);
        opacity: 0;
        transition: height $default-transition-speed ease-in-out,
                    transform $default-transition-speed ease-in-out,
                    opacity $default-transition-speed ease-in-out;
      }
    }

    .footer{
      display: flex;
      justify-content: flex-end;

      .btn{
        margin-left: .5em;
      }
    }
  }
</style>
