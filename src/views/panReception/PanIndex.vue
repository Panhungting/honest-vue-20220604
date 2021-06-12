<template>
  <div>
    <el-container>
      <el-header>
        <pan-header></pan-header>
      </el-header>
      <el-main>
        <honest-index v-if="this.$store.state.navIndex === 0"></honest-index>
        <details-container v-else></details-container>
        <!--
        <pan-index v-if="this.$store.state.navIndex === 0"></pan-index>
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
import HonestHeader from "../../components/HonestHeader";
import HonestFooter from "../../components/HonestFooter";
import HonestIndex from "../../components/honestInfo/HonestIndexContainer";
import DetailsContainer from "../../components/honestInfo/DetailsContainer"

import PanHeader from        "../../components/PanHeader";
import PanIndex from         "../../components/panInfo/PanIndexContainer";

import PanIndexAbove from "../../components/panInfo/PanIndexAbove";
import PanIndexUnder from "../../components/panInfo/PanIndexUnder";

export default {
  name: "PanIndex",
  data() {
    return {

    };
  },
  created() {
    //vue.jsの状態管理Vuexがわかる
    console.log (this.$store.state.navIndex);
  },
    components: {
    HonestHeader,
    HonestFooter,
    HonestIndex,
    DetailsContainer,

    PanHeader,
    PanIndex,


    PanIndexAbove,
    PanIndexUnder
  },
}
</script>