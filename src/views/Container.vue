<template>
  <div class="main-container">
    <el-header>
      <honest-header></honest-header>
    </el-header>

    <el-footer>
      <honest-footer></honest-footer>
    </el-footer>
  </div>
</template>

<script>
import HonestHeader from "../components/HonestHeader.vue";
import HonestFooter from "../components/HonestFooter";

export default {
  components: {
    HonestHeader,
    HonestFooter,
  },
};
</script>