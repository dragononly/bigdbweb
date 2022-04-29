<template>
  <div>
    <a-page-header
      style="
        border: 1px solid rgb(235, 237, 240);
        background: #ececec;
        margin-top: -10px;
      "
      class="demo-page-header"
      :title="show.excelName"
      sub-title=""
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-input v-model:value="show.page" placeholder="" style="width: 50px" />
        <a-button @click="go_page()" type="primary">前往</a-button>
        <a-button @click="myexport" type="primary">导出</a-button>
      </template>
    </a-page-header>
  </div>
  <div
    style="position: fixed; z-index: 9999999999; right: 100px; margin-top: 15%"
  >
    <ArrowUpOutlined style="font-size: 60px" @click="mytop" />
    <br />
    <ArrowDownOutlined style="font-size: 60px" @click="mydown" />
  </div>

  <div class="componentContainer gc-scrollbar">
    <div class="spreadContainer">
      <gc-spread-sheets
        :hostClass="'spread-host'"
        @workbookInitialized="initSpread"
      >
        <gc-worksheet
          id="ss"
          v-for="(a, b) in show.table"
          :key="b"
          :dataSource="show.dataSource"
          autoGenerateColumns="true"
          :name="a"
        >
        </gc-worksheet>
      </gc-spread-sheets>
    </div>
    <div class="test-btn-list"></div>
  </div>
</template>


<script setup lang="ts">
import { Rget } from "@/config/http";
import { myGlobal } from "@/store/app";
import axios from "axios";
import GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-vue";
import { computed, reactive, watch } from "vue";
import { htmlurl } from "@/config/http/env";
// import DataService from "./dataService";
import { getCurrentInstance } from "vue";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  LoginOutlined,
} from "@ant-design/icons-vue";
const { proxy } = getCurrentInstance() as any;
//请求所有的表
let dataSource: any = [];
let page: any = 1;
let myspread: any;
const show = reactive({
  table: [],
  nowSheetName: "",
  excelName: "",
  dataSource,
  test2: 11,
  nowOffset: 0,
  page,
  off1: false, //选项卡是否点击过
  off2: true, //防止连续点击
  myspread,
});

//获取所有表名,一次性-------------------------------------------------------------------------------
const cab = await Rget("bigdata", { _id: sessionStorage.NowExcelId });
show.excelName = cab.data.data[0].db_displayname;
show.table = cab.data.data[0].table;

//去获取一些数据---------------------------------------------------------------------------------
const getDataSource = async (table: string, offset: number) => {
  // show.tableC = ["公司名称", "期间", "会计凭证编号"];
  //去获取一些数据----------------------------------------------------
  let data2 = {
    host: cab.data.data[0].db_host,
    database: cab.data.data[0].db_realname,
    table: table,
    offset: offset,
    limit: "39",
  };
  const cab3 = await axios.post(htmlurl + "testmysql", data2);
  let a1: any = [];
  Object.keys(cab3.data).forEach((key) => {
    a1.push(cab3.data[0]);
  });

  show.dataSource = a1;
};
getDataSource(show.table[0], 0);
show.nowSheetName = show.table[0];
//上下切换数据功能
const mytop = () => {
  if (show.nowOffset > 30) {
    if (show.off2) {
      show.nowOffset -= 39;
      show.page = show.page * 1 - 1;
      getDataSource(show.nowSheetName, show.nowOffset);
      show.off2 = false;
    }

    setTimeout(() => {
      show.off2 = true;
    }, 100);
  }
};
const mydown = () => {
  if (show.off2) {
    show.nowOffset += 39;
    show.page = show.page * 1 + 1;
    getDataSource(show.nowSheetName, show.nowOffset);

    show.off2 = false;
  }
  setTimeout(() => {
    show.off2 = true;
  }, 100);
};
//跳到指定页
const go_page = () => {
  show.nowOffset = (show.page - 1) * 39;
  getDataSource(show.nowSheetName, show.nowOffset);
};

//监听选项卡点击事件----------------------------------------------------------------------------------------
const initSpread = (spread: any) => {
  var sheet = spread.getActiveSheet();
  show.myspread = spread;

  //选项卡点击事件
  spread.bind(
    GC.Spread.Sheets.Events.SheetTabClick,
    function (e: any, info: any) {
      show.nowSheetName = info.sheetName;
      //每次点击都去重新获取数据
      //  console.log(show.dataSource);
      getDataSource(show.nowSheetName, 0);
    }
  );
};

//去获取这条记录
console.log(cab);

const myexport = () => {
  //导出按钮触发动作
  window.location.href =
    htmlurl + "public/" + cab.data.data[0].admin_file_path[0];
};
function toExcel(spread: any) {
  throw new Error("Function not implemented.");
}

function saveAs(blob: any, arg1: string) {
  throw new Error("Function not implemented.");
}
//请求所有的表名
</script>
<style scoped>
.componentContainer {
  padding: 10px;

  overflow-y: scroll;
  overflow-x: scroll;
}
.spreadContainer {
  position: absolute;
  top: 50px;
  padding: 10px;
  /*width: 100%;*/
  /*height: 240px;*/
  left: 5px;
  right: 5px;
  bottom: 10px;
  box-shadow: 5px 5px 10px #9bca98;
}
.test-btn-list {
  /*padding: 20px;*/
  position: absolute;
  bottom: 0px;
  height: 150px;
}
.test-btn-list label {
  display: inline-flex;
  margin: 10px 20px;
}
.spread-host {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}
</style>
