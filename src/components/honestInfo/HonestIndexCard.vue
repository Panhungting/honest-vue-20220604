<template>
  <div class="card">
    <div class="card-block" v-for="o in 4" :key="o">
      <div class="card-img">
        <div class="cover">
          <p>日々進化するIT環境の中で、社員の技術力を磨きつつ、お客様のニーズに融合させ、共に発展し続けていける企業を目指します.</p>
        </div>
        <el-image :src="require('@/assets/image/company.jpg')" fit="cover "></el-image>
      </div>
      <div class="card-nav">
        <p>会社概要</p>
        <router-link :to="{ name: 'Company' }">
          <p class="link">詳細を確認する</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  margin-top: 20px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.card-block {
  width: 22%;
  background-color: pink;
}
.card-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: none;
}
.card-img:hover .cover {
  display: block;
}
.card-nav {
  height: 80px;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.card-nav p {
  font-size: 30px;
  color: #fff;
  text-align: center;
  /* line-height: 70px; */
  margin: 0 auto;
}
.card-nav .link {
  margin: 0;
  font-size: 14px;
  /* line-height: 20px; */
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.cover p {
  font-size: 10px;
  color: #fff;
  text-align: left;
  padding: 10px;
  line-height: 20px;
}
</style>
<script>
export default {
  name: 'HonestCard',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>