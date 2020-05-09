<template>
  <q-card
    class="mem-card"
    style="background-color: #e0e0e0;"
  >
    <div class="q-pa-md row items-center">
      <div class="col col-auto">
        <q-item-section avatar>
          <q-avatar
            color="indigo-6"
            size="52px"
            font-size="52px"
            text-color="white"
          >
            <img
              :src="'https://s.gravatar.com/avatar/' + imageHash"
              alt="avatar"
            >
          </q-avatar>
        </q-item-section>
      </div>
      <div class="col">
        <span
          id="title"
          class="text-h6 text-grey-8"
        >{{ info.name }}</span>
        <q-space />
        <span
          id="subtitle"
          class="text-caption text-grey-14"
        >Since {{ info.date }}</span>
      </div>
      <div class="col col-auto">
        <q-card-actions>
          <a :href="'mailto:' + info.mailaddress">
            <q-btn
              flat
              round
              size="20px"
              icon="mail"
              style="color: #9e9e9e;"
            />
          </a>
        </q-card-actions>
      </div>
    </div>
  </q-card>
</template>

<script>
import md5 from 'md5'

export default {
  name: 'Memcard',
  props: {
    info: {
      type: Object,
      default: function () {
        return { name: 'Anonymous', date: 'March 16,2020', mailaddress: '' }
      }
    }
  },
  data () {
    return {
      imageHash: [md5(this.info.mailaddress)]
    }
  }
}
</script>

<style lang="scss" scoped>
.mem-card {
  max-width: 100%;
  max-height: 100%;
  margin-top: 1em;
}
</style>
