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
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="row">
      <q-input
        filled
        v-model="entryForm.bolNumber"
        label="BOL Number"
        lazy-rules
        dense
        class="q-pa-sm"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
</div>
<div class="q-gutter-md">
      <q-select
        filled
        v-model="entryForm.carrier"
        label="Carrier"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="carrierOptions"
      >
      </q-select>
      <q-select
        filled
        v-model="entryForm.driverName"
        label="Driver Name"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="driverOptions"
      >
      </q-select>
      <q-input
        filled
        v-model="entryForm.tractor"
        label="Tractor"
        lazy-rules
        dense
        class="q-pa-sm"
        style="max-width: 200px;"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="entryForm.trailer"
        label="Trailer"
        lazy-rules
        dense
        class="q-pa-sm"
        style="max-width: 200px;"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
       <div class="q-pa-md" style="max-width: 300px">
    <q-input filled v-model="entryForm.loadingDate" label="Loading Date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="entryForm.loadingDate" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="entryForm.loadingDate" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-select
        filled
        v-model="entryForm.terminal"
        label="Terminal"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="terminalOptions"
      >
      </q-select>
      <q-select
        filled
        v-model="entryForm.supplier"
        label="Supplier"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="supplierOptions"
      >
      </q-select>
      <q-select
        filled
        v-model="entryForm.tank"
        label="Tank"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="tankOptions"
      >
      </q-select>
      <q-select
        filled
        v-model="entryForm.product"
        label="Product"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="productOptions"
      >
      </q-select>
      <q-input
        filled
        v-model="entryForm.gross"
        label="Gross"
        lazy-rules
        dense
        class="q-pa-sm"
        style="max-width: 200px;"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="entryForm.net"
        label="Net"
        lazy-rules
        dense
        class="q-pa-sm"
        style="max-width: 200px;"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <template v-if="isSplitLoad === true">
            <q-select
        filled
        v-model="entryForm.splitLoadStore"
        label="Split Load Store"
        lazy-rules
        dense
        options-dense
        clearable
        class="q-pa-sm"
        style="max-width: 200px;"
        :options="splitLoadStoreOptions"
      >
      </q-select>
      </template>
  </div>
      </div>
      <!-- <q-btn icon="fas fa-plus" @click="addBolToDelivery(this.entryForm)"> -->
        <q-btn icon="fas fa-plus" @click="takePhotoDialogPrompt = true">
         <q-tooltip class="bg-accent">Add this BOL to Delivery</q-tooltip>
         <span class="q-pl-xs">
      Add this BOL to Delivery
      </span>
      </q-btn>
      <q-dialog
      v-model="takePhotoDialogPrompt"
      persistent
      transition-show="slide-down"
      transition-hide="rotate">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Take a Photo of the BOL</div>
        </q-card-section>
        <div align="center" class="text-primary">
          <q-btn @click="takePhoto = true;" flat label="Take Photo" />
          <q-btn @click="addBolToDeliveryNoPhoto(this.entryForm)" flat label="No Thanks" v-close-popup />
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn flat @click="takePhotoDialog = false" label="Cancel" v-close-popup />
          <template v-if="this.photoTaken === true">
          <q-btn flat label="Save" v-close-popup />
          </template>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="takePhoto"
      persistent
      transition-show="slide-up"
      transition-hide="rotate">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Take a Photo of the BOL</div>
        </q-card-section>
        <div align="center" class="text-primary">
          <!-- <q-btn @click="takePhoto = true;" flat label="Take Photo" />
          <q-btn @click="addBolToDeliveryNoPhoto(this.entryForm)" flat label="No Thanks" v-close-popup /> -->
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn flat @click="takePhotoDialog = false" label="Cancel" v-close-popup />
          <template v-if="this.photoTaken === true">
          <q-btn flat label="Save" v-close-popup />
          </template>
        </q-card-actions>
      </q-card>
    </q-dialog>
      </q-form>
        <!-- <q-list>
        <q-item-section>
          <q-item v-for="bol in bolList" v-bind:key="bol">
            <span>{{bol.bolNumber}}</span>
          </q-item>
          </q-item-section>
          </q-list> -->
          <div v-for="bol in bolList.filter(x => Object.keys(x).length !== 0)" v-bind:key="bol">
            <q-card>
              <q-card-actions>
                <q-btn icon="fas fa-minus-circle" @click="deleteBol(bol.bolNumber)">
                  <span class="q-pl-xs">
                  Delete this BOL
                  </span>
                </q-btn>
              </q-card-actions>
            <q-card-section>
              <div class="text-h6">
                BOL # {{bol.bolNumber}} | 
                </div>
                <div class="text-h6">
                Has Photo {{bol.hasImage}}
                </div>
                <q-separator />
                <div class="text-h6">
                Loading Date {{bol.loadingDate}}
                </div>
                <q-separator />
                <div class="text-h6">
                Driver {{bol.driverName}}
                </div>
                <div class="row">
                <div class="text-h6">
                 Carrier {{bol.carrier}} |
                </div>
                <div class="text-h6">
                 Terminal {{bol.terminal}} |
                </div>
                <div class="text-h6">
                 Supplier {{bol.supplier}}
                </div>
                </div>
                <q-separator />
                <div class="row">
                <div class="text-h6">
                Tractor {{bol.tractor}} |
                </div>
                <div class="text-h6">
                Trailer {{bol.trailer}}
                </div>
                </div>
                <q-separator />
                <div class="row">
                <div class="text-h6">
                Tank {{bol.tank}} |
                </div>
                <div class="text-h6">
                Product {{bol.product}} |
                </div>
                <div class="text-h6">
                Gross {{bol.gross}} |
                </div>
                <div class="text-h6">
                Net {{bol.net}}
                </div>
                </div>
              </q-card-section>

            </q-card>
            </div>
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
          <q-btn @click="$refs.stepper.next()" :disable="(bolList.filter(x => Object.keys(x).length !== 0)).length === 0" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
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
import { defineComponent, ref } from 'vue';
import _ from 'lodash';

export default defineComponent({
  name: 'Delivery',
  data () {
    return {
      step: 1,
      takePhotoDialogPrompt: false,
      takePhoto: false,
      photoTaken: false,
      entryForm: {
        bolNumber: '',
        carrier: '',
        driverName: '',
        tractor: '',
        trailer: '',
        terminal: '',
        supplier: '',
        tank: '',
        product: '',
        gross: '',
        net: '',
        splitLoadStore: '',
        hasImage: false,
        loadingDate: ref(`${new Date().toISOString().replace('T', ' ').replace('Z', '').slice(0, -4)}`)
      },
      isSplitLoad: false,
      bolList: [{}],
      terminalOptions: [
        'Magellan #1 Texarkana',
        'Magellan #2 Texahoma',
        'Marathon - Zimbabwe',
        'CITGO - CITGO Real Fast'
      ],
      supplierOptions: [
        'QT Fuels Inventory',
        'Direct Fuels Rack',
        'ExxonMobil Rack',
        'ExxonMobil Contract',
        'Flint Hills Rack',
        'Flint Hills Day Deal'
      ],
      tankOptions: ['Tanks 1,2 UNLEADED',
        'Tank 3 PREMIUM',
        'Tank 4 DIESEL-AUTO',
        'Tank 5 UNL-NO-ETHANOL'],
      productOptions: [
        'UNL-NO-ETHANOL',
        'UNLEADED',
        'PREMIUM',
        'DIESEL-AUTO',
        'BLEND MID-GRADE UNLEADED'
      ],
      splitLoadStoreOptions: [
        '310',
        '313',
        '314',
        '315',
        '316',
        '320',
        '321',
        '322',
        '326',
        '327',
        '328',
        '329',
        '343',
        '345',
        '347',
        '349',
        '353',
        '356',
        '357',
        '358',
        '359',
        '360',
        '363',
        '366',
        '368',
        '369',
        '372',
        '373',
        '374',
        '376',
        '378',
        '383',
        '384',
        '386',
        '388',
        '389',
        '391',
        '394',
        '396'
      ],
      carrierOptions: [
        'Groendyke',
        'United Petroleum Transport',
        'Star Transport',
        'Other'
      ],
      driverOptions: [
        'Steven "GasBoy" Jones',
        'Bill Spilldude',
        'Daniel Jackson',
        'Skim Beeble'
      ],
    };
  },
  methods: {
    onSubmit () {
      return 1;
    },
    onReset () {
      return 1;
    },
    addBolToDeliveryNoPhoto (entryForm: any) {
      this.takePhotoDialogPrompt = false;
      const clonedEntryForm = { ...entryForm };
      this.bolList.push(clonedEntryForm);
    },
    addBolToDelivery (entryForm: any) {
      const clonedEntryForm = { ...entryForm };
      this.bolList.push(clonedEntryForm);
    },
    deleteBol (bol: any) {
      // this.bolList = this.bolList.filter(x => Object.keys(x).length !== 0).splice(this.bolList.filter(x => Object.keys(x).length !== 0).indexOf(bol), 1);
      this.bolList = _.remove(this.bolList, function (n: any) { return n.bolNumber !== bol; });
    },
  },
  computed: {
    filteredBolList () : any {
      const filteredList = this.bolList.filter((x: any) => Object.keys(x).length !== 0);
      return filteredList;
    }
  }
});
</script>

<style lang="scss">
</style>
