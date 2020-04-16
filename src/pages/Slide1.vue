<template>
  <q-page class="flex flex-center">
    <div class="column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; margin-bottom: 2em;">
          <span class="text-h1 text-weight-bold non-selectable">Pharos-Polaris.com</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div
          class="col self-center"
          style="transition-delay:.2s; margin-top: 1em; margin-bottom: 1em;"
        >
          <span class="text-h3 non-selectable">something in here</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div
          class="col self-center"
          style="transition-delay:.4s; margin-top: 2em; margin-bottom: 2em;"
        >
          <img id="logo" alt="main logo" src="../assets/logo-white.png" />
        </div>
      </transition>
    </div>
    <q-page-sticky position="bottom" :offset="fabPos_1">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn icon="keyboard_arrow_down" size="20px" color="white" flat round to="/sites" />
        </div>
      </transition>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "Slide1",
  components: {},
  data() {
    return {
      fabPos_1: [0,30]
    };
  }
};
</script>

<style scope>
span {
  color: aliceblue;
}

#logo {
  max-width: 300px;
  max-height: 300px;
}

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
</style>