import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { ref, watch } from 'vue';
import { Router } from 'vue-router';

type Tab = {
  name: string;
  label: string;
  closable: boolean;
}

export const useTabsStore = defineStore('tabsStore', () => {
  const initialState: Tab[] = [
    {
      name: '/orders',
      label: 'Orders',
      closable: false,
    },
    {
      name: '/meetings',
      label: 'Meetings',
      closable: false,
    },
  ];

  const tabs = ref<Tab[]>(LocalStorage.getItem('tabs') || initialState);

  watch(tabs, (_, newTabs) => {
    LocalStorage.setItem('tabs', newTabs);
  }, {
    deep: true,
  });

  function addNewTab(tab: Tab) {
    tabs.value.push(tab);
  }

  function closeTabByName(name: Tab['name'], router: Router) {
    const path = router.currentRoute.value.fullPath;
    const idx = tabs.value.findIndex((el) => (el.name === name));
    if (path === name) {
      router.push(router.options.history.state.back as string);
    }
    tabs.value.splice(idx, 1);
  }

  return {
    tabs,
    addNewTab,
    closeTabByName,
  };
});
