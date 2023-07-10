<template>
  <div class="header-container">
    <LogoImage />
    <MenuList />
    <div></div>
  </div>
</template>
<script setup>
import LogoImage from './LogoImage.vue';
import MenuList from './MenuList.vue';
</script>
<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #011026 0%, rgb(1 16 38 / 21%) 57%, rgb(1 16 38 / 33%) 77%, #011026 100%);
  box-shadow: inset 0 -50px 126px -2px rgb(0 112 244 / 31%);
}
</style>
