<template>
  <div class="pageLoader" v-if="!isLoaded">
    <div class="loader">
      <div class="pointer"></div>
      <div class="loader-item"></div>
      <div class="loader-item"></div>
      <div class="loader-item"></div>
      <div class="loader-item"></div>
      <div class="loader-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete" || !this.isLoaded) {
        setTimeout(() => {
          this.isLoaded = true;
          document.documentElement.style.setProperty("--value", "initial");
        }, 2000);
      }
    };
  },
};
</script>

<style scoped lang="scss">
.pageLoader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(24, 24, 24);
  z-index: 999;

  .loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    perspective: 800px;
    .pointer {
      position: absolute;
      left: 0;
      top: 50%;
      right: 0;
      margin: auto;
      width: 5%;
      height: 5%;
      border-radius: 50%;
      transition: all 0.2s;
      background-color: #fff;
      animation: glow 2s 0s ease-out infinite;
      box-shadow: 0 0 4px 1px #caf0f8;
    }
    .loader-item {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;

      &:nth-child(1) {
        border-right: 6px solid #023e8a;
        transform: rotateX(35deg) rotateY(-25deg);
        animation: rotate-one 1s linear infinite;
      }
      &:nth-child(2) {
        border-bottom: 6px solid #0077b6;
        transform: rotateX(30deg) rotateY(-20deg);
        animation: rotate-two 1s linear infinite;
      }
      &:nth-child(3) {
        border-left: 6px solid #0096c7;
        transform: rotateX(24deg) rotateY(55deg);
        animation: rotate-three 1s linear infinite;
      }
      &:nth-child(4) {
        border-top: 6px solid #00b4d8;
        transform: rotateX(-50deg) rotateY(20deg);
        animation: rotate-four 1s linear infinite;
      }
      &:nth-child(5) {
        border-right: 6px solid #90e0ef;
        transform: rotateX(30deg) rotateY(-80deg);
        animation: rotate-five 1s linear infinite;
      }
    }
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 3px 5px rgba(26, 255, 179, 0), 0 0 0px 0px #333,
      0 0 0px 0px rgba(26, 255, 179, 0);
  }
  10% {
    box-shadow: 0 0 3px 5px #caf0f8, 0 0 7px 6px #333, 0 0 7px 6px #caf0f8;
  }
}

@keyframes rotate-one {
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  to {
    transform: rotateX(30deg) rotateY(-20deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  to {
    transform: rotateX(24deg) rotateY(55deg) rotateZ(360deg);
  }
}

@keyframes rotate-four {
  to {
    transform: rotateX(-50deg) rotateY(20deg) rotateZ(360deg);
  }
}

@keyframes rotate-five {
  to {
    transform: rotateX(30deg) rotateY(-80deg) rotateZ(360deg);
  }
}
</style>
