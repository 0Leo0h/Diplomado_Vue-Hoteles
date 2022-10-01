<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron-spa/assets/logo.6d1fb753.png"
            alt="Logo"
            width="112"
            height="43"
            class="d-inline-block align-text-top"
          /></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/hoteles" class="nav-link">Hoteles</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link to="/habitacionesTipo" class="nav-link"
                >Tipos de habitaciones</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/acomodaciones" class="nav-link">Acomodaciones</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="border-bottom d-flex flex-row" style="background: white;">
      <div class="col-5 mt-3">
        <h5>Panel administrador</h5>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background: #f3f4f6;
}
</style>
