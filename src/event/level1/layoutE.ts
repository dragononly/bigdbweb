import { myGlobal } from '@/data/g';
import { useRoute } from 'vue-router';
// import { useRoute } from 'vue-router';
import { layout } from '@/data/level1/layout';

//initialize
export const onChange = async (a: number) => {

    layout.active = a


}