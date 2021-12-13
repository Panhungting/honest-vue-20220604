<template>
  <div style="display: flex">
    <table class="table">
      <tr>
        <th>TEL</th>
        <td><p class="tel">03-5843-6794</p></td>
      </tr>
      <tr>
        <th>FAX</th>
        <td><p class="tel">03-5843-6794</p></td>
      </tr>
      <tr>
        <th>E-mail</th>
        <td><a href="mailto:hr@honest-info.co.jp">hr@honest-info.co.jp</a></td>
      </tr>
      <tr>
        <th>所在地</th>
        <td>
          〒103-0003 東京都中央区日本橋横山町7-17<br />オフィス日本橋8階802号室
        </td>
      </tr>

      <tr>
        <th>アクセス</th>
        <td>
          <div style="position: relative;overflow-hidden;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.321246457953!2d139.78182391489605!3d35.69371153689546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188eb2b08de793%3A0x121055de3c2707e0!2z44CSMTAzLTAwMDMg5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL5qiq5bGx55S677yX4oiS77yR77yX!5e0!3m2!1sja!2sjp!4v1559338598111!5m2!1sja!2sjp"
              width="600"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
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
  name: "TableContact",
  data() {
    return {};
  },
};
</script>