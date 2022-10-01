<template>
  <div class="container mt-5">
    <div class="shadow-sm p-3 mb-5 bg-body rounded">
      <div class="row p-3">
        <div class="col-6 text-start">
          <h4 class="ms-5">Hoteles</h4>
        </div>
        <div class="col-6 text-end">
          <button class="btn btn-primary me-5">
            <router-link to="/crearhotel" class="nav-link"
              >Crear hoteles</router-link
            >
          </button>
        </div>
      </div>
      <div class="shadow-none p-3 mb-5 bg-light rounded">
        <table class="table table-striped">
          <thead>
            <tr class="text-nowrap">
              <th scope="col">NIT</th>
              <th scope="col">NOMBRES</th>
              <th scope="col">APELLIDOS</th>
              <th scope="col">CIUDAD</th>
              <th scope="col">CAPACIDAD HAB</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in items" :key="index">
              <th scope="row">{{ item.nit }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.city.name }}</td>
              <td>{{ item.num_rooms }}</td>
              <td><button class="btn btn-warning me-5">
            <router-link :to="{name:'Detalle_Hotel', params:{id: item.id} }" class="nav-link"
              >Detalles</router-link
            >
          </button></td>
              <td><button class="btn btn-success me-5">
            <router-link :to="{name:'Habitaciones_Hotel', params:{id: item.id} }" class="nav-link"
              >Habitaciones</router-link
            >
          </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHoteles",
  data: function () {
    return {
      items: [
        {
          id: 7,
          city_id: 2,
          name: "GRAN HOTEL 3",
          nit: "22222",
          address: "Centro cerca al estadio",
          num_rooms: 55,
          city: {
            id: 2,
            name: "BARRANQUILLA",
          },
        },
        {
          id: 16,
          city_id: 2,
          name: "DECAMERON BARRANQUILLA",
          nit: "222",
          address: "CENTRO ESTADIO",
          num_rooms: 20,
          city: {
            id: 2,
            name: "BARRANQUILLA",
          },
        },
        {
          id: 17,
          city_id: 2,
          name: "DECAMERON BARRANQUILLA ORILLA DEL MAR",
          nit: "222234",
          address: "CENTRO ESTADIO",
          num_rooms: 20,
          city: {
            id: 2,
            name: "BARRANQUILLA",
          },
        },
        {
          id: 18,
          city_id: 1,
          name: "DECAMERON MONTERIA",
          nit: "67765",
          address: "CENTRO ESTADIO",
          num_rooms: 20,
          city: {
            id: 1,
            name: "MONTERIA",
          },
        },
        {
          id: 19,
          city_id: 4,
          name: "DECAMERON BOGOTA",
          nit: "11122121",
          address: "AV JIMENEZ",
          num_rooms: 45,
          city: {
            id: 4,
            name: "BOGOTA",
          },
        },
        {
          id: 20,
          city_id: 4,
          name: "DECAMERON REAL BGTA",
          nit: "345654",
          address: "AV 22",
          num_rooms: 212,
          city: {
            id: 4,
            name: "BOGOTA",
          },
        },
        {
          id: 21,
          city_id: 2,
          name: "HOTEL VIENTOS DEL MAR",
          nit: "5432",
          address: "FRG",
          num_rooms: 222,
          city: {
            id: 2,
            name: "BARRANQUILLA",
          },
        },
        {
          id: 24,
          city_id: 1,
          name: "DECAMERON RIO SINU",
          nit: "1112221",
          address: "AVENIDA PRIMERA",
          num_rooms: 35,
          city: {
            id: 1,
            name: "MONTERIA",
          },
        },
        {
          id: 25,
          city_id: 2,
          name: "CENTRO",
          nit: "323",
          address: "DSFADSF",
          num_rooms: 32,
          city: {
            id: 2,
            name: "BARRANQUILLA",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>