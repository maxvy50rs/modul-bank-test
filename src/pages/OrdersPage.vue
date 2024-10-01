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
      :pagination="{ rowsPerPage: 10 }"
    >
      <template v-slot:body-cell-state="props">
        <q-td :props="props">
          <div>
            <q-badge
              :color="stateToBadgeMap.get(props.row.state).color"
              :label="stateToBadgeMap.get(props.row.state).label"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-do_delete="props">
        <q-td :props="props">
          <q-btn
            icon="delete"
            flat
            size="0.6rem"
            @click.prevent.stop="() => deleteOrder(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { useOrderStore } from 'src/stores/orders';
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
        field: 'dadd',
        sortable: true,
        format: (val) => new Date(val).toLocaleString('en-GB')
          .split('/')
          .join('.'),
      },
      {
        name: 'client',
        label: 'Client',
        field: (row) => row.client_name ?? row.person_fullname,
        sortable: true,
      },
      {
        name: 'state',
        label: 'State',
        field: 'state',
        sortable: true,
      },
      {
        name: 'contact',
        label: 'Contact',
        field: 'person_phone',
        sortable: false,
        format: (val) => `+${val}`,
      },
      {
        name: 'do_delete',
        style: 'width: 0.6rem',
        headerStyle: 'width: 0.6rem',
      },
    ];

    const stateToBadgeMap = new Map([
      ['init', { label: 'Initial', color: 'red' }],
      ['finish', { label: 'Finished', color: 'green' }],
      ['progress', { label: 'WIP', color: 'orange' }],
    ]);

    const orderStore = useOrderStore();
    const { orders } = storeToRefs(orderStore);
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

    function deleteOrder(id) {
      orderStore.dispatchDeleteOrder(id);
      tabsStore.removeTabByName(`/orders/${id}`);
    }

    return {
      columns,
      orders,
      orderStore,
      stateToBadgeMap,
      onRowClick,
      deleteOrder,
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
