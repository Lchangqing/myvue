//入口文件
import Vue from 'vue'

//导入App根组件
import app from './App.vue'

//按需導入Mint-UI中的组件并注册
// import {Header} from 'mint-ui'
// Vue.component(Header.name,Header)
//全部導入
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})