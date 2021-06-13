<template>
  <div>
    <span style="margin-right:50px">go to
      <router-link :to="{name:'HonestInfo'}"> {{index}} </router-link>
    </span>
    <span style="margin-right:50px">go to
      <router-link :to="{name:'BgIndex'}"> back </router-link>
    </span>
    <!-- 入口  次は src\router\index.js-->
    <span style="margin-right:50px">go to
      <router-link :to="{name:'PanInfo'}"> {{PanInfo}} </router-link>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "honestInfo",
      PanInfo: "PanInfo"
    }
  },
}
</script>