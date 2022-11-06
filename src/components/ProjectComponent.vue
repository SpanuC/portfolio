<template>
  <div class="container">
    <img
      class="heroProject"
      @click="gotoWebsite()"
      src="@/assets/Project/project-1/Website.jpg"
    />
    <div class="text-container">
      <p class="tehnologies">Vue, Vuex, CSS</p>
      <p class="summary">
        A front end clothing store. <br />
        Allows users to browse, add, and remove items from their cart.
      </p>

      <a class="preview" href="https://github.com/SpanuC/Shopping-Website">
        Preview
        <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  methods: {
    gotoWebsite() {
      let route = "https://github.com/SpanuC";
      window.open(route);
    },
  },
};
</script>

<style scoped lang="scss">
$title: rgb(222, 222, 222);
$summary: rgb(196, 196, 196);

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-self: center;
  .heroProject {
    position: absolute;
    width: inherit;
    height: inherit;
    max-width: 45vw;
    max-height: 52vh;
    object-fit: cover;
    display: block;
    align-self: center;
    transition: 0.5s;
    filter: brightness(80%);
    z-index: 3;
    cursor: pointer;
    transform: translate(-25%, -7%);

    &:hover {
      max-width: 40vw;
      max-height: 47vh;
    }
  }

  .text-container {
    width: 35vw;
    height: 52vh;
    position: absolute;
    color: white;
    transform: translate(63%, -23%);
    z-index: 4;
    align-self: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .tehnologies {
      text-align: center;
      font-size: 1em;
      font-family: "ay-Regular", sans-serif;
      margin-left: 2em;
      margin-top: 0.5em;
      color: $summary;
      display: flex;
      align-items: flex-end;
      position: relative;
      letter-spacing: 0.1em;
      z-index: 3;
      text-shadow: 2px 2px 0px black;
      white-space: nowrap;
      transition: font-size 0.6s;
    }
    .summary {
      text-align: left;
      font-size: 1.3em;
      font-family: "HelveticaNowDisplay-Bold", sans-serif;
      margin-left: 3em;
      margin-top: 5em;
      color: $title;
      display: block;
      position: relative;
      letter-spacing: 0.05em;
      width: 30vw;
      z-index: 3;
      text-shadow: 2px 2px 0px black;
      transition: transform 0.6s;
    }
    .preview {
      font-size: 1.2em;
      font-family: "HelveticaNowDisplay-Bold", sans-serif;
      margin-left: 5em;
      margin-right: auto;
      color: $title;
      display: flex;
      position: absolute;
      bottom: 0;
      letter-spacing: 0.1em;
      z-index: 3;
      text-decoration: none;
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
      .arrow {
        margin-left: 0.5em;
        transform: rotateZ(-45deg);
      }
    }
  }
}

// Small devices (landscape phones,0 to 576px)
@media (min-width: 0px) and (max-width: 575.98px) {
  .container {
    display: flex;
    flex-direction: column;
    .heroProject {
      position: relative;
      transform: translate(0, 0);
      align-self: center;
      max-width: 85vw;
      max-height: 52vh;
      &:hover {
        max-width: 73vw;
        max-height: 47vh;
      }
    }
    .text-container {
      width: 100%;
      height: auto;
      align-items: center;
      position: relative;
      transform: translate(0, 0);
      justify-content: start;
      .tehnologies {
        margin: 0.5em 0 0 0;
        align-items: initial;
        font-size: 0.9em;
      }
      .summary {
        margin: 1.5em 0 0 0;
        // align-items: initial;
        font-size: 1.1em;
        width: 70vw;
      }
      .preview {
        display: flex;
        position: relative;
        align-self: flex-end;
        font-size: 1em;
        margin: 1em 4em 0 0;
      }
    }
  }
}

// Medium devices (tablets,576px to 768px)
@media (min-width: 576px) and (max-width: 767.98px) {
  .container {
    display: flex;
    flex-direction: column;
    .heroProject {
      position: relative;
      transform: translate(0, 0);
      align-self: center;
      max-width: 85vw;
      max-height: 52vh;
      &:hover {
        max-width: 73vw;
        max-height: 47vh;
      }
    }
    .text-container {
      width: 100%;
      height: auto;
      align-items: center;
      position: relative;
      transform: translate(0, 0);
      justify-content: start;
      .tehnologies {
        margin: 0.5em 0 0 0;
        align-items: initial;
        font-size: 0.9em;
      }
      .summary {
        margin: 1.5em 0 0 0;
        font-size: 1.2em;
        width: 70vw;
      }
      .preview {
        display: flex;
        position: relative;
        align-self: flex-end;
        font-size: 1.1em;
        margin: 1em 4em 0 0;
      }
    }
  }
}

// Large devices (desktops,768px to 992px)
@media (min-width: 768px) and (max-width: 992px) {
  .container {
    display: flex;
    .heroProject {
      max-width: 60vw;
      max-height: 52vh;
      &:hover {
        max-width: 53vw;
        max-height: 47vh;
      }
    }
    .text-container {
      width: 100%;
      transform: translate(60%, -25%);
      .tehnologies {
        margin: 0;
        align-items: initial;
        font-size: 0.9em;
      }
      .summary {
        margin-left: 1em;
        margin-top: 4em;
        font-size: 1.1em;
      }
      .preview {
        font-size: 1.1em;
        margin-left: 2em;
      }
    }
  }
}

// Extra Large devices (Large desktops,768px to 992px)
@media (min-width: 992px) and (max-width: 1200px) {
  .container {
    display: flex;
    .heroProject {
      max-width: 60vw;
      max-height: 52vh;
      &:hover {
        max-width: 53vw;
        max-height: 47vh;
      }
    }
    .text-container {
      width: 100%;
      transform: translate(60%, -25%);
      .tehnologies {
        margin: 0;
        align-items: initial;
        font-size: 0.9em;
      }
      .summary {
        margin-left: 1em;
        margin-top: 5em;
        font-size: 1.2em;
      }
      .preview {
        font-size: 1.1em;
        margin-left: 2em;
      }
    }
  }
}
// Extra Very Large devices (Very Large desktops,768px to 992px)
@media (min-width: 1200px) and (max-width: 1400px) {
  .container {
    display: flex;
    .heroProject {
      max-width: 60vw;
      max-height: 52vh;
      &:hover {
        max-width: 53vw;
        max-height: 47vh;
      }
    }
  }
}
</style>
