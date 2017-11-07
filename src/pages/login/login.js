/**
 * Created by Administrator on 2017/10/31.
 */
import  Vue from 'vue'
import ElementUI from 'element-ui'
import Row  from 'Row'
import Col  from 'Col'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vue),
Vue.use(ElementUI),
Vue.use(Row),
Vue.use(Col),
new Vue({
  el: "#app",
  data:{
    name:'',
    password:''
  },
  template: `<div>
    <!--<input type="text" placeholder="用户名">-->
    <!--<input type="password" placeholder="密码">-->
    <!--<button @click="register">提交</button>-->
    <el-row>
      <el-col :span="8">
        <el-input id="name" v-model="name" placeholder="请输入账号">
          <template slot="prepend">账号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
       </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>`,
  methods: {


    register() {
      let routes = [
        {
          path: 'wxSet',
          title: '微信设置',
          show: true,
          icon: 'icon-wxSet',
          children: [
            {
              path: 'wxMenu',
              show: false,
              title: '微信菜单',
            },
            {
              path: 'wxApiSet',
              show: true,
              title: '微信API设置'
            }
          ]
        },

        {
          path: 'userManage',
          title: '用户管理',
          show: true,
          icon: 'icon-userManage',
          children: [
            {
              path: 'userList',
              show: true,
              title: '用户列表'
            },
            {
              path: 'driverGroup',
              show: true,
              title: '司机组'
            },
            {
              path: 'userVerify',
              show: true,
              title: '用户审核',
            },
            {
              path: 'merchatGroup',
              show: true,
              title: '商家组'
            },
            {
              path: 'workshopGroup',
              show: true,
              title: '维修厂组'
            }
          ]
        },

        {
          path: 'orderManage',
          title: '订单管理',
          show: true,
          icon: 'icon-orderManage',
          children: [
            {
              path: 'orderList',
              show: true,
              title: '订单查询'
            },
            {
              path: 'orderVerify',
              show: true,
              title: '订单审核'
            },
            {
              path: 'orderTemp',
              show: true,
              title: '临时订单'
            },
            {
              path: 'orderEdit',
              show: true,
              title: '订单录入'
            },
            {
              path: 'orderCustomerService',
              show: true,
              title: '客服审单'
            },
            {
              path: 'settleAccountsModeSet',
              show: true,
              title: '结算模式设置'
            }
          ]
        },

        {
          path: 'areaManage',
          show: true,
          title: '区域管理',
          icon: 'icon-areaSet',
          children: [
            {
              path: 'lineList',
              show: true,
              title: '线路列表'
            },
            {
              path: 'areaEdit',
              show: true,
              title: '区域编辑'
            }
          ]
        },

        {
          path: 'finance',
          title: '财务',
          show: true,
          icon: 'icon-finance',
          children: [
            {
              path: 'receiptVerify',
              show: true,
              title: '回单审核'
            },
            {
              path: 'paymentVerify',
              show: true,
              title: '交款审核'
            },
            {
              path: 'billMake',
              show: true,
              title: '账单生成'
            },
            {
              path: 'merchatSettleAccounts',
              show: true,
              title: '商家结算'
            }
          ]
        },

        {
          path: 'adminSet',
          title: '管理员设置',
          show: true,
          icon: 'icon-adminSet',
          children: [
            {
              path: 'adminList',
              show: true,
              title: '管理员列表'
            },
            {
              path: 'authoritySet',
              show: true,
              title: '权限设置'
            },
            {
              path: 'opLog',
              show: true,
              title: '操作日志'
            },
            {
              path: 'fareSet',
              show: true,
              title: '费用设置'
            }
          ]
        },

        {
          path: 'echart',
          title: 'echart',
          show: true,
          icon: 'icon-adminSet',
          children: [
            {
              path: 'bar',
              show: true,
              title: '柱状图'
            }
          ]
        }
      ];

      /* 过滤路由，把要显示了路由存储（权限管理） */
      for(let i=0;i<routes.length;i++) {
        if(routes[i].show) {
          /* 循环子级 */
          let childrenRoutes = routes[i].children;
          for(let j=0;j<childrenRoutes.length;j++) {
            if(!childrenRoutes[j].show) {
              /* 子级的show为false则直接删除 */
              childrenRoutes.splice(j,1);
            }
          }
        }else {
          /* 如果第一级都不显示，则直接删除这个 */
          routes.splice(i,1);
        }
      }
      console.log(routes);
      localStorage.setItem('routes',JSON.stringify(routes));
      location.href = 'index.html';
    }
  }
})
