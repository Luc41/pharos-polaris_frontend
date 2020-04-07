<template>
  <q-layout view="hHh lpR fFf" id="content">
    <q-header class="bg-transparent text-white" height-hint="98">
      <q-toolbar>
        <q-avatar>
          <img src="./assets/logo.png" alt="navbar logo" />
        </q-avatar>
        <q-toolbar-title>Pharos-Polaris</q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/page1" label="HOME" />
          <q-route-tab to="/page2" label="SITES" />
          <q-route-tab to="/page3" label="ABOUT" />
          <q-route-tab to="/page4" label="CONTACT US" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-transparent text-white" reveal>
      <q-toolbar>
        <q-toolbar-title class="text-caption text-left">
          Powered by
          <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a> and
          <a href="https://quasar.dev/" target="_blank">Quasar</a>
        </q-toolbar-title>
        <q-toolbar-title
          class="text-caption text-right"
        >&copy;2020 Pharos-Polaris.com All Rights Reserved.</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <Slide1 />
      <Slide2 />
    </q-page-container>
  </q-layout>
</template>

<script>
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";

export default {
  name: "LayoutDefault",

  components: {
    Slide1,
    Slide2
  },

  data() {
    return {};
  }
};
</script>

<style>
html {
  height: 200%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #434343;
  background-image: linear-gradient(#434343, #282828);
}
#content {
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    );
  height: 100%;
  background-size: 50px 50px;
}

a {
  text-decoration: none;
}
</style>
