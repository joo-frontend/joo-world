<template>
  <div class="popup_dim_all">
    <div class="popup popup_all popup_group">
      <div class="popup_header">
        <h1>{{typeText}}그룹명을 입력해주세요</h1>
        <div class="close_popup">
          <button><span class="sprite sprite_common sprite_popup_close" @click="$emit('close')"></span>
          </button>
        </div>
      </div>
      <div class="popup_contents">
        <div class="box_group_name">
        <input type="text" class="text_box text_box_md text_box_dark text_box_block" v-model="name" placeholder="최대 10자까지 입력 가능">
          <button v-show="name.length !== 0" @click="delName"></button>
        </div>
        <button class="btn btn_lg" :class="btnOgj" :disabled="name.length === 0" @click="setGroupName">{{btnTxt}}완료</button>
      </div>
    </div>
    <v-dialog :clickToClose="false"/>
  </div>
</template>
<script>
export default {
  name: 'modGroupName',
  props: ['type', 'groups'],
  data () {
    return {
      name: '',
      btnTxt: '입력'
    }
  },
  created () {
    if (typeof this.groups !== 'undefined') {
      this.name = this.groups.groupName
    }
  },
  watch: {
    name: function (val) {
      if (val.length === 9) {
        this.name = this.name.substring(0, 10)
      } else if (val.length > 10) {
        this.name = this.name.substring(0, 10)
      }
    }
  },
  computed: {
    typeText: function () {
      // M:수정, I:생성
      if (this.type === 'M') {
        this.btnTxt = '수정'
        return '수정할 '
      } else return ''
    },
    btnOgj: function () {
      var obj = {
        btn_skyblue: false,
        btn_block: true
      }
      if (this.name.length > 0) obj.btn_skyblue = true
      return obj
    }
  },
  methods: {
    setGroupName: function () {
      if (this.type === 'I') this.$emit('addGroupHdeivce', this.name)
      else this.$emit('modGroupName', this.name)
    },
    delName: function () {
      this.name = ''
    }
  }
}
</script>
<style>
/*.popup.popup_group h1 {
    margin-top: 75px;
}*/

@media all and (min-width: 400px) {
    .popup.popup_group .popup_contents {
        width: 336px;
    }
}
.popup.popup_group .box_group_name {
  position: relative;

}
.popup.popup_group .box_group_name button {
  position: absolute;
  top: 13px;
  right: 15px;
  background: url('/images/page/popup_input.png') 0 0 no-repeat;
  width: 15px;
  height: 15px;
  -webkit-background-size: 15px;
  background-size: 15px;
}
</style>
