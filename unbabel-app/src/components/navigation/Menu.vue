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
          :name="'upload'"
          @click="dispatchAction"
        />
        <MenuAction
          :icon="'fetch'"
          :icon-alt="'Fetch icon'"
          :name="'fetch'"
          @click="dispatchAction"
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
  },
  methods: {
    dispatchAction (action) {
      switch (action) {
        case 'fetch':
          this.getTranscripts()
          break

        case 'upload':
          this.pushTranscripts()
          break
      }
    },
    getTranscripts () {
      this.$store
        .dispatch('transcriptions/GET_TRANSCRIPTS')
        .then(res => {
          res.data.map(item => {
            item['selected'] = false
          })
          this.$store.commit('transcriptions/saveTranscripts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    pushTranscripts () {
      console.log('pushTranscripts')
    }
  }
}
</script>

<style lang="scss">
  .nav{
    position: fixed;
    top: 0;
    left: 0;
    background: $white;
    width: 100%;
    @include shadow-no-hover();

    .inner-nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;
      max-width: 95vw;

      @include from($mobile) {
        max-width: 80vw;
      }

      .nav{
        &-left, &-right{
          display: flex;
          padding: 1em;
        }
      }
    }
  }
</style>
