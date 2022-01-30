<template>
  <div>
    <div
      v-for="(row, index) in value"
      :key="row.id"
      class="data-table-line container-max-width"
      @mouseover="showDeleteBtnIndex = index"
      @mouseout="showDeleteBtnIndex = null"
    >
      <MyCheckbox />
      <PersonSvg />
      <TableRowEdit
        v-model="value[index]"
        style="flex-grow: 1"
        :title-prop="titleProp"
        :content-prop="contentProp"
      />
      <DeleteSvg
        class="deleteBtn"
        :class="showDeleteBtnIndex === index ? 'deleteBtnVisible' : ''"
        @click="removeRowById(row.id)"
      />
    </div>
  </div>
</template>

<script>
import TableRowEdit from '@/components/TableRowEdit.vue'
import iconsMixin from '@/mixins/iconsMixin.js'
import { mapActions } from 'vuex'
import MyCheckbox from '@/components/MyCheckbox.vue'

export default {
  name: 'Table',
   components: {
    TableRowEdit,
    MyCheckbox
  },
  mixins: [iconsMixin],
  props: {
    value: { type: Array, default: () => [] },
    titleProp: { type: String, default: "voice" },
    contentProp: { type: String, default: "text" }
  },
  data () {
    return {
      content: this.value,
      showDeleteBtnIndex: null
    }
  },
  watch:{
      value (val) {
        this.content = val
     }
  },
  methods: {
    ...mapActions(['removeRowById'])
  }
}
</script>

<style scoped>
.data-table-line {
  display: flex;
  background: white;
  padding: 20px;
  border-bottom: 1px solid #E0E0E0;
}
.data-table-line > div {
  flex-grow: 1;
 
}
.data-table-line > input {
  width: 16px;
  height: 16px;
  
}
.data-table-line > svg {
  flex-shrink: 0;
  margin: 0px 10px;
 
}
.deleteBtn {
  flex-shrink: 0;
  visibility: hidden;
  cursor: pointer;
}
.deleteBtnVisible {
  visibility: visible;
}



</style>
