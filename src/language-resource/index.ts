import {createI18n} from "vue-i18n";
import Messages from "./messages";

export default createI18n({
    locale: 'messages',
    fallbackLocale: 'messages',
    messages: Messages
});
