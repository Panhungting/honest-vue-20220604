<template>
  <div style="height:100%">
    <el-main>
      <details-banner></details-banner>
      <details-content></details-content>
    </el-main>
  </div>
</template>
<script>
import DetailsBanner from "./DetailsBanner";
import DetailsContent from "./DetailsContent";
export default {
  name: 'DetailsContainer',
  data() {
    return {
      
      }
  },
  components: {
    DetailsBanner,
    DetailsContent,
  },
};
</script>