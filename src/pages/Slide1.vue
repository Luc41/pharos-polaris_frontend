<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center">
          <span class="text-h1 text-weight-bold non-selectable">Pharos-Polaris.com</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.2s;">
          <span class="text-h3 non-selectable">something in here</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.4s;">
          <img id="logo" alt="main logo" src="../assets/logo-v2.png" />
        </div>
      </transition>
    </div>
    <q-page-sticky position="bottom" :offset="dn_fabPos_1">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn-group flat>
            <q-btn icon="keyboard_arrow_down" size="lg" color="white" flat to="/sites" />
          </q-btn-group>
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
      dn_fabPos_1: [0, 30]
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
</style>