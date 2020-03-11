<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child box" id="tile_1">
            <p class="title">{{title_1}}</p>
            <p class="subtitle">{{subtitle_1}}</p>
            <b-button
              tag="router-link"
              to="/"
              type="is-link"
              size="is-large"
              expanded
              class="button"
            >GO</b-button>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box" id="tile_2">
            <p class="title">{{title_2}}</p>
            <p class="subtitle">{{subtitle_2}}</p>
            <b-button
              tag="router-link"
              to="/"
              type="is-link"
              size="is-large"
              expanded
              class="button"
            >GO</b-button>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box" id="tile_3">
            <p class="title">{{title_3}}</p>
            <p class="subtitle">{{subtitle_3}}</p>
            <b-button
              tag="router-link"
              to="/"
              size="is-large"
              disabled
              expanded
              class="button"
            >Disabled</b-button>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tiles",
  data() {
    return {
      title_1: "FORUM",
      title_2: "WIKI",
      title_3: "COMING SOON",
      subtitle_1: "Eorzea Urban Life",
      subtitle_2: "Eorzea Encyclopedia",
      subtitle_3: "Nothing is here yet"
    };
  }
};
</script>

<style>
#tile_1 {
  background-image: url(https://bulma.io/images/placeholders/480x640.png);
  background-size: cover;
  height: 320px;
  width: 240px;
}

#tile_2 {
  background-image: url(https://bulma.io/images/placeholders/480x640.png);
  background-size: cover;
  height: 320px;
  width: 240px;
}

#tile_3 {
  background-image: url(https://bulma.io/images/placeholders/480x640.png);
  background-size: cover;
  height: 320px;
  width: 240px;
}

.button {
  position: relative;
  top: 140px;
}
#tile_3 .button {
  position: relative;
  top: 105px;
}
</style>