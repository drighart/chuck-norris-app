import { Platform } from 'quasar'
import { uid } from 'quasar'
import { axios } from 'axios'

<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col full-width text-h6">
        Welkom bij deze voorbeeld app!<br>
      </div>
    </div>
    <div class="row">
      <div class="col" style="min-height: 1em; max-height: 1em;">
      </div>
    </div>
    <div class="row">
      <div class="col full-width text-subtitle1">
        Deze app bevat de basisfunctionaliteit om verder op te ontwikkelen. Zo is de stijl
        van de app helemaal ingericht op Liander en gebruikt het de kleuren en huisstijl zoals
        die is voorgeschreven. De app bepaalt jouw locatie en toont deze op een kaart middels
        Open Street Map en Openlayers. Ook wordt een publieke API aangeroepen om chuck
        Norris grappen op te halen en op het scherm te tonen. Op deze manier kun je vanuit
        de app communiceren met een backend systeem. Druk op de ronde knop hieronder (met
        de smiley) om de Chuck Norris grappen te bekijken - ze verdwijnen na 10 seconden.
      </div>
    </div>
    <div class="row">
      <div class="col" style="min-height: 1em; max-height: 1em;">
      </div>
    </div>
    <div class="row">
      <div class="col col-grow justify-center text-center">
        <q-btn round push glossy color="purple" to="chuck" size="xl">
          <q-icon size="2em" name="emoji_emotions"/>
        </q-btn>
      </div>
    </div>
  </div>

</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    showNotification () {
      this.$q.notify('Some other message')
    },
    loadData () {
      this.$axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) => {
          this.data = response.data
          this.chucky = this.data.value
          this.$q.notify({
            color: 'primary',
            textColor: 'white', // if default 'white' doesn't fit
            position: 'bottom-left',
            message: this.chucky,
            icon: 'thumb_up',
            timeout: 10000
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>
