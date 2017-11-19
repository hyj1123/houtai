/**
 * Created by Administrator on 2017/10/31.
 */
import  Vue from 'vue'
import { Input,Button,Message } from 'element-ui'
import Login from './Login.vue'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(Input)
Vue.use(Button)
Vue.prototype.$message = Message
new Vue({
  el: "#app",
  template: `<Login />`,
  components: {
    Login
  }
})


