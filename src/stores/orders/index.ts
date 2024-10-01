import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from 'src/services';
import { APIResponse } from 'src/services/types';
import { Order, OrderExtended } from '../../services/orders/types';

export const useOrderStore = defineStore('orderStore', () => {
  const orders = ref<Order[]>([]);
  const orderDetailsMap = ref<Map<OrderExtended['id'], OrderExtended>>(new Map());

  function initOrders(data: Order[]) {
    orders.value = [...data];
  }

  function initOrderDetails(data: OrderExtended) {
    orderDetailsMap.value.set(data.id, data);
  }

  function addNewOrder(order: OrderExtended) {
    orders.value.push(order as Order);
    orderDetailsMap.value.set(order.id, order);
  }

  function removeOrder(id: Order['id']) {
    const index = orders.value.findIndex((s) => s.id === id);
    if (index === -1) return;
    orders.value.splice(index, 1);
  }

  async function dispatchGetOrders(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.orders.getOrders();
      if (status === 200) {
        initOrders(data);
        /* return {
          success: true,
          content: null,
        }; */
      }
    } catch (error) {
      // const axiosError = error as AxiosError<string>;
    }
    return null;
  }

  async function dispatchGetOrderById(id: OrderExtended['id']): Promise<APIResponse<null>> {
    try {
      if (orderDetailsMap.value.get(id)) return null;
      const { status, data } = await API.orders.getOrderById(id);
      if (status === 200) {
        initOrderDetails(data);
      }
    } catch (error) {
      //
    }
    return null;
  }

  async function dispatchCreateNewOrder(order: OrderExtended) {
    addNewOrder(order);
  }

  async function dispatchUpdateOrder(o: OrderExtended) {
    const index = orders.value.findIndex((s) => s.id === o.id);
    if (index === -1) return;
    orders.value.splice(index, 1, o);
    orderDetailsMap.value.set(o.id, o);
  }

  async function dispatchDeleteOrder(id: Order['id']) {
    removeOrder(id);
  }

  /*   async function dispatchCreateOrder(
    input: InputCreateOrder,
  ): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.orders.createOrder(input);
      if (status === 200) {
        addNewOrder(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const axiosError = error as AxiosError<string>;
      return {
        success: false,
        status: axiosError.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  } */

  /*   async function dispatchUpdateOrder(
    input: InputUpdateOrder,
  ): Promise<APIResponse<null>> {
    try {
      const { status } = await API.orders.updateOrder(input);
      if (status === 200) {
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const axiosError = error as AxiosError<string>;
      return {
        success: false,
        status: axiosError.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  } */

  return {
    orders,
    orderDetailsMap,
    dispatchGetOrders,
    dispatchGetOrderById,
    dispatchCreateNewOrder,
    dispatchUpdateOrder,
    dispatchDeleteOrder,
  };
});
