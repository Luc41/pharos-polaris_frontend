<template>
  <section>
    <b-carousel
      v-model="carousel"
      :animated="animated"
      :has-drag="drag"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :interval="interval"
      :repeat="repeat"
    >
      <b-carousel-item v-for="(carousel,i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <figure class="image">
            <img :src="`${carousel.imgurl}`" />
          </figure>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      carousel: 0,
      animated: "slide",
      drag: true,
      autoPlay: true,
      pauseHover: true,
      pauseInfo: false,
      repeat: true,
      interval: 5000,
      carousels: [
        { imgurl: "https://s2.ax1x.com/2020/03/03/34zVR1.jpg", color: "primary" },
        { imgurl: "https://s1.ax1x.com/2020/03/15/88mstf.jpg", color: "dark" },
        { imgurl: "https://s1.ax1x.com/2020/03/15/88myh8.jpg", color: "warning" }
      ]
    };
  }
};
</script>

<style>
</style>