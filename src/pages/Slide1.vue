<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center">
          <span id="subtitle" class="text-h3 non-selectable">welcome to</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.2s; margin-top: 1em;">
          <span id="title" class="text-h1 text-weight-bold non-selectable">Pharos-Polaris.com</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.4s;">
          <img class="q-ma-xl" id="logo" alt="main logo" src="../assets/logo-v3.png" />
        </div>
      </transition>
    </div>

    <!--stickt button-->
    <q-page-sticky position="bottom" :offset="dn_fabPos_1">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn-group flat rounded>
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

<style lang="scss" scope>
#logo {
  max-width: 300px;
  max-height: 300px;
  /*set image mask*/
  /*mask-image: url(../assets/logo-v2.png);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 100%, 100%;*/
}

/*set dom mask*/
/*#title {
  /*linear geadient mask*/ /*
  background-image: linear-gradient(#c44a6e, #ffa33a);
  background-size: cover;
  background-clip: text;
  color: transparent;
}*/
</style>