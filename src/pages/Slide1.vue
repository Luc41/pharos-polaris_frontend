<template>
  <q-page class="flex flex-center">
    <div class="column">
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
          <img id="logo" alt="main logo" src="../assets/logo-white.png" />
        </div>
      </transition>
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