<template>
  <div id="app">
    <router-view />
    <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
  name: "App",
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
      console.log (this.$route.path);
      this.setNavIndex(this.$route.path);
    },
    setNavIndex(currentPath) {
      switch (currentPath) {
        case "/honestInfo":
          this.$store.commit('newNavIndex', 0);
          break;
        case "/company":
          this.$store.commit('newNavIndex', 1);
          // this.$store.state.navIndex = 1;
          break;
          case "/service":
          this.$store.commit('newNavIndex', 2);
          // this.$store.state.navIndex = 2;
          break;
        default:
          this.$store.commit('newNavIndex', 0);
          // this.$store.state.navIndex = 0;
      }
    },

  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  height: 100%;  /* backtop父元素要设置高度 */
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
::-webkit-scrollbar {display:none}
</style>

