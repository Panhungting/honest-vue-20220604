<template>
  <div id="app">
    <router-view />
    <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
  name: "App",
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
