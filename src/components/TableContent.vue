<template>
  <div style="display: flex">
    <el-table stripe style="width: 70%" :data="tableData.list">
      <el-table-column prop="title" width="200"></el-table-column>
      <el-table-column prop="content"></el-table-column>
    </el-table>
    <el-image :src="tableData.picture" class="detpic"></el-image>
  </div>
</template>
<style scoped>
.detpic {
  width: 30%;
  height: auto;
}
.el-image {
  margin-top: 40px;
  width: 360px;
  height: 360px;
}
</style>
<script>
export default {
  name: "TableContent",
  props: ['tableData'],
  data() {
    return {
    };
  },
};
</script>