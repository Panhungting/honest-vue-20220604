<template>
  <div class="card">
    <div class="card-block" v-for="o in 3" :key="o">
      <div class="card-img">
        <div class="cover">
          <p>日々進化する環境の中で、ウサギの飼いましょう！</p>
        </div>
        <!-- ループどうやって使いますか -->
        <el-image :src="require('@/assets/image/usagi/usagi-0-1.jpg')" fit="cover"></el-image>
      </div>
      <div class="card-nav">
        <!-- ループどうやって使いますか -->
        <!-- 
        <p>会社概要</p>
        -->
        <router-link :to="{ name: 'PanInfo' }">
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
  name: 'PanIndexCard',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>