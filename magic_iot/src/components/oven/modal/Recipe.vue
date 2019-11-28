<template>
  <!-- <section class="example-page" id="pop"> -->
    <div class="popup_detail" v-if="showYn === 'Y'">
        <div class="popup_detail_header" style="background: rgba(0,0,0,0.3);" v-if="recipe.paging.prevCookSeq !== null || recipe.paging.nextCookSeq !== null">
            <span v-if="this.selCookInfo.cookType !== 'B'">{{this.pageText}}</span>
            <h1 v-if="recipe.nick === null || this.selCookInfo.page === 'S' || this.selCookInfo.menuType === 'A'">{{ recipe.cookName }}</h1>
            <div class="title" v-if="recipe.nick !== null && this.selCookInfo.page !== 'S' && this.selCookInfo.menuType !== 'A'">
                <p>{{ recipe.cookName }}</p>
                <p>{{recipe.nick}}</p>
            </div>
            <div class="edit edit_sm" v-if="this.myMenuRecipe.menuType === 'C'">
                <button @click="modNickNameModal = true"><span class="sprite sprite_steam_oven sprite_edit"></span>
                </button>
            </div>
            <div class="close_popup close_sm" v-if="this.myMenuRecipe.menuType === 'C'">
                <button><span class="sprite sprite_common sprite_popup_close" @click="closeNick"></span>
                </button>
            </div>
            <div class="close_popup close_sm" v-else>
                <button><span class="sprite sprite_common sprite_popup_close" @click="$emit('close')"></span>
                </button>
            </div>
        </div>
        <div class="popup_detail_header" style="background: rgba(0,0,0,0.3);" v-else>
            <h1 v-if="recipe.nick === null">{{ recipe.cookName }}</h1>
            <div class="title" v-if="recipe.nick !== null">
                <p>{{ recipe.cookName }}</p>
                <p>{{recipe.nick}}</p>
            </div>
            <div class="edit edit_sm" v-if="this.myMenuRecipe.menuType === 'C'">
                <button @click="modNickNameModal = true"><span class="sprite sprite_steam_oven sprite_edit"></span>
                </button>
            </div>
            <div class="close_popup">
                <button><span class="sprite sprite_common sprite_popup_close" @click="$emit('close')"></span>
                </button>
            </div>
        </div>

        <div class="popup_detail_contents">
          <!-- 가이드 상세 요리이미지 -->
         <!-- <div class="area_detail_img"
               style="background: url('/images/page/04_steam_oven/oven_img_cook_01.jpg') 0 0 no-repeat; background-size: 100%;"> -->
          <div class="area_detail_img" v-bind:style="{ backgroundImage: 'url(' + recipe.cookImgPath + ')'}" style="0 0 no-repeat; background-size: 100%;">
              <button class="pre" v-if="this.selCookInfo.cookType !== 'B' && recipe.paging.prevCookSeq !== null" :disabled="recipe.paging.prevCookSeq === null" @click="prevCookGuideView(recipe.paging.prevCookSeq)"><span class="sprite sprite_steam_oven sprite_pre">?</span></button>
              <button class="next" v-if="this.selCookInfo.cookType !== 'B' && recipe.paging.nextCookSeq !== null" :disabled="recipe.paging.nextCookSeq === null"  @click="nextCookGuideView(recipe.paging.nextCookSeq)"><span class="sprite sprite_steam_oven sprite_next">?</span></button>
              <div class="box_icon">
                <input type="checkbox" :checked="checkOnFavoriteCook(recipe.cookSeq)" class="toggle_cook_guide cook_bookmark" @click="setFavoriteCook" v-if="this.selCookInfo.cookType === 'B'">
              </div>
            </div>
            <div class="area_detail_guide">
              <!-- 마크업 변경 -->
              <div class="box_cook_info clearfix" v-if="recipe.cookType !=='M'">
                <div class="cook_kinds">
                  <span>{{this.cookFunction1}}</span>
                  <p v-if="recipe.temp !== '--'">{{recipe.temp}}</p>
                  <!-- 온도 없을 경우 추가 -->
                 <p class="none_degree" v-if="recipe.temp === '--'"><img src="/images/page/none_degree.png" alt=""></p>

                </div>
                <div class="cook_setting cook_setting_self">
                  <span v-if="this.cookFunction2 !== ''">{{this.cookFunction2}}</span>
                  <p v-if="this.cookFunction2 !== ''">{{this.defaultTime}}</p>
                  <p v-if="this.cookFunction2 === ''" >{{this.defaultTime}}</p>
                </div>
                <div class="cook_position">
                    <div class="img"><img :src="recipe.img" alt=""></div>
                    <p>{{recipe.cookShelfLevel}}</p>
                </div>
              </div>
              <!-- //마크업 변경 -->
                <div class="box_cook_info" v-if="recipe.cookType !=='M'" style="display: none;">
                    <span class="cook_kinds">{{recipe.cookFunction}}</span>
                    <span class="cook_setting cook_setting_self">{{recipe.temp}} {{this.defaultTime}}</span>
                    <div class="cook_position">
                        <div class="img"><img :src="recipe.img" alt=""></div>
                        <p>{{recipe.cookShelfLevel}}</p>
                    </div>
                </div>
                <ul>
                  <li><span>재료준비</span>
                    <div v-if="this.myMenuRecipe.menuType !== 'C'">
                      <p v-html="$options.filters.toHtml(recipe.cookMaterial)"></p>
                    </div>
                    <div class="box_memo" v-if="this.myMenuRecipe.menuType === 'C'">
                      <textarea v-on:keyup="cookMaterialSend" v-html="recipe.cookMaterial"></textarea>
                    </div>
                  </li>
                  <li><span>요리과정</span>
                  <div v-if="this.myMenuRecipe.menuType !== 'C'">
                    <p v-html="$options.filters.toHtml(recipe.cookRecipe)"></p>
                  </div>
                  <div class="box_memo" v-if="this.myMenuRecipe.menuType === 'C'">
                    <textarea v-on:keyup="cookRecipeSend" v-html="recipe.cookRecipe"></textarea>
                  </div>
                </li>
                <li v-if="recipe.cookPoint !== null || this.myMenuRecipe.menuType === 'C'"><span>Cooking Tip</span>
                  <div v-if="this.myMenuRecipe.menuType !== 'C'">
                    <p v-html="$options.filters.toHtml(recipe.cookPoint)"></p>
                  </div>
                  <div class="box_memo" v-if="this.myMenuRecipe.menuType === 'C'">
                    <textarea v-on:keyup="cookPointSend" v-html="recipe.cookPoint"></textarea>
                  </div>
                </li>
                <li v-if="recipe.cookMemo !== null|| this.myMenuRecipe.menuType !== 'A'"><span>메모</span>
                  <div v-if ="this.myMenuRecipe.menuType === 'A'">
                    <p v-html="recipe.cookMemo">{{recipe.cookMemo}}</p>
                  </div>
                  <div class="box_memo" v-if="this.myMenuRecipe.menuType !== 'A'">
                    <textarea v-on:keyup="cookMemoSend" v-html="recipe.cookMemo"></textarea>
                  </div>
                </li>
              </ul>
            </div>
        </div>
        <!-- 나만의 요리, 수동요리는 popup_detail_bottom 없음 -->
        <div class="popup_detail_bottom" style="display: block;" v-if="this.myMenuRecipe.menuType !== 'C'|| this.recipe.cookType !== 'C'">
          <span class="select select_md select_pink select_rounded select_bold" @click="showModal">
            {{recipe.temp2}}{{this.sendTime}}
          </span>
            <button class="btn btn_lg btn_pink" style="color: rgba(255, 255, 255, 0.5);" :disabled="oven.actionStatus !== 1 || oven.errorValue !== 0" v-if="oven.actionStatus !== 1 || oven.errorValue !== 0">오븐전송</button>
            <button class="btn btn_lg btn_pink" @click="stompClientSend('cookSetting')" v-if="oven.actionStatus === 1">오븐전송</button>
        </div>
        <div class="popup_detail_bottom" style="display: block;" v-if="this.myMenuRecipe.menuType === 'C' || this.recipe.cookType === 'C'">
          <span class="select select_md select_pink select_rounded select_bold" style="background-image: none;">
            {{recipe.temp2}}{{this.sendTime}}
          </span>
            <button class="btn btn_lg btn_pink" style="color: rgba(255, 255, 255, 0.5);" :disabled="oven.actionStatus !== 1 || oven.errorValue !== 0" v-if="oven.actionStatus !== 1 || oven.errorValue !== 0">오븐전송</button>
            <button class="btn btn_lg btn_pink" @click="stompClientSend('cookSetting')" v-if="oven.actionStatus === 1">오븐전송</button>
        </div>
        <nick-modal v-if="modNickNameModal" @close="modNickNameModal = false" :recipe="this.recipe" :selCookInfo="this.selCookInfo" :deviceId="this.selCookInfo.deviceId" v-on:modNickName="modNickName"/>
        <alert-modal v-if="ovenSendModal" @ok="routerMove">
          <h3 slot="body">설정이 완료 되었습니다.<br>기기에서 시작 버튼을 눌러주세요.</h3>
        </alert-modal>
        <alert-modal v-if="controlErrModal" @ok="controlErrModal = false" @close="controlErrModal = false">
          <h3 slot="body">가전제어가 실패되었습니다. 다시 시도 하세요.</h3>
        </alert-modal>
        <setting-time-temp-modal v-if="setTimeTempModal" v-on:offRemainTimeSend="offRemainTimeSend" @close="setTimeTempModal = false" :recipe="this.recipe"/>
        <setting-time-warm-modal v-if="setTimeWarmModal" v-on:offRemainTimeSend="offRemainTimeSend" @close="setTimeWarmModal = false" :recipe="this.recipe"/>
        <popup-modal v-if="ovenLockCheckModal" @close="ovenLockCheckModal = false" @ok="stompClientSend('lock')">
          <h3 slot="body">현재 LOCK 상태 입니다.<br>잠금을 해제 하시겠습니까?</h3>
        </popup-modal>
    </div>
<!-- </section> -->
</template>
<script>
window.addEventListener('resize', myFunction)
var originHeight = window.innerHeight
function myFunction () {
  var resizeWindowHeight = originHeight - window.innerHeight
  // alert(document.activeElement.offsetTop + '/' + resizeWindowHeight)
  // alert(document.activeElement.offsetTop + resizeWindowHeight)
  if (document.activeElement.offsetTop > resizeWindowHeight) {
    document.getElementById('contents').scrollTop = document.activeElement.offsetTop + resizeWindowHeight
  }
}
import SettingTimeTempModal from '@/components/oven/modal/SettingTimeTemp'
import AlertModal from '@/components/common/modal/Alert'
import PopupModal from '@/components/common/modal/Popup'
import NickModal from '@/components/oven/modal/NickName'
import SettingTimeWarmModal from '@/components/oven/modal/SettingTimeWarm'

export default {
  name: 'racipe',
  components: { SettingTimeTempModal, AlertModal, PopupModal, NickModal, SettingTimeWarmModal },
  props: ['selCookInfo'],
  data () {
    return {
      recipe: {},
      myMenuRecipe: {
        deviceId: '',
        seq: '',
        menuType: ''
      },
      recipeGuide: {
        deviceId: '',
        cookSeq: '',
        cookCateSeq: '',
        modelNm: ''
      },
      setTimeTempModal: false,
      ovenSendModal: false,
      controlErrModal: false,
      ovenLockCheckModal: false,
      modNickNameModal: false,
      setTimeWarmModal: false,
      sendTime: '',
      defaultTime: '',
      cookRecipe: '',
      cookMaterial: '',
      cookPoint: '',
      cookMemo: '',
      cookTemp: '',
      cookWatt: '',
      cookWeight: '',
      cookHour: '',
      cookMin: '',
      cookSec: '',
      oven: {},
      pageText: '',
      cookFunction1: '',
      cookFunction2: '',
      showYn: 'N'
    }
  },
  created () {
    this.oven = this.$store.getters.getOvenDatas
    this.checkSelCookInfo()
  },
  filters: {
    toHtml: function (value) {
      if (typeof value === 'undefined') {
        return
      }
      if (value === null || value === '') {
        return
      }
      var formatingValues = [
        { 'from': '<b>', 'to': '<b style="font-weight: bold">' },
        { 'from': '%E2%80%A2', 'to': '' }
      ]
      for (var i = 0; i < formatingValues.length; i++) {
        value = value.split(formatingValues[i].from).join(formatingValues[i].to)
      }
      return value
    }
  },
  methods: {
    cookMaterialSend: function (val) {
      this.$http.post('/api/oven/my/cook/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        myCookSeq: this.selCookInfo.cookSeq,
        cookMaterial: event.target.value
      })
      .then(response => {
        this.cookMaterial = event.target.value
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    cookRecipeSend: function (val) {
      this.$http.post('/api/oven/my/cook/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        myCookSeq: this.selCookInfo.cookSeq,
        cookRecipe: event.target.value
      })
      .then(response => {
        this.cookRecipe = event.target.value
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    cookPointSend: function (val) {
      this.$http.post('/api/oven/my/cook/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        myCookSeq: this.selCookInfo.cookSeq,
        cookPoint: event.target.value
      })
      .then(response => {
        this.cookPoint = event.target.value
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    cookMemoSend: function (val) {
      this.$http.post('/api/oven/my/cook/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        myCookSeq: this.selCookInfo.cookSeq,
        cookMemo: event.target.value
      })
      .then(response => {
        this.cookMemo = event.target.value
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    getHtml: function (value) {
      if (typeof value === 'undefined') {
        return
      }
      if (value === null || value === '') {
        return
      }
      var formatingValues = [
        { 'from': '<br>', 'to': '' },
        { 'from': "<span style='color:red;'>", 'to': '' },
        { 'from': '</span>', 'to': '' },
        { 'from': '<b>', 'to': '' },
        { 'from': '</b>', 'to': '' },
        { 'from': '%E2%80%A2', 'to': '' },
        { 'from': '</p>', 'to': '' },
        { 'from': '<p dir="ltr">', 'to': '' }

      ]
      for (var i = 0; i < formatingValues.length; i++) {
        value = value.split(formatingValues[i].from).join(formatingValues[i].to)
      }
      return value
    },
    closeNick: function () {
      this.$emit('closeNick', this.recipe.nickYn)
    },
    showModal: function () {
      if (this.recipe.tempDefault !== null) {
        this.setTimeTempModal = true
      } else if (this.recipe.wattDefault !== null) {
        this.setTimeWarmModal = true
      } else {
        this.setTimeTempModal = true
      }
    },
    modNickName: function (nicknm) {
      if (nicknm) {
        this.modNickNameModal = false
        this.recipe.nick = nicknm
        this.recipe.nickYn = 'Y'
      }
    },
    checkOnFavoriteCook: function (cookSeq) {
      for (var index in this.oven.favoriteList) {
        if (this.oven.favoriteList[index] === parseInt(cookSeq)) {
          return true
        }
      }
    },
    setFavoriteCook: function () {
      this.loading(true)
      var type
      var cmdObj = {}
      var cmdSuccess = false
      if (event.target.checked) {
        type = 'favoriteAdd'
      } else {
        type = 'favoriteDel'
      }
      cmdObj[type] = String(this.recipe.cookSeq)
      if (typeof this.callbackHdeviceToken === 'undefined') {
        this.callbackHdeviceToken = 'token'
      }
      this.$stompClient.send('/req/' + this.selCookInfo.modelKind + '/' + this.selCookInfo.deviceId + '/' + this.selCookInfo.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
      // 제어 명령 전달 후 200ms 이후 부터 응답 대기
      var self = this
      setTimeout(() => {
        waitResponse(type, cmdObj[type], 20)
      }, 200)
      function waitResponse (type, cmd, cnt) {
        if (cnt > 0) {
          if (type === 'favoriteAdd') {
            if (self.checkOnFavoriteCook(self.recipe.cookSeq)) {
              self.$toast('즐겨찾기에 등록되었습니다. 20개 초과시 이전 내역이 자동 삭제 됩니다.')
              self.recipe.favoriteYn = 'Y'
              cmdSuccess = true
            }
          } else {
            if (self.checkOnFavoriteCook(self.recipe.cookSeq)) {
            } else {
              self.$toast('즐겨찾기가 취소 되었습니다.')
              self.recipe.favoriteYn = 'N'
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
        } else {
          self.oven.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
      event.stopPropagation()
    },
    prevCookGuideView: function (cookSeq) {
      this.sendTime = ''
      this.defaultTime = ''
      if (this.selCookInfo.cookType === 'A') {
        this.myMenuRecipe.seq = cookSeq
        this.getMyMenuCookView()
      } else if (this.selCookInfo.cookType === 'B') {
        this.recipeGuide.cookSeq = cookSeq
        this.getCookGuideView()
      }
    },
    nextCookGuideView: function (cookSeq) {
      this.sendTime = ''
      this.defaultTime = ''
      if (this.selCookInfo.cookType === 'A') {
        this.myMenuRecipe.seq = cookSeq
        this.getMyMenuCookView()
      } else if (this.selCookInfo.cookType === 'B') {
        this.recipeGuide.cookSeq = cookSeq
        this.getCookGuideView()
      }
    },
    checkSelCookInfo: function () {
      // [0] => A:마이메뉴, B:요리가이드
      if (this.selCookInfo.length === 0) {
      } else if (this.selCookInfo.cookType === 'A') {
        this.myMenuRecipe = {
          deviceId: this.selCookInfo.deviceId,
          seq: this.selCookInfo.cookSeq,
          menuType: this.selCookInfo.menuType,
          modelNm: this.selCookInfo.modelNm
        }
        this.getMyMenuCookView()
      } else if (this.selCookInfo.cookType === 'B') {
        this.recipeGuide = {
          deviceId: this.selCookInfo.deviceId,
          cookSeq: this.selCookInfo.cookSeq,
          cookCateSeq: this.selCookInfo.cookCateSeq,
          modelNm: this.selCookInfo.modelNm
        }
        this.getCookGuideView()
      }
    },
    getMyMenuCookView: function () {
      this.$http.post('/api/oven/my/menu/detail', {
        hdeviceSeq: this.myMenuRecipe.deviceId,
        detailSeq: this.myMenuRecipe.seq,
        menuType: this.myMenuRecipe.menuType,
        modelNm: this.myMenuRecipe.modelNm
      })
      .then(response => {
        this.showYn = 'Y'
        var img = ''
        this.recipe = response.data.body
        var currNo = ''
        var cookTotalCnt = ''
        if (this.selCookInfo.menuType === 'B') {
          this.recipe.paging.cookTotalCnt = this.selCookInfo.favoriteList.length
          for (var index in this.selCookInfo.favoriteList) {
            if (this.selCookInfo.favoriteList[index].seq === this.recipe.cookSeq) {
              if (index === '0') {
                this.recipe.paging.prevCookSeq = null
              } else {
                this.recipe.paging.prevCookSeq = this.selCookInfo.favoriteList[Number(index) - 1].seq
              }
              this.recipe.paging.currNo = Number(index) + 1
              if (Number(index) + 1 >= this.recipe.paging.cookTotalCnt) {
                this.recipe.paging.nextCookSeq = null
              } else {
                this.recipe.paging.nextCookSeq = this.selCookInfo.favoriteList[Number(index) + 1].seq
              }
            }
          }
          currNo = String(this.recipe.paging.currNo)
          cookTotalCnt = String(this.recipe.paging.cookTotalCnt)
        } else if (this.selCookInfo.menuType === 'A') {
          this.recipe.paging.cookTotalCnt = this.selCookInfo.latestCookList.cookTotalCnt
          if (Number(this.recipe.paging.currNo) === this.recipe.paging.cookTotalCnt) {
            this.recipe.paging.nextCookSeq = null
          }
          currNo = String(this.recipe.paging.currNo)
          cookTotalCnt = String(this.recipe.paging.cookTotalCnt)
        } else {
          currNo = String(this.recipe.paging.currNo)
          cookTotalCnt = String(this.recipe.paging.cookTotalCnt)
        }
        if (currNo.length < 2) {
          currNo = '0' + currNo
        }
        if (cookTotalCnt.length < 2) {
          cookTotalCnt = '0' + cookTotalCnt
        }
        this.pageText = '(' + currNo + '/' + cookTotalCnt + ')'
        switch (this.recipe.cookShelfLevel) {
          case '1':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02.png'
            break
          case '2':
            this.recipe.cookShelfLevel = '하단(1단)'
            img = '/images/page/04_steam_oven/img_oven_ps_01.png'
            break
          case '3':
            this.recipe.cookShelfLevel = '바닥'
            img = '/images/page/04_steam_oven/img_oven_ps_03.png'
            break
          case '4':
            this.recipe.cookShelfLevel = '하단(1단)'
            img = '/images/page/04_steam_oven/img_oven_ps_01.png'
            break
          case '5':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02.png'
            break
          case '6':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02.png'
            break
          default:
        }

        if (this.recipe.cookTemp !== null) {
          this.recipe.temp2 = this.recipe.cookTemp + '˚C / '
        } else if (this.recipe.cookWatt !== null) {
          this.recipe.temp2 = this.recipe.cookWatt + 'W / '
        } else if (this.recipe.cookWeight !== null) {
          this.recipe.temp2 = this.recipe.cookWeight + 'g / '
        } else {
          if (this.recipe.tempDefault !== null) {
            this.recipe.temp2 = this.recipe.tempDefault + '˚C / '
          } else if (this.recipe.wattDefault !== null) {
            this.recipe.temp2 = this.recipe.wattDefault + 'W / '
          } else if (this.recipe.weightDefault !== null) {
            this.recipe.temp2 = this.recipe.weightDefault + 'g / '
          } else {
            this.recipe.temp2 = ''
          }
        }

        if (this.recipe.tempDefault !== null) {
          this.recipe.temp = this.recipe.tempDefault + '˚C'
        } else if (this.recipe.wattDefault !== null) {
          this.recipe.temp = this.recipe.wattDefault + 'W'
        } else if (this.recipe.weightDefault !== null) {
          this.recipe.temp = this.recipe.weightDefault + 'g'
        } else {
          this.recipe.temp = '--'
        }
        this.recipe.semdTime = 0
        if (this.myMenuRecipe.menuType === 'B') {
          if (this.recipe.hourDefault !== null) {
            this.defaultTime = this.recipe.hourDefault + '시간'
            this.sendTime = this.sendTime + this.recipe.hourDefault + '시간'
            this.recipe.semdTime = ((parseInt(this.recipe.hourDefault) * 60) * 60)
          }
          if (this.recipe.minDefault !== null) {
            this.defaultTime = this.defaultTime + this.recipe.minDefault + '분'
            this.sendTime = this.sendTime + this.recipe.minDefault + '분'
            this.recipe.semdTime = this.recipe.semdTime + ((parseInt(this.recipe.minDefault) * 60))
          }
          if (this.recipe.secDefault !== null) {
            this.defaultTime = this.defaultTime + this.recipe.secDefault + '초'
            this.sendTime = this.sendTime + this.recipe.secDefault + '초'
            this.recipe.semdTime = this.recipe.semdTime + (parseInt(this.recipe.secDefault))
          }
        } else if (this.myMenuRecipe.menuType === 'A') {
          if (this.recipe.hourDefault !== null) {
            this.defaultTime += this.recipe.hourDefault + '시간'
          }
          if (this.recipe.minDefault !== null) {
            this.defaultTime += this.recipe.minDefault + '분'
          }
          if (this.recipe.secDefault !== null) {
            this.defaultTime += this.recipe.secDefault + '초'
          }

          if (this.recipe.cookHour !== null) {
            this.recipe.hourDefault = this.recipe.cookHour
            this.sendTime = this.sendTime + this.recipe.cookHour + '시간'
            this.recipe.semdTime = ((parseInt(this.recipe.cookHour) * 60) * 60)
          } else {
            this.recipe.hourDefault = null
          }
          if (this.recipe.cookMin !== null) {
            this.recipe.minDefault = this.recipe.cookMin
            this.sendTime = this.sendTime + this.recipe.cookMin + '분'
            this.recipe.semdTime = this.recipe.semdTime + ((parseInt(this.recipe.cookMin) * 60))
          } else {
            this.recipe.minDefault = null
          }
          if (this.recipe.cookSec !== null) {
            this.recipe.secDefault = this.recipe.cookSec
            this.sendTime = this.sendTime + this.recipe.cookSec + '초'
            this.recipe.semdTime = this.recipe.semdTime + (parseInt(this.recipe.cookSec))
          } else {
            this.recipe.secDefault = null
          }
        } else {
          if (this.recipe.cookHour !== null) {
            this.sendTime = this.sendTime + this.recipe.cookHour + '시간'
            this.recipe.semdTime = ((parseInt(this.recipe.cookHour) * 60) * 60)
          }
          if (this.recipe.cookMin !== null) {
            this.sendTime = this.sendTime + this.recipe.cookMin + '분'
            this.recipe.semdTime = this.recipe.semdTime + ((parseInt(this.recipe.cookMin) * 60))
          }
          if (this.recipe.cookSec !== null) {
            this.sendTime = this.sendTime + this.recipe.cookSec + '초'
            this.recipe.semdTime = this.recipe.semdTime + (parseInt(this.recipe.cookSec))
          }

          if (this.recipe.hourDefault !== null) {
            if (this.recipe.cookHour == null) {
              this.sendTime = this.sendTime + this.recipe.hourDefault + '시간'
              this.recipe.semdTime = ((parseInt(this.recipe.hourDefault) * 60) * 60)
            }
            this.defaultTime = this.recipe.hourDefault + '시간'
          }
          if (this.recipe.minDefault !== null) {
            if (this.recipe.cookMin == null) {
              this.sendTime = this.sendTime + this.recipe.minDefault + '분'
              this.recipe.semdTime = ((parseInt(this.recipe.hourDefault) * 60))
            }
            this.defaultTime = this.defaultTime + this.recipe.minDefault + '분'
          }
          if (this.recipe.secDefault !== null) {
            if (this.recipe.cookSec == null) {
              this.sendTime = this.sendTime + this.recipe.secDefault + '초'
              this.recipe.semdTime = this.recipe.semdTime + (parseInt(this.recipe.secDefault))
            }
            this.defaultTime = this.defaultTime + this.recipe.secDefault + '초'
          }
        }
        if (this.myMenuRecipe.menuType === 'C') {
          this.recipe.cookRecipe = this.getHtml(this.recipe.cookRecipe)
          this.recipe.cookMaterial = this.getHtml(this.recipe.cookMaterial)
          this.recipe.cookPoint = this.getHtml(this.recipe.cookPoint)
          this.recipe.cookMemo = this.getHtml(this.recipe.cookMemo)
        }
        this.recipe.img = img
        if (this.recipe.minSet === null) {
          this.recipe.minSet = this.selCookInfo.minSet
        }

        if (this.recipe.cookType !== 'M') {
          if (this.recipe.cookFunction.indexOf(',') > 0) {
            var cookFunction = this.recipe.cookFunction.split(',')
            this.cookFunction1 = cookFunction[0]
            this.cookFunction2 = cookFunction[1]
          } else {
            this.cookFunction1 = this.recipe.cookFunction
          }
        }
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    getCookGuideView: function () {
      this.$http.post('/api/oven/cook/detail', {
        hdeviceSeq: this.recipeGuide.deviceId,
        cookSeq: this.recipeGuide.cookSeq,
        cookCateSeq: this.recipeGuide.cookCateSeq,
        modelNm: this.recipeGuide.modelNm
      })
      .then(response => {
        var img = ''
        this.recipe = response.data.body
        this.showYn = 'Y'
        var currNo = String(this.recipe.paging.currNo)
        var cookTotalCnt = String(this.recipe.paging.cookTotalCnt)
        if (currNo.length < 2) {
          currNo = '0' + currNo
        }
        if (cookTotalCnt.length < 2) {
          cookTotalCnt = '0' + cookTotalCnt
        }
        this.pageText = '(' + currNo + '/' + cookTotalCnt + ')'
        switch (this.recipe.cookShelfLevel) {
          case '1':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02.png'
            break
          case '2':
            this.recipe.cookShelfLevel = '하단(1단)'
            img = '/images/page/04_steam_oven/img_oven_ps_01.png'
            break
          case '3':
            this.recipe.cookShelfLevel = '바닥'
            img = '/images/page/04_steam_oven/img_oven_ps_03.png'
            break
          case '4':
            this.recipe.cookShelfLevel = '하단(1단)'
            img = '/images/page/04_steam_oven/img_oven_ps_01.png'
            break
          case '5':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02.png'
            break
          case '6':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02.png'
            break
          default:
        }
        if (this.recipe.tempDefault !== null) {
          this.recipe.temp = this.recipe.tempDefault + '˚C'
          this.recipe.temp2 = this.recipe.tempDefault + '˚C / '
        } else if (this.recipe.wattDefault !== null) {
          this.recipe.temp = this.recipe.wattDefault + 'W'
          this.recipe.temp2 = this.recipe.wattDefault + 'W / '
        } else if (this.recipe.weightDefault !== null) {
          this.recipe.temp = this.recipe.weightDefault + 'g'
          this.recipe.temp2 = this.recipe.weightDefault + 'g / '
        } else {
          this.recipe.temp = '--'
          this.recipe.temp2 = ''
        }
        this.recipe.semdTime = 0
        if (this.recipe.hourDefault !== null) {
          this.defaultTime = this.recipe.hourDefault + '시간'
          this.sendTime = this.sendTime + this.recipe.hourDefault + '시간'
          this.recipe.semdTime = ((parseInt(this.recipe.hourDefault) * 60) * 60)
        }
        if (this.recipe.minDefault !== null) {
          this.defaultTime = this.defaultTime + this.recipe.minDefault + '분'
          this.sendTime = this.sendTime + this.recipe.minDefault + '분'
          this.recipe.semdTime = this.recipe.semdTime + ((parseInt(this.recipe.minDefault) * 60))
        }
        if (this.recipe.secDefault !== null) {
          this.defaultTime = this.defaultTime + this.recipe.secDefault + '초'
          this.sendTime = this.sendTime + this.recipe.secDefault + '초'
          this.recipe.semdTime = this.recipe.semdTime + (parseInt(this.recipe.secDefault))
        }
        if (this.myMenuRecipe.menuType === 'C') {
          this.recipe.cookRecipe = this.getHtml(this.recipe.cookRecipe)
          this.recipe.cookMaterial = this.getHtml(this.recipe.cookMaterial)
          this.recipe.cookPoint = this.getHtml(this.recipe.cookPoint)
          this.recipe.cookMemo = this.getHtml(this.recipe.cookMemo)
        }
        this.recipe.img = img
        this.recipe.favoriteYn = this.selCookInfo.favoriteYn
        if (this.recipe.minSet === null) {
          this.recipe.minSet = this.selCookInfo.minSet
        }
        if (this.recipe.cookType !== 'M') {
          if (this.recipe.cookFunction.indexOf(',') > 0) {
            var cookFunction = this.recipe.cookFunction.split(',')
            this.cookFunction1 = cookFunction[0]
            this.cookFunction2 = cookFunction[1]
          } else {
            this.cookFunction1 = this.recipe.cookFunction
          }
        }
        this.loading(false)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    offRemainTimeSend (hour, min, sec, temp) {
      this.setTimeTempModal = false
      this.setTimeWarmModal = false
      this.recipe.semdTime = (((parseInt(hour) * 60) * 60) + (parseInt(min) * 60) + parseInt(sec))
      if (this.recipe.tempDefault !== null) {
        if (temp === null) {
          this.recipe.temp2 = this.recipe.wattDefault + '˚C / '
        } else {
          if (typeof this.recipe.cookTemp !== 'undefined' && this.recipe.cookTemp !== null) {
            this.recipe.cookTemp = temp
          }
          this.recipe.tempDefault = temp
          this.recipe.temp2 = temp + '˚C / '
        }
      } else if (this.recipe.wattDefault !== null) {
        if (temp === null) {
          this.recipe.temp2 = this.recipe.wattDefault + 'W / '
        } else {
          if (typeof this.recipe.cookWatt !== 'undefined' && this.recipe.cookWatt !== null) {
            this.recipe.cookWatt = temp
          }
          this.recipe.wattDefault = temp
          this.recipe.temp2 = temp + 'W / '
        }
      } else if (this.recipe.weightDefault !== null) {
        if (temp === null) {
          this.recipe.temp2 = this.recipe.weightDefault + 'g / '
        } else {
          if (typeof this.recipe.cookWeight !== 'undefined' && this.recipe.cookWeight !== null) {
            this.recipe.cookWeight = temp
          }
          this.recipe.weightDefault = temp
          this.recipe.temp2 = temp + 'g / '
        }
      } else {
        this.recipe.temp2 = ''
      }
      this.sendTime = ''
      if (hour !== '00') {
        if (typeof this.recipe.cookHour !== 'undefined' && this.recipe.cookHour !== null) {
          this.recipe.cookHour = hour
        }
        this.recipe.hourDefault = hour
        this.sendTime = (parseInt(hour)) + '시'
      } else {
        this.recipe.hourDefault = null
      }
      if (min !== '00') {
        if (typeof this.recipe.cookMin !== 'undefined' && this.recipe.cookMin !== null) {
          this.recipe.cookMin = min
        }
        this.recipe.minDefault = min
        this.sendTime = this.sendTime + (parseInt(min)) + '분'
      } else {
        this.recipe.minDefault = null
      }
      if (sec !== '00') {
        if (typeof this.recipe.cookSec !== 'undefined' && this.recipe.cookSec !== null) {
          this.recipe.cookSec = sec
        }
        this.recipe.secDefault = sec
        this.sendTime = this.sendTime + (parseInt(sec)) + '초'
      } else {
        this.recipe.secDefault = null
      }
    },
    stompClientSend (name) {
      this.loading(true)
      var temp
      var self = this
      var cmdSuccess = false
      var cmdObj = {}
      if (name !== 'lock' && this.oven['lock'] === 1) {
        this.loading(false)
        this.ovenLockCheckModal = true
      } else {
        if (name === 'lock') {
          this.ovenLockCheckModal = false
          cmdObj[name] = String('0')
        } else {
          var seq = this.recipe.cookSeq
          if (this.myMenuRecipe.menuType === 'C' || this.recipe.cookType === 'C') {
            name = 'myCookSetting'
            seq = this.recipe.myCookSeq
          }
          if (this.recipe.tempDefault !== null) {
            temp = this.recipe.temp2.split('˚C')[0]
          } else if (this.recipe.wattDefault !== null) {
            temp = this.recipe.temp2.split('W')[0]
          } else if (this.recipe.weightDefault !== null) {
            temp = this.recipe.temp2.split('g')[0]
          }
          var arr = []
          arr[0] = seq
          arr[1] = temp
          arr[2] = this.recipe.semdTime
          cmdObj[name] = String(arr.toString())
        }
        if (typeof this.callbackHdeviceToken === 'undefined') {
          this.callbackHdeviceToken = 'token'
        }
        this.$stompClient.send('/req/' + this.selCookInfo.modelKind + '/' + this.selCookInfo.deviceId + '/' + this.selCookInfo.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
        setTimeout(() => {
          waitResponse(name, cmdObj[name], 20)
        }, 200)
      }
      function waitResponse (name, cmd, cnt) {
        if (cnt > 0) {
          if (name === 'lock') {
            var oldData = String(self.oven[name])
            var newData = cmdObj[name]
            if (oldData === newData) {
              cmdSuccess = true
              self.loading(false)
            }
          } else {
            if (self.oven.actionCode !== 0) {
              if ((self.cookMemo !== '' && self.cookMemo !== null) || self.myMenuRecipe.menuType === 'C') {
                var seq = ''
                if (self.myMenuRecipe.menuType === 'C') {
                  seq = self.recipe.myCookSeq
                } else {
                  seq = self.oven.uniqueIdx
                }
                self.$http.post('/api/oven/cook/save', {
                  hdeviceSeq: self.selCookInfo.deviceId,
                  cookType: self.selCookInfo.cookType,
                  cookSeq: self.selCookInfo.cookSeq,
                  myCookSeq: seq,
                  cookRecipe: self.cookRecipe,
                  cookMaterial: self.cookMaterial,
                  cookPoint: self.cookPoint,
                  cookMemo: self.cookMemo,
                  cookTemp: self.cookTemp,
                  cookWatt: self.cookWatt,
                  cookWeight: self.cookWeight,
                  cookHour: self.cookHour,
                  cookMin: self.cookMin,
                  cookSec: self.cookSec
                })
                .then(response => {
                  cmdSuccess = true
                  self.ovenSendModal = true
                })
                .catch(error => console.log(error))
              } else {
                cmdSuccess = true
                self.loading(false)
                self.ovenSendModal = true
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
        } else {
          self.oven.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
    },
    routerMove: function () {
      this.ovenSendModal = false
      this.$router.push({name: 'OvenMain', params: {}})
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/**
 * 팝업
 */
.popup_dim {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.85);
}

/**
 * 컨텐츠 디테일 팝업
 */
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
    overflow-x: hidden;
    padding: 0 0 67px 0;
    z-index: 90;
}
.popup_detail_contents.popup_no_bottom {
    padding-bottom: 0;
}

.popup_detail_bottom {
    position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    height: 61px;
    background: #fff;
    border-top: 1px solid #dddddd;
    padding: 13px 17px;
    z-index: 100;
}
.popup_detail_bottom .btn.btn_lg.btn_pink {
    background: #ff5e6b;
    border: 1px solid #ff5e6b;
    height: 40px;
    line-height: 38px;
    vertical-align: top;
    width: 29%;
    color: #ffffff;
}
.area_detail_img {
    height: 37.5vh;
    position: relative;
}
.area_detail_img:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:inherit;
    background: url('/images/page/04_steam_oven/dim_cook_img.png') 0 0 no-repeat;
    background-size: 100%;
    z-index: 92;
}
.area_detail_img.area_self_detail_img:after {
    background: url('/images/page/04_steam_oven/dim_self_cook_img.png') 0 0 no-repeat;
    background-size: 100%;
    z-index: 92;
}


.area_detail_img button {
    position: absolute;
    top: 114px;
    width: 67px;
    height: 40px;
    background: rgba(0,0,0,0.3);
    z-index: 95;
}
@media all and (max-width: 320px) {
  .area_detail_img button {
    top: 90px;
  }
}
.area_detail_img .pre {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    left: -33px;
}
.area_detail_img .pre span {
    position: absolute;
    top: 12px;
    right: 14px;
}
.area_detail_img .next {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    right: -33px;
}
.area_detail_img .next span {
    position: absolute;
    top: 12px;
    left: 14px;
}
.area_detail_img .box_icon {
    position: absolute;
    right: 17px;
    bottom: 17px;
    width: 41px;
    height: 41px;
    z-index: 95;
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


.area_detail_img .box_icon span {
    display: inline-block;
    margin: 8px 0 0 8px;

}
.area_detail_guide {
    padding: 14px 17px 0;
    position: relative;
}
.area_detail_guide li {
    list-style: disc inside;
    color: #818181;
}
.area_detail_guide li span {
    font-size: 1.6rem;
    color: #333;
    line-height: 24px;
    display: inline-block;
    font-weight: bold;
}
.area_detail_guide li > div {
    padding: 9px 0 9px 12px;
    margin-bottom: 5px;
}
.area_detail_guide li > div p,
.area_detail_guide li > div .guide_point li {
    font-size: 1.4rem;
    line-height: 20px;
    color: #333;
    word-break: keep-all;
    list-style: none;
}
.area_detail_guide li > div p span,
.area_detail_guide li > div .guide_point li span {
    color: #58b1f7;
    font-size: 1.4rem;
    line-height: 20px;
    font-weight: normal;
}
.area_detail_guide li > div .guide_point {
    margin-bottom: 14px;
}
.area_detail_guide li .box_memo {
    width: 100%;
    height: 100px;
    padding-left: 0;
}
.area_detail_guide li .box_memo textarea {
    width: 100%;
    height: 100%;
    padding: 8px 12px 0;
    font-size: 1.4rem;
    line-height: 20px;
    border-color: #9b9b9b;
    font-family:"Helvetica";
    background: #fafafa;
}
textarea::-webkit-input-placeholder {
    color: #aaaaaa;
}
textarea:-moz-placeholder {
    color: #aaaaaa;
}
textarea::-moz-placeholder {
    color: #aaaaaa;
}
textarea:-ms-input-placeholder {
    color: #aaaaaa;
}

.area_detail_guide .box_cook_info {
  position: relative;
  height: 60px;
  margin-bottom: 24px;
}
.area_detail_guide .box_cook_info > div {
  float: left;
}
.area_detail_guide .box_cook_info .cook_kinds {
  width: 86px;
  height: 60px;
  border-color: #818181;
  border-width: 1.5px;
  border-style: solid;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-right: 0;
  padding: 7px 0 0 10px;
}
.area_detail_guide .box_cook_info .cook_kinds span,
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self span {
  line-height: 20px;
  margin-bottom: 10px;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self span {
  margin-bottom: 5px;
  padding: 0 5px;
}
.area_detail_guide .box_cook_info .cook_kinds p,
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self p {
  font-size: 1.9rem;
  color: #ef413b;
  font-weight: bold;
  line-height: 26px;
  position: relative;
  bottom: 0;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self p {
  top: 20px;
  right: 5px;
  /*line-height: 20px;*/
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self {
  position: relative;
  border: #818181 1.5px solid;
  border-left: 0;
  height: 60px;
  padding: 7px 7px 0 0;
  text-align: right;
}
.area_detail_guide .box_cook_info .cook_kinds .none_degree img {
  width: 25px;
  position: relative;
  top: -5px;
  left: 3px;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self span {
  display: inline-block;
  height: 14px;
  width: 50px;
  line-height: 1.6rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #ef413b;
  color: #fff;
  margin-bottom: 0;
  position: absolute;
  top: 8px;
  right: 8px;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self span:before {
  content: '';
  background: url('/images/common/sprite_steam_oven.png') -225px -150px no-repeat;
  -webkit-background-size: 250px;
  background-size: 250px;
  width: 7px;
  height: 7px;
  display: inline-block;
  position: absolute;
  top: 4px;
  left: 8px;
}
.area_detail_guide .box_cook_info .cook_position {
  margin-left: -2px;
  height: 60px;
  border-color: #818181;
  border-width: 1.5px;
  border-style: solid;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  text-align: center;
  padding: 8px 10px 0;
  background: #f3f3f3;
}
.area_detail_guide .box_cook_info .cook_position .img {
  height: 28px;
}
.area_detail_guide .box_cook_info .cook_position .img img {
  width: 52px;
  height: 28px;
}
.area_detail_guide .box_cook_info .cook_position p {
  font-weight: bold;
  line-height: 22px;
}
/* 나만의 요리 */
.area_detail_guide .box_self_guide li > div {
    border: #ececec solid 1px;
    background: #fafafa;
    margin: 2px 0 19px;
}
.area_detail_guide .box_self_guide li > .box_memo {
    border: 0;
    background: none;
    margin: 0 0 5px;
    padding-top: 3px;
}
.area_detail_guide .box_self_guide li > .box_memo textarea {
    border-color: #ececec;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self {
    color: #ef413b;
  position: relative;
  border: #818181 1.5px solid;
  border-left: 0;
  height: 60px;
  padding: 7px 7px 0 0;
 /* width: 66.5px;*/
  text-align: right;
}
</style>
