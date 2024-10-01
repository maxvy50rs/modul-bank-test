<template>
    <q-page
      class="q-pa-md row justify-center items-start"
      style="align-content: start;"
    >

    <q-circular-progress
      v-if="!orderDetails"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="indigo"
      center-color="grey-4"
      track-color="grey-2"
    />

    <div class="q-gutter-sm q-pa-lg col-12" v-if="!!orderDetails">
      <q-badge
        outline
        color="orange"
        :label="new Date(orderDetails.dadd).toLocaleString('en-GB')
          .split('/')
          .join('.')"
        />
        <q-badge
          :color="stateToBadgeMap.get(orderDetails.state)?.color"
          :label="stateToBadgeMap.get(orderDetails.state)?.label"
        />
    </div>

    <q-form
      v-if="!!orderDetails"
      class="col-12 row justify-center items-start"
      @submit="onSubmit(orderDetails)"
      greedy
    >

    <div class="col-6 q-px-lg q-pb-xl">
      <q-input
        class="q-mb-sm"
        filled
        v-model="orderDetails.company_name"
        label="Company name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        class="q-mb-sm"
        filled
        v-model="orderDetails.extra.partner.client_name"
        label="Partner name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-select
        class="q-mb-sm q-pb-lg"
        filled
        v-model="orderDetails.company_type"
        :options="businessStructureList"
        label="Business structure"
        stack-label
        lazy-rules
        :rules="[
          val => !!val || 'Please choose a form'
        ]"
      />

      <q-input
        class="q-mb-sm"
        filled
        type="number"
        v-model="orderDetails.inn"
        label="INN *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type INN',
          val => `${val}`.split('').length === 12  || 'Please type 12 digits'
        ]"
      />

      <q-select
        filled
        v-model="orderDetails.stg"
        multiple
        :options="stgsList"
        label="Product(s)"
        lazy-rules
        :rules="[
          val => Array.isArray(val) || 'Please choose at least one'
        ]"
      />
    </div>

    <div class="col-6 q-px-lg q-pb-xl">
      <q-input
        class="q-mb-sm"
        filled
        v-model="orderDetails.person_fullname"
        label="Contact person *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something' ]"
      />

      <q-input
        class="q-mb-sm q-pb-lg"
        v-model="orderDetails.person_phone"
        filled
        type="tel"
        label="Telephone number"
        stack-label
        lazy-rules
        :rules="[
          val => validatePhone(val) || 'Please use 7xxxxxxxxxx format'
        ]"
      />

      <q-input
        class="q-mb-lg"
        filled
        label="E-mail *"
        v-model="orderDetails.person_email"
        lazy-rules
        :rules="[
          (val) => validateEmail(val) || 'Please enter a valid email address'
        ]"
      />

      <div class="row justify-end q-mt-xl">
        <q-btn v-if="0" label="Reset" color="indigo" flat/>
        <q-btn label="Submit" color="indigo" type="submit"/>
      </div>
    </div>

    </q-form>
    </q-page>

</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useOrderStore } from 'src/stores/orders';
import { OrderExtended } from 'src/services/orders/types';
import { useTabsStore } from 'src/stores/tabs';

export default {
  setup() {
    const store = useOrderStore();
    const route = useRoute();
    const router = useRouter();
    const { removeTabByName } = useTabsStore();

    const orderIdParam = route.params.id as string;
    const { orderDetailsMap } = storeToRefs(store);
    function initOrderDetails(id: OrderExtended['id']) {
      const now = new Date(Date.now());
      if (id === 'new') {
        return {
          id: now.toISOString(),
          num: Math.floor(now.getTime() * 1e-9),
          dadd: now.toISOString(),
          state: 'init',
          extra: {
            partner: {
              client_name: '',
            },
          },
        } as unknown as OrderExtended;
      }
      return orderDetailsMap.value.get(id);
    }
    const orderDetails = ref();
    onMounted(async () => {
      if (orderIdParam !== 'new') await store.dispatchGetOrderById(orderIdParam);
      orderDetails.value = initOrderDetails(orderIdParam);
    });

    return {
      orderDetails,

      stateToBadgeMap: new Map([
        ['init', { label: 'Initial', color: 'red' }],
        ['finish', { label: 'Finished', color: 'green' }],
        ['progress', { label: 'WIP', color: 'orange' }],
      ]),

      validateEmail(email: string) {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },

      validatePhone(number: string) {
        return /[7]\d{10}/.test(number);
      },

      businessStructureList: ['UL', 'IP'],

      stgsList: ['ACCOPEN', 'FNS.REG'],

      onSubmit(payload: OrderExtended) {
        // eslint-disable-next-line no-console
        console.log(payload);
        if (orderIdParam === 'new') {
          store.dispatchCreateNewOrder(payload);
        } else {
          store.dispatchUpdateOrder(payload);
        }
        router.push('/orders');
        removeTabByName('/orders/new');
      },

      onReset() {},
    };
  },
};
</script>
