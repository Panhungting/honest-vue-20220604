<template>
  <div id="honest-header">
    <el-image class="logo" :src="require('@/assets/image/logo.png')"></el-image>
    <el-menu
      :default-active="navActiveIndex"
      class="el-menu-demo main-menu"
      mode="horizontal"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link :to="{ name: 'HonestInfo', params: { item: 0 } }">ホーム</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">会社案内</template>
        <router-link :to="{ name: 'Company', params: { item: 1 } }">
          <el-menu-item index="2-1">会社概要</el-menu-item>
        </router-link>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">事業内容</template>
        <router-link :to="{ name: 'Service', params: { item: 2 } }">
          <el-menu-item index="3-1">事業内容</el-menu-item>
        </router-link>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">採用情報</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">個人情報保護方針</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">お問い合わせ</el-menu-item>
    </el-menu>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#honest-header {
  position: relative;
}
.logo {
  width: 45px;
  height: 45px;
  position: absolute;
  left: 2px;
  top: 10px;
}
.main-menu {
  width: 90%;
  height: 60px;
  margin-left: 50px;
}
</style>

<script>
export default {
  name: "HonestHeader",
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