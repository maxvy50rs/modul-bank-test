<template>
  <q-layout view="hhh LpR lfr">

    <q-tabs
      dense
      align="left"
      class="bg-indigo text-grey-2 row justify-start"
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

      <q-btn
        class="self-right bg-grey-2 text-indigo q-ma-sm q-ml-auto"
        flat
        @click="onNewOrderClick"
        label="Create order"
      />
    </q-tabs>

    <q-page-container style="max-width: 1280px; margin: auto; margin-top: 2rem;">
      <router-view :key="$route.fullPath"></router-view>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">

import { useTabsStore, Tab } from 'src/stores/tabs';
import { useRouter } from 'vue-router';
import { useOrderStore } from 'src/stores/orders';
import { onMounted } from 'vue';

export default {

  setup() {
    const { tabs, removeTabByName, addNewTab } = useTabsStore();
    const { dispatchGetOrders } = useOrderStore();
    const router = useRouter();

    onMounted(dispatchGetOrders);

    function closeTab(name: Tab['name']) {
      const path = router.currentRoute.value.fullPath;
      if (path === name) {
        router.push('/orders');
      }
      removeTabByName(name);
    }

    function onNewOrderClick() {
      const tabName = '/orders/new';
      addNewTab({
        name: tabName,
        label: 'New order',
        closable: true,
      });
      router.push(tabName);
    }

    return {
      tabs,
      router,
      closeTab,
      onNewOrderClick,
    };
  },
};

</script>
