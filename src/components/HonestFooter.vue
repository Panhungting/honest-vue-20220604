<template>
  <div id="footer">
    <div class="footer-nav">
      <div>
        <router-link :to="{ name: 'Index' }" class="router-class">
          <span>ホーム</span><br>
          <span>Home</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Company' }" class="router-class">
          <span>会社案内</span><br>
          <span>Company</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Service' }" class="router-class">
          <span>事業内容</span><br>
          <span>Service</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Recruit' }" class="router-class">
          <span>採用情報</span><br>
          <span>Recruit</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Privacy' }" class="router-class">
          <span>個人情報保護方針</span><br>
          <span>Privacy Policy</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Contact' }" class="router-class">
          <span>お問い合わせ</span><br>
          <span>Contact</span>
        </router-link>
      </div>
    </div>
    <div class="copyright">Copyright(c) 2019 Honest-Info, Inc. All Rights Reserved.</div>
  </div>
</template>
<style scoped>
#footer {
  height: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
  /* background-color: #5ea0e2; */
  background-color: #4169e1;
}
.footer-nav {
  width: 60%;
  margin: 0 auto 40px;
  display: flex;;
  flex-direction: row;
}
.footer-nav div {
  flex: 1;
  font-size: 14px;
}
.footer-nav span {
  color: rgba(255, 255, 255, 0.877);
}
.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.877);
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