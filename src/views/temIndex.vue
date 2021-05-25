<template>
  <div>
    <span style="margin-right:50px">go to
      <router-link :to="{name:'honestIndex'}"> {{index}} </router-link>
    </span>
    <span>go to<router-link :to="{name:'bgIndex'}"> back </router-link></span>
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