import { Platform } from 'quasar'
import { uid } from 'quasar'
import { axios } from 'axios'

<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col" style="min-height: 1em; max-height: 1em;">
      </div>
    </div>
    <div class="row">
      <div class="col col-grow justify-center text-center">
        <q-btn rounded push glow color="purple" @click="loadData()">
          <q-icon left size="4rem" name="emoji_emotions"/>
          <div>Druk op deze speciale<br/>Chuck Norris button!</div>
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
