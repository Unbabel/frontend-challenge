<template>
  <div style="width: 100%;">
    <input
      v-model="title"
      class="title"
      :placeholder="$t('titlePlaceholder')"
    >
    <textarea
      ref="textarea"
      v-model="content"
      class="content"
      :placeholder="$t('contentPlaceholder')"
      rows="1"
      @focus="resize"
      @keyup="resize"
    />
  </div>
</template>

<script>

export default {
  name: 'TableRowEdit',
  props: {
    value: { type: Object, default: () => ({}) },
    titleProp: { type: String, default: "voice" },
    contentProp: { type: String, default: "text" }
  },
  data () {
    return {
      title: this.value[this.titleProp],
      content: this.value[this.contentProp]
    }
  },
  watch:{
    value (val) {
      this.title = val[this.titleProp],
      this.content = val[this.contentProp]
    },
    title () {
      this.save()
    },
     content () {
       this.save()
    }
  },
  mounted() {
    this.resize();
  },
  methods: {
    save () {
      this.$emit('input', {...this.value, [this.titleProp]: this.title, [this.contentProp]: this.content })
    },
    resize() {
      const { textarea } = this.$refs;
      textarea.style.height = textarea.scrollHeight - 4 + 'px';
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
  border-width:0px;
  border:none;
  outline: none;
  background-color: transparent;
  text-align: justify;
  text-justify: inter-word;
}
textarea {
  width: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  text-align: justify;
  text-justify: inter-word;
}
.content {
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #778195;
}
.title{
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #566074;
 
}
</style>
