<template>
  <div>
    <GmapMap
        ref="mapRef"
        :center="$store.getters.center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 800px"
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in this.$store.state.markers"
            :position="m.position"
            :draggable="true"
            :clickable="true"
            @click="center=m.position"
            @dragend="updatedMarker => onDragEnd(updatedMarker, index)"
        />
    </GmapMap>
     <md-field>
      <label>Find andress</label>
      <md-input v-model="searchField" placeholder="Search"></md-input>
    </md-field>
     <md-button class="md-primary" @click="onAddMarker">
        Find and set marker
    </md-button>
  </div>
</template>

<script>
import { UPDATE_MARKER_MUTATION, ADD_MARKER_MUTATION } from './../store'

export default {
    data() {
        return {
            selectedDate: null,
            geocoder: null,
            searchField: '',
        };
    },
    methods: {
        onDragEnd(updatedMarker, index) {
            this.$store.commit({
                type: UPDATE_MARKER_MUTATION,
                index,
                position: {
                    lat: updatedMarker.latLng.lat(),
                    lng: updatedMarker.latLng.lng()
                }
            })
        },
        onAddMarker() {
            this.geocoder.geocode({ address: this.searchField }, (results, status) => {
                if (status === "OK") {
                    if (!results.length) return;

                      this.$store.commit({
                        type: ADD_MARKER_MUTATION,
                        title: this.searchField,
                        position: {
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                        }
                    });
                }
            })
        }
    },
    mounted() {
        this.$refs.mapRef.$mapPromise.then(() => {
            this.geocoder = new window.google.maps.Geocoder();
            console.log(this.geocoder)
        })
    }
}
</script>

<style>

</style>