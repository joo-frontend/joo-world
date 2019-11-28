<template>
  <section class="example-page" id="pop">
    <div class="popup_detail">
        <div class="popup_detail_header" style="background: rgba(0,0,0,0.3);">
          <span>{{this.pageText}}</span>
          <h1 v-if="this.recipe.cookType === 'A'">{{ recipe.cookName }}</h1>
          <h1 v-if="this.recipe.cookType === 'M'">수동요리</h1>
          <div class="close_popup">
            <button><span class="sprite sprite_common sprite_popup_close" @click="$emit('close')"></span>
            </button>
          </div>
        </div>

        <div class="popup_detail_contents"  v-if="this.recipe.cookType === 'A'" id="contents">
          <div class="area_detail_img" v-bind:style="{ backgroundImage: 'url(' + recipe.cookImgPath + ')'}" style="0 0 no-repeat; background-size: 100%;">
            <button class="pre" :disabled="recipe.paging.prevCookSeq === null" @click="prevCookGuideView(recipe.paging.prevCookSeq)"><span class="sprite sprite_steam_oven sprite_pre">?</span></button>
            <button class="next" :disabled="recipe.paging.nextCookSeq === null"  @click="nextCookGuideView(recipe.paging.nextCookSeq)"><span class="sprite sprite_steam_oven sprite_next">?</span></button>
              <div class="box_icon">
                <input type="checkbox" :checked="checkOnFavoriteCook(recipe.cookSeq)" class="toggle_cook_guide cook_bookmark" @click="setFavoriteCook">
              </div>
            </div>
            <div class="area_detail_guide">
              <!-- 마크업 변경 -->
              <div class="box_cook_info clearfix">
                <div class="cook_kinds">
                  <span>{{this.cookFunction1}}</span>
                  <p v-if="recipe.temp !== '--'">{{recipe.temp}}</p>
                  <!-- 온도 없을 경우 추가 -->
                 <p class="none_degree" v-if="recipe.temp === '--'"><img src="/images/page/none_degree.png" alt=""></p>
                </div>
                <div class="cook_setting cook_setting_self">
                  <span v-if="this.cookFunction2 !== ''">{{this.cookFunction2}}</span>
                  <p v-if="this.cookFunction2 !== ''">{{this.defaultTime}}</p>
                  <p v-if="this.cookFunction2 === ''">{{this.defaultTime}}</p>
                </div>
                <div class="cook_position">
                    <div class="img"><img :src="recipe.img" alt=""></div>
                    <p>{{recipe.cookShelfLevel}}</p>
                  </div>
            </div>
          <!-- //마크업 변경 -->
          <ul>
            <li><span>재료준비</span>
              <div>
                <p v-html="$options.filters.toHtml(recipe.cookMaterial)"></p>
              </div>
            </li>
            <li><span>요리과정</span>
              <div>
                <p v-html="$options.filters.toHtml(recipe.cookRecipe)"></p>
              </div>
            </li>
            <li v-if="recipe.cookPoint !== null"><span>Cooking Tip</span>
              <div>
                <p v-html="$options.filters.toHtml(recipe.cookPoint)"></p>
              </div>
            </li>
            <li><span>메모</span>
              <div class="box_memo">
                    <textarea id="memo" v-model="cookMemo" v-html="this.recipe.cookMemo"></textarea>
                  </div>
                </li>
              </ul>

            </div>
        </div>

        <!-- 수동요리 -->
        <div class="popup_detail_contents" v-if="this.recipe.cookType === 'M'" id="contents">
            <!-- 수동요리일때 area_self_detail_img 추가 -->
            <div class="area_detail_img area_self_detail_img" v-bind:style="{ backgroundImage: 'url(' + recipe.cookImgPath + ')'}"
                 style="0 0 no-repeat; background-size: 100%;">
                 <button class="pre" :disabled="recipe.paging.prevCookSeq === null" @click="prevCookGuideView(recipe.paging.prevCookSeq)"><span class="sprite sprite_steam_oven sprite_pre">?</span></button>
                 <button class="next" :disabled="recipe.paging.nextCookSeq === null"  @click="nextCookGuideView(recipe.paging.nextCookSeq)"><span class="sprite sprite_steam_oven sprite_next">?</span></button>
                <div class="box_icon">
                </div>
            </div>
            <div class="area_detail_guide">
              <button class="box_update" @click="memoReset"><span class="sprite sprite_steam_oven sprite_update">?</span>
                  새로입력</button>
              <ul class="box_self_guide">
                <li><span>재료준비</span>
                  <div class="box_memo">
                    <textarea id="material" v-html="recipe.cookMaterial" v-model="cookMaterial"></textarea>
                  </div>
                </li>
                <li><span>요리과정</span>
                  <div class="box_memo">
                    <textarea id="recipe" v-html="recipe.cookRecipe" v-model="cookRecipe"></textarea>
                  </div>
                </li>
                <li><span>Cooking Tip</span>
                  <div class="box_memo">
                    <textarea id="point" v-html="recipe.cookPoint" v-model="cookPoint"></textarea>
                  </div>
                </li>
                <li><span>메모</span>
                  <div class="box_memo">
                    <textarea id="memo" v-html="recipe.cookMemo" v-model="cookMemo"></textarea>
                  </div>
                </li>
              </ul>
            </div>
        </div>

        <!-- 나만의 요리, 수동요리는 popup_detail_bottom 없음 -->
        <div class="popup_detail_bottom" style="display: block;">
          <span class="select select_md select_pink select_rounded select_bold" @click="showModal">
            {{recipe.temp2}}{{this.sendTime}}
          </span>
            <button class="btn btn_lg btn_pink" style="color: rgba(255, 255, 255, 0.5);" :disabled="oven.actionStatus !== 1 || oven.errorValue !== 0" v-if="oven.actionStatus !== 1 || oven.errorValue !== 0">오븐전송</button>
            <button class="btn btn_lg btn_pink" @click="stompClientSend('cookSetting')" v-if="oven.actionStatus === 1 && oven.errorValue === 0">오븐전송</button>
        </div>
    </div>
    <setting-time-temp-modal v-if="setTimeTempModal" v-on:offRemainTimeSend="offRemainTimeSend" @close="setTimeTempModal = false" :recipe="recipe"/>
    <setting-time-warm-modal v-if="setTimeWarmModal" v-on:offRemainTimeSend="offRemainTimeSend" @close="setTimeWarmModal = false" :recipe="recipe"/>
    <alert-modal v-if="ovenSendModal" @ok="routerMove">
      <h3 slot="body">설정이 완료 되었습니다.<br>기기에서 시작 버튼을 눌러주세요.</h3>
    </alert-modal>
    <alert-modal v-if="controlErrModal" @ok="controlErrModal = false" @close="controlErrModal = false">
      <h3 slot="body">가전제어가 실패되었습니다. 다시 시도 하세요.</h3>
    </alert-modal>
    <popup-modal v-if="ovenLockCheckModal" @close="ovenLockCheckModal = false" @ok="stompClientSend('lock')">
      <h3 slot="body">현재 LOCK 상태 입니다.<br>잠금을 해제 하시겠습니까?</h3>
    </popup-modal>
</section>
</template>
<script>
window.addEventListener('resize', myFunction)
var originHeight = window.innerHeight
function myFunction () {
  var resizeWindowHeight = originHeight - window.innerHeight
  if (document.activeElement.offsetTop > resizeWindowHeight) {
    document.getElementById('contents').scrollTop = document.activeElement.offsetTop + resizeWindowHeight
  }
}
import SettingTimeTempModal from '@/components/oven/modal/SettingTimeTemp'
import SettingTimeWarmModal from '@/components/oven/modal/SettingTimeWarm'
import AlertModal from '@/components/common/modal/Alert'
import PopupModal from '@/components/common/modal/Popup'

export default {
  name: 'detail',
  components: { SettingTimeTempModal, AlertModal, SettingTimeWarmModal, PopupModal },
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
      setTimeWarmModal: false,
      ovenSendModal: false,
      controlErrModal: false,
      ovenLockCheckModal: false,
      oven: {},
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
      pageText: '',
      cookFunction1: '',
      cookFunction2: '',
      windowHeight: window.innerHeight
    }
  },
  created () {
    this.oven = this.$store.getters.getOvenDatas
    this.checkSelCookInfo()
  },
  computed: {
  },
  watch: {
    cookMaterial: function (val) {
      this.$http.post('/api/oven/cook/detail/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        cookSeq: this.selCookInfo.cookSeq,
        cookMaterial: this.cookMaterial
      })
      .then(response => {
        if (response) {}
      })
      .catch(error => console.log(error))
    },
    cookRecipe: function (val) {
      this.$http.post('/api/oven/cook/detail/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        cookSeq: this.selCookInfo.cookSeq,
        cookRecipe: this.cookRecipe
      })
      .then(response => {
        if (response) {}
      })
      .catch(error => console.log(error))
    },
    cookPoint: function (val) {
      this.$http.post('/api/oven/cook/detail/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        cookSeq: this.selCookInfo.cookSeq,
        cookPoint: this.cookPoint
      })
      .then(response => {
        if (response) {}
      })
      .catch(error => console.log(error))
    },
    cookMemo: function (val) {
      this.$http.post('/api/oven/cook/detail/save', {
        hdeviceSeq: this.selCookInfo.deviceId,
        cookSeq: this.selCookInfo.cookSeq,
        cookMemo: this.cookMemo
      })
      .then(response => {
        if (response) {}
      })
      .catch(error => console.log(error))
    }
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
    memoReset: function () {
      this.cookRecipe = ''
      this.cookMaterial = ''
      this.cookPoint = ''
      this.cookMemo = ''
    },
    checkOnFavoriteCook: function (cookSeq) {
      for (var index in this.oven.favoriteList) {
        if (this.oven.favoriteList[index] === parseInt(cookSeq)) {
          return true
        }
      }
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
    prevCookGuideView: function (cookSeq) {
      this.recipeGuide.cookSeq = cookSeq
      this.sendTime = ''
      this.defaultTime = ''
      this.getCookGuideView()
    },
    nextCookGuideView: function (cookSeq) {
      this.recipeGuide.cookSeq = cookSeq
      this.sendTime = ''
      this.defaultTime = ''
      this.getCookGuideView()
    },
    checkSelCookInfo: function () {
      // [0] => A:마이메뉴, B:요리가이드
      if (this.selCookInfo.length === 0) {
      } else if (this.selCookInfo.cookType === 'A' || this.selCookInfo.cookType === 'M') {
        this.recipeGuide = {
          deviceId: this.selCookInfo.deviceId,
          cookSeq: this.selCookInfo.cookSeq,
          cookCateSeq: this.selCookInfo.cookCateSeq,
          modelNm: this.selCookInfo.modelNm
        }
        this.getCookGuideView()
      }
    },
    setFavoriteCook: function () {
      this.$emit('setFavoriteCook', this.recipe)
      event.stopPropagation()
    },
    getCookGuideView: function () {
      this.loading(true)
      return this.$http.post('/api/oven/cook/detail', {
        hdeviceSeq: this.recipeGuide.deviceId,
        cookSeq: this.recipeGuide.cookSeq,
        cookCateSeq: this.recipeGuide.cookCateSeq,
        modelNm: this.recipeGuide.modelNm
      })
      .then(response => {
        var img = ''
        this.recipe = response.data.body
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
            img = '/images/page/04_steam_oven/img_oven_ps_01_grill.png'
            break
          case '5':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02_grill.png'
            break
          case '6':
            this.recipe.cookShelfLevel = '상단(2단)'
            img = '/images/page/04_steam_oven/img_oven_ps_02_stem.png'
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
        this.recipe.img = img
        this.recipe.favoriteYn = this.selCookInfo.favoriteYn
        if (this.recipe.minSet === null) {
          this.recipe.minSet = this.selCookInfo.minSet
        }
        if (this.recipe.hourSet === null) {
          this.recipe.hourSet = this.selCookInfo.hourSet
        }
        this.cookRecipe = this.recipe.cookRecipe
        this.cookMaterial = this.recipe.cookMaterial
        this.cookPoint = this.recipe.cookPoint
        this.cookMemo = this.recipe.cookMemo
        this.cookFunction1 = ''
        this.cookFunction2 = ''
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
      .catch(error => console.log(error))
    },
    offRemainTimeSend (hour, min, sec, temp) {
      this.setTimeTempModal = false
      this.setTimeWarmModal = false
      this.recipe.semdTime = (((parseInt(hour) * 60) * 60) + (parseInt(min) * 60) + parseInt(sec))
      if (this.recipe.tempDefault !== null) {
        this.recipe.tempDefault = temp
        this.recipe.temp2 = temp + '˚C / '
      } else if (this.recipe.wattDefault !== null) {
        if (temp === null) {
          this.recipe.temp2 = this.recipe.wattDefault + 'W / '
        } else {
          this.recipe.wattDefault = temp
          this.recipe.temp2 = temp + 'W / '
        }
      } else if (this.recipe.weightDefault !== null) {
        this.recipe.weightDefault = temp
        this.recipe.temp2 = temp + 'g / '
      } else {
        this.recipe.temp2 = ''
      }
      this.sendTime = ''
      if (hour !== '00') {
        this.recipe.hourDefault = hour
        this.sendTime = (parseInt(hour)) + '시'
      } else if (hour === '00') {
        this.recipe.hourDefault = null
      }
      if (min !== '00') {
        this.recipe.minDefault = min
        this.sendTime = this.sendTime + (parseInt(min)) + '분'
      } else if (min === '00') {
        this.recipe.minDefault = null
      }
      if (sec !== '00') {
        this.recipe.secDefault = sec
        this.sendTime = this.sendTime + (parseInt(sec)) + '초'
      } else if (sec === '00') {
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
          if (this.recipe.tempDefault !== null) {
            temp = this.recipe.temp2.split('˚C')[0]
          } else if (this.recipe.wattDefault !== null) {
            temp = this.recipe.temp2.split('W')[0]
          } else if (this.recipe.weightDefault !== null) {
            temp = this.recipe.temp2.split('g')[0]
          }
          var arr = []
          arr[0] = this.recipe.cookSeq
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
              this.loading(false)
            }
          } else {
            if (self.oven.actionCode !== 0) {
              if (self.cookMemo !== '' && self.cookMemo !== null) {
                self.$http.post('/api/oven/cook/save', {
                  hdeviceSeq: self.selCookInfo.deviceId,
                  cookType: self.selCookInfo.cookType,
                  cookSeq: self.selCookInfo.cookSeq,
                  myCookSeq: self.oven.uniqueIdx,
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
      this.$router.push({name: 'OvenMain', params: {}})
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
    /*padding-top: 17px;*/
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
    height: 67px;
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
    color: #818181;
}

.area_detail_guide li span {
    font-size: 1.6rem;
    color: #333;
    line-height: 24px;
    display: inline-block;
    font-weight: bold;
  position: relative;
  padding-left: 10px;
}
.area_detail_guide li span:before {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0;
  top: 9px;
  width: 4px;
  height: 4px;
  background: url('/images/common/sprite_steam_oven.png') -225px -25px;
  -webkit-background-size: 250px;
  background-size: 250px;
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
.area_detail_guide .box_cook_info .cook_kinds span {
  line-height: 20px;
  margin-bottom: 10px;
  font-size: 1.1rem;
}
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
  bottom:0;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self p {
  top: 20px;
  right: 5px;
  /*line-height: 20px;*/
}
.area_detail_guide .box_cook_info .cook_kinds .none_degree img {
  width: 25px;
  position: relative;
  top: -5px;
  left: 3px;
}
.area_detail_guide .box_cook_info .cook_setting.cook_setting_self {
  position: relative;
  border: #818181 1.5px solid;
  border-left: 0;
  height: 60px;
  padding: 7px 7px 0 0;
  /*width: 66.5px;*/
  text-align: right;
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
  padding-left: 7px;
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
}
/* 수동요리 */
.area_detail_guide .box_update {
    position: absolute;
    right: 17px;
    width: 87px;
    height: 27px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    background: #fafafa;
    padding: 4px 9px 6px 24px;
    color: #333;
    font-size: 1.3rem;
}

.area_detail_guide .box_update:active {
    background: #dfdfdf;
    color: #b0b0b0;
}

.area_detail_guide .box_update + ul {
    margin-top: 27px;
}

.area_detail_guide .box_update span {
    position: absolute;
    top: 6px;
    left: 7px;
}

.area_detail_guide .box_update:active span {
    background-position: -225px -50px;
}
</style>
