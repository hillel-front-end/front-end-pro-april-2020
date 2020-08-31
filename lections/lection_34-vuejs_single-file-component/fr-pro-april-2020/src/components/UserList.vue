<template>
  <div>
    <span class="main-text" v-for="item in size" :key="item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos ut ullam autem sint impedit,      
    </span>
    <div v-if="weather">
      <button @click="onWeatherSync">Sync</button>
      <br>
      Cloudy: {{ weather.clouds.all }} 
      <br>
      Weahter: {{ getWeather().description }}
      <br>
      {{ getWeather().main }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'UserList',
    props: {
      size: Number
    },
    data() {
      return {
        weather: null
      }
    },
    methods: {
      getWeather() {
        return this.weather.weather[0];
      },
      onWeatherSync() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=id`)
        .then(resp => resp.json())
        .then(resp => {
          // console.log(resp)
          this.weather = resp;
        })
      }
    },
    created() {
    
      setInterval(() => {
         this.onWeatherSync();
      }, 1000)
    }
}
</script>

<style>
    .main-text {
        color: grey;
    }
</style>