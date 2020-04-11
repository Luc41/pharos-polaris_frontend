<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col self-center">
        <span class="text-h1 text-weight-bold non-selectable">Pharos-Polaris.com</span>
      </div>
      <div class="col self-center">
        <span class="text-h3 non-selectable">something in here</span>
      </div>
      <div class="col self-center">
        <img id="logo" alt="main logo" src="../assets/logo.png" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Slide1",
  components: {}
};
</script>

<style scope>
span {
  color: aliceblue;
}

#logo {
  max-width: 300px;
  max-height: 300px;
  margin-top: 5em;
}
</style>