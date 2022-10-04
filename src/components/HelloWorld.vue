<template>
  <div class="hello">
    <div class="container mt-5">
      <div class="shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row p-3">
          <div class="col-6 text-start">
            <h4 class="ms-5">Panel de Administración</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response.data.title);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
