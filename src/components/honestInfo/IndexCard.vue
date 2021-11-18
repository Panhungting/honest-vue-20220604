<template>
  <div class="card">
    <div class="card-block" v-for="info in cardInfo" :key="info.title">
      <div class="card-img">
        <div class="cover">
          <p>{{info.content}}</p>
        </div>
        <el-image :src="info.imgUrl"></el-image>
      </div>
      <div class="card-nav">
        <p>{{info.title}}</p>
        <router-link :to="{ name: info.link }">
          <p class="link">詳細を確認する</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  margin-top: 20px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.card-block {
  width: 300px;
  background-color: pink;
}
.card-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: none;
}
.el-image {
  width: 100%;
  height: 100%;
}
.card-img:hover .cover {
  display: block;
}
.card-nav {
  height: 80px;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.card-nav p {
  font-size: 30px;
  color: #fff;
  text-align: center;
  /* line-height: 70px; */
  margin: 0 auto;
}
.card-nav .link {
  margin: 0;
  font-size: 14px;
  /* line-height: 20px; */
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.cover p {
  font-size: 10px;
  color: #fff;
  text-align: left;
  padding: 10px;
  line-height: 20px;
}
</style>
<script>
export default {
  name: "IndexCard",
  data() {
    return {
      cardInfo: [
        {
          title: "会社概要",
          content:"日々進化するIT環境の中で、社員の技術力を磨きつつ、お客様のニーズに融合させ、共に発展し続けていける企業を目指します。",
          imgUrl: require("@/assets/image/company.jpg"),
          link: "Company",
        },
        {
          title: "経営理念",
          content:"誠実と信頼を礎に、互いの立場を尊重し合い、win-winの関係を築き、情報ビジネスの繁栄に貢献したい所存です。",
          imgUrl: require("@/assets/image/principium.jpg"),
          link: "Privacy",
        },
        {
          title: "事業内容",
          content:"業務システム開発、パッケージソフト開発、人材派遣等の事業を展開しております。",
          imgUrl: require("@/assets/image/service.jpg"),
          link: "Service",
        },
        {
          title: "人材募集",
          content:"社員それぞれが自身の生活を大切にしながら、持てる力を仕事で最大限に発揮し、やり甲斐を感じられる職場づくりに取り組んで参ります。",
          imgUrl: require("@/assets/image/recruit.jpg"),
          link: "Recruit",
        },
      ]
    };
  },
  methods: {},
};
</script>