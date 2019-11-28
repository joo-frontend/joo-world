<template>
  <div class="wrap_contents_area">
    <section class="section_push_alarm">
      <ul>
          <li class="alarm_title">
              PUSH 알림
          </li>
          <li>
              <p>목표량 알림</p>
              <span>일일 물 섭취 목표량을 달성하지 못했을 경우,<br>오후 8시 알림을 받으실 수 있습니다.</span>
              <label class="toggle_purify_alarm"><input type="checkbox" class="checkbox_toggle_lg" name="goalAlertYn" :checked="pushList.goalAlertYn === 'Y'" @click="setWaterSetting"></label>
          </li>
          <li>
              <p>날씨 알림</p>
              <span>미세먼지 농도 나쁨 수준이거나, 30℃ 이상,<br>0℃ 미만일 때 알림을 받으실 수 있습니다.</span>
              <label class="toggle_purify_alarm"><input type="checkbox" class="checkbox_toggle_lg" name="weatherAlertYn" :checked="pushList.weatherAlertYn === 'Y'" @click="setWaterSetting"></label>
          </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: 'setting',
  props: ['deviceId'],
  data () {
    return {
      pushList: {
        goalAlertYn: '',
        weatherAlertYn: ''
      }
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.getWaterSetting()
  },
  methods: {
    getWaterSetting: function () {
      this.loading(false)
      this.$http.post('/api//water/push/info', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.pushList = response.data.body
      })
      .catch(error => console.log(error))
    },
    setWaterSetting: function () {
      this.pushList[event.target.name] === 'Y' ? this.pushList[event.target.name] = 'N' : this.pushList[event.target.name] = 'Y'
      this.$http.post('/api/water/push/set', {
        hdeviceSeq: this.deviceId,
        goalAlertYn: this.pushList.goalAlertYn,
        weatherAlertYn: this.pushList.weatherAlertYn
      })
      .then(response => {
        if (response.data.header.resultCode !== '20000') {
          this.$toast(response.data.header.resultMsg)
        }
        this.loading(true)
        this.getWaterSetting()
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
