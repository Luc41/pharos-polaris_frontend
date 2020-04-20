<template>
  <q-page class="flex-center">
    <q-page-sticky position="top" :offset="up_fabPos_3">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.6s;">
          <q-btn icon="keyboard_arrow_up" size="20px" color="white" flat round to="/about" />
        </div>
      </transition>
    </q-page-sticky>
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
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
        <div class="col" style="margin-top: 3em; transition-delay:.6s;">
          <q-tab-panels v-model="tab" class="bg-transparent" animated>
            <q-tab-panel name="dev">
              <div class="row q-gutter-md">
                <div class="col-1 col-auto" />
                <div class="col-3 col-auto">
                  <memcard :info="info_1" />
                </div>
                <div class="col-3 col-auto">
                  <memcard :info="info_2" />
                </div>
                <div class="col-3 col-auto"></div>
                <div class="col-1 col-auto" />
              </div>
            </q-tab-panel>
            <q-tab-panel name="contri">
              <div class="row q-gutter-md">
                <div class="col-1 col-auto" />
                <div class="col-3 col-auto">
                  <memcard :info="info_1" />
                </div>
                <div class="col-3 col-auto">
                  <memcard :info="info_2" />
                </div>
                <div class="col-3 col-auto"></div>
                <div class="col-1 col-auto" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
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
      tab: "dev",
      up_fabPos_3:[0, 0],
      info_1: {
        name: "Luc-41",
        date: "March 16,2020",
        mailaddress: "whthunder@live.cn",
        imageHash: "a969511fe630077db18e2151af18f980"
      },
      info_2: {
        name: "Mr.Chathedral",
        date: "March 16,2020",
        mailaddress: "651151844@qq.com",
        imageHash: "b98559ffe9383ba2132393ca87116722"
      }
    };
  }
};
</script>

<style>

</style>