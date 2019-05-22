<template>
  <div class="list">
    <ListItem
      v-for="transcript in transcripts"
      :key="transcript.id"
      :id="transcript.id"
      :voice="transcript.voice"
      :text="transcript.text"
    />
    <div
      v-if="transcripts.length === 0"
      class="empty-list"
    >
      <p>No transcripts available</p>
    </div>
    <div class="list-action">
      <a
        href="#"
        class="btn rounded"
        @click.prevent="newItem"
      >
        <img src="@/assets/icons/add.svg" alt="Add icon">
      </a>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/list/ListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  components: {
    ListItem
  },
  computed: {
      ...mapGetters('transcriptions', [
        'transcripts'
      ])
    },
  methods: {
    newItem () {
      console.log('new item')
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
      text-align: center;
      padding: 1.5em;
    }

    .empty-list{
      padding: .5em;
      > *{
        color: $gray;
        font-size: $font-size-large;
      }
    }

    .list-action{
      padding: 1.5em;
    }

    @include from($mobile) {
      max-width: 80vw;
    }
  }
</style>
