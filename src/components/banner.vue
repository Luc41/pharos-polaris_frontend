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
        :repeat="repeat">
        <b-carousel-item v-for="(carousel,i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color} is-bold`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
        </b-carousel>
  </section>
</template>

<script>
export default {
    name:"banner",
    data() {
        return {
            carousel:0,
            animated:'slide',
            drag:true,
            autoPlay:true,
            pauseHover:true,
            pauseInfo:false,
            repeat:true,
            interval:5000,
            carousels:[
                {text:'slide 1',color:'primary'},
                {text:'slide 2',color:'dark'},
                {text:'slide 3',color:'warning'}
            ]
        }
    }
}
</script>

<style>

</style>