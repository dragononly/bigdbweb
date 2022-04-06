
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { router } from './router'
import store from "./store";
// import VueSocketIO from 'vue-3-socket.io'
import Vant from 'vant';
import 'vant/lib/index.css';
import { GcSpreadSheets, GcWorksheet, GcColumn } from '@grapecity/spread-sheets-vue'



const app = createApp(App);


app.use(Vant);
app.use(Antd);
app.use(store);
app.use(router);
app.component('gc-spread-sheets', GcSpreadSheets);
app.component('gc-worksheet', GcWorksheet);
app.component('gc-column', GcColumn);

// app.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://127.0.0.1:9000',
// }))



app.mount('#app')

