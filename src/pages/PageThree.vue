<template>
  <q-page class="flex-center" padding>
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
          <span id="title" class="text-h1 non-selectable text-uppercase">about</span>
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
              <q-splitter v-model="splitterModel">
                <template v-slot:before>
                  <q-tab-panels v-model="slidePanel" animated swipeable vertical transition-prev="jump-up"
                    transition-next="jump-down" class="bg-primary">
                    <q-tab-panel :name="0">
                      <span class="text-h4 q-mx-sm">{{ title[0] }}</span>
                    </q-tab-panel>
                    <q-tab-panel :name="1">
                      <span class="text-h4 q-mx-sm">{{ title[1] }}</span>
                    </q-tab-panel>
                    <q-tab-panel :name="2">
                      <span class="text-h4 q-mx-sm">{{ title[2] }}</span>
                    </q-tab-panel>
                    <q-tab-panel :name="3">
                      <span class="text-h4 q-mx-sm">{{ title[3] }}</span>
                    </q-tab-panel>
                  </q-tab-panels>
                  <q-tab-panels v-model="slidePanel" animated swipeable vertical transition-prev="jump-up"
                    transition-next="jump-down" class="bg-secondary">
                    <q-tab-panel :name="0">
                      <span class="text-h5 q-mx-sm">{{ content[0] }}</span>
                    </q-tab-panel>
                    <q-tab-panel :name="1">
                      <span class="text-h5 q-mx-sm">{{ content[1] }}</span>
                    </q-tab-panel>
                    <q-tab-panel :name="2">
                      <span class="text-h5 q-mx-sm">{{ content[2] }}</span>
                    </q-tab-panel>
                    <q-tab-panel :name="3">
                      <span class="text-h5 q-mx-sm">{{ content[3] }}</span>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
                <template v-slot:after>
                  <keep-alive>
                    <q-carousel animated v-model="slidePanel" navigation infinite :autoplay="10000" padding
                      transition-next="slide-right" transition-prev="slide-left">
                      <q-carousel-slide :name="0" :img-src="imgSrc[0]" />
                      <q-carousel-slide :name="1" :img-src="imgSrc[1]" />
                      <q-carousel-slide :name="2" :img-src="imgSrc[2]" />
                      <q-carousel-slide :name="3" :img-src="imgSrc[3]" />
                    </q-carousel>
                  </keep-alive>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageThree',
  data() {
    return {
      dn_fabPos_3: [0, 30],
      slidePanel: 0,
      splitterModel: 40,
      title: [
        '测试标题1',
        '测试标题2',
        '测试标题3',
        '测试标题4'
      ],
      content: [
        '测试文本1',
        '测试文本2',
        '测试文本3',
        '测试文本4'
      ],
      imgSrc: [
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg'
      ]
    }
  }
})
</script>

<style lang="scss" scope>
.q-carousel {
  border-radius: 5px;
}
</style>
