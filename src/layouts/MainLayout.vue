<template>
  <q-layout view="hhh LpR lfr">

    <div>
    <q-tabs
      v-model="activeTab"
      dense
      align="left"
      class="bg-indigo text-grey-2"
      inline-label
      active-color="white"
    >
      <q-tab
        v-for="(tab, index) in tabs"
        :key="index"
        :name="tab.name"
        :label="tab.label"
      >
        <q-btn
          v-if="tab.closable"
          icon="close"
          flat
          round
          size="0.5rem"
          @click.stop="closeTab(index)"
          class="q-ml-md"
        />
      </q-tab>
    </q-tabs>

    <div class="q-pa-lg">
      <component :is="currentTabComponent"/>
    </div>

    <q-btn label="New tab" @click="addTab(Math.random().toString())"/>
  </div>

  </q-layout>
</template>

<script lang="ts">

import { ref, computed } from 'vue';
import MeetingsPage from 'src/pages/MeetingsPage.vue';
import OrdersPage from 'src/pages/OrdersPage.vue';

interface Tab {
  name: string;
  label: string;
  closable: boolean;
  component: string;
}

export default {

  components: {
    MeetingsPage,
    OrdersPage,
  },

  setup() {
    const tabs = ref([
      {
        name: 'orders',
        label: 'Orders',
        closable: false,
        component: 'OrdersPage',
      },
      {
        name: 'meetings',
        label: 'Meetings',
        closable: false,
        component: 'MeetingsPage',
      },
    ]);
    const activeTab = ref('orders');

    const getTabIndexByName = (tabsArray: Tab[], tabName: string) => (
      tabsArray.findIndex((tab) => tab.name === tabName)
    );

    const currentTabComponent = computed(() => {
      const activeTabIndex = getTabIndexByName(tabs.value, activeTab.value);
      return tabs.value[activeTabIndex].component;
    });

    const closeTab = (index: number) => {
      const activeTabIndex = getTabIndexByName(tabs.value, activeTab.value);
      if (activeTabIndex === index) {
        activeTab.value = tabs.value.slice(-2)[0].name;
      }
      tabs.value.splice(index, 1);
    };

    const addTab = (id: string) => {
      const newTab = {
        name: `order${id}`,
        label: `Order ${id}`,
        closable: true,
        component: `OrderPage${id}`,
      };
      tabs.value.push(newTab);
      activeTab.value = newTab.name;
    };

    return {
      activeTab,
      tabs,
      currentTabComponent,
      closeTab,
      addTab,
    };
  },
};

</script>
