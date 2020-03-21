<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-centered">开发者</p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://s.gravatar.com/avatar/2892570d50d254f8e730b8c48480f167" alt="avator" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{username}}</p>
          <p class="subtitle is-6">@{{username}}</p>
        </div>
      </div>
      <div class="content">
        <p class="subtitle is-6">{{motto}}</p>
      </div>
      <footer class="card-footer">
        <a href="https://github.com/Luc41" class="card-footer-item">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          Github
        </a>
        <a href="https://twitter.com/luc_41" class="card-footer-item">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
          Twitter
        </a>
        <a href="mailto:whthunder@live.cn" class="card-footer-item">
          <span class="icon">
            <i class="fas fa-envelope"></i>
          </span>
          Email
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      username: "Luc41",
      motto:
        "All those moments will be lost in time,like tears in rain..."
    };
  }
};
</script>

<style>
.card {
  margin-top: 3em;
  margin-bottom: 1em;
}
</style>