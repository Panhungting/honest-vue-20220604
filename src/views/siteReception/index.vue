<template>
  <div>
    <el-container>
      <el-main>
        <el-carousel :interval="5000" arrow="hover">
          <el-carousel-item v-for="carousel in carouselSrc" :key="carousel">
            <el-image :src="carousel" class="bannerImg"></el-image>
          </el-carousel-item>
        </el-carousel>
        <div class="announce">
          当社では、新型コロナウイルス等の感染予防・拡大防止対策として、お打ち合わせ等で当社の事業所にご来社される方に対して、マスクの着用をお願いしております。
          また、入室の際には当社事業所内に備え付けているアルコール消毒液による手指消毒も併せてお願いしております。ご理解・ご協力を賜りますようお願い申し上げます。
        </div>
        <el-collapse v-model="activeCollapse">
          <el-collapse-item title="ご挨拶" name="1">
            <div>
              古代から今日に至るまで、日本も中国も 「誠実・信用」
              を道徳の涵養の基礎とし、信義を重んじできました。
              株式会社オネストインフォは、古来の美徳を基に誠意を持って、誠実な情報を開示し、
              お客様のご要望に応える信頼性の高いサービスを提供するとともに、社員の期待に沿える職場環境作りを目指し、
              国際社会に貢献するために邁進致します。古代から今日に至るまで、日本も中国も
              「誠実・信用」 を道徳の涵養の基礎とし、信義を重んじできました。
              株式会社オネストインフォは、古来の美徳を基に誠意を持って、誠実な情報を開示し、
              お客様のご要望に応える信頼性の高いサービスを提供するとともに、社員の期待に沿える職場環境作りを目指し、
              国際社会に貢献するために邁進致します。
            </div>
          </el-collapse-item>
          <el-collapse-item title="会社概要" name="2">
            <div>
              日々進化するIT環境の中で、社員の技術力を磨きつつ、お客様のニーズに融合させ、共に発展し続けていける企業を目指します
            </div>
            <div>詳細を確認する</div>
          </el-collapse-item>
          <el-collapse-item title="経営理念" name="3">
            <div>
              誠実と信頼を礎に、互いの立場を尊重し合い、win-winの関係を築き、情報ビジネスの繁栄に貢献したい所存です。
            </div>
            <div>詳細を確認する</div>
          </el-collapse-item>
          <el-collapse-item title="事業内容" name="4">
            <div>
              業務システム開発、パッケージソフト開発、人材派遣等の事業を展開しております。
            </div>
            <div>詳細を確認する</div>
          </el-collapse-item>
          <el-collapse-item title="人材募集" name="5">
            <div>
              社員それぞれが自身の生活を大切にしながら、持てる力を仕事で最大限に発揮し、やり甲斐を感じられる職場づくりに取り組んで参ります。
            </div>
            <div>詳細を確認する</div>
          </el-collapse-item>
        </el-collapse>

        <!-- 这是滑动显示-->
        <!-- <div style="width: 100%" v-for="i in 4" :key="i" class="div01">
          <div class="title01">事業内容</div>
          <div class="introduction">
            業務システム開発、パッケージソフト開発、人材派遣等の事業を展開しております
          </div>
        </div> -->

        <card></card>
      </el-main>
    </el-container>
  </div>
</template>

<style scope>
.el-carousel {
  width: 100%;
  /* height: 400px; */
}
.bannerImg {
  width: 100%;
  height: 100%;
}
.announce {
  margin-top: 10px;
  padding: 5px;
  font-size: 18px;
  text-align: left;
  border: 2px solid red;
}
.el-collapse {
  text-align: left;
}

.title01 {
  width: 100%;
  height: 40px;
}
.introduction {
  display: none;
}
.div01:hover .introduction {
  display: block;
}
.div01 {
  text-align: left;
  border-bottom: 1px solid lightgrey;
  line-height: 40px;
}
</style>

<script>
import Card from "../../components/honestInfo/IndexCard";
export default {
  name: "Index",
  data() {
    return {
      carouselSrc: [
        require("@/assets/image/banner01.jpg"),
        require("@/assets/image/banner02.jpg"),
        require("@/assets/image/banner03.jpg"),
      ],
      activeCollapse: "1",
    };
  },
  components: {
    Card,
  },
};
</script>