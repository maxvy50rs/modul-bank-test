import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from 'src/services';
import { APIResponse } from 'src/services/types';
import { Meeting } from '../../services/meetings/types';

export const useMeetingsStore = defineStore('meetingsStore', () => {
  const meetings = ref<Meeting[]>([]);

  function initMeetings(data: Meeting[]) {
    meetings.value = data;
  }

  async function dispatchGetMeetings(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.meetings.getMeetings();
      if (status === 200) {
        initMeetings(data);
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

  return {
    meetings,
    initMeetings,
    dispatchGetMeetings,
  };
});
