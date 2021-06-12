<template>
  <div>
    <el-carousel :interval="3000" arrow="hover">
      <el-carousel-item v-for="carousel in carouselSrc" :key="carousel">
        <el-image :src="carousel"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="announce">
      {{ announce }}
    </div>
    <el-collapse
      v-model="activeCollapse"
      class="elcollapse"
    >
      <el-collapse-item title="からだ" name="1">
        <div>
          ウサギは草食動物
        </div>
      </el-collapse-item>
      <el-collapse-item title="ひげ" name="2">
        <div>
          狭い場所の幅を計り、暗闇の中で道を見つけたりすることができます。
        </div>
        <div>詳細を確認する</div>
      </el-collapse-item>
      <el-collapse-item title="尻尾" name="3">
        <div>
          裏は基本的に白いです。
        </div>
        <div>詳細を確認する</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scope>
el-carousel {
  width: 1200px;
  height: 400px;
}
.announce {
  margin-top: 10px;
  padding: 5px;
  font-size: 18px;
  text-align: left;
  border: 2px solid red;
}
.elcollapse {
  text-align: left;
}
</style>
<script>
export default {
  name: 'PanIndexContainer',
  data() {
    return {
      carouselSrc: [
        require("@/assets/image/mainImg01.jpg"),
        require("@/assets/image/mainImg02.jpg"),
        require("@/assets/image/mainImg03.jpg"),
      ],
      activeCollapse: "1",
      announce:
        "当社では、新型ウサギ感染予防・拡大防止対策として、お打ち合わせ等で当社の事業所にご来社される方に対して、マスクの着用をお願いしております。 また、入室の際には当社事業所内に備え付けているアルコール消毒液による手指消毒も併せてお願いしております。ご理解・ご協力を賜りますようお願い申し上げます。",
    };
  },
  components: {
  },
}
</script>