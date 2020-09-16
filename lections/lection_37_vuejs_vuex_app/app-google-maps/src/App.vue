<template>
  <div id="app">
    <div class="flex-container">
      <div class="map-container">
        <GMap />
      </div>
      <div class="table-container">
        <MarkersMap />
      </div>
    </div>
  </div>
</template>

<script>
import GMap from './components/GMap';
import MarkersMap from './components/MarkersMap';
import { UPDATE_MARKERS_ACTION } from './store';

export default {
  name: 'App',
  components: {
    GMap,
    MarkersMap
  },
  methods: {
    onFindMe() {
    }
  },
  created() {
    const fakeMarkers = [{
        title: 'Marker 1',
        position: {
            lat: 10.0,
            lng: 10.0
        }
    },
    {
        title: 'Marker 2',
        position: {
            lat: 17.0,
            lng: 12.0
        }
    },
    {
        title: 'Marker 3',
        position: {
            lat: 18.0,
            lng: 9.0
        }
    }];

    Promise.resolve(fakeMarkers).then(data => {
      this.$store.dispatch({
        type: UPDATE_MARKERS_ACTION,
        markers: data
      })
    });
  }
}



</script>

<style>
.flex-container {
  display: flex;
}

.map-container, .table-container {
  width: 50%;
  padding: 10px;
}
</style>

