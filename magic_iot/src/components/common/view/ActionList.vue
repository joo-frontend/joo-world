<link rel="stylesheet" href="../../../../../../domfam2017/trunk/20_sk_magic/dev/mobile/css/ui/ui.page.css">
<template>
  <div class="wrap_contents_area" :class="{wrap_percent: modelNm === 'LG-F320S', wrap_percent2: modelNm === 'LG-F470L'}">
    <section class="section_history_alarm">
      <!-- section_history_no_alarm -->
      <ul class="alarm_no_list" v-if="actionList !== null && actionList.length === 0">
        <li>
          <div class="day">
            <div class="icon"></div>
          </div>
          <div class="history_box">
            <p class=""><span class="sprite sprite_common sprite_notice_alarm">?</span>가전사용 이력 및 알림이 없습니다.</p>
          </div>
        </li>
        <li>
          <div class="day">
            <div class="icon"></div>
          </div>
        </li>
      </ul>
      <!-- //section_history_no_alarm -->

      <!-- //section_history_alarm -->
      <ul v-else>
          <li v-for="action in actionList">
            <div class="day">
              <div class="icon"></div>
              <span>{{ action.regDate.substr(0,10) }}</span>
            </div>
            <div class="history_box">
              <p class="name">{{ action.petNm }} / {{ action.nickNm }}</p>
              <!-- 동작 -->
              <p class="status" v-if = "action.msgKind === '10'">{{ action.actionCdNm }}</p>
              <p class="order" v-if = "action.msgKind === '10'"><span class="sprite sprite_common sprite_history_note"></span>{{ action.menuCdNm }}</p>
              <!-- 알림 -->
              <p class="status" v-if = "action.msgKind === '20'">알림</p>
              <p class="order" v-if = "action.msgKind === '20' && action.userInfo !== null"><span class="sprite sprite_common sprite_history_note"></span>{{ action.msg }}</p>
              <p class="order" v-if = "action.msgKind === '20' && action.userInfo === null && action.menuCdNm !== null"><span class="sprite sprite_common sprite_history_note"></span>{{ action.menuCdNm }}</p>
              <p class="order" v-if = "action.msgKind === '20' && action.userInfo === null && action.menuCdNm === null"><span class="sprite sprite_common sprite_history_note"></span>{{ action.msg }}</p>
              <p class="name_time" v-if="action.userInfo !== null">{{ action.userInfo.name }}/{{ action.regDate.substr(11) | timeFormat }}</p>
              <p class="name_time" v-else>{{ action.regDate.substr(11) | timeFormat }}</p>
            </div>
          </li>
          <infinite-loading @infinite="infiniteHandler" v-if="actionList.length > 0">
            <span slot="no-more"></span>
          </infinite-loading>
      </ul>
      <!-- //section_history_alarm -->
    </section>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'actionList',
  data () {
    return {
      actionList: {}
    }
  },
  props: ['userId', 'deviceId', 'deviceInfo'],
  components: { InfiniteLoading },
  filters: {
    timeFormat: function (time) {
      var type
      var hour = time.substr(0, 2)
      var min = time.substr(3, 2)
      if (parseInt(hour) > 12) {
        hour = parseInt(time) - 12
        type = '오후'
      } else {
        type = '오전'
      }
      return type + ' ' + hour + ':' + min
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.loading(true)
    this.getActionList()
  },
  methods: {
    getActionList: function () {
      this.$http.post('/api/his/action', {
        hdeviceSeq: this.deviceId,
        msgKindArray: ['10', '20'],
        userSeq: this.userId,
        page: 1
      })
      .then(response => {
        this.actionList = response.data.body.list
        this.loading(false)
      })
      .catch(error => console.log(error))
    },
    infiniteHandler ($state) {
      if (this.actionList.length >= 20) {
        this.$http.post('/api/his/action', {
          hdeviceSeq: this.deviceId,
          msgKindArray: ['10', '20'],
          userSeq: this.userId,
          page: this.actionList.length / 20 + 1
        })
        .then(response => {
          if (response.data.body.list.length < 20) {
            $state.loaded()
            $state.complete()
          } else if (response.data.body.list.length >= 20) {
            this.actionList = this.actionList.concat(response.data.body.list)
            $state.loaded()
            if (this.actionList.length / 20 === 10) {
              $state.complete()
            }
          } else {
            $state.complete()
          }
        })
        .catch(error => console.log(error))
      } else {
        $state.loaded()
        $state.complete()
      }
    }
  }
}
</script>

<style>
/* 이력 및 알람 */
.section_history_alarm {
    background: #f8f8f8;
    padding-left: 20px;
    height: 100%;
    overflow-y: auto;
}
.wrap_percent .section_history_alarm {
  height: 484.8px;
}
.wrap_percent2 .section_history_alarm {
  height: 486.8px;
}

.section_history_alarm ul {
    padding: 21px 15px 0;
    border-left: #afafaf 1px solid;
}
.section_history_alarm ul.alarm_no_list {
    padding: 1px 15px 0;
}
.section_history_alarm ul li {
    padding-bottom: 20px;
}
.section_history_alarm ul.alarm_no_list li {
    padding-bottom: 12px;
}
.section_history_alarm .day {
    font-size: 1.1rem;
    line-height: 1.2rem;
    color: #666666;
    font-weight: bold;
    position: relative;
    margin-bottom: 9px;
}
.section_history_alarm .day .icon {
    background: url('/images/common/sprite_common.png') -100px -75px no-repeat;
    width: 12px;
    height: 12px;
    -webkit-background-size: 250px;
    background-size: 250px;
    position: absolute;
    top: 0;
    left: -22px;
}

.section_history_alarm .history_box {
    border: 1px solid #b0b0b0;
    padding: 14px 0 0 15px;
    background: #ffffff;
}

.section_history_alarm .alarm_no_list .history_box {
    padding-top: 0;
    position: relative;
    top: 16px;
}

.section_history_alarm .history_box p {
    color: #555555;
}
.section_history_alarm .alarm_no_list .history_box p {
    line-height: 50px;
    position: relative;
    padding-left: 20px;
    font-size: 1.2rem;
}


.section_history_alarm .alarm_no_list .history_box p .sprite_notice_alarm{
    position: absolute;
    top: 17px;
    left: 0;
}



.section_history_alarm .history_box .name {
    font-weight: bold;
    margin-bottom: 9px;
    line-height: 1rem;
}

.section_history_alarm .history_box .status {
    font-size: 1.3rem;
    margin-bottom: 15px;
    line-height: 1.3rem;
    font-weight: bold;
}


.section_history_alarm .history_box .status.status_pass {
    font-size: 1.6rem;
    color: #2c93d1;
}

.section_history_alarm .history_box .status.status_fail {
    font-size: 1.6rem;
    color: #f7597e;
}

.section_history_alarm .history_box .order {
    font-size: 1.3rem;
    margin-bottom: 11px;
}

.section_history_alarm .history_box .order.order_fail {
    color: #f7597e;
}

.section_history_alarm .history_box .order span {
    display: inline-block;
    margin: 1px 4px 0 1px;
}

.section_history_alarm .history_box .name_time {
    color: #909090;
    line-height: 1rem;
    margin-bottom: 13px;
}
</style>
