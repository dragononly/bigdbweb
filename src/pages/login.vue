<template>
  <div class="home">
    <div class="color">
      <van-form>
        <van-cell-group inset>
          <van-field
            v-model="home.username"
            name="用户名"
            label="用户名"
            placeholder="请输入oa账号密码"
            :rules="[{ required: true }]"
          />
          <van-field
            v-model="home.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true }]"
          />
        </van-cell-group>
        <div style="margin: 16px; margin-top: 40px">
          <van-button
            @click="onSubmit"
            round
            block
            type="default"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { Notify } from 'vant';
const router = useRouter();
const home = reactive({
  username: '',
  password: '',
});
const onSubmit = async () => {
  let url = 'https://cdn.pccpa.cn:9000/live/login';
  let reqData = { user: home.username, pwd: home.password };
  try {
    let cab = await axios.post(url, reqData);
    if (cab?.data?.data) {
      router.push('home');
    } else {
      Notify('账号密码错误');
    }
  } catch (error) {}
};
</script>


<style scoped>
.home {
  padding-top: 5rem;
  height: calc(100vh);
  display: block;
  margin: auto;
}

.color {
  width: 450px;

  background-image: linear-gradient(
    141deg,
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
  height: 20rem;
  margin-top: 20px;
  padding: 2rem 1rem;
  padding-top: 4rem;
}
</style>