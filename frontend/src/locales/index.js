import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import de from './de.json'

const defaultLocale = 'en'

export const languages = {
  en: en,
  de: de,
}


Vue.use(VueI18n)

const messages = Object.assign(languages)

export var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})