export type Order = {
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
};

export type InputCreateOrder = Order;

export type InputUpdateOrder = Omit<Order, 'id'>;
