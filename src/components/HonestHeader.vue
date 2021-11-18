<template>
  <div id="honest-header">
    <el-image
      class="logo"
      :src="require('@/assets/image/logo2.jpg')"
    ></el-image>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo main-menu"
      mode="horizontal"
      active-text-color="#4169e1"
    >
      <el-menu-item index="1">
        <router-link :to="{ name: 'Index' }" class="router-class">
          ホーム
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'Company' }" class="router-class">
          会社案内
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{ name: 'Service' }" class="router-class">
          事業内容
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="{ name: 'Recruit' }" class="router-class">
          採用情報
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link :to="{ name: 'Privacy' }" class="router-class">
          個人情報保護方針
        </router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link :to="{ name: 'Contact' }" class="router-class">
          お問い合わせ
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#honest-header {
  display: flex;
}
.logo {
  height: 50px;
  left: 2px;
  top: 10px;
}
.main-menu {
  width: 100%;
  height: 60px;
  margin-left: 40px;
}
.el-menu-item {
  font-size: 16px;
}
.el-menu-item:hover {
  /* font-size: 18px; */
  /* color: #4169e1; */
}
.router-class {
  height: 100%;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: "HonestHeader",
  data() {
    return {
      activeIndex: "1",
    };
  },

created() {
    this.getCurrentPath();
  },
  watch: {
    $route() {
      this.getCurrentPath();
    },
  },
  methods: {
    getCurrentPath() {
      console.log(this.$route.path);
      this.setNavIndex(this.$route.path);
    },
    setNavIndex(currentPath) {
      switch (currentPath) {
        case "/honestInfo":
          this.$store.commit("setNavIndex", 0);
          this.activeIndex = "1";
          break;
        case "/company":
          this.$store.commit("setNavIndex", 1);
          this.activeIndex = "2";
          break;
        case "/service":
          this.$store.commit("setNavIndex", 2);
          this.activeIndex = "3";
          break;
          case "/recruit":
          this.$store.commit("setNavIndex", 3);
          this.activeIndex = "4";
          break;
          case "/privacy":
          this.$store.commit("setNavIndex", 4);
          this.activeIndex = "5";
          break;
          case "/contact":
          this.$store.commit("setNavIndex", 5);
          this.activeIndex = "6";
          break;
        default:
          this.$store.commit("setNavIndex", 0);
          this.activeIndex = "1";
      }
    },
    // handleSelect(key, keyPath) {
    //   console.log(key+"----"+keyPath);
    // }
  },
 
};
</script>