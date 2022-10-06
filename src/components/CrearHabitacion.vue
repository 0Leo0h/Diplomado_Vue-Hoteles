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
                                </router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link :to="{name:'Habitaciones_Hotel', params:{id: items.id} }" class="nav-link">
                                    <strong class="me-2"> ></strong> Habitaciones
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'Crear_Habitacion', params:{id: items.id} }"
                                    class="text-danger nav-link"> <strong class="me-2">
                                        ></strong> Crear habitacion</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="shadow p-3 mb-5 bg-body rounded text-start">
                    <h4>{{items.name}}</h4>
                    <form class="d-flex mt-2 row">
                        <div class="col">
                            <label for="" class="mt-3">Tipo de habitación</label>
                            <select v-model="habitacion.room_type_id" class="form-select"
                                aria-label="Default select example">
                                <option v-for="room in rooms" :value="room.id" :key="room.id">
                                    {{room.name}}</option>
                            </select>
                            <div v-if="error.room_type_id" class="text-danger">
                                {{error.room_type_id[0]}}
                            </div>
                            <label for="" class="mt-3">Cantidad</label>
                            <input v-model="habitacion.quantity" type="text" class="form-control mt-2">
                            <div v-if="error.quantity" class="text-danger">
                                {{error.quantity[0]}}
                            </div>
                        </div>
                        <div class="col">
                            <label for="" class="mt-3">Acomodación</label>
                            <select v-model="habitacion.accommodation_id" class="form-select"
                                aria-label="Default select example">
                                <option v-for="acomodacion in acomodaciones" :value="acomodacion.id"
                                    :key="acomodacion.id">
                                    {{acomodacion.name}}</option>
                            </select>
                            <div v-if="error.accommodation_id" class="text-danger">
                                {{error.accommodation_id[0]}}
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
    name: "CrearHabitacion",
    beforeMount() {
        let idd = this.$route.params.id
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/${idd}`)
            .then((response) => {
                this.items = response.data.data;
            });
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types`)
            .then((response) => {
                this.acomodaciones = response.data
            });
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types`)
            .then((response) => {
                this.rooms = response.data
            });
    },
    data() {
        let idd = this.$route.params.id
        return {
            items: [],
            acomodaciones: [],
            rooms: [],
            habitacion: {
                accommodation_id: null,
                hotel_id: idd,
                quantity: null,
                room_type_id: null
            },
            error: {
                mensage: null,
                quantity: null,
                accommodation_id: null,
                room_type_id: null
            },
            success: null
        };
    },
    methods: {
        crear() {
            this.success = null;
            this.error.mensage = null;
            this.error.quantity = null;
            this.error.accommodation_id = null;
            this.error.room_type_id = null;
            axios({
                method: 'post',
                url: `http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms`,
                data: this.habitacion,
                responseType: 'json'
            }).then(res => {
                this.success = res.data.message
                this.habitacion.accommodation_id = null
                this.habitacion.quantity = null
                this.habitacion.room_type_id = null
            }).catch(error => {
                this.error.mensage = error.response.data.message;
                this.error.quantity = error.response.data.errors.quantity
                this.error.accommodation_id = error.response.data.errors.accommodation_id
                this.error.room_type_id = error.response.data.errors.room_type_id
            })
        },
    }
};
</script>
<style>

</style>