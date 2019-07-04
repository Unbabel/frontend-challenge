<template>
  <header>
    <div class="content">
      <h1>Transcriptions</h1>
      <div>
        <span class="upload"></span>
        <span class="fetch"></span>
      </div>
    </div>
  </header>
</template>

<script>
// import Header from '@/components/Header.vue'

export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

header {
  background-color: #FFFFFF;
  width: 100%;
  height: $header-height;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.24), 0 1px 3px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  .content {
    width: $content-width;
    padding: 0 $default-padding;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    span {
      width: 24px;
      height: 24px;
      cursor: pointer;
      margin-left: $default-margin;
      display: inline-block;

      &.upload {
        background: url('/images/upload.svg') center / cover no-repeat;
      }

      &.fetch {
        background: url('/images/fetch-document.svg') center / cover no-repeat;
      }
    }
  }
}
</style>
