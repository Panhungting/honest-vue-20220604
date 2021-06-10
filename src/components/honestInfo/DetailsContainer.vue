<template>
  <div style="height: 100%">
    <details-banner></details-banner>
    <details-content></details-content>
  </div>
</template>
<script>
import DetailsBanner from "./DetailsBanner";
import DetailsContent from "./DetailsContent";
export default {
  name: "DetailsContainer",
  data() {
    return {};
  },
  components: {
    DetailsBanner,
    DetailsContent,
  },
};
</script>