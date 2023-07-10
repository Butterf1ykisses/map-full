<template>
  <div class="horizontal-bar-container">
    <div class="horizontal-bar-list">
      <div v-for="(item, index) in filterList" :key="index" class="horizontal-bar">
        <div class="bar-progress" :style="{ width: item.percent }">
          <div class="bar-progress-top">
            <span class="name">12</span>
            <span>{{ item.number }}</span>
          </div>
          <div class="bar-progress-bot"></div>
        </div>
      </div>
    </div>
    <div class="bar-change">
      <div class="page-change"></div>
      <div class="page-change"></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const list = [10, 20, 30, 40];
const max = computed(() => Math.max(...list));
const filterList = computed(() => {
  return list.map((item) => {
    return {
      number: item,
      percent: `${(item / max.value).toFixed(4) * 100}%`,
    };
  });
});
</script>
<style lang="less" scoped>
.horizontal-bar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .bar-change {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    .page-change {
      width: 40px;
      height: 24px;
      margin: 0 8px;
      background: linear-gradient(180deg, #3a72ce 0%, #113f78 100%);
      border-radius: 3px;
      box-shadow: inset 0 0 2px 0 rgb(71 142 255 / 41%);
    }
  }
}

.horizontal-bar-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .horizontal-bar {
    width: 100%;

    .bar-progress {
      display: flex;
      flex-direction: column;

      .bar-progress-top {
        display: flex;
        justify-content: space-between;

        span {
          font-size: 18px;
        }

        .name {
          font-size: 20px;
        }
      }

      .bar-progress-bot {
        width: 100%;
        height: 10px;
        background: linear-gradient(180deg, #31fbfb 0%, #008df4 100%);
        border-radius: 19px;
      }
    }
  }
}
</style>
