<template>
  <div class="popup_detail type2" style="background-color:white;">
    <div class="popup_detail_header" style="background: #585858;">
      <button class="sprite sprite_common sprite_back" @click="$emit('close')">뒤로</button>
      <h1>설정</h1>
    </div>
    <div class="popup_detail_contents">
      <section class="section_super_setting">
        <ul>
          <li @click="showSettingPush = true">
            <a>알림 설정</a>
            <span class="sprite sprite_steam_oven sprite_cook_detail_more"></span>
          </li>
          <!-- <li @click="showUseTerms = true">
            <a>이용 약관</a>
            <span class="sprite sprite_steam_oven sprite_cook_detail_more"></span>
          </li>
          <li>
            <p>버전 정보</p>
            <span>{{callbackAppVersion}}</span>
          </li> -->
        </ul>
      </section>
    </div>
    <setting-push-modal v-if="showSettingPush" :route="route" @close="showSettingPush = false"/>
    <use-terms-modal v-if="showUseTerms" @close="showUseTerms = false"/>
  </div>
</template>
<script>
import SettingPushModal from '@/components/common/modal/SettingPush'
import UseTermsModal from '@/components/common/modal/UseTerms'

export default {
  name: 'setting',
  props: ['openYn', 'route'],
  components: {SettingPushModal, UseTermsModal},
  data () {
    return {
      showSettingPush: false,
      showUseTerms: false
    }
  },
  created () {
    if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.appVersion !== 'undefined') {
      window.SkmagicNative.appVersion()
    } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
      var message = {
        command: 'appVersion '
      }
      window.webkit.messageHandlers.SkmagicNative.postMessage(message)
    } else {
      window.SkmagicWeb.callbackAppVersion('version')
    }
  }
}
</script>
<style>
/* 레이아웃 */
.wrap_header_area.wrap_header_none_menu {
    height: 8vh;
}

.wrap_header_area.wrap_header_none_menu + .wrap_contents_area {
    padding-top: 8vh;
}
.popup_detail_header .sprite_back {
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 15px;
}
/* 설정 */
.section_super_setting ul li {
    border-bottom: 1px solid #e5e5e5;
    height: 61px;
    padding-left: 15px;
    position: relative;
}
.section_super_setting ul li a,
.section_super_setting ul li p {
    display: block;
    line-height: 60px;
    font-size: 1.5rem;
}
.section_super_setting ul li span {
    position: absolute;
    right: 15px;
    top: 22px;
    font-size: 1.5rem;
}
</style>
