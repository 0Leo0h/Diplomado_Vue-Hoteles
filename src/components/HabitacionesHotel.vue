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
                                <router-link to="/hoteles" class="nav-link"> <strong class="me-2"> ></strong> Hoteles
                                    <strong class="ms-2">></strong>
                                </router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link :to="{name:'Habitaciones_Hotel', params:{id: id} }"
                                    class="text-danger nav-link">Habitaciones</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="row p-3">
                <div class="col-6 text-start">
                    <h4 class="ms-5"><strong>{{hotel?.name}}</strong></h4>
                    <p class="ms-5">Numero de habitaciones: {{hotel?.num_rooms}}</p>
                </div>
                <div class="col-6 text-end">
                    <h4 class="ms-5"><button class="btn btn-success">
                            <router-link :to="{name:'Crear_Habitacion', params:{id: id} }" class="nav-link">Crear
                                Habitacion</router-link>
                        </button></h4>
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
                        <th>{{ item.type.name }}</th>
                        <td>{{ item.accommodation.name }}</td>
                        <td>{{ item.quantity }}</td>
                        <td><button class="btn btn-warning me-5">
                                <router-link :to="{name:'Editar_Habitacion', params:{id: item.id} }" class="nav-link">
                                    Editar</router-link>
                            </button></td>
                        <td><button class="btn btn-danger me-5" @click="eliminar(item.id)">Eliminar
                            </button></td>
                    </tr>
                </tbody>
            </table>
                    <div v-if="success" class="alert alert-success mt-2" role="alert">
                        Habitacion Eliminada correctamente!
                    </div>
                    <div v-if="error.mensage" class="alert alert-danger mt-2" role="alert">
                        {{error.mensage}}
                    </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "HabitacionesHotel",
    beforeMount() {
        let idd = this.$route.params.id
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/${idd}`)
            .then((response) => {
                this.hotel = response.data.data;
            });
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/${idd}`)
            .then((response) => {
                this.items = response.data.data
            });
    },
    data() {
        let idd = this.$route.params.id
        return {
            id: idd,
            items: [],
            hotel: null,
            error: {
                mensage: null
            },
            success: null
        };
    },
    methods: {
        eliminar(id) {
            axios.delete(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/${id}`)
                .then(response => {
                    const nuevo = this.items.filter((item)=>item!=response.data.data)
                    this.items = nuevo 
                    this.success = response.data.success
                }).catch(error => {
                    this.error.mensage = error.response.data.message;
                });
        }
    }
};
</script>
  
<style>

</style>