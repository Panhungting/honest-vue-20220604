<template>
  <div id="banner">
    <div class="banner-left">
      <div class="name">
        <div class="bannerName">{{ items.bannerName }}</div>
        <div class="englishName">{{ items.englishName }}</div>
      </div>
      <el-image
        class="banner-right"
        :src="items.bannerUrl"
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
  props: ['items'],
  data() {
    return {
    };
  },
  
};
</script>