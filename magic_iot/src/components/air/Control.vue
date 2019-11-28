<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area" :class="{wrap_percent: modelNm === 'LG-F320S', wrap_percent2: modelNm === 'LG-F470L'}" v-show="air.isConn">
    <!-- section_sub_activate -->
    <section class="section_sub_activate" v-if="isOnline">
      <!-- 전원 on 시 'active' 클래스 추가 -->
      <div class="area_sub_activate" :class="{active: air.power === 2}">
        <ul class="box_air_purify_row">
          <li class="col_02">
            <!-- 상단 왼쪽 모드(v12, v09, v16) -->
            <div class="row_02 row_sm" v-if="modelKind === 'ACLV12' || modelKind === 'ACLV09' || modelKind === 'ACLV16'">
              <input type="radio" class="setting_air setting_txt" name="mode" id="auto" :checked="air.auto === 2 && air.power === 2" @click="sendDataSetting">
              <label for="auto" class="air_value air_mode air_mode_sm" v-if="modelKind === 'ACLV12' || modelKind === 'ACLV09'">자동<br>모드</label>
              <label for="auto" class="air_value" v-else>자동</label>
            </div>
            <div class="row_02 row_lg none_bg_bottom" v-if="modelKind === 'ACLV12' || modelKind === 'ACLV09' || modelKind === 'ACLV16'" >
              <ul class="sub_box_row">
                <li class="col_02">
                  <div class="row_02">
                    <div class="box_icon dp_change">
                      <button class="sprite sprite_air_purify" id="lcd" :class="{sprite_dp_change: air.lcd > 1, sprite_dp_change_off: air.lcd === 1 || air.power === 1}" @click="sendDataSetting"></button>
                      <div class="pagination page_2">
                        <span :class="{focus: air.lcd === 3}"></span>
                        <span :class="{focus: air.lcd === 4}"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row_02 none_bg_bottom">
                    <input type="radio" v-if="modelKind === 'ACLV16'" name="mode" class="setting_air setting_txt" :checked="air.speed === 2 && air.power === 2" id="speed" @click="sendDataSetting"><label for="speed" class="air_value air_value_bottom" v-if="modelKind === 'ACLV16'">급속</label>
                    <div class="box_icon" v-if="modelKind !== 'ACLV16'">
                      <input type="radio" name="mode" class="setting_air air_speed" :checked="air.speed === 2 && air.power === 2" id="speed" @click="sendDataSetting">
                    </div>
                  </div>
                </li>
                <li class="col_02 none_bg_right">
                  <div class="row_02">
                    <div class="box_icon lock">
                      <input type="checkbox" class="setting_air sprite_lock" :checked="air.lock === 2 && air.power === 2" id="lock" @click="lockAlertCheck">
                    </div>
                  </div>
                  <div class="row_02 none_bg_bottom">
                    <input type="radio" name="mode" class="setting_air setting_txt" id="quiet" :checked="air.quiet === 2 && air.power === 2" @click="sendDataSetting" v-if="modelKind === 'ACLV16'"><label v-if="modelKind === 'ACLV16'" for="quiet" class="air_value">취침</label>
                    <input type="radio" name="mode" class="setting_air setting_txt" id="quiet" :checked="air.quiet === 2 && air.power === 2" @click="sendDataSetting" v-if="modelKind !== 'ACLV16'" ><label v-if="modelKind !== 'ACLV16'" for="quiet" class="air_value air_mode air_mode_sm">취침<br>모드</label>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //상단 왼쪽 모드(v12, v09, v16) -->
            <!-- 상단 왼쪽 모드(v12, v09, v16 제외) -->
            <ul class="sub_box_row" v-else>
              <!-- 상단 왼쪽에서 왼쪽 부분  -->
                <li class="col_02">
                    <div class="row_03">
                      <div class="box_icon lock" v-if="modelKind !== 'ACLV15' && modelKind !== 'ACLV35' && modelKind !== 'ACLV32'">
                          <input type="checkbox" class="setting_air sprite_lock" :checked="air.lock === 2 && air.power === 2" @click="lockAlertCheck">
                      </div>
                      <input type="checkbox" id="auto" class="setting_air setting_txt" v-if="modelKind === 'ACLV15' || modelKind === 'ACLV35' || modelKind === 'ACLV32'" :checked="air.auto === 2 && air.power === 2" @click="sendDataSetting"><label for="auto" v-if="modelKind === 'ACLV15' || modelKind === 'ACLV35' || modelKind === 'ACLV32'" class="air_value air_mode air_mode_sm air_mode_first">자동<br>모드</label>
                    </div>
                    <div class="row_03">
                        <div class="box_icon" :class="{box_icon_txt: modelKind === 'ACLV15' || modelKind === 'ACLV35' || modelKind === 'ACLV32', dp_change: modelKind !== 'ACLV15' && modelKind !== 'ACLV35' && modelKind !== 'ACLV32'}">
                            <!--
                            화면전환 on
                            sprite sprite_air_purify sprite_dp_change
                            화면전환 off
                            sprite sprite_air_purify sprite_dp_change_off
                            -->
                            <input type="checkbox" class="setting_air dp_change_txt" id="lcd" :checked="air.lcd > 1 && air.power === 2" v-if="modelKind === 'ACLV15'" @click="sendDataSetting">
                            <input type="checkbox" class="setting_air air_light" id="light" :checked="air.light >= 5 && air.power === 2" v-if="modelKind === 'ACLV35' || modelKind === 'ACLV32'" @click="sendDataSetting">
                            <button class="sprite sprite_air_purify" id="lcd" :class="{sprite_dp_change: air.lcd > 1 && air.power === 2, sprite_dp_change_off: air.lcd === 1 || air.power === 1}" v-if="modelKind !== 'ACLV15' && modelKind !== 'ACLV35' && modelKind !== 'ACLV32'" @click="sendDataSetting"></button>
                            <div class="pagination page_2" v-if="modelKind === 'ACLV15' || modelKind === 'ACLV35' || modelKind === 'ACLV32'">
                              <span v-if="modelKind === 'ACLV15'" :class="{focus: air.lcd === 3}"></span>
                              <span v-if="modelKind === 'ACLV15'" :class="{focus: air.lcd === 4}"></span>
                              <span v-if="modelKind === 'ACLV35' || modelKind === 'ACLV32'" :class="{focus: air.light === 5}"></span>
                              <span v-if="modelKind === 'ACLV35' || modelKind === 'ACLV32'" :class="{focus: air.light === 6}"></span>
                            </div>
                            <div class="pagination" v-else>
                              <span :class="{focus: air.lcd === 2}"></span>
                              <span :class="{focus: air.lcd === 3}"></span>
                              <span :class="{focus: air.lcd === 4}"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row_03 none_bg_bottom">
                        <input type="radio" name="mode" class="setting_air air_speed" id="speed" :checked="air.speed === 2 && air.power === 2" @click="sendDataSetting">
                    </div>
                </li>
                <!-- //상단 왼쪽에서 왼쪽 부분  -->
                <!-- 상단 왼쪽에서 오른쪽 부분-->
                <li class="col_02 none_bg_right">
                  <div class="row_03" v-if="modelKind === 'ACLV15'">
                    <div class="box_icon box_icon_txt air_light_first">
                      <input type="checkbox" class="setting_air air_light" id="light" autocomplete="":checked="air.light > 1 && air.power === 2" @click="sendDataSetting">
                      <div class="pagination">
                        <span :class="{focus: air.light === 2}"></span>
                        <span :class="{focus: air.light === 3}"></span>
                        <span :class="{focus: air.light === 4}"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row_03" v-else>
                    <input type="radio" class="setting_air setting_txt" id="auto" name="mode" :checked="air.auto === 2 && air.power === 2" v-if="modelKind !== 'ACLV35' && modelKind !== 'ACLV32'" @click="sendDataSetting"><label for="auto" v-if="modelKind !== 'ACLV35' && modelKind !== 'ACLV32'" class="air_value air_mode air_mode_sm air_mode_first">자동<br>모드</label>
                    <input type="checkbox" class="setting_air setting_txt" id="eneg" :checked="air.eneg === 2 && air.power === 2" v-if="modelKind === 'ACLV35' || modelKind === 'ACLV32'" @click="sendDataSetting"><label for="eneg" v-if="modelKind === 'ACLV35' || modelKind === 'ACLV32'" class="air_value air_mode air_mode_sm air_mode_first">절전<br>모드</label>
                  </div>
                  <div class="row_03">
                    <input type="checkbox" class="setting_air sprite_lock_txt" id="lock" :checked="air.lock === 2 && air.power === 2" v-if="modelKind === 'ACLV15' || modelKind === 'ACLV35' || modelKind === 'ACLV32'" @click="lockAlertCheck">
                    <input type="radio" class="setting_air setting_txt" name="mode" :checked="air.dust === 2 && air.power === 2" v-if="modelKind !== 'ACLV15' && modelKind !== 'ACLV35' && modelKind !== 'ACLV32'" id="dust" @click="sendDataSetting"><label for="dust" class="air_value air_mode air_mode_sm" v-if="modelKind !== 'ACLV15' && modelKind !== 'ACLV35' && modelKind !== 'ACLV32'">황사<br>모드</label>
                  </div>
                  <div class="row_03 none_bg_bottom">
                    <input type="radio" class="setting_air sleep_mode" name="mode" :checked="air.quiet === 2 && air.power === 2" v-if="modelKind === 'ACLV15'" id="quiet" @click="sendDataSetting">
                    <input type="radio" v-if="modelKind !== 'ACLV15'" name="mode" class="setting_air setting_txt" id="quiet" :checked="air.quiet === 2&& air.power === 2" @click="sendDataSetting"><label for="quiet" v-if="modelKind !== 'ACLV15'" class="air_value air_mode air_mode_sm">{{quietModeTitle}}<br>모드</label>
                  </div>
                </li>
                <!-- //상단 왼쪽에서 오른쪽 부분 -->
            </ul>
            <!-- //상단 왼쪽 모드(미니제외) -->
          </li>
          <li class="col_02 none_bg_right">
            <div>
              <!-- 전원 버튼 이미지 변경 클래스 추가 'power_lg'  -->
              <input type="checkbox" class="power power_lg" :checked="air.power === 2" id="power" @click="sendDataSetting">
            </div>
          </li>
      </ul>

      <ul class="box_air_purify_row">
        <!-- 하단 왼쪽 부분 -->
        <li class="col_02">
          <!-- v200모델 -->
          <ul class="sub_box_row" v-if="modelKind === 'ACLV200'">
            <li class="col_02">
              <div class="row_02 row_lg"></div>
              <div class="row_02 row_sm none_bg_bottom">
                <input type="checkbox" class="setting_air humidity_power" :checked="air.humidification === 2 && air.power === 2" id="humidification" :disabled="air.speed === 2 || air.dust === 2" @click="sendDataSetting">
              </div>
            </li>
            <li class="col_02 none_bg_right">
              <div class="row_03"> <input type="radio" name="setting_humidity" class="setting_air setting_radio_air humidity_60" id="setting" :checked="air.setting === 60 && air.power === 2" value="4" :disabled="air.auto === 2 || air.humidification === 1 || air.dust === 2 || air.speed === 2" @click="sendDataSetting"></div>
              <div class="row_03"> <input type="radio" name="setting_humidity" class="setting_air setting_radio_air humidity_50" id="setting" :checked="air.setting === 50 && air.power === 2" value="3" :disabled="air.auto === 2 || air.humidification === 1 || air.dust === 2 || air.speed === 2" @click="sendDataSetting"></div>
              <div class="row_03 none_bg_bottom"> <input type="radio" name="setting_humidity" class="setting_air setting_radio_air humidity_40" id="setting" :checked="air.setting === 40 && air.power === 2" :disabled="air.auto === 2 || air.humidification === 1" value="2" @click="sendDataSetting"></div>
            </li>
          </ul>
          <!-- //v200모델 -->
          <!-- v200모델 제외 한 나머지  -->
          <div class="row_03" v-if="modelKind !== 'ACLV200'">
            <input type="radio" name="setting_wind"
                   class="setting_air setting_radio_air" :class="{sprite_wind_strong: modelKind !== 'ACLV16', sprite_wind_full: modelKind === 'ACLV16'}" :checked="air.wind === 3 && air.power === 2" value="3" id="wind" @click="sendDataSetting">
          </div>
          <div class="row_03" v-if="modelKind !== 'ACLV200'">
            <input type="radio" name="setting_wind"
                   class="setting_air setting_radio_air" :class="{sprite_wind_middle: modelKind !== 'ACLV16', sprite_wind_strong: modelKind === 'ACLV16'}" :checked="air.wind === 2 && air.power === 2" value="2" id="wind" @click="sendDataSetting">
          </div>
          <div class="row_03 none_bg_bottom" v-if="modelKind !== 'ACLV200'">
              <input type="radio" name="setting_wind" class="setting_air setting_radio_air" :class="{sprite_wind_weak: modelKind !== 'ACLV16', sprite_wind_middle: modelKind === 'ACLV16'}" :checked="air.wind === 1 && air.power === 2" value="1" id="wind" @click="sendDataSetting">
          </div>
          <!-- //v200모델 제외 한 나머지  -->
        </li>
        <!-- //하단 왼쪽 부분 -->

          <!-- 하단 오른족 부분 -->
          <li class="col_02 none_bg_right">
            <!-- v200모델 -->
            <ul class="sub_box_row" v-if="modelKind === 'ACLV200'">
              <li class="col_02">
                   <div class="row_02 row_sm">
                      <input type="radio" name="setting_wind"
                             class="setting_air setting_radio_air sprite_wind_strong" :checked="air.wind === 3 && air.power === 2" value="3" id="wind" @click="sendDataSetting">
                  </div>
                  <div class="row_02 row_sm">
                      <input type="radio" name="setting_wind"
                             class="setting_air setting_radio_air sprite_wind_middle" :checked="air.wind === 2 && air.power === 2" value="2" id="wind" @click="sendDataSetting">
                  </div>
                  <div class="row_02 row_sm none_bg_bottom">
                      <input type="radio" name="setting_wind" class="setting_air setting_radio_air sprite_wind_weak" :checked="air.wind === 1 && air.power === 2" value="1" id="wind" @click="sendDataSetting">
                  </div>
              </li>
              <li class="col_02 none_bg_right">
                  <div class="row_02 row_sm">
                      <input type="radio" name="setting_hours" class="setting_air setting_txt setting_txt" id="8h" :checked="air.resvOff === 4 && air.power === 2" value="5" @click="resvOffYnCheck">
                      <label for="8h" class="air_value hours"><span>8H</span></label>
                  </div>
                  <div class="row_02 row_sm">
                      <input type="radio" name="setting_hours" class="setting_air setting_txt" id="4h" :checked="air.resvOff === 3 && air.power === 2" value="4" @click="resvOffYnCheck">
                      <label for="4h" class="air_value hours"><span>4H</span></label>
                  </div>
                  <div class="row_02 row_sm none_bg_bottom">
                      <input type="radio" name="setting_hours" class="setting_air setting_txt" id="2h" :checked="air.resvOff === 2 && air.power === 2" value="3" @click="resvOffYnCheck">
                      <label for="2h" class="air_value air_mode air_mode_sm"><span>2H<br>예약</span></label>
                  </div>
              </li>
            </ul>
            <!-- //v200모델 -->
            <!-- v200모델 제외 한 나머지  -->
            <div class="row_03" v-if="modelKind !== 'ACLV200'">
              <input type="radio" name="setting_hours" class="setting_air setting_txt" value="5" id="8h" :checked="air.resvOff === 4 && air.power === 2" @click="resvOffYnCheck">
              <label for="8h" v-if="modelKind === 'ACLV16'" class="air_value hours hours_normal">8<span>h</span></label>
              <label for="8h" v-if="modelKind !== 'ACLV16'" class="air_value hours"><span>8H</span></label>
            </div>
            <div class="row_03" v-if="modelKind !== 'ACLV200'">
              <input type="radio" name="setting_hours" class="setting_air setting_txt" value="4" id="4h" :checked="air.resvOff === 3 && air.power === 2" @click="resvOffYnCheck">
              <label for="4h" v-if="modelKind === 'ACLV16'" class="air_value hours hours_normal">4<span>h</span></label>
              <label for="4h" v-if="modelKind !== 'ACLV16'" class="air_value hours"><span>4H</span></label>
            </div>
            <div class="row_03 none_bg_bottom" v-if="modelKind !== 'ACLV200'">
              <!-- 16모델일 때 1시간 처리 어케 할 지 정해야 함-->
              <input v-if="modelKind === 'ACLV16' || modelKind === 'ACLV15' || modelKind === 'ACLV20' || modelKind === 'ACLV35' || modelKind === 'ACLV32'" type="radio" name="setting_hours" class="setting_air setting_txt" value="6" id="1h" :checked="air.resvOff === 5" @click="resvOffYnCheck">
              <input v-else type="radio" name="setting_hours" class="setting_air setting_txt" value="3" id="2h" :checked="air.resvOff === 2 && air.power === 2" @click="resvOffYnCheck">
              <label for="1h" v-if="modelKind === 'ACLV16'" class="air_value hours hours_normal">1<span>h</span></label>
              <label for="1h" v-else-if="modelKind === 'ACLV15' || modelKind === 'ACLV20' || modelKind === 'ACLV35' || modelKind === 'ACLV32'"class="air_value air_mode air_mode_sm"><span>1H<br>예약</span></label>
              <label for="2h" v-else class="air_value air_mode air_mode_sm"><span>2H<br>예약</span></label>
            </div>
            <!-- //v200모델 제외 한 나머지  -->
          </li>
          <!-- //하단 오른족 부분 -->
        </ul>
      </div>
    </section>
    <!-- //section_sub_activate -->
    <transition name="fade">
      <popup-modal v-if="isOnline && showLockModal && air.power === 2" :sendNm="lock" @close="showLockModal = false" @ok="sendDataSetting">
        <h3 slot="body">{{ lockSettingMsg }}</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <resv-off-modal v-if="isOnline && showResvOffModal && air.power === 2 && air.front === 1 && air.side === 1" @close="showResvOffModal = false" v-on:stompClientSend="stompClientSend" :air="air" :type="type"></resv-off-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="isOnline && controlErrModal" @ok="controlErrModal = false" @close="controlErrModal = false">
        <h3 slot="body">가전 제어에 대한 응답이 없습니다.</h3>
      </alert-modal>
    </transition>
    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
  <!-- //wrap_contents_area-->
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import PopupModal from '@/components/common/modal/Popup'
import AlertModal from '@/components/common/modal/Alert'
import ResvOffModal from '@/components/air/modal/ResvOffYn'

export default {
  name: 'control',
  components: { ErrorView, PopupModal, ResvOffModal, AlertModal },
  props: ['userId', 'deviceId', 'deviceInfo', 'air', 'route'],
  data () {
    return {
      lock: 'lock',
      type: 'Y',
      modelKind: this.deviceInfo.modelNm,
      showLockModal: false,
      showResvOffModal: false,
      controlErrModal: false
    }
  },
  filters: {
    remainTimeFormat: function (value) {
      var time = parseInt(value)
      var hour = Math.floor(time / 60)
      var min = time % 60
      if (hour.length === 1) hour = '0' + hour
      if (hour === '00') return min + '분'
      else return hour + '시간 ' + min + '분'
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.air.isConn) {
      if (!this.air.online) {
        this.reSend()
      }
    } else {
      setTimeout(() => {
        if (!this.air.isConn) {
          this.air.isConn = true
          this.air.online = false
        }
      }, 1000 * 5)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.air.isConn) {
        if (curr - this.air.timestamp > 35000) {
          this.air.online = false
        } else {
          online = this.air.online
        }
        if (!this.air.waitCmd) this.loading(false)
      }
      return online
    },
    lockSettingMsg: function () {
      if (this.air.lock === 1) return '잠금설정을 하시겠습니까?'
      else return '잠금설정을 해제하시겠습니까?'
    },
    quietModeTitle: function () {
      if (this.modelKind === 'ACLV35' || this.modelKind === 'ACLV32') return '정음'
      else return '취침'
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    lockAlertCheck: function () {
      event.preventDefault()
      if (this.air.power === 1) {
        event.target.checked = false
      } else {
        this.showLockModal = true
      }
    },
    resvOffYnCheck: function () {
      // ios 체크박스 이벤트 막기
      if (this.air.lock === 2 || this.air.power === 1) event.target.checked = false
      event.preventDefault()
      // 청정기 꺼짐예약 제어
      if (this.air.power === 2) {
        if (this.air.lock === 2) {
          this.$toasted.show('잠금 상태입니다.<br>잠금 설정을 해제해 주세요.')
        } else {
          if (this.air.resvOff === 1 && this.air.side === 1 && this.air.front === 1) {
            this.stompClientSend('resvOff', event.target.value)
          } else if (this.air.resvOff !== 1 && this.air.side === 1 && this.air.front === 1) {
            this.type = event.target.value
            this.showResvOffModal = true
          }
        }
      }
    },
    sendDataSetting: function () {
      var sendYn = true
      var name = event.target.id
      var air = this.air[event.target.id]
      var settingObj = { '2': 40, '3': 50, '4': 60 }
      var val = ''
      // ios 라디오 버튼 이벤트 막기
      if ((event.target.name === 'mode' && this.air.lock === 2) || (this.air.power === 1 && event.target.name !== 'power')) {
        event.target.checked = false
      }
      event.preventDefault()
      // 청정기 제품작동 제어
      if (this.air.lock === 2 && event.target.id !== 'lock') {
        sendYn = false
        this.$toasted.show('잠금 상태입니다.<br>잠금 설정을 해제해 주세요.')
      } else {
        if (this.air.power === 1 && event.target.id !== 'power') sendYn = false
        else if ((this.air.side === 2 || this.air.front === 2) && name !== 'power' && name !== 'lock') sendYn = false
        else {
          switch (name) {
            case 'lcd':
              if (this.modelKind === 'ACLV16' || this.modelKind === 'ACLV09' || this.modelKind === 'ACLV15' || this.modelKind === 'ACLV12') {
                if (air === 1) val = 3
                else if (air === 3) val = 4
                else val = 1
              } else {
                air === 4 ? val = 1 : val = (air + 1)
                // if (air === 4) val = 1
                // else val = (air + 1)
                // if (air === 1) val = 2
                // else if (air === 2) val = 3
                // else if (air === 3) val = 4
                // else val = 1
              }
              break
            case 'setting':
            case 'wind':
              val = event.target.value
              if (name === 'setting' && (this.air[name] === settingObj[val])) sendYn = false
              else if (name === 'wind' && this.air[name] === parseInt(val)) sendYn = false
              break
            case 'light':
              if (this.modelKind === 'ACLV15') {
                air === 1 ? val = 4 : val = (air - 1)
                // if (air === 1) val = 4
                // else val = (air - 1)
                // if (air === 4) val = 3
                // else if (air === 3) val = 2
                // else if (air === 2) val = 1
                // else val = 4
              } else {
                if (air === 1) val = 5
                else if (air === 5) val = 6
                else val = 1
              }
              break
            case 'auto':
            case 'quiet':
              air === 1 ? val = 2 : sendYn = false
              // if (air === 1) val = 2
              // else sendYn = false
              break
            default:
              air === 1 ? val = 2 : val = 1
              // if (air === 1) val = 2
              // else val = 1
              break
          }
          if (sendYn) this.stompClientSend(name, val)
        }
        // if (event.target.id === 'setting' && (this.air[event.target.id] === setObj[val])) {
        // } else if (event.target.id === 'wind' && this.air[event.target.id] === parseInt(val)) {
        // } else if (val === '') {
        // } else if (this.air.power === 1 && event.target.id !== 'power') {
        // } else if ((this.air.side === 2 || this.air.front === 2)) {
        //   if (event.target.id === 'power' || event.target.id === 'lock') {
        //     this.stompClientSend(event.target.id, val)
        //   }
        // } else {
        //   this.stompClientSend(event.target.id, val)
        // }
      }
    },
    stompClientSend: function (type, val) {
      event.preventDefault()
      var cmdObj = {}
      var self = this
      cmdObj[type] = String(val)
      this.showLockModal = false
      this.showResvOffModal = false
      self.air.waitCmd = true
      this.loading(true)
      if (typeof this.callbackHdeviceToken === 'undefined') {
        this.callbackHdeviceToken = 'token'
      }
      this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
      setTimeout(() => {
        waitResponse(cmdObj[type], type, 20)
      }, 200)
      function waitResponse (cmd, type, cnt) {
        if (cnt > 0) {
          var cmdSuccess = false
          var resCmd = self.air[type]
          switch (type) {
            case 'resvOff':
              if (Number(cmd) === (Number(resCmd) + 1)) cmdSuccess = true
              break
            case 'setting':
              if (Number(cmd) === (Number(resCmd) / 10 - 2)) cmdSuccess = true
              break
            default:
              if (String(cmd) === String(resCmd)) cmdSuccess = true
              break
          }
          if (cmdSuccess) {
            self.air.waitCmd = false
            self.loading(false)
            return
          } else {
            setTimeout(() => {
              waitResponse(cmd, type, --cnt)
            }, 200)
          }
        } else {
          self.air.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
    }
  }
}
</script>
<style>
/* ui.page.css : 제품작동 가습기, 청정기 레이아웃 */
.section_sub_activate .area_sub_activate {
  background: #f3f3f3;
  height: 85.5vh;
/*  height: 100%;*/
  padding: 0 10px;
  overflow: hidden;
}
.wrap_percent .section_sub_activate {
  height: 485px;
}
.wrap_percent2 .section_sub_activate {
  height: 487px;
}

.section_sub_activate .area_sub_activate.area_sub_activate_humidify {
    height: 75vh;
}
.wrap_percent .section_sub_activate .area_sub_activate {
  height: 485px;
}
.wrap_percent2 .section_sub_activate .area_sub_activate {
  height: 487px;
}

.section_sub_activate ul.box_humidity_row01 {
    height: 40%;
    background: url('/images/page/bg_a6a6a6.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    padding: 7px 0;
}
.section_sub_activate ul.box_air_purify_row {
    height: 50%;
    background: url('/images/page/bg_a6a6a6.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    padding: 10px 0;
}
.wrap_percent .section_sub_activate ul.box_air_purify_row {
  height: 242.5px;
}
.wrap_percent2 .section_sub_activate ul.box_air_purify_row {
  height: 243.5px;
}

.section_sub_activate ul.box_humidity_row02 {
  height: 30%;
  background: url('/images/page/bg_a6a6a6.png') bottom left repeat-x;
  -webkit-background-size: 2px;
  background-size: 2px;
  padding: 7px 0;
}
.section_sub_activate ul.box_humidity_row03 {
  height: 30%;
  padding: 7px 0;
}
.section_sub_activate ul.box_humidity_row01.none_bg_bottom,
.section_sub_activate ul.box_humidity_row02.none_bg_bottom,
.section_sub_activate ul.box_humidity_row03.none_bg_bottom,
.section_sub_activate ul.box_air_purify_row.none_bg_bottom {
    background: none;
}
.section_sub_activate ul li {
    float: left;
    padding: 0 10px;
    position: relative;
    height: 100%;
    /*background: url('/images/page/bg_c1c1c1.png') top right repeat-y;*/
    -webkit-background-size: 2px;
    background-size: 2px;
}
.section_sub_activate li.none_bg_right {
    background: none;
}
.section_sub_activate ul li.col_02 {
    width: 50%;
}
.section_sub_activate ul li.col_all {
    width: 100%;
}
.section_sub_activate ul li.col_03 {
    width: 33.3%;
}
.section_sub_activate ul li .row_02 {
    height: 50%;
    background: url('/images/page/bg_d9d9d9.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    position: relative;
    text-align: center;
}
.section_sub_activate ul li .row_02:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    content: '';
}
.section_sub_activate ul li .row_03 {
    height: 33.3%;
    background: url('/images/page/bg_d9d9d9.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    position: relative;
    text-align: center;
    overflow: hidden;
}
.section_sub_activate ul li .row_03 input[type="checkbox"],
.section_sub_activate ul li .row_03 input[type="radio"]{
    vertical-align: middle;
}
.section_sub_activate ul li .row_02 input[type="checkbox"],
.section_sub_activate ul li .row_02 input[type="radio"]{
    vertical-align: middle;
}

.section_sub_activate ul li .row_03:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    content: '';
}
.section_sub_activate ul li .row_02.humidity_last_row {
    padding-top: 7px;
}
.section_sub_activate ul li:nth-child(odd){
  border-right: 1px solid #c1c1c1;
  padding-left: 0;
}
.section_sub_activate ul li:nth-child(even){
  border-left: 1px solid #fff;
  padding-right: 0;
}

.section_sub_activate ul li .none_bg_bottom {
    background: none;
}
.section_sub_activate ul li ul li {
  padding: 0;
}
.section_sub_activate ul li ul li:nth-child(even) {
  border-left: 1px solid #fff;
  padding-left:10px;
}
.section_sub_activate ul li ul li:nth-child(odd) {
  border-right: 1px solid #d9d9d9;
  padding-right:10px;
}
.section_sub_activate .menu_title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #898989;
    line-height: 32px;
    text-indent: 5px;
    display: inline-block;
}
@media all and (max-width: 320px) {
    .section_sub_activate .menu_title {
        text-indent: 0;
    }
}
.section_sub_activate .power {
    position: absolute;
    width: 103px;
    height: 103px;
    top: 50%;
    margin-top: -52px;
    left: 52%;
    margin-left: -52px;
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    background: url('/images/page/power_off.png') 0 0 no-repeat;
    -webkit-background-size: 103px;
    background-size: 103px;
}
.section_sub_activate .power:checked {
    background: url('/images/page/power_on.png') 0 0 no-repeat;
    -webkit-background-size: 103px;
    background-size: 103px;
}
.section_sub_activate .power.power_lg {
  background: url('/images/page/power_off_lg.png') 0 0 no-repeat;
  -webkit-background-size: 103px;
  background-size: 103px;
}
.section_sub_activate .power.power_lg:checked {
  background: url('/images/page/power_on_lg.png') 0 0 no-repeat;
  -webkit-background-size: 103px;
  background-size: 103px;
}
.section_sub_activate .mode {
    font-size: 2.1rem;
    line-height: 25px;
    font-weight: bold;
    color: #c5c5c5;
    text-align: center;
    padding-top: 12px;
    letter-spacing: -1px;
}
.section_sub_activate .active .mode {
    color: #339eff;
}
.section_sub_activate .pagination {
    /*position: absolute;*/
    width: 100%;
    text-align: center;
    /*bottom: 8px;*/
    /*left: 50%;*/
    /*margin-left: -19px;*/
    line-height: 0.5em;
    margin-top: 6px;
}
.section_sub_activate .pagination span:last-child {
    margin-right: 0;
}
.section_sub_activate .pagination.page_2 {
    /*left: 50%;
    margin-left: -10px;*/
}
.section_sub_activate .active .pagination span.focus {
    background: #339eff;
    border:1px solid #339eff;
}

.section_sub_activate .pagination span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border:1px solid #bababa;
    background: #bababa;
    margin-right: 6px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.section_sub_activate .box_setting_humidify {
  position: absolute;
  left: 31px;
  top: 52px;
}
@media all and (max-width: 320px) {
    .section_sub_activate .box_setting_humidify {
        top: 42px;
    }
}
.section_sub_activate .box_setting_humidify span,
.section_sub_activate .box_setting_stage span {
    position: relative;
    top: -8px;
    left: 5px;
    color: #c5c5c5;
    font-size: 1.6rem;
}
.section_sub_activate .active .box_setting_humidify span,
.section_sub_activate .active .box_setting_stage span {
    color: #339eff;
}

.toggle_water_humidify {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    width: 22px;
    height: 30px;
    background: url('/images/common/sprite_humidify.png');
    -webkit-background-size: 350px;
    background-size: 350px;
}

.toggle_water_humidify.sprite_water_stop {
    background-position: -25px 0;
}

.toggle_water_humidify.sprite_water_intense:checked {
    background-position: -100px 0;
}

.toggle_water_humidify.sprite_water_moderate:checked {
    background-position: -75px 0;
}

.toggle_water_humidify.sprite_water_mild:checked {
    background-position: -50px 0;
}

.toggle_water_humidify.sprite_water_intense {
    background-position: -75px -225px;
}

.toggle_water_humidify.sprite_water_moderate {
    background-position: -50px -225px;
}

.toggle_water_humidify.sprite_water_mild {
    background-position: -25px -225px;
}
.section_sub_activate .active .box_setting_humidify .toggle_water_humidify:checked + span,
.section_sub_activate .active .box_setting_stage span {
    color: #339eff;
}
.section_sub_activate .active .box_setting_humidify .toggle_water_humidify + span,
.section_sub_activate .active .box_setting_stage .off {
    color: #c5c5c5;
}
.section_sub_activate .box_setting_humidify .pagination {
    position: absolute;
    top: 60px;
    left: 0;
}
.section_sub_activate .active .box_setting_humidify .toggle_water_humidify:checked + span + .pagination span {
    background: #339eff;
    border: 1px solid #339eff;
}
/*.section_sub_activate .active .box_setting_humidify .off,
.section_sub_activate .active .box_setting_stage .off {
    color: #c5c5c5;
    left: 0;
}*/
.section_sub_activate .setting_btn {
    position: absolute;
    top: 5px;
    right: 7px;
    display: inline-block;
    width: 30px;
    height: 20px;
  /*  border: 1px solid #2082ca;
    color: #2082ca;*/
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    padding: 2px 3px;
    margin-left: 5px;
    font-size: 10px;
    border: 1px solid #c5c5c5;
    color: #c5c5c5;
}
.section_sub_activate .active .setting_btn {
    border: 1px solid #339eff;
    color: #339eff;
}
.section_sub_activate .box_value p {
  margin-top: 44px;
  text-align: center;
  font-size: 4.4rem;
  color: #c5c5c5;
  font-weight: bold;
  line-height: 50px;
}
@media all and (max-width: 320px) {
    .section_sub_activate .box_value p {
        margin-top: 25px;
    }
}
.section_sub_activate .active .box_value p {
    color: #339eff;
}
.section_sub_activate .box_value p span {
    font-size: 2.5rem;
    font-weight: normal;
}

.section_sub_activate .box_setting_stage {
    position: absolute;
    left: 21px;
    top: 54px;
}
@media all and (max-width: 320px) {
    .section_sub_activate .box_setting_stage {
        left: 15px;
        top: 43px;
    }
}
.section_sub_activate .box_setting_stage .pagination {
    margin-top: 25px;
}

.section_sub_activate .mode_color {
    text-align: center;
    margin-top: 30px;
}
@media all and (max-width: 320px) {
    .section_sub_activate .mode_color {
        margin-top: 20px;
    }
}
.area_time_sync {
    position: relative;
    height: 10.5vh;
    padding: 12px 12px 0;
    border-top: 1px solid #b5b5b5;
    background: #edebee;
}
.area_time_sync .title {
    font-size: 1.6rem;
    line-height: 24px;
    color: #a0a0a0;
    font-weight: bold;
}
.area_time_sync.active .title {
    color: #666666;
}

.area_time_sync .desc {
    font-size: 1.2rem;
    line-height: 20px;
    color: #999999;
}
.area_time_sync button.sprite_sync {
    position: absolute;
    right: 35px;
    top: 17px;
}
.area_time_sync button.sprite_humidify.sprite_sync:active {
    background-position: -200px -50px;
}

.area_time_sync button.sprite_humidify.sprite_sync:disabled {
    background-position: -225px 0;
}

/* ui.page.css : 청정기 제품작동 */
.section_sub_activate ul li .row_02.row_sm {
    height: 33.3%;
}

.section_sub_activate ul li .row_02.row_lg {
    height: 66.7%;
    padding: 10px 0 0;
}

.section_sub_activate .sub_box_row {
    height: 100%;
}

.section_sub_activate .sub_box_row li {
   /* background: url('/images/page/bg_d9d9d9_y.png') top right repeat-y;
    -webkit-background-size: 2px;
    background-size: 2px;*/
    position: relative;
}

.section_sub_activate .sub_box_row li.none_bg_right {
    background: none;
}

.section_sub_activate .sub_box_row div.none_bg_bottom {
    background: none;
}
/* 아이콘 위치 조정 */
.section_sub_activate .box_icon {
    /*position: absolute;*/
    top: -2px;
    /*top: -7px;*/
    /*left: 50%;*/
    /*margin-left: -15px;*/
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.section_sub_activate .box_icon.dp_change {
  top: 0;
}

.section_sub_activate .box_icon.lock {
    margin-left: -2px;
    /*top: 35px;*/
    width: 17px;
    height: 25px;
}

.section_sub_activate .box_icon.box_icon_txt {
    /*top: 23px;*/
    /*width: 25px;*/
  top:1px;
    height: auto;
    width: 93%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    text-align: center;
}
.section_sub_activate .box_icon.box_icon_txt.air_light_first {
  top: -2px;
}

.setting_air {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    /*position: absolute;*/
    /*top: 50%;*/
    /*margin-top: -20px;*/
    /*left: 50%;*/
    /*margin-left: -13px;*/
    background: url('/images/common/sprite_air_purify.png');
    -webkit-background-size: 250px;
    background-size: 250px;
}
/* 문구 위치 조정 */
.setting_air.setting_txt {
    position: absolute;
  background-position: -250px -300px;
  width: 0;
  height: 0;
    /*top: 58%;
    margin-top: -20px;
    left: 50%;
    margin-left: -13px;*/
}

.setting_air.setting_radio_air {
    /*margin-top: -15px;*/
}

.setting_air.sprite_lock {
    background-position: -175px 0;
    width: 18px;
    height: 25px;
}

.setting_air.sprite_lock:checked {
    background-position: -200px 0;
}

.setting_air.sprite_lock_txt {
    background-position: -100px -150px;
    width: 25px;
    height: 39px;
}

.setting_air.sprite_lock_txt:checked {
    background-position: -125px -150px;
}

.setting_air.dp_change_txt {
    background-position: -150px -150px;
    width: 26px;
    height: 38px;
}

.setting_air.dp_change_txt:checked {
    background-position: -200px -150px;
}

.setting_air.sprite_wind_full {
    background-position: -150px -50px;
    width: 26px;
    height: 26px;
}

.setting_air.sprite_wind_full:checked {
    background-position: -200px -50px;
}

.setting_air.sprite_wind_strong {
    background-position: -200px -25px;
    width: 24px;
    height: 24px;
}

.setting_air.sprite_wind_strong:checked {
    background-position: -225px -25px;
}

.setting_air.sprite_wind_middle {
    background-position: -150px -25px;
    width: 24px;
    height: 24px;
}

.setting_air.sprite_wind_middle:checked {
    background-position: -175px -25px;
}

.setting_air.sprite_wind_weak {
    background-position: -100px -25px;
    width: 25px;
    height: 32px;
}

.setting_air.sprite_wind_weak:checked {
    background-position: -125px -25px;
}

.setting_air.air_speed {
    background-position: 0 -50px;
    width: 26px;
    height: 37px;
}

.setting_air.air_speed:checked {
    background-position: -50px -50px;
}

.setting_air.sleep_mode {
    background-position: -50px -150px;
    width: 24px;
    height: 38px;
}

.setting_air.sleep_mode:checked {
    background-position: -75px -150px;
}

.setting_air.air_light {
    background-position: 0 -150px;
    width: 25px;
    height: 41px;
}

.setting_air.air_light:checked {
    background-position: -25px -150px;
}

.setting_air.humidity_power {
    margin-top: 0;
    background-position: 0 -100px;
    width: 25px;
    height: 38px;
}

.setting_air.humidity_power:checked {
    background-position: -25px -100px;
}

.setting_air.humidity_40 {
    background-position: -50px -100px;
    width: 34px;
    height: 38px;
}

.setting_air.humidity_40:checked {
    background-position: -100px -100px;
}

.setting_air.humidity_50 {
    background-position: -150px -100px;
    width: 34px;
    height: 22px;
}

.setting_air.humidity_50:checked {
    background-position: -150px -125px;
}

.setting_air.humidity_60 {
    background-position: -200px -100px;
    width: 34px;
    height: 22px;
}

.setting_air.humidity_60:checked {
    background-position: -200px -125px;
}
.setting_air.humidity_power:disabled {
    opacity: 1;
}
.setting_air.humidity_60:disabled {
    opacity: 1;
}
.setting_air.humidity_50:disabled {
    opacity: 1;
}
.setting_air.humidity_40:disabled {
    opacity: 1;
}
.setting_air + .air_value {
    color: #919191;
    font-size: 1.8rem;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    /*height: 100%;*/
}
.none_bg_bottom {
  margin-top: 5px;
}
.row_lg.none_bg_bottom {
  margin-top: 0;
}

/* 문구 위치 조정 */
.setting_air + .air_value.air_mode {
    /*padding-top: 22px;*/
    height: auto;
    line-height: 19px;
    vertical-align: middle;
}
/*@media all and (max-width: 320px) {
  .setting_air + .air_value.air_mode {
    padding-top: 15px;
  }
}*/
/* 문구 위치 조정 */
.setting_air + .air_value.air_mode.air_mode_sm {
   /* padding-top:23px;*/
    font-size: 1.5rem;
}
.setting_air.setting_txt + .air_value.air_mode.air_mode_sm {
  height: 37px;
}
/*.setting_air + .air_value.air_mode.air_mode_sm.air_mode_first {
  padding-top: 23px;
}*/
/*
@media all and (max-height: 615px){
  .setting_air + .air_value.air_mode.air_mode_sm.air_mode_first {
    padding-top: 21px;
  }
}
@media all and (max-width: 320px) , (max-height: 600px) {
  .setting_air + .air_value.air_mode.air_mode_sm {
    padding-top: 21px;
  }
  .setting_air + .air_value.air_mode.air_mode_sm.air_mode_first {
    padding-top: 16px;
  }
}
@media all and (min-height: 700px){
  .setting_air + .air_value.air_mode.air_mode_sm {
    padding-top: 32px;
  }
  .setting_air + .air_value.air_mode.air_mode_sm.air_mode_first {
    padding-top: 30px;
  }
}
*/

.setting_air + .air_value.hours_normal {
    font-weight: normal;
}

.setting_air + .air_value.hours {
    font-size: 2.8rem;
}

.setting_air + .air_value.hours span {
    font-size: 1.6rem;
}

.setting_air + .air_value:after {
    content: '';
  position: absolute;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
/*.setting_air + .air_value.air_value_bottom:after {
  height: 120%;
}*/

.setting_air:checked + .air_value {
    color: #339eff;
}
.setting_air.dp_change_txt {
    background-position: -150px -150px;
    width: 26px;
    height: 38px;
}

/* 토스트 팝업 */
.toasted.primary.default {
  opacity: 0.5;
  border-radius: 5px;
  background-color: #4c4c4c;
}

/*.box_icon + .icon_desc {
    position: absolute;
    left: 17px;
    bottom: 17px;
    font-weight: bold;
    color: #919191;
    font-size: 1.4rem;
}
.box_icon + .icon_desc.focus {
    color: #339eff;
}

.box_icon.dp_change + .icon_desc {
    left: 18px;
    bottom: 21px;
}*/
</style>
