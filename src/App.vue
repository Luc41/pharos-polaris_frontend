<template>
  <div class="body" id="app">
    <navbar></navbar>

    <div class="container is-fullhd">
      <banner></banner>
    </div>


    <div class="container is_fullhd">
      <div class="columns">
        <div class="column">
          <tiles></tiles>
          <subtiles></subtiles>
        </div>
        <div class="column is-one-quarter-fullhd is-4">
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
import subtiles from "./components/subtiles"


export default {
  name: "app",
  components: {
    navbar,
    banner,
    tiles,
    sidebar,
    subtiles,
    foot
  }
};
</script>

<style>
.column {
  margin-top: 1em;
}

.body {
  background-color: #d1d1d1;
}
</style>

