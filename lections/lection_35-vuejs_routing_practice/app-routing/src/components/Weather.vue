<template>
  <div class="weather">
      
      Weather in {{ city }}
      <br>
    <Chart :chart-data="chartData"></Chart>
      <table border="1">
          <tr>
            <th>#</th>
            <th>Celsius</th>
          </tr>
          <tr v-for="record in weather.list" :key="record.dt">
              <td>{{ record.dt_txt }}</td>
              <td>{{ record.main.temp }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import Chart from './Chart'

export default {
    name: 'Weather',
    components: {
        Chart
    },
    data() {
        return {
            weather: [],
            chartData: {
                labels: [],
                datasets: []
            }
        }
    },
    computed: {
        city() {
            return this.$route.params.city;
        }
    },
    methods: {
        getWeather(city) {
             return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&id=2172797&appid=dffbf35644b6ee849314f61335bb9ebf`)
                .then(resp => resp.json())
                .then(resp => {
                    this.weather = resp;
                })
                .then(this.updateChart);
        },
        updateChart() {
            const labels = this.weather.list.map(item => item.dt_txt);
            const values = this.weather.list.map(item => item.main.temp);
            const temp_max = this.weather.list.map(item => item.main.feels_like);

            this.chartData = {
                labels,
                datasets: [{
                    label: 'Temp',
                    backgroundColor: '#00ff9345',
                    data: values
                },
                {
                    label: 'feels_like',
                    backgroundColor: '#0b66c1ab',
                    data: temp_max
                }]
            };
        }
    },
    created() {
        this.getWeather(this.city);
    },
    beforeRouteUpdate(to, from, next) {
        this.getWeather(to.params.city)
            .then(() => {
                next();
            })
    }
}
</script>

<style>
    .weather {
    }
</style>