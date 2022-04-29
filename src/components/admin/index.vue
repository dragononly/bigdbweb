<template>
  <a-modal
    v-model:visible="admin.visible"
    title="输入数据库的地址"
    @ok="handleOk"
  >
    <p>多张表以,号隔开</p>
    <p><a-input v-model:value="admin.db_host" placeholder="数据库ip" /></p>
    <p><a-input v-model:value="admin.db_realname" placeholder="数据库名" /></p>
    <p>
      <a-input
        v-model:value="admin.table"
        placeholder="数据库表名，多个以,隔开"
      />
    </p>
    <p>
      <a-upload-dragger
        v-model:fileList="admin.fileList"
        name="fileName"
        :multiple="true"
        :action="admin.actionUrl"
        @change="handleChange"
        @drop="handleDrop"
      >
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">文件上传选区</p>
        <p class="ant-upload-hint">你可以选择上传，也可以把所有文件拖拽至此</p>
      </a-upload-dragger>
    </p>
  </a-modal>
  <a-row v-if="Bridge.adminMenuKey == 10">
    <a-col :span="4" v-for="(a, b) in admin.list" :key="b" style="padding: 5px">
      <a-card hoverable style="width: 100%; padding: 5px">
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>
          <a-popover title="Robot" placement="topRight">
            <template #content>
              <div style="font-size: 12px">
                点中间那个笔就是接任务
                <br />
                点右边的那三个点，可以看到需求描述
                <br />
                <span style="color: #00aeae"> ---来自萝卜的描述 </span>
              </div>
            </template>
            <android-outlined />
          </a-popover>
          <a-popconfirm
            title="是否接取任务,提前保存好需求描述"
            ok-text="是，我想"
            cancel-text="不，我点错了"
            @confirm="confirm(a._id)"
            @cancel="cancel"
          >
            <to-top-outlined />
          </a-popconfirm>

          <a-popover title="需求描述" placement="topRight">
            <ellipsis-outlined key="ellipsis" />
            <template #content>
              <p>{{ a.description }}</p>
            </template>
          </a-popover>
        </template>
        <a-card-meta :title="a.db_displayname" :description="a.name">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
  <a-row v-if="Bridge.adminMenuKey == 11">
    <a-col
      :span="4"
      v-for="(a, b) in admin.list2"
      :key="b"
      style="padding: 5px"
    >
      <a-card hoverable style="width: 100%; padding: 5px">
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>
          <a-popover title="Robot" placement="topRight">
            <template #content>
              <div style="font-size: 12px">
                点中间那个勾就是完成任务
                <br />
                点右边的那三个点，可以看到需求描述
                <br />
                <span style="color: #00aeae"> ---来自萝卜的描述 </span>
              </div>
            </template>
            <android-outlined />
          </a-popover>

          <check-outlined @click="showModal(a._id)" key="edit" />

          <a-popover title="下载文件" placement="topRight">
            <template #content>
              <div
                style="font-size: 12px"
                v-for="(c, d) in a.attfile_path"
                :key="d"
              >
                <a :href="admin.htmlurl + 'public/' + c">{{ c }} </a>
              </div>
            </template>
            <cloud-download-outlined />
          </a-popover>
          <!-- <a :href="'http://127.0.0.1:9001/public/' + a.attfile_path"> </a> -->
        </template>
        <a-card-meta :title="a.db_displayname" :description="a.name">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
  <a-row v-if="Bridge.adminMenuKey == 12">
    <a-col
      :span="4"
      v-for="(a, b) in admin.list3"
      :key="b"
      style="padding: 5px"
    >
      <a-card hoverable style="width: 100%; padding: 5px">
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>
          <a-popover title="Robot" placement="topRight">
            <template #content>
              <div style="font-size: 12px">
                已经完成了，常回家看看
                <br />
                <span style="color: #00aeae"> ---来自萝卜的描述 </span>
              </div>
            </template>
            <android-outlined />
          </a-popover>

          <a-popover title="需求描述" placement="topRight">
            <ellipsis-outlined key="ellipsis" />
            <template #content>
              <p>{{ a.description }}</p>
            </template>
          </a-popover>
        </template>
        <a-card-meta :title="a.db_displayname" :description="a.name">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { Rget, Rput } from "@/config/http";
import { htmlurl } from "@/config/http/env";
import { Bridge } from "@/store/bridge";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons-vue";
import {
  AndroidOutlined,
  EditOutlined,
  EllipsisOutlined,
  CheckOutlined,
  CloudDownloadOutlined,
  ToTopOutlined,
} from "@ant-design/icons-vue";
import axios from "axios";
import { message, UploadChangeParam } from "ant-design-vue";
import { defineComponent, reactive, watch } from "vue";

let admin_file_path: any = [],
  fileList: any = [],
  progress: any = "";

const admin = reactive({
  list: [],
  list2: [],
  list3: [],
  visible: false,
  db_host: "10.103.1.3",
  db_realname: "wyt",
  table: "140,1111,1406",
  nowId: "",
  actionUrl: "",
  fileList,
  htmlurl: "",
  admin_file_path,
});

//初始化------------------------------------------------------------------------------------------------
admin.actionUrl = htmlurl + "bigdata/files";
admin.htmlurl = htmlurl;
//上传文件监听事件------------------------------------------------------------------------------------------------
const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === "done") {
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

const showModal = (id: string) => {
  admin.nowId = id;
  admin.visible = true;
};

//完成操作的动作
const handleOk = async (e: MouseEvent) => {
  if (admin.db_host == "" || admin.db_realname == "") {
    message.info("数据必填");
    return;
  }
  let tableArray = [];

  //装载管理员上传文件
  admin.admin_file_path = [];
  for (const i of admin.fileList) {
    if (i.status == "done") {
      admin.admin_file_path.push(i.response.message);
    }
  }

  tableArray = admin.table.split(",");
  await Rput("bigdata", admin.nowId, {
    db_host: admin.db_host,
    db_realname: admin.db_realname,
    table: tableArray,
    is_finished: "已完成",
    admin_file_path: admin.admin_file_path,
  });
  getList1();
  getList2();
  getList3();
  message.success("你已完成项目");
  admin.visible = false;
};
//加载待处理任务
const getList1 = async () => {
  const cab = await Rget("bigdata", { is_finished: "待处理" });
  admin.list = cab.data.data;
};
getList1();

//加载待处理中
const getList2 = async () => {
  const cab = await Rget("bigdata", {
    is_finished: "处理中",
    tasker_eid: sessionStorage.eid,
  });
  admin.list2 = cab.data.data;
};
getList2();
//加载待处理中
const getList3 = async () => {
  const cab = await Rget("bigdata", {
    is_finished: "已完成",
    tasker_eid: sessionStorage.eid,
  });
  admin.list3 = cab.data.data;
};
getList3();

watch(
  () => Bridge.adminMenuKey,
  () => {
    getList1();
    getList2();
    getList3();
  }
);

//接任务
const confirm = async (a: string) => {
  await Rput("bigdata", a, {
    is_finished: "处理中",
    tasker_eid: sessionStorage.eid,
  });
  //去更新任务状态
  message.success("任务接取成功");
  getList1();
};

const cancel = (e: MouseEvent) => {
  message.error("你取消了操作");
};

//处理任务
const confirm2 = async (a: string) => {
  await Rput("bigdata", a, {
    is_finished: "处理中",
    tasker_eid: sessionStorage.eid,
  });
  //去更新任务状态
  message.success("任务接取成功");
  getList1();
};

const cancel2 = (e: MouseEvent) => {
  message.error("你取消了操作");
};

//完成的任务
const confirm3 = async (a: string) => {
  await Rput("bigdata", a, {
    is_finished: "处理中",
    tasker_eid: sessionStorage.eid,
  });
  //去更新任务状态
  message.success("任务接取成功");
  getList1();
};

const cancel3 = (e: MouseEvent) => {
  message.error("你取消了操作");
};
</script>

