<template>
    <div class="container mt-5">
        <div class="shadow-sm p-3 mb-5 bg-body rounded">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/hoteles" class="nav-link"> <strong class="me-2"> ></strong> Hoteles <strong class="ms-2">></strong></router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link :to="{name:'Habitaciones_Hotel', params:{id: id} }" class="text-danger nav-link">Habitaciones</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="row p-3">
                <div class="col-6 text-start">
                    <h4 class="ms-5"><strong>Nombre de hotel?</strong></h4>
                    <p class="ms-5">Numero de habitaciones: </p>
                </div>
                <div class="col-6 text-end">
                    <h4 class="ms-5"><button class="btn btn-success">
                                <router-link :to="{name:'Crear_Habitacion', params:{id: id} }" class="nav-link">Crear Habitacion</router-link></button></h4>
                </div>
            </div>
            <table class="table table-striped text-start">
                <thead>
                    <tr class="text-nowrap">
                        <th scope="col">TIPO</th>
                        <th scope="col">ACOMODACIÓN</th>
                        <th scope="col">CANTIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in items" :key="index">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.name }}</td>
                        <td><button class="btn btn-warning me-5">
                                <router-link :to="{name:'Editar_Habitacion', params:{id: item.id} }" class="nav-link">Editar</router-link>
                            </button></td>
                        <td><button class="btn btn-danger me-5">Eliminar
                            </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "HabitacionesHotel",
    data: function () {
        let idd = this.$route.params.id
        return {
            id: idd,
            items: [
                {
                    id: idd,
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