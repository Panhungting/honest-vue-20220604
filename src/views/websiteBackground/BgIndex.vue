<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <bg-aside></bg-aside>

      <el-container>
        <el-main>
          <el-table stripe height="100%" width="100%" :data="employeeList">
            <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="gender" label="性别" width="80">
            </el-table-column>
            <el-table-column prop="telephone" label="电话" width="150">
            </el-table-column>
          <el-table-column prop="mail" label="邮箱" width="220">
            </el-table-column>
            <el-table-column prop="" label="操作" width="120px">
              <!-- <template> -->
                <router-link :to="{name:'employee'}">
                  <el-button type="text" size="small">编辑</el-button>
                </router-link>
                <el-button @click="delE" type="text" size="small" style="margin-left:10px">delete</el-button>
              <!-- </template> -->
            </el-table-column>
          </el-table>
          <el-pagination small layout="prev, pager, next" :total="50">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>

<script>
import BgAside from './../../components/BgAside'
export default {
  name: 'BgIndex',
  components: {
    BgAside,
  },
  data() {
    let item = {
      name: "honest01",
      gender: 0,
      telephone: "00000000000",
      mail: "1111111111@aaaaa.com",
    };
    return {
      employeeList: Array(10).fill(item),
      // employeeList: [{
      //   name: "honest01",
      //   gender: 0,
      //   telephone: "00000000000",
      //   mail: "1111111111@aaaaa.com"
      // }],
    };
  },
  methods: {
  },
};
</script>