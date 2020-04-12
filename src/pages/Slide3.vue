<template>
  <q-page class="flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em;">
          <span class="text-h1 text-weight-bold non-selectable">ABOUT</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.2s;">
          <span class="text-h4 non-selectable">something in here</span>
        </div>
      </transition>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Slide3"
};
</script>

<style>
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