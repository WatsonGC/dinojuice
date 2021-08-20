/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <q-page class="row items-center justify-evenly">
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
     <transition
          appear
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutLeft">
          <q-btn icon="fas fa-hat-cowboy-side" @Click="AddStore(this.storeNumber)"></q-btn>
          </transition>
          <span>TEST</span>
          <q-input v-model="storeNumber.storeNumber" /> -->
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta, DocumentData } from 'components/models';
import ExampleComponent from 'components/OptionsComponent.vue';
import { db } from 'src/boot/firebase';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  data () {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ];
    const meta: Meta = {
      totalCount: 1200
    };
    return {
      todos,
      meta,
      storeNumber: { storeNumber: '' },
    };
  },
  methods: {
    AddStore (storeNumber: any) {
      debugger;
      db.collection('StoreNumbers').add(storeNumber as DocumentData).then(() => {
        alert('store successfully created!');
        this.storeNumber.storeNumber = '';
      }).catch((error: any) => {
        console.log(error);
      });
    }
  }
});
</script>
