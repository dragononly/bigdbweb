<template>
  <div>11222</div>
</template>

<script  lang="ts">
import { defineComponent, toRefs } from 'vue';
import { myGlobal } from '@/data/g';
export default defineComponent({
  data() {
    return { ...toRefs(myGlobal) };
  },
  setup() {},
});
</script>