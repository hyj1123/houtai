<template>
  <div style="margin: auto;">
   <div style="margin-left: 208px;margin-top: -196px;"><img src="../../image/logo.png" style="width: 100px;height: 100px"/></div>
  <div class="login-title">爱的后台管理系统</div>
  <div class="bigLogin">
    <div class="loginBox">
    <!--<div>-->
      <!--账户：-->
      <!--<el-input-->
        <!--placeholder="账户名"-->
        <!--v-model="userName">-->
      <!--</el-input>-->
    <!--</div>-->

    <!--<div>-->
      <!--密码：-->
      <!--<el-input-->
        <!--placeholder="密码"-->
        <!--type="password"-->
        <!--v-model="userPwd">-->
      <!--</el-input>-->
    <!--</div>-->

    <!--<div class="text-right">-->
      <!--<el-button @click="register" type="info">登录</el-button>-->
    <!--</div>-->


      <div class="zhanghao">
        <el-row>
          <el-col :span="7">
            <el-input id="phone" @blur="testName"  v-model="phone" placeholder="请输入帐号">
              <template slot="prepend" style="height: 50px">帐号</template>
            </el-input>
            <p style=" margin-left: 75px;color:red;" id="errorMassage" v-show="isPhone">手机号码有误</p>
          </el-col>
        </el-row>
      </div>
      <div class="mima">
        <el-row>
          <el-col :span="7">
            <el-input id="password" v-model="password" type="password" placeholder="请输入密码" @blur="testPassword">
              <template slot="prepend">密码</template>
            </el-input>
            <p style=" margin-left: 75px;color:red;" v-show="isPassword">密码错误</p>
          </el-col>
        </el-row>
      </div>
      <div class="denglu">
        <el-row>
          <el-col :span="7">
            <el-button id="login" @click="register"  type="primary">立即登录</el-button>
            <!--<el-button id="login" @click="register" style="width:40%;    margin-left: 70px;" type="primary">重置</el-button>-->
          </el-col>
        </el-row>
      </div>
    </div>
   </div>
</div>
</template>

<script>
  import axios from '../../utils/fetch'
  export default {
    data() {
      return {
        phone: '',
        password: '',
        isPhone: false,
        isPassword:false
      }
    },
//    computed:{
//      isPhone(){
//        return this.name ? false:true
////        if( !this.name && !(/^1(3|4|5|7|8)\d{9}$/.test(this.name)) ){
////          isPhone = true;
////        }
//      }
//    },
    methods: {
      testName() {
        if(this.phone) {
          if(!/^1[34578]\d{9}$/.test(this.phone)) {
            this.isPhone = true;
          }else {
            this.isPhone = false;
          }
        }else {
          this.isPhone = false;
        }
      },
      testPassword() {
        if(this.password){
          if(!/[a-zA-Z0-9]{6,16}/.test(this.password)) {
            this.isPassword = true;
          }else {
            this.isPassword = false;
          }
        }else{
          this.isPassword = false;
        }
      },
//      check : function(event){
//        //获取值
//        var name = this.name;
//        var password = this.password;
//        if(name == '' || password == ''){
//          this.$message({
//            message : '账号或密码为空！',
//            type : 'error'
//          })
//          return;
//        }
//        $.ajax({
//          url : 'login',
//          type : 'post',
//          data : {
//            name : name,
//            password : password
//          },
//          success : function(data) {
//            var result = data.result;
//            if(result == 'true' || result == true){
//              alert("登录成功");
//            }else {
//              alert("登录失败");
//            }
//          },
//          error : function(data) {
//            alert(data);
//          },
//          dataType : 'json',
//        })
//      },

      register() {
       var data = {
           userName: 'xjw',
           password: 'MTIzNDU2'
         };
        this.$http.post('/api/web/login',data).then(function(data) {
          console.log(data);

        });
//        return;
//        var data = {
//          userName: 'xjw',
//          password: 'MTIzNDU2'
//        };
//        data = JSON.stringify(data);
//        axios({
//          url: 'http://192.168.1.116:8080/web/login',
//          method: 'post',
//          data: data,
//          transformRequest: [function (data) {
//            // Do whatever you want to transform the data
//            console.log(data);
//          }],
//          headers: {
//            'Content-Type': 'application/json'
//          }
//        })
//        axios.post('http://192.168.1.116:8080/web/login').then(function(data) {
//          console.log(data);
//        })
        let routes = [
          {
            path: 'userManage',
            title: '用户管理',
            show: true,
            icon: 'icon-wxSet',
            children: [
              {
                path: 'demographic',
                show: true,
                title: '用户信息统计'
              },
              {
                path: 'individual',
                show: true,
                title: '单个用户信息查看'
              },
              {
                path: 'Account',
                show: true,
                title: '单个用户账号解锁'
              },
              {
                path: 'recycle',
                show: true,
                title: '账号回收'
              }
            ]
          },

          {
            path: 'tourist',
            title: '游客管理',
            show: true,
            icon: 'icon-userManage',
            children: [
              {
                path: 'touristInformation',
                show: true,
                title: '游客信息统计'
              },
              {
                path: 'touristCheck',
                show: true,
                title: '单个游客信息查看'
              },
              {
                path: 'touristManage',
                show: true,
                title: '游客管理'
              }
            ]
          },

          {
            path: 'associationManage',
            title: '社群管理',
            show: true,
            icon: 'icon-orderManage',
            children: [
              {
                path: 'associationList',
                show: true,
                title: '社群信息统计'
              },
              {
                path: 'associationCrew',
                show: true,
                title: '群人员管理'
              },
              {
                path: 'associationAlone',
                show: true,
                title: '单个社群内容管理'
              },
              {
                path: 'associationDissolution',
                show: true,
                title: '解散社群'
              }
            ]
          },

          {
            path: 'contentManage',
            show: true,
            title: '内容管理',
            icon: 'icon-areaSet',
            children: [
              {
                path: 'imageText',
                show: true,
                title: '图文'
              },
              {
                path: 'video',
                show: true,
                title: '视频'
              },
              {
                path: 'notification',
                show: true,
                title: '消息推送'
              },
              {
                path: 'reportManage',
                show: true,
                title: '举报管理'
              },
              {
                path: 'sensitiveWord',
                show: true,
                title: '敏感词管理'
              }
            ]
          },

          {
            path: 'labelManage',
            title: '标签管理',
            show: true,
            icon: 'icon-finance',
            children: [
              {
                path: 'interestManage',
                show: true,
                title: '兴趣管理'
              },
              {
                path: 'strongPoint',
                show: true,
                title: '特长标签'
              }
            ]
          },

          {
            path: 'AdminSet',
            title: '管理员',
            show: true,
            icon: 'icon-adminSet',
            children: [
              {
                path: 'AdminList',
                show: true,
                title: '管理员列表'
              },
              {
                path: 'addNumber',
                show: true,
                title: '添加管理员账号'
              },
              {
                path: 'authoritySet',
                show: true,
                title: '设置管理员权限'
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
          },

          {
            path: 'editor',
            title: '富文本',
            show: true,
            icon: 'icon-adminSet',
            children: [
              {
                path: 'markDown',
                show: true,
                title: 'markDown编辑器'
              }
            ]
          }
        ];
        /!* 过滤路由，把要显示了路由存储（权限管理） *!/
        for(let i=0;i<routes.length;i++) {
          if(routes[i].show) {
            /!* 循环子级 *!/
            let childrenRoutes = routes[i].children;
            for(let j=0;j<childrenRoutes.length;j++) {
              if(!childrenRoutes[j].show) {
                /!* 子级的show为false则直接删除 *!/
                childrenRoutes.splice(j,1);
              }
            }
          }else {
            /!* 如果第一级都不显示，则直接删除这个 *!/
            routes.splice(i,1);
          }
        }
        console.log(routes);
        localStorage.setItem('routes',JSON.stringify(routes));
        location.href = 'index.html';
      }
    }
  }
</script>

<style>
  html,body {
    width: 100%;
    height: 100%;
  }
  body {
    display: flex;
    background: #ffffff;
  }
  .login-title {
    margin-top: 27px;
    font-size: 30px;
    text-align: center;
    color: #777777;
    margin-bottom: 50px;
  }
  .loginBox {
    padding: 50px 10px 50px 10px;
    width: 500px;
    margin: auto;
  }
  .loginBox > div {
    margin: 25px 0;
  }
  .text-right {
    text-align: right;
  }
  #login{
    width: 50%;
    height: 50px;
    font-size: 25px;
    background: rgb(224, 31, 84);
    border-color: rgb(224, 31, 84);
    margin-left: 107px;
  }
  .bigLogin{
    margin: auto;
    border: 1px solid #b7b7b7;
  }
  #phone{
    height: 50px;
  }
  #password{
    height: 50px;
  }
</style>
