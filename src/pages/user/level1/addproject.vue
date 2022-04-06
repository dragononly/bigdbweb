


<template>
  <van-nav-bar
    title="张三"
    left-text="返回"
    right-text="退出"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <div class="box">
    <van-row>
      <van-col span="16" offset="4">
        <van-cell-group inset>
          <van-field v-model="addprojectData.projectName" label="项目名字" />
          <van-field name="slider" label="项目保留">
            <template #input>
              <van-slider style="width: 90%" v-model="addprojectData.slider" />
              <span style="margin-left: 1rem"></span>
              {{ addprojectData.slider }}天
            </template>
          </van-field>
          <van-field
            style="width: 85%; float: left"
            v-model="addprojectData.fieldValue"
            is-link
            readonly
            label="允许观看"
            placeholder="请选择员工"
            @click="addprojectData.show = true"
          >
          </van-field>
          <van-button
            style="float: right; margin-top: 0.3rem; margin-right: 0.4rem"
            size="small"
            type="default"
            >添加员工</van-button
          >
          <van-popup
            style="width: 60%; margin-left: 20%"
            v-model:show="addprojectData.show"
            round
            position="bottom"
          >
            <van-cascader
              style="color: black"
              v-model="addprojectData.cascaderValue"
              title="请选择员工"
              :options="addprojectData.options"
              @close="addprojectData.show = false"
              @finish="onFinish"
            />
          </van-popup>
        </van-cell-group>
        <div style="padding: 0 15px">
          <div
            style="
              background-color: #fff;
              margin-top: 0.1rem;
              border-radius: 5px;
            "
          >
            <div
              style="
                color: black;
                text-align: left;
                padding: 1rem;
                font-size: 1.1rem;
              "
            >
              张三
            </div>
            <van-empty description="还没有员工加入" />
            <van-row>
              <van-col span="8" offset="16">
                <div style="padding: 0.3rem">
                  <van-button type="default">上传文件</van-button>
                  <van-button style="margin-left: 0.4rem" type="default"
                    >创建项目</van-button
                  >
                  <van-button style="margin-left: 0.4rem" type="default"
                    >取消</van-button
                  >
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const addprojectData = reactive({
  projectName: '项目名字',
  slider: 0,
  password: '333',
  fieldValue: '',
  cascaderValue: '',
  show: false,
  options: [
    {
      text: '杭州分所',
      children: [
        {
          text: '第一审计总部',
          children: [{ text: '一总一部', children: [{ text: '张三' }] }],
        },
      ],
    },
    {
      text: '上海分所',
      children: [
        {
          text: '第一审计总部',
          children: [{ text: '一总一部', children: [{ text: '张三' }] }],
        },
      ],
    },
  ],
});
const onFinish = ({ selectedOptions }) => {
  addprojectData.show = false;
  addprojectData.fieldValue = selectedOptions
    .map((option) => option.text)
    .join('/');
};
const onClickLeft = () => {
  router.back();
};
</script>


<style scoped>
.box {
  background: #ececec;
  height: calc(100vh);

  width: 100%;

  background-image: linear-gradient(
    241deg,
    #77cca7 0%,
    #7dafc0 51%,
    #b88faf 98%
  );
  color: white;
  opacity: 0.95;
  text-align: center;
  margin: auto;
  color: #f3f3f3;
  font-size: 30px;
  font-weight: 550;
  border-radius: 5px;
  padding: 0.3rem 0rem;
}
</style>