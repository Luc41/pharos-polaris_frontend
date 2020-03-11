<template>
  <b-navbar type="is-dark" fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{path: '/'}">
        <img :src="logo_url" alt="logo.png" border="0" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">{{msg_1}}</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="#">{{msg_2}}</b-navbar-item>
      <b-navbar-item href="#">{{msg_3}}</b-navbar-item>
      <b-navbar-dropdown :label="dropdown_lable">
        <b-navbar-item href="#">{{dropdown_msg_1}}</b-navbar-item>
        <b-navbar-item href="#">{{dropdown_msg_2}}</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end"></template>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      logo_url: "https://s2.ax1x.com/2020/03/10/8ialGR.png",
      msg_1: "主页",
      msg_2: "论坛",
      msg_3: "WIKI",
      dropdown_lable: "关于",
      dropdown_msg_1: "个人博客",
      dropdown_msg_2: "支持本站"
    };
  }
};
</script>

<style>
</style>

