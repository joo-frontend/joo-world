<template>
  <section class="section_header">
    <header>
      <a class="sprite sprite_common sprite_back" @click="moveNativeHome">뒤로</a>
      <div class="title">{{petNm}}</div>
      <a class="sprite sprite_common sprite_setting" @click="openSettingPage">설정</a>
    </header>
    <setting-modal v-if="showSettingModal" :route="route" @close="showSettingModal = false"/>
  </section>
</template>

<script>
import SettingModal from '@/components/common/modal/Setting'

export default {
  name: 'header',
  props: ['petNm', 'route'],
  components: {SettingModal},
  data () {
    return {
      showSettingModal: false
    }
  },
  methods: {
    moveNativeHome: function () {
      event.preventDefault()
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.goHdeviceList !== 'undefined') {
        window.SkmagicNative.goHdeviceList()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'goHdeviceList'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    },
    openSettingPage: function () {
      event.preventDefault()
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.openSettingPage !== 'undefined') {
        window.SkmagicNative.openSettingPage()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        if (this.route !== 'SKMC') this.showSettingModal = true
        else {
          var message = {
            command: 'openSettingPage'
          }
          window.webkit.messageHandlers.SkmagicNative.postMessage(message)
        }
      } else {
        this.showSettingModal = true
      }
    }
  }
}
</script>

<style>
/* 공통 헤더 */
.section {
}
.section_header {
    position: relative;
    background: #585858;
    z-index: 100;
  height: 8vh;
}
.section_header header {
    position: relative;
    height: 8vh;
}
.section_header header .sprite {
    position: absolute;
}
.section_header header .sprite_back {
    left: 15px;
    top: 50%;
  margin-top: -8px;
}

.section_header header .sprite_setting {
    right: 15px;
  top: 50%;
  margin-top: -10px;
}

.section_header .title {
/*    height: inherit;*/
    line-height: 8vh;
    font-size: 1.7rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
}

</style>
