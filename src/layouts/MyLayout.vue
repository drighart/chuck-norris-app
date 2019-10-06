<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Chuck Norris App
        </q-toolbar-title>

        <div>v0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-maroon"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Uitleg</q-item-label>
            <q-item-label caption>Wat doet deze app?</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="chuck">
          <q-item-section avatar>
            <q-icon name="emoji_emotions" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Chuck Norris</q-item-label>
            <q-item-label caption>Wat zegt Chuck Norris over deze app?</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="mylocation">
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mijn locatie</q-item-label>
            <q-item-label caption>Toon mijn locatie op de kaart</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.liander.nl">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Liander</q-item-label>
            <q-item-label caption>https://www.liander.nl</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.github.com/Alliander">
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Over deze app (source-code)</q-item-label>
            <q-item-label caption>Wat doet deze app en hoe gaan we om met betrekking tot privacy van uw data?</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
