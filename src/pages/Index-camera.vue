<template>
  <div>
    <div class="camera-modal">
        <video ref="video" class="camera-sample" autoplay playsinline/>
        <div class="fixed-bottom taken">
            <q-btn color="purple" size="35px" @click="capture" round dense icon="camera"/>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .camera-modal {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: white;
      z-index: 10;
  }
  .camera-stream {
      width: 100%;
      max-height: 100%;
  }
  .take-picture-button {
      display: flex;
  }
  .camera-sample {
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scaleX(-1);
    filter: FlipH;
  }
  .taken {
    overflow: hidden;
    display: block;
    visibility: visible;
    position: absolute;
    z-index: 999;
    top: 65%;
    left: 0px;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 20%;
  }
</style>

<script>
export default {
  name: 'CameraPage',
  mounted () {
    const videoConstraints = {
      facingMode: 'environment'
    }
    const constraints = {
      video: videoConstraints,
      audio: false
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(mediaStream => {
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
        window.localStream = mediaStream
      })
      .catch(error => console.error('getUserMedia() error:', error))
  },
  destroyed () {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        mediaStream.getTracks().forEach(function (track) {
          console.log('stop')
          track.stop()
          track.stop()
        })
      })
      .catch(error => console.error('getUserMedia() error:', error))

    window.localStream.getTracks().forEach((track) => {
      track.stop()
    })
  },
  methods: {
    capture () {
      const mediaStreamTrack = this.$refs.video.srcObject.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(mediaStreamTrack)
      return imageCapture.takePhoto().then(blob => {
        console.log(blob)
        this.$router.push('home')
      })
    }
  }
}
</script>
