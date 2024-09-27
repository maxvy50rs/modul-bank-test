import http from '../api';
import { APIResponse } from '../types';
import { Order, OrderExtended } from './types';

async function getOrders() {
  return http.get<APIResponse<Order[]>>('list');
}

async function getOrderById(id: OrderExtended['id']) {
  return http.get<APIResponse<OrderExtended>>(`orders/${id}`);
}

export default {
  getOrders,
  getOrderById,
};
