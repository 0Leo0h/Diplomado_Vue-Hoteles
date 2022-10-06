<template>
  <div class="container mt-5">
    <div class="shadow-sm p-3 mb-5 bg-body rounded">
      <div class="row p-3">
        <div class="col-6 text-start">
          <h4 class="ms-5">Hoteles</h4>
        </div>
        <div class="col-6 text-end">
          <button class="btn btn-primary me-5">
            <router-link to="/crearhotel" class="nav-link">Crear hoteles</router-link>
          </button>
        </div>
      </div>
      <div class="shadow-none p-3 mb-5 bg-light rounded">
        <table class="table table-striped">
          <thead>
            <tr class="text-nowrap">
              <th scope="col">NIT</th>
              <th scope="col">NOMBRES</th>
              <th scope="col">DIRECCION</th>
              <th scope="col">CIUDAD</th>
              <th scope="col">CAPACIDAD HAB</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in hotels.data" :key="index">
              <th scope="row">{{ item.nit }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.city.name }}</td>
              <td>{{ item.num_rooms }}</td>
              <td><button class="btn btn-warning me-5">
                  <router-link :to="{name:'Detalle_Hotel', params:{id: item.id} }" class="nav-link">Detalles
                  </router-link>
                </button></td>
              <td><button class="btn btn-success me-5">
                  <router-link :to="{name:'Habitaciones_Hotel', params:{id: item.id} }" class="nav-link">Habitaciones
                  </router-link>
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyHoteles",
  beforeMount() {
    axios
      .get("http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels")
      .then((response) => {
        this.hotels = response.data
      });
  },
  data() {
    return {
      hotels: [],
    };
  },
};
</script>

<style scoped>

</style>