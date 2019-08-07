import Vue from "vue";
import VueAxios from "vue-axios";
import vueHeadful from "vue-headful";
import Toasted from "vue-toasted";

import axios from "./axios";

Vue.use(VueAxios, axios);
Vue.use(Toasted, {
  position: 'bottom-center',
  theme: 'bubble',
  className: 'toasty',
});

Vue.component("vue-headful", vueHeadful);

Vue.config.productionTip = false;

export default Vue;
