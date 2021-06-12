<template>
  <div id="pan-header">
    <el-image class="logo" :src="require('@/assets/image/log_400x400.jpeg')"></el-image>
    <el-menu
      :default-active="navActiveIndex"
      class="el-menu-demo main-menu"
      mode="horizontal"
      active-text-color="#ffd04b">
      
      <el-menu-item index="1">
        <router-link :to="{ name: 'PanIndex' }">うさちゃんホーム</router-link>
      </el-menu-item>
      
      <el-submenu index="2">
        <template slot="title">うさちゃん特徴</template>
        <router-link :to="{ name: 'Company' }">
          <el-menu-item index="2-1">うさちゃん健康</el-menu-item>
        </router-link>
        <el-menu-item index="2-2">うさちゃん2</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">うさちゃん紹介</template>
        <router-link :to="{ name: 'Service' }">
          <el-menu-item index="3-1">うさちゃん消化</el-menu-item>
        </router-link>
        <el-menu-item index="3-2">うさちゃん2</el-menu-item>
      </el-submenu>

      <el-menu-item index="4">うさちゃんお問い合わせ</el-menu-item>
    </el-menu>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#honest-header {
  position: relative;
}
.logo {
  width: 75px;
  height: 75px;
  position: absolute;
  left: 20px;
  top: 10px;
}
.main-menu {
  width: 80%;
  height: 60px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>

<script>
export default {
  name: "PanHeader",
  data() {
    return {
      navActiveIndex: "1",
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key+"----"+keyPath);
    // }
  },
};
</script>