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

export type OrderExtended = Order & {
  profile_id: string;
  partner: string;
  inn: string;
  company_name: string;
  company_type: 'UL' | 'IP';
  person_fullname: string;
  person_email: string;
  extra: {
    partner: {
      type: string;
      user_id: string;
      client_name: string;
      inn: string;
    }
    crm_source_type: string;
  }
}

export type InputCreateOrder = Order;

export type InputUpdateOrder = Omit<Order, 'id'>;
