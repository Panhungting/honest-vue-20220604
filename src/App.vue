<template>
  <div id="app">
    <div class="main-container">
      <el-header>
        <honest-header></honest-header>
      </el-header>
      <router-view />
      <el-backtop></el-backtop>
    </div>
    <el-footer>
      <honest-footer></honest-footer>
    </el-footer>

    <!-- <div class="main-container">
      <router-view />
      <el-backtop></el-backtop>
    </div> -->
    
  </div>
</template>

<script>
import HonestHeader from "../src/components/HonestHeader";
import HonestFooter from "../src/components/HonestFooter";

export default {
  name: "App",
  components: {
    HonestHeader,
    HonestFooter,
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px auto;
  height: 100%; /* backtop父元素要设置高度 */
}
.main-container {
  max-width: 1300px;
  min-width: 800px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
.el-footer {
  margin: 0;
  padding: 0;
}
</style>

