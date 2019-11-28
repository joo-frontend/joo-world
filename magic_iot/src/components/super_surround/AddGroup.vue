<template>
  <div class="popup_detail type2">
    <div class="popup_detail_header" style="background: #585858;">
      <button class="sprite sprite_common sprite_back" @click="$emit('close')">뒤로</button>
      <h1>그룹 만들기</h1>
    </div>
    <div class="popup_detail_contents">
      <!-- section_appliance_list -->
      <section class="section_appliance_list">
        <ul class="list_surround_group list_add list_bottom_btn">
          <li v-for="item in hdeviceList" v-if="item.groupId === 0">
            <label><input type="checkbox" class="checkbox_circle" :value="item.hdeviceSeq" v-model="checked"></label>
            <img :src="item.productInfo.imgPath" alt="">
            <a>
              <p>{{item.nicknm}}</p>
              <p>{{item.modelNm}}</p>
            </a>
          </li>
        </ul>
      </section>
      <!-- //section_appliance_list -->

      <section class="section_btn bottom_btn bottom_fixed">
        <div class="area_btn btn_inline">
          <button class="btn btn_lg btn_gray btn_block" @click="$emit('close')">취소</button>
          <button class="btn btn_lg" :class="btnObj" :disabled="checked.length === 0" @click="checkHdeviceCount">선택완료</button>
        </div>
      </section>
    </div>
    <mod-group-name-modal v-if="showModGroupName" @close="showModGroupName = false" :type="type" v-on:addGroupHdeivce="addGroupHdeivce"/>
    <alert-modal v-if="showCheckListAlert" @ok="$emit('close')">
      <h3 slot="body">
        그룹이 가능한 가전이 없습니다. <br>가전을 새로 등록하시거나 다른 그룹에 속한 <br>가전을 삭제해 보시기 바랍니다.
      </h3>
    </alert-modal>
    <alert-modal v-if="showCheckHdevice" @ok="showCheckHdevice = false">
      <h3 slot="body">동일한 카테고리 가전을 2개 이상 선택해 주세요.</h3>
    </alert-modal>
    <v-dialog :clickToClose="false"/>
  </div>
</template>
<script>
import ModGroupNameModal from '@/components/super_surround/ModGroupName'
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'makeGroup',
  components: {ModGroupNameModal, AlertModal},
  props: ['magicmallId'],
  data () {
    return {
      type: 'I',
      groupName: '',
      hdeviceList: {},
      hdveice: [],
      checked: [],
      showCheckListAlert: false,
      showModGroupName: false,
      showCheckHdevice: false,
      showGroupDetailView: false
    }
  },
  created () {
    this.loading(true)
    this.getHdeviceList()
  },
  computed: {
    btnObj: function () {
      if (this.checked.length > 0) {
        return {
          'btn_skyblue': true,
          'btn_block': true
        }
      }
    }
  },
  methods: {
    getHdeviceList: function (type) {
      this.$http.post('/api/homedevice/list', {
        magicmallId: this.magicmallId,
        categCd: ['30'],
        superSurround: 'Y'
      })
      .then(response => {
        this.hdeviceList = response.data.body.list
        this.showHdeviceListAlert()
        this.loading(false)
      })
      .catch(error => console.log(error))
    },
    showHdeviceListAlert: function () {
      var count = 0
      for (var index in this.hdeviceList) {
        if (this.hdeviceList[index].groupId === 0) count++
      }
      if (count > 0) this.showCheckListAlert = false
      else this.showCheckListAlert = true
    },
    checkHdeviceCount: function () {
      if (this.checked.length < 2) this.showCheckHdevice = true
      else this.showModGroupName = true
    },
    addGroupHdeivce: function (name) {
      this.showModGroupName = false
      this.loading(true)
      this.$http.post('/api/superSurround/groupHdeivceInsert', {
        groupName: name,
        hdeviceSeq: this.checked,
        categCd: '30',
        magicmallId: this.magicmallId
      })
      .then(response => {
        this.$emit('getGroupList', response.data.body.groupId)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
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
.list_surround_group.list_bottom_btn {
    padding-bottom: 74px;

}
.list_surround_group.list_add li {
    height: 68px;
    padding: 0 15px;
}
.list_surround_group .checkbox_circle {
    vertical-align: top;
    margin: 25px 15px 0 2px;
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
</style>
