<template>
  <a-row style="background-color: #ececec">
    <a-col :span="3">
      <div
        style="
          background-color: #000c17;
          addping: 30px 7px 30px 7px;
          height: calc(100vh);
        "
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 22px;
            font-weight: 400;
            height: 50px;
            padding-left: 20px;
            padding-top: 20px;
          "
        >
          <codepen-outlined
            style="font-size: 27px; float: left; line-height: 42px"
          />
          <span style="float: left; margin-left: 5px">数据处理平台</span>
        </div>

        <suspense>
          <left />
        </suspense>
      </div>
    </a-col>
    <a-col :span="21">
      <div class="box" v-if="Bridge.adminMenuKey < 4">
        <div style="padding: 0 15px">
          <div style="background-color: #fff; height: calc(100vh)">
            <div style="padding: 5px 0 0 10px" v-if="Bridge.userMenuKey == 1">
              <router-link to="addproject">
                <a-button type="primary">新建项目</a-button>
              </router-link>
            </div>
            <!-- <div v-if="Bridge.userMenuKey == 1"> -->
            <van-grid
              v-if="Bridge.userMenuKey == 1"
              style="margin-top: 1rem"
              :column-num="6"
              :gutter="10"
            >
              <van-grid-item v-for="(a, b) in home.list1" :key="b">
                <van-icon
                  name="underway-o"
                  size="3rem"
                  badge="等待"
                  color="#1989fa"
                />
                <div>{{ a.db_displayname }}</div>
              </van-grid-item>
            </van-grid>
            <van-grid
              v-if="Bridge.userMenuKey == 2"
              :column-num="6"
              :gutter="10"
              style="padding-top: 10px"
            >
              <van-grid-item v-for="(a, b) in home.list2" :key="b" text="文字">
                <van-icon
                  name="logistics"
                  size="3rem"
                  color="#C3703C"
                  badge="处理中"
                />
                <div>{{ a.db_displayname }}</div>
                <div>接项目人：{{ a.task_name }}</div>
              </van-grid-item>
            </van-grid>
            <van-grid
              v-if="Bridge.userMenuKey == 3"
              :column-num="6"
              :gutter="10"
            >
              <van-grid-item
                v-for="(a, b) in home.list3"
                :key="b"
                @click="toshow(a._id)"
                style="padding-top: 10px"
              >
                <van-icon
                  name="certificate"
                  size="3rem"
                  color="#6DC2C4"
                  badge="完成"
                  style="cursor: pointer"
                />
                <div style="cursor: pointer">{{ a.db_displayname }}</div>
              </van-grid-item>
            </van-grid>
            <van-empty description="数据处理中心" />
          </div>
        </div>
      </div>
      <div
        v-if="Bridge.userMenuKey == 4"
        style="padding: 20px; width: 100%; margin: auto"
      >
        <data1 />
      </div>
      <div
        v-show="Bridge.userMenuKey == 5"
        style="padding: 20px; width: 100%; margin: auto"
      >
        <suspense> <data2 /> </suspense>
      </div>
      <div
        v-if="Bridge.userMenuKey == 6"
        style="padding: 20px; width: 100%; margin: auto"
      >
        <data3 />
      </div>
      <div
        v-if="Bridge.userMenuKey == 7"
        style="padding: 20px; width: 100%; margin: auto"
      >
        <data4 />
      </div>
      <div
        v-if="Bridge.userMenuKey == 8"
        style="padding: 20px; width: 100%; margin: auto"
      >
        <callus />
      </div>

      <admin />
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { FundOutlined, CodepenOutlined } from "@ant-design/icons-vue";
import { homeData } from "./data/home";
import { useRouter } from "vue-router";
import { reactive, watch } from "vue";
import mynav from "@components/nav.vue";
import left from "@components/user/left.vue";
import { Bridge } from "@/store/bridge";
import admin from "@components/admin/index.vue";
import data1 from "@components/datashow/data1.vue";
import data2 from "@components/datashow/data2.vue";
import data3 from "@components/datashow/data3.vue";
import data4 from "@components/datashow/data4.vue";
import callus from "@components/contactus/callus.vue";
import { Rget } from "@/config/http";
import { myGlobal } from "@/store/app";

const router = useRouter();
const home = reactive({
  name: "home",
  admin: false,
  list1: [],
  list2: [],
  list3: [],
});
if (
  sessionStorage.eid == "115097" ||
  sessionStorage.eid == "122667" ||
  sessionStorage.eid == "103383" ||
  sessionStorage.eid == "122666" ||
  sessionStorage.eid == "101503" ||
  sessionStorage.eid == "102297"
) {
  home.admin = true;
}

home.name = sessionStorage.user;
const onFinish = ({ selectedOptions }) => {
  homeData.show = false;
  homeData.fieldValue = selectedOptions
    .map((option: { text: any }) => option.text)
    .join("/");
};

const onClickLeft = () => {
  router.back();
};

//跳转到葡萄城显示-----------------------------------------------------------------------------------------
const toshow = (id: string) => {
  myGlobal.NowExcelId = id;
  sessionStorage.NowExcelId = id;
  router.push("show");
};

//请求待处理项目-----------------------------------------------------------------------------------------------------
const cab = await Rget("bigdata", {
  eid: sessionStorage.eid,
  is_finished: "待处理",
});
home.list1 = cab.data.data;

const cab2 = await Rget("bigdata", {
  eid: sessionStorage.eid,
  is_finished: "处理中",
});
for (const i of cab2.data.data) {
  const ccab = await Rget("skyuser", { eid: i.tasker_eid, limit: 1 });
  i.task_name = ccab.data.data[0].name;
  console.log(i);

  home.list2.push(i);
}

const cab3 = await Rget("bigdata", {
  eid: sessionStorage.eid,
  is_finished: "已完成",
});
home.list3 = cab3.data.data;
</script>


<style scoped>
.box {
  background: #ececec;
  height: calc(100vh);
}
</style>