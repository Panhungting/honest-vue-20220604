<template>
  <div class="index">
    <div class="card-block" v-for="o in 4" :key="o">
      <div class="card-img">
        <div class="cover">
          <p>ひげ<br/>
             狭い場所の幅を計り、暗闇の中で道を見つけたりすることができます。
          </p>
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
.index {
  width: 100%;
  margin-top: 20px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: 'PanIndex',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>