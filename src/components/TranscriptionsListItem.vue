<template>
  <div class="list-item">
    <div class="item-checkbox">
      <Checkbox :id="checkboxId" />
    </div>
    <div>
      <IconButton title="Link item" :onClick="goToItem">
        <PersonIcon />
      </IconButton>
    </div>
    <div class="contents">
      <h2>{{ item.voice }}</h2>
      <p>{{ item.text }}</p>
    </div> 
    <div>
      <IconButton title="Delete item" :onClick="deleteItem" class="delete-button">
        <DeleteIcon />
      </IconButton>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import IconButton from '@/components/IconButton'
import DeleteIcon from '@/assets/delete.svg'
import PersonIcon from '@/assets/person.svg'

export default {
  name: 'TranscriptionsListItem',
  components: {
    Checkbox,
    IconButton,
    DeleteIcon,
    PersonIcon
  },
  props: {
    item: Object
  },
  computed:{
    checkboxId(){
      return `checkbox${this.item.id}`
    }
  },
  methods: {
    deleteItem(){
      this.$store.dispatch('deleteTranscription', this.item.id)
    },
    goToItem(){
      const { id } = this.$route.params
      if (id == this.item.id) {
        return
      }
      this.$router.push(`/transcriptions/${this.item.id}`)
    }
  }
}
</script>

<style scoped>
.list-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: flex-start;
}
.item-checkbox {
  padding-top: 4px;
}
.delete-button{
  transition: opacity 0.5s ease;
  opacity: 0;
}
.list-item:hover .delete-button{
  opacity: 1;
}
.contents {
  flex: 1 1 auto;
  text-align: left;
}
h2 {
  margin: 0;
  font: 16px "Montserrat", Arial, sans-serif;
  font-weight: 600;
  color: #566074;
}
p{
  margin: 0;
  color: #778195;
}
</style>
