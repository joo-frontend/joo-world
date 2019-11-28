<template>
  <div class="popup_detail type2" style="background-color:white;">
    <div class="popup_detail_header" style="background: #585858;">
      <button class="sprite sprite_common sprite_back" @click="$emit('close')">뒤로</button>
      <h1>알림 설정</h1>
    </div>
    <div class="popup_detail_contents">
        <section class="section_super_setting set" v-if="pushData === 'Y'">
          <!-- 그룹 있는 경우 -->
          <ul>
            <li class="desc">
                <p>공기청정기</p>
            </li>
            <li>
                <p>가전 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="airHdeviceYn" :disabled="pushInfo.air.useYn === 'N'" :checked="pushInfo.air.hdeviceYn === 'Y' && pushInfo.air.useYn === 'Y'" @click="setPushInfo(pushInfo.air.hdeviceYn)"></label>
            </li>
            <li>
                <p>날씨 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="airWeatherYn" :disabled="pushInfo.air.useYn === 'N'" :checked="pushInfo.air.weatherYn === 'Y' && pushInfo.air.useYn === 'Y'" @click="setPushInfo(pushInfo.air.weatherYn)"></label>
            </li>
            <li class="none_border_bottom">
                <p>공기상태 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="airStatusYn" :disabled="pushInfo.air.useYn === 'N'" :checked="pushInfo.air.airStatusYn === 'Y' && pushInfo.air.useYn === 'Y'" @click="setPushInfo(pushInfo.air.airStatusYn)"></label>
            </li>
            <li class="desc desc_contents">
                <p>공기상태가 "나쁨","매우나쁨"일 때 알려드립니다.</p>
            </li>
            <li class="desc">
                <p>정수기</p>
            </li>
            <li>
                <p>가전 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="waterHdeviceYn" :disabled="pushInfo.water.useYn === 'N'" :checked="pushInfo.water.hdeviceYn === 'Y' && pushInfo.water.useYn === 'Y'" @click="setPushInfo(pushInfo.water.hdeviceYn)"></label>
            </li>
            <li class="desc">
                <p>가스레인지</p>
            </li>
            <li>
                <p>가전 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="rangeHdeviceYn" :disabled="pushInfo.range.useYn === 'N'" :checked="pushInfo.range.hdeviceYn === 'Y' && pushInfo.range.useYn === 'Y'" @click="setPushInfo(pushInfo.range.hdeviceYn)"></label>
            </li>
            <li class="desc">
                <p>전기레인지</p>
            </li>
            <li>
                <p>가전 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="erangeHdeviceYn" :disabled="pushInfo.erange.useYn === 'N'" :checked="pushInfo.erange.hdeviceYn === 'Y' && pushInfo.erange.useYn === 'Y'" @click="setPushInfo(pushInfo.erange.hdeviceYn)"></label>
            </li>
            <li class="desc">
                <p>오븐</p>
            </li>
            <li>
                <p>가전 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="ovenHdeviceYn" :disabled="pushInfo.oven.useYn === 'N'" :checked="pushInfo.oven.hdeviceYn === 'Y' && pushInfo.oven.useYn === 'Y'" @click="setPushInfo(pushInfo.oven.hdeviceYn)"></label>
            </li>
            <li class="desc">
                <p>가습기</p>
            </li>
            <li>
                <p>가전 알림</p>
                <label><input type="checkbox" class="checkbox_toggle_lg" name="humiHdeviceYn" :disabled="pushInfo.humi.useYn === 'N'" :checked="pushInfo.humi.hdeviceYn === 'Y' && pushInfo.humi.useYn === 'Y'" @click="setPushInfo(pushInfo.humi.hdeviceYn)"></label>
            </li>
          </ul>
        </section>
    </div>
  </div>
</template>
<script>
export default {
  props: ['route'],
  data () {
    return {
      pushInfo: {},
      pushData: 'N'
    }
  },
  created () {
    this.getPushInfo()
  },
  methods: {
    getPushInfo: function () {
      this.$http.post('/api/config/user/push/info', {
        // magicmallId: 'seokan@ubivelox.com'
        route: this.route
      })
      .then(response => {
        if (response.data.header.resultCode === '20000') {
          this.pushInfo = response.data.body
          this.pushData = 'Y'
        }
      })
      .catch(error => console.log(error))
    },
    setPushInfo: function (useYn) {
      event.preventDefault()
      this.loading(true)
      var obj = {}
      obj[event.target.name] = useYn === 'Y' ? 'N' : 'Y'
      // obj['magicmallId'] = 'seokan@ubivelox.com'
      this.$http.post('/api/config/user/push/set', JSON.stringify(obj))
      .then(response => {
        if (response.data.header.resultCode === '20000') {
          this.getPushInfo()
          this.loading(false)
        }
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
/* 팝업 */
.popup_detail {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 2);
}
.popup_detail_header {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    z-index: 100;
}
.popup_detail_header span {
    position: absolute;
    top: 17px;
    left: 15px;
    font-size: 1.3rem;
    color: #ffffff;
}
.popup_detail_header h1 {
    font-size: 1.7rem;
    height: 52px;
    line-height: 52px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.popup_detail_header .title {
    position: relative;
    font-size: 1.7rem;
    height: 52px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
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
.section_super_setting.set ul li {
    border-bottom: 1px solid #e5e5e5;
    height: 61px;
    padding-left: 15px;
    position: relative;
    font-weight:bold;
}
.section_super_setting.set ul li.none_border_bottom {
    border: 0;
}
.section_super_setting.set ul li.desc {
    height: 30px;
    background: #c9c9c9;
    border: 0;
}
.section_super_setting.set ul li.desc p {
    line-height: 30px;
}
.section_super_setting.set ul li.desc.desc_contents {
    background: none;
    height: 10px;
}
.section_super_setting.set ul li.desc.desc_contents p {
    font-size: 1.0rem;
    line-height: 0px;
}

.section_super_setting.set ul li a,
.section_super_setting.set ul li p {
    display: block;
    line-height: 60px;
    font-size: 1.2rem;
}

.section_super_setting.set ul li span {
    position: absolute;
    right: 15px;
    top: 21px;
    font-size: 1.0rem;
}
.section_super_setting ul li .checkbox_toggle_lg {
    position: absolute;
    right: 18px;
    top: 17px;
}
</style>
