<template>
  <q-page class="flex-center" padding>
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 5em;">
          <span id="title" class="text-h1 non-selectable text-uppercase">contact us</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.2s;">
          <span id="subtitle" class="text-h4 non-selectable">欢迎向我们提出意见和建议以及获取支持</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="margin-top: 2em; transition-delay:.4s;">
          <q-tabs v-model="tab" dense align="justify" narrow-indicator>
            <q-tab class="text-blue" label="developers / 开发者们" name="dev" icon="code" :ripple="false"
              style="font-family: 'Josefin Sans', sans-serif; font-weight: 300" />
            <q-tab class="text-teal" label="contributers / 贡献者们 " name="contri" icon="archive" :ripple="false"
              style="font-family: 'Josefin Sans', sans-serif; font-weight: 300" />
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
                  <MemCard :info="info[0]" char="dev" />
                </div>
                <div class="col-3 col-auto">
                  <MemCard :info="info[1]" char="dev" />
                </div>
                <div class="col-3 col-auto" />
                <div class="col-1 col-auto" />
              </div>
            </q-tab-panel>
            <q-tab-panel name="contri">
              <div class="row q-gutter-md">
                <div class="col-1 col-auto" />
                <div class="col-3 col-auto">
                  <MemCard :info="info[0]" char="contri" />
                </div>
                <div class="col-3 col-auto">
                  <MemCard :info="info[1]" char="contri" />
                </div>
                <div class="col-3 col-auto" />
                <div class="col-1 col-auto" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </transition>
    </div>
    <q-page-sticky position="bottom" :offset="dn_fabPos_4">
      <transition name="fade" mode="out-in" appear>
        <div class="col self-center" style="transition-delay:.8s;">
          <q-btn-group flat rounded>
            <q-btn icon="keyboard_arrow_up" size="lg" color="white" flat to="/about" />
          </q-btn-group>
        </div>
      </transition>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MemCard from '../components/MemberCard.vue'

export default defineComponent({
  name: 'PageFour',
  components: {
    MemCard
  },
  data() {
    return {
      tab: 'dev',
      dn_fabPos_4: [0, 30],
      info: [
        {
          name: 'Luc-41',
          date: 'March 16,2020',
          mailaddress: 'whthunder@live.cn'
        },
        {
          name: 'Mr.Chathedral',
          date: 'March 16,2020',
          mailaddress: '651151844@qq.com'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scope></style>
