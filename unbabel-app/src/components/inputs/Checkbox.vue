<template>
  <div class="checkbox">
    <input
      :id="`checkbox_${id}`"
      type="checkbox"
      :class="{ 'checked': value}"
      class="styled-checkbox"
      v-model="value"
      @change="emitChange"
    >
    <label
      :for="`checkbox_${id}`"
      v-html="`&nbsp;`"
    />
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  data () {
    return {
      value: false
    }
  },
  props: {
    initialValue: {
      type: Boolean,
      default: false,
      required: true
    },
    id: {
      type: Number,
      default: 0,
      required: true
    }
  },
  mounted () {
    this.value = this.initialValue
  },
  watch: {
    initialValue () {
      this.value = this.initialValue
    }
  },
  methods: {
    emitChange () {
      this.$emit('changedValue', this.value)
    }
  }
}
</script>
