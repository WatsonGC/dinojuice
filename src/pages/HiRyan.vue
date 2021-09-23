<template>
  <q-page>
    <!-- <div style="font-size: 18vh" class="text-centered">
{{message}}
</div> -->
      <div class="row">
      <q-input v-model="loadingDate" stack-label filled type="date" label="Loading date" style="max-width:250px;min-width:250px;" class="q-pa-sm"/>
      <q-input v-model="loadingTime" stack-label filled type="time" label="Loading time" style="max-width:250px;min-width:250px;" class="q-pa-sm"/>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'HiRyan',
  data () {
    return {
      message: 'Hi Ryan!',
      loadingDate: '',
      loadingTime: ''
    };
  },
};
</script>
<style lang="scss">
</style>
