<template>
  <div id="app">
    <Header />
    
    <div v-if="isDataLoaded" class="data-container">
      <Table :value="rows" @input="setRows" />
      <div class="actions-data-container">
        <AddRowSvg class="add-row-btn" @click="addEmptyRow()" />
      </div>
    </div>
    <div v-else-if="!errorLoadingData" class="no-data-container">
      {{ $t("noDataLoaded") }}
    </div>
    <div v-else class="no-data-container">
      {{ $t("errorLoadingData") }}
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'
import { mapState, mapActions } from 'vuex'
import iconsMixin from '@/mixins/iconsMixin.js'
import { v4 as uuidv4 } from 'uuid'


export default {
  name: 'App',
  mixins: [iconsMixin],
  components: {
    Header, Table
  },
  computed: {
     ...mapState(["rows", "isDataLoaded", "errorLoadingData"])
  },
  methods : {
    ...mapActions(['addRow', 'setRows']),
     addEmptyRow () {
       this.addRow({ id: uuidv4() })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Montserrat');



#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1024px;
  margin: 40px auto;
  border: 2px solid #E0E0E0;
}
.container-max-width {
  max-width: 768px;
  margin: auto;
}

.no-data-container {
  padding: 40px;
  display: flex;
  justify-content: center;
  background: white;
  margin: 40px;
  color: #566074;
}

.actions-data-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.data-container {
  padding: 40px;
}

.add-row-btn {
  cursor: pointer;
}
</style>
