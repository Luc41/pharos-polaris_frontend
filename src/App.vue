<template>
  <div id="app">
    <navbar></navbar>
    <banner></banner>
    <div class="container is_fluid">
      <div class="columns is-narrow">
        <div class="column">
          <tiles></tiles>
        </div>
        <div class="column">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import banner from "./components/banner";
import tiles from "./components/tiles";
import foot from "./components/footer";
import sidebar from "./components/sidebar";

export default {
  name: "app",
  components: {
    navbar,
    banner,
    tiles,
    sidebar,
    foot
  }
};
</script>

<style>
.tile {
  padding: 20px;
}

.card {
  margin-top: 60px;
}

</style>

