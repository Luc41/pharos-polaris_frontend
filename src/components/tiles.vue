<template>
  <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
      <div class="tile">
          <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                  <p class="title">{{title_1}}</p>
                  <p class="subtitle">{{subtitle_1}}</p>
                  <figure class="image is-3by4">
                      <img :src="imgurl_1">
                  </figure>
              </article>
          </div>
          <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                  <p class="title">{{title_2}}</p>
                  <p class="subtitle">{{subtitle_2}}</p>
                  <figure class="image is-3by4">
                      <img :src="imgurl_2">
                  </figure>
              </article>
          </div>
          <div class="tile is-parent">
              <article class="tile is-child notification is-warning">
                  <p class="title">{{title_3}}</p>
                  <p class="subtitle">{{subtitle_3}}</p>
                  <figure class="image is-3by4">
                      <img :src="imgurl_3">
                  </figure>
              </article>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"tiles",
    data() {
        return {
            title_1:"EORZEA URBAN LIFE",
            title_2:"EORZEA ENCYCLOPEDIA",
            title_3:"WILL COMING SOON",
            subtitle_1:"论坛",
            subtitle_2:"WIKI",
            subtitle_3:"还没想好做什么",
            imgurl_1:"https://bulma.io/images/placeholders/480x640.png",
            imgurl_2:"https://bulma.io/images/placeholders/480x640.png",
            imgurl_3:"https://bulma.io/images/placeholders/480x640.png"
        }
    }
}
</script>

<style>

</style>