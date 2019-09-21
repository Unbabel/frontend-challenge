<template>
  <div class="list-item">
    <div>
      <Checkbox />
    </div>
    <div>
      <IconButton title="Delete item" :onClick="deleteItem">
        <PersonIcon />
      </IconButton>
    </div>
    <div class="contents">
      <h2>{{ item.voice }}</h2>
      <p>{{ item.text }}</p>
    </div> 
    <div>
      <IconButton title="Delete item" :onClick="deleteItem">
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
  methods: {
    deleteItem(){
      // eslint-disable-next-line
      console.log('delete');
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
.contents {
  flex: 1 1 auto;
  text-align: left;
}
h2 {
  margin: 0;
}
p{
  margin: 0;
}
</style>
