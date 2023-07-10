<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-10 16:48:44
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:06:20
 * @Description:
-->
<template>
  <ul class="menu-container">
    <li v-for="(item, index) in menuList" :key="index" @click="goPath(item)">{{ item.name }}</li>
  </ul>
</template>
<script setup>
import { ref } from 'vue';

const menuList = ref([
  {
    name: '总览',
    isOpen: true,
    path: '/',
  },
  {
    name: '产业招商',
  },
  {
    name: '项目促建',
  },
  {
    name: '企业服务',
  },
  {
    name: '风险预警',
  },
]);
const goPath = (item) => {
  console.log(item);
};
</script>
<style lang="less" scoped>
.menu-container {
  display: flex;
  align-items: center;
  height: 85px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 216px;
    height: 100%;
    overflow: hidden;
    font-size: 30px;
    font-weight: bold;
    background-image: url("@/assets/images/menuBg.png");
  }
}
</style>
