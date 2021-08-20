<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center">
    <div>
      <transition
          appear
          enter-active-class="animated bounceInDown slow"
          leave-active-class="animated bounceOutLeft slow"
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
  name: 'Error404'
});
</script>

<style lang="scss">
.slow {
    -webkit-animation-duration : 100;
    animation-duration: 100;
  }
</style>
