export type Meeting = {
  id: string;
  num: number;
  meeting_date: string;
  meeting_place: string;
  meeting_state: 'error' | 'upload_docs' | 'process' | 'reupload_fls';
  bank_name: string;
  isOwn: boolean;
  profile_id: string | null;
  lastUpd: string;
  stg: string[];
  inn: null | string;
  ogrn: null | string;
  client_name: string;
  person_phone: string;
  client_city: string;
};
