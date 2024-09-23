import http from '../api';
import { APIResponse } from '../types';
import { Order } from './types';

async function getOrders() {
  return http.get<APIResponse<Order[]>>('list');
}

async function getOrderById(id: Order['id']) {
  return http.get<APIResponse<Order>>(`orders/${id}`);
}

export default {
  getOrders,
  getOrderById,
};
