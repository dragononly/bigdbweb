<template>
  <div id="nav"></div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
const router = useRouter();
import test from './test.vue';
import { myGlobal } from '@/data/g';
import { useRouter } from 'vue-router';
import { layout } from '@/data/level1/layout';
import { onChange } from '@/event/level1/layoutE';
const clickLeft = () => {
  router.push('/');
};
const onClickRight = () => {
  router.push('my');
};
</script>

<style scoped>
</style>

