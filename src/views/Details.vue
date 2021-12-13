<template>
  <div>
    <el-container>
      <el-main>
        <div style="height: 100%">
          <details-banner :items="detailsData[i].items"></details-banner>
          <table-content :tableData="detailsData[i].tableData"></table-content>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import DetailsBanner from "../components/DetailsBanner";
import TableContent from "../components/TableContent";
import {detailsData} from '../data/data'
export default {
  name: "Details",
  data() {
    return {
      detailsData: {},
    };
  },
  created() {
    this.detailsData = detailsData;
  },
  computed: {
    i() {
      return this.$store.state.navIndex - 1;
    },
  },
  components: {
    DetailsBanner,
    TableContent,
  },
};
</script>