<template>
  <div id="app">
    <navbar></navbar>
    <banner></banner>
    <div class="container is_fluid">
      <div class="columns is-mobile">
        <div class="column">
          <tiles></tiles>
        </div>
        <div class="column is-one-fifth"></div>
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

export default {
  name: "app",
  components: {
    navbar,
    banner,
    tiles,
    foot
  }
};
</script>

<style>
.tile {
  padding: 20px;
}


</style>

