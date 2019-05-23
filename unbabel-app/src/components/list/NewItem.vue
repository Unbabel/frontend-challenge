<template>
  <div class="new-item">
    <div class="header">
      <TextInput
        :initial-value="'Title'"
        :extra-class="'headline'"
        :name="'title'"
        @changedValue="saveTitle"
      />
    </div>
    <div class="body">
      <TextInput
        :initial-value="'Transcript...'"
        @changedValue="saveBody"
      />
    </div>
    <div class="footer">
      <a
        href="#"
        class="btn close"
        @click.prevent="close"
      >Cancel</a>
      <a
        href="#"
        class="btn primary"
        @click.prevent="saveItem"
      >Save</a>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/inputs/TextInput'

export default {
  name: 'NewItem',
  components: {
    TextInput
  },
  data () {
    return {
      title: '',
      body: ''
    }
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
      this.$emit('close')
      this.title = ''
      this.body = ''
    }
  }
}
</script>

<style lang="scss">
  .new-item{
    display: flex;
    flex-direction: column;
    padding: 1em;
    background: $white;
    border: 2px solid darken($gray-lighter, 1%);
    border-bottom: 0;
    border-top-right-radius: $default-border-radius;
    border-top-left-radius: $default-border-radius;
    margin: 15px auto 0 auto;
    max-width: 80%;
    width: 100%;

    .footer{
      display: flex;
      justify-content: flex-end;

      .btn{
        margin-left: .5em;
      }
    }

  }
</style>
