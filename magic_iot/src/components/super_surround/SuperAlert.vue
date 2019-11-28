<template>
  <div class="popup_dim">
    <div class="popup popup_super_alert" style="width: 306px;">
      <div class="popup_header">
        <h1>Super Surround 기능 소개</h1>
      </div>
      <div class="popup_contents">
        <ul>
          <li><span>소개</span>
            <p>Super Surround 기능은 2개 이상의 동일한 기기를 묶어서 하나의 그룹으로 만드는 것 입니다.<br>
              그룹이 된 기기는 모두 동일한 상태로 동작하게 되며 사용도중 특정 가전에서 상태가 변경이 된 경우 나머지 가전도 따라서 상태가 자동으로 전환하게 됩니다.
            </p>
          </li>
          <li><span>관리</span>
            <p>그룹을 선택하여 그룹관리 화면으로 이동하시면 그룹삭제 및 그룹에 소속된 기기 별 삭제가 가능합니다.</p>
          </li>
        </ul>
      </div>
      <div class="popup_btn">
        <div class="btn_inline">
          <button class="btn btn_lg_timeSetting btn_skyblue" @click="$emit('ok')">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .popup.popup_super_alert .popup_contents {
    padding: 0 25px 27px;
  }

  .popup.popup_super_alert ul {
    padding-top: 10px;
  }

  .popup.popup_super_alert ul li {
    text-align: left;
    padding-top: 15px;
  }

  .popup.popup_super_alert ul li span {
    padding-left: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    position: relative;
  }

  .popup.popup_super_alert ul li span:before {
    content: '';
    background: url('/images/common/sprite_steam_oven.png') -225px -25px no-repeat;
    width: 4px;
    height: 4px;
    -webkit-background-size: 250px;
    background-size: 250px;
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 0;
  }

  .popup.popup_super_alert ul li p {
    padding-top: 10px;
  }
  .popup.popup_super_alert .btn_inline .btn:first-child {
    float: none;
  }
</style>
