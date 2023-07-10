<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-10 17:36:32
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:36:39
 * @Description: 小名称条
-->
<template>
  <div class="small-bar-container">
    <div class="title-icon"></div>
    <div class="title-name">{{ props.title }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '链主企业（31家）',
  },
});
</script>
<style lang="less" scoped>
.small-bar-container {
  position: relative;
  display: flex;
  flex: 1;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 9px 20px;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(270deg, rgb(25 1 139 243 0.47) 0%, rgb(47 137 255 / 18%) 100%);

  .title-icon {
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 20px;
    background-color: #008df4;
    transform: translate(0, -50%);
  }
}
</style>
