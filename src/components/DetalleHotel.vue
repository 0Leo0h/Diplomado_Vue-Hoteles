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
                                <router-link :to="{name:'Detalle_Hotel', params:{id: items} }" class="text-danger nav-link">Actualizar Datos de
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
                            <input type="text" class="form-control mt-2" placeholder="">
                            <label for="" class="mt-3">Dirección</label>
                            <input type="text" class="form-control mt-2" placeholder="">
                            <label for="" class="mt-3">Ciudad</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">MONTERIA</option>
                                <option value="2">BARRANQUILLA</option>
                                <option value="3">MEDELLIN</option>
                                <option value="3">BOGOTA</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="" class="mt-3">NIT</label>
                            <input type="text" class="form-control mt-2" :placeholder="items">
                            <label for="" class="mt-3">Número de habitaciones</label>
                            <input type="text" class="form-control mt-2" placeholder="">
                        </div>
                        <div class="bg-light mt-2 text-end">
                            <a href="" class="text-danger text-decoration-none">Eliminar Hotel</a>
                            <button class="btn btn-secondary m-2 p-2">Actualizar Datos</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetalleHotel",
    data: function () {
        let idd = this.$route.params.id
        return {
            items: idd
        };
    },
};
</script>
<style>

</style>