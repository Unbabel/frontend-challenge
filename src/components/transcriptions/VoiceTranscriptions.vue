<template>
  <div>
    <li>
      <input
        id="checkbox"
        v-model="checked"
        type="checkbox"
      >
    </li>
  </div>
</template>
<script>
export default {
  name: "VoiceTranscriptions",
  data () {
    return {
        checked: false
    }
  }
};
</script>
<style lang="scss" scoped></style>
