<template>
  <q-page class="q-pa-md row justify-center items-start">
    <q-circular-progress
      v-if="orders.length === 0"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="indigo"
      center-color="grey-4"
      track-color="grey-2"
    />
    <q-table class="col sticky-header-column-table"
      v-if="orders.length"
      title="Orders"
      :rows="orders"
      :columns="columns"
      row-key="id"
      @row-click.stop="onRowClick"
    />
  </q-page>
</template>

<script>
import { useOrderStore } from 'src/stores/orders';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useTabsStore } from 'src/stores/tabs';

export default {
  setup() {
    const columns = [
      {
        name: 'number',
        required: true,
        label: '#',
        align: 'center',
        field: (row) => row.num,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'product',
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
        format: (val) => new Date(val).toISOString()
          .split('T')
          .join(', ')
          .slice(0, -8),
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
        format: (val) => `+${val}`,
      },
    ];

    const store = useOrderStore();
    onMounted(store.dispatchGetOrders);
    const { orders } = storeToRefs(store);
    const router = useRouter();
    const tabsStore = useTabsStore();

    function onRowClick(e, row) {
      const tabName = `/orders/${row.id}`;
      tabsStore.addNewTab({
        name: tabName,
        label: `Order #${row.num}`,
        closable: true,
      });
      router.push(tabName);
    }

    return {
      columns,
      orders,
      onRowClick,
    };
  },
};
</script>

<style>
  .sticky-header-column-table {
    max-height: 900px;
    max-width: 1440px;
  }
  .sticky-header-column-table td:first-child {
    background-color: #f3f3f3;
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
  .sticky-header-column-table tr:first-child th:first-child {
    z-index: 3;
  }
  .sticky-header-column-table td:first-child {
    z-index: 1;
  }
  .sticky-header-column-table td:first-child, .sticky-header-column-table th:first-child {
    position: sticky;
    left: 0;
  }
  .sticky-header-column-table tbody {
    scroll-margin-top: 48px;
  }
</style>
