<template>
  <q-page class="flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em;">
          <span class="text-h1 text-weight-bold non-selectable">CONTACT US</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.2s;">
          <span class="text-h4 non-selectable">something in here</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.4s;">
          <q-tabs v-model="tab" dense align="justify" narrow-indicator>
            <q-tab class="text-blue" label="developers" name="dev" icon="code" />
            <q-tab class="text-teal" label="contributers" name="contri" icon="archive" />
          </q-tabs>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <keep-alive>
          <div class="col" style="margin-top: 3em; transition-delay:.6s;">
            <q-tab-panels v-model="tab" class="bg-transparent" animated>
              <q-tab-panel name="dev">
                <div class="row q-gutter-md">
                  <div class="col-1 col-auto" />
                  <div class="col-3 col-auto">
                    <memcard />
                  </div>
                  <div class="col-3 col-auto"></div>
                  <div class="col-3 col-auto"></div>
                  <div class="col-1 col-auto" />
                </div>
              </q-tab-panel>
              <q-tab-panel name="contri">
                <div class="row q-gutter-md">
                  <div class="col-1 col-auto" />
                  <div class="col-3 col-auto">
                    <memcard />
                  </div>
                  <div class="col-3 col-auto"></div>
                  <div class="col-3 col-auto"></div>
                  <div class="col-1 col-auto" />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </keep-alive>
      </transition>
    </div>
  </q-page>
</template>

<script>
import memcard from "../components/MemberCard";

export default {
  name: "Slide4",
  components: {
    memcard
  },
  data() {
    return {
      tab: "dev"
    };
  }
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