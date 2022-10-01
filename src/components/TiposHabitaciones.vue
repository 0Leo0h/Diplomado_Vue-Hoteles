<template>
  <div class="container mt-5">
    <div class="shadow-sm p-3 mb-5 bg-body rounded">
      <div class="row p-3">
        <div class="col-6 text-start">
          <h4 class="ms-5"><strong>Tipos de habitaciones</strong></h4>
        </div>
      </div>
      <table class="table table-striped text-start">
        <thead>
          <tr class="text-nowrap">
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in items" :key="index">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TipoHabitaciones",
  data: function () {
    return {
      items: [
        {
          id: 1,
          name: "Hola",
        },
        {
          id: 2,
          name: "Hola2",
        },
      ],
    };
  },
};
</script>

<style>

</style>