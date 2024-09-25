<template>
  <q-layout view="hhh LpR lfr">

  <div>

    <q-tabs
      dense
      align="left"
      class="bg-indigo text-grey-2"
      inline-label
      active-color="white"
    >
      <q-route-tab
        v-for="(tab, index) in tabs"
        :key="index"
        :name="tab.name"
        :to="`${tab.name}`"
        :label="tab.label"
        exact
        replace
      >
        <q-btn
          v-if="tab.closable"
          icon="close"
          flat
          round
          size="0.5rem"
          @click.prevent="closeTabByName(tab.name, router)"
          class="q-ml-md"
        />
      </q-route-tab>
    </q-tabs>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </div>

  </q-layout>
</template>

<script lang="ts">

import { useTabsStore } from 'src/stores/tabs';
import { useRouter } from 'vue-router';

export default {

  setup() {
    const { tabs, closeTabByName } = useTabsStore();
    const router = useRouter();

    return {
      tabs,
      router,
      closeTabByName,
    };
  },
};

</script>
