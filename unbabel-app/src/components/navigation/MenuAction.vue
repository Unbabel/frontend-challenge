<template>
  <a
    href=""
    class="nav-item btn"
    :name="name"
    @click.prevent="emitClick"
  >
    <img
      :src="require(`@/assets/icons/${icon}.svg`)"
      :alt="iconAlt"
    >
  </a>
</template>

<script>
export default {
  name: 'MenuAction',
  props: {
    icon: {
      type: String,
      default: '',
      required: true
    },
    iconAlt: {
      type: String,
      default: 'Icon',
      required: true
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    emitClick () {
      this.$emit('click', this.name)
    }
  }
}
</script>

<style lang="scss">
  .nav-item{
    &:not(:last-child){
      margin-right: .5em;
    }

    //  Compensate icon size for visual balance
    &:last-child{
      img{
        width: 1.250em;
      }
    }

    //  No highlight if selecting
    &::-moz-selection{
      background: transparent;
    }
    &::selection{
      background: transparent;
    }

    &.brand{
      color: $gray-dark;
      font-family: $font-montserrat;
      font-size: $font-size-large;
      font-weight: $font-weight-medium;
      &:hover{
        box-shadow: none;
      }
    }
  }
</style>
