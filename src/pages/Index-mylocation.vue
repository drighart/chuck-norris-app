<template>
  <div class="fully">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
    >
      <vl-view :zoom.sync="zoom" :center.sync="geolocPosition" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="statics/marker.png" :scale="0.3" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-overlay id="overlay" :position="overlayCoordinate">
        <template slot-scope="scope">
          <div class="overlay-content">
            Hello world!<br>
            Position: {{ scope.position }}
          </div>
          <q-btn class="overlay" color="purple" icon="" label="Terug" to="/"/>
        </template>
      </vl-overlay>

    </vl-map>
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
        <q-btn round color="purple" icon="arrow_back" to="home" />
    </q-page-sticky>

  </div>
</template>

<style scoped>
  .fully {
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .backhome {
    overflow: hidden;
    display: block;
    visibility: visible;
    position: absolute;
    z-index: 999;
    left: 0px;
    width: 100%;
    height: 100%;
    padding-top: 20%;
  }
</style>

<script>
export default {
  data () {
    return {
      zoom: 12,
      center: [5.4717, 51.5240],
      rotation: 0,
      geolocPosition: undefined,
      overlayCoordinate: [0, 0]
    }
  }
}

</script>
