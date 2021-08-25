<template>
  <q-page-container>
<div class="q-pa-xs">
    <q-table
      :grid="($q.screen.xs && desktopMode.value === true)"
      title="Delivery Data"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      :filter="filter"
      :loading="bolLoading"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
       <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="props.selected ? 'text-primary' : ''">
            <q-separator />
             <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'sequence' && col.name !== 'delivery_Entry_ID' && col.name !== 'bol_Record_ID' && col.name !== 'entry_Style' && col.name !== 'entry_Type' && col.name !== 'json_EPA_Date')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            </q-card>
        </div>
      </template>
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" :bol_Number="filter ? 'far fa-surprise' : icon" />
          </div>
          <div class="full-width row flex-center text-secondary q-gutter-sm">
          <span>
            {{ message }}
          </span>
        </div>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </div>
    </q-page-container>
</template>

<script lang="ts">
import { db } from 'src/boot/firebase';
import { QuerySnapshot, DocumentData } from '@firebase/firestore-types';
import _ from 'lodash';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'History',
  inject: ['desktopMode'],
  data () {
    return {
      rows: [] as unknown[],
      columns: [
        {
          name: 'store_Number',
          label: 'Store Number',
          field: 'store_Number'
        },
        {
          name: 'sequence',
          label: 'Sequence',
          field: 'sequence'
        },
        {
          name: 'delivery_Entry_ID',
          label: 'Delivery Entry ID',
          field: 'delivery_Entry_ID'
        },
        {
          name: 'bol_Record_ID',
          label: 'Bol Record ID',
          field: 'bol_Record_ID'
        },
        {
          name: 'bol_Number',
          label: 'Bol Number',
          field: 'bol_Number'
        },
        {
          name: 'entry_Style',
          label: 'Entry Style',
          field: 'entry_Style'
        },
        {
          name: 'entry_Type',
          label: 'Entry Type',
          field: 'entry_Type'
        },
        {
          name: 'json_Delivery_Date',
          label: 'Delivery Date',
          field: 'json_Delivery_Date'
        },
        {
          name: 'json_EPA_Date',
          label: 'EPA Date',
          field: 'json_EPA_Date'
        },
        {
          name: 'tank_Number',
          label: 'Tank Number',
          field: 'tank_Number'
        },
        {
          name: 'qt_Grade',
          label: 'Grade',
          field: 'qt_Grade'
        },
        {
          name: 'gross',
          label: 'Gross',
          field: 'gross'
        },
        {
          name: 'actual',
          label: 'Actual',
          field: 'actual'
        },
        {
          name: 'net',
          label: 'Net',
          field: 'net'
        },
        {
          name: 'variance',
          label: 'Variance',
          field: 'variance'
        }
      ] as unknown[],
      filter: '',
      pagination: {
        rowsPerPage: 10
      },
    };
  },
  computed: {
    bolLoading () : boolean {
      return this.rows.length > 0 ? false : true;
      }
    },
  created () {
    db.collection('bols').onSnapshot((snapshotChange: QuerySnapshot<DocumentData>) => {
      this.rows = [];

      snapshotChange.docs.forEach((doc) => {
        this.rows.push(doc.data());
      });
    });
  },
});
</script>

<style lang="scss">
</style>
