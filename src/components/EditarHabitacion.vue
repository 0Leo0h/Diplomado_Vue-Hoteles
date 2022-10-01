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
                                <router-link to="/hoteles" class="nav-link"> <strong class="me-2"> ></strong> Hoteles</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link :to="{name:'Habitaciones_Hotel', params:{id: items} }" class="nav-link"> <strong class="me-2"> ></strong> Habitaciones</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'Editar_Habitacion', params:{id: items} }" class="text-danger nav-link"> <strong class="me-2"> ></strong> Editar habitacion</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="shadow p-3 mb-5 bg-body rounded text-start">
                    <h4>Editar habitacion</h4>
                    <form class="d-flex mt-2 row">
                        <div class="col">
                            <label for="" class="mt-3">Tipo de habitación</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">JUNIOR</option>
                                <option value="2">ESTANDAR</option>
                                <option value="3">SUITE</option>
                            </select>
                            <label for="" class="mt-3">Cantidad</label>
                            <input type="text" class="form-control mt-2" placeholder="">
                        </div>
                        <div class="col">
                            <label for="" class="mt-3">Acomodación</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">TRIPLE</option>
                                <option value="2">DOBLE</option>
                                <option value="3">SENCILLA</option>
                                <option value="3">CUADRUPLE</option>
                            </select>
                        </div>
                        <div class="bg-light mt-2 text-end">
                            <button class="btn btn-info m-2 p-2">Actualizar habitación</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EditarHabitacion",
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