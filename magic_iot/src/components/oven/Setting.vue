<template>
  <div class="wrap_contents_area">
    <section class="section_push_alarm">
      <ul>
          <li class="alarm_title">
              Push 알림
          </li>
          <li>
              <p>기기 에러 알림</p>
              <span>기기에 에러가 발생할 경우 알려 드립니다.</span>
              <label style="right:10px"><input type="checkbox" class="checkbox_toggle_lg" name="errMsgPushYn" :checked="pushList.errMsgPushYn === 'Y'" @click="setOvenSetting"></label>
          </li>
          <li>
              <p>나만의 요리 등록 알림</p>
              <span>나만의 요리가 등록 되었을때 알려드립니다.</span>
              <label style="right:10px"><input type="checkbox" class="checkbox_toggle_lg" name="myCookRegPushYn" :checked="pushList.myCookRegPushYn === 'Y'" @click="setOvenSetting"></label>
          </li>
          <li>
              <p>제품 작동 알림</p>
              <span>오븐 작동 및 도어 열림시 알려 드립니다.</span>
              <label style="right:10px"><input type="checkbox" class="checkbox_toggle_lg" name="cookStartYn" :checked="pushList.cookStartYn === 'Y'" @click="setOvenSetting"></label>
          </li>
          <li>
              <p>요리 완료 알림</p>
              <span>요리가 완료 되면 알려 드립니다.</span>
              <label style="right:10px"><input type="checkbox" class="checkbox_toggle_lg" name="cookEndYn" :checked="pushList.cookEndYn === 'Y'" @click="setOvenSetting"></label>
          </li>
          <li class="alarm_title">
              제품설정
          </li>
          <li>
              <p>음성 안내</p>
              <span>음성으로 안내 받을 수 있어 편리합니다.</span>
              <label style="right:10px"><input type="checkbox" class="checkbox_toggle_lg" name="voiceGuide" :checked="oven.voiceGuide === 1" @click="stompClientSend(oven.voiceGuide)"></label>
          </li>
      </ul>
    </section>
    <popup-modal v-if="controlErrModal" @ok="controlErrModal = false" @close="controlErrModal = false">
      <h3 slot="body">가전제어가 실패되었습니다. 다시 시도 하세요.</h3>
    </popup-modal>
  </div>
</template>
<script>
import PopupModal from '@/components/common/modal/Popup'

export default {
  name: 'setting',
  components: { PopupModal },
  props: ['userId', 'deviceInfo', 'oven'],
  data () {
    return {
      pushList: {
        errMsgPushYn: '',
        myCookRegPushYn: '',
        cookStartYn: '',
        cookEndYn: ''
      },
      controlErrModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.getOvenSetting()
  },
  methods: {
    getOvenSetting: function () {
      this.loading(true)
      this.$http.post('/api/oven/alert/get', {
        hdeviceSeq: this.deviceInfo.hdeviceSeq
      })
      .then(response => {
        this.pushList = response.data.body
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    setOvenSetting: function () {
      this.pushList[event.target.name] === 'Y' ? this.pushList[event.target.name] = 'N' : this.pushList[event.target.name] = 'Y'
      this.$http.post('/api/oven/alert/set', {
        hdeviceSeq: this.deviceInfo.hdeviceSeq,
        errMsgPushYn: this.pushList.errMsgPushYn,
        myCookRegPushYn: this.pushList.myCookRegPushYn,
        cookStartYn: this.pushList.cookStartYn,
        cookEndYn: this.pushList.cookEndYn
      })
      .then(response => {
        if (response) {}
      })
      .catch(error => {
        console.log(error)
        event.target.checked = false
        this.loading(false)
      })
    },
    stompClientSend: function (val) {
      var self = this
      var cmdObj = {}
      var name = 'voice'
      if (!this.oven.online) {
        event.target.checked = false
        this.$toast('가전이 연결되어 있지 않아 설정을 변경 할 수 없습니다.')
        return
      }
      event.preventDefault()
      event.target.checked ? val = '1' : val = '0'
      this.oven.waitCmd = true
      this.loading(true)
      cmdObj[name] = String(val)
      if (typeof this.callbackHdeviceToken === 'undefined') {
        this.callbackHdeviceToken = 'token'
      }
      this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceInfo.hdeviceSeq + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
      setTimeout(() => {
        waitResponse(cmdObj[name], 20)
      }, 200)

      function waitResponse (cmd, cnt) {
        if (cnt > 0) {
          if (cmd === String(self.oven['voiceGuide'])) {
            self.oven.waitCmd = false
            self.loading(false)
            return
          } else {
            setTimeout(() => { waitResponse(cmd, --cnt) }, 200)
          }
        } else {
          self.oven.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
    }
  }
}
</script>
