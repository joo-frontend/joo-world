<template>
  <div class="wrap_contents_area" ref="contentTop" :class="{modal_open: this.detailViewModal === true || this.setTimeHeatModal === true || this.setTimeWeightModal === true}" v-show="oven.isConn">
    <section class="section_accordion" v-if="isOnline && !detailViewModal">
      <ul class="accordion_list cook_list">
          <!-- 리스트 다운 펼쳤을 때 li 요소 class 추가 'focus' -->
        <!-- 이미지 추가 -->
       <!-- <li class="focus" style="background-image: url('/images/page/04_steam_oven/oven_img_list_01_oven.jpg');">-->
          <li v-for="item in recipeList" :key="item.cookCateSeq" :class="{focus: index === item.cookCateSeq}" v-bind:style="{ backgroundImage: 'url(' + item.cookCateImgPath + ')'}" @click="showDetailManual(item)">
            <span v-if="item.totalCookCnt > 0" style="font-weight: bold;">{{ item.cookCateName }}({{ item.totalCookCnt }})</span>
            <span v-else style="font-weight: bold;">{{ item.cookCateName }}</span>
            <button v-if="item.totalCookCnt > 0"></button>
            <ul class="sub_list" v-for="cook in item.cookList" :key="cook.cookSeq">
              <li @click="showCookGuideView(cook, item)" v-if="cook.cookName !== '수동요리'">
                <span class="sprite sprite_steam_oven sprite_dot"></span>
                {{ cook.cookName }}
                <input type="checkbox" :checked="checkOnFavoriteCook(cook.cookSeq)" class="toggle_cook_guide bookmark" @click="setFavoriteCook(cook)" v-if="cook.favoriteUseYn === 'Y'">
              </li>
              <li class="list_self" style="font-weight: bold;" @click="showCookGuideView(cook, item)" v-if="cook.cookName === '수동요리'"><span class="sprite sprite_steam_oven sprite_cook_self"></span>{{ cook.cookName }}
                <input type="checkbox" :checked="checkOnFavoriteCook(cook.cookSeq)" class="toggle_cook_guide bookmark" @click="setFavoriteCook(cook)" v-if="cook.favoriteUseYn === 'Y'">
              </li>
              <!-- 요리가이드 수동요리 추가 -->
              <li class="list_self" style="display: none;"><span class="sprite sprite_steam_oven sprite_cook_self"></span>수동요리</li>
            </ul>
          </li>
      </ul>
      <div class="top_btn">
        <a @click="scrollTop"><span class="sprite sprite_steam_oven sprite_top_btn">?</span></a>
      </div>
    </section>
    <detailView-modal v-if="isOnline && detailViewModal" @close="detailViewModal = false" :selCookInfo="selCookInfo" v-on:stompClientSend="stompClientSend" v-on:setFavoriteCook="setFavoriteCook"></detailView-modal>
    <transition name="fade">
     <setting-time-heat-modal v-if="setTimeHeatModal" v-on:stompClientSend="stompClientSend" @close="setTimeHeatModal = false" :recipe="heatInfo"/>
    </transition>
    <transition name="fade">
     <setting-time-weight-modal v-if="setTimeWeightModal" v-on:stompClientSend="stompClientSend" @close="setTimeWeightModal = false" :recipe="weightInfo"/>
    </transition>
    <transition name="fade">
     <alert-modal v-if="ovenSendModal" @ok="routerMove">
       <h3 slot="body">설정이 완료 되었습니다.<br>기기에서 시작 버튼을 눌러주세요.</h3>
     </alert-modal>
    </transition>

    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
</template>
<script>
import ErrorView from '@/components/common/view/Error'
import DetailViewModal from '@/components/oven/modal/Detail'
import SettingTimeWeightModal from '@/components/oven/modal/SettingTimeWeight'
import SettingTimeHeatModal from '@/components/oven/modal/SettingTimeHeat'
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'guide',
  props: ['userId', 'deviceId', 'deviceInfo', 'oven', 'route'],
  components: { ErrorView, DetailViewModal, SettingTimeHeatModal, SettingTimeWeightModal, AlertModal },
  data () {
    return {
      selCookInfo: {},
      heatInfo: {},
      weightInfo: {},
      // 팝업창
      detailViewModal: false,
      setTimeHeatModal: false,
      setTimeWeightModal: false,
      ovenSendModal: false,
      active: 0,
      index: '',
      recipeList: null
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.searchRecipeList()
    if (this.oven.isConn) {
      // 가전 연결 실패 상태
      if (!this.oven.online) {
        this.reSend()
      }
    } else {
      // 최초 진입 시 무한 대기를 방지하기 위해 3초 대기후
      // 사용자가 재시도를 누를 수 있도록 연결 오류 화면 표시
      setTimeout(() => {
        if (!this.oven.isConn) {
          this.oven.isConn = true
          this.oven.online = false
        }
      }, 1000 * 5)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.oven.isConn) {
        if (curr - this.oven.timestamp > 35000) {
          this.oven.online = false
        } else {
          online = this.oven.online
        }
        // 제어 명령 대기중이 아닐때만 로딩바 닫기
        if (!this.oven.waitCmd && this.recipeList !== null) this.loading(false)
      }
      return online
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    scrollTop: function () {
      this.$refs.contentTop.scrollTop = 0
    },
    routerMove: function () {
      this.$router.push({name: 'OvenMain', params: {}})
    },
    searchRecipeList: function () {
      this.loading(true)
      return this.$http.post('/api/oven/cook/recipe', {
        hdeviceSeq: this.deviceId,
        modelNm: this.deviceInfo.modelNm
      })
      .then(response => {
        this.recipeList = response.data.body.recipeList
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    checkOnFavoriteCook: function (cookSeq) {
      for (var index in this.oven.favoriteList) {
        if (this.oven.favoriteList[index] === parseInt(cookSeq)) {
          return true
        }
      }
    },
    setFavoriteCook: function (cook) {
      var type
      var cmdObj = {}
      var cmdSuccess = false
      if (event.target.checked) {
        type = 'favoriteAdd'
      } else {
        type = 'favoriteDel'
      }
      cmdObj[type] = String(cook.cookSeq)
      this.oven.waitCmd = true
      this.loading(true)
      if (typeof this.callbackHdeviceToken === 'undefined') {
        this.callbackHdeviceToken = 'token'
      }
      this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
      // 제어 명령 전달 후 200ms 이후 부터 응답 대기
      var self = this
      setTimeout(() => {
        waitResponse(type, cmdObj[type], 20)
      }, 200)
      function waitResponse (type, cmd, cnt) {
        if (cnt > 0) {
          if (type === 'favoriteAdd') {
            if (self.checkOnFavoriteCook(cook.cookSeq)) {
              self.$toast('즐겨찾기에 등록되었습니다. 20개 초과시 이전 내역이 자동 삭제 됩니다.')
              cook.favoriteYn = 'Y'
              cmdSuccess = true
            }
          } else {
            if (self.checkOnFavoriteCook(cook.cookSeq)) {
            } else {
              self.$toast('즐겨찾기가 취소 되었습니다.')
              cook.favoriteYn = 'N'
              cmdSuccess = true
            }
          }
          if (cmdSuccess) {
            self.oven.waitCmd = false
            self.loading(false)
            return
          } else {
            setTimeout(() => {
              waitResponse(type, cmd, --cnt)
            }, 200)
          }
          // 제어 검증 if 문 종료
        } else {
          self.oven.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
      event.stopPropagation()
    },
    showCookGuideView: function (cook, list) {
      event.preventDefault()
      event.stopPropagation()
      // A:자동요리, M:수동요리, S:요리설정화면
      // menuType => A:최근목록, B:즐겨찾기, C:나만의 요리
      if (list.cookCateName === '해동') {
        if (this.oven.actionStatus !== 1) {
          this.$toast('오븐 작동 중에는 실행이 불가합니다')
        } else {
          this.weightInfo = cook
          this.setTimeWeightModal = true
        }
      } else {
        this.selCookInfo.cookType = cook.cookType
        this.selCookInfo.deviceId = this.deviceId
        this.selCookInfo.cookSeq = cook.cookSeq
        this.selCookInfo.cookCateSeq = list.cookCateSeq
        this.selCookInfo.modelNm = this.deviceInfo.modelNm
        this.selCookInfo.modelKind = this.deviceInfo.modelKind
        this.selCookInfo.userId = this.userId
        this.selCookInfo.favoriteYn = cook.favoriteYn
        if (cook.minSet === null) {
          this.selCookInfo.minSet = list.minSet
        } else {
          this.selCookInfo.minSet = cook.minSet
        }
        if (typeof cook.hourSet === 'undefined') {
          this.selCookInfo.hourSet = list.hourSet
        } else {
          this.selCookInfo.hourSet = cook.hourSet
        }

        this.detailViewModal = true
      }
    },
    showDetailManual: function (cook) {
      if (this.oven.actionStatus !== 1) {
        if (cook.cookCateName === '보온') {
          this.$toast('오븐 작동 중에는 실행이 불가합니다')
        } else {
          if (this.index === cook.cookCateSeq) {
            this.index = ''
          } else {
            this.index = cook.cookCateSeq
          }
        }
      } else {
        if (cook.cookCateName === '보온') {
          this.heatInfo = cook.cookList[0]
          this.setTimeHeatModal = true
        } else {
          if (this.index === cook.cookCateSeq) {
            this.index = ''
          } else {
            this.index = cook.cookCateSeq
          }
        }
      }
    },
    stompClientSend: function (name, val) {
      event.preventDefault()
      if (this.oven['lock'] === 1) {
        this.ovenLockCheckModal = true
      } else {
        if (name === 'cookSetting' && this.setTimeModal) {
          this.setTimeModal = false
        } else if (name === 'cookSetting' && this.cleaningModal) {
          this.cleaningModal = false
        } else if (name === 'cookSetting' && this.latestCookViewModal) {
          this.latestCookViewModal = false
        } else if (name === 'cookCencel' && this.ovenCookCancelModal) {
          this.ovenCookCancelModal = false
        } else if (name === 'lock' && this.ovenLockCheckModal) {
          this.ovenLockCheckModal = false
        }
        this.oven.waitCmd = true
        this.loading(true)
        var cmdSuccess = false
        var cmdObj = {}
        cmdObj[name] = String(val)
        if (typeof this.callbackHdeviceToken === 'undefined') {
          this.callbackHdeviceToken = 'token'
        }
        this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
        // 제어 명령 전달 후 200ms 이후 부터 응답 대기
        var self = this
        setTimeout(() => {
          waitResponse(name, cmdObj[name], 20)
        }, 200)
      }
      function waitResponse (name, cmd, cnt) {
        if (cnt > 0) {
          if (self.oven.actionCode !== 0) {
            cmdSuccess = true
            self.setTimeHeatModal = false
            self.setTimeWeightModal = false
          }
          if (cmdSuccess) {
            self.ovenSendModal = true
            self.oven.waitCmd = false
            self.loading(false)
            return
          } else {
            setTimeout(() => {
              waitResponse(name, cmd, --cnt)
            }, 200)
          }
          // 제어 검증 if 문 종료
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

<style scoped>
.wrap_contents_area.modal_open {
  overflow: hidden;
}
/*사용설명*/
.section_accordion .accordion_list li {
    min-height: 61px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 60px;
    font-size: 1.4rem;
    position: relative;
}

.section_accordion .accordion_list li span {
    padding-left: 15px;
}

.section_accordion .accordion_list li button {
    position: absolute;
    width: 40px;
    height: 60px;
    right: 0;
    top: 0;
}

.section_accordion .accordion_list.cook_list li button {
    height: 80px;
}

.section_accordion .accordion_list li button:before {
    content: '';
    position: absolute;
    right: 15px;
    top: 36px;
    background: url('/images/common/sprite_common.png') 0 -50px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 15px;
    height: 8px;
}

.section_accordion .accordion_list li.focus button:before {
    background-position: -25px -50px;
}

.section_accordion .accordion_list .sub_list {
    display: none;
}

.section_accordion .accordion_list .focus .sub_list {
    display: block;
}

.section_accordion .accordion_list .sub_list li {
  /*list-style: disc inside*/;
  list-style: none;
  padding-left: 40px;
  background: #eceaed;
  border-bottom: 1px solid #dedede;
  position: relative;
}
.section_accordion .accordion_list .sub_list li .sprite_dot {
  position: absolute;
  top: 50%;
  left: 20px;
  margin-top: -2px;
}
.section_accordion .accordion_list .sub_list li:last-child {
    border-bottom: 0;
}

/* 스팀 요리가이드 */
.section_accordion .accordion_list.cook_list li {
    min-height: 80px;
    line-height: 80px;
    background-position: right top;
    background-repeat: no-repeat;
    background-size: 214px 100%;
}
.section_accordion .accordion_list.cook_list li.focus {
  background-size: 214px 80px;
}
.section_accordion .accordion_list.cook_list li input {
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1px;
}

.section_accordion .accordion_list.cook_list li.none_sub input {
    top: 25px;
}

.section_accordion .accordion_list.cook_list li button:before {
    top: 36px;
}

.section_accordion .accordion_list.cook_list li.none_sub button:before {
    content: '';
    position: absolute;
    top: 26px;
    right: 15px;
    background: url('/images/common/sprite_steam_oven.png') 0 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 24px;
    height: 22px;
}

.section_accordion .accordion_list.cook_list .sub_list li {
    min-height: 54px;
    line-height: 54px;
    color: #565656;
  width: 100%;
}
.section_accordion .accordion_list.cook_list .sub_list li.list_self {
  list-style: none;
  font-weight: bold;
  color: #424242;
  padding-left: 40px;
}
.section_accordion .accordion_list.cook_list .sub_list li.list_self .sprite {
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 15px;
}
.section_accordion .accordion_list.cook_list .sub_list li button:before {
    content: '';
    position: absolute;
    right: 15px;
    top: 15px;
    background: url('/images/common/sprite_steam_oven.png') 0 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 24px;
    height: 22px;
}

.section_accordion .accordion_list.cook_list .sub_list li button.bookmark:before,
.section_accordion .accordion_list.cook_list li.none_sub button.bookmark:before {
    background-position: -25px 0;
}

.section_accordion .top_btn {
    position: fixed;
  height: 51px;
  width: 40px;
    bottom: 0;
    right: 10px;
  margin-bottom: 10px;
}

.section_accordion .top_btn a {
    display: inline-block;
    height: 41px;
}

.section_accordion .top_btn a:active .sprite_steam_oven.sprite_top_btn {
    background-position: -50px -25px;
}
.toggle_cook_guide {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    width: 40px;
    height: 40px;
    background: url('/images/common/sprite_steam_oven.png') no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    display: block;
    margin: 0 auto;
}

.toggle_cook_guide.cook_self {
    background-position: -150px -25px;
}

.toggle_cook_guide.cook_self:checked {
    background-position: -100px -25px;
}

.toggle_cook_guide.cook_bookmark {
    background-position: -50px -75px;
}

.toggle_cook_guide.cook_bookmark:checked {
    background-position: 0 -75px;
}

.toggle_cook_guide.bookmark {
    background-position: 0 0;
    width: 24px;
    height: 22px;
}

.toggle_cook_guide.bookmark:checked {
  background-position: -25px 0;
  width: 24px;
  height: 22px;
}
</style>
