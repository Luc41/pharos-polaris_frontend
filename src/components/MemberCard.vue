<template>
  <q-card :style="'background-color: ' + cardColorbg + ';'">
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
          class="text-h6"
        >{{ info.name }}</span>
        <q-space />
        <span
          id="subtitle"
          class="text-caption"
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
              style="color: #d6d6d6;"
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
    },
    char: {
      type: String,
      default: function () {
        return 'nonChar'
      }
    }
  },
  data () {
    return {
      imageHash: md5(this.info.mailaddress),
      cardColorbg: this.defColor(this.char)
    }
  },
  methods: {
    defColor: function (char) {
      let colorBg = ''
      if (char === 'dev') {
        colorBg = 'rgba(25,118,210,.4)'
      } else if (char === 'contri') {
        colorBg = 'rgba(38,166,154,.4)'
      } else {
        colorBg = 'rgba(255,255,255,.4)'
      }
      return colorBg
    }
  }
}
</script>

<style lang="scss" scoped>
.q-card {
  max-width: 100%;
  max-height: 100%;
  margin-top: 1em;
}

.q-card div div span {
  color: #d6d6d6;
}
</style>
