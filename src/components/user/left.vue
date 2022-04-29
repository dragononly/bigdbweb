<template>
  <div style="width: 100%; position: reactive">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="test"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu key="sub0">
        <template #icon>
          <smile-outlined />
        </template>
        <template #title>我的项目</template>
        <a-menu-item key="1">我的新项目</a-menu-item>
        <a-menu-item key="2">进行中项目</a-menu-item>
        <a-menu-item key="3">完成的项目</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub1">
        <template #icon>
          <FundOutlined />
        </template>
        <template #title>数据看板</template>
        <a-menu-item key="4">总提交数据</a-menu-item>
        <a-menu-item key="5">性能分析</a-menu-item>
        <a-menu-item key="6">综合看板</a-menu-item>
        <a-menu-item key="7">历史数据</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <phone-outlined />
        </template>
        <template #title>联系技术</template>
        <a-menu-item key="8">客服热线</a-menu-item>
        <a-menu-item key="9">反馈问题</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <user-outlined />
        </template>
        <template #title>管理员</template>
        <a-menu-item key="10">可接的项目</a-menu-item>
        <a-menu-item key="11">处理中项目</a-menu-item>
        <a-menu-item key="12">完成的项目</a-menu-item>
        <a-menu-item key="13">过期的项目</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { Bridge } from "@/store/bridge";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  FundOutlined,
  AppstoreOutlined,
  SmileOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    FundOutlined,
    AppstoreOutlined,
    SmileOutlined,
    PhoneOutlined,
    UserOutlined,
  },
  data() {
    return { ...toRefs(Bridge) };
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub0", "sub1", "sub2", "sub3"],
      preOpenKeys: ["sub1"],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    const test = (a: any) => {
      Bridge.userMenuKey = a.key;
      Bridge.adminMenuKey = a.key;
      console.log(Bridge.adminMenuKey);
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
      test,
    };
  },
});
</script>

