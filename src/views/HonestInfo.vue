<template>
  <div>
    <el-container>
      <el-main>
        <details-container></details-container>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>

</style>
<script>
import DetailsContainer from "../components/DetailsContainer";
export default {
  name: "HonestInfo",
  data() {
    return {};
  },
  components: {
    DetailsContainer,
  },
};
</script>