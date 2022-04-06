import { reactive } from 'vue';

export const homeData = reactive({
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
