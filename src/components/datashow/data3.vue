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
          <codepen-outlined />
        </template>
        全所
      </a-tag>
    </div>
    <div v-for="(a, b) in data.departments" :key="b" style="">
      <div style="font-size: 20px; margin-bottom: 5px; color: #124e78">
        {{ a }}
      </div>
      <a-progress
        :stroke-color="{
          from: '#108ee9',
          to: '#87d068',
        }"
        :percent="b + 10 * 5"
        status="active"
        :strokeWidth="30"
        :format="(percent) => `${percent * 10} 件`"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { CodepenOutlined } from "@ant-design/icons-vue";

const data = reactive({
  departments: [
    " 第一审计总部",
    " 第二审计总部",
    " 第三审计总部",
    " 第四审计总部",
    " 第五审计总部",
    " 第六审计总部",
    " 第七审计总部",
    " 第八审计总部",
    " 第九审计总部",
    " 第十审计总部",
  ],
});
</script>


