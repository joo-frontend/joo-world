<template>
<!-- AI살장 탭 내 위치설정팝업 -->
<section class="example-page">
  <!-- section_header -->
  <div class="popup_detail">
    <div class="popup_detail_header" style="background: #585858;">
      <button class="sprite sprite_common sprite_back"style="width:17px;height:17px;position: absolute;top:17px;left:16px;font-size:1.3rem;z-index:1" @click="$emit('close')">뒤로</button>
      <div class="title" style="top: 17px;">위치 설정</div>
      <div class="close_popup">
        <button class="sprite sprite_common sprite_search" style="width: 17px; height: 17px; position: absolute; top: 17px; left: 15px; font-size: 1.3rem;" @click="searchLocationModal = true">검색</button>
      </div>
    </div>
    <!-- //section_header -->
      <div class="section_location" style="top: 52px;position: absolute;z-index: 100;background-color: white;width: 100%;height: 6%;">
      <ul>
        <li><span style="z-index: 1;width: 100%;line-height: 3.7rem;font-size: 1.2rem;color: #888888;letter-spacing: -1px;display: inline-block;margin-left: 16px;" v-model="place">{{this.place}}</span></li>
      </ul>
    </div>
    <div class="section_map">
      <button class="sprite sprite_air_purify sprite_current" style="position: absolute;z-index: 100;top: 70%;right: 0;" @click="getPostion(center)"></button>
    </div>
    <div class="popup_detail_contents" id="map" @click="mapClick()" v-model="mapMove">

    </div>
    <section class="section_btn bottom_btn bottom_fixed btn_area_transparent">
      <div class="area_btn">
        <button class="btn btn_lg btn_skyblue btn_block" @click="commit">확인</button>
      </div>
    </section>
  </div>
  <search-location-modal v-if="searchLocationModal" @close="searchLocationModal = false" :air="air" v-on:setPlace="setPlace"/>
</section>
</template>
<script>
var marker
var map
var mapOptions = {
  zoom: 15,
  center: {lat: 37.50564061957154, lng: 126.99199676513672},
  mapTypeId: window.google.maps.MapTypeId.ROADMAP
}
import SearchLocationModal from '@/components/air/modal/SearchLocation'
export default {
  name: 'setting',
  props: ['deviceId', 'userId', 'deviceInfo', 'air'],
  components: { SearchLocationModal },
  data () {
    return {
      markers: [{position: {}}],
      center: {lat: 37.50564061957154, lng: 126.99199676513672},
      path: {lat: 37.50564061957154, lng: 126.99199676513672},
      place: null,
      mapMove: null,
      searchLocationModal: false
    }
  },
  created () {
    var self = this
    window.SkmagicWeb = {
      callbackCurrentPosition: function (latitude, longitude) {
        // this.$toast(latitude + '/' + longitude + '내 현재 위치 가져오기')
        self.position(latitude, longitude)
      }
    }
    if (this.air.address !== null) {
      setTimeout(() => {
        this.createMap(this.air)
      }, 1000)
    } else {
      setTimeout(() => {
        this.getPostion(this.center)
      }, 1000)
    }
  },
  watch: {
    mapMove: function () {
      mapOptions = {
        zoom: 15,
        center: marker.position,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      }
      map = new window.google.maps.Map(document.getElementById('map'), mapOptions)
      marker.setMap(map)
      this.markers.shift()
      this.markers.push({
        position: {
          lat: marker.position.lat(),
          lng: marker.position.lng()
        }
      })
      this.searchPlace()
    }
  },
  methods: {
    createMap: function (air) {
      this.center.lat = Number(air.lat)
      this.center.lng = Number(air.lon)
      mapOptions = {
        zoom: 15,
        center: this.center,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      }
      map = new window.google.maps.Map(document.getElementById('map'), mapOptions)

      marker = new window.google.maps.Marker({
        position: this.center,
        map: map
      })
      marker.setMap(map)

      this.markers.shift()
      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng
        }
      })
      this.searchPlace()
    },
    mapClick: function () {
      map.addListener('click', function (event) {
        marker = new window.google.maps.Marker({
          position: event.latLng,
          map: this.data.map
        })
        map.setCenter(marker.getPosition())
      })
      map.addListener('center_changed', function () {
        map.panTo(marker.getPosition())
      })
      this.mapMove = map
    },
    commit: function () {
      this.air.lat = String(this.markers[0].position.lat)
      this.air.lon = String(this.markers[0].position.lng)
      this.air.address = this.place
      this.$emit('commit', this.air)
    },
    position: function (latitude, longitude) {
      this.loading(false)
      this.center.lat = Number(latitude)
      this.center.lng = Number(longitude)
      mapOptions = {
        zoom: 15,
        center: this.center,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      }
      map = new window.google.maps.Map(document.getElementById('map'), mapOptions)

      marker = new window.google.maps.Marker({
        position: this.center,
        map: map
      })
      marker.setMap(map)

      this.markers.shift()
      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng
        }
      })
      this.searchPlace()
    },
    getPostion (center) {
      this.loading(true)
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.currentPosition !== 'undefined') {
        window.SkmagicNative.currentPosition()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'currentPosition'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      } else {
        this.$toast('현재위치를 찾을 수 없습니다.')
      }
      setTimeout(() => {
        this.loading(false)
      }, 1000 * 3)
    },
    setPlace (place) {
      this.searchLocationModal = false
      mapOptions = {
        zoom: 15,
        center: place.geometry.location,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      }
      map = new window.google.maps.Map(document.getElementById('map'), mapOptions)

      marker = new window.google.maps.Marker({
        position: place.geometry.location,
        map: map
      })
      marker.setMap(map)
      this.markers.shift()
      this.markers.push({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      })
      this.searchPlace()
    },
    usePlace (center) {
      if (center) {
        this.markers.shift()
        this.markers.push({
          position: {
            lat: center.latLng.lat(),
            lng: center.latLng.lng()
          }
        })
      }
      this.$refs.map.panTo({
        lat: center.latLng.lat(),
        lng: center.latLng.lng()
      })
      this.searchPlace()
    },
    searchPlace: function () {
      var geocodeUrl = '/googleapis/maps/api/geocode/json?'
      var key = 'AIzaSyCu7jTHfB7xbfnCwWzZHqquyH_NJQAXA3Y'
      var latlng = []
      latlng[0] = this.markers[0].position.lat
      latlng[1] = this.markers[0].position.lng
      var url = geocodeUrl + 'latlng=' + latlng.toString() + '&key=' + key
      this.$http.get(url)
      .then(response => {
        this.place = response.data.results[0].formatted_address
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style scoped>
/* 컨텐츠 디테일 팝업 */
.popup_detail {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 100;
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
.popup_detail_header .title p:first-child {
    line-height: 20px;
    padding-top: 12px;
}
.popup_detail_header .title p:nth-child(2) {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.5);
}

.popup_detail_header .edit {
    position: absolute;
    top: 0;
    right: 30px;
    width: 52px;
    height: 52px;
    text-align: center;
}
.popup_detail_header .close_popup {
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 52px;
    text-align: center;
}

.popup_detail_header .edit button {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 17px;
}
.popup_detail_header .close_popup button {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 17px;
}

.popup_detail_contents {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0 0 67px 0;
    z-index: 90;
    background: #f3f3f3;
}
/* Q & A */
.section_question {
    height: 91vh;
    background: #f3f3f3;
}
.popup_detail_contents .area_question {
    height: 140px;
    background: #ffffff;
    padding: 60px 15px 0;
}
.popup_detail_contents .area_question p {
    color: #4095cd;
    font-size: 1.4rem;
    line-height: 2.4rem;
}
.popup_detail_contents .area_answer {
    padding: 18px 13px 0;
}
.popup_detail_contents .area_answer p {
    font-size: 1.3rem;
    line-height: 2.2rem;
}
</style>
