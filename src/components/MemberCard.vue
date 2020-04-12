<template>
  <q-card class="mem-card" style="background-color: #e0e0e0;">
    <div class="q-pa-md row items-center">
      <div class="col col-auto">
        <q-item-section avatar>
          <q-avatar color="indigo-6" size="52px" font-size="52px" text-color="white">
            <img :src="'https://s.gravatar.com/avatar/' + imageHash" alt="avatar" />
          </q-avatar>
        </q-item-section>
      </div>
      <div class="col">
        <span class="text-h6 text-black">{{name}}</span>
        <q-space />
        <span class="text-caption text-grey-14">{{date}}</span>
      </div>
      <div class="col col-auto">
        <q-card-actions>
          <a :href="'mailto:' + mailaddress">
            <q-btn flat round size="20px" icon="mail" style="color: #9e9e9e;" />
          </a>
        </q-card-actions>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "memcard",
  data() {
    return {
      name: "Luc41",
      date: "Since March 16,2020",
      mailaddress: "whthunder@live.cn",
      imageHash: "a969511fe630077db18e2151af18f980"
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