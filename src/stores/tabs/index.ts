import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { ref, watch } from 'vue';

export type Tab = {
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

  function checkTabIfExist(name: Tab['name']) {
    const idx = tabs.value.findIndex((el) => (el.name === name));
    return idx > -1;
  }

  function addNewTab(tab: Tab) {
    const isExist = checkTabIfExist(tab.name);
    if (isExist) return;
    tabs.value.push(tab);
  }

  function removeTabByName(name: Tab['name']) {
    const idx = tabs.value.findIndex((el) => (el.name === name));
    tabs.value.splice(idx, 1);
  }

  return {
    tabs,
    addNewTab,
    removeTabByName,
  };
});
