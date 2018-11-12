<template>

  <div class="testClass">
    <section class="headPage effect1">

      <span>Transcriptions</span>
      <img src="../assets/fetch-document@1x.png" id="fetch-icon" v-on:click="pullData()">
      <img src="../assets/upload@1x.png" id="upload-icon" v-on:click="pushData()">

    </section>

    <rowitem class="rowPage" v-for="itemrow in dataBase" :item="itemrow"
    @removedrow="removeRow">
    </rowitem>

    <img src="../assets/add-row@1x.png" class="add-icon" v-on:click="addRow()">
  </div>
</template>

<script>
  import rowitem from './row-item.vue'

  export default {
    components:{
      rowitem,
    },
    data() {
      return{
        dataBase: [],
        data_url:'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
      }
    },
    methods:{

      //Fetch data from url
      pullData: function(){
        this.dataBase=[];
        this.$http.get(this.data_url)
          .then(function(response){
            this.dataBase = response.data;
          });
      },

      //Push data to url
      pushData: function(){
        console.log(this.dataBase);
        this.$http.post(this.data_url,this.dataBase)
        .then(function(res){
          console.log("posted success"+' '+res)
        },function(res){
          console.log("posted failed"+' '+res)
        });
      },

      //Adds row to content list
      addRow: function(){
        this.dataBase.push({
          "id": this.dataBase.length+1,
          "voice": "New Voice",
          "text": "New Text"
        });
      },

      //Removes row from content list
      removeRow: function(id){
        this.dataBase.splice(id-1,1);
        for (var i = 0; i < this.dataBase.length; i++) {
            this.dataBase[i].id = i+1;
        }
      }
    }

  }
</script>

<style scoped>
   @import './style.css';
</style>
