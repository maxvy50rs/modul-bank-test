<template>
    <q-page
      class="q-pa-md row justify-center items-start"
      style="align-content: start;"
    >

    <q-circular-progress
      v-if="orderDetails === null"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="indigo"
      center-color="grey-4"
      track-color="grey-2"
    />

    <div class="q-gutter-sm q-pa-lg col-12" v-if="!(orderDetails === null)">
      <q-badge
        outline
        color="orange"
        :label="new Date(orderDetails.dadd).toISOString()
          .split('T')
          .join(', ')
          .slice(0, -8)"
        />
        <q-badge
          :color="stateToBadgeMap.get(orderDetails.state)?.color"
          :label="stateToBadgeMap.get(orderDetails.state)?.label"
        />
    </div>

    <q-form
      v-if="!(orderDetails === null)"
      @submit="onSubmit"
      @reset="onReset"
      class="col-12 row justify-center items-start"
    >

    <div class="col-6 q-px-lg q-pb-xl">
      <q-input
        class="q-mb-sm"
        filled
        v-model="orderDetails.company_name"
        label="Company name *"
        lazy-rules
        readonly
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-select
        class="q-mb-sm q-pb-lg"
        filled
        v-model="orderDetails.company_type"
        :options="businessStructureList"
        label="Business structure"
        stack-label
        readonly
      />

      <q-input
        class="q-mb-sm"
        filled
        type="number"
        v-model="orderDetails.inn"
        label="INN *"
        readonly
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type INN',
          val => val.toString().split('').length === 12  || 'Please type 12 digits'
        ]"
      />

      <q-select
        filled
        v-model="orderDetails.stg"
        multiple
        :options="stgsList"
        label="Product(s)"
        readonly
      />
    </div>

    <div class="col-6 q-px-lg q-pb-xl">
      <q-input
        class="q-mb-sm"
        filled
        v-model="orderDetails.person_fullname"
        label="Contact person *"
        readonly
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        class="q-mb-sm q-pb-lg"
        v-model="orderDetails.person_phone"
        filled
        type="tel"
        label="Telephone number"
        stack-label
        readonly
      />

      <q-input
        class="q-mb-sm"
        filled
        label="E-mail *"
        v-model="orderDetails.person_email"
        readonly
        lazy-rules
        :rules="[
          (val) => validateEmail(val) || 'Please enter a valid email address'
        ]"
      />
    </div>

      <div class="q-ml-auto q-pr-lg">
        <q-btn label="Reset" type="reset" color="indigo" flat class="q-ml-sm" disabled/>
        <q-btn label="Submit" type="submit" color="indigo" disabled/>
      </div>
    </q-form>
    </q-page>

</template>

<script lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useOrderStore } from 'src/stores/orders';

export default {
  setup() {
    const store = useOrderStore();
    const router = useRouter();
    const currentPath = router.currentRoute.value.fullPath;
    const orderId = currentPath.split('/')[2];
    onMounted(() => store.dispatchGetOrderById(orderId));

    const { orderDetails } = storeToRefs(store);

    return {

      orderDetails,

      stateToBadgeMap: new Map([
        ['init', { label: 'Initial', color: 'red' }],
        ['finish', { label: 'Finished', color: 'green' }],
        ['progress', { label: 'WIP', color: 'orange' }],
      ]),

      validateEmail(email: string) {
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
      },

      businessStructureList: ['UL', 'IP'],

      stgsList: ['ACCOPEN', 'FNS.REG'],

      onSubmit() {},

      onReset() {},
    };
  },
};
</script>
