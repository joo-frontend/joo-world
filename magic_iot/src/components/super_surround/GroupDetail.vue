<template>
  <div class="popup_detail type2">
    <div class="popup_detail_header" style="background: #585858;">
      <button class="sprite sprite_common sprite_back" @click="$emit('close')">뒤로</button>
      <h1>{{groupName}}</h1>
      <button class="sprite sprite_steam_oven sprite_edit" @click="showModGroupName = true" v-if="this.groups.masterYn === 'Y'"></button>
      <!-- //section_header -->
    </div>
    <div class="popup_detail_contents">
      <!-- section_appliance_list -->
      <section class="section_appliance_list">
        <ul class="list_surround_group list_add list_bottom_btn">
          <li v-for="item in groupDetailList">
            <img :src="item.imgPath" alt="">
            <a>
              <p>{{item.nickNm}}</p>
              <p>{{item.modelNm}}</p>
            </a>
            <button v-if="item.masterYn === 'Y' && groupDetailList.length > 2" class="btn btn_md btn_dark_gray" @click="hdevice = item, showDelHdeviceModal = true">삭제</button>
          </li>
        </ul>
      </section>
      <!-- //section_appliance_list -->
      <section class="section_btn bottom_btn bottom_fixed">
        <div class="area_btn btn_inline">
          <button class="btn btn_lg btn_skyblue btn_block" @click="showDelGroupModal = true" v-if="this.groups.masterYn === 'Y'">그룹 삭제</button>
          <button class="btn btn_lg btn_blue btn_block" @click="showAddAppliance = true" v-if="this.groups.masterYn === 'Y'">가전 추가</button>
        </div>
      </section>
    </div>
    <popup-modal v-show="showDelGroupModal" @close="showDelGroupModal = false" :type="type" @ok="delGroup">
      <h1 slot="head">'{{groups.groupName}}' 삭제</h1>
      <h3 slot="body">이 그룹을 삭제 하시겠습니까?</h3>
    </popup-modal>
    <popup-modal v-show="showDelHdeviceModal" @close="showDelHdeviceModal = false" @ok="delGroupHdevice">
      <h1 slot="head">삭제</h1>
      <h3 slot="body">이 가전을 그룹에서 삭제 하시겠습니까?</h3>
    </popup-modal>
    <add-appliance-modal v-if="showAddAppliance" :groups="groups" :magicmallId="magicmallId" @addGroupHdeivce="addGroupHdeivce" @close="showAddAppliance = false"/>
    <mod-group-name-modal v-if="showModGroupName" :type="type" :groups="groups" @close="showModGroupName = false" @modGroupName="modGroupName"/>
    <v-dialog :clickToClose="false"/>
  </div>
</template>
<script>
import PopupModal from '@/components/common/modal/Popup'
import AddApplianceModal from '@/components/super_surround/AddAppliance'
import ModGroupNameModal from '@/components/super_surround/ModGroupName'

export default {
  name: 'groupDetail',
  components: {PopupModal, AddApplianceModal, ModGroupNameModal},
  props: ['magicmallId', 'groups'],
  data () {
    return {
      type: 'M',
      groupName: this.groups.groupName,
      groupDetailList: {},
      hdevice: {},
      showDelGroupModal: false,
      showDelHdeviceModal: false,
      showAddAppliance: false,
      showModGroupName: false
    }
  },
  created () {
    this.getGroupDetailList()
  },
  methods: {
    getGroupDetailList: function () {
      this.$http.post('/api/superSurround/groupDetailList', {
        groupId: this.groups.groupId,
        magicmallId: this.magicmallId
      })
      .then(response => {
        this.groupDetailList = response.data.body.list
        this.loading(false)
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
        this.loading(false)
        this.$emit('close')
      })
      .catch(error => console.log(error))
    },
    delGroupHdevice: function () {
      this.showDelHdeviceModal = false
      this.loading(true)
      this.$http.post('/api/superSurround/groupHdeviceDel', {
        groupId: this.hdevice.groupId,
        magicmallId: this.magicmallId,
        hdeviceSeq: this.hdevice.hdeviceSeq
      })
      .then(response => {
        this.getGroupDetailList()
      })
      .catch(error => console.log(error))
    },
    addGroupHdeivce: function (checked) {
      this.showAddAppliance = false
      this.loading(true)
      this.$http.post('/api/superSurround/groupHdeivceUpdate', {
        groupId: this.groups.groupId,
        hdeviceSeq: checked,
        magicmallId: this.magicmallId
      })
      .then(response => {
        this.getGroupDetailList()
      })
      .catch(error => console.log(error))
    },
    modGroupName: function (name) {
      this.showModGroupName = false
      this.loading(true)
      this.$http.post('/api/superSurround/groupNameUpdate', {
        groupId: this.groups.groupId,
        magicmallId: this.magicmallId,
        groupName: name
      })
      .then(response => {
        this.groupName = name
        this.loading(false)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
  .popup_detail.type2 .popup_detail_header {
    position: relative;
  }
  .popup_detail.type2 .popup_detail_contents {
    position: relative;
  }
/* 서라운드 그룹 목록 */
.popup_detail_header .sprite_back {
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 15px;
}
.popup_detail_header .sprite_edit {
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -9px;
}
.list_surround_group.list_bottom_btn {
    padding-bottom: 74px;

}
.list_surround_group.list_add li {
    height: 68px;
    padding: 0 15px;
}
.list_surround_group img {
    width: 44px;
    font-size: 0;
    position: relative;
}
.list_surround_group.list_add li a {
    padding: 14px 0 0 0;
    display: inline-block;
    width: auto;
    margin-left: 11px;
}
.list_surround_group a {
    padding: 14px 143px 0 57px;
}
  .list_surround_group a p {
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 170px;
  }
  @media all and (max-width: 320px) {
    .list_surround_group a p {
      max-width: 150px;
    }
  }
  @media all and (min-width: 400px) {
    .list_surround_group a p {
      max-width: 230px;
    }
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

.section_appliance_list .list_none {
    text-align: center;
    position: absolute;
    top: 0;
    padding-top: 8vh;
    height: 100vh;
    width: 100%;
  z-index: 90;
}
</style>
