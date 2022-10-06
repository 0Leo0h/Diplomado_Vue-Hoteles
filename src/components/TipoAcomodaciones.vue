<template>
    <div class="container mt-5">
        <div class="shadow-sm p-3 mb-5 bg-body rounded">
            <div class="row p-3">
                <div class="col-6 text-start">
                    <h4 class="ms-5"><strong>Acomodaciones</strong></h4>
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
import axios from "axios";

export default {
    name: "TipoAcomodaciones",
    beforeMount() {
        axios.get(`http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types`)
            .then((response) => {
                this.items = response.data
            });
    },
    data: function () {
        return {
            items: [],
        };
    },
};
</script>
<style>

</style>