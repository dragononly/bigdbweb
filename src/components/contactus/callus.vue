<template>
  <div style="background-color: #fff; height: calc(95vh)">
    <a-list
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component :is="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar><a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts">
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive } from "vue";

const listData: Record<string, string>[] = [];

const list = [
  {
    href: "https://www.antdv.com/",
    title: `运营维护部吴玉婷`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "数据共享总部成员，主要负责数据处理。",
    content:
      "提交需求，通过企业微信，或者需求具体描述，可以联系微信客服，数据处理任务。",
  },
  {
    href: "https://www.antdv.com/",
    title: `运营维护部王翃訸`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "数据共享总部成员，主要负责数据处理。",
    content:
      "提交需求，通过企业微信，或者需求具体描述，可以联系微信客服，数据处理任务。",
  },
  {
    href: "https://www.antdv.com/",
    title: `运营维护部姜伟`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "数据共享总部成员，主要负责数据处理。",
    content:
      "提交需求，通过企业微信，或者需求具体描述，可以联系微信客服，数据处理任务。",
  },
  {
    href: "https://www.antdv.com/",
    title: `运营维护部陈成森`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "数据共享总部成员，主要负责电脑维修，门禁处理",
    content:
      "通过企业微信，或者需求具体描述，可以联系微信客服，或者员工服务，运营维护部，软件AE问题，联系软件开发部客服。",
  },
];
for (const i of list) {
  listData.push(i);
}

export default defineComponent({
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  setup() {
    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 4,
    };
    const actions: Record<string, string>[] = [
      { type: "StarOutlined", text: "156" },
      { type: "LikeOutlined", text: "156" },
      { type: "MessageOutlined", text: "点赞二期开发" },
    ];
    return {
      listData,
      pagination,
      actions,
    };
  },
});
</script>

