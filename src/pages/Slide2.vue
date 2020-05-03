<template>
  <q-page class="flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
          <span class="text-h1 text-weight-bold non-selectable">SITES</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 1em; transition-delay:.2s;">
          <span class="text-h4 non-selectable">欢迎访问我们的站点</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col" style="margin-top: 2em; transition-delay:.4s; margin-bottom: 18em;">
          <div class="row">
            <div class="col" />
            <div class="col q-ma-md">
              <q-card class="bg-grey-14">
                <q-img
                  alt="forum thumbnail"
                  src="https://i.picsum.photos/id/1015/1200/800.jpg"
                  spinner-color="white"
                >
                  <div class="absolute-bottom text-right">
                    <span class="text-h5">FORUM</span>
                  </div>
                </q-img>
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <span class="text-subtitle">something in here</span>
                    </div>
                    <div class="col-auto">
                      <a href="https://forum.pharos-polaris.com" target="_blank">
                        <q-btn
                          class="text-white self-right"
                          flat
                          :ripple="false"
                          color="dark"
                          icon="navigate_next"
                        >GO</q-btn>
                      </a>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col q-ma-md">
              <q-card class="bg-grey-14">
                <q-img
                  alt="wiki thumbnail"
                  src="https://i.picsum.photos/id/1016/1200/800.jpg"
                  spinner-color="white"
                >
                  <div class="absolute-bottom text-right">
                    <span class="text-h5">WIKI</span>
                  </div>
                </q-img>
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <span class="text-subtitle">something in here</span>
                    </div>
                    <div class="col-auto">
                      <a href="https://wiki.pharos-polaris.com" target="_blank">
                        <q-btn
                          class="text-white"
                          flat
                          :ripple="false"
                          color="dark"
                          icon="navigate_next"
                        >GO</q-btn>
                      </a>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col" />
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

<style scope>
span {
  color: aliceblue;
}
</style>