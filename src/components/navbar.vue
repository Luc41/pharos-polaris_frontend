<template>
  <b-navbar type="is-white" fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{path: '/'}">
        <img src=../assets/icon.jpg alt="logo.png" border="0" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">{{msg_1}}</b-navbar-item>
      <b-navbar-item href="#">{{msg_2}}</b-navbar-item>
      <b-navbar-item href="#">{{msg_3}}</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      //logo_url: '../assets/icon.png',
      msg_1: "主页",
      msg_2: "论坛",
      msg_3: "WIKI"
    };
  }
};
</script>

<style>
</style>

