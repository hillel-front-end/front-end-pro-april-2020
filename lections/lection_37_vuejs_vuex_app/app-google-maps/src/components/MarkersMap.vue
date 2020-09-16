<template>
  <div>
      <md-table md-card>
          <md-table-toolbar>
            <h1 class="md-title">Markers</h1>
          </md-table-toolbar>

          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>Title</md-table-head>
            <md-table-head>Lat</md-table-head>
            <md-table-head>Lng</md-table-head>
          </md-table-row>

          <md-table-row v-for="(marker, index) in this.$store.state.markers" :key="index" @click="onCenterMapByMarkerID(index)">
            <md-table-cell md-numeric>{{ index }}</md-table-cell>
            <md-table-cell>
              <md-field md-inline>
                <md-input v-model="marker.title"></md-input>
              </md-field>
            </md-table-cell>
            <md-table-cell>
              <md-field md-inline>
                <md-input @input="value => { onInputChangeToNumber(marker.position, 'lat', value) }" :value="marker.position.lat" type="number"></md-input>
              </md-field>
            </md-table-cell>
            <md-table-cell>
              <md-field md-inline>
                <md-input @input="value => { onInputChangeToNumber(marker.position, 'lng', value) }" :value="marker.position.lng" type="number"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
        </md-table>
         <md-button class="md-fab md-primary" @click="onAddMarker">
            <md-icon>add</md-icon>
        </md-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ADD_EMPTY_MARKER_MUTATION, CENTER_UPDATE } from './../store'

export default {
    methods: {
        ...mapMutations({
            addEmptyMarker: ADD_EMPTY_MARKER_MUTATION,
            centerUpdate: CENTER_UPDATE
        }),
        onInputChangeToNumber(position, key, value) {
            position[key] = Number(value);
        },
        onAddMarker() {
            this.addEmptyMarker();
        },
        onCenterMapByMarkerID(index) {
          this.centerUpdate(index)
        }
    }
}
</script>

<style>

</style>