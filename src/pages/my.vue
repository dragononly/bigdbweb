<template>
  <div class="box">
    <layout />
    <div class="c1">
      <!-- <van-image
        style="border: 1px solid #red"
        round
        width="7rem"
        height="7rem"
        :src="myGlobal.Headimgurl"
      /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import layout from './layout.vue';
import { myGlobal } from '@/data/g';
</script>
<style scoped>
.c1 {
  width: 90%;
  margin: auto;
  margin-top: 1rem;
}
.box {
  padding-top: 10rpx;
}
.c2 {
  height: 12rem;
  width: 100%;
  background-color: #1fc8db;
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
  color: white;
  opacity: 0.95;
  text-align: center;
  margin: auto;
  color: #f3f3f3;
  font-size: 1.2rem;
  font-weight: 550;
  border-radius: 5px;
  margin-top: 0.5rem;
}
.c21 {
  width: 99%;
  background: #fff;
  height: 11.6rem;
  border-radius: 2px;
  padding-left: 1rem;
}
</style>

