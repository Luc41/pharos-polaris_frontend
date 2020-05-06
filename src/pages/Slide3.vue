<template>
  <q-page class="flex-center">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
          <span id="title" class="text-h1 text-weight-bold non-selectable">ABOUT</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.2s;">
          <span id="subtitle" class="text-h4 non-selectable">关于本站</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col q-px-xl" style="margin-top: 2em; transition-delay: .4s">
          <div class="row justify-center">
            <div class="col col-md-8">
              <q-splitter v-model="splitter" unit="px">
                <template v-slot:before>
                  <q-tab-panels
                    v-model="slide"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-down"
                    class="titlePanel bg-primary"
                  >
                    <q-tab-panel :name="1">
                      <span class="text-h4 q-mx-sm">Test Title 1</span>
                      <span class="text-h4 q-mx-sm">测试标题 1</span>
                    </q-tab-panel>
                    <q-tab-panel :name="2">
                      <span class="text-h4 q-mx-sm">Test Title 2</span>
                      <span class="text-h4 q-mx-sm">测试标题 2</span>
                    </q-tab-panel>
                    <q-tab-panel :name="3">
                      <span class="text-h4 q-mx-sm">Test Title 3</span>
                      <span class="text-h4 q-mx-sm">测试标题 3</span>
                    </q-tab-panel>
                    <q-tab-panel :name="4">
                      <span class="text-h4 q-mx-sm">Test Title 4</span>
                      <span class="text-h4 q-mx-sm">测试标题 4</span>
                    </q-tab-panel>
                  </q-tab-panels>
                  <q-tab-panels
                    v-model="slide"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-down"
                    class="contentPanel bg-secondary"
                  >
                    <q-tab-panel :name="1">
                      <span class="text-h5 q-mx-sm">测试文本1测试文本1测试文本1测试文本1测试文本1</span>
                    </q-tab-panel>
                    <q-tab-panel :name="2">
                      <span
                        class="text-h5 q-mx-sm"
                      >测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2测试文本2</span>
                    </q-tab-panel>
                    <q-tab-panel :name="3">
                      <span
                        class="text-h5 q-mx-sm"
                      >测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1测试文本1</span>
                    </q-tab-panel>
                    <q-tab-panel :name="4">
                      <span class="text-h5 q-mx-sm">测试文本1测试文本1测试文本1测试文本1测试文本1</span>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
                <template v-slot:after>
                  <q-carousel
                    animated
                    v-model="slide"
                    navigation
                    infinite
                    :autoplay="10000"
                    padding
                    transition-next="slide-right"
                    transition-prev="slide-left"
                  >
                    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                  </q-carousel>
                </template>
              </q-splitter>
            </div>
          </div>
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
      dn_fabPos_3: [0, 30],
      slide: 1,
      splitterModel: 300
    };
  }
};
</script>

<style lang="scss" scope>
.contentPanel {
  max-width: fit-content;
}
</style>