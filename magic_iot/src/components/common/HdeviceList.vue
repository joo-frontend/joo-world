<template>
  <div class="container" style="position: inherit;">
    <div class="content_iot">
      <div class="headline ly_line">
        <h2 class="title">IoT 정보 관리</h2>
        <a href="https://s3.ap-northeast-2.amazonaws.com/skmagic/index.html"><h2 class="btn btn_lg">퍼블리시 확인</h2></a>
      </div>
      <br><br>
      <div class="area_activate">
        <div class="box_img">
          <input type="text" v-model="userseq" size="30" placeholder="사용자seq">
          <input type="text" v-model="hdeviceSeq" size="30" placeholder="가전seq">
          <button class="btn btn_lg" @click="generateToken">토큰 발급</button>
        </div>
        <div class="box_img">
          <input type="text" v-model="magicId" size="30" placeholder="매직몰 아이디를 입력해주세요.">
          <button class="btn btn_lg" @click="getDeviceList">검색</button>
        </div>
      </div>

      <div class="ly_iot_main" v-if="deviceList.length != 0">
        <ul>
          <li v-for="device in deviceList.hdeviceList">
            <button @click="test(device)">{{device.categNm}} / {{device.nickNm}} / {{device.hdeviceSeq}}</button>
          </li>
        </ul>
      </div>
      <div class="ly_iot_confirm mrT120" v-if="deviceList.length === 0">
        <i class="icon_iot_confirm"></i>
        <div class="tx_iot_confirm ">
          <strong>등록된 <span>IoT 제품 내역</span>이 없습니다.</strong>
          <p>
            현재 SKMagic IoT App을 사용 중이라면, 간단한 휴대폰 인증을 해주세요.<br>
            인증 절차를 거쳐 매직몰에서도<br>
            IoT 관련 기능들을 손쉽게 이용할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hdeviceList',
  data () {
    return {
      showList: true,
      deviceList: {},
      userseq: '',
      hdeviceSeq: '',
      magicId: 'seokan@ubivelox.com',
      dummy: false
    }
  },
  methods: {
    getDeviceList: function () {
      this.loading(true)
      if (this.magicId !== '') {
        var url = this.dummy ? '/app/hdevice/list' : '/app/web/hdevice/list'
        this.$http.post(url, {
          magicmallId: this.magicId
        })
        .then(response => {
          this.loading(false)
          this.userseq = response.data.userSeq
          this.deviceList = response.data
        })
        .catch(error => {
          console.log(error)
        })
      } else {
        this.$toast('아이디를 입력해주세요.')
      }
    },
    test: function (device) {
      this.$http.defaults.headers.userToken = device.accessToken
      console.log(device.accessToken)
      // localStorage.setItem("", device.accessToken)
      location.href = '/app/auth?token=' + device.accessToken
      /*
      this.$http.post('http://218.55.23.179:8088/app/auth', {
        token: device.accessToken
      })
      .then(response =>
        console.log(response)
      )
      .catch(error => console.log(error))
      */
    },
    generateToken: function () {
      this.$http.get('/app/generateToken?userSeq=' + this.userseq + '&hdeviceSeq=' + this.hdeviceSeq, {})
      .then(response => {
        this.$toast('토큰 발급 성공')
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style scoped>
.container {
  width: auto;
  height: auto;
}
.headline {
  width: 100%;
  height: 80px;
}
.container .title {
  text-align: center;
  margin: 30px;
  font-weight: bold;
}
.ly_iot_main {
  width: 100%;
  height: auto;
}
li {
  width: 300px;
  height: 90px;
  text-align: center;
  margin: 10px auto auto;
  line-height: 90px;
  background-color: #ffcdd2;
  font-weight: bold;
  font-size: 12px;
}
</style>
