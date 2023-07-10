<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-10 17:36:32
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:36:39
 * @Description: 产业链
-->
<template>
  <div class="industry-chain">
    <TitleBar title="产业链" />
    <div class="top-list">
      <TotalData title="GDP" :small-list="firstList" unit="亿" />
      <TotalData title="名营经济增加值" :small-list="secondList" unit="亿" />
    </div>
    <div class="bot-list">
      <TotalData title="重大项目" :small-list="threeList" unit="个" />
    </div>
    <div class="small-title-list">
      <SmallTitleBar />
      <SmallTitleBar title="四上企业（256）家" />
    </div>
    <div class="chart-box">
      <div class="chart-card">
        <HorizontalBarChart />
      </div>
      <div class="chart-card">
        <PieChart />
      </div>
    </div>
  </div>
</template>
<script setup>
const firstList = [
  {
    number: '717.11',
  },
];
// 第二行
const secondList = [
  {
    number: '412.30',
  },
];
const threeList = [
  {
    title: '新招引重大项目',
    number: '64',
  },
  {
    title: '高能级项目',
    number: '10',
  },
];
</script>
<style lang="less" scoped>
.industry-chain {
  display: flex;
  flex-direction: column;

  .top-list {
    display: flex;
  }

  .small-title-list {
    display: flex;
  }

  .chart-box {
    display: flex;
    height: 265px;
    background: linear-gradient(180deg, rgb(0 6 63 136 0) 0%, rgb(3 112 214 / 25%) 100%);

    .chart-card {
      flex: 1;
      flex-shrink: 0;
      height: 100%;
      padding: 10px 20px;
    }
  }
}
</style>
