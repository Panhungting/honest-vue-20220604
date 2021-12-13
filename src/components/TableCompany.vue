<template>
  <div style="display: flex">
    <table class="table">
      <tr>
        <th>会社名</th>
        <td>株式会社オネストインフォ<br />（英語表記 Honest Info, Inc.）</td>
      </tr>
      <tr>
        <th>設立</th>
        <td>平成30年1月</td>
      </tr>
      <tr>
        <th>資本金</th>
        <td>2000万円</td>
      </tr>
      <tr>
        <th>所在地</th>
        <td>
          〒103-0003 東京都中央区日本橋横山町7-17<br />オフィス日本橋8階802号室
        </td>
      </tr>
      <tr>
        <th>電話番号</th>
        <td>03-5843-6794</td>
      </tr>
      <tr>
        <th>ファクス</th>
        <td>03-5843-6794</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td><a href="mailto:hr@honest-info.co.jp">hr@honest-info.co.jp</a></td>
      </tr>
      <tr>
        <th>取引銀行</th>
        <td>三菱UFJ銀行</td>
      </tr>
    </table>
    <el-image :src="require('@/assets/image/company02.jpg')"></el-image>
  </div>
</template>
<style scoped src="../common/table.css">
</style>
<script>
export default {
  name: "TableCompany",
  data() {
    return {};
  },
};
</script>