<template>
  <div class="body">
    <canvas class="webabout"></canvas>
    <div class="hover-this">
      <span class="h1">About</span>
    </div>
    <div class="body-content">
      <div class="text-container">
        <p class="summary">
          My name is Spanu Claudiu, and I have a passion for all things
          technology and design, from software engineering to UI/UX.
        </p>

        <p class="summary-small">
          These days my time is spent researching, prototyping, and coding.<br />
          In addition to my love of technology and design, I am also interested
          in education, history and gaming industry.
        </p>
        <p class="summary-small">
          I'm a passionate self-motivated web developer with half a year of
          experience building websites. I'm proficient with Vue, Express.js, and
          MongoDB.
        </p>
        <div class="second-container">
          <div class="container">
            <span class="title-front">Front End</span>
            <p class="text-paragraph">Vue</p>
            <p class="text-paragraph">Javascript</p>
            <p class="text-paragraph">Typescript</p>
            <p class="text-paragraph">Three.js</p>
            <p class="text-paragraph">SCSS</p>
          </div>
          <div class="container">
            <span class="title-front">Back End</span>
            <p class="text-paragraph">Node.js</p>
            <p class="text-paragraph">Express.js</p>
            <p class="text-paragraph">MongoDB</p>
          </div>
          <div class="container">
            <span class="title-front">Design Tools</span>
            <p class="text-paragraph">Figma</p>
            <p class="text-paragraph">Photoshop</p>
            <p class="text-paragraph">After Effects</p>
          </div>
        </div>
      </div>
      <div class="empty"></div>
    </div>
  </div>
</template>

<script>
import aboutThree from "@/composables/aboutThree";
export default {
  data() {
    this.$nextTick(function () {
      aboutThree();
    });
    return {};
  },
};
</script>

<style scoped lang="scss">
.webabout {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.body {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 90vh;
  z-index: 1;
  color: white;
  align-self: center;
  .h1 {
    text-align: center;
    font-size: 4em;
    font-family: "Megistica", sans-serif;
    margin-left: auto;
    margin-right: auto;
    color: rgb(232, 232, 232);
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
    margin-top: 2em;
    transition: all 0.3s ease;
    overflow: hidden;
    width: 30vw;
    height: 15vh;
    min-width: 30vw;
    min-height: 15vh;
    display: flex;
    justify-content: center;
    align-self: center;
    z-index: 3;
  }
  .body-content {
    display: flex;
    flex-direction: row;
    align-items: top;
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .text-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      align-self: center;
      .summary {
        text-align: right;
        font-size: 1.5em;
        font-family: "HelveticaNowDisplay-Bold", sans-serif;
        color: rgb(231, 231, 231);
        display: inline-block;
        position: relative;
        letter-spacing: 0.01em;
        width: 70%;
        z-index: 3;
        text-shadow: 2px 2px 0px black;
        padding-bottom: 3em;
      }
      .summary-small {
        text-align: left;
        font-size: 1.2em;
        font-family: "HelveticaNowDisplay-Regular", sans-serif;
        color: rgb(173, 173, 173);
        display: block;
        position: relative;
        letter-spacing: 0.02em;
        width: 70%;
        padding-bottom: 1em;
        z-index: 3;
        text-shadow: 2px 2px 0px black;
      }
      .second-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: top;
        position: relative;
        width: 100%;
        z-index: 1;
        padding-top: 3em;
        .title-front {
          text-align: left;
          font-size: 1.5em;
          font-family: "HelveticaNowDisplay-Bold", sans-serif;
          color: rgb(246, 246, 246);
          display: block;
          position: relative;
          letter-spacing: 0.05em;
          z-index: 3;
          text-shadow: 2px 2px 0px black;
          white-space: nowrap;
        }
        .text-paragraph {
          font-size: 1.1em;
          font-family: "HelveticaNowDisplay-Regular", sans-serif;
          color: rgb(196, 196, 196);
          display: flex;
          align-items: flex-end;
          position: relative;
          letter-spacing: 0.05em;
          z-index: 3;
          text-shadow: 2px 2px 0px black;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: top;
          position: relative;
          z-index: 1;
          margin: 0 2em;
        }
      }
    }
    .empty {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: top;
      top: 0;
      width: 60%;
      height: 100%;
      z-index: 1;
      align-self: left;
    }
  }
}

// Small devices (landscape phones,0 to 576px)
@media (min-width: 0px) and (max-width: 575.98px) {
  .webabout {
    display: none;
  }

  .body {
    .h1 {
      font-size: 2em;
    }
    .hover-this {
      width: 100%;
      min-width: 100%;
    }
    .body-content {
      .empty {
        display: none;
      }
      .text-container {
        .summary {
          font-size: 1.1em;
          width: 95%;
          text-align: center;
        }
        .summary-small {
          margin-left: 0;
          margin-top: 0.5em;
          font-size: 0.9em;
          width: 85%;
          text-align: center;
        }
        .second-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 1em;
          .title-front {
            margin: 0.8em 0 0.2em 0;
            padding: 0;
            font-size: 1.2em;
            text-align: center;
          }
          .text-paragraph {
            margin: 0;
            padding: 0;
            font-size: 1em;
            align-self: center;
          }
        }
      }
    }
  }
}

// Medium devices (tablets,576px to 768px)
@media (min-width: 576px) and (max-width: 767.98px) {
  .webabout {
    display: none;
  }

  .body {
    .h1 {
      font-size: 2em;
    }
    .hover-this {
      width: 100%;
      min-width: 100%;
    }
    .body-content {
      .empty {
        display: none;
      }
      .text-container {
        .summary {
          font-size: 1.1em;
          width: 95%;
          text-align: center;
        }
        .summary-small {
          margin-left: 0;
          margin-top: 0.5em;
          font-size: 0.9em;
          width: 85%;
          text-align: center;
        }
        .second-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 1em;
          .title-front {
            margin: 0.8em 0 0.2em 0;
            padding: 0;
            font-size: 1.2em;
            text-align: center;
          }
          .text-paragraph {
            margin: 0;
            padding: 0;
            font-size: 1em;
            align-self: center;
          }
        }
      }
    }
  }
}

// Large devices (desktops,768px to 992px)
@media (min-width: 768px) and (max-width: 991.99px) {
  .body {
    .h1 {
      font-size: 4em;
    }
    .hover-this {
      width: 100%;
      min-width: 100%;
    }
    .body-content {
      .empty {
        width: 60%;
      }
      .text-container {
        .summary {
          font-size: 1.5em;
          width: 95%;
        }
        .summary-small {
          margin-left: 0;
          margin-top: 0.5em;
          font-size: 1.1em;
          width: 85%;
        }
        .second-container {
          display: flex;
          flex-direction: row;
          padding-top: 1em;
          .title-front {
            margin: 0.8em 0 0.2em 0;
            padding: 0;
            font-size: 1.5em;
            text-align: center;
            white-space: nowrap;
          }
          .text-paragraph {
            margin-left: 0.5em;
            padding: 0;
            font-size: 1.2em;
          }
          .container {
            padding: 0 2em;
          }
        }
      }
    }
  }
}
</style>
