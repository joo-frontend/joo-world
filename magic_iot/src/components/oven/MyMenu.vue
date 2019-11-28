<template>
  <div class="wrap_contents_area" :class="{modal_open: this.latestCookViewModal === true || this.setTimeWeightModal === true || this.setTimeHeatModal === true || this.showDelCheckModal === true}" v-show="oven.isConn">
    <!-- section_tab -->
    <section class="section_tab" v-if="isOnline">
        <div class="tabs tabs_col3">
            <ul class="clearfix">
                <li :class="{active: type === 'latestCookList'}" @click="type = 'latestCookList'"><a>최근 요리</a></li>
                <li :class="{active: type === 'favoriteList'}" @click="type = 'favoriteList'"><a>즐겨찾기</a></li>
                <li :class="{active: type === 'myCookList'}" @click="type = 'myCookList'"><a>나만의 요리</a></li>
            </ul>
        </div>
    </section>
    <!-- //section_tab -->

    <!-- my_menu의 최근요리, 즐겨찾기 -->
    <!-- section_my_menu -->
    <section class="section_my_menu" v-if="isOnline && type === 'latestCookList' && latestCookList.length > 0">
      <ul>
        <li class="delete">
          <label><input type="checkbox" class="checkbox_circle" v-model="allChecked1"></label>
          <p>전체 선택</p>
          <button class="btn btn_md btn_dark_gray" :disabled="checked1.length === 0" @click="showDelCheckModal = true">삭제</button>
        </li>
        <li v-if="type === 'latestCookList' && latestCookList.length > 0" v-for="item in latestCookList" :key="item.seq">
          <label><input type="checkbox" class="checkbox_circle" :value="item.seq" v-model="checked1"></label>
          <div class="my_cook" @click="showCookGuideView(item)" style="width: 400%;"><p>{{ item.name }}</p></div>
          <span class="day" @click="showCookGuideView(item)">{{ item.regDate }}</span>
        </li>
      </ul>
    </section>
    <!-- //section_my_menu -->

    <!-- 요리한 내역이 없는경우 -->
    <!-- section_none_my_menu -->
    <section class="section_none_my_menu" v-if="isOnline && loadList && type === 'latestCookList' && latestCookList.length === 0">
      <div class="area_none_my_menu">
        <div class="img"></div>
        <p>최근 요리하신 내역이 없습니다.</p>
      </div>
    </section>
    <!-- //section_none_my_menu -->

    <!-- my_menu의 최근요리, 즐겨찾기 -->
    <!-- section_my_menu -->
    <section class="section_my_menu" v-if="isOnline && type === 'favoriteList' && favoriteList.length > 0">
      <ul>
        <li class="delete">
          <label><input type="checkbox" class="checkbox_circle" v-model="allChecked2"></label>
          <p>전체 선택</p>
          <button class="btn btn_md btn_dark_gray" :disabled="checked2.length === 0" @click="showDelCheckModal = true">삭제</button>
        </li>
        <li v-if="type === 'favoriteList' && favoriteList.length > 0" v-for="item in favoriteList" :key="item.seq">
          <label><input type="checkbox" class="checkbox_circle" :value="item.seq" v-model="checked2"></label>
          <div class="my_cook" @click="showCookGuideView(item)" style="width: 400%;"><p>{{ item.name }}</p></div>
          <span class="day" @click="showCookGuideView(item)">{{ item.regDate }}</span>
        </li>
      </ul>
    </section>
    <!-- //section_my_menu -->

    <!-- 요리한 내역이 없는경우 -->
    <!-- section_none_my_menu -->
    <section class="section_none_my_menu" v-if="isOnline && loadList && type === 'favoriteList' && favoriteList.length === 0">
      <div class="area_none_my_menu">
        <div class="img"></div>
        <p>현재 즐겨 찾기에 등록된 내역이 없습니다.</p>
      </div>
    </section>
    <!-- //section_none_my_menu -->

    <!-- my_menu의 나만의 요리
     최근요리,즐겨찾기에서 ul에 my_list 클래스 추가 그리고 div.my_cook에 p태그 한줄 추가-->
    <!-- section_my_menu -->
    <section class="section_my_menu" v-if="isOnline && type === 'myCookList' && myCookList.length > 0">
      <ul class="my_list">
        <li class="delete">
          <label><input type="checkbox" class="checkbox_circle" v-model="allChecked3"></label>
          <p>전체 선택</p>
          <button class="btn btn_md btn_dark_gray" :disabled="checked3.length === 0" @click="showDelCheckModal = true">삭제</button>
        </li>
        <li v-if="type === 'myCookList' && myCookList.length > 0" v-for="item in myCookList" :key="item.seq">
          <label><input type="checkbox" class="checkbox_circle" :value="item.myCookSeq" v-model="checked3"></label>
          <div class="my_cook" v-if="item.nick !== ''" @click="showCookGuideView(item)" style="width: 400%;">
            <p>{{ item.nick }}</p>
            <p>{{ item.name }}</p>
          </div>
          <div class="my_cook" v-if="item.nick === ''" @click="showCookGuideView(item)" style="width: 400%;">
            <p style="line-height:40px" >{{ item.name }}</p>
          </div>
          <span class="day" @click="showCookGuideView(item)">{{ item.regDate }}</span>
        </li>
      </ul>
    </section>
    <!-- //section_my_menu -->

    <!-- 요리한 내역이 없는경우 -->
    <!-- section_none_my_menu -->
    <section class="section_none_my_menu" v-if="isOnline && loadList && type === 'myCookList' && myCookList.length === 0">
      <div class="area_none_my_menu">
        <div class="img"></div>
        <p>현재 나만의 요리에 등록된 내역이 없습니다.</p>
      </div>
    </section>
    <!-- //section_none_my_menu -->
    <transition name="fade">
      <recipeView-modal v-if="latestCookViewModal" @close="latestCookViewModal = false" :selCookInfo="selCookInfo" v-on:stompClientSend="stompClientSend" v-on:closeNick="closeNick"></recipeView-modal>
    </transition>
    <transition name="fade">
      <setting-time-weight-modal v-if="setTimeWeightModal" v-on:stompClientSend="stompClientSend" @close="setTimeWeightModal = false" :recipe="weightInfo"/>
    </transition>
    <transition name="fade">
      <setting-time-heat-modal v-if="setTimeHeatModal" v-on:stompClientSend="stompClientSend" @close="setTimeHeatModal = false" :recipe="heatInfo"/>
    </transition>
    <transition name="fade">
      <popup-modal v-show="showDelCheckModal" @close="showDelCheckModal = false" @ok="delMyMenu">
        <h3 slot="body">선택한 내역을 삭제하시겠습니까?</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="ovenSendModal" @ok="ovenSendModal = false" @close="ovenSendModal = false">
        <h3 slot="body">설정이 완료 되었습니다.<br>기기에서 시작 버튼을 눌러주세요.</h3>
      </alert-modal>
    </transition>

    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import AlertModal from '@/components/common/modal/Alert'
import PopupModal from '@/components/common/modal/Popup'
import RecipeViewModal from '@/components/oven/modal/Recipe'
import SettingTimeWeightModal from '@/components/oven/modal/SettingTimeWeight'
import SettingTimeHeatModal from '@/components/oven/modal/SettingTimeHeat'

export default {
  name: 'myMenuList',
  props: ['userId', 'deviceId', 'deviceInfo', 'oven', 'route'],
  components: { ErrorView, AlertModal, PopupModal, RecipeViewModal, SettingTimeWeightModal, SettingTimeHeatModal },
  data () {
    return {
      loadList: false,
      latestCookList: {},
      favoriteList: {},
      myCookList: {},
      checked1: [],
      checked2: [],
      checked3: [],
      selCookInfo: {},
      type: 'latestCookList',
      // 팝업창
      showDelCheckModal: false,
      latestCookViewModal: false,
      setTimeWeightModal: false,
      setTimeHeatModal: false,
      ovenSendModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.myMenuList()
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
        if (!this.oven.waitCmd && this.latestCookList.length > 0 && this.favoriteList.length > 0 && this.myCookList.length > 0) {
          this.loading(false)
        }
      }
      return online
    },
    showlogs: function () {
      var type2 = this.type
      return type2
    },
    allChecked1: {
      get () {
        return this.getCurType().tempArr ? this.checked1.length === this.getCurType().tempArr.length : false
      },
      set (value) {
        var checked = []
        if (value) {
          this.getCurType().tempArr.forEach(function (item) {
            checked.push(item.seq)
          })
        }
        this.checked1 = checked
      }
    },
    allChecked2: {
      get () {
        return this.getCurType().tempArr ? this.checked2.length === this.getCurType().tempArr.length : false
      },
      set (value) {
        var checked = []
        if (value) {
          this.getCurType().tempArr.forEach(function (item) {
            checked.push(item.seq)
          })
        }
        this.checked2 = checked
      }
    },
    allChecked3: {
      get () {
        return this.getCurType().tempArr ? this.checked3.length === this.getCurType().tempArr.length : false
      },
      set (value) {
        var checked = []
        if (value) {
          this.getCurType().tempArr.forEach(function (item) {
            checked.push(item.myCookSeq)
          })
        }
        this.checked3 = checked
      }
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    closeNick: function (nickYn) {
      this.loading(true)
      if (typeof nickYn === 'undefined') {
        this.loading(false)
        this.latestCookViewModal = false
      } else {
        this.latestCookViewModal = false
        setTimeout(() => {
          this.myMenuList()
          this.loading(false)
        }, 500)
      }
    },
    myMenuList: function () {
      this.loading(true)
      this.loadList = false
      this.$http.post('/api/oven/my/menu', {
        hdeviceSeq: this.deviceId,
        modelNm: this.deviceInfo.modelNm,
        type: 'M'
      })
      .then(response => {
        this.latestCookList = response.data.body.latestCookList
        this.favoriteList = response.data.body.favoriteList
        this.myCookList = response.data.body.myCookList
        this.loadList = true
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    showCookGuideView: function (val) {
      if (val.detailYn === 'Y') {
        var menuType = ''
        switch (this.type) {
          case 'favoriteList':
            menuType = 'B'
            break
          case 'latestCookList':
            menuType = 'A'
            break
          case 'myCookList':
            menuType = 'C'
            break
          default:
            break
        }
        if (menuType === 'B') {
          this.selCookInfo.favoriteList = this.favoriteList
        } else if (menuType === 'A') {
          var cookTotalCnt = 0
          for (var index in this.latestCookList) {
            if (this.latestCookList[index].detailYn === 'N') {
              cookTotalCnt = cookTotalCnt + 1
            }
          }
          this.latestCookList.cookTotalCnt = this.latestCookList.length - cookTotalCnt
          this.selCookInfo.latestCookList = this.latestCookList
        }
        // A:자동요리, M:수동요리, S:요리설정화면
        // menuType => A:최근목록, B:즐겨찾기, C:나만의 요리
        this.selCookInfo.cookType = 'A'
        this.selCookInfo.deviceId = this.deviceId
        this.selCookInfo.cookSeq = val.seq
        this.selCookInfo.menuType = menuType
        this.selCookInfo.modelNm = this.deviceInfo.modelNm
        this.selCookInfo.modelKind = this.deviceInfo.modelKind
        this.selCookInfo.userId = this.userId
        this.selCookInfo.favoriteYn = val.favoriteYn
        this.selCookInfo.minSet = val.minSet
        this.selCookInfo.page = 'A'
        this.latestCookViewModal = true
      } else {
        if (this.oven.actionStatus !== 1) {
          this.$toast('오븐 작동 중에는 실행이 불가합니다')
        } else {
          if (val.cookCateType === 'D') {
            this.heatInfo = val
            this.setTimeHeatModal = true
          } else if (val.cookCateType === 'C') {
            this.weightInfo = val
            this.setTimeWeightModal = true
          }
        }
      }
    },
    getCurType: function () {
      var tempArr = []
      var delType = ''
      var menuType = ''
      switch (this.type) {
        case 'favoriteList':
          tempArr = this.favoriteList
          delType = 'favoriteDel'
          menuType = 'B'
          break
        case 'latestCookList':
          tempArr = this.latestCookList
          delType = 'latestCookDel'
          menuType = 'A'
          break
        case 'myCookList':
          tempArr = this.myCookList
          delType = 'myCookDel'
          menuType = 'C'
          break
        default:
          break
      }
      return {
        tempArr: tempArr,
        delType: delType,
        menuType: menuType
      }
    },
    delMyMenu: function () {
      this.loading(true)
      var cmdObj = {}
      if (this.getCurType().delType === 'favoriteDel') {
        cmdObj[this.getCurType().delType] = this.checked2.toString()
      } else if (this.getCurType().delType === 'latestCookDel') {
        cmdObj[this.getCurType().delType] = this.checked1.toString()
      } else if (this.getCurType().delType === 'myCookDel') {
        cmdObj[this.getCurType().delType] = this.checked3.toString()
      }
      if (this.getCurType().menuType === 'B' || this.getCurType().menuType === 'C') {
        if (typeof this.callbackHdeviceToken === 'undefined') {
          this.callbackHdeviceToken = 'token'
        }
        this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
        this.showDelCheckModal = false
        setTimeout(() => {
          this.myMenuList()
          this.loading(false)
        }, 1000)
      } else {
        this.$http.post('/api/oven/my/menu/del', {
          hdeviceSeq: this.deviceId,
          delSeq: this.checked1.toString(),
          menuType: this.getCurType().menuType
        })
        .then(response => {
          this.showDelCheckModal = false
          setTimeout(() => {
            this.myMenuList()
            this.loading(false)
          }, 1000)
        })
        .catch(error => {
          console.log(error)
          this.loading(false)
        })
      }
    },
    showDetailManual: function (order) {
      if (this.index === order) {
        this.index = ''
      } else {
        this.index = order
      }
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
              waitResponse(cmd, --cnt)
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
/* 오븐 my메뉴 */
.section_my_menu ul {
    border-top: 1px solid #e5e5e5;
}
.section_my_menu li {
    position: relative;
    height: 68px;
    /*line-height: 67px;*/
    border-bottom: 1px solid #e5e5e5;
    padding: 26px 15px 0;
}
.section_my_menu li.delete,
.section_my_menu .my_list li.delete {
    height: 61px;
    /*line-height: 60px;*/
    padding-top: 23px;
}
.section_my_menu li p {
    display: inline-block;
    font-size: 1.6rem;
}
.section_my_menu li.delete p {
    color: #666666;
}
.section_my_menu li label {
    display: inline-block;
    vertical-align: top;
    padding-right: 14px;
}
.section_my_menu li .btn {
    position: absolute;
    right: 16px;
    top: 12px;
}
.section_my_menu li .day {
    font-size: 1.3rem;
    color: #888888;
    position: absolute;
    line-height: 1;
    top: 26px;
    right: 16px;
}
.section_my_menu .my_list li {
    height: 79px;
    /*line-height: 78px;*/
    padding-top: 30px;
}
.section_my_menu .my_list li .day {
    top: 30px;
}
.section_my_menu li .my_cook {
    position: absolute;
    top: 23px;
    left: 48px;
    line-height: 24px;
}
.section_my_menu .my_list li .my_cook {
    position: absolute;
    top: 20px;
    left: 48px;
    line-height: 24px;
}
.section_my_menu .my_list li .my_cook p {
    display: block;
    line-height: 20px;
}
.section_my_menu .my_list li .my_cook p:nth-child(2) {
    font-size: 1.3rem;
    color: #888888;
}

/* my_menu 없을경우 */
.section_none_my_menu {
    position: absolute;
    top: 143px;
    left: 0;
    text-align: center;
    width: 100%;
    height: 80%;
}
.section_none_my_menu:after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    height: 90%;
}
.section_none_my_menu .area_none_my_menu {
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.section_none_my_menu .area_none_my_menu .img {
    background: url('/images/common/sprite_info_page.png') -150px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 82px;
    height: 82px;
    margin: 0 auto;
}
.section_none_my_menu .area_none_my_menu p {
    font-size: 1.6rem;
    color: #888888;
    margin-top: 27px;
}
  @media all and (max-width: 320px) {
    .section_none_my_menu .area_none_my_menu p {
      font-size: 1.3rem;
    }
  }
</style>
