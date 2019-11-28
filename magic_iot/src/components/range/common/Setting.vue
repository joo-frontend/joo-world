<template>
  <div class="wrap_contents_area" :style="scroll">
    <div class="wrap_bg_gray">
      <section class="section_push_alarm">
          <p class="alarm_title">
              Push 알림
          </p>
          <ul class="area_alarm">
              <li>
                  <p>제품 작동 알림</p>
                  <span>{{ modelKindNm }}가 작동했을 때 알려 드립니다.</span>
                  <label><input type="checkbox" class="checkbox_toggle_lg" name="actionAlertYn" :checked="push.actionAlertYn === 'Y'" @click="setRangePush"></label>
              </li>
              <li v-if = "modelKind === '0x0801'">
                  <p>안심센서 작동 알림</p>
                  <span>사용중인 용기의 온도가 과열되어 자동 소화되었을  경우 알려 드립니다.</span>
                  <label><input type="checkbox" class="checkbox_toggle_lg" name="safeAlertYn" :checked="push.safeAlertYn === 'Y'" @click="setRangePush"></label>
              </li>
              <li>
                  <p>미사용 알림</p>
                  <span> 미사용 기간이 지났을 경우 알려 드립니다.</span>
                  <label><input type="checkbox" class="checkbox_toggle_lg" name="notUsedAlertYn" :checked="push.notUsedAlertYn === 'Y'" @click="setRangePush"></label>
              </li>
              <li class="edit">
                  <p>{{ push.notUsedSetDay | numberFormat}}일 </p>
                  <button class="btn btn_md btn_dark_gray btn_change" name="notUsedSetDay" :disabled="push.notUsedAlertYn === 'N'" @click="showSelModal('A')">편집</button>
              </li>
          </ul>

          <p class="alarm_title">
              문자 알림
          </p>
          <ul class="area_alarm">
              <li>
                  <p>연속사용 시간 알림</p>
                  <span>연속해서 설정 시간 이상 사용 되고 있을 경우  알려드립니다.</span>
                  <label><input type="checkbox" class="checkbox_toggle_lg" name="conUsedAlertYn" :checked="push.conUsedAlertYn === 'Y'" @click="setRangePush"></label>
              </li>
              <li class="edit">
                  <p>{{ push.conUsedSetMin }}분 </p>
                  <button class="btn btn_md btn_dark_gray btn_change" name="conUsedSetMin" :disabled="push.conUsedAlertYn === 'N'" @click="showSelModal('B')">편집</button>
              </li>
          </ul>
      </section>
      <!-- //section_push_alarm -->
    </div>
    <select-time-modal v-if="showSelectTimeModal === 'A' || showSelectTimeModal === 'B'" :type="showSelectTimeModal" :day="push.notUsedSetDay" :min="push.conUsedSetMin" v-on:setRangePush="setRangePush" @close="showSelectTimeModal = false"></select-time-modal>
  </div>
</template>
<script>
import SelectTimeModal from '@/components/range/common/SelectTime'

export default {
  name: 'pushSetting',
  components: { SelectTimeModal },
  props: ['deviceId', 'userId', 'deviceInfo'],
  data () {
    return {
      modelKind: '',
      day: '',
      min: '',
      showSelectTimeModal: false,
      scroll: {},
      push: {
        actionAlertYn: '',
        safeAlertYn: '',
        notUsedAlertYn: '',
        notUsedSetDay: '',
        notUsedSendCnt: '',
        conUsedAlertYn: '',
        conUsedSetMin: ''
      }
    }
  },
  filters: {
    numberFormat: function (val) {
      if (val < 10) return '0' + val
      else return val
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.modelKind = this.deviceInfo.modelKind
    this.getRangePush()
  },
  computed: {
    modelKindNm: function () {
      if (this.modelKind === '0x0801') return '가스레인지'
      else return '전기레인지'
    }
  },
  methods: {
    showSelModal: function (type) {
      this.scroll = {
        'overflow': 'hidden',
        'height': '100%'
      }
      this.showSelectTimeModal = type
    },
    getRangePush: function () {
      this.$http.post('/api/range/alert/info', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.push = response.data.body
      })
      .catch(error => console.log(error))
    },
    setRangePush: function (val) {
      this.scroll = {
        'overflow': 'auto',
        'height': '100%'
      }
      if (event.target.name === 'conUsedSetMin') {
        this.push.conUsedSetMin = val
        this.showSelectTimeModal = false
      } else if (event.target.name === 'notUsedSetDay') {
        this.push.notUsedSetDay = val
        this.showSelectTimeModal = false
      } else {
        this.push[event.target.name] === 'Y' ? this.push[event.target.name] = 'N' : this.push[event.target.name] = 'Y'
      }
      this.$http.post('/api/range/alert/update', {
        hdeviceSeq: this.deviceId,
        actionAlertYn: this.push.actionAlertYn,
        safeAlertYn: this.push.safeAlertYn,
        notUsedAlertYn: this.push.notUsedAlertYn,
        notUsedSetDay: this.push.notUsedSetDay,
        notUsedSendCnt: this.push.notUsedSendCnt,
        conUsedAlertYn: this.push.conUsedAlertYn,
        conUsedSetMin: this.push.conUsedSetMin
      })
      .then(response => this.getRangePush())
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
/* ui.page.css : 가스레인지 설정 Push 알림 */
.section_push_alarm .area_alarm {
    padding: 8px 15px 0;
    border-bottom: 1px solid #e5e5e5;
}

.section_push_alarm .top_bg {
    background: url('/images/page/bg_alarm.png') top left repeat-x;
    -webkit-background-size: 3px;
    background-size: 3px;
}

.section_push_alarm .area_alarm li {
    padding: 13px 0;
}
.section_push_alarm .area_alarm li:last-child {
    border-bottom: 0;
}

.section_push_alarm .area_alarm li.edit {
    padding: 25px 0;
}
.section_push_alarm li .btn_change {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -18px;
    width: 58px;
}
</style>
