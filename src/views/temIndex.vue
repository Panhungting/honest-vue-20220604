<template>
  <div>
    <span style="margin-right:50px">go to
      <router-link :to="{name:'HonestInfo'}"> {{index}} </router-link>
    </span>
    <span>go to<router-link :to="{name:'BgLogin'}"> back </router-link></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "honestInfo",
    }
  },
}
</script>