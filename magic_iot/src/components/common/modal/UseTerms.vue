<template>
  <!-- 이용약관 -->
  <div class="popup_detail type2" style="background-color:white;">
    <div class="popup_detail_header" style="background: #585858;">
      <button class="sprite sprite_common sprite_back" @click="$emit('close')">뒤로</button>
      <h1>이용 약관</h1>
      <!-- //section_header -->
    </div>
    <section class="tab_use">
      <ul class="clearfix">
        <li :class="{focus: curTerms === '2'}"><p><a @click="setTermDetail('2')">서비스 이용약관</a></p></li>
        <li :class="{focus: curTerms === '3'}" class="last">
          <p><a @click="setTermDetail('3')">
            위치기반 서비스 및<br>개인정보 취급 방침 동의
          </a></p>
        </li>
      </ul>
    </section>
    <div class="popup_detail_contents">
      <section class="area_terms">
        <p class="set">{{termTitle}}</p>
        <p v-html="termDetail"/>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      termsList: {},
      termDetail: '',
      curTerms: ''
    }
  },
  created () {
    this.getTermAll()
  },
  computed: {
    termTitle: function () {
      if (this.curTerms === '2') return '서비스 이용약관'
      else if (this.curTerms === '3') return '개인정보 수집 및 이용동의'
    }
  },
  methods: {
    getTermAll: function () {
      this.$http.post('/api/term/all', {
        magicmallId: 'seokan@ubivelox.com'
      })
      .then(response => {
        this.termsList = response.data.body.list
        this.setTermDetail(this.termsList[0].termId)
        this.curTerms = this.termsList[0].termId
      })
      .catch(error => console.log(error))
    },
    setTermDetail: function (termId) {
      for (var index in this.termsList) {
        if (termId === this.termsList[index].termId) {
          this.curTerms = this.termsList[index].termId
          this.termDetail = this.termsList[index].termDetail
          this.termDetail = String(this.termDetail.replace(/\n/gim, '<br>'))
          break
        }
      }
    }
  }
}
</script>
<style>
.set {
  color:black;
  font-size: 1.3rem;
  text-align: left;
  margin-bottom: 10px;
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

  .popup_detail_header .sprite_back {
    position: absolute;
    top: 50%;
    margin-top: -8px;
    left: 15px;
  }
  .tab_use ul {
    border-bottom:1px solid #dcdcdc;
  }
  .tab_use ul li {
    font-weight: bold;
    float: left;
    width: 50%;
    text-align: center;
    height: 40px;
    position: relative;
  }
.tab_use ul li p:before {
  content: '';
  height: 100%;
  vertical-align: middle;
  display: inline-block;
}
  .tab_use ul li:after {
    content: '';
    height: 15px;
    width: 1px;
    position: absolute;
    top: 13px;
    right: 1px;
    background: #e7e7e7;
  }
  .tab_use ul li.last:after {
    width: 0;
  }
.tab_use ul li p {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: 40px;
}
  .tab_use ul li a {
    line-height: 17px;
    font-size: 1.1rem;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
  .tab_use ul li.focus a {
    color: #92592c;
  }

.tab_use ul li.focus p:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background: #92592c;
  width: 100%;
  height: 2px;
}
  .area_terms {
    padding: 15px;
    overflow-y: auto;
    padding-bottom: 55px;
  }
  .area_terms {
    font-weight: bold;
  }

</style>
