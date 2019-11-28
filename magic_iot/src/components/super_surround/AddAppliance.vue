<template>
  <div class="popup_dim">
    <div class="popup popup_add_appliance" v-if="showCheckListAlert !== ''">
      <div class="popup_header">
        <h1>가전추가</h1>
      </div>
      <div class="popup_contents">
        <ul>
          <li v-for="item in hdeviceList" v-if="item.groupId === 0">
            <label><input type="checkbox" class="checkbox_circle" :value="item.hdeviceSeq" v-model="checked"></label>
            <img :src="item.productInfo.imgPath" alt="">
            <a>
              <p>{{item.nicknm}}</p>
              <p>{{item.modelNm}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="popup_btn bottom_fixed">
        <div class="btn_inline">
          <button class="btn btn_lg_timeSetting btn_gray" @click="$emit('close')">닫기</button>
          <button class="btn btn_lg_timeSetting btn_skyblue" @click="addGroupHdeivce">추가</button>
        </div>
      </div>
    </div>
    <alert-modal v-if="showCheckListAlert" @ok="$emit('close')">
      <h1 slot="head">안내</h1>
      <h3 slot="body">추가 가능한 가전이 없습니다. <br>가전을 새로 등록하시거나 다른 그룹에 속한 <br>가전을 삭제해보시기 바랍니다.</h3>
    </alert-modal>
    <v-dialog :clickToClose="false"/>
  </div>
</template>
<script>
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'addAppliance',
  components: {AlertModal},
  props: ['magicmallId', 'groups'],
  data () {
    return {
      hdeviceList: {},
      checked: [],
      showCheckListAlert: ''
    }
  },
  created () {
    this.loading(true)
    this.getHdeviceList()
  },
  methods: {
    showHdeviceListAlert: function () {
      var count = 0
      for (var index in this.hdeviceList) {
        if (this.hdeviceList[index].groupId === 0) count++
      }
      this.loading(false)
      if (count > 0) this.showCheckListAlert = false
      else this.showCheckListAlert = true
    },
    getHdeviceList: function () {
      this.$http.post('/api/homedevice/list', {
        magicmallId: this.magicmallId,
        categCd: ['30'],
        superSurround: 'Y'
      })
      .then(response => {
        this.hdeviceList = response.data.body.list
        this.showHdeviceListAlert()
      })
      .catch(error => console.log(error))
    },
    addGroupHdeivce: function () {
      this.$emit('addGroupHdeivce', this.checked)
    }
  }
}
</script>
<style>
.popup.popup_add_appliance {
    max-height: 90vh;
    width: 306px;
}
@media all and (max-width: 320px) {
    .popup.popup_add_appliance {
        width: 270px;
    }
}
.popup.popup_add_appliance .popup_header {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
    background: #ffffff;
}
.popup.popup_add_appliance .popup_contents {
    padding-top: 46px;
    max-height: 90vh;
    text-align: left;
    /*padding-bottom: 55px;*/
    padding-bottom: 50px;
    overflow: auto;
    position: relative;
    z-index: 20;
  min-height:155px;
}
.popup_add_appliance li {
    height: 61px;
    padding: 0 15px;
    border-bottom: 1px solid #9a9a9a;
}

.popup_add_appliance .checkbox_circle {
    vertical-align: top;
    margin: 21px 15px 0 2px;
}

.popup_add_appliance img {
    width: 44px;
    font-size: 0;
    position: relative;
  top: 7px;
}

.popup_add_appliance li a {
    display: inline-block;
    padding: 11px 0 0 11px;
}
.popup_add_appliance a p {
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 170px;
}
@media all and (max-width: 320px) {
  .popup_add_appliance a p {
    max-width: 150px;
  }
}
@media all and (min-width: 400px) {
  .popup_add_appliance a p {
    max-width: 230px;
  }
}
.popup_add_appliance a p:first-child {
    color: #787878;
    line-height: 1.7rem;
    font-size: 1rem;
}

.popup_add_appliance a p:last-child {
    font-size: 1.5rem;
    line-height: 2.3rem;

}

.popup_btn.bottom_fixed {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: #ffffff;
}
</style>
