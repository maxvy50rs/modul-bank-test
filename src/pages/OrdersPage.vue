<template>
  <div class="q-pa-md">
    <q-circular-progress
      v-if="orders.length === 0"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="indigo"
      center-color="grey-2"
      track-color="transparent"
      class="q-ma-a"
    />
    <q-table
      v-if="orders.length"
      title="Orders"
      :rows="orders"
      :columns="columns"
      row-key="id"
      @row-click.stop="onRowClick"
    />
  </div>
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

    const store = useOrderStore();
    onMounted(store.dispatchGetOrders);
    const { orders } = storeToRefs(store);
    const router = useRouter();
    const tabsStore = useTabsStore();

    function onRowClick(e, row) {
      const tabName = `/orders/${row.id}`;
      tabsStore.addNewTab({
        name: tabName,
        label: `Order #${row.id}`,
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
