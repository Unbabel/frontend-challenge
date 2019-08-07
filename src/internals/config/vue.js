import Vue from "vue";
import VueAxios from "vue-axios";
import vueHeadful from "vue-headful";

import axios from "./axios";

Vue.use(VueAxios, axios);

Vue.component("vue-headful", vueHeadful);

Vue.config.productionTip = false;

export default Vue;
