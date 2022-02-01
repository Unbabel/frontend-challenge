<template>
  <div>
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in languages"
        :key="`lang-${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { languages } from '@/locales/index.js'
export default {
  name: 'LocaleSelector',
  data() {
    return { languages: Object.keys(languages) }
  }
}

</script>

<style scoped>
select {
  border: 2px solid #8F97A8;
  border-radius: 5px;
  color: #8F97A8;
}
select:focus {
  outline:0;
}
</style>