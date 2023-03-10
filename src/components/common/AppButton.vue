<template>
  <button class="app-button">
    <slot />
  </button>
</template>
<script>
export default {
    name: 'AppButton'
}
</script>
<style lang="scss" scoped>
    .app-button {
        border-radius: 8px;
        cursor: pointer;
        background-color: $purple;
        font-family: OpenSansRegular;
        font-size: $default-size;   
            
        &:hover {
            background-color: $white;
            color: $purple;
        }
    }
</style>