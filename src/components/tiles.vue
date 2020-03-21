<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child box" id="tile_1">
            <p class="title">{{title_1}}</p>
            <p class="subtitle is-6">{{subtitle_1}}</p>
            <figure class="image is-square">
              <img src="../assets/cactus.png" />
            </figure>
            <b-button class="button" tag="router-link" to="/" type="is-info" size="is-medium">GO</b-button>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box" id="tile_2">
            <p class="title">{{title_2}}</p>
            <p class="subtitle is-6">{{subtitle_2}}</p>
            <figure class="image is-square">
              <img src="../assets/goblin.png" />
            </figure>
            <b-button class="button" tag="router-link" to="/" type="is-info" size="is-medium">GO</b-button>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box" id="tile_3">
            <p class="title">{{title_3}}</p>
            <p class="subtitle is-6">{{subtitle_3}}</p>
            <figure class="image is-square">
              <img src="../assets/morbol.png" />
            </figure>
            <b-button
              class="button"
              tag="router-link"
              to="/"
              type="is-info"
              size="is-medium"
              disabled
            >GO</b-button>
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
      title_3: "In Dev",
      subtitle_1: "Eorzea Urban Life",
      subtitle_2: "Eorzea Encyclopedia",
      subtitle_3: "Nothing is here yet"
    };
  }
};
</script>

<style>
.tile {
  margin-top: 1em;
}

.tile .button {
  margin-top: 1em;
}
</style>