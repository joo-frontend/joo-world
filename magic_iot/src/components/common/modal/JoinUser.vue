<template>
  <div class="popup_dim_all">
    <div class="popup popup_all popup_user_join">
      <div class="popup_header">
        <h1>사용자 추가</h1>
        <div class="close_popup">
          <button @click="close"><span class="sprite sprite_common sprite_popup_close"></span>
          </button>
        </div>
      </div>
      <div class="popup_contents">
        <p style="font-weight:normal;">등록할 사용자 휴대폰 번호를 <br>입력해 주세요.</p>
        <input type="number" class="text_box text_box_md text_box_dark text_box_block" v-model="cpNo" placeholder="휴대폰 번호">
        <button class="btn btn_lg" :class="classObj" :disabled="cpNo === ''" @click="addUser">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'joinUser',
  props: ['deviceId', 'userList'],
  data () {
    return {
      cpNo: ''
    }
  },
  watch: {
    cpNo: function (val) {
      if (val.length > 20) {
        this.cpNo = this.cpNo.substr(0, 20)
      }
    }
  },
  computed: {
    classObj: function () {
      if (this.cpNo === '') {
        return {
          btn_grey: true,
          btn_block: true
        }
      } else if (this.cpNo !== '') {
        return {
          btn_skyblue: true,
          btn_block: true
        }
      }
    }
  },
  methods: {
    addUser: function () {
      var userY
      for (var index in this.userList) {
        if (this.userList[index].cpNo.replace(/-/g, '') === this.cpNo) {
          userY = true
          break
        }
      }
      if (userY) {
        this.$toast('이미 추가된 사용자번호 입니다.')
      } else {
        this.loading(true)
        this.$http.post('/api/homedevice/adduser', {
          cpNo: this.cpNo,
          hdeviceSeq: this.deviceId
        })
        .then(response => {
          this.loading(false)
          if (response.data.header.resultCode === '20000') {
            this.$emit('addUser', true)
          } else {
            this.$toast(response.data.header.resultMsg)
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    close: function () {
      this.joinPhone = ''
      this.$emit('closeJoinModal')
    }
  }
}
</script>

<style>
/*사용자추가 팝업*/
.popup_user_join .popup_contents p {
    font-size: 1.5rem;
    line-height: 2.1rem;
    margin-bottom: 27px;
}
</style>
