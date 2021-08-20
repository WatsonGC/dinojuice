<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center">
    <div>
      <transition
          appear
          enter-active-class="animated bounceInDown slower"
          leave-active-class="animated bounceOutLeft slower"
          >
      <div style="font-size: 30vh">
        Meteor strike
      </div>
      </transition>

      <div class="text-h2" style="opacity:.4">
        No more dinos :(
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Delivery404'
});
</script>

<style lang="scss">
</style>
