<template>
<section class="example-page">
  <!-- AI설정 탭 내 위치검색팝업 -->
  <div class="popup_detail">
    <div class="popup_detail_header section_location_search" >
      <button class="sprite sprite_common sprite_back_black" @click="$emit('close')">뒤로</button>
      <input id="searchTextField" placeholder="검색" type="text"></input>
    </div>
  </div>
</section>
</template>
<script>
var autocomplete
var place
export default {
  name: 'setting',
  props: ['deviceId', 'userId', 'deviceInfo', 'air'],
  data () {
    return {
      place: null,
      test: null
    }
  },
  mounted () {
    var self = this
    var input = document.getElementById('searchTextField')
    autocomplete = new window.google.maps.places.Autocomplete(input)
    autocomplete.addListener('place_changed', function () {
      place = autocomplete.getPlace()
      self.setPlace(place)
    })
  },
  methods: {
    setPlace: function (place) {
      if (typeof place !== 'undefined') {
        this.$emit('setPlace', place)
      }
    }
  }
}
</script>
<style scoped>
.popup_detail {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 2);
}
/* 청정기 위치 검색 */
.popup_detail_header.sprite_back_black {
    left: 15px;
    top: 16px;
}
.popup_detail_header.section_location_search {
    background: rgba(230,230,230,0.3);
    border-bottom: 1px solid #ababab;
    -webkit-box-shadow: 0px 3px 3px 0px rgba(171,171,171,0.75);
    -moz-box-shadow: 0px 3px 3px 0px rgba(171,171,171,0.75);
    box-shadow: 0px 3px 3px 0px rgba(171,171,171,0.75);
}
.popup_detail_header.section_location_search input {
    background: transparent;
    width: 80%;
    display: inline-block;
    border: 0;
    font-size: 1.5rem;
    line-height: 2.7rem;
    height: inherit;
    margin-bottom: 13px;
    margin-top: 13px;
}
.popup_detail_header.section_location_search p {
    font-size: 1.5rem;
    line-height: 1.5rem;
    display: inline-block;
    vertical-align: bottom;
    padding-left: 58px;
    color: #6e6e6e;
}
.popup_detail_header.section_location_search img {
    margin-left: 3px;
    vertical-align: top;
    width: 60px;
}
/* 검색페이지 아이콘 추가 */
.sprite_back_black {
    background-position: -175px -225px;
    width: 10%;
    height: 30px;
    margin-left: 5%;
}
</style>
