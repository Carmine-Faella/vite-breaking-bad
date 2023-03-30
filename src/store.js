import {reactive} from 'vue';

export const store = reactive(
    {
        cardList:[],
        acheType:[],
        load:true,
        selected:''
    }
)