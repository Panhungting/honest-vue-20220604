<template>
  <div style="height: 100%">
    <details-banner></details-banner>
    <table-content></table-content>
  </div>
</template>
<script>
import DetailsBanner from "./DetailsBanner";
import TableContent from "./TableContent";
export default {
  name: "DetailsContainer",
  data() {
    return {};
  },
  components: {
    DetailsBanner,
    TableContent,
  },
};
</script>