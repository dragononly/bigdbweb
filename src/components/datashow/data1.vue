<template>
  <div
    style="
      background-color: #fff;
      padding: 20px 150px 20px 20px;
      height: calc(94vh);
      color: #124e78;
      font-weight: 500;
    "
  >
    <div style="font-size: 20px; color: #124e78; margin-bottom: 15px">
      <a-tag color="#55acee" style="font-size: 20px; padding: 10px">
        <template #icon>
          <codepen-outlined />
        </template>
        全所
      </a-tag>
    </div>
    <div style="font-size: 17px; margin-bottom: 5px; color: #124e78">
      完成总数
    </div>
    <a-progress
      :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
      :percent="70"
      status="active"
      :strokeWidth="30"
      :format="(percent) => `${percent * 10} 件`"
    />
    <div style="font-size: 15px; margin-top: 20px; margin-bottom: 5px">
      本月完成
    </div>
    <a-progress
      :stroke-color="{
        from: '#108ee9',
        to: 'gold',
      }"
      :percent="30"
      status="active"
      :strokeWidth="30"
      :format="(percent) => `${percent * 10} 件`"
    />
    <div style="font-size: 13px; margin-top: 20px; margin-bottom: 5px">
      本周完成
    </div>
    <a-progress
      :stroke-color="{
        from: '#108ee9',
        to: 'gold',
      }"
      :percent="10"
      status="active"
      :strokeWidth="30"
      :format="(percent) => `${percent * 10} 件`"
    />
    <div
      style="
        font-size: 19px;
        margin-top: 20px;
        margin-bottom: 15px;
        color: #2f9fc7;
        font-weight: 500;
      "
    >
      数据处理工时
    </div>
    <a-progress
      type="circle"
      :strokeWidth="5"
      :width="350"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="90"
      :format="(percent) => `${percent * 10} 小时`"
    />
  </div>
</template>
<script setup lang="ts">
import { CodepenOutlined } from "@ant-design/icons-vue";
</script>


