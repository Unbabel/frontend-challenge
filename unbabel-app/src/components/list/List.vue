<template>
  <div class="list">
    <ListItem
      v-for="transcript in transcripts"
      :key="transcript.id"
      :id="transcript.id"
      :voice="transcript.voice"
      :text="transcript.text"
      :selected="transcript.selected"
    />
    <div
      v-if="transcripts.length === 0 && !addItem"
      class="empty-list"
    >
      <p>No transcripts available</p>
    </div>
    <div class="list-action">
      <NewItem
        v-if="addItem"
        @close="closeItem"
      />
      <div class="action-wrapper">
        <a
          href="#"
          class="btn rounded"
          @click.prevent="newItem"
        >
          <img src="@/assets/icons/add.svg" alt="Add icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/list/ListItem'
import NewItem from '@/components/list/NewItem'
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  components: {
    ListItem,
    NewItem
  },
  data () {
    return {
      addItem: false
    }
  },
  computed: {
    ...mapGetters('transcriptions', [
      'transcripts'
    ])
  },
  methods: {
    newItem () {
      this.addItem = true
    },
    closeItem () {
      this.addItem = false
    }
  }
}
</script>

<style lang="scss">
  .list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 95vw;

    .empty-list, .list-action{
      padding: 1.5em;
    }

    .empty-list{
      text-align: center;
      padding: .5em;
      > *{
        color: $gray;
        font-size: $font-size-large;
      }
    }

    .list-action{
      display: flex;
      flex-direction: column;
      padding: 1.5em;

      .action-wrapper{
        text-align: center;
        width: 100%;
      }
    }

    @include from($mobile) {
      max-width: 80vw;
    }
  }
</style>
