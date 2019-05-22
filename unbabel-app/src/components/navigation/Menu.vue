<template>
  <nav
    class="nav"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="inner-nav">
      <div class="nav-left">
        <span class="nav-item brand">
          Transcriptions
        </span>
      </div>
      <div class="nav-right">
        <MenuAction
          :icon="'upload'"
          :icon-alt="'Upload icon'"
          :name="'Upload'"
        />
        <MenuAction
          :icon="'fetch'"
          :icon-alt="'Fetch icon'"
          :name="'Fetch'"
        />
      </div>

    </div>
  </nav>
</template>

<script>
import MenuAction from '@/components/navigation/MenuAction'
export default {
  name: 'Menu',
  components: {
    MenuAction
  }
}
</script>

<style lang="scss">
  .nav{
    background: $white;
    width: 100%;
    @include shadow-no-hover();

    .inner-nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;
      max-width: 80vw;

      .nav{
        &-left, &-right{
          display: flex;
          padding: 1em;
        }
      }
    }
  }
</style>
