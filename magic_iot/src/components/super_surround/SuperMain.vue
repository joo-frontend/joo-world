<template>
  <div>
    <!-- wrap_header_area -->
    <div class="wrap_header_area wrap_header_none_menu">
      <!-- section_header -->
      <section class="section_header">
        <header>
          <button class="sprite sprite_common sprite_back" @click="moveNativeHome">뒤로</button>
          <div class="title">Super Surround</div>
          <button class="sprite sprite_common sprite_information" @click="showSuperIntroAlert = true"></button>
        </header>
      </section>
      <!-- //section_header -->
    </div>
    <!-- //wrap_header_area -->

    <!-- wrap_contents_area -->
    <div class="wrap_contents_area">
      <section class="section_btn bottom_border">
        <div class="area_btn">
          <button class="btn btn_lg btn_skyblue btn_block" @click="showAddGroupView = true">그룹 만들기</button>
        </div>
      </section>
      <!-- section_appliance_list -->
      <section class="section_appliance_list">
        <!-- 그룹 없는 경우 -->
        <div class="list_none" v-if="groupList.length === 0">
          <div>
            <span class="none_group"></span>
            <p>Super Surround 그룹을<br> 만들어 보세요</p>
          </div>
        </div>

        <!-- 그룹 있는 경우 -->
        <ul class="list_surround_group" v-else>
          <li v-for="group in groupList">
            <div class="group_icon" :style="{background: group.groupColor}">
              <img :src="group.categIcon">
            </div>
            <a @click="showGroupDetailView = true, groups = group">
              <p>공기청정기</p>
              <p>{{group.groupName}}</p>
            </a>
            <label v-if="group.masterYn === 'Y'"><input type="checkbox" class="checkbox_toggle_lg" :checked="group.useYn === 'Y'" @click="updateOnOffGroup(group)"></label>
            <button v-if="group.masterYn === 'Y'" class="btn btn_md btn_dark_gray" @click="showDelGroupModal = true, groups = group">삭제</button>
          </li>
        </ul>
      </section>
      <!-- //section_appliance_list -->
    </div>
    <add-group-view v-if="showAddGroupView" :magicmallId="magicmallId" v-on:getGroupList="getGroupList" @close="showAddGroupView = false" />
    <group-detail-view v-if="showGroupDetailView" :groups="groups" :magicmallId="magicmallId" @close="refresh"/>
    <transition name="fade">
      <super-alert v-show="showSuperIntroAlert" @ok="showSuperIntroAlert = false"/>
    </transition>
    <transition name="fade">
      <popup-modal v-if="showDelGroupModal" @close="showDelGroupModal = false" @ok="delGroup" :type="type">
        <h1 slot="head">'{{groups.groupName}}' 삭제</h1>
        <h3 slot="body">이 그룹을 삭제 하시겠습니까?</h3>
      </popup-modal>
    </transition>
  </div>
</template>

<script>
import PopupModal from '@/components/common/modal/Popup'
import AddGroupView from '@/components/super_surround/AddGroup'
import GroupDetailView from '@/components/super_surround/GroupDetail'
import SuperAlert from '@/components/super_surround/SuperAlert'

export default {
  name: 'superSurrond',
  components: {AddGroupView, GroupDetailView, PopupModal, SuperAlert},
  props: ['magicmallId'],
  data () {
    return {
      groupList: {},
      groups: '',
      type: 'M',
      showSuperIntroAlert: false,
      showAddGroupView: false,
      showGroupDetailView: false,
      showDelGroupModal: false
    }
  },
  created () {
    this.loading(true)
    this.getGroupList()
  },
  methods: {
    refresh: function () {
      this.showGroupDetailView = false
      this.getGroupList()
    },
    moveNativeHome: function () {
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.goHdeviceList !== 'undefined') {
        window.SkmagicNative.goHdeviceList()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'goHdeviceList'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    },
    getGroupList (groupId) {
      this.showAddGroupView = false
      this.$http.post('/api/superSurround/groupList', {
        magicmallId: this.magicmallId
      })
      .then(response => {
        this.groupList = response.data.body.list
        if (typeof groupId !== 'undefined') {
          for (var index in this.groupList) {
            if (this.groupList[index].groupId === groupId) {
              this.groups = this.groupList[index]
              this.showGroupDetailView = true
            }
          }
        }
        this.loading(false)
      })
      .catch(error => console.log(error))
    },
    updateOnOffGroup (group) {
      this.loading(true)
      this.$http.post('/api/superSurround/superSurroundOnOff', {
        magicmallId: this.magicmallId,
        groupId: group.groupId,
        useGubun: group.useYn === 'Y' ? 'OFF' : 'ON'
      })
      .then(response => {
        this.getGroupList()
      })
      .catch(error => console.log(error))
    },
    delGroup () {
      this.showDelGroupModal = false
      this.loading(true)
      this.$http.post('/api/superSurround/groupDel', {
        magicmallId: this.magicmallId,
        groupId: this.groups.groupId
      })
      .then(response => {
        this.getGroupList()
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>
  .wrap_header_area.wrap_header_none_menu {
    height: 8vh;
    z-index: 100;
  }

  .wrap_header_area.wrap_header_none_menu + .wrap_contents_area {
    padding-top: 8vh;
    z-index: 99;
  }
/* 서라운드 그룹 만들기 */
  .section_btn {
    position: relative;
    z-index: 99;
  }
.section_btn.bottom_border {
    border-bottom: 1px solid #e5e5e5;
}
  .section_appliance_list li {
    position: relative;
    height: 61px;
    border-bottom: 1px solid #e5e5e5;
    /* padding: 23px 0 0 72px; */
  }
  .section_appliance_list li a {
    font-size: 1.5rem;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 60px;
    padding-left: 72px;
  }
.list_surround_group li {
  position: relative;
    height: 68px;
}

.list_surround_group .group_icon {
    width: 44px;
  height: 44px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 11px;
  /*background: #004d7f;*/
}
  .list_surround_group .group_icon img {
    display: block;
    width: 44px;
  }
.list_surround_group button {
    position: absolute;
    right: 15px;
    top: 15px;
}

.list_surround_group .checkbox_toggle_lg {
    position: absolute;
    right: 75px;
    top: 19px;
}

.list_surround_group a {
    padding: 14px 153px 0 57px;
}
  .list_surround_group a p {
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
.list_surround_group a p:first-child {
    color: #787878;
    line-height: 1.7rem;
    font-size: 1rem;
}

.list_surround_group a p:last-child {
    font-size: 1.5rem;
    line-height: 2.3rem;
}
/* 목록이 없는 경우 */
.section_appliance_list .list_none {
    text-align: center;
    position: absolute;
    top: 0;
    padding-top: 8vh;
    height: 100vh;
    width: 100%;
  z-index: 90;
}
.section_appliance_list .list_none:after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    height: 100%;
}
.section_appliance_list .list_none > div {
    display: inline-block;
    vertical-align: middle;
}
.section_appliance_list .list_none .none_group {
    background: url('/images/common/sprite_info_page.png') -150px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 82px;
    height: 82px;
    display: inline-block;
    margin-bottom: 20px;
}
.section_appliance_list .list_none p {
    font-size: 1.2rem;
}
/* 팝업 */
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
</style>
