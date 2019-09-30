import { Platform } from 'quasar'
import { uid } from 'quasar'
import { axios } from 'axios'

<template>
  <q-page class="flex flex-center">
    <q-btn color="purple" @click="loadData()">
      <q-icon left size="1em" name="emoji_emotions"/>
      <div>Press the Chuck Norris button!</div>
    </q-btn>
  </q-page>
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
            color: 'orange',
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
