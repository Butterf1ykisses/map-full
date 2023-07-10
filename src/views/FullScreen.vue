<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-04 09:27:18
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 16:26:50
 * @Description:
-->
<template>
  <dv-full-screen-container class="fullScreen"
    ><dv-flyline-chart-enhanced dev :config="config" class="image-style"
  /></dv-full-screen-container>
</template>

<script setup>
import mapImg from '@/assets/images/map.jpg';
import iconPng from '@/assets/images/icon.png';

const config = {
  points: [
    {
      name: '郑州',
      coordinate: [0.48, 0.35],
      icon: {
        show: true,
        src: iconPng,
        width: 80,
        height: 80,
      },
      text: {
        show: false,
      },
    },
    {
      name: '新乡',
      coordinate: [0.52, 0.23],
    },
    {
      name: '焦作',
      coordinate: [0.43, 0.29],
    },
  ],
  lines: [
    {
      source: '新乡',
      target: '郑州',
      color: 'transparent',
    },
  ],
  text: {
    show: true,
  },
  bgImgSrc: mapImg,
};
</script>

<style lang="less">
.fullScreen {
  background-color: black;

  .image-style {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
}
</style>
s
