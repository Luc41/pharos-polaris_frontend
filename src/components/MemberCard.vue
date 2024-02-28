<template>
  <q-item :style="'background-color: ' + cardColorbg + ';'" clickable>
    <q-item-section avatar class="q-my-sm">
      <q-avatar color="primary" text-color="white" size="56px">
        <img :src="'https://s.gravatar.com/avatar/' + imageHash" alt="avatar">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label id="title" class="text-white text-h6" lines="1">
        {{ info.name }}
      </q-item-label>
      <q-item-label id="subtitle" class="text-white" caption lines="1">
        Since {{ info.date }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <a :href="'mailto:' + info.mailaddress">
        <q-btn flat round size="20px" icon="mail" style="color: #d6d6d6;" />
      </a>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import md5 from 'md5'

export default defineComponent({
  name: 'MemCard',
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
  data() {
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
})
</script>

<style lang="scss" scoped>
.q-item {
  border-radius: 5px;
}
</style>
