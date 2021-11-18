<template>
  <div style="display: flex">
    <el-table stripe style="width: 70%" :data="tableDate[index]">
      <el-table-column prop="title" width="200"></el-table-column>
      <el-table-column prop="content"></el-table-column>
    </el-table>
    <el-image :src="picture[index]" class="detpic"></el-image>
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
  data() {
    return {
      tableDate: [
        // company
        [
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
            content: "2000万円",
          },
          {
            title: "所在地",
            content:
              "〒103-0003 東京都中央区日本橋横山町7-17 オフィス日本橋8階802号室",
          },
          {
            title: "電話番号",
            content: "03-5843-6794",
          },
          {
            title: "ファクス",
            content: "03-5843-6794",
          },
          {
            title: "メールアドレス",
            content: "hr@honest-info.co.jp",
          },
          {
            title: "取引銀行",
            content: "三菱UFJ銀行",
          },
        ],
        // Service
        [
          {
            title: "①",
            content: "ソフトウェアの設計・開発",
          },
          {
            title: "②",
            content: "ホームページのデザイン・構築・運営",
          },
          {
            title: "③",
            content: "パッケージ開発・導入・保守",
          },
          {
            title: "④",
            content: "流通・製造業のソリューション",
          },
          {
            title: "⑤",
            content: "日・中・英の技術翻訳など",
          },
        ],
        // Recruit
        [
          {
            title: "募集職種",
            content: "プロジェクトマネージャー(PM)",
          },
          {
            title: "仕事内容",
            content: "ホームページのデザイン・構築・運営",
          },
          {
            title: "技術分野",
            content:
              "Java、Struts、 Spring、 Terasoluna、intra-mart、 Oracle、DB2、 PL/SQL、C/C++/VC++、C#、VB.NET、COBOL、Python、PHP、 Ruby on Rails、IOS、 Android、SAP ABAPなど",
          },
          {
            title: "応募条件",
            content:
              "IT関連の大学・専門学校卒業のシステム、アプリ設計・開発経験者",
          },
          {
            title: "給与",
            content: "経験／スキルより優遇",
          },
          {
            title: "休日休暇",
            content: "完全週休2日制（土・日）、祝日",
          },
          {
            title: "就業時間",
            content: "9:00～18:00　※プロジェクトにより若干異なります",
          },
          {
            title: "応募方法",
            content:
              "お気軽に履歴書・経歴書を電子メールにて hr@honest-info.co.jp 宛にご送付くださいませ。",
          },
        ],
        // Privacy Policy
        [
          {
            title: "個人情報保護方針",
            content: "",
          },
        ],
        // contact
        [
          {
            title: "TEL",
            content: "03-5843-6794",
          },
          {
            title: "FAX",
            content: "03-5843-6794",
          },
          {
            title: "E-mail",
            content: "hr@honest-info.co.jp",
          },
        ],
      ],
      picture: [require("@/assets/image/company02.jpg")],
    };
  },
  computed: {
    index() {
      return this.$store.state.navIndex - 1;
    },
  },
};
</script>