<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-transparent text-white" v-show="this.$route.name !== '404'">
      <q-toolbar>
        <q-toolbar-title id="title" class="non-selectable q-mx-sm">Pharos-Polaris</q-toolbar-title>
        <q-tabs align="right" style="font-family: 'Josefin Sans', sans-serif; font-weight: 300">
          <q-route-tab to="/" label="home" :ripple="false" />
          <q-route-tab to="/sites" label="sites" :ripple="false" />
          <q-route-tab to="/about" label="about" :ripple="false" />
          <q-route-tab to="/contact" label="contact us" :ripple="false" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-transparent text-grey-13" reveal v-show="this.$route.name !== '404'">
      <q-toolbar id="subtitle">
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
      <transition name="Rfade" mode="out-in" appear>
        <router-view />
      </transition>

      <q-page-sticky
        position="bottom-right"
        :offset="fabPos"
        style="font-family: 'Josefin Sans', sans-serif; font-weight: 300"
        v-show="this.$route.name !== '404'"
      >
        <q-fab
          class="no-shadow"
          v-model="fabMain"
          color="grey-14"
          icon="keyboard_arrow_up"
          direction="up"
          vertical-actions-align="right"
          :disable="draggingFab"
          v-touch-pan.prevent.mouse="moveFab"
        >
          <q-fab-action
            class="no-shadow"
            label-position="left"
            color="grey-14"
            icon="contact_support"
            label="CONTACT US"
            to="/contact"
            :disable="draggingFab"
          />
          <q-fab-action
            class="no-shadow"
            label-position="left"
            color="grey-14"
            icon="info"
            label="ABOUT"
            to="/about"
            :disable="draggingFab"
          />
          <q-fab-action
            class="no-shadow"
            label-position="left"
            color="grey-14"
            icon="web"
            label="SITES"
            to="/sites"
            :disable="draggingFab"
          />
          <q-fab-action
            class="no-shadow"
            label-position="left"
            color="grey-14"
            icon="home"
            label="HOME"
            to="/"
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
      fabMain: false,
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

<style lang="scss">
/*webfonts*/
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

/*font weight */
#title {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
}

#subtitle {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
}

span {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
}

/*fonts color*/
span {
  color: aliceblue;
}

/*background style*/
html {
  height: 100%;
}
body {
  overflow: hidden;
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

/*transtion*/
/*transtion for pages*/
.slide-enter-active {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.slide-leave-active {
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.slide-enter,
.slide-leave-to {
  -webkit-transform: translateY(2rem);
  transform: translateY(2rem);
  opacity: 0;
}

/*transtion for routes*/
.Rfade-enter-active {
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

.Rfade-leave-active {
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}

.Rfade-enter,
.Rfade-leave-to {
  opacity: 0;
}

/*transtion for buttons*/
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 1.5s ease;
  transition: opacity 1.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
