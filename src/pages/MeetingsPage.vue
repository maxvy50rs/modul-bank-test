<template>
  <q-page class="q-pa-md row justify-center items-start">
    <q-circular-progress
      v-if="meetings.length === 0"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="indigo"
      center-color="grey-4"
      track-color="grey-2"
    />
    <q-table class="col sticky-header-column-table"
      v-if="meetings.length"
      title="Meetings"
      :rows="meetings"
      :columns="columns"
      row-key="id"
      >
      <template v-slot:body-cell-meeting_state="props">
        <q-td :props="props">
          <div>
            <q-badge
              :color="stateToBadgeMap.get(props.row.meeting_state)?.color"
              :label="stateToBadgeMap.get(props.row.meeting_state)?.label"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useMeetingsStore } from 'src/stores/meetings';
import { Meeting } from 'src/services/meetings/types';
import { QTableColumn } from 'quasar';

export default {
  setup() {
    const columns: QTableColumn[] = [
      {
        name: 'client',
        align: 'left',
        label: 'Client',
        field: 'client_name',
        sortable: true,
      },
      {
        name: 'city',
        label: 'City',
        field: 'client_city',
        sortable: true,
      },
      {
        name: 'bank_name',
        label: 'Bank',
        field: 'bank_name',
        sortable: true,
      },
      {
        name: 'product',
        label: 'Product',
        field: 'stg',
        sortable: true,
        format: (val: string[]) => val.join(', '),
      },
      {
        name: 'meeting_state',
        label: 'State',
        field: 'meeting_state',
        sortable: true,
        format: (val: Meeting['meeting_state']) => val, // TODO можно сделать Map статусов
      },
      {
        name: 'meeting_date',
        label: 'Date',
        field: 'meeting_date',
        sortable: true,
        format: (val: string) => new Date(val).toISOString()
          .split('T')
          .join(', ')
          .slice(0, -8),
      },
      {
        name: 'meeting_place',
        label: 'Place',
        field: 'meeting_place',
        sortable: true,
      },
      {
        name: 'person_phone',
        label: 'Contact',
        field: 'person_phone',
        sortable: false,
        format: (val: string) => `+${val}`,
      },
    ];

    const stateToBadgeMap = new Map([
      ['error', { label: 'Error', color: 'red' }],
      ['process', { label: 'In progress', color: 'orange' }],
      ['upload_docs', { label: 'Upload docs', color: 'blue' }],
      ['reupload_fls', { label: 'Reupload files', color: 'teal' }],
    ]);

    const store = useMeetingsStore();
    onMounted(store.dispatchGetMeetings);
    const { meetings } = storeToRefs(store);

    return {
      columns,
      meetings,
      stateToBadgeMap,
    };
  },
};
</script>

<style>
  .sticky-header-column-table {
    max-height: 900px;
    max-width: 1440px;
  }
  .sticky-header-column-table tr th {
    position: sticky;
    z-index: 2;
    background: #f3f3f3;
  }
  .sticky-header-column-table thead tr:last-child th {
    top: 48px;
    z-index: 3;
  }
  .sticky-header-column-table thead tr:first-child th {
    top: 0;
    z-index: 1;
  }
</style>
