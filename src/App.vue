<template>
  <div id="app">
    <navbar></navbar>
    <banner></banner>
    <tiles ></tiles>
    <foot></foot>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import banner from "./components/banner";
import tiles from "./components/tiles";
import foot from "./components/footer";

export default {
  name:'app',
  components: {
    navbar,
    banner,
    tiles,
    foot
  }
}
</script>

<style>
.tile {
    margin: 10px;
    padding: 10px;
}
</style>

