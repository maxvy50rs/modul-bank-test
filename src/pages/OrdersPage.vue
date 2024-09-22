<template>
  <div class="q-pa-md">
    <q-circular-progress
      v-if="store.isLoading"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="indigo"
      center-color="grey-2"
      track-color="transparent"
      class="q-ma-a"
    />
    <q-table
      v-if="!store.isLoading"
      title="Orders"
      :rows="store.data"
      :columns="columns"
      row-key="id"
    />
  </div>
</template>

<script>
import { useDataStore } from 'src/stores/dataStore';

export default {
  setup() {
    const columns = [
      {
        name: 'number',
        required: true,
        label: '#',
        align: 'left',
        field: (row) => row.num,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'product',
        align: 'center',
        label: 'Product',
        field: 'stg',
        sortable: true,
        format: (val) => val.join(', '),
      },
      {
        name: 'date',
        label: 'Date',
        field: 'initiated_at',
        sortable: true,
        format: (val) => new Date(val).toISOString().split('T')[0],
      },
      {
        name: 'client',
        label: 'Client',
        field: 'client_name',
        sortable: true,
      },
      {
        name: 'state',
        label: 'State',
        field: 'state',
        sortable: true,
        format: (val) => (val === 'init' ? 'Initial' : ''),
      },
      {
        name: 'contact',
        label: 'Contact',
        field: 'person_phone',
        sortable: false,
      },
    ];

    const store = useDataStore();

    store.fetchOrderList();

    return {
      columns,
      store,
    };
  },
};
</script>
