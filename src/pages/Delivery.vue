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
        lazy-rules="true"
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
          <div class="text-h6">Would you Like to Take a Photo of the BOL?</div>
        </q-card-section>
        <div align="center" class="text-primary">
          <q-btn @click="takePhoto = true;" flat label="Take Photo" />
          <q-btn @click="noThanksClicked = true;" flat label="No Thanks" />
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn flat @click="takePhotoDialog = false" label="Cancel" v-close-popup />
          <template v-if="this.photoTaken === true || this.noThanksClicked === true">
          <q-btn @click="addBolToDelivery(this.entryForm)" flat label="Save" v-close-popup />
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
           <vue-web-cam ref="webcam" class="full-width" :selectFirstDevice="true" />
          <q-btn @click="snapPhoto" flat label="Capture" />
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn flat @click="takePhotoDialog = false" label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="imagePreviewDialog"
      persistent
      transition-show="slide-up"
      transition-hide="rotate">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Take a Photo of the BOL</div>
        </q-card-section>
        <div align="center" class="text-primary">
          <q-img :src="`data:image/png;base64,${this.cleanedString}`" />
           <q-btn @click="saveImageToBol(this.cleanedString)" flat label="Save" v-close-popup />
          <q-btn @click="this.imagePreviewDialog = false" flat label="Try Again" v-close-popup/>
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn flat @click="takePhotoDialog = false" label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
      </q-form>
          <div v-for="bol in bolList.filter(x => Object.keys(x).length !== 0)" v-bind:key="bol">
            <q-card>
              <q-card-actions>
                <q-btn icon="fas fa-minus-circle" color="red" @click="deleteBol(bol.bolNumber)">
                  <span class="q-pl-xs">
                  Delete this BOL
                  </span>
                </q-btn>
              </q-card-actions>
            <q-card-section>
              <div class="row">
              <div class="text-h6">
                BOL # {{bol.bolNumber}} |
                </div>
                <div class="text-h6">
                Photo Attached {{bol.hasImage}}
                </div>
                </div>
                <q-separator />
                <div class="text-h6">
                Loading Date {{bol.loadingDate}}
                </div>
                <q-separator />
                <div class="text-h6">
                Driver {{bol.driverName}}
                </div>
                <q-separator />
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
        <div v-for="tank in begTankReadings" v-bind:key="tank">
          <q-card>
            <q-card-section>
              <div class="col">
              <q-knob
                show-value
                font-size="10px"
                class="q-ma-md"
                v-model="tank.percentFull"
                size="80px"
                :thickness="0.25"
                color="primary"
                track-color="grey-3"
              >
                <q-avatar size="60px">
                  <img src="~/assets/dinojuice.png">
                </q-avatar>
              </q-knob>
              </div>
              <div class="col">
              <span class="bottom 1-ml-xl text-subtitle2">{{tank.percentFull}}%</span>
              </div>
              <div class="col-2">
               <span>Tank Number: {{tank.Tank_Number}} </span>
              <span>Grade: {{tank.Abbr}} </span>
              <span>Gallons: {{tank.Tank_Number}} </span>
              <span>Ullage: {{tank.Ullage}} </span>
              <span>Capacity: {{tank.Capacity}}</span>
              </div>
              </q-card-section>
            </q-card>
            </div>
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
import WebCam from 'src/components/webcam.vue';

export default defineComponent({
  name: 'Delivery',
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    'vue-web-cam': WebCam
  },
  data () {
    return {
      step: 1,
      takePhotoDialogPrompt: false,
      takePhoto: false,
      photoTaken: false,
      imagePreviewDialog: false,
      noThanksClicked: false,
      tankLevel: 30,
      cleanedString: '',
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
        loadingDate: ref(`${new Date().toISOString().replace('T', ' ').replace('Z', '').slice(0, -4)}`),
        BolImage: ''
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
      begTankReadings: [
        {
          Entry_ID: 482765075,
          Store_Number: 366,
          Sequence: 9997,
          Division: 3,
          Entry_Date_Time: '2021-08-23T16:16:38.4826592-05:00',
          Successfull: 1,
          Tank_Number: 1,
          Gallons: 6956,
          Ullage: 12825,
          Inches: 45.81,
          Temperature: 76.21,
          Water: 0,
          Capacity: 19782,
          LowFuel1: 750,
          LowFuel2: 2000,
          LowFuel3: 3000,
          LowFuel4: 4000,
          Grade: 2,
          Abbr: 'UNLE10',
          EPA_Tank_ID: 2013121701,
          Avg_Sales: 8012,
          IsUtc: true,
          percentFull: 35.16
        },
        {
          Entry_ID: 482765076,
          Store_Number: 366,
          Sequence: 9997,
          Division: 3,
          Entry_Date_Time: '2021-08-23T16:16:38.4866490-05:00',
          Successfull: 1,
          Tank_Number: 2,
          Gallons: 7113,
          Ullage: 12668,
          Inches: 46.55,
          Temperature: 75.73,
          Water: 0,
          Capacity: 19782,
          LowFuel1: 750,
          LowFuel2: 2000,
          LowFuel3: 3000,
          LowFuel4: 4000,
          Grade: 2,
          Abbr: 'UNLE10',
          EPA_Tank_ID: 2013121701,
          Avg_Sales: 8012,
          IsUtc: true,
          percentFull: 35.95
        },
        {
          Entry_ID: 482765077,
          Store_Number: 366,
          Sequence: 9997,
          Division: 3,
          Entry_Date_Time: '2021-08-23T16:16:38.4896407-05:00',
          Successfull: 1,
          Tank_Number: 3,
          Gallons: 3401,
          Ullage: 6079,
          Inches: 45.91,
          Temperature: 76.11,
          Water: 0,
          Capacity: 9481,
          LowFuel1: 750,
          LowFuel2: 2000,
          LowFuel3: 3000,
          LowFuel4: 4000,
          Grade: 5,
          Abbr: 'PREE10',
          EPA_Tank_ID: 2013121702,
          Avg_Sales: 1234,
          IsUtc: true,
          percentFull: 35.87
        },
        {
          Entry_ID: 482765078,
          Store_Number: 366,
          Sequence: 9997,
          Division: 3,
          Entry_Date_Time: '2021-08-23T16:16:38.4936297-05:00',
          Successfull: 1,
          Tank_Number: 4,
          Gallons: 4108,
          Ullage: 7499,
          Inches: 35.05,
          Temperature: 79.41,
          Water: 0,
          Capacity: 11608,
          LowFuel1: 750,
          LowFuel2: 2000,
          LowFuel3: 3000,
          LowFuel4: 4000,
          Grade: 13,
          Abbr: 'DSL',
          EPA_Tank_ID: 2013121703,
          Avg_Sales: 642,
          IsUtc: true,
          percentFull: 35.38
        },
        {
          Entry_ID: 482765079,
          Store_Number: 366,
          Sequence: 9997,
          Division: 3,
          Entry_Date_Time: '2021-08-23T16:16:38.4966222-05:00',
          Successfull: 1,
          Tank_Number: 5,
          Gallons: 1239,
          Ullage: 9181,
          Inches: 22.34,
          Temperature: 75.87,
          Water: 0.48,
          Capacity: 10420,
          LowFuel1: 750,
          LowFuel2: 1250,
          LowFuel3: 1500,
          LowFuel4: 2000,
          Grade: 1,
          Abbr: 'UNLEAD',
          EPA_Tank_ID: 2013121704,
          Avg_Sales: 222,
          IsUtc: true,
          percentFull: 11.89
        }
      ]
    };
  },
  methods: {
    onSubmit () {
      return 1;
    },
    onReset () {
      return 1;
    },
    // addBolToDeliveryNoPhoto (entryForm: any) {
    //   this.takePhotoDialogPrompt = false;
    //   const clonedEntryFormNoPhoto = { ...entryForm };
    //   this.bolList.push(clonedEntryFormNoPhoto);
    // },
    addBolToDelivery (entryForm: any) {
      this.noThanksClicked = false;
      this.takePhotoDialogPrompt = false;
      this.photoTaken = false;
      const clonedEntryForm = { ...entryForm };
      this.bolList.push(clonedEntryForm);
      this.entryForm = {
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
        // loadingDate: ref(`${new Date().toISOString().replace('T', ' ').replace('Z', '').slice(0, -4)}`).value,
        loadingDate: ref(`${new Date().toISOString().replace('T', ' ').replace('Z', '').slice(0, -4)}`).value,
        BolImage: ''
      };
    },
    deleteBol (bol: any) {
      // this.bolList = this.bolList.filter(x => Object.keys(x).length !== 0).splice(this.bolList.filter(x => Object.keys(x).length !== 0).indexOf(bol), 1);
      this.bolList = _.remove(this.bolList, function (n: any) { return n.bolNumber !== bol; });
    },
    snapPhoto () {
      const vm : any = this;
      const base64string = vm.$refs.webcam.capture().replace('data:image/jpeg;base64,', '');
      // var base64string = vm.$refs.webcam.capture();
      this.imagePreviewDialog = true;
      return this.cleanedString = base64string;
    },
    saveImageToBol (base64: any) {
      this.entryForm.hasImage = true;
      this.entryForm.BolImage = base64;
      this.takePhoto = false;
      this.imagePreviewDialog = false;
      this.photoTaken = true;
    }
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
