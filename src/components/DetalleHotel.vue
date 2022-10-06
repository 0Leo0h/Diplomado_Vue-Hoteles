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
                                <router-link :to="{name:'Detalle_Hotel', params:{id: items} }"
                                    class="text-danger nav-link">Actualizar Datos de
                                    Hotel</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="shadow p-3 mb-5 bg-body rounded text-start">
                    <h4>Hotel</h4>
                    <form class="d-flex mt-2 row">
                        <div class="col">
                            <label for="" class="mt-3">Nombre</label>
                            <input type="text" class="form-control mt-2" v-model="hotel.name">
                            <label for="" class="mt-3">Dirección</label>
                            <input type="text" class="form-control mt-2" v-model="hotel.address">
                            <label for="" class="mt-3">Ciudad</label>
                            <select class="form-select" v-model="hotel.city_id">
                                <option v-for="ciudades in cities" :value="ciudades.id" :key="ciudades.id">
                                    {{ciudades.name}}</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="" class="mt-3">NIT</label>
                            <input type="text" class="form-control mt-2" v-model="hotel.nit">
                            <label for="" class="mt-3">Número de habitaciones</label>
                            <input type="text" class="form-control mt-2" v-model="hotel.num_rooms">
                        </div>
                    </form>
                    <div v-if="success" class="alert alert-success mt-2" role="alert">
                        {{success}}
                    </div>
                    <div v-if="error.mensage" class="alert alert-danger mt-2" role="alert">
                        {{error.mensage}}
                    </div>
                    <div class="bg-light mt-2 text-end">
                        <a @click="eliminar()" class="text-danger text-decoration-none">Eliminar Hotel</a>
                        <button class="btn btn-secondary m-2 p-2" @click="actualizar()">Actualizar Datos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "DetalleHotel",
    beforeMount() {
        let idd = this.$route.params.id
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/${idd}`)
            .then((response) => {
                this.hotel.name = response.data.data.name;
                this.hotel.nit = response.data.data.nit;
                this.hotel.address = response.data.data.address;
                this.hotel.num_rooms = response.data.data.num_rooms;
                this.hotel.city_id = response.data.data.city_id;
            });
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities`)
            .then((response) => {
                this.cities = response.data
            });
    },
    data() {
        let idd = this.$route.params.id
        return {
            items: idd,
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null
            },
            cities: [],
            error: {
                mensage: null
            },
            success: null
        };
    },
    methods: {
        actualizar() {
            this.success = null
            this.error.mensage = null;
            axios({
                method: 'put',
                url: `http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/${this.items}`,
                data: this.hotel,
                responseType: 'json'
            }).then(response => {
                this.hotel.name = response.data.data.name;
                this.hotel.nit = response.data.data.nit;
                this.hotel.address = response.data.data.address;
                this.hotel.num_rooms = response.data.data.num_rooms;
                this.hotel.city_id = response.data.data.city_id;
                this.success = response.data.message
            }).catch(error => {
                this.error.mensage = error.response.data.message;
            })
        },
        eliminar() {
            this.error.mensage = null;
            this.success = null;
            axios.delete(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/${this.items}`)
                .then(response => {
                    this.hotel.name = null;
                    this.hotel.nit = null;
                    this.hotel.address = null;
                    this.hotel.num_rooms = null;
                    this.hotel.city_id = null;
                    this.items = null;
                    this.success = response.data.message;
                }).catch(error => {
                    this.error.mensage = error.response.data.message;
                });
        }
    }
};
</script>
<style>

</style>