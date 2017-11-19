<template>
  <div>
    <div v-show="addusers">
      <div>
        <span>id</span>
        <el-input v-model="tableData6.id"></el-input>
      </div>
      <div>
        <span>日期</span>
        <el-input v-model="tableData6.date"></el-input>
      </div>
      <div>
        <span>姓名</span>
        <el-input v-model="tableData6.name"></el-input>
      </div>
      <div>
        <el-button @click="sure1">提交</el-button>
      </div>
    </div>
    <div v-show="adduser" >
    <el-button type="success" @click="open3">添加</el-button>

    <div>



      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
    </div>
      <el-table
        v-show="tableShow"
        :data="newData"
        height="250"
        border
        style="width: 80%">
        <el-table-column
          prop="id"
          label="id"
          width="200">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          width="220"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="handle"
          label="操作">
         <template slot-scope="scope">
          <el-button type="primary" @click="handleClick(scope.row)">编辑</el-button>
           <el-popover
             ref="popover4"
             placement="right"
             width="400"
             trigger="click">
             <!--<el-table>-->
               <!--<el-input width="150" label="id" property="id"></el-input>-->
               <!--<el-table-column width="150" property="date" label="日期"></el-table-column>-->
               <!--<el-table-column width="100" property="name" label="姓名"></el-table-column>-->
               <!--<el-table-column width="150" property="address" label="地址"></el-table-column>-->
             <!--</el-table>-->
             <div>
               日期：
               <el-input width="150" v-model="tableData5.date"></el-input>
             </div>
           </el-popover>
          <el-button type="success" v-popover:popover4 @click="see(scope.row)">查看</el-button>
           <el-button type="danger" @click="deleteRow(scope.row)">删除</el-button>
         </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="userInfoBox">
      <div class="userInfo" v-show="treeShow">
        <div>
          日期：
          <el-input
            v-model="tableData4.date">
          </el-input>
        </div>

        <div>
          名字：
          <el-input
            v-model="tableData4.name">
          </el-input>
        </div>

        <div>
          地址：
          <el-input
            v-model="tableData4.address">
          </el-input>
        </div>

        <div>
          <el-button @click="sure">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData4: '',
        tableData5: '',
        tableData6: {
          id: '',
          date: '',
          name: '',
          address: ''
        },
        tableShow: true,
        treeShow: false,
        adduser: true,
        addusers: false,
        filterText: '',
        tableData3: [{
          id: '1',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '3',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '4',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '5',
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '6',
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '7',
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      open3() {
        this.adduser = false;
        this.addusers = true;
      },
      sure1() {
        this.tableData6.id = this.tableData3.length + 1;
        let deepObj = JSON.parse(JSON.stringify(this.tableData6));
        this.tableData3.push(deepObj);
        for(let key in this.tableData6) {
          this.tableData6[key] = '';
        }
        this.$message({
          message: '修改成功',
          type: 'success'
        });


        /* 跟计算属性获取path级路由去重， */
        this.addusers = false;
        this.adduser = true;

      },
      deleteRow(row) {
        console.log(row.id);
        for (let i = 0; i < this.tableData3.length; i++) {
          if (this.tableData3[i].id == row.id) {
            this.tableData3.splice(i, 1);
            break;
          }
        }
      },
      see(row) {
        console.log(row);
        this.tableData5 = row;
//        this.treeShow = true;
//        this.tableShow = false;
      },
      handleClick(row) {
        console.log(row);
        this.tableData4 = row;
        this.treeShow = true;
        this.tableShow = false;
      },
      sure() {
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        /* 跟计算属性获取path级路由去重， */
        this.tableShow = true;
        this.treeShow = false;
      }
    },
      computed: {
        newData() {
          return this.tableData3.filter(item => {
              return item.name.indexOf(this.filterText) != -1 || item.id.indexOf(this.filterText) != -1;
        })
        }
      }

  }
//    computed:{
//      newData() {
//        return this.tableData3.filter(item=>{
//            return item.name.indexOf(this.filterText)!=-1||item.date.indexOf(this.filterText)!=-1;
//          })
//      }
//    }

</script>

<style>
  .userInfoBox {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .userInfo {
    width: 400px;
  }
</style>
