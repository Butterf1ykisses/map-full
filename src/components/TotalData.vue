<!--
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-10 17:36:32
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:36:39
 * @Description: 数据总计
-->
<template>
  <div class="total-data">
    <div class="total-first-card">
      <span>{{ props.title }} </span>
      <img src="@/assets/images/frameBg.png" alt="" />
    </div>
    <div v-for="(item, index) in smallList" :key="index" class="total-list-card">
      <div class="list-card-top">
        {{ item.number }}<span>{{ props.unit }}</span>
      </div>
      <div v-if="item.title" class="list-card-bot">{{ item.title }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  bigWith: {
    type: String,
    default: '220px',
  },
  smallWith: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '90px',
  },
  smallList: {
    type: Array,
    default: () => [],
  },
  // 单位
  unit: {
    type: String,
    default: '个',
  },
});
const cardheight = computed(() => props.height);
const bigwith = computed(() => props.bigWith);
</script>
<style lang="less" scoped>
.total-data {
  display: flex;
  flex: 1;
  flex-shrink: 0;
  height: v-bind(cardheight);
  background: linear-gradient(270deg, #5ba6ff 0%, #5ba6ff 2%, rgb(41 147 251 / 0%) 100%);

  .total-first-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: v-bind(bigwith);
    height: 100%;
    background: linear-gradient(0deg, rgb(91 66 255 / 45%) 0%, #06f 100%);

    span {
      margin-top: 16px;
      font-size: 26px;
    }

    img {
      width: 130px;
      height: 28px;
    }
  }

  .total-list-card {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 26px;

    .list-card-top {
      flex-shrink: 1;

      span {
        margin-left: 5px;
        font-size: 18px;
        color: #96ccf3;
      }
    }
  }
}
</style>
