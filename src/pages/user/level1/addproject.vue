<template>
  <mynav />
  <div class="box">
    <van-row style="margin-top: 50px">
      <van-col span="16" offset="4">
        <van-cell-group inset>
          <van-field v-model="addprojectData.projectName" label="项目名字" />
          <div style="text-align: left; padding-left: 15px">
            <a-date-picker
              style=""
              v-model:value="addprojectData.date"
              :format="dateFormat"
            />
          </div>

          <van-field
            v-model="addprojectData.user"
            center
            clearable
            label="可查看的用户"
            placeholder="请输入查找的用户"
          >
            <template #button>
              <van-button size="small" @click="searchUser" type="primary"
                >查找用户</van-button
              >
            </template>
          </van-field>

          <a-checkbox-group
            @change="change"
            v-model:value="addprojectData.checkedList"
            :options="addprojectData.plainOptions"
          />
          <div style="padding-bottom: 10px">
            <a-button type="primary" @click="addButton" :size="size"
              >添加用户</a-button
            >
          </div>
        </van-cell-group>

        <div style="padding: 0 15px">
          <div
            style="
              background-color: #fff;
              margin-top: 0.1rem;
              border-radius: 5px;
            "
          >
            <a-row style="padding: 20px">
              <a-col
                v-for="(a, b) in addprojectData.lastUser"
                :key="b"
                style="
                  color: #3c3c3c;
                  text-align: left;
                  padding: 5px;
                  font-size: 14px;
                "
                :span="6"
              >
                {{ a }}
              </a-col>
            </a-row>

            <van-empty
              v-if="addprojectData.lastUser.length == 0"
              style="height: 200px"
              description="还没有员工加入"
            />
            <van-empty
              v-if="addprojectData.lastUser.length > 0"
              style="height: 140px"
              description=""
            />
            <div style="padding: 10px">
              <a-textarea
                v-model:value="addprojectData.textareaValue"
                :rows="4"
                placeholder="需求描述"
                :maxlength="2500"
              />
            </div>

            <van-row style="padding: 0 10px 10px 0">
              <van-col span="4" offset="16">
                <div>
                  <a-upload-dragger
                    v-model:file-list="addprojectData.fileList"
                    name="fileName"
                    :action="addprojectData.actionUrl"
                    @change="handleChange"
                    :multiple="true"
                    :remove="handleRemove"
                    :progress="progress"
                  >
                    <p class="ant-upload-drag-icon">
                      <inbox-outlined></inbox-outlined>
                      文件上传
                    </p>
                    <div
                      style="font-size: 10px; margin-top: -20px; color: #c2c5c7"
                    >
                      支持拖拽
                    </div>
                  </a-upload-dragger>
                </div>
              </van-col>
              <van-col span="4">
                <a-button @click="createProject">创建项目</a-button>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { Rdelete, Rget } from "@/config/http";
import mynav from "@components/nav.vue";
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons-vue";
import { message, UploadChangeParam, UploadProps } from "ant-design-vue";

import { htmlurl } from "@/config/http/env";
const router = useRouter();
let attfile_path: any[] = [],
  plainOptions: any[] = [];
const addprojectData = reactive({
  projectName: "项目名字",
  slider: 0,
  password: "333",
  fieldValue: "",
  cascaderValue: "",
  show: false,
  user: "姜伟",
  checked: [],
  indeterminate: true,
  checkAll: false,
  checkedList: ["Apple", "Orange"],
  plainOptions,
  lastUser0: [],
  lastUser: [],
  fileList: [],
  isUploadOk: false,
  attfile_path,
  date: "",
  textareaValue: "",
  name: "",
  actionUrl: "",
});
//初始化----------------------------------------------------------------------------------------------
addprojectData.name = sessionStorage.user;
//初始化上传地址
addprojectData.actionUrl = htmlurl + "bigdata/files";

const onCheckAllChange = (e: any) => {
  Object.assign(addprojectData, {
    checkedList: e.target.checked ? addprojectData.plainOptions : [],
    indeterminate: false,
  });
};

const progress = {
  strokeColor: {
    "0%": "#108ee9",
    "100%": "#87d068",
  },
  strokeWidth: 3,
  format: (percent: number) => `${parseFloat(percent.toFixed(2))}%`,
  class: "test",
};

watch(
  () => addprojectData.checkedList,
  (val) => {
    addprojectData.indeterminate =
      !!val.length && val.length < addprojectData.plainOptions.length;
    addprojectData.checkAll = val.length === addprojectData.plainOptions.length;
  }
);

const searchUser = async () => {
  addprojectData.plainOptions = [];
  const cab = await Rget("skyuser", { name: addprojectData.user });
  for (const i of cab.data?.data) {
    const val = i.branch + i.department + i.name;
    addprojectData.plainOptions.push(val);
  }
};
const change = (a: any) => {
  addprojectData.lastUser0 = a;
};
const onClickLeft = () => {
  router.back();
};
let off = false;
//创建项目----------------------------------------------------------------------------------------------------
const createProject = async () => {
  if (!addprojectData.isUploadOk || off) {
    return;
  }
  off = true;
  //观察现在的文件数
  addprojectData.attfile_path = [];
  for (let i of addprojectData.fileList) {
    if (i.status == "done") {
      addprojectData.attfile_path.push(i.response.message);
    }
  }

  let data = {
    eid: sessionStorage.eid,
    db_displayname: addprojectData.projectName,
    description: addprojectData.textareaValue,
    attfile_path: addprojectData.attfile_path,
    grant_eid: addprojectData.lastUser,
    db_expired: addprojectData.date,
    name: sessionStorage.user,
  };

  const cab = await axios
    .post(htmlurl + "bigdata", data)
    .then(function (res) {
      if (res.data.message == "jsonok") {
        message.success("恭喜项目创建成功,2秒后回到首页");
        setTimeout(() => {
          router.push("home");
        }, 2000);
      }
    })
    .catch(function (error) {
      alert(error);
    });
};

//上传文件-----------------------------------------------------------------------------------------------------
const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === "done") {
    addprojectData.isUploadOk = true;
    addprojectData.attfile_path = [];
    for (let i of info.fileList) {
      addprojectData.attfile_path.push(i.response.message);
    }
    message.success(`${info.file.name} 文件上传成功`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} 文件并没有上传到服务器.`);
  }
};

//removeFile
const handleRemove = async (file: any) => {
  file.response.message = file.response.message.replace("/", "@");
  await axios.delete(htmlurl + "bigdata/files" + "/" + file.response.message);
};

//添加按钮按下-------------------------------------------------------------------------------------------------
const addButton = (a: any) => {
  for (const i of addprojectData.lastUser0) {
    addprojectData.lastUser.push(i);
  }
  let set: any = new Set(addprojectData.lastUser);
  set = Array.from(set);
  addprojectData.lastUser = set;
  console.log(addprojectData.lastUser);
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