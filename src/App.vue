<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-transparent text-white" height-hint="98">
      <q-toolbar>
        <q-avatar>
          <img src="./assets/logo.png" alt="site logo" />
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
body {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(red),
    to(cyan)
  );
  background: linear-gradient(90deg, red, cyan);
  min-height: 100vh;
}
body:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(black)
  );
  -webkit-mask-image: linear-gradient(to bottom, transparent, black);
  mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(black)
  );
  mask-image: linear-gradient(to bottom, transparent, black);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(hotpink),
    to(#639)
  );
  background: linear-gradient(90deg, hotpink, #639);
}

a {
  text-decoration: none;
}
</style>
