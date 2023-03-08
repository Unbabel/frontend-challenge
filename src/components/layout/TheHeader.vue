<template>
  <div class="the-header">
    <div class="the-header__title">
      Transcriptions
    </div>
    <div class="the-header__actions">
      <AppIcon
        icon="upload"
        @execute-action="upload"
      />
      <AppIcon
        icon="fetch-document"
        @execute-action="fetch"
      />
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/common/AppIcon.vue";

export default {
  name: "TheHeader",
  components: { AppIcon },
};
</script>
<style lang="scss" scoped>
$font-size: 18px;

.the-header {
  display: flex;
  justify-content: space-around;
  background-color: $white;
}

.the-header__actions {
  display: flex;
}

.the-header__title {
  font-family: "MontserratMedium";
  font-size: $font-size;
  color: $river-bed;
}
</style>
