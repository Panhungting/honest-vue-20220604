<template>
  <div>
    <el-container>
      <el-header>
        <honest-header></honest-header>
      </el-header>
      <el-main>
        <honest-index v-if="this.$store.state.navIndex === 0"></honest-index>
        <details-container v-else></details-container>
      </el-main>
      <el-footer>
        <honest-footer></honest-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HonestHeader from "../../components/HonestHeader";
import HonestFooter from "../../components/HonestFooter";
import HonestIndex from "../../components/honestInfo/HonestIndexContainer";
import DetailsContainer from "../../components/honestInfo/DetailsContainer"
export default {
  name: "HonestInfo",
  data() {
    return {

    };
  },
  created() {
    console.log (this.$store.state.navIndex);
  },
  components: {
    HonestHeader,
    HonestFooter,
    HonestIndex,
    DetailsContainer
  },
};
</script>