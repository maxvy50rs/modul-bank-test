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
          @click.prevent="closeTab(tab.name)"
          class="q-ml-md"
        />
      </q-route-tab>
    </q-tabs>

    <q-page-container style="max-width: 1280px; margin: auto; margin-top: 2rem;">
      <router-view></router-view>
    </q-page-container>

  </div>

  </q-layout>
</template>

<script lang="ts">

import { useTabsStore } from 'src/stores/tabs';
import { useRouter } from 'vue-router';
import { Tab } from '../stores/tabs';

export default {

  setup() {
    const { tabs, removeTabByName } = useTabsStore();
    const router = useRouter();

    function closeTab(name: Tab['name']) {
      const path = router.currentRoute.value.fullPath;
      if (path === name) {
        router.push(router.options.history.state.back as string || '/orders');
      }
      removeTabByName(name);
    }

    return {
      tabs,
      router,
      closeTab,
    };
  },
};

</script>
