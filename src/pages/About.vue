<template>
  <div>
    <gc-spread-sheets
      :hostClass="hostClass"
      @workbookInitialized="initWorkbook"
    >
    </gc-spread-sheets>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-vue';

export default defineComponent({
  name: 'index',
  setup() {
    const hostClass = ref('spread-host');
    const initWorkbook = (spread: GC.Spread.Sheets.Workbook) => {
      let worksheet = spread.getActiveSheet();
      worksheet.setValue(0, 0, 'grapecity');
    };
    return {
      hostClass,
      initWorkbook,
    };
  },
});
</script>

<style>
.spread-host {
  width: 100%;
  height: 98vh;
}
</style>