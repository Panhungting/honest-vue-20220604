<template>
  <div id="footer">
    <div class="footer-nav">
      <ul v-for="i in 6" v-bind:key="i">
        <li class="f-nav-title">
          <span>会社概要</span>
        </li>
        <li class="f-nav-branch">选项1</li>
        <li class="f-nav-branch">选项2</li>
      </ul>
    </div>
    <div class="copyright">Copyright(c) 2019 Honest-Info, Inc. All Rights Reserved.</div>
  </div>
</template>
<style scoped>
li {
  list-style: none;
}
#footer {
  /* width: 100%; */
  height: 180px;
  padding-top: 20px;
  background-color: #aaa;
  text-align: left;
}
.footer-nav {
  width: 80%;
  height: 80%;
  margin: 0 auto;
}
.footer-nav ul {
  float: left;
  width: 18%;
  padding-left: 0;
}
.footer-nav ul:first-of-type {
  width: 10%;
}
.f-nav-branch {
  padding-left: 5px;
  font-size: 14px;
}
.copyright {
  text-align: center;
}
</style>
<script>
export default {
  name: "HonestFooter",
  data() {
    return {};
  },
};
</script>