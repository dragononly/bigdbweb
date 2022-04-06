import { myGlobal } from '@/data/g';
import { useRoute } from 'vue-router';
// import { useRoute } from 'vue-router';


//initialize
export const initialize = async () => {

    const route: any = useRoute();

    //只加载一次
    if (!myGlobal.Openid) {
        //通过路由地址获取关键参数
        myGlobal.Openid = route.query.openid;
        myGlobal.Headimgurl = route.query.headimgurl;
        myGlobal.Sex = route.query.sex;
        myGlobal.Nickname = route.query.nickname;
    }

}