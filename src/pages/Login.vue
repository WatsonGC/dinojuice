<template>
  <q-page-container>
    <template v-if="storeMode.value === false">
  <div class="q-pa-md row items-start q-gutter-md">
            <div v-if="error">
                <q-dialog
                v-model="errorModal"
                transition-show="slide-up"
                transition-hide="rotate">
                <q-card style="min-width: 100px">
                  <q-card-section>
          <div class="text-h6">Login Error</div>
        </q-card-section>
        <q-separator />
        <div class="text-red  q-pa-sm">
           {{error}}
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
                </div>
                      <q-form
                       @submit="onSubmit">
                     <div class="row fixed-center">
                <q-card >
                    <q-card-section>
                        <div class="text-h6 text-center">Login</div>
                        </q-card-section>
                        <q-separator />
                    <q-card-section>
                <q-input color="primary"
                outlined
                v-model="form.email"
                label="Email"
                type="email"
                clearable
                required
                dense
                style="max-width:200px;"
                class="relative-position q-pa-xs">
                    </q-input>
                    <q-input color="primary"
                outlined
                v-model="form.password"
                label="Password"
                :type="isPassword ? 'password' : 'text'"
                clearable
                required
                dense
                style="max-width:200px;"
                class="relative-position q-pa-xs">
                <template v-slot:append>
          <q-icon
            :name="isPassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPassword = !isPassword"
          />
        </template>
                    </q-input>
              </q-card-section>
              <q-card-actions align="around">
                  <q-btn type="submit" class="text-secondary">Login</q-btn>
                  <q-btn :to="{name:'RegisterChild'}" class="text-accent">Register</q-btn>
              </q-card-actions>
                </q-card>
                </div>
            </q-form>
    </div>
    </template>
    <template v-else>
      <div style="font-size: 18vh" class="text-centered">
        Store 366
      </div>
      </template>
  </q-page-container>
</template>

<script>
import { firebaseAuth } from 'src/boot/firebase';
export default {
  name: 'Login',
  inject: ['storeMode'],
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null,
      errorModal: false,
      isPassword: true
    };
  },
  methods: {
    onSubmit () {
      firebaseAuth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push({ name: 'DeliveryChild' });
        })
        .catch(err => {
          this.error = err.message;
          this.errorModal = true;
        });
    },
  }
};
</script>
<style lang="scss">
</style>
