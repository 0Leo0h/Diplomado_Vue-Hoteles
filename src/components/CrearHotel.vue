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
                                <router-link to="/crearhotel" class="text-danger nav-link">Crear Nuevo Hotel
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="shadow p-3 mb-5 bg-body rounded text-start">
                    <h4>Crear nuevo hotel</h4>
                    <form class="d-flex mt-2 row">
                        <div class="col">
                            <label for="" class="mt-3">Nombre</label>
                            <input v-model="hotel.name" type="text" class="form-control mt-2">
                            <div v-if="error.name" class="text-danger">
                                {{error.name[0]}}
                            </div>
                            <label for="" class="mt-3">Dirección</label>
                            <input v-model="hotel.address" type="text" class="form-control mt-2">
                            <div v-if="error.address" class="text-danger">
                                {{error.address[0]}}
                            </div>
                            <label for="" class="mt-3">Ciudad</label>
                            <select v-model="hotel.city_id" class="form-select" aria-label="Default select example">
                                <option v-for="ciudades in cities" :value="ciudades.id" :key="ciudades.id">
                                    {{ciudades.name}}</option>
                            </select>
                            <div v-if="error.city_id" class="text-danger">
                                {{error.city_id[0]}}
                            </div>
                        </div>
                        <div class="col">
                            <label for="" class="mt-3">NIT</label>
                            <input v-model="hotel.nit" type="text" class="form-control mt-2">
                            <div v-if="error.nit" class="text-danger">
                                {{error.nit[0]}}
                            </div>
                            <label for="" class="mt-3">Número de habitaciones</label>
                            <input v-model="hotel.num_rooms" type="text" class="form-control mt-2">
                            <div v-if="error.num_rooms" class="text-danger">
                                {{error.num_rooms[0]}}
                            </div>
                        </div>
                    </form>
                    <div v-if="success" class="alert alert-success mt-2" role="alert">
                        {{success}}
                    </div>
                    <div v-if="error.mensage" class="alert alert-danger mt-2" role="alert">
                        {{error.mensage}}
                    </div>
                    <div class="bg-light mt-2 text-end">
                        <button class="btn btn-success m-2 p-2" @click="crear()">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "CrearHotel",
    beforeMount() {
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities`)
            .then((response) => {
                this.cities = response.data
            });
    },
    data: function () {
        return {
            cities: [],
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null
            },
            error: {
                mensage: null,
                address: null,
                city_id: null,
                name: null,
                nit: null,
                num_rooms: null
            },
            success: null
        };
    },
    methods: {
        crear() {
            axios({
                method: 'post',
                url: `http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels`,
                data: this.hotel,
                responseType: 'json'
            }).then(res => {
                this.success = res.data.message;
            }).catch(error => {
                this.error.mensage = error.response.data.message;
                this.error.address = error.response.data.errors.address;
                this.error.city_id = error.response.data.errors.city_id;
                this.error.name = error.response.data.errors.name;
                this.error.nit = error.response.data.errors.nit;
                this.error.num_rooms = error.response.data.errors.num_rooms;
            })
        },
    }
};
</script>
<style>

</style>