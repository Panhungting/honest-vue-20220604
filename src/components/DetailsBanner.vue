<template>
  <div id="banner">
    <div class="banner-left">
      <div class="name">
        <div class="bannerName">{{ items[index].bannerName }}</div>
        <div class="englishName">{{ items[index].englishName }}</div>
      </div>
      <el-image
        class="banner-right"
        :src="items[index].bannerUrl"
      ></el-image>
    </div>
  </div>
</template>
<style scoped>
.banner-left {
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  background-color: #4c70db;
}
.name {
  float: left;
  width: 20%;  
  font-size: 30px;
  color:rgba(255, 255, 255, 0.877);
  box-sizing: border-box;
}
.name div {
  width: 100%;
}
.englishName {
  font-size: 18px;
}
.banner-right {
  width: 80%;
  height: 100%;
}
</style>

<script>
export default {
  name: "DetailsBanner",
  data() {
    return {
      items: [
        {
          bannerName: "会社概要",
          englishName: "Company",
          bannerUrl: require("@/assets/image/company.jpg"),
        },
        {
          bannerName: "事業内容",
          englishName: "Service",
          bannerUrl: require("@/assets/image/service.jpg"),
        },
        {
          bannerName: "採用情報",
          englishName: "Recruit",
          bannerUrl: require("@/assets/image/recruit.jpg"),
        },
        {
          bannerName: "個人情報保護方針",
          englishName: "Privacy Policy",
          bannerUrl: require("@/assets/image/privacy.jpg"),
        },
        {
          bannerName: "お問い合わせ",
          englishName: "Contact",
          bannerUrl: require("@/assets/image/contactus.jpg"),
        },
      ],
    };
  },
  computed: {
    index() {
      return this.$store.state.navIndex - 1;
    }
  },
};
</script>