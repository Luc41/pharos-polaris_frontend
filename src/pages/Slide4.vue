<template>
  <q-page class="flex-center">
    <div class="q-pa-md column" style="margin-top: 1em;">
      <div class="col self-center" style="margin-top: 1em;">
        <span class="text-h1 text-weight-bold non-selectable">CONTACT US</span>
      </div>
      <div class="col self-center" style="margin-top: 1em;">
        <span class="text-h4 non-selectable">something in here</span>
      </div>
      <div class="col self-center" style="margin-top: 2em;">
        <q-tabs v-model="tab" dense align="justify" narrow-indicator>
          <q-tab class="text-blue" label="developers" name="dev" icon="code" />
          <q-tab class="text-teal" label="contributers" name="contri" icon="archive" />
        </q-tabs>
      </div>
      <div class="col" style="margin-top: 3em;">
        <q-tab-panels v-model="tab" class="bg-transparent" animated>
          <q-tab-panel name="dev">
            <div class="row q-gutter-md">
              <div class="col-1 col-auto" />
              <div class="col-3 col-auto">
                <mem />
              </div>
              <div class="col-3 col-auto">
                <mem />
              </div>
              <div class="col-3 col-auto">
                <mem />
              </div>
              <div class="col-1 col-auto" />
            </div>
          </q-tab-panel>
          <q-tab-panel name="contri">
            <div class="row q-gutter-md">
              <div class="col-1 col-auto" />
              <div class="col-3 col-auto">
                <mem />
              </div>
              <div class="col-3 col-auto">
                <mem />
              </div>
              <div class="col-3 col-auto"></div>
              <div class="col-1 col-auto" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import mem from "../components/MemberCard";

export default {
  name: "Slide4",
  components: {
    mem
  },
  data() {
    return {
      tab: "dev"
    };
  }
};
</script>

<style>
</style>