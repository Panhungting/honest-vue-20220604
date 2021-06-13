<template>
  <div>
    <el-container>
      <el-header>
        <pan-header></pan-header>
      </el-header>
      <el-main>
        <pan-index v-if="this.$store.state.navIndex === 0"></pan-index>
        <details-container v-else></details-container>
        <!--
        <honest-index v-if="this.$store.state.navIndex === 0"></honest-index>
        <details-container v-else></details-container>
         -->
      </el-main>
      <el-footer>
        <!-- <honest-footer></honest-footer> -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PanHeader     from "../../components/panInfo/PanHeader";
import PanIndex      from "../../components/panInfo/index/PanIndexContainer";
import PanIndexAbove from "../../components/panInfo/index/PanIndexAbove";
import PanIndexUnder from "../../components/panInfo/index/PanIndexUnder";

export default {
  name: "PanInfo",
  data() {
    return {

    };
  },
  created() {
    //vue.jsの状態管理Vuexがわかる
    console.log (this.$store.state.navIndex);
  },
    components: {
    PanHeader,
    PanIndex,

    PanIndexAbove,
    PanIndexUnder
  },
}
</script>