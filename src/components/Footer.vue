<template>
  <div class="body">
    <span class="h1">Let's be internet BFFs</span>
    <div class="simbols">
      <a href="https://github.com/SpanuC">
        <font-awesome-icon class="simbol" icon="fa-brands fa-github" />
      </a>
      <a href="https://t.me/spanuc">
        <font-awesome-icon class="simbol" icon="fa-brands fa-telegram" />
      </a>
      <a href="https://ro.linkedin.com/in/spanu-claudiu">
        <font-awesome-icon class="simbol" icon="fa-brands fa-linkedin" />
      </a>
      <a href="https://open.spotify.com/user/vrfi7rhvgcds9ko9gclp9bbxc">
        <font-awesome-icon class="simbol" icon="fa-brands fa-spotify" />
      </a>
    </div>
    <span class="copyright"
      >hello@spanuc.com
      <font-awesome-icon icon="fa-regular fa-copyright" /> Spanu Claudiu, All
      Rights Reserved</span
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.body {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  width: 100%;
  height: 50vh;
  z-index: 1;
  color: white;
  align-items: center;

  .h1 {
    text-align: center;
    font-size: 2.1em;
    font-family: "HelveticaNowDisplay-Regular", sans-serif;
    margin-left: auto;
    margin-right: auto;
    color: rgb(112, 112, 112);
    display: inline-block;
    position: relative;
    // letter-spacing: 0.0em;
    width: 100%;
    font-weight: bold;
    z-index: 3;
    pointer-events: none;
    transition: transform 0.1s linear;
    align-self: center;
  }

  .simbols {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-top: 0.3em;
    a {
      text-decoration: none;
      overflow: hidden;
    }
    .simbol {
      font-size: 2.2em;
      margin: 0 0.2em;
      display: flex;
      position: relative;
      align-self: center;
      letter-spacing: 0.1em;
      z-index: 3;
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color: rgb(153, 153, 153);
      &:hover {
        scale: 0.9;
        color: rgb(255, 255, 255);
      }
    }
  }
  .copyright {
    font-size: 0.8em;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    align-self: center;
    width: 100%;
    z-index: 1;
    color: rgb(145, 145, 145);
  }
}

// Small devices (landscape phones,0 to 576px)
@media (min-width: 0px) and (max-width: 575.98px) {
  .body {
    width: 100%;
    overflow-y: hidden;
    .h1 {
      margin-top: 3em;
      font-size: 1.5em;
    }
    .simbols {
      .simbol {
        font-size: 1.8em;
      }
    }
  }
}

// Medium devices (tablets,576px to 768px)
@media (min-width: 576px) and (max-width: 767.98px) {
  .body {
    width: 100%;
    overflow-y: hidden;
    .h1 {
      font-size: 1.8em;
    }
    .simbols {
      .simbol {
        font-size: 2em;
      }
    }
  }
}

// Large devices (desktops,768px to 992px)
@media (min-width: 768px) and (max-width: 991.99px) {
  .body {
    width: 100%;
    overflow-y: hidden;
    .h1 {
      font-size: 2.1em;
    }
    .simbols {
      .simbol {
        font-size: 2.2em;
      }
    }
  }
}
</style>
