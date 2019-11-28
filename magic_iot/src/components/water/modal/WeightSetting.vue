<template>
  <div class="popup_dim_all">
    <div class="popup popup_all">
        <div class="popup_header">
          <h1>체중 입력</h1>
          <div class="close_popup">
              <button @click="$emit('close')"><span class="sprite sprite_common sprite_popup_close"></span>
              </button>
          </div>
        </div>
        <div class="popup_contents">
            <div class="area_weight_input">
              <input type="number" class="text_box text_box_md text_box_dark text_box_block" v-model="modWeight">
            </div>
            <button class="btn btn_lg" @click="setWeight" :disabled="modWeight === '' || parseInt(modWeight) <= 0 || modWeight === null" :class="classObj">확인</button>
            <ul class="area_contents_desc">
            <li>체중을 입력하시면 하루 동안 마셔야 하는 물의 양을 측정해 드립니다.</li>
            <li>체중을 입력하지 않으실 경우 하루 물 섭취 권장량이 목표량으로 설정됩니다. (성인 기준)</li>
            </ul>
        </div>
    </div>
</div>
</template>l

<script>
export default {
  name: 'weightSetting',
  props: ['deviceId', 'weight'],
  data () {
    return {
      modWeight: this.weight
    }
  },
  watch: {
    modWeight: function (val) {
      if (val.length > 3) {
        this.modWeight = this.modWeight.substr(0, 3)
      }
    }
  },
  computed: {
    classObj: function () {
      if (parseInt(this.modWeight) <= 0 || this.modWeight === '' || this.modWeight === null) {
        return {
          btn_grey: true,
          btn_block: true
        }
      } else if (parseInt(this.modWeight) >= 0 || this.modWeight !== '') {
        return {
          btn_skyblue: true,
          btn_block: true
        }
      }
    }
  },
  methods: {
    setWeight: function () {
      this.$http.post('/api/water/intake/weight', {
        hdeviceSeq: this.deviceId,
        weight: this.modWeight
      })
      .then(response => {
        this.$emit('setWeight')
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    }
  }
}
</script>

<style scoped>
/* 팝업 체중 입력 */
.area_contents_desc {
    padding-top: 18px;
}
.area_contents_desc li {
    text-align: left;
    font-size: 1.3rem;
    line-height: 20px;
    position: relative;
    padding-left: 11px;
    width: 90%;
}
.area_contents_desc li:before {
    content: '*';
    position: absolute;
    top: 0;
    left: 0;
}
.popup_contents .area_weight_input {
    position: relative;
}
.popup_contents .area_weight_input:before {
    content: 'kg';
    font-size: 1.5rem;
    position: absolute;
    top: 11px;
    right: 10px;
    color: #2ba2f0;
}
.area_weight_input .text_box {
    font-size: 1.6rem;
}
</style>
