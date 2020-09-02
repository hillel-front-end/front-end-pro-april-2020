<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <button class="menu-item-action" v-for="item in menuItems" :key="item.title">
         <router-link :to="item.path">{{item.title}}</router-link>
      </button>
      <button class="menu-item-action" @click="onWeatherClick">
        Weater
      </button>
      <div class="menu-item-action">
        <select name="" id="" v-model="selectedCity">
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Odessa">Odessa</option>
        </select>
      </div>
    </div>
    <hr>
    <router-view></router-view>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      menuItems: [{title: 'Home', path: '/'}, {title: 'Welcome', path: '/welcome'}],
      selectedCity: null
    }
  },
  watch: {
      selectedCity() {
          // this.$router.push(['weather', this.selectedCity]);
          // this.$router.push({ path: `/weather/${this.selectedCity}`, query: {test: 'value'}});
          // this.$router.push({ name: 'WeatherWithCityRoute', params: { city: this.selectedCity },  query: {test: 'value'}});
          if (this.$route.params.city !== this.selectedCity) {
            this.$router.push({ name: 'WeatherWithCityRoute', params: { city: this.selectedCity }});
          }
          
      }
  },
  created() {
    this.selectedCity = this.$route.params.city;
  },
  methods: {
    onWeatherClick() {
      const path = '/weather'
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-item-action a, .menu-item-action {
  text-decoration: none;
  color: black;
  margin: 0 10px;
}
</style>
