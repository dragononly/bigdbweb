<template>
  <div
    style="
      background-color: #fff;
      padding: 20px 150px 20px 20px;
      height: calc(94vh);
    "
  >
    <div style="font-size: 20px; color: #124e78; margin-bottom: 15px">
      <a-tag color="#55acee" style="font-size: 20px; padding: 10px">
        <template #icon>
          <hdd-outlined />
        </template>
        服务器
      </a-tag>
    </div>
    <div>
      <div style="font-size: 20px; margin-bottom: 5px">数据库每秒运算</div>
      <a-progress
        :stroke-color="{
          from: 'gold',
          to: '#108ee9',
        }"
        :percent="58"
        status="active"
        :strokeWidth="30"
        :format="(percent) => `${percent} 万`"
      />
    </div>
    <div style="margin-top: 10px">
      <div style="font-size: 20px; margin-bottom: 5px">
        cpu核心数/型号/参数&nbsp{{ data.a.model }}
      </div>
      <a-progress
        :stroke-color="{
          from: 'gold',
          to: '#108ee9',
        }"
        :percent="data.a.countCPUs"
        status="active"
        :strokeWidth="30"
        :format="(percent) => `${percent} 核`"
      />
    </div>
    <a-row style="margin-top: 35px; text-align: center">
      <a-col :span="6">
        <div style="margin-bottom: 15px">CPU占用率</div>
        <a-progress
          type="circle"
          :strokeWidth="7"
          :width="250"
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
          :percent="Math.trunc(data.a.cpuUsage * 100)"
        />
      </a-col>
      <a-col :span="6"
        ><div style="margin-bottom: 15px">
          服务器内存
          <span style="color: #17af66; font-weight: 550"
            >{{ Math.trunc(data.a.totalMem) }}MB</span
          >
        </div>
        <a-progress
          type="circle"
          :strokeWidth="7"
          :width="250"
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
          :percent="
            Math.trunc(
              ((data.a.totalMem - data.a.freeMem) / data.a.totalMem) * 100
            )
          "
      /></a-col>

      <a-col :span="6">
        <div style="margin-bottom: 15px">
          服务器启动时间{{ Math.trunc(data.a.sysUptime / 3600) }}小时
        </div>
        <a-progress
          :strokeWidth="7"
          :width="250"
          type="circle"
          status="active"
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
          :percent="(data.a.sysUptime / 3600 / 365).toString().substr(0, 4)"
          :format="(percent) => `${percent} 天`"
        />
      </a-col>
      <a-col :span="6">
        <div style="margin-bottom: 15px">数据库IO压力</div>
        <a-progress
          type="circle"
          :strokeWidth="7"
          :width="250"
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
          :percent="67"
      /></a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { htmlurl } from "@/config/http/env";
import { HddOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import { reactive } from "vue";
const data = reactive({
  a: {
    countCPUs: 0,
    cpuUsage: 0,
    model: "",
    freeMem: 0,
    speed: 0,
    sysUptime: 0,
    totalMem: 0,
  },
});
let time: any;
setTimeout(async () => {
  const cab2 = await axios.get(htmlurl + "cpu");
  data.a = cab2.data;
}, 200);
clearInterval(time);
time = setInterval(async () => {
  const cab = await axios.get(htmlurl + "cpu");

  data.a = cab.data;
}, 1000);

// console.log(cab);
// countCPUs: 20
// cpuUsage: 0.07771765863256275
// freeMem: 4926.07421875
// gpuUsage: 0
// message: "jsonok"
// model: "12th Gen Intel(R) Core(TM) i7-12700K"
// speed: 3610
// sysUptime: 270538
// totalMem: 16121.7109375
</script>


