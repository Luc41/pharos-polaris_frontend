<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md column">
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center">
          <span id="title" class="text-h2 text-weight-bold">ERROR:PAGE NOT FOUND</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col self-center" style="transition-delay: .2s;">
          <span id="subtitle" class="text-h4">您访问的页面不存在，请检查URL后再试</span>
        </div>
      </transition>
      <transition name="slide" mode="out-in" appear>
        <div class="col q-pa-lg self-center" style="transition-delay: .4s;">
          <q-img id="img404" alt="404" :src="imgSrc" spinner-color="white" />
          <q-btn
            class="full-width"
            icon="home"
            label="返回首页"
            size="lg"
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
      imgSrc: "https://s1.ax1x.com/2020/04/27/JRYZk9.png"
    };
  }
};
</script>

<style lang="scss" scoped>
#img404 {
  min-height: 300px;
  min-width: 300px;
  position: relative;
}
.col {
  margin: 1em 0 1em 0;
}

</style>