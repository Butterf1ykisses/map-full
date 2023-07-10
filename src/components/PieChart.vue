<template>
  <div id="pie-container"></div>
</template>
<script setup>
import { onMounted } from 'vue';

import * as echarts from 'echarts';

onMounted(() => {
  const myChart = echarts.init(document.getElementById('pie-container'));
  const option = {
    legend: {
      show: true,
      orient: 'vertical',
      left: 'right',
      align: 'left',
      top: 'center',
      data: ['Apple', 'Grapes', 'Pineapples', 'Oranges', 'Bananas'],
      formatter(name) {
        const { data } = option.series[0];
        let tarValue = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === name) {
            tarValue = data[i].value;
          }
        }
        return `${name}  ${tarValue}`;
      },
      icon: 'circle',
      textStyle: {
        color: 'inherit',
      },
    },
    title: {
      show: false,
    },
    tooltip: {
      show: false,
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: 'Apple',
          },
          {
            value: 310,
            name: 'Grapes',
          },
          {
            value: 234,
            name: 'Pineapples',
          },
          {
            value: 135,
            name: 'Oranges',
          },
          {
            value: 1548,
            name: 'Bananas',
          },
        ],
        label: {
          show: false,
        },
      },
    ],
  };
  myChart.setOption(option);
});
</script>
<style lang="less" scoped>
#pie-container {
  width: 100%;
  height: 100%;
}
</style>
