<template>
  <div>
    <el-container>
      <el-main>
        <div style="height: 100%">
          <details-banner :items="detailsData[i].items"></details-banner>
          <table-company v-if="i===0"></table-company>
          <table-service v-else-if="i===1"></table-service>
          <table-recruit v-else-if="i===2"></table-recruit>
          <table-privacy v-else-if="i===3"></table-privacy>
          <table-contact v-else-if="i===4"></table-contact>  
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import DetailsBanner from "../components/DetailsBanner";
import TableCompany from '../components/TableCompany';
import TableService from '../components/TableService';
import TablePrivacy from '../components/TablePrivacy';
import TableRecruit from '../components/TableRecruit';
import TableContact from '../components/TableContact';
import {detailsData} from '../common/data';
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
    TableCompany,
    TableService,
    TableRecruit,
    TablePrivacy,
    TableContact,
  },
};
</script>
