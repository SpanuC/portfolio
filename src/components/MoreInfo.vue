<template>
  <div class="body">
    <div
      class="line"
      v-motion
      :initial="{ scale: 0 }"
      :visibleOnce="{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1500,
          ease: 'ease-out',
        },
      }"
    />
    <div class="text-container">
      <a
        class="info"
        href="https://github.com/SpanuC/Shopping-Website"
        v-motion
        :initial="{ y: 100, opacity: 0 }"
        :visibleOnce="{
          y: 0,
          opacity: 1,
          transition: {
            y: { duration: 200 },
            ease: 'ease-in',
          },
        }"
      >
        More info
        <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" />
      </a>
    </div>
    <div
      class="line"
      v-motion
      :initial="{ scale: 0 }"
      :visibleOnce="{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1500,
          ease: 'ease-out',
        },
      }"
    />
  </div>
</template>

<script>
export default {
  name: "MoreInfo",
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 25vh;
  z-index: 1;
  .line {
    width: 100%;
    height: 1px;
    background: rgb(146, 146, 146);
    position: relative;
  }
  .text-container {
    width: 100%;
    height: 25vh;
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: center;
    .info {
      font-size: 3em;
      font-family: "HelveticaNowDisplay-Bold", sans-serif;
      margin-left: auto;
      margin-right: auto;
      color: rgb(222, 222, 222);
      display: flex;
      position: relative;
      align-self: center;
      letter-spacing: 0.1em;
      z-index: 3;
      text-decoration: none;
      transition: all 0.5s;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: rgb(255, 255, 255);
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 300ms ease;
      }

      &:hover {
        --color: rgb(255, 255, 255);
        &::after {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
    .arrow {
      margin-left: 0.5em;
      transform: rotateZ(-45deg);
    }
  }
}

// Small devices (landscape phones,0 to 576px)
@media (min-width: 0px) and (max-width: 575.98px) {
  .body {
    .text-container {
      .info {
        font-size: 1.8em;
      }
    }
  }
}

// Medium devices (tablets,576px to 768px)
@media (min-width: 576px) and (max-width: 767.98px) {
  .body {
    .text-container {
      .info {
        font-size: 2.1em;
      }
    }
  }
}

// Large devices (desktops,768px to 992px)
@media (min-width: 768px) and (max-width: 991.99px) {
  .body {
    .text-container {
      .info {
        font-size: 2.6em;
      }
    }
  }
}
</style>
