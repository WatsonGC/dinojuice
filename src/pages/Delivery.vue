<template>
  <div class="q-pa-md">

    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Enter BOL Information"
        icon="settings"
        :done="step > 1"
        style="min-height: 200px;"
      >
        Enter BOL Info
      </q-step>

      <q-step
        :name="2"
        title="Delivery in progress"
        icon="fas fa-poll-h"
        :done="step > 2"
        style="min-height: 200px;"
      >
        Delivery In Progress
      </q-step>

      <q-step
        :name="3"
        title="End Delivery"
        icon="fas fa-flag-checkered"
        :done="step > 3"
        style="min-height: 200px;"
      >
        End Delivery
      </q-step>

      <q-step
        :name="4"
        title="Delivery Complete"
        icon="far fa-save"
        style="min-height: 200px;"
      >
        Delivery Complete
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-green-8 text-white q-px-lg">
          Enter BOL Info
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-purple-8 text-white q-px-lg">
          Delivery In Progress
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-blue-8 text-white q-px-lg">
          End Delivery
        </q-banner>
        <q-banner v-else-if="step === 4" class="bg-orange-8 text-white q-px-lg">
          Delivery Complete!
        </q-banner>
        <q-banner v-else class="bg-blue-8 text-white q-px-lg">
          The final step is creating the ad...
        </q-banner>
      </template>
    </q-stepper>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Delivery404',
  data () {
    return {
      step: 1
    };
  }
});
</script>

<style lang="scss">
</style>
