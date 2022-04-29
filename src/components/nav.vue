<template>
  <div>
    <van-nav-bar
      :title="nav.name"
      left-text="返回"
      right-text="退出"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const nav = reactive({
  name: "",
});
if (!sessionStorage.eid) {
  sessionStorage.clear();
  router.push("/");
}
nav.name = sessionStorage.user;
const onClickLeft = () => {
  router.back();
};
const onClickRight = () => {
  sessionStorage.clear();
  router.push("/");
};
</script>
