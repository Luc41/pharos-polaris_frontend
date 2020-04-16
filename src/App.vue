<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-transparent text-white">
      <q-toolbar>
        <q-avatar>
          <img src="./assets/logo-white.png" alt="navbar logo" />
        </q-avatar>
        <q-toolbar-title>Pharos-Polaris</q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/" label="home" />
          <q-route-tab to="/sites" label="sites" />
          <q-route-tab to="/about" label="about" />
          <q-route-tab to="/contact" label="contact us" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-transparent text-grey-13" reveal>
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

    <q-page-container id="content">
      <router-view />
      <q-page-sticky position="bottom-right" :offset="fabPos">
        <q-fab
          v-model="fabMain"
          color="blue"
          icon="keyboard_arrow_up"
          direction="up"
          vertical-actions-align="right"
          flat
          :disable="draggingFab"
          v-touch-pan.prevent.mouse="moveFab"
        >
          <q-fab-action
            label-position="left"
            color="warning"
            icon="contact_support"
            label="CONTACT US"
            to="/contact"
            flat
            :disable="draggingFab"
          />
          <q-fab-action
            label-position="left"
            color="info"
            icon="info"
            label="ABOUT"
            to="/about"
            flat
            :disable="draggingFab"
          />
          <q-fab-action
            label-position="left"
            color="secondary"
            icon="web"
            label="SITES"
            to="/sites"
            flat
            :disable="draggingFab"
          />
          <q-fab-action
            label-position="left"
            color="primary"
            icon="home"
            label="HOME"
            to="/"
            flat
            :disable="draggingFab"
          />
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      fabMain: true,
      fabPos: [50, 100],
      draggingFab: false
    };
  },
  methods: {
    moveFab(ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;

      this.fabPos = [this.fabPos[0] - ev.delta.x, this.fabPos[1] - ev.delta.y];
    }
  }
};
</script>

<style>
/*备选字体*/
/*预览：https://fonts.google.com/?preview.text_type=custom*/
/*@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');*/

/*background style*/
html {
  height: 100%;
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

/*link style*/
a {
  text-decoration: none;
  color: #ffc12d;
}
</style>
