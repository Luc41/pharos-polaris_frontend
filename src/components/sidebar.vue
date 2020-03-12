<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-centered">Developer</p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="avator" />
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
        "人是生而自由的，但却无往不在枷锁之中。自以为是其他一切主人的人，反而比其他一切更是奴隶。"
    };
  }
};
</script>

<style>
</style>