<template>
  <div class="wrap_contents_area" v-show="oven.isConn">
    <!-- section_main -->
    <section class="section_main section_oven" v-if="isOnline">
      <div class="bg bg_oven">
        <div class="area_title">
          <div class="box_title">
            <h1>
              <span>{{ deviceInfo.nicknm }}</span>
              <button class="align_center sprite sprite_purify sprite_edit" @click="modNickNameModal = true"  v-if="deviceInfo.masterYn === 'Y'"></button>
            </h1>
          </div>
         </div>
        <div class="area_desc">
          <p>
            <span class="sprite sprite_gas_stove sprite_use_time">?</span>{{ovenCleanMsg}}
          </p>
          <!-- 오븐청소 버튼 비활성화시 'disabled' 클래스 추가 -->
          <button class="btn_cleaning sprite sprite_steam_oven sprite_btn_cleaning" :class="{disabled: oven.actionStatus === 4 || oven.actionStatus === 2 || oven.actionStatus === 3 || oven.actionStatus === 5 || oven.errorValue !== 0}"
          :disabled="oven.actionStatus === 4 || oven.actionStatus === 2 || oven.actionStatus === 3 || oven.actionStatus === 5 || oven.errorValue !== 0" @click="cleaningModal = true"></button>

        </div>
        <div class="range_badge disabled" v-if="oven.actionStatus === 4 || oven.actionStatus === 2 || oven.actionStatus === 3 || oven.actionStatus === 5 || oven.errorValue !== 0">
            <p>레인지</p>
        </div>
        <button class="range_badge" v-else @click="setTimeModal = true">
            <p>레인지</p>
        </button>
        <div class="alarm_txt" v-if="oven.actionStatus === 4 && oven.alertValue == 0 && oven.errorValue === 0">
          <p class="end_time">{{ ovenStatusMsg | time }}</p>
          <p class="desc">완료 예상 시간</p>
        </div>

        <div class="alarm_txt" v-if="oven.actionStatus === 5">
          <p>오븐을 열어 내용물을 <br>확인해주세요.</p>
        </div>

        <div class="alarm_txt heating" v-if="oven.actionStatus === 2">
          <div class="icon_heat"><span class="ani_heat"></span></div>
          <p>예열중</p>
        </div>

        <div class="alarm_txt heating" v-if="oven.actionStatus === 3">
          <p class="end_heating">예열 완료</p>
          <p class="desc">내용물을 넣고 <br>‘요리하기’ 버튼을 눌러주세요</p>
        </div>

        <div class="alarm_txt alarm_alert" v-if="oven.alertValue === 3">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>오븐 내부 온도가 높습니다.</p>
            <p>잠시후 사용해 주세요.</p>
        </div>
        <div class="alarm_txt alarm_alert" v-if="oven.alertValue === 2">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>물통에 물이 없습니다.</p>
            <p>물을 보충해 주세요.</p>
        </div>
        <div class="alarm_txt alarm_alert" v-if="oven.alertValue === 1">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>도어가 열렸습니다.</p>
            <p>오븐의 도어를 닫아주세요.</p>
        </div>

        <div class="alarm_txt alarm_alert" v-if="oven.errorValue === 1">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>오븐 고온 상태로</p>
            <p>온도 점검이 필요합니다.</p>
        </div>

        <div class="alarm_txt alarm_alert" v-if="oven.errorValue === 2">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>오븐 저온 상태로</p>
            <p>온도 점검이 필요합니다.</p>
        </div>

        <div class="alarm_txt alarm_alert" v-if="oven.errorValue === 4">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>스팀 히터 저온 상태로</p>
            <p>온도 점검이 필요합니다.</p>
        </div>

        <div class="alarm_txt alarm_alert" v-if="oven.errorValue === 6">
            <p class="sprite sprite_steam_oven sprite_alert"></p>
            <p>스팀 히터 고온 상태로</p>
            <p>온도 점검이 필요합니다.</p>
        </div>


        <!-- 최근요리 -->
        <div class="oven_info" v-if="oven.actionStatus === 1 || oven.actionStatus === 6">
          <p class="title"  style="margin-left: 5px;"v-if="latestCookList.length > 0" >• 최근 요리</p>
          <ul v-if="latestCookList.length > 0">
              <li v-for="(value, index) in latestCookList" :key="value.seq" v-if="index < 3" @click="showLatestCookView(value)">{{ value.name }}<span>{{value.regDate}}</span></li>
          </ul>
          <div class="box_msg" v-if="(oven.actionStatus !== 1 && oven.actionStatus !== 6) || latestCookList.length === 0">
             <p class="msg_first" v-if="this.cookNmga !== ''">{{deviceInfo.productInfo.petNm}}의 첫 요리는 <br><span>{{this.cookNmga}}</span>가 어떠세요?</p>
             <p class="msg_first" v-if="this.cookNmgi !== ''">{{deviceInfo.productInfo.petNm}}의 첫 요리는 <br><span>{{this.cookNmgi}}</span>이 어떠세요?</p>
              <button class="oven_btn oven_btn_lg" style="margin-top: 10px;" @click="showLatestCookView(recommendCookInfo)">자세히보기</button>
          </div>
        </div>

        <div class="oven_info" v-if="oven.actionStatus === 4 || oven.actionStatus === 3 || oven.actionStatus === 2">
          <p class="title" v-if="oven.actionStatus === 4 || oven.actionStatus === 2 || oven.actionStatus === 3">• {{ cookName }}</p>
          <button class="oven_btn oven_btn_md" @click="ovenCookCancelModal = true" v-if="oven.actionStatus !== 3">취소</button>
          <button class="oven_btn oven_btn_md" v-if="oven.actionStatus === 3" @click="stompClientSend('cookSetting', 'ovenSend')">오븐전송</button>
          <div class="box_progress">
            <p class="progress_desc" style="font-weight: bold">{{ ovenTimeMsg | time2 }}</p>
            <p class="progress_desc" v-if="oven.settingTemp !== 0 && oven.cookingStatus !== 3" style="font-weight: bold">{{oven.settingTemp}}˚C</p>
            <p class="progress_desc" v-if="oven.settingWatt !== 0" style="font-weight: bold">{{oven.settingWatt}}W</p>
            <p class="progress_desc" v-if="oven.settingWeight != 0" style="font-weight: bold">{{oven.settingWeight}}g</p>
            <div class="progress">
                <!-- 상태바 span 클래스 빼면 default(gray색상)
                순서대로 클래스 'orange1' ~ 'orange29' -->
                <span :class="{orange1: progress >= 100}"></span><!--
            --><span :class="{orange2: progress >= 96}"></span><!--
            --><span :class="{orange3: progress >= 92}"></span><!--
            --><span :class="{orange4: progress >= 88}"></span><!--
            --><span :class="{orange5: progress >= 84}"></span><!--
            --><span :class="{orange6: progress >= 80}"></span><!--
            --><span :class="{orange7: progress >= 76}"></span><!--
            --><span :class="{orange8: progress >= 72}"></span><!--
            --><span :class="{orange9: progress >= 68}"></span><!--
            --><span :class="{orange10: progress >= 64}"></span><!--
            --><span :class="{orange11: progress >= 60}"></span><!--
            --><span :class="{orange12: progress >= 56}"></span><!--
            --><span :class="{orange13: progress >= 52}"></span><!--
            --><span :class="{orange14: progress >= 48}"></span><!--
            --><span :class="{orange15: progress >= 44}"></span><!--
            --><span :class="{orange16: progress >= 40}"></span><!--
            --><span :class="{orange17: progress >= 36}"></span><!--
            --><span :class="{orange18: progress >= 32}"></span><!--
            --><span :class="{orange19: progress >= 28}"></span><!--
            --><span :class="{orange20: progress >= 24}"></span><!--
            --><span :class="{orange21: progress >= 20}"></span><!--
            --><span :class="{orange22: progress >= 16}"></span><!--
            --><span :class="{orange23: progress >= 12}"></span><!--
            --><span :class="{orange24: progress >= 8}"></span><!--
            --><span :class="{orange25: progress >= 7}"></span><!--
            --><span :class="{orange26: progress >= 6}"></span><!--
            --><span :class="{orange27: progress >= 5}"></span><!--
            --><span :class="{orange28: progress >= 4}"></span><!--
            --><span :class="{orange29: progress >= 3}"></span>
            </div>
          </div>
        </div>

        <div class="oven_info oven_cook_info" v-if="oven.actionStatus === 5">
          <div class="box_msg">
              <span class="msg_complete">{{ cookName }}가 완료되었습니다.</span>
              <p class="msg_question" v-if="oven.cookStatus === 1">즐겨찾기에 등록하시겠습니까?</p>
              <p class="msg_question" v-if="oven.cookStatus === 3">나만의 요리 등록 하시겠습니까?</p>
            <div class="oven_btn_group">
              <button class="oven_btn oven_btn_lg" v-if="oven.cookStatus === 1 || oven.cookStatus === 3" @click="stompClientSend('cookCencel', 'N')">취소</button>
              <button class="oven_btn oven_btn_lg" v-else @click="stompClientSend('cookCencel', 'N')">확인</button>
              <button class="oven_btn oven_btn_lg" v-if="oven.cookStatus === 1" @click="stompClientSend('favoriteAdd', oven.actionIdx)">즐겨찾기</button>
              <button class="oven_btn oven_btn_lg" v-if="oven.cookStatus === 3" @click="stompClientSend('myCookAdd', oven.uniqueIdx)">나만의요리</button>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- //section_main -->

    <!-- section_oven_bottom_menu -->
    <section class="section_function section_toggle toggle_col_3" v-if="isOnline">
        <div class="area_toggle" @click="sendDataSetting">
            <input type="checkbox" id="lock" class="toggle_oven oven_lock" :checked="oven.lock === 1">
            <label for="lock">LOCK</label>
        </div>
        <div class="area_toggle" @click="sendDataSetting">
            <input type="checkbox" id="brightness" class="toggle_oven brightness" :checked="oven.brightness !== 0">
            <label for="brightness">밝기</label>
            <!-- stage 단계 클래스 추가 'stage01' ~ 'stage05' -->
            <label for="brightness" class="sprite sprite_common sprite_stage" :class="{stage01: oven.brightness === 1, stage02: oven.brightness === 2, stage03: oven.brightness === 3, stage04: oven.brightness === 4, stage05: oven.brightness === 5 }"></label>
        </div>
        <div class="area_toggle" @click="sendDataSetting" v-if="oven.voiceGuide !== 0">
            <input type="checkbox" id="volume" class="toggle_oven" :class="{volume: oven.volume !== 0, volume_none: oven.volume === 0}" :checked="oven.volume !== 0">
            <label for="volume">볼륨</label>
            <label for="volume" class="sprite sprite_common sprite_stage"
            :class="{stage01: oven.volume === 1, stage02: oven.volume === 2, stage03: oven.volume === 3, stage04: oven.volume === 4, stage05: oven.volume === 5 }"></label>
        </div>
        <div class="area_toggle" @click="volumeToast" v-if="oven.voiceGuide === 0">
            <label class="toggle_oven volume_none"></label>
            <label>볼륨</label>
            <label class="sprite sprite_common sprite_stage"></label>
        </div>
    </section>
    <!-- //section_oven_bottom_menu -->
    <!-- 최근목록 메뉴화면 (전기오븐 공통 팝업)-->
    <transition name="fade">
      <recipeView-modal v-if="latestCookViewModal" @close="latestCookViewModal = false" :selCookInfo="selCookInfo" v-on:stompClientSend="stompClientSend"></recipeView-modal>
    </transition>
    <transition name="fade">
      <!-- 레인지 시간 설정 팝업-->
      <setting-time-modal v-if="setTimeModal" v-on:setRangeOrCleanData="setRangeOrCleanData" @close="setTimeModal = false"/>
    </transition>
    <transition name="fade">
      <setting-time-weight-modal v-if="setTimeWeightModal" v-on:stompClientSend="stompClientSend" @close="setTimeWeightModal = false" :recipe="weightInfo"/>
    </transition>
    <transition name="fade">
      <setting-time-heat-modal v-if="setTimeHeatModal" v-on:stompClientSend="stompClientSend" @close="setTimeHeatModal = false" :recipe="heatInfo"/>
    </transition>
    <transition name="fade">
      <cleaning-modal v-if="cleaningModal" v-on:setRangeOrCleanData="setRangeOrCleanData" @close="cleaningModal = false"/>
    </transition>
    <transition name="fade">
      <rename-modal v-if="modNickNameModal" @close="modNickNameModal = false" :nickName="deviceInfo.nicknm" :deviceId="deviceId" v-on:modNickName="modNickName"/>
    </transition>
    <transition name="fade">
      <alert-modal v-if="controlErrModal" @ok="controlErrModal = false" @close="controlErrModal = false">
        <h3 slot="body">가전제어가 실패되었습니다. 다시 시도 하세요.</h3>
      </alert-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="ovenSendModal" @ok="ovenSendModal = false" @close="ovenSendModal = false">
        <h3 slot="body">{{ this.cleanText }}<br>기기에서 시작 버튼을 눌러주세요.</h3>
      </alert-modal>
    </transition>
    <transition name="fade">
      <!-- 오븐청소 전 잠금체크 팝업 -->
      <popup-modal v-if="ovenCookCancelModal" @close="ovenCookCancelModal = false" @ok="stompClientSend('cookCencel', 'Y')">
        <h3 slot="body">오븐 작동을 취소 하시겠습니까?</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <popup-modal v-if="ovenLockCheckModal" @close="ovenLockCheckModal = false" @ok="stompClientSend('lock', '0')">
        <h2 slot="body">현재 LOCK 상태 입니다.</h2>
        <h2 slot="body">잠금을 해제 하시겠습니까?</h2>
      </popup-modal>
    </transition>
    <detailView-modal v-if="detailViewModal" @close="detailViewModal = false" :subList="subList" ></detailView-modal>
    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import AlertModal from '@/components/common/modal/Alert'
import RecipeViewModal from '@/components/oven/modal/Recipe'
import SettingTimeModal from '@/components/oven/modal/SettingTime'
import CleaningModal from '@/components/oven/modal/Cleaning'
import PopupModal from '@/components/common/modal/Popup'
import RenameModal from '@/components/common/modal/ReName'
import SettingTimeWeightModal from '@/components/oven/modal/SettingTimeWeight'
import SettingTimeHeatModal from '@/components/oven/modal/SettingTimeHeat'
import DetailViewModal from '@/components/oven/modal/ManualDetail'
export default {
  name: 'main',
  components: { ErrorView, AlertModal, RecipeViewModal, SettingTimeModal, CleaningModal, PopupModal, RenameModal, SettingTimeWeightModal, SettingTimeHeatModal, DetailViewModal },
  props: ['userId', 'deviceId', 'deviceInfo', 'oven', 'route'],
  data () {
    return {
      picked: '',
      min: '',
      sec: '',
      selCookInfo: {},
      // 팝업창
      ovenCleanModal: false,
      ovenLockCheckModal: false,
      latestCookViewModal: false,
      setTimeModal: false,
      cleaningModal: false,
      controlErrModal: false,
      ovenSendModal: false,
      modNickNameModal: false,
      ovenCookCancelModal: false,
      setTimeWeightModal: false,
      setTimeHeatModal: false,
      // 가전 상태 디폴트 값
      brightness: '',
      volume: '',
      onOff: '',
      recommendCookInfo: {},
      cleanText: '설정이 완료 되었습니다.',
      latestCookList: {},
      remainTime: 0,
      remainYn: 'N',
      intertime: '',
      tempTime: 0,
      cookNmga: '',
      cookNmgi: '',
      saveTime: 0,
      saveYn: 'N',
      subList: {},
      detailViewModal: false
    }
  },
  created () {
    if (typeof this.$route.query.qnaId !== 'undefined') {
      this.subList = this.$route.query
      this.subList.imgUrl = null
      this.subList.youtubeId = null
      this.detailViewModal = true
    }
    this.$emit('setTabMenu')
    this.searchCookList()
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
  filters: {
    time: function (val) {
      var time
      if (typeof val === 'number') {
        var hour = Math.floor(val / 3600)
        var min = Math.floor((val / 60) % 60)
        if (hour > 12) {
          hour = hour - 12
          time = '오후 '
        } else time = '오전 '
        hour.toString().length === 1 ? hour = '0' + hour : hour
        min.toString().length === 1 ? min = '0' + min : min
        return time + hour + '시 ' + min + '분'
      } else return val
    },
    time2: function (val) {
      if (typeof val === 'number') {
        var hour = Math.floor(val / 3600)
        var min = Math.floor((val / 60) % 60)
        var sec = Math.floor(val % 60)
        hour.toString().length === 1 ? hour = '0' + hour : hour
        min.toString().length === 1 ? min = '0' + min : min
        sec.toString().length === 1 ? sec = '0' + sec : sec
        if (hour !== '00') {
          return hour + '시간:' + min + '분:' + sec + '초'
        } else if (hour === '00' && min === '00') {
          return sec + '초'
        } else {
          return min + '분:' + sec + '초'
        }
      } else return val
    },
    modalTimeFormat: function (time) {
      if (String(time).length < 2) {
        time = '0' + time
      }
      return time
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
        if (!this.oven.waitCmd) this.loading(false)
      }
      return online
    },
    ovenCleanMsg: function () {
      if (this.oven.cookingStatus === 3 && this.oven.actionStatus === 4) {
        return '오븐 청소 중 입니다.'
      } else {
        return '청소 대기 중 입니다.'
      }
    },
    ovenStatusMsg: function () {
      var time = new Date()
      var msg
      var completeTime = (time.getHours() * 3600) + (time.getMinutes() * 60) + time.getSeconds() + this.oven.remainTime
      if (this.oven.actionStatus === 4 && this.oven.cookTime === this.oven.remainTime) {
        msg = completeTime
      } else if (this.oven.actionStatus === 4 && this.oven.cookTime !== this.oven.remainTime) {
        msg = completeTime
      } else if (this.oven.actionStatus === 5) {
        msg = '오븐을 열어 내용물을 확인해 주세요.'
      } else {
        msg = '상태문구없음(테스트를 위한 문구)'
      }
      return msg
    },
    ovenTimeMsg: function () {
      if (this.$store.state.saveTime > 0 && this.saveYn === 'N') {
        this.tempTime = this.$store.getters.getSaveTime
        this.remainTime = this.$store.getters.getSaveTime
      } else {
        if (this.remainYn === 'N' && this.oven.alertValue === 0) {
          this.tempTime = this.oven.remainTime
          this.remainTime = this.oven.remainTime
          this.timeSet()
        } else if (this.oven.alertValue === 1) {
          this.remainYn = 'N'
          clearInterval(this.intertime)
        }

        if (this.tempTime !== this.oven.remainTime) {
          this.remainYn = 'N'
          clearInterval(this.intertime)
          this.remainTime = this.oven.remainTime
          this.tempTime = this.oven.remainTime
          this.timeSet()
        }
      }
      return this.remainTime
    },
    progress: function () {
      var pro = (this.remainTime / this.oven.cookTime) * 100
      return pro
    }
  },
  asyncComputed: { // 비동기 작업이 해결 되기 전 까지는 처음으로 계산 된 속성 값이 null
    cookName: {
      get () {
        if (typeof this.oven.actionStatus !== 'undefined') {
          var typeVal = null
          if (this.oven.actionStatus === 1 || this.oven.actionStatus === 0 || this.oven.actionStatus === 6) {
            this.$store.state.saveTime = 0
            this.saveYn = 'N'
            this.remainYn = 'N'
            clearInterval(this.intertime)
            this.searchCookList()
            return '요리명 없음'
          } else if (this.oven.actionStatus !== 6) {
            if (this.oven.cookingStatus === 3) {
              return this.getRangeOrClenName()
            } else if (this.oven.actionIdx === 135) {
              return this.getRangeOrClenName()
            } else {
              // 1:자동(수동)요리, 2:나만의 요리
              if (this.oven.cookingStatus === 1) typeVal = 'A'
              else if (this.oven.cookingStatus === 2) typeVal = 'B'
              if (typeVal !== null) {
                return this.$http.post('/api/oven/cook/info', {
                  cookSeq: this.oven.actionIdx,
                  hdeviceSeq: this.deviceId,
                  type: typeVal
                })
                .then(response => {
                  if (this.oven.actionStatus === 4) {
                    if (response.data.body.cookName.indexOf('요리') > 0) {
                      return response.data.body.cookName + ' 중'
                    } else {
                      return response.data.body.cookName + ' 요리중'
                    }
                  } else {
                    return response.data.body.cookName
                  }
                })
                .catch(error => {
                  console.log(error)
                  this.loading(false)
                })
              }
            }
          }
        }
        return '요리명 없음'
      }
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    volumeToast: function () {
      var template = '음성안내가 꺼져 있습니다. ("설정 > 기기 음성 안내"를 확인하세요)'
      this.$toast(template)
    },
    timeSet: function () {
      if (this.oven.actionStatus === 4 && this.oven.alertValue === 0) {
        this.remainYn = 'Y'
        this.saveYn = 'Y'
        this.intertime = setInterval(() => {
          this.remainTime = this.remainTime - 1
          this.$store.state.saveTime = this.remainTime
          if (this.remainTime === 0) {
            this.remainYn = 'N'
            this.saveYn = 'N'
            clearInterval(this.intertime)
          }
          return this.remainTime
        }, 1000)
      }
    },
    searchCookList: function () {
      this.$http.post('/api/oven/my/menu', {
        hdeviceSeq: this.deviceId,
        modelNm: this.deviceInfo.modelNm,
        type: 'S'
      })
      .then(response => {
        if (response.data.body.latestCookList.length <= 0) {
          this.recommendCookInfo = response.data.body.recommendCookInfo
          this.recommendCookInfo.cookName = this.recommendCookInfo.cookName.split(this.recommendCookInfo.cookSeq)[1]
          this.recommendCookInfo.cookType = 'S'
          var char = this.recommendCookInfo.cookName.charAt(this.recommendCookInfo.cookName.length - 1)
          if (char === '이' || char === '키' || char === '채' || char === '자' || char === '크' || char === '프' || char === '치' || char === '니' || char === '비' || char === '트' || char === '기' || char === '어' ||
           char === '더' || char === '마' || char === '티' || char === '드' || char === '토' || char === '바' || char === '지') {
            this.cookNmga = this.recommendCookInfo.cookName
            this.cookNmgi = ''
          } else {
            this.cookNmgi = this.recommendCookInfo.cookName
            this.cookNmga = ''
          }
          this.latestCookList = response.data.body.latestCookList
        } else {
          this.latestCookList = response.data.body.latestCookList
        }
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    modNickName: function (nicknm) {
      if (nicknm) {
        this.modNickNameModal = false
        this.deviceInfo.nicknm = nicknm
      }
    },
    setRangeOrCleanData: function (type, val) {
      var arr = []
      // 128:스팀세척, 129:잔수세척. 130:건조탈취, 135:데우기
      if (type === 'range') {
        this.cleanText = '설정이 완료 되었습니다.'
        arr[0] = '135'
        arr[1] = '0'
        arr[2] = val
      } else {
        if (val === '128') {
          this.cleanText = '스팀세척 선택 되었습니다.'
          arr[1] = '0'
          arr[2] = 15 * 60
        } else if (val === '129') {
          this.cleanText = '잔수제거 선택 되었습니다.'
          arr[1] = '0'
          arr[2] = 2 * 60
        } else if (val === '130') {
          this.cleanText = '건조탈취 선택 되었습니다.'
          arr[1] = '250'
          arr[2] = 15 * 60
        }
        arr[0] = val
      }
      this.stompClientSend('cookSetting', arr.toString())
    },
    showLatestCookView: function (val) {
      if (val.detailYn === 'N') {
        if (val.cookCateType === 'D') {
          this.heatInfo = val
          this.setTimeHeatModal = true
        } else if (val.cookCateType === 'C') {
          this.weightInfo = val
          this.setTimeWeightModal = true
        }
      } else {
        // A:자동요리, M:수동요리, S:요리설정화면
        // menuType => A:최근목록, B:즐겨찾기, C:나만의 요리
        if (val.cookType !== 'S') {
          this.selCookInfo.cookType = 'A'
          this.selCookInfo.deviceId = this.deviceId
          this.selCookInfo.cookSeq = val.seq
          this.selCookInfo.menuType = 'A'
          this.selCookInfo.modelNm = this.deviceInfo.modelNm
          this.selCookInfo.modelKind = this.deviceInfo.modelKind
          this.selCookInfo.userId = this.userId
          this.selCookInfo.favoriteYn = val.favoriteYn
          this.selCookInfo.minSet = val.minSet
          if (this.latestCookList.length > 0) {
            var cookTotalCnt = 0
            for (var index in this.latestCookList) {
              if (this.latestCookList[index].detailYn === 'N') {
                cookTotalCnt = cookTotalCnt + 1
              }
            }
            this.latestCookList.cookTotalCnt = this.latestCookList.length - cookTotalCnt
            this.selCookInfo.latestCookList = this.latestCookList
          }
          this.selCookInfo.page = 'S'
          this.latestCookViewModal = true
        } else {
          this.selCookInfo.cookType = 'B'
          this.selCookInfo.deviceId = this.deviceId
          this.selCookInfo.cookSeq = val.cookSeq
          this.selCookInfo.cookCateSeq = val.cookCateSeq
          this.selCookInfo.modelNm = this.deviceInfo.modelNm
          this.selCookInfo.modelKind = this.deviceInfo.modelKind
          this.selCookInfo.userId = this.userId
          this.selCookInfo.favoriteYn = val.favoriteYn
          this.selCookInfo.minSet = val.minSet
          this.latestCookViewModal = true
        }
      }
    },
    getRangeOrClenName: function () {
      switch (this.oven.actionIdx) {
        case 128:
          return '스팀세척'
        case 129:
          return '잔수제거'
        case 130:
          return '건조탈취'
        case 135:
          return '데우기 요리중'
      }
    },
    sendDataSetting: function () {
      var name = event.target.id
      var val
      if (name === 'volume') {
        val = parseInt(this.oven[name]) + 1
        if (val > 5) val = 0
      } else if (name === 'lock') {
        event.target.checked ? val = '1' : val = '0'
      } else if (name === 'brightness') {
        val = parseInt(this.oven[name]) + 1
        if (val > 5) val = 1
      } else {
        return
      }
      this.stompClientSend(name, val)
    },
    stompClientSend: function (name, val) {
      event.preventDefault()
      if (name !== 'lock' && name !== 'volume' && name !== 'brightness' && name !== 'favoriteAdd' && name !== 'myCookAdd' && this.oven['lock'] === 1) {
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
        // 요리 시간 타이머 클리어
        clearInterval(this.intertime)
        this.remainYn = 'N'
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
          var cmdSuccess = false
          if (name !== 'cookSetting') {
            if (name === 'cookCencel' || name === 'favoriteAdd' || name === 'myCookAdd') {
              if (self.oven.actionStatus === 1 || self.oven.actionStatus === 5) {
                self.remainYn = 'N'
                self.$store.state.saveTime = 0
                self.saveYn = 'N'
                cmdSuccess = true
                self.searchCookList()
              }
            } else {
              if (String(self.oven[name]) === cmd) {
                // 제어 성공
                cmdSuccess = true
              }
            }
          } else {
            if (val === 'ovenSend') {
              self.ovenSendModal = true
              cmdSuccess = true
            } else {
              if (self.oven.actionCode !== 0) {
                cmdSuccess = true
                if (val.split(',')[0] !== '135' && val.split(',')[0] !== '128' && val.split(',')[0] !== '129' && val.split(',')[0] !== '130') {
                  self.searchCookList()
                }
                if (name === 'cookSetting' && self.setTimeHeatModal) {
                  self.ovenSendModal = true
                  self.setTimeHeatModal = false
                } else if (name === 'cookSetting' && self.setTimeWeightModal) {
                  self.ovenSendModal = true
                  self.setTimeWeightModal = false
                }
              }
            }
          }
          if (cmdSuccess) {
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
/* 오븐 메인 */
.section_oven .bg_oven {
    background-image: url('/images/main/bg_oven_main.png');
    background-position: top center;
    background-repeat: no-repeat;
  height:inherit;
}
.section_main.section_oven {
    height: 76.5vh;
}
@media all and (max-height: 600px) {
  .section_main.section_oven .bg_oven {
    -webkit-background-size: 320px;
    background-size: 320px;
  }
}
@media all and (min-height: 700px) {
  .section_main.section_oven .bg_oven {
    -webkit-background-size: 400px;
    background-size: 400px;
  }
}
.section_oven .area_title .btn_cleaning {
    position: relative;
    top: 1px;
    left: 23px;
    height: 20px;
    display: inline-block;
}
.section_main.section_oven .area_desc {
  top: 54px;
}

@media all and (max-width: 320px),(max-height: 600px) {
  .section_main.section_oven .area_desc {
    top: 44px;
  }
}

.section_oven .area_desc .btn_cleaning.sprite_steam_oven.sprite_btn_cleaning {
  position: relative;
  top: 4px;
  left: 14px;
  height: 20px;
  display: inline-block;
}
.section_oven .area_title .btn_cleaning:disabled,
.section_oven .area_desc .btn_cleaning:disabled {
  background-position: 0 -125px;
}

.section_oven .range_badge {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    background: url('/images/common/sprite_steam_oven.png') 0 -150px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    text-align: center;
}
@media all and (min-height: 700px) {
  .section_oven .range_badge {
    top: 25px;
    right: 20px;
  }
}
.section_oven .range_badge.disabled p {
    opacity: 0.5;
}

.section_oven .range_badge p {
    line-height: 50px;
    color: #ffffff;
    font-size: 1.2rem;
}
.section_oven .oven_info {
  position: relative;
  top: 337px;
  left: 0;
  padding: 4px 12px 0 18px;
}
@media all and (max-height: 620px) {
  .section_oven .oven_info {
    top: 322px;
  }
}
@media all and (max-height: 600px) {
  .section_oven .oven_info {
    top: 287px;
  }
}

@media all and (max-width: 320px) {
  .section_oven .oven_info {
    top: 279px;
    padding: 4px 12px 0 20px;
  }
}

@media all and (min-height: 700px) {
  .section_oven .oven_info {
    top: 387px;
  }
}

.section_oven .oven_info.oven_cook_info {
  top: 326px;
}
@media all and (max-height: 600px) {
  .section_oven .oven_info.oven_cook_info {
    top: 285px;
  }
}
@media all and (min-height: 700px) {
  .section_oven .oven_info.oven_cook_info {
    top: 360px;
  }
}
@media all and (min-height: 760px) {
  .section_oven .oven_info.oven_cook_info {
    top: 375px;
  }
}

.section_oven .oven_info p.title {
    color: #666666;
    font-size: 1.6rem;
    line-height: 24px;
    margin-bottom: 5px;
}

.section_oven .oven_info ul {
    width: 100%;
}
.section_oven .oven_info li {
    position: relative;
    margin: 0 10px;
    height: 36px;
    font-size: 1.4rem;
    color: #666666;
    line-height: 35px;
    border-bottom: 1px solid #dcdcdc;
}
@media all and (max-width: 320px) {
  .section_oven .oven_info p.title {
    font-size: 1.5rem;
    margin-bottom: 2px;
  }
  .section_oven .oven_info li {
    font-size: 1.3rem;
  }
}
.section_oven .oven_info li:last-child {
    border-bottom:0;
}
.section_oven .oven_info li span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.2rem;
    color: #888888;
    font-weight: normal;
}

.section_oven .oven_info .oven_btn {
    display: inline-block;
    font-size: 1.5rem;
    color: #fe6165;
    background: none;
    border: 1px solid #fe6165;
    border-radius: 15px;
    font-weight: normal;
}
.section_oven .oven_info .oven_btn_md {
  position: absolute;
  /*    top: 19px;*/
  top: 2px;
  right: 33px;
  height: 28px;
  line-height: 28px;
  padding: 0 12px;
}
@media all and (max-width: 320px) {
  .section_oven .oven_info .oven_btn_md {
    right: 24px;
  }
}
.section_oven .oven_info .oven_btn_lg {
    width: 110px;
    height: 34px;
    line-height: 34px;
}
.section_oven .alarm_txt {
  position: absolute;
  top: 193px;
  left: 50%;
  margin-left: -112px;
  width: 225px;
  text-align: center;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt {
    top: 170px;
  }
}
@media all and (min-height: 700px) {
  .section_oven .alarm_txt {
    top: 214px;
  }
}
.section_oven .alarm_txt.heating {
  top: 184px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt.heating {
    top: 165px;
  }
}
@media all and (min-height: 700px) {
  .section_oven .alarm_txt.heating {
    top: 207px;
  }
}
.section_oven .alarm_txt p {
  color: #ffffff;
  font-size: 1.4rem;
  line-height: 20px;
  font-weight: bold;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt p {
    font-size: 1.2rem;
  }
}
@media all and (min-height: 700px) {
  .section_oven .alarm_txt p {
    font-size: 1.6rem;
    line-height: 23px;
  }
}
.section_oven .alarm_txt.alarm_alert .sprite_alert {
  margin-bottom: 3px;
}
.section_oven .alarm_txt.alarm_alert {
  top: 175px;
  padding:7px 0;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt.alarm_alert {
    top: 154px;
  }
}
@media all and (min-height: 700px) {
  .section_oven .alarm_txt.alarm_alert {
    top: 197px;
  }
}
.section_oven .alarm_txt.alarm_alert p {
  font-size: 1.2rem;
  line-height: 1.6rem;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt.alarm_alert p {
    font-size: 1rem;
    line-height: 1.2rem;
  }
}
.section_oven .alarm_txt .desc {
  opacity:0.65;
  line-height: 16px;
}
.section_oven .alarm_txt .end_time + .desc {
  line-height: 34px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt .end_time + .desc {
    line-height: 29px;
  }
}
@media all and (min-height: 700px) {
  .section_oven .alarm_txt .end_time + .desc {
    line-height: 44px;
  }
}
.section_oven .alarm_txt.heating .desc {
  font-size: 1rem;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt .desc {
    line-height: 24px;
  }
  .section_oven .alarm_txt.heating .desc {
    line-height: 1.5rem;
  }
}
.section_oven .alarm_txt .end_heating {
  margin-bottom: 7px;
  font-size: 1.3rem;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt .end_heating {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
}
@media all and (min-height: 700px) {
  .section_oven .alarm_txt.heating .desc {
    line-height: 1.8rem;
  }
  .section_oven .alarm_txt .end_heating {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
}
.section_oven .alarm_txt .end_time {
    font-size: 2.2rem;
    line-height: 16px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt .end_time {
    font-size: 1.8rem;
    line-height: 20px;
  }
}
.section_oven .alarm_txt .icon_heat {
  background: url('/images/common/sprite_steam_oven.png') -200px -25px no-repeat;
  -webkit-background-size: 250px;
  background-size: 250px;
  width: 11px;
  height: 11px;
  margin: 6px auto;
  margin-bottom: 20px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_oven .alarm_txt .icon_heat {
    margin-bottom: 16px;
  }
}
.toggle_oven {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    background: url('/images/common/sprite_steam_oven.png') no-repeat;
    background-size: 250px;
    display: inline-block;
    /* margin: 0 auto; */
    vertical-align: top;
}
.toggle_oven.oven_lock {
    background-position: 0 -200px;
    width: 22px;
    height: 29px;
  margin:-2px 7px 0 0;
}
.toggle_oven.oven_lock:checked {
    background-position: -25px -200px;
}
.toggle_oven.brightness {
    background-position: -50px -200px;
    width: 25px;
    height: 25px;
}
.toggle_oven.brightness:checked {
    background-position: -75px -200px;
}
.toggle_oven.volume {
    background-position: -150px -200px;
    width: 28px;
    height: 22px;
}
.toggle_oven.volume:checked {
    background-position: -100px -200px;
}
.toggle_oven.volume_none {
    background-position: -150px -225px;
    width: 28px;
    height: 22px;
}
.toggle_oven.volume_none:checked {
    background-position: -100px -225px;
}

.toggle_col_3 .area_toggle p {
    margin: 2px 0 0 4px;
}


.section_oven .oven_info .box_progress {
    position: relative;
    top: 28px;
    padding: 0 15px;
}

.section_oven .oven_info .box_progress .progress {
    display: flex;
    justify-content: space-between;
}
.section_oven .oven_info .box_progress .progress span {
    width: 2.2%;
}
.section_oven .oven_info .progress_desc {
    display: inline-block;
    color: #333333;
    font-size: 2.4rem;
    padding-left: 0;
    margin-bottom: 14px;
    position: relative;
}

.section_oven .oven_info .progress_desc:nth-child(2) {
    position: absolute;
    top: 0;
    right: 15px;
}
.section_oven .oven_info .progress_desc button {
    position: absolute;
    top: -3px;
    right: -28px;
}
.section_oven .oven_info .progress span {
    background: #c5c4c6;
    width: 7px;
    height: 20px;
    display: inline-block;
    margin-right: 3px;
}
.oven_info .progress span.orange1 {
    background: #f94a51;
}
.oven_info .progress span.orange2 {
    background: #f94a52;
}
.oven_info .progress span.orange3 {
    background: #f94a53;
}
.oven_info .progress span.orange4 {
    background: #f94a54;
}
.oven_info .progress span.orange5 {
    background: #f94a55;
}
.oven_info .progress span.orange6 {
    background: #f94a57;
}
.oven_info .progress span.orange7 {
    background: #f94a58;
}
.oven_info .progress span.orange8 {
    background: #fa5b5a;
}
.oven_info .progress span.orange9 {
    background: #fa5b5b;
}
.oven_info .progress span.orange10 {
    background: #fa625d;
}
.oven_info .progress span.orange11 {
    background: #fb665f;
}
.oven_info .progress span.orange12 {
    background: #fb6960;
}
.oven_info .progress span.orange13 {
    background: #fb6d62;
}
.oven_info .progress span.orange14 {
    background: #fb7064;
}
.oven_info .progress span.orange15 {
    background: #fc7466;
}
.oven_info .progress span.orange16 {
    background: #fc7767;
}
.oven_info .progress span.orange17 {
    background: #fc7b69;
}
.oven_info .progress span.orange18 {
    background: #fc7f6b;
}
.oven_info .progress span.orange19 {
    background: #fc826d;
}
.oven_info .progress span.orange20{
    background: #fd866e;
}
.oven_info .progress span.orange21 {
    background: #fd8970;
}
.oven_info .progress span.orange22 {
    background: #fd8d72;
}
.oven_info .progress span.orange23 {
    background: #fd9073;
}
.oven_info .progress span.orange24 {
    background: #fd9274;
}
.oven_info .progress span.orange25 {
    background: #fd9576;
}
.oven_info .progress span.orange26 {
    background: #fe9777;
}
.oven_info .progress span.orange27 {
    background: #fe9a78;
}
.oven_info .progress span.orange28 {
    background: #fe9c79;
}
.oven_info .progress span.orange29 {
    background: #fe9d7a;
}
.oven_info .box_msg {
    text-align: center;
}

.oven_info .msg_complete {
    font-size: 2rem;
    line-height: 30px;
    font-weight: bold;
    text-align: center;
}
@media all and (max-width: 320px) {
  .oven_info .msg_complete {
    font-size: 1.7rem;
  }
}
.oven_info .msg_question {
    font-size: 1.6rem;
    line-height: 24px;
    color: #666666;
    font-weight: bold;
}

.oven_info .msg_first {
    font-size: 2rem;
    line-height: 28px;
}
.oven_info .msg_first span {
    font-weight: bold;
}

.oven_info .box_msg .oven_btn {
    margin-right: 10px;
  margin-top: 10px;
}
.oven_info .box_msg .oven_btn:last-child {
    margin-right: 0;
}
/* 추가 */
.section_function {
    height: 9vh;
    border-top: #fff 1px solid;
    background: #f4f4f4;
    border-bottom: #ddddde 1px solid;
}
.toggle_col_3 .area_toggle {
    width: 33.3%;
}
.section_toggle .area_toggle {
    text-align: center;
    height: 100%;
    float: left;
    background: url('/images/main/bg_line.png') right 50% no-repeat;
    background-size: 3px;
    padding-top: 15px;
}
@media all and (max-width: 320px) {
  .section_toggle .area_toggle {
    padding-top: 13px;
  }
}
@media all and (min-height: 700px) {
  .section_toggle .area_toggle {
    padding-top: 19px;
  }
}
.section_toggle.toggle_col_3 .area_toggle {

}
.section_toggle .area_toggle label {
    color: #b9b8ba;
    font-size: 1.5rem;
    display: inline-block;
    font-weight:bold;
    padding: 6px 0 0 3px;
    vertical-align: top;
}
.area_toggle input:checked + label {
    color: #2082ca;
}
@media all and (min-height: 700px) {
  .area_toggle .brightness + label,
  .area_toggle .volume + label {
    padding: 6px 5px 0 6px;
  }
}
.area_toggle .brightness + label,
.area_toggle .volume + label {
  margin-right: 3px;
}
@media all and (max-width: 320px) {
  .area_toggle .brightness + label,
  .area_toggle .volume + label {
    margin-right: 0;
  }
}
.toggle_col_3 .area_toggle p {
    margin: 2px 0 0 4px;
}
.section_main .sprite_use_time {
    position: absolute;
    top: 2px;
    left: 0;
}
.section_main .area_title p,
.section_main .area_desc p {
    font-size: 1.1rem;
    color: #666666;
    position: relative;
    padding-left: 15px;
}

.sprite_steam_oven.sprite_alert {
    background-position: -200px -75px;
    width: 27px;
    height: 24px;
}

</style>
