import Vue from "vue";
import VueAxios from "vue-axios";

import axios from "./axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

export default Vue;
