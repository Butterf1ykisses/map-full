<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-10 17:36:32
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:36:39
 * @Description: 名称条
-->
<template>
  <div class="bar-container">
    <img src="@/assets/images/titleBarIcon.png" alt="" />
    <div class="title-name">{{ props.title }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '产业链',
  },
});
</script>
<style lang="less" scoped>
.bar-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 32px;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 15px;
    content: '';
    background: linear-gradient(90deg, rgb(25 139 243 / 80%) 3%, rgb(0 62 118 / 0%) 100%);
    border-radius: 15px;
    transform: translate(0, -50%);
  }

  .title-name {
    position: relative;
    font-size: 28px;
    font-weight: bold;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 146px;
      height: 2px;
      content: '';
      background: #00a3ff;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
