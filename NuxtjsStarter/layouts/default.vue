<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: "NuxtjsStater - Vue Nuxt Template",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 500);
    });
  },
};
</script>