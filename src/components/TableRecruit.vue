<template>
  <div style="display: flex">
    <table class="table">
      <tr>
        <th>募集職種</th>
        <td>
          プロジェクトマネージャー(PM)<br />
          プロジェクトリーダー(PL)<br />
          システムエンジニア(SE)<br />
          プログラマー(PG)<br />
          ネットワーク・サーバーエンジニアなど<br />
        </td>
      </tr>
      <tr>
        <th>仕事内容</th>
        <td>
          WEB系、オープン系<br />
          汎用系システムの設計・開発<br />
          アプリの設計・開発
        </td>
      </tr>
      <tr>
        <th>技術分野</th>
        <td>
          Java、Struts、 Spring、 Terasoluna、intra-mart、 Oracle<br />
          DB2、 PL/SQL、C/C++/VC++、C#、VB.NET、COBOL<br />
          Python、PHP、 Ruby on Rails、IOS、 Android、SAP ABAPなど
        </td>
      </tr>
      <tr>
        <th>応募条件</th>
        <td>IT関連の大学・専門学校卒業のシステム、アプリ設計・開発経験者</td>
      </tr>
      <tr>
        <th>給与</th>
        <td>経験／スキルより優遇</td>
      </tr>
      <tr>
        <th>休日休暇</th>
        <td>完全週休2日制（土・日）、祝日</td>
      </tr>
      <tr>
        <th>就業時間</th>
        <td>
          9:00～18:00<br />
          ※プロジェクトにより若干異なります
        </td>
      </tr>
      <tr>
        <th>応募方法</th>
        <td>
          お気軽に履歴書・経歴書を電子メールにて
          <a href="mailto:hr@honest-info.co.jp">hr@honest-info.co.jp</a>
          宛にご送付くださいませ。
        </td>
      </tr>
    </table>
    <el-image :src="require('@/assets/image/company02.jpg')"></el-image>
  </div>
</template>
<style scoped src="../common/table.css">
</style>
<script>
export default {
  name: "TableRecruit",
  data() {
    return {};
  },
};
</script>