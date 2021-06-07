<template>
  <div>
    <el-table stripe style="width: 100%" :data="companyData">
      <el-table-column prop="title" width="180"></el-table-column>
      <el-table-column prop="content"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      companyData: [
        {
          title: "会社名",
          content: "株式会社オネストインフォ",
        },
        {
          title: "設立",
          content: "平成30年1月",
        },
        {
          title: "資本金",
          content: "950万円",
        },
        {
          title: "所在地",
          content:
            "〒103-0003 東京都中央区日本橋横山町7-17  オフィス日本橋8階802号室",
        },
        {
          title: "電話番号",
          content:
            "03-5843-6794",
        },
        {
          title: "ファクス",
          content:
            "03-5843-6794",
        },
        {
          title: "メールアドレス",
          content:
            "hr@honest-info.co.jp",
        },
        {
          title: "取引銀行",
          content:
            "三菱UFJ銀行",
        },
      ],
    };
  },
};
</script>