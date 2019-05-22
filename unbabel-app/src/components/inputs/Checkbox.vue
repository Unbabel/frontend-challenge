<template>
  <div
    class="checkbox"
    :title="value ? 'Unselect' : 'Select'"
  >
    <input
      :id="`checkbox_${idFor}`"
      :class="{ 'checked': value}"
      type="checkbox"
      class="styled-checkbox"
      v-model="value"
      @change="emitChange"
    >
    <label
      :for="`checkbox_${idFor}`"
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
    idFor: {
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
