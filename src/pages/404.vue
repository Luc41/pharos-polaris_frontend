<template>
  <q-page class>
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center">
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
          <div class="row">
            <div class="col-1" />
            <div class="col">
              <q-img id="img404" alt="404" :src="imgSrc" spinner-color="white" />
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
            <div class="col-1" />
          </div>
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
      imgSrc: "https://s1.ax1x.com/2020/04/27/JRYZk9.png"
    };
  }
};
</script>

<style lang="sass" scoped>
#img404 
  height: 600px
  position: relative
.col
  margin: 1em 0 1em 0
</style>