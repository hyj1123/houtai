<template>
  <div>
    <div style="margin: 18px 83px;">
      <div style="margin-bottom: 10px;border-bottom:1px solid #777777;padding-bottom: 10px;">统计信息</div>
      <div>
        <span>用户数：11000人</span>
        <span style="margin-left: 55px;">活跃用户数：10000人</span>
      </div>
    </div>
    <div style="margin-left: 80px;margin-top: 10px">
      <el-button type="primary" icon="el-icon-search" @click.native="test">自定义查询</el-button>
      <el-button type="primary">导出</el-button>
      <div style="float:left;margin-right: 73px">
        筛选条件：
        <el-select v-model="optionSelected" @change="addConditions" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div v-for="i in conditions" style="display: flex;margin-left: 16px;margin-top: 10px">
          <div style="display: flex;align-items:center;width: 60px"><span>{{ i.label }}</span></div>
          <div style="display: flex;width: 150px"><el-input v-model="postData[i.name]" width="100px" placeholder="请输入值"></el-input></div>
          <div  style="display: flex;align-item:center;" @click="back(i)" ><el-button icon="el-icon-delete" type="danger" size="mini">删除</el-button></div>
        </div>
        <!--<el-button @click.native="test">测试</el-button>-->
      </div>
    </div>
    <div style="margin-left: 76px">
      <div style="width: 80%">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
      </div>
      <el-table
        :data="newData"
        border
        style="width: 90%;">
        <el-table-column
          prop="num"
          label="序号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="herdId"
          label="群ID"
          v-model="tableData.herdId"
          width="150">
        </el-table-column>
        <el-table-column
          prop="herdName"
          label="社群名称"
          v-model="tableData.herdName"
          width="150">
        </el-table-column>
        <el-table-column
          prop="herdHost"
          label="群主"
          width="150">
        </el-table-column>
        <el-table-column
          prop="herdNum"
          label="社群人数"
          v-model="tableData.herdNum"
          width="150">
        </el-table-column>
        <el-table-column
          prop="herdLabel"
          label="群标签"
          v-model="tableData.herdLabel"
          width="100">
        </el-table-column>
        <el-table-column
          prop="createTime"
          v-model="tableData.createTime"
          width="100"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="herdStatus"
          v-model="tableData.herdStatus"
          width="100"
          label="群状态">
        </el-table-column>
        <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
            <el-button @click="handle(scope.row)" type="text" size="small"><router-link to="/associationManage/associationAlone">查看群内容</router-link></el-button>
            <!--<el-button @click="handle(scope.num)" type="text" size="small"><router-link to="/userManage/individual">查看</router-link></el-button>-->
            <el-button type="text" size="small">解散社群</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
  export default {
//        watch: {
//      filterText(val) {
//        this.tableData(val);
//      }
//    },
    data() {
      return {
        filterText:'',
        conditions: [],
        optionSelected: '',
        postData: {},
        options: [
          {
            label: '姓名',
            value: '姓名-herdHost'
          },
          {
            label: '创建时间',
            value: '创建时间-createTime'
          }
        ],
        tableData: [{
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'9999'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'888'
        }, {
          num:'1',
          herdId:'456986',
          herdLabel:'是',
          herdStatus:'有效',
          createTime:'2017-05-20',
          herdHost: '刘德华',
          herdName: '我是群主名称1',
          herdNum:'888'
        }]
      }
    },
    methods: {
      addConditions(val) {
        let label = val.split("-")[0];
        let name = val.split("-")[1];
        if (this.conditions.length<=2){
          this.conditions.push({
            label,name
          });
          for(let i=0;i<this.options.length;i++) {
            if(this.optionSelected == this.options[i].value) {
              this.options.splice(i,1);
              this.optionSelected = '';
              break;
            }
          }
        }
      },
      test() {
        console.log(this.postData);
      },
      back(obj) {
        this.options.push({
          label: obj.label,
          value: `${obj.label}-${obj.name}`
        });
        console.log(this.options);
        for(let i=0;i<this.conditions.length;i++) {
          if(this.conditions[i].label == obj.label) {
            this.conditions.splice(i,1);
          }
        }
      },
      handle(row){
        console.log(row);
      }
    },
    computed: {
      newData() {
        return this.tableData.filter(item => {
            return item.herdNum.indexOf(this.filterText)!=-1||item.createTime.indexOf(this.filterText)!=-1;
      })
      }
    }
  }
</script>



<style>
  #aa{
    /*height: 10px;*/
  }
</style>
