<template>
  <q-page class="flex-center">
    <q-page-sticky position="top" :offset="up_fabPos_2">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn icon="keyboard_arrow_up" size="20px" color="white" flat round to="/sites" />
        </div>
      </transition>
    </q-page-sticky>
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
          <q-btn icon="keyboard_arrow_down" size="20px" color="white" flat round to="/contact" />
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
      dn_fabPos_3: [0, 30],
      up_fabPos_2: [0, 0]
    };
  }
};
</script>

<style>

</style>