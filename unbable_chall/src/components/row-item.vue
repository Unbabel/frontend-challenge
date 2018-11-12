<template>
    <div class="rowitem">
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
      </label>
      <img src="../assets/person@1x.png" id="person-icon">

      <section contenteditable class="voice-input" @blur="titleContent($event)">
        <span id="voice-text">{{item.voice}}</span>
      </section>

      <img class="delete-button" src="../assets/delete@1x.png" v-on:click=removeRow(id)>

      <section contenteditable class="text-input" @blur="textContent($event)">
        <span id="Fulltext">{{item.text}}</span>
      </section>
    </div>
</template>

<script>
  export default{
    name:'rowitem',
    props:{
      item:{
        type: Object,
        required: true,
      }
    },
    data(){
      return{
        'id': this.item.id,
        'voice': this.item.voice,
        'text': this.item.text,
      }
    },
    methods:{
      titleContent (evt,item) {
        var text = evt.target.innerText;
        this.item.voice = text;
      },

      textContent (evt,item) {
        var text = evt.target.innerText;
        this.item.text = text;
      },

      removeRow(id){
        this.$emit('removedrow',id)
      }
    }
  }
</script>

<style scoped>
   @import './style.css';
</style>
