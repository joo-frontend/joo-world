<template>
  <div>
    <!-- section_weather -->
    <section class="section_weather" :class="{section_weather_wide: deviceInfo.modelKind === '0x0901'}">
      <div class="box_section_title">
        <span>{{ weatherInfo.cityInfo }}
          <a @click="localSettingModal = true" class="align_center">
              <span class="sprite sprite_weather sprite_position"></span>
          </a>
        </span>
        <p>Update {{ weatherInfo.today.updateTime }}</p>
      </div>

      <!-- 청정기:0x0901 -->
      <div class="wrap_current_weather" v-if="deviceInfo.modelKind === '0x0901'">
        <div class="box_weather">
          <div class="weather_img"><img :src="setTodayWeatherIcon(weatherInfo.today.fileName)" alt=""></div>
          <div class="weather_contents">
            <p class="weather_desc">{{ weatherInfo.today.skyName }}</p>
            <span>{{ weatherInfo.today.temperature }}</span><span class="cDgree">C</span>
            <p class="weather_etc">습도<span>{{ weatherInfo.today.humidity }}<strong>%</strong></span></p>
          </div>
        </div>
        <div class="area_air_status">
          <div class="box_air_img" :class="airStatusObj">
            <div class="air_info">
              <p class="air_value">{{ weatherInfo.today.airCondition.airCodeName }}</p>
              <p>실외 공기</p>
            </div>
          </div>
          <div class="box_air">
            <div>
              <p>미세먼지</p>
              <p class="dust">{{ weatherInfo.today.airCondition.pm10 }}</p>
            </div>
            <div>
              <p>초미세먼지</p>
              <p class="dust">{{ weatherInfo.today.airCondition.pm25 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap_day_weather" v-if="deviceInfo.modelKind === '0x0901'">
        <ul class="box_day_weather" :style="styleObj">
          <li v-for="(day, index) in weatherInfo.today.timeList">
            <p class="time current" v-if="day.time === '지금'">{{ day.time }}</p>
            <p class="time current" v-else>{{ day.time }}시</p>
            <p class="weather_icon"><span class="sprite sprite_weather" :class="smImg[day.fileName]"></span></p>
            <p class="rain_per" v-if="day.rainProb === ''">-</p>
            <p class="rain_per" v-else>{{ day.rainProb }}%</p>
            <p class="degree">{{ day.temperature }}ºC</p>
          </li>
        </ul>
      </div>

      <div class="wrap_week_weather" v-if="deviceInfo.modelKind === '0x0901'">
        <p class="week_title">주간날씨</p>
        <span>{{ weatherInfo.weekListUpdateTime }} 발표</span>
        <ul>
          <li v-for="day in weatherInfo.weekList">
            <span class="weekday">{{ day.day }}</span>
            <p class="day">{{ day.date | changeDate }}</p>
            <p><span class="sprite sprite_weather" :class="smImg[day.fileName]">{{ day.skyName }}</span></p>
            <p class="degree">{{ day.high }}ºC / {{ day.low }}ºC</p>
          </li>
        </ul>
      </div>
      <!-- //청정기 -->

      <!-- 미니정수기 -->
      <div class="wrap_weather">
        <div class="box_weather" v-if="deviceInfo.modelKind !== '0x0901'">
          <span class="sprite sprite_weather sprite_weather_all" :class="bigImg[weatherInfo.today.fileName]"></span>
          <span class="weather_desc">{{ weatherInfo.today.skyName }} <strong>{{ weatherInfo.today.temperature }}</strong></span>
        </div>
      </div>
      <div class="box_air" v-if="deviceInfo.modelKind !== '0x0901'">
        <div>
          <p>습도</p>
          <p class="humidity">{{ weatherInfo.today.humidity }}</p>
        </div>
        <div>
          <p>미세먼지</p>
          <p class="dust">{{ weatherInfo.today.airCondition.pm10 }}</p>
        </div>
        <div>
          <p>초미세먼지</p>
          <p class="dust">{{ weatherInfo.today.airCondition.pm25 }}</p>
        </div>
      </div>
      <!-- //미니정수기 -->
    </section>
    <!-- //section_weather -->

    <!-- section_weather_error -->
    <section class="section_weather_msg section_main_weather_msg" v-if="showErrorWheather && deviceInfo.modelKind !== '0x0901'">
      <div class="alert_weather_msg">
        <p>날씨정보를<br>표시 할 수 없습니다</p>
        <button class="btn btn_skyblue" @click="getWeather">새로고침</button>
        <span class="sprite sprite_common sprite_alert">?</span>
      </div>
    </section>
    <!-- //section_weather_error -->
    <transition name="fade">
      <local-setting-modal v-if="localSettingModal" @close="localSettingModal=false" v-on:setWeather="setWeather" :cityCode="weatherInfo.cityCode"></local-setting-modal>
    </transition>
  </div>
</template>

<script>
import LocalSettingModal from '@/components/common/modal/LocalSetting'

// 오늘 날씨 이미지(청정기)
const todayImg = {
  'ic_weather_b_sunny': 'lg_sun.png',
  'ic_weather_b_cloudy': 'lg_sun_cloud.png',
  'ic_weather_b_overcast': 'lg_cloud.png',
  'ic_weather_b_rain_cloud': 'lg_rain_cloud.png',
  'ic_weather_b_rain_sun': 'lg_rain_sun.png',
  'ic_weather_b_snow_sun': 'lg_snow_sun.png',
  'ic_weather_b_snow_cloud': 'lg_snow_cloud.png',
  'ic_weather_b_sleet_sun': 'lg_rain_snow_sun.png',
  'ic_weather_b_sleet_cloud': 'lg_snow_rain_cloud.png',
  'ic_weather_b_rain': 'lg_rain.png',
  'ic_weather_b_thunder': 'lg_thunderstorm.png',
  'ic_weather_b_snow': 'lg_snow.png',
  'ic_weather_b_sleet': 'lg_snow_rain.png',
  'ic_weather_b_haze': 'lg_mist.png'
}
export default {
  name: 'weather',
  components: { LocalSettingModal },
  props: ['deviceInfo'],
  data () {
    return {
      // 청정기 날씨 아이콘
      smImg: {
        'ic_weather_s_sunny_m': 'sprite_sun_sm',
        'ic_weather_s_sunny_n': 'sprite_night_sun_sm',
        'ic_weather_s_cloudy_m': 'sprite_sun_cloud_sm',
        'ic_weather_s_cloudy_n': 'sprite_night_cloud_sm',
        'ic_weather_s_overcast': 'sprite_cloud_sm',
        'ic_weather_s_rain': 'sprite_rain_sun_sm',
        'ic_weather_s_rain_m': 'sprite_rain_sun_sm',
        'ic_weather_s_rain_n': 'sprite_night_rain_sm',
        'ic_weather_s_rain_c': 'sprite_rain_cloud_sm',
        'ic_weather_s_rain_cloud_m': 'sprite_rain_cloud_sm',
        'ic_weather_s_snow': 'sprite_snow_sun_sm',
        'ic_weather_s_snow_m': 'sprite_snow_sun_sm',
        'ic_weather_s_snow_n': 'sprite_night_snow_sm',
        'ic_weather_s_snow_c': 'sprite_snow_cloud_sm',
        'ic_weather_s_sleet': 'sprite_snow_rain_sm',
        'ic_weather_s_sleet_m': 'sprite_snow_rain_sm',
        'ic_weather_s_sleet_n': 'sprite_night_rain_snow_sm',
        'ic_weather_s_sleet_c': 'sprite_snow_rain_sm',
        'ic_weather_s_rain_sun_m': 'sprite_rain_sun_sm',
        'ic_weather_s_snow_sun_m': 'sprite_snow_sun_sm',
        'ic_weather_s_snow_cloud_m': 'sprite_snow_cloud_sm',
        'ic_weather_s_sleet_sun_m': 'sprite_rain_snow_sun_sm',
        'ic_weather_s_sleet_cloud_m': 'sprite_rain_snow_cloud_sm',
        'ic_weather_s_thunder_m': 'sprite_thunderstorm_sm',
        'ic_weather_s_thunder': 'sprite_thunderstorm_sm',
        'ic_weather_s_haze': 'sprite_mist_sm',
        'ic_weather_s_haze_m': 'sprite_mist_sm'
      },
      // 미니정수기 날씨 아이콘
      bigImg: {
        'ic_weather_b_sunny': 'sprite_sun',
        'ic_weather_b_cloudy': 'sprite_sun_cloud',
        'ic_weather_b_overcast': 'sprite_cloud',
        'ic_weather_b_rain_cloud': 'sprite_rain_cloud',
        'ic_weather_b_rain_sun': 'sprite_rain_sun',
        'ic_weather_b_snow_sun': 'sprite_snow_sun',
        'ic_weather_b_snow_cloud': 'sprite_snow_cloud',
        'ic_weather_b_sleet_sun': 'sprite_rain_snow_sun',
        'ic_weather_b_sleet_cloud': 'sprite_rain_snow_cloud',
        'ic_weather_b_rain': 'sprite_rain',
        'ic_weather_b_thunder': 'sprite_thunderstorm',
        'ic_weather_b_snow': 'sprite_snow',
        'ic_weather_b_sleet': 'sprite_snow_rain',
        'ic_weather_b_haze': 'sprite_mist'
      },
      weatherInfo: {
        cityCode: '',
        cityInfo: '',
        today: {
          updateTime: '',
          temperature: '',
          humidity: '',
          skyName: '',
          fileName: '',
          airCondition: {
            airCode: '',
            airCodeName: '',
            pm10: '',
            pm25: ''
          }
        }
      },
      localSettingModal: false,
      showErrorWheather: false
    }
  },
  created () {
    this.getWeather()
  },
  filters: {
    changeDate: function (val) {
      var date = new Date()
      var month = date.getMonth()
      var day = date.getDate()
      var nextday = date.getDate() + 1
      if (month === 0) month = 1
      else month = month + 1
      if (month < 10) month = '0' + month
      if (day < 10) day = '0' + day
      if (nextday < 10) nextday = '0' + nextday
      if (month + '' + day === val.replace('.', '')) {
        return '오늘'
      } else if (month + '' + nextday === val.replace('.', '')) {
        return '내일'
      } else {
        return val
      }
    }
  },
  computed: {
    airStatusObj: function () {
      var obj = {
        '0': 'air_off',
        '1': 'air_good',
        '2': 'air_normal',
        '3': 'air_bad',
        '4': 'air_worse'
      }
      return obj[this.weatherInfo.today.airCondition.airCode]
    },
    styleObj: function () {
      if (typeof this.weatherInfo.today.timeList === 'undefined') {
        return {
          width: '0px'
        }
      } else {
        return {
          width: (this.weatherInfo.today.timeList.length * 47) + 'px'
        }
      }
    }
  },
  methods: {
    setTodayWeatherIcon: function (fileName) {
      if (fileName !== '') return '/images/main/weather/' + todayImg[fileName]
    },
    setWeather: function (cityCode) {
      this.$http.post('/api/weather/regionset', {
        cityCode: cityCode,
        hdeviceSeq: this.deviceInfo.hdeviceSeq
      })
      .then(response => {
        this.localSettingModal = false
        if (response.data.header.resultCode === '20000') this.getWeather()
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    getWeather: function () {
      this.$http.post('/api/weather/info', {
        cityCode: '',
        hdeviceSeq: this.deviceInfo.hdeviceSeq
      })
      .then(response => {
        if (response.data.header.resultCode === '20000') {
          this.weatherInfo = response.data.body
          if (this.weatherInfo.cityInfo.substr(0, 2) === '제주') {
            this.weatherInfo.cityInfo = this.weatherInfo.cityInfo.replace('제주', '제주특별자치도')
          }
        } else this.showErrorWheather = true
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    }
  }
}
</script>
<style>
/* 온도 C 추가 */
span.cDgree {
  font-size: 3rem;
  position: relative;
  color: #6f7883;
  right: -9px;
  bottom: -1px;
}
@media all and (max-width: 320px) {
  span.cDgree {
    font-size: 2.7rem;
  }
}
/* 메인 공통 css */
.section_weather {
    min-height: 17vh;
    border-top: #fff 1px solid;
    background: #f5f3f5;
    border-bottom: #ddddde 1px solid;
    padding: 11px 15px 0;
    position: relative;
}
@media all and (min-height: 700px) {
  .section_weather {
    padding: 11px 20px 0;
  }
}
.section_weather .box_section_title span {
    font-size: 1.4rem;
    position: relative;
}
.box_section_title span {
    font-size: 1.5rem;
    display: inline-block;
    line-height: 21px;
    vertical-align: top;
    color: #494a4a;
    font-weight: bold;
    position: relative;
}
.section_weather .box_section_title span button.sprite_position {
    position: absolute;
    right: -24px;
    top: 0;
}
.section_weather .box_section_title p {
    position: absolute;
    top: 13px;
    right: 15px;
    font-size: 1.1rem;
    color: #c2c2c2;
}
@media all and (max-width: 320px) {
  .section_weather .box_section_title p {
    right: 12px;
  }
}
@media all and (min-height: 700px) {
  .section_weather .box_section_title p {
    top: 14px;
    right: 24px;
  }
}
.section_weather .box_weather {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 50%;
    float: left;
    position: relative;
}
@media all and (max-width: 320px) {
  .section_weather .box_weather {
    left: -2px;
    top: 3px;
  }
}
.section_weather .box_weather .weather_desc {
    font-size: 1.5rem;
    color: #6f7883;
    /*display: inline-block;
    vertical-align: top;*/
    line-height: 47px;
    padding-left: 7px;
}
@media all and (max-width: 320px) {
  .section_weather .box_weather .weather_desc {
    padding-left: 1px;
  }
}
.section_weather .area_air_status .box_air {
    top: 5px;
    left: 112px;
/*  right: -10px;*/
}
@media all and (max-width: 320px) {
  .section_weather .area_air_status .box_air {
    left: 101px;
  }
}
@media all and (min-width: 400px) {
  .section_weather .area_air_status .box_air {
    top: 3px;
    left: 120px;
  }
}
.section_weather .area_air_status .box_air div {
    display: block;
}
.section_weather .box_air {
    position: absolute;
}
.section_weather .box_air div {
    display: inline-block;
    margin-right: 11px;
    min-width: 27px;
    max-width: 65px;
}

@media all and (min-height: 700px) {
  .section_weather .box_air div {
    margin-right: 24px;
  }
  .section_weather .box_air div:last-child {
    margin-right: 20px;
  }
}
.section_weather .box_air div p:nth-child(1) {
    font-size: 1.1rem;
    color: #a1a6ad;
    margin-bottom: 5px;
}
@media all and (min-width: 400px) {
  .section_weather .box_air div p:nth-child(1) {
    font-size: 1.3rem;
  }
}
.section_weather .box_air div p:nth-child(2) {
    font-size: 1.6rem;
    color: #6f7883;
    position: relative;
    display: inline-block;
}
.box_air .dust:after {
    content: '';
    position: absolute;
    display: block;
    bottom: 2px;
    right: -21px;
    width: 19px;
    height: 10px;
    background: url(/images/common/sprite_weather.png) -100px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_weather .box_air .dust {
    margin-right: 19px;
}
.section_weather .wrap_weather {
    padding-top: 15px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_weather .wrap_weather {
    padding-top: 5px;
  }
}
.section_weather_msg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #f0f0f0;
    border-top: #eeeeee 1px solid;
    height: 102px;
    padding: 0 15px;
}
.section_weather_msg.section_main_weather_msg {
    height: 17.5vh;
}
.alert_weather_msg {
    position: relative;
    padding: 34px 0 0 61px;
}
@media all and (min-height: 700px) {
  .alert_weather_msg {
    padding: 44px 0 0 61px;
  }
}
@media all and (max-width: 320px) {
  .alert_weather_msg {
    padding:29px 0 0 53px;
  }
}
@media all and (max-height: 600px) {
  .alert_weather_msg {
    padding:29px 0 0 61px;
  }
}
.alert_weather_msg p {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 19px;
}
.alert_weather_msg .sprite {
    position: absolute;
    top: 27px;
    left: 0;
}
@media all and (min-height: 700px) {
  .alert_weather_msg .sprite {
    top: 38px;
  }
}
@media all and (max-width: 320px),(max-height: 600px) {
  .alert_weather_msg .sprite {
    top: 24px;
  }
}
.alert_weather_msg .btn {
    height: 33px;
    line-height: 31px;
    font-size: 1.3rem;
    width: 90px;
    position: absolute;
    right: 0;
  top: 37px;
}
@media all and (min-height: 700px) {
  .alert_weather_msg .btn {
    top: 47px;
  }
}
</style>
