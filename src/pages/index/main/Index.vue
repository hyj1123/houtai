<template>
  <el-container>
    <el-header>
      <div class="header">
        <el-menu default-active="1" class="el-menu-demo header-bar" mode="horizontal"  >
          <!--<el-menu-item class="logo" index="1" id="shouye"><a href="../../home/dashBoard.vue">爱的后台管理系统</a></el-menu-item>-->
          <el-menu-item class="logo" index="1" id="shouye"><router-link to="/home/dashBoard">爱的后台管理系统</router-link></el-menu-item>
          <el-submenu class="userBtn" index="2">
            <template slot="title" >admin</template>
            <el-menu-item index="2-1"><a href="../login.html">退出登录</a></el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-header>
    <el-container>
      <el-aside width="234px">
        <el-menu
          :default-active="activeNav"
          background-color="#545c64"
          text-color="#fff"
          unique-opened
          style="height: 100%;"
          active-text-color="#ffd04b">
          <el-submenu v-for="item in newRoutes" :key="item.path" :index="item.path">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="ite in item.children" v-show="!ite.hidden" :key="ite.path" :index="ite.path" @click.native="routeTo({route: `/${item.path}/${ite.path}`,title: ite.title})">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ ite.title }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-tabs v-model="rightRoutesActive" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
          <el-tab-pane name="/home/dashBoard" label="主页面板"></el-tab-pane>
          <el-tab-pane
            v-for="(item, index) in rightRoutes"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'
  export default {
    data() {
      return {
        newRoutes: []
      }
    },
    methods: {
      ...mapMutations(['addTab']),
      routeTo(routeInfo) {
        this.$router.push(routeInfo.route);
        this.addTab(routeInfo);
      },
      clickTab(tab) {
        this.$router.push({
          path: tab.name
        });
      },
      removeTab(a) {
        this.$store.commit('removeTab',a);
        this.$router.push(this.$store.state.rightRoutesArr[this.$store.state.rightRoutesArr.length-1]);
      }
    },
    created() {
      let newRoutes = localStorage.getItem('newRoutes');
      /* 初始化菜单 */
      this.newRoutes = JSON.parse(newRoutes);
      /* 第一次应该路由加载的是 */
      this.$router.push('/home/dashBoard');
    },
    computed: {
      ...mapState(['num','rightRoutes','rightRoutesArr']),
      rightRoutesActive: {
        get() {
          return this.$store.state.rightRoutesActive;
        },
        set(newValue) {
          this.activeRouter = newValue;
          this.$store.commit('changeRightRoutesActive',newValue)
        }
      },
      activeNav: {
        get() {
          return this.$store.state.activeNav;
        },
        set(newValue) {
          this.$store.commit('changeActiveNav',newValue);
        }
      }
    }
  }
</script>

<style>
  .el-tabs__header {
    background: #f9f9f9;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: silver;
  }
  .page-header {
    border-bottom: 1px solid #ccc;
  }
  .el-container {
    height: 100%;
  }
  .el-main {
    padding: 0;
  }
  .iconfont {
    color: #f5f5f5 !important;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  .header-bar {
    background: #545c64;
  }
  .userBtn {
    float: right !important;
  }
  .logo {
    font-size: 18px;
  }
  .logo a{
    text-decoration: none;
  }
  #shouye{
    width: 235px;
  }
</style>
