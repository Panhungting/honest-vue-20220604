<template>
  <div id="heading-banner">
    <div class="banner-box">
      <div class="des">{{ items[currentNav].itemName }}</div>
      <el-image
        class="banner-img"
        :src="items[currentNav].bannerUrl"
      ></el-image>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(breadcrumb, i) in items[currentNav].breadcrumb"
        :key="i"
        :to="{ name: breadcrumb.pathName }"
        >{{ breadcrumb.name }}</el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item>会社概要</el-breadcrumb-item> -->
    </el-breadcrumb>
    <h1>占个位{{this.$store.state.navIndex}}={{currentNav}}</h1>
  </div>
</template>
<style scoped>
.banner-box {
  width: 100%;
  height: 200px;
}
.des {
  float: left;
  width: 20%;
  height: 100%;
  background-color: pink;
  font-size: 30px;
  text-align: center;
  line-height: 200px;
}
.banner-img {
  width: 80%;
  height: 100%;
}
.el-breadcrumb {
  margin: 10px 0 10px;
}
h1 {
  width: 100%;
  height: 150px;
  font-size: 50px;
  background-color: lightblue;
  text-align: center;
  line-height: 150px;
  margin: 0;
}
</style>
<script>
export default {
  name: "DetailsBanner",
  data() {
    return {
      items: [
        {
          itemName: "会社概要",
          bannerUrl: require("@/assets/image/mainImg01.jpg"),
          breadcrumb: [
            { name: "ホーム", pathName: "HonestInfo" },
            { name: "会社案内", pathName: "" },
            { name: "会社概要", pathName: "" },
          ],
        },
        {
          itemName: "事業内容",
          bannerUrl: require("@/assets/image/mainImg02.jpg"),
          breadcrumb: [
            { name: "ホーム", pathName: "HonestInfo" },
            { name: "事業内容", pathName: "" },
            { name: "事業内容", pathName: "" },
          ],
        },
      ],
    };
  },
  created() {
    // this.getParams();
  },
  computed: {
    currentNav() {
      return this.$store.state.navIndex - 1;
    }
  },
  watch: {
    // "this.$store.state.navIndex" () {
    //   this.currentNav = this.$store.getters.navIndex
    // }
  }
};
</script>