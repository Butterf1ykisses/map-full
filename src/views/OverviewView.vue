<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-04 09:27:18
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:44:15
 * @Description:
-->
<template>
  <div class="overview-container">
    <div class="overview-left">
      <IndustryChain />
      <InnovationChain />
    </div>
    <div class="overview-mid">
      <MapStatistics />
    </div>
    <div class="overview-right"><CapitalChain /> <TalentChain /></div>
  </div>
</template>

<script setup>
import IndustryChain from '@/components/Overview/IndustryChain.vue';
import InnovationChain from '@/components/Overview/InnovationChain.vue';
import CapitalChain from '@/components/Overview/CapitalChain.vue';
import TalentChain from '@/components/Overview/TalentChain.vue';
import MapStatistics from '@/components/Overview/MapStatistics.vue';
</script>

<style lang="less" scoped>
.overview-container {
  display: flex;
  flex: 1;
  padding: 30px;

  .overview-left,
  .overview-right {
    display: flex;
    flex-direction: column;
    width: 840px;
    height: 100%;
  }

  .overview-mid {
    flex: 1;
    height: 100%;
  }
}
</style>
s
