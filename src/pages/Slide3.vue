<template>
  <q-page class="flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
          <span class="text-h1 text-weight-bold non-selectable">ABOUT</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.2s;">
          <span class="text-h4 non-selectable">something in here</span>
        </div>
      </transition>
    </div>
    <q-page-sticky position="bottom" :offset="dn_fabPos_3">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn-group flat rounded>
            <q-btn icon="keyboard_arrow_up" size="lg" color="white" flat to="/sites" />
            <q-btn icon="keyboard_arrow_down" size="lg" color="white" flat to="/contact" />
          </q-btn-group>
        </div>
      </transition>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "Slide3",
  data() {
    return {
      dn_fabPos_3: [0, 30]
    };
  }
};
</script>

<style>
</style>