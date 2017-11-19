<template>
  <div>
    <div style="width: 500px;margin-left: 20px">
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="当前操作的管理员id">
          <el-input v-model="form.userId"></el-input>
        </el-form-item>
        <el-form-item label="要添加的账号名真实姓名">
          <el-input v-model="form.addUserName"></el-input>
        </el-form-item>
        <el-form-item label="要添加的账号名密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="添加的账号名真实姓名">
          <el-input v-model="form.realName"></el-input>
        </el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        form: {
          userId: '',
          addUserName: '',
          password: '',
          realName: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$http.post("/web/admin/addUser", this.form).then(function (res) {
          if (res.status == 200) {
            this.form.push(res.body);
//              alert(JSON.stringify(res.body));
            this.form.userId = '';
            this.form.addUserName = '';
            this.form.password = '';
            this.form.password = ''
          }
        });
        alert(JSON.stringify(this.datas));
        console.log(this.form);
        console.log('submit!');
      }
    }
  }
</script>
