<template>
  <div class="the-header">
    <div class="the-header__title">
      Transcriptions
    </div>
    <div class="the-header__actions">
      <AppIcon
        icon="upload"
        @execute-method="upload"
      />
      <AppIcon
        icon="fetch-document"
        @execute-method="fetch"
      />
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/common/AppIcon.vue";
import { mapActions } from 'vuex'

export default {
  name: "TheHeader",
  components: { AppIcon },
  methods: {
    ...mapActions(['fetchTranscriptions', 'uploadTranscriptions']),

    async upload() {
      await this.uploadTranscriptions()
    },

    async fetch() {
      await this.fetchTranscriptions();
    },
  },
};
</script>
<style lang="scss" scoped>
$font-size: 18px;

.the-header {
  display: flex;
  justify-content: space-around;
  background-color: $white;
  padding: $default-size 0 $default-size 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12);
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
