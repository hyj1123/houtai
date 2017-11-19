<template>
  <div>
    <div style="margin: 18px 83px;">
      <div style="margin-bottom: 10px;border-bottom:1px solid #777777;padding-bottom: 10px;">单个社群内容信息</div>
      <!--<div>-->
        <!--<span>用户数：11000人</span>-->
        <!--<span style="margin-left: 55px;">活跃用户数：10000人</span>-->
      <!--</div>-->
    </div>
    <div style="margin-left: 80px;margin-top: 10px">
      <el-button type="primary" icon="el-icon-search" @click.native="test">自定义查询</el-button>
      <!--<el-button type="primary">导出</el-button>-->
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
          prop="articleName"
          label="文章名称"
          v-model="tableData.articleName"
          width="150">
        </el-table-column>
        <el-table-column
          prop="articleLink"
          label="文章链接"
          v-model="tableData.articleLink"
          width="150">
        </el-table-column>
        <el-table-column
          prop="articleIssue"
          label="文章发布人"
          v-model="tableData.articleIssue"
          width="150">
        </el-table-column>
        <el-table-column
          prop="articleDate"
          label="文章发布时间"
          v-model="tableData.articleDate"
          width="150">
        </el-table-column>
        <el-table-column
          prop="articleStatus"
          label="文章状态"
          v-model="tableData.articleStatus"
          width="150">
        </el-table-column>
        <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
            <el-button @click="handle(scope.row)" type="text" size="small"><router-link to="/userManage/individual">删除</router-link></el-button>
            <!--<el-button @click="handle(scope.num)" type="text" size="small"><router-link to="/userManage/individual">查看</router-link></el-button>-->
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
            label: '文章发布人',
            value: '文章发布人-articleIssue'
          },
          {
            label: '文章状态',
            value: '文章状态-articleStatus'
          }
        ],
        tableData: [{
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'音乐达人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'2',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
        }, {
          num:'1',
          articleName:'就像lost迷失，越狱一样',
          articleLink:'',
          articleIssue:'文章发布人',
          articleDate: '2016-05-02',
          articleStatus: '有效'
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
            return item.articleStatus.indexOf(this.filterText)!=-1||item.num.indexOf(this.filterText)!=-1;
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

