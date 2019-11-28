<template>
  <div class="wrap_contents_area has_bottom_fix_btn">
    <!-- section_info -->
    <section class="section_user_device_img">
      <div class="area_product">
        <div class="img"><img style="height:100%;":src="deviceInfo.productInfo.imgPath"></div>
        <p>{{ deviceInfo.nicknm }}</p>
      </div>
    </section>
    <!-- //section_info -->

    <!-- section_user -->
    <section class="section_user">
      <div class="user_title">사용자 {{ userList.length }}명</div>
      <ul class="user_list">
        <li class="user_default" v-for="user in userList">
          <div class="img"></div>
          <div v-if="user.masterYn === 'Y'" class="budge"></div>
          <p>{{ user.name }}</p>
          <p v-if="user.name !== null">{{ user.cpNo }}</p>
          <p v-if="user.name === null" style="margin-top: 4%">{{ user.cpNo }}</p>
          <button v-if="masterUserCheck && user.masterYn === 'N'" class="btn btn_md btn_dark_gray" @click="showDelUserModal(user.name, user.userSeq)">연결해제</button>
        </li>
      </ul>
    </section>

    <section class="section_btn bottom_btn bottom_fixed" v-if="masterUserCheck">
      <div class="area_btn">
        <button class="btn btn_lg btn_skyblue btn_block" @click="checkUser">사용자 추가</button>
      </div>
    </section>

    <popup-modal v-if="delUserModal" @close="delUserModal = false" @ok="delUser">
      <h3 slot="body">정말로 {{ delUserName }} 가전등록을 해제하시겠습니까?</h3>
    </popup-modal>
    <joinUser-modal v-if="joinUserModal" v-on:addUser="addUser" v-on:closeJoinModal="joinUserModal = false" :userList="userList" :deviceId="deviceId"></joinUser-modal>
  </div>
</template>

<script>
import JoinUserModal from '@/components/common/modal/JoinUser'
import PopupModal from '@/components/common/modal/Popup'

export default {
  name: 'userList',
  props: ['userId', 'deviceId', 'deviceInfo'],
  data () {
    return {
      subUserSeq: '',
      delUserName: '',
      delUserSeq: '',
      userList: [],
      joinUserModal: false,
      delUserModal: false
    }
  },
  components: { JoinUserModal, PopupModal },
  created () {
    this.$emit('setTabMenu')
    this.loading(true)
    this.getUserList()
  },
  computed: {
    masterUserCheck: function () {
      for (var index in this.userList) {
        if (this.userList[index].masterYn === 'Y') {
          if (String(this.userList[index].userSeq) === String(this.userId)) {
            return true
          } else {
            return false
          }
        }
      }
    }
  },
  methods: {
    getUserList: function () {
      this.$http.post('/api/homedevice/userlist', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.userList = response.data.body.list
        this.loading(false)
      })
      .catch(error => console.log(error))
    },
    checkUser: function () {
      if (this.userList.length >= 5) this.$toast('사용자를 5명까지 등록하실 수 있습니다.')
      else this.joinUserModal = true
    },
    addUser: function (check) {
      if (check) {
        this.joinUserModal = false
        this.loading(true)
        this.getUserList()
      }
    },
    delUser: function () {
      this.delUserModal = false
      this.loading(true)
      this.$http.post('/api/homedevice/deleteuser', {
        hdeviceSeq: this.deviceId,
        userSeq: this.delUserSeq
      })
      .then(response => {
        if (response.data.header.resultCode === '20000') this.$toast('가전등록을 해제하였습니다.')
        this.getUserList()
      })
      .catch(error => console.log(error))
    },
    showDelUserModal: function (name, seq) {
      if (name === null) {
        this.delUserName = name
      } else {
        this.delUserName = name + '의'
      }
      this.delUserSeq = seq
      this.delUserModal = true
    }
  }
}
</script>

<style>
/* ui.page.css : 공통 사용자 관리 */
.section_user_device_img {
    border-bottom: #e5e5e5 1px solid;
    height: 112px;
    padding-top: 9px;
    z-index: 100;
}

.section_user_device_img .area_product {
    text-align: center;
}

.section_user_device_img .area_product .img {
    /*width: 53px;*/
    height: 74px;
    margin: 0 auto;
    /*background: url('/images/page/img_purify.png') 0 0 no-repeat;*/
    -webkit-background-size: 53px;
    background-size: 53px;
}
/*@media all and (max-width: 320px) {
    .section_user_device_img .area_product .img {
        width: 43px;
        height: 61px;
        -webkit-background-size: 43px;
        background-size: 43px;
    }
}*/

/* 사용자 관리 가전 명 */
.section_user_device_img .area_product p {
    font-size: 1.5rem;
    line-height: 2.0rem;
}

.section_user .user_title {
    padding-left: 15px;
    line-height: 3rem;
    font-size: 1.2rem;
    border-bottom: #e5e5e5 1px solid;
    font-weight: bold;
    background: #fcfcfc;
}

.section_user li {
    border-bottom: #f0f0f0 1px solid;
    padding: 20px 0 0 68px;
    height: 59px;
    position: relative;
}

.section_user li.user_default {
    padding: 12px 0 0 68px;
}

.section_user li .img {
    position: absolute;
    top: 9px;
    left: 15px;
    width: 40px;
    height: 41px;
    background: url('/images/common/sprite_common.png') -100px -25px no-repeat;
    background-size: 250px;
}
.section_user li .budge {
    position: absolute;
    top: 7px;
    left: 43px;
    width: 18px;
    height: 18px;
    background: url('/images/common/sprite_common.png') -150px -25px no-repeat;
    background-size: 250px;
}

.section_user li p {
    font-size: 1.3rem;
    line-height: 1.8rem;
}

.section_user li button {
    position: absolute;
    /*width: 80px;*/
    top: 12px;
    right: 11px;
}
</style>
