<template>
  <div>
    <el-form :model="employeeData" :rules="rules" ref="employeeData" label-width="100px" class="employeeForm">
      <el-form-item label="员工编号" prop="">
        <el-input v-model="employeeData.employeeId" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="employeeData.employeeName"></el-input>
      </el-form-item>
      <el-form-item label="登录账号" prop="loginId">
        <el-input v-model="employeeData.loginId"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="employeeData.password"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="">
        <el-radio-group v-model="employeeData.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址" prop="">
        <el-input v-model="employeeData.address"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="">
        <el-input v-model="employeeData.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="">
        <el-input v-model="employeeData.tel"></el-input>
      </el-form-item>
      <el-form-item label="authority" prop="">
        <el-input v-model="employeeData.authority"></el-input>
      </el-form-item>
      <el-form-item label="deleteFlag" prop="">
        <el-input v-model="employeeData.deleteFlag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('employeeData')">
          立即创建
        </el-button>
        <el-button @click="resetForm('employeeData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      employeeData: {
        employeeId: 1,
        employeeName: "honest",
        gender: 1,
        address: "asdfghjk",
        tel: "07044101811",
        email: "12345@gmail.com",
        loginId: "honest-panda",
        password: 123,
        authority: 0,
        deleteFlag: 0,
        createdAt: "2021-04-27 01:23:34",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
        loginId: [
          { required: true, message: "请输入登录账号", trigger: "change" },
          { min: 3, message: "长度不少于3字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 4, message: "长度不少于4个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    getCurrentdate() {
      let currentdate = new Date();
      let datetime = currentdate.getFullYear() + "-" +
        (currentdate.getMonth() + 1) + "-" +
        currentdate.getDate() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
      return datetime;
    },
  },
};
</script>