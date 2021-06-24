<template>
  <div>
    <el-main>
      <el-form label-width="80px" :model="loginForm" :rules="loginRules">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>
<style scoped>
.el-main {
  width: 400px;
  margin: 80px auto;
}
</style>
<script>
export default {
  name: "BgLogin",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      // 假数据
      user: {
        name: "honest",
        password: "1111",
      },
      loginRules:{
        username: [{message: '请输入用户名', trigger: 'blur'}],
        password: [{validator: validatePass, trigger: 'blur', message: '请输入密码'}],
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push({name:'BgIndex'});
    },
    resetForm() {

    }
  }
};
</script>
