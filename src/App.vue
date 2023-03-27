<template>
  <div>
    <LoaderComponent :show-loader="showLoader"/>

    <BaseLayout>

      <template v-slot:header>
        <NavbarComponent :routes="routes" />
      </template>

      <template v-slot:main>
        <router-view/>
      </template>

    </BaseLayout>

  </div>
</template>

<script setup lang="ts">
import Eventbus from "./eventbus";
import {ApiEngineEventTypeConstants} from "./api-engine/constants/api-engine-event-type.constants";
import BaseLayout from "./layout/base-layout/BaseLayout.vue";
import LoaderComponent from "./components/loader/loader-component.vue";
import {ref} from "vue";
import NavbarComponent from "./components/navbar/navbar-component.vue";
import {useRouter} from "vue-router";

const showLoader = ref(false);
const routes = useRouter().getRoutes();

Eventbus.on(ApiEngineEventTypeConstants.SERVICE_REQUEST_STARTED, () => {
  showLoader.value = true;
});

Eventbus.on(ApiEngineEventTypeConstants.SERVICE_REQUEST_ENDED, () => {
  showLoader.value = false;
});
</script>

<style scoped>

</style>
