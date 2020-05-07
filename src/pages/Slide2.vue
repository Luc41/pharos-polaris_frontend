<template>
  <q-page class="flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
          <span id="title" class="text-h1 non-selectable text-uppercase">sites</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.2s;">
          <span id="subtitle" class="text-h4 non-selectable">欢迎访问我们的站点</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col" style="margin-top: 2em; transition-delay:.4s;">
          <div class="row justify-center q-mx-xl">
            <div class="col col-md-4">
              <q-card id="card" class="bg-grey-14 q-mx-sm">
                <q-img
                  id="img"
                  alt="forum thumbnail"
                  src="https://i.picsum.photos/id/1015/1200/800.jpg"
                  spinner-color="white"
                >
                  <div class="absolute-bottom text-right">
                    <span class="text-h5 text-capitalize">why don't you talk to me</span>
                    <q-space />
                    <span class="text-h4">
                      <a
                        class="hvr-icon-wobble-horizontal text-uppercase"
                        href="https://forum.pharos-polaris.com"
                        target="_blank"
                      >
                        forum
                        <q-icon class="hvr-icon" name="navigate_next" style="margin-top: -.2em;" />
                      </a>
                    </span>
                  </div>
                </q-img>
              </q-card>
            </div>
            <div class="col col-md-4">
              <q-card id="card" class="bg-grey-14 q-mx-sm">
                <q-img
                  id="img"
                  alt="wiki thumbnail"
                  src="https://i.picsum.photos/id/1016/1200/800.jpg"
                  spinner-color="white"
                >
                  <div class="absolute-bottom text-right">
                    <span class="text-h5 text-capitalize">may the crystal guides you.</span>
                    <q-space />
                    <span class="text-h4">
                      <a
                        class="hvr-icon-wobble-horizontal text-uppercase"
                        href="https://wiki.pharos-polaris.com"
                        target="_blank"
                      >
                        wiki
                        <q-icon class="hvr-icon" name="navigate_next" style="margin-top: -.2em;" />
                      </a>
                    </span>
                  </div>
                </q-img>
              </q-card>
            </div>
          </div>
        </div>
      </transition>
      <!--
      <div class="col self-center" style="margin-top: 15em;">
        <span class="text-h4 non-selectable">and more</span>
      </div>
      -->
    </div>
    <q-page-sticky position="bottom" :offset="dn_fabPos_2">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn-group flat rounded>
            <q-btn icon="keyboard_arrow_up" size="lg" color="white" flat to="/" />
            <q-btn icon="keyboard_arrow_down" size="lg" color="white" flat to="/about" />
          </q-btn-group>
        </div>
      </transition>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "Slide2",

  data() {
    return {
      dn_fabPos_2: [0, 30]
    };
  },

  methods: {}
};
</script>

<style lang="scss" scope>
#card #img {
  min-height: 360px;
}

/* Icon Wobble Horizontal */
@-webkit-keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px);
  }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px);
  }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.hvr-icon-wobble-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-icon-wobble-horizontal .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.hvr-icon-wobble-horizontal:hover .hvr-icon,
.hvr-icon-wobble-horizontal:focus .hvr-icon,
.hvr-icon-wobble-horizontal:active .hvr-icon {
  -webkit-animation-name: hvr-icon-wobble-horizontal;
  animation-name: hvr-icon-wobble-horizontal;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>