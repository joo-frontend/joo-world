<template>
  <div class="popup_dim">
    <div class="popupScroll popup_list" style="width: 306px;height: 480px;">
        <div class="popup_contents">
          <ul v-if="type === 'A'">
              <li v-for="n in 8">{{ n+2 | numberFormat }}일<input type="radio" class="input_radio" :name="bindName" :value="n+2" :checked="n === (day)-2" @click="setRangeTimeDay"> </li>
          </ul>
          <ul v-else>
              <li v-for="n in 180" v-if="n >= 30 && n%10 === 0">{{ n }}분<input type="radio" class="input_radio" :name="bindName" :value="n" :checked="n === min" @click="setRangeTimeDay"> </li>
          </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'settingTime',
  props: ['type', 'day', 'min'],
  filters: {
    numberFormat: function (val) {
      if (val < 10) return '0' + val
      else return val
    }
  },
  computed: {
    bindName: function () {
      if (this.type === 'A') return 'notUsedSetDay'
      else return 'conUsedSetMin'
    }
  },
  methods: {
    setRangeTimeDay: function () {
      if (this.type === 'A') {
        this.$emit('setRangePush', event.target.value)
      } else {
        this.$emit('setRangePush', event.target.value)
      }
    }
  }
}
</script>
<style>
.popupScroll {
  background: #fff;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: auto;
}
.popup_list .popup_contents li {
  font-size: 1.9rem;
  height: 60px;
  border-bottom: 1px solid #eeeeee;
  line-height: 59px;
  text-align: left;
  position: relative;
  padding-left: 20px;
}
.popup_list .popup_contents li input {
  margin: 0 17px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10px;
}
</style>
