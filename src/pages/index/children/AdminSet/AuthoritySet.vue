<template>
<el-tree
  :data="data2"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>
</template>
<script>
  export default {
//    watch: {
//      filterText(val) {
//        this.$refs.tree2.filter(val);
//      }
//    },
    data() {
      return {
        filterText:'',
        data2: [{
          id: 1,
          label: '用户管理',
          children: [{
            id: 2,
            label: '用户信息统计'
          }, {
            id: 3,
            label: '单个用户信息查看'
          },{
            id: 4,
            label: '单个用户账号解锁'
          },{
            id: 5,
            label: '账号回收'
          }]
        }, {
          id: 11,
          label: '游客管理',
          children: [{
            id: 12,
            label: '游客信息统计'
          }, {
            id: 13,
            label: '单个游客信息查看'
          }, {
            id: 14,
            label: '游客管理'
          }]
        }, {
          id: 21,
          label: '社群管理',
          children: [{
            id: 22,
            label: '社群信息统计'
          }, {
            id: 23,
            label: '群人员管理'
          }, {
            id: 24,
            label: '单个社群内容管理'
          }, {
            id: 25,
            label: '解锁社群'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
