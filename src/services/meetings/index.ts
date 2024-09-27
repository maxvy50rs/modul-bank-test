import http from '../api';
import { APIResponse } from '../types';
import { Meeting } from './types';

async function getMeetings() {
  return http.get<APIResponse<Meeting[]>>('meetings');
}

export default {
  getMeetings,
};
