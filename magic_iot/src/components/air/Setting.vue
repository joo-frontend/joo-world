<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area">
    <div class="wrap_bg_gray">
      <!-- section_push_alarm -->
      <section class="section_push_alarm">
        <ul class="area_ai">
          <li>
            <p>AI 설정</p>
            <label><input type="checkbox" class="checkbox_toggle_lg" :checked="air.aiYn === 'Y'" @click="setAi"></label>
          </li>
        </ul>
        <ul class="area_alarm area_location top_bg" v-if="route === 'SKMC'">
          <li style="padding-top: 22px;">
            <p>위치 설정</p>
            <label><input type="checkbox" class="checkbox_toggle_lg" :checked="air.gpsYn === 'Y'" @click="setGps"></label>
          </li>
          <li style="padding-top: 25px;">
            <span>{{ air.address | addressTxt }}</span>
            <button class="btn btn_md btn_dark_gray btn_change" @click="createMap">{{ btnStMsg }}</button>
          </li>
        </ul>
      </section>
      <!-- //section_push_alarm -->
    </div>

    <transition name="fade">
      <set-location-modal v-if="setLocationModal" @close="setLocationModal = false" :air="air" v-on:commit="commit"/>
    </transition>
    <transition name="fade">
      <alert-modal v-if="gpsSendModal" @ok="createMap" @close="gpsSendModal = false">
        <h3 slot="body">상세 주소를 입력해 주세요.</h3>
      </alert-modal>
    </transition>
  </div>
  <!-- //wrap_contents_area-->
</template>

<script>
import SetLocationModal from '@/components/air/modal/SetLocation'
import AlertModal from '@/components/common/modal/Alert'
export default {
  name: 'setting',
  props: ['deviceId', 'userId', 'deviceInfo', 'route'],
  components: { SetLocationModal, AlertModal },
  data () {
    return {
      air: {},
      setLocationModal: false,
      gpsSendModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.setAIGeofence()
    this.getAirSetting()
  },
  filters: {
    addressTxt: function (val) {
      if (val === null) return '주소를 입력해 주세요.'
      else return val
    }
  },
  computed: {
    btnStMsg: function () {
      if (this.air.address === null) return '등록'
      else return '변경'
    }
  },
  methods: {
    commit: function (val) {
      this.loading(true)
      if (this.air.gpsYn === 'N') this.air.gpsYn = 'Y'
      this.$http.post('api/config/air/gps/set', {
        hdeviceSeq: this.deviceId,
        gpsYn: this.air.gpsYn,
        lat: Number(val.lat),
        lon: Number(val.lon),
        address: val.address
      })
      .then(response => {
        if (response.data.header.resultCode !== '20000') {
          this.$toast(response.data.header.resultMsg)
        }
        this.setLocationModal = false
        this.loading(false)
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => console.log(error))
    },
    setAIGeofence: function () {
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.setAIGeofence !== 'undefined') {
        window.SkmagicNative.setAIGeofence()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'setAIGeofence'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    },
    createMap: function () {
      this.gpsSendModal = false
      this.setLocationModal = true
    },
    setAi: function () {
      var ai = 'Y'
      if (this.air.aiYn === 'Y') ai = 'N'
      this.loading(true)
      this.$http.post('api/config/air/ai/set', {
        hdeviceSeq: this.deviceId,
        aiYn: ai
      })
      .then(response => {
        this.setAIGeofence()
        this.air.aiYn = ai
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => console.log(error))
    },
    setGps: function () {
      if (this.air.address === null) {
        this.gpsSendModal = true
      } else {
        var gps = 'Y'
        if (this.air.gpsYn === 'Y') gps = 'N'
        this.loading(true)
        this.$http.post('api/config/air/gps/set', {
          hdeviceSeq: this.deviceId,
          gpsYn: gps
        })
        .then(response => {
          this.air.gpsYn = gps
          setTimeout(() => { this.loading(false) }, 200)
        })
        .catch(error => console.log(error))
      }
    },
    getAirSetting: function () {
      this.loading(true)
      this.$http.post('api/config/air/get', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.air = response.data.body
        this.setAIGeofence()
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
/* ai 설정  */
.section_push_alarm .area_location li {
    height: 65px;
    padding-top: 22px;
}
.section_push_alarm .area_ai li {
    padding:19px 15px;
}
.section_push_alarm li .btn_change {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -18px;
    width: 58px;
}
.section_push_alarm li label {
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -14px;
}
.section_push_alarm .area_alarm li:last-child {
    border-bottom: 0;
}
.section_push_alarm .area_alarm li {
    padding: 13px 0;
}
.section_push_alarm .top_bg {
    background: url(/images/page/bg_alarm.png) top left repeat-x;
    -webkit-background-size: 3px;
    background-size: 3px;
}
.section_push_alarm .area_reserv li label, .section_push_alarm .area_ai li label {
    right: 15px;
}
.section_push_alarm .area_alarm {
    padding: 8px 15px 0;
    border-bottom: 1px solid #e5e5e5;
}
.toasted.primary.default {
  opacity: 0.5;
  border-radius: 5px;
  background-color: #4c4c4c;
}
</style>
