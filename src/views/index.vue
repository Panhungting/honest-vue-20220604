<template>
  <div>
    <el-container>
      <el-main>
        <el-carousel :interval="5000" arrow="hover">
          <el-carousel-item v-for="carousel in carouselSrc" :key="carousel">
            <el-image :src="carousel" class="bannerImg"></el-image>
          </el-carousel-item>
        </el-carousel>
        <div class="news">
          {{ news }}
        </div>
        <el-collapse v-model="activeCollapse">
          <el-collapse-item
            :title="coll.title"
            :name="coll.name"
            v-for="coll in collapseData"
            :key="coll.title"
          >
            <div>{{ coll.content }}</div>
          </el-collapse-item>
        </el-collapse>
        <div class="card">
          <div class="card-block" v-for="info in cardData" :key="info.title">
            <div class="card-img">
              <div class="cover">
                <p>{{ info.content }}</p>
              </div>
              <el-image :src="info.imgUrl"></el-image>
            </div>
            <div class="card-nav">
              <p>{{ info.title }}</p>
              <router-link :to="{ name: info.link }">
                <p class="link">詳細を確認する>></p>
              </router-link>
            </div>
          </div>
        </div>
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
.news {
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
  font-size: 12px;
  color: #fff;
  text-align: left;
  padding: 10px;
  line-height: 20px;
}
</style>

<script>
import { indexData } from "../common/data";
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
      news: "",
      cardData: [],
      collapseData: [],
    };
  },
  created() {
    this.news = indexData.news;
    this.cardData = indexData.cardData;
    this.collapseData = indexData.collapseData;
  },
};
</script>