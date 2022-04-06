<template>
  <div class="box">
    <van-nav-bar
      title="张三"
      left-text="返回"
      right-text="退出"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div style="padding: 0 15px">
      <div style="background-color: #fff; margin-top: 0.1rem">
        <van-row>
          <van-col span="4" offset="20">
            <van-button
              to="addproject"
              style="margin-top: 0.3rem"
              type="success"
              >新建数据库</van-button
            >
          </van-col>
        </van-row>
        <van-grid style="margin-top: 1rem" :column-num="6" :gutter="10">
          <van-grid-item v-for="value in 6" :key="value" to="show">
            <van-icon
              name="underway-o"
              size="3rem"
              badge="等待"
              color="#1989fa"
            />
            <div>嘉兴水产负债资产表</div>
          </van-grid-item>
          <van-grid-item v-for="value in 6" :key="value" text="文字" to="show">
            <van-icon
              name="logistics"
              size="3rem"
              color="#C3703C"
              badge="处理中"
            />
            <div>嘉兴水产负债资产表</div>
          </van-grid-item>
          <van-grid-item v-for="value in 6" :key="value" to="show">
            <van-icon
              name="certificate"
              size="3rem"
              color="#6DC2C4"
              badge="完成"
            />
            <div>嘉兴水产负债资产表</div>
          </van-grid-item>
        </van-grid>
        <van-empty description="可查看的数据库" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { homeData } from './data/home';
import { useRouter } from 'vue-router';
const router = useRouter();
const onFinish = ({ selectedOptions }) => {
  homeData.show = false;
  homeData.fieldValue = selectedOptions.map((option) => option.text).join('/');
};

const onClickLeft = () => {
  router.back();
};
</script>


<style scoped>
.box {
  background: #ececec;
  height: calc(100vh);
}
</style>