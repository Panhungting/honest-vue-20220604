<template>
  <div id="banner" style="height:100%">
    <el-container>
      <el-header>
        <honest-header></honest-header>
      </el-header>
      <el-main>
        <details-banner></details-banner>
        <details-content></details-content>
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
import DetailsBanner from "../../components/DetailsBanner";
import DetailsContent from "../../components/DetailsContent";
export default {
  components: {
    HonestHeader,
    HonestFooter,
    DetailsBanner,
    DetailsContent,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
};
</script>