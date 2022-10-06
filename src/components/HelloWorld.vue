<template>
  <div class="hello">
    <div class="container mt-5">
      <div class="shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row p-3">
          <div class="col-12 text-start">
            <h4 class="ms-5">Panel de Administración</h4>
          </div>
          <div class="col-6 text-start">
            <BarChart :chartData="testData" />
          </div>
          <div class="col-6 text-start">
            <DoughnutChart :chartData="testData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BarChart, DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "HelloWorld",
  components: { BarChart, DoughnutChart },
  beforeMount() {
    axios
      .get("http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels")
      .then((response) => {
        this.hotels = response.data.data
        for (let index = 0; index < this.hotels.length; index++) {
          if (this.hotels[index].city_id == 1) {
            this.monteria++;
          }
          if (this.hotels[index].city_id == 2) {
            this.barranquilla++;
          }
          if (this.hotels[index].city_id == 3) {
            this.medellin++;
          }
          if (this.hotels[index].city_id == 4) {
            this.bogota++;
          }
        }
        this.testData = {
          labels: ['MONTERIA', 'BARRANQUILLA', 'MEDELLIN', 'BOGOTA'],
            datasets: [
              {
                label: ['HOTELES'],
                data: [this.monteria, this.barranquilla, this.medellin, this.bogota],
                backgroundColor: ['#FFF554', '#FF8633', '#54FF85', '#54E3FF'],
              },
            ],
    }
      });
  },
  data() {
    return {
      hotels: [],
      monteria: 0,
      barranquilla:0,
      medellin:0,
      bogota:0,
      testData: {
        labels: ['MONTERIA', 'BARRANQUILLA', 'MEDELLIN', 'BOGOTA'],
        datasets: [
          {
            data: [10, 40, 60, 70],
            backgroundColor: ['#FF8633', '#54E3FF', '#FFF554', '#54FF85'],
          },
        ],
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
