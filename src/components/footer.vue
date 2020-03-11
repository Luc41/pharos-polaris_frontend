<template>
  <footer class="footer">
    <div class="img">
      <img :src="logo_url" alt="logo.png" />
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="context">
          <p>
            Powered by
            <a href="https://vuejs.org">Vue.js</a> and
            <a href="https://buefu.org">Buefy</a>
          </p>
          <p>
            The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
          <p>
            The website content is licensed
            <a
              href="http://cteativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a>
          </p>
        </div>
      </div>
      <div class="level_right">
        <p>&copy;2020 Pharos-Polaris.com All Rights Reserved.</p>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      logo_url: "https://s2.ax1x.com/2020/03/10/8ialGR.png"
    };
  }
};
</script>

<style>
</style>