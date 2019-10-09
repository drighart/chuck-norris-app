import { Platform } from 'quasar'
import { uid } from 'quasar'
import { axios } from 'axios'

<template>
  <div class="fixed-center">
    <q-btn push color="purple" label="Change image" @click="loadData" />
    <q-img
      :src="image_url"
      spinner-color="primary"
      spinner-size="82px"
      style="height: 400px; width: 300px; max-width: 400px"
    />
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
        <q-btn round color="purple" icon="arrow_back" to="home" />
    </q-page-sticky>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Happy',
  data () {
    this.$axios.get('https://api.giphy.com/v1/gifs/random?api_key=PmMi7et94kOWQoyv6IFGWyvWKkq24ekM&tag=happy funny&rating=R')
      .then((response) => {
        this.image_url = response.data.data.image_url
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Giphy failed',
          icon: 'report_problem'
        })
      })

    return {
      image_url: 'https://placeimg.com/500/300/nature'
    }
  },
  methods: {
    loadData () {
      this.$axios.get('https://api.giphy.com/v1/gifs/random?api_key=PmMi7et94kOWQoyv6IFGWyvWKkq24ekM&tag=happy funny&rating=R')
        .then((response) => {
          this.image_url = response.data.data.image_url
          // this.image_url = 'https://placeimg.com/500/300/nature'
          console.log(this.image_url)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Giphy failed',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>
