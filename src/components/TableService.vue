<template>
  <div style="display: flex">
    <table class="table">
      <tr>
        <th>①</th>
        <td>ソフトウェアの設計・開発</td>
      </tr>
      <tr>
        <th>②</th>
        <td>ホームページのデザイン・構築・運営</td>
      </tr>
      <tr>
        <th>③</th>
        <td>パッケージ開発・導入・保守</td>
      </tr>
      <tr>
        <th>④</th>
        <td>流通・製造業のソリューション</td>
      </tr>
      <tr>
        <th>⑤</th>
        <td>日・中・英の技術翻訳など</td>
      </tr>
    </table>
    <el-image :src="require('@/assets/image/company02.jpg')"></el-image>
  </div>
</template>
<style scoped src="../common/table.css"></style>
<style scoped>
.table th {
  width: 150px;
  padding-left: 50px;
}
</style>
<script>
export default {
  name: "TableService",
  data() {
    return {};
  },
};
</script>