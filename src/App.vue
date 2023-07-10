<script setup>
import { RouterView } from 'vue-router';
import HeaderIndex from '@/components/Header/HeaderIndex.vue';
</script>

<template>
  <dv-full-screen-container class="main-container">
    <HeaderIndex />
    <RouterView
  /></dv-full-screen-container>
</template>
<style lang="less" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  color: #fff;
  background-color: #031226;
}
</style>
