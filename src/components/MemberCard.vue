<template>
  <q-card class="mem-card bg-amber-1 shadow-10">
    <div class="row items-center justify-between q-pa-md">
      <div class="col col-auto">
        <q-item-section avatar="true">
          <q-avatar
            color="primary"
            size="52px"
            font-size="52px"
            text-color="white"
            icon="account_circle"
          />
        </q-item-section>
      </div>
      <div class="col col-auto">
        <span class="text-h6 text-black">{{name}}</span>
      </div>
      <div class="col col-auto">
        <q-card-actions>
          <a :href="mailaddress">
            <q-btn flat round size="20px" color="grey-8" icon="mail" />
          </a>
        </q-card-actions>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "men",
  data() {
    return {
      name: "Luc41",
      mailaddress: "mailto:whthunder@live.cn"
    };
  }
};
</script>

<style lang="sass" scoped>
.mem-card
    max-width: 100%
    max-height: 100%
    margin-top: 1em
</style>