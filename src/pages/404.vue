<template>
  <q-page class="">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
      <div class="col self-center" style="margin-top: 4em;">
        <span class="text-h1 text-weight-bold non-selectable">ERROR:404!</span>
      </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
      <div class="col self-center" style="transition-delay: .2s;">
        <span class="text-h4 non-selectable">您所访问的页面不存在</span>
      </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
      <div class="col" style="transition-delay: .4s;">
        <q-img id="img404" alt="404" :src="imgSrc" spinner-color="white" />
      </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
      <div class="col" style="transition-delay: .6s;">
        <q-btn
          class="full-width"
          icon="home"
          label="返回首页"
          size="xl"
          to="/"
          color="grey-14"
          unelevated
        />
      </div>
      </transition>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "page404",
  data() {
    return {
      imgSrc: "https://s1.ax1x.com/2020/04/27/JRYZk9.md.png"
    };
  }
};
</script>

<style lang="sass" scoped>
#img404 
  height: 500px
.col
  margin: 1em 0 1em 0
</style>