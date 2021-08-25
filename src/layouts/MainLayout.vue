/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Dino Juice Delivery App
        </q-toolbar-title>

        <!-- <div><q-btn icon="fas fa-cogs" @click="$q.dark.toggle()"></q-btn></div> -->
        <div>
          <transition
          appear
          enter-active-class="animated jackInTheBox slow"
          leave-active-class="animated bounceOutLeft slow"
          >
          <q-btn icon="fas fa-cogs" @click="this.settingsDialog = true"></q-btn>
          </transition>
          </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
    >
      <q-list>
        <a style="cursor: pointer;">
        <transition
          appear
          enter-active-class="animated jackInTheBox slower"
          leave-active-class="animated jackInTheBox slower"
          >
        <q-img
      src="~assets/dinojuice.png"
      spinner-color="white"
      :style="imageGrow"
      @click="goHome"
            />
        </transition>
        </a>
        <template v-if="this.storeMode === true">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        </template>
        <template v-else>
          <EssentialLink
          v-for="link in essentialLinksFiltered"
          :key="link.title"
          v-bind="link"
        />
          </template>
      </q-list>
    </q-drawer>
      <div>
      <q-dialog
      v-model="settingsDialog"
      persistent
      transition-show="slide-down"
      transition-hide="rotate">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Settings</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn :icon="$q.dark.isActive ? 'far fa-sun' : 'far fa-moon' " @click="$q.dark.toggle()"></q-btn> <span class="text-weight-medium text-secondary" style="margin-left:20px;">{{darkModeString}}</span>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn :icon="this.desktopMode ? 'fas fa-mobile' : 'fas fa-desktop' " @click="forceDesktopMode(this.desktopMode)"></q-btn> <span class="text-weight-medium text-secondary" style="margin-left:20px;">{{forceDesktopModeString}}</span>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn :icon="this.storeMode ? 'fas fa-truck-moving' : 'fas fa-store-alt' " @click="forceStoreMode(this.storeMode)"></q-btn> <span class="text-weight-medium text-secondary" style="margin-left:20px;">{{forceStoreModeString}}</span>
        </q-card-section>

        <q-card-actions align="right" class="text-accent">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Deliver Fuel',
    icon: 'fas fa-gas-pump',
    link: '/Delivery'
  },
  {
    title: 'Delivery History',
    icon: 'fas fa-book',
    link: '/History'
  }
];
const linksListFiltered = [
  {
    title: 'Deliver Fuel',
    icon: 'fas fa-gas-pump',
    link: '/Delivery'
  }
];

import { defineComponent, computed } from 'vue';
import { db } from 'src/boot/firebase';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksList,
      settingsDialog: false,
      miniState: false,
      desktopMode: false,
      storeMode: false,
      essentialLinksFiltered: linksListFiltered
    };
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    imageGrow () {
      if (this.miniState === true) { return 'height: 70px; max-width: 75px'; } else { return 'height: 140px; max-width: 150px'; }
    },
    goHome () {
      void this.$router.push({
        path: '/'
      });
    },
    forceDesktopMode (desktopMode: boolean) {
      if (this.desktopMode === false) { this.desktopMode = true; } else { this.desktopMode = false; }
      void db.collection('forceDesktopMode').doc('toggle').update({
        desktopMode
      });
    },
    forceStoreMode (storeMode: boolean) {
      if (this.storeMode === false) { this.storeMode = true; } else { this.storeMode = false; }
    }
  },
  computed: {
    darkModeString: function () {
      return this.$q.dark.isActive ? 'Too spooky, turn on the lights!' : 'Dark Mode';
    },
    forceDesktopModeString (): string {
      return this.desktopMode ? 'Mobile Responsive Mode' : 'Force Desktop Mode';
    },
    forceStoreModeString (): string {
      return this.storeMode ? 'Switch to Driver Mode' : 'Switch to Store Mode';
    }
  },
  provide () {
    return {
      desktopMode: computed(() => this.desktopMode),
      storeMode: computed(() => this.storeMode)
    };
  },
});
</script>

<style lang="scss">
</style>
