<template>
  <div class="q-pa-md">
    <q-table
      title="Orders"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
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

const rows = [
  {
    id: '1',
    num: 3440,
    initiated_at: '2021-06-24T14:28:14.237',
    dadd: '2021-06-24T14:28:14.237',
    state: 'init',
    lastUpd: '2021-06-24T14:28:14.237',
    stg: [
      'ACCOPEN',
    ],
    inn: '780528376562',
    client_name: '  ',
    person_phone: '79000000000',
  },
  {
    id: '2',
    num: 3439,
    initiated_at: '2021-06-09T14:44:59.307',
    dadd: '2021-06-09T14:44:59.307',
    state: 'init',
    lastUpd: '2021-06-11T02:46:01.703',
    stg: [
      'FNS.REG',
    ],
    inn: null,
    client_name: 'Тест Тест Тест',
    person_phone: '79999627081',
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
