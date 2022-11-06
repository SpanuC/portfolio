<template>
  <canvas class="webgl"></canvas>
</template>

<script>
import HiRender from "@/composables/headerThree";
export default {
  name: "Header",
  data() {
    this.$nextTick(function () {
      HiRender();
    });
    return {};
  },
};
</script>

<style scoped lang="scss">
.webgl {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
