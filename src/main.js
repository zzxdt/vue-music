import app from '@utils/app'
import router from './router/index'
import store from './store/index'
import * as getApi from '@apis/http'
import util from '@utils/util'
import common from '@assets/js/common'
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css";
import '@assets/css/global.css'
import '@assets/less/reset.less'
import '@assets/fonts/fonts.css'

app.config.globalProperties['$http'] = getApi;
app.config.globalProperties['$utils'] = util;
app.config.globalProperties['$COMMON'] = common;
app.config.globalProperties['$msg'] = ElMessage;

app.use(router).use(store).use(vue3videoPlay).mount('#app')
