/* eslint-disable @typescript-eslint/no-unsafe-member-access */
<template>
<q-page>
  <div class="q-pa-md row items-start q-gutter-md">
            <div v-if="error">
                <q-dialog
                v-model="errorModal"
                transition-show="slide-up"
                transition-hide="rotate">
                <q-card style="min-width: 100px">
                  <q-card-section>
          <div class="text-h6">Registration Error</div>
        </q-card-section>
        <q-separator />
        <div class="text-red q-pa-sm">
           {{error}}
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
    <q-dialog
                v-model="congratsModal"
                transition-show="jackInTheBox slower"
                transition-hide="rotate">
                <q-card style="min-width: 100px">
                  <q-card-section>
          <div class="text-h6">Congrats</div>
        </q-card-section>
        <q-separator />
        <div class="text-secondary q-pa-sm">
           You may begin using Dino Juice Delivery App!
          </div>
        <q-card-actions align="center" class="text-accent">
          <q-btn :to="{name:'LoginChild'}" label="Login" />
        </q-card-actions>
      </q-card>
    </q-dialog>
                 <q-form
                       @submit="OnSubmit">
                     <div class="row fixed-center">
                <q-card >
                    <q-card-section>
                        <div class="text-h6 text-center">Register</div>
                        </q-card-section>
                        <q-separator />
                    <q-card-section>
                        <q-input color="primary"
                outlined
                v-model="form.name"
                label="Name"
                type="text"
                clearable
                required
                dense
                style="max-width:200px;"
                class="relative-position q-pa-xs">
                    </q-input>
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
                  <q-btn type="submit" class="text-secondary">Register</q-btn>
              </q-card-actions>
                </q-card>
                </div>
            </q-form>
    </div>
  </q-page>
</template>

<script>
import { firebaseAuth } from 'src/boot/firebase';

export default {
  name: 'Register',
  inject: ['storeMode'],
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      error: null,
      errorModal: false,
      isPassword: true,
      congratsModal: false
    };
  },
  methods: {
    OnSubmit () {
      firebaseAuth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          void data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {}).then(() => (this.ClearForm())).then(() => (this.popCongratsModal()));
        })
        .catch(err => {
          this.error = err.message;
          this.errorModal = true;
        });
    },
    ClearForm () {
      this.form.name = '',
      this.form.email = '',
      this.form.password = '';
    },
    popCongratsModal () {
      this.congratsModal = true;
    }
  }
};
</script>
