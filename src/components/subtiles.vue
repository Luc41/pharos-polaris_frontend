<template>
  <div class="tile is-ancestor" id="subtile">
    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title is-5">{{title[0].title}}</p>
        <figure class="image is-square">
          <img src="../assets/cactus.png" />
        </figure>
      </article>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title is-5">{{title[1].title}}</p>
        <figure class="image is-square">
          <img src="../assets/cactus.png" />
        </figure>
      </article>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title is-5">{{title[2].title}}</p>
        <figure class="image is-square">
          <img src="../assets/cactus.png" />
        </figure>
      </article>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title is-5">{{title[3].title}}</p>
        <figure class="image is-square">
          <img src="../assets/cactus.png" />
        </figure>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "subtiles",
  data() {
    return {
      title: [
        { title: "in dev 1" },
        { title: "in dev 2" },
        { title: "in dev 3" },
        { title: "in dev 4" }
      ]
    };
  }
};
</script>

<style>
#subtile {
    margin-bottom: 3em;
}
</style>