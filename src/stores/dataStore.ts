import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

interface OrderItem {
  id: string;
  num: number;
  initiated_at: string;
  dadd: string;
  state: 'init' | 'finish' | 'progress';
  lastUpd: string;
  stg: string[];
  inn: null | string;
  client_name: string;
  person_phone: string;
}

export const useDataStore = defineStore('dataStore', () => {
  const data = ref<OrderItem[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchOrderList = async (): Promise<void> => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get<OrderItem[]>('https://my-json-server.typicode.com/plushevy/demo/list');
      data.value = response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        error.value = err.message;
      } else {
        error.value = 'Unknown Error';
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchOrderList,
  };
});
