/**
 * Created by lyx on 2017/11/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 1,
    activeNav: 'dashBoard',
    rightRoutes: [],// 保存路由和title
    rightRoutesArr: ['/home/dashBoard'],// 只保存路由,用来判断是否已经存在,默认首页已经开启
    rightRoutesActive: '/home/dashBoard'
  },
  mutations: {
    addTab(state,routeInfo) {
      /* 判断右边路由标签有没有 */
      if(state.rightRoutesArr.indexOf(routeInfo.route)!=-1) {
        /* 已存在，直接active */
        state.rightRoutesActive = routeInfo.route;
      }else {
        state.rightRoutesArr.push(routeInfo.route);
        state.rightRoutesActive = routeInfo.route;// 第一次设置，为了active
        state.rightRoutes.push({
          title: routeInfo.title,
          name: routeInfo.route
        })
        console.log(4);
      }
    },
    changeRightRoutesActive(state,active) {
      state.rightRoutesActive = active;
    },
    changeActiveNav(tab) {
      state.activeNav = tab.name.split('/')[2];
    },
    removeTab(state,a) {
      /* a为路由信息（tab的name） */
      if(a == '/home/dashBoard') {
        // 首页不关闭
      }else {
        let index = state.rightRoutesArr.indexOf(a);
        state.rightRoutesArr.splice(index,1);// arr因为默认有一个首页路由
        state.rightRoutes.splice(index-1,1);// 而rightRoutes只保存了点击添加的路由，并没有首页，所以要减去1
        /* 判断关闭的是否是active */
        if(state.rightRoutesActive == a) {
          /* 如果关闭的是处于active的，则让arr最后一个变成active */
          state.rightRoutesActive = state.rightRoutesArr[state.rightRoutesArr.length-1];
        }
      }
    },
    changeNum(state) {
      state.num++;
    }
  }
})

export default store
