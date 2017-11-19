/* 注意，由于微信菜单，微信API设置....等路由为第三级路由，Index.vue的router-view只显示第二级路由，需要第三级router-view作跳板，显示第三级路由 */
let allRoutes = [
  {
    path: 'userManage',
    title: '用户管理',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'demographic',
        title: '用户信息统计',
        component: resolve => require(['../children/userManage/demographic.vue'],resolve)
      },
      {
        path: 'individual',
        title: '单个用户信息查看',
        hidden: true,
        component: resolve => require(['../children/userManage/individual.vue'],resolve)
      },
      {
        path: 'Account',
        title: '单个用户账号解锁',
        component: resolve => require(['../children/userManage/Account.vue'],resolve)
      },
      {
        path: 'recycle',
        title: '账号回收',
        component: resolve => require(['../children/userManage/recycle.vue'],resolve)
      }
    ]
  },

  {
    path: 'tourist',
    title: '游客管理',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'touristInformation',
        title: '游客信息统计',
        component: resolve => require(['../children/tourist/touristInformation.vue'],resolve)
      },
      {
        path: 'touristCheck',
        title: '单个游客信息查看',
        component: resolve => require(['../children/tourist/touristCheck.vue'],resolve)
      },
      {
        path: 'touristManage',
        title: '游客管理',
        component: resolve => require(['../children/tourist/touristManage.vue'],resolve)
      }
    ]
  },

  {
    path: 'associationManage',
    title: '社群管理',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'associationList',
        title: '社群信息统计',
        component: resolve => require(['../children/associationManage/associationList.vue'],resolve)
      },
      {
        path: 'associationCrew',
        title: '群人员管理',
        component: resolve => require(['../children/associationManage/associationCrew.vue'],resolve)
      },
      {
        path: 'associationAlone',
        title: '单个社群内容管理',
        component: resolve => require(['../children/associationManage/associationAlone.vue'],resolve)
      },
      {
        path: 'associationDissolution',
        title: '解散社群',
        component: resolve => require(['../children/associationManage/associationDissolution.vue'],resolve)
      }
    ]
  },

  {
    path: 'contentManage',
    title: '内容管理',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'imageText',
        title: '图文',
        component: resolve => require(['../children/contentManage/imageText.vue'],resolve)
      },
      {
        path: 'video',
        title: '视频',
        component: resolve => require(['../children/contentManage/video.vue'],resolve)
      },
      {
        path: 'notification',
        title: '消息推送',
        component: resolve => require(['../children/contentManage/notification.vue'],resolve)
      },
      {
        path: 'reportManage',
        title: '举报管理',
        component: resolve => require(['../children/contentManage/reportManage.vue'],resolve)
      },
      {
        path: 'sensitiveWord',
        title: '敏感词管理',
        component: resolve => require(['../children/contentManage/sensitiveWord.vue'],resolve)
      }
    ]
  },

  {
    path: 'labelManage',
    title: '标签管理',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'interestManage',
        title: '兴趣管理',
        component: resolve => require(['../children/labelManage/interestManage.vue'],resolve)
      },
      {
        path: 'strongPoint',
        title: '特长标签',
        component: resolve => require(['../children/labelManage/strongPoint.vue'],resolve)
      }
    ]
  },

  {
    path: 'AdminSet',
    title: '管理员',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'AdminList',
        title: '管理员列表',
        component: resolve => require(['../children/AdminSet/AdminList.vue'],resolve)
      },
      {
        path: 'addNumber',
        title: '添加管理员账号',
        component: resolve => require(['../children/AdminSet/addNumber.vue'],resolve)
      },
      {
        path: 'authoritySet',
        title: '权限设置',
        component: resolve => require(['../children/AdminSet/authoritySet.vue'],resolve)
      }
    ]
  },

  {
    path: 'Echart',
    title: 'Echart',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'Bar',
        title: '柱状图',
        component: resolve => require(['../children/Echart/Bar.vue'],resolve)
      }
    ]
  },

  {
    path: 'Editor',
    title: '富文本',
    component: resolve => require(['@/components/commonRoute.vue'],resolve),
    children: [
      {
        path: 'markDown',
        title: 'markDown编辑器',
        component: resolve => require(['../children/Editor/MarkDown.vue'],resolve)
      }
    ]
  }
];
import Index from '../main/Index.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/home/dashBoard',
    children: allRoutes
  },
  {
    path: '/404',
    name: '404',
    component: resolve => require(['@/components/404.vue'],resolve)
  },
  {
    path: '*',
    redirect: '/404'
  }
];
export default routes

