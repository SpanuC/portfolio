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
    <div class="hover-this">
      <span class="h1">Projects</span>
    </div>
    <Project1 />
  </div>
</template>

<script>
import Project1 from "@/components/ProjectComponent.vue";
import cursor from "@/composables/textTransform";
export default {
  components: { Project1 },
  name: "Body",
  setup() {
    cursor();
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
  height: 100vh;
  z-index: 1;
  .line {
    width: 100%;
    height: 1px;
    background: rgb(146, 146, 146);
    position: relative;
  }

  .h1 {
    text-align: center;
    font-size: 4em;
    font-family: "Megistica", sans-serif;
    margin-left: auto;
    margin-right: auto;
    color: rgb(246, 246, 246);
    display: inline-block;
    position: relative;
    letter-spacing: 0.15em;
    width: 100%;
    font-weight: bold;
    z-index: 3;
    pointer-events: none;
    transition: transform 0.1s linear;
    align-self: center;
  }
  .hover-this {
    transition: all 0.3s ease;
    overflow: hidden;
    min-width: 30vw;
    min-height: 15vh;
    display: flex;
    justify-content: center;
    align-self: center;
  }
}

// Small devices (landscape phones,0 to 576px)
@media (min-width: 0px) and (max-width: 575.98px) {
  .body {
    .hover-this {
      .h1 {
        font-size: 1.8em;
      }
    }
  }
}

// Medium devices (tablets,576px to 768px)
@media (min-width: 576px) and (max-width: 767.98px) {
  .body {
    .hover-this {
      .h1 {
        font-size: 2.1em;
      }
    }
  }
}

// Large devices (desktops,768px to 992px)
@media (min-width: 768px) and (max-width: 991.99px) {
  .body {
    .hover-this {
      .h1 {
        font-size: 2.6em;
      }
    }
  }
}
// Extra Large devices (Large desktops,768px to 992px)
@media (min-width: 992px) and (max-width: 1119.99px) {
  .body {
    .hover-this {
      .h1 {
        font-size: 3em;
      }
    }
  }
}
</style>
